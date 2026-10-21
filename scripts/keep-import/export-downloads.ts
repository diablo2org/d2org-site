/**
 * Exports the Phrozen Keep download library's metadata to a JSON manifest.
 *
 *   KEEP_DB_URL=mysql://... npx tsx scripts/keep-import/export-downloads.ts <out.json> [keep-files-dir] [azure-dir]
 *
 * keep-files-dir is a copy of the download system's upload folder (forum/ext/dmzx/downloadsystem/files).
 * azure-dir is a local copy of Necrolis's public Azure container, laid out by blob name.
 * Entries whose file is the shared "missing-readme.zip" placeholder usually link to an Azure copy
 * in their description; those are matched there. Every matched file gets a real size and SHA-256.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import mysql from "mysql2/promise";
import { decodeEntities, keepToMarkdown } from "./convert";

const PREFIX = process.env.KEEP_TABLE_PREFIX ?? "phrozenkeepv3_";
const PLACEHOLDER = "missing-readme.zip";

interface Cat {
  cat_id: number;
  parent_id: number;
  cat_name: string;
  cat_sub_dir: string;
}

function findFile(root: string, name: string): string | undefined {
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop()!;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) stack.push(p);
      else if (e.name === name) return p;
    }
  }
  return undefined;
}

async function main() {
  const [out, filesDir, azureDir] = process.argv.slice(2);
  if (!out) throw new Error("Usage: export-downloads.ts <out.json> [files-dir]");
  const url = process.env.KEEP_DB_URL;
  if (!url) throw new Error("Set KEEP_DB_URL to a restored copy of the Keep database.");
  const db = await mysql.createConnection({ uri: url, charset: "utf8mb4" });
  const [catRows] = await db.query(`SELECT cat_id, parent_id, cat_name, cat_sub_dir FROM ${PREFIX}dm_eds_cat`);
  const [rows] = await db.query(
    `SELECT download_id, download_title, download_filename, download_desc, download_version, download_cat_id,
            upload_time, last_changed_time, download_count
       FROM ${PREFIX}dm_eds ORDER BY download_id`,
  );
  await db.end();

  const cats = new Map((catRows as Cat[]).map((c) => [c.cat_id, c]));
  const catPath = (id: number): string[] => {
    const c = cats.get(id);
    if (!c) return [];
    return [...(c.parent_id ? catPath(c.parent_id) : []), decodeEntities(c.cat_name)];
  };
  const iso = (t: number) => (t > 0 ? new Date(t * 1000).toISOString().slice(0, 10) : undefined);

  const entries = (rows as Record<string, never>[]).map((r) => {
    const filename: string = r.download_filename;
    const missing = filename === PLACEHOLDER;
    const entry: Record<string, unknown> = {
      id: r.download_id,
      title: decodeEntities(r.download_title),
      category: catPath(r.download_cat_id),
      version: r.download_version || undefined,
      filename: missing ? undefined : filename,
      description: keepToMarkdown(r.download_desc ?? "").markdown || undefined,
      uploaded: iso(r.upload_time),
      changed: iso(r.last_changed_time),
      downloads: r.download_count,
      originalUrl: `https://d2mods.info/forum/downloadsystemdownload?id=${r.download_id}`,
      status: missing ? "missing" : "listed",
    };
    // Markdown link targets are either <with spaces> or have their brackets backslash-escaped.
    const azure = [
      ...String(entry.description ?? "").matchAll(
        /phrozenkeep\.blob\.core\.windows\.net\/public\/(?:([^>\n]+?)>\)|((?:\\[()]|[^)\s"])+))/g,
      ),
    ].map((m) => decodeURIComponent((m[1] ?? m[2]).replace(/\\([()])/g, "$1")));
    const external = [...String(entry.description ?? "").matchAll(/\]\((https?:\/\/(?:www\.)?(?:fileplanet\.com|phrozenkeep\.it-point\.com)[^)\s]*)\)/g)].map((m) => m[1]);

    let local: string | undefined;
    if (!missing && filesDir) {
      local = findFile(filesDir, filename);
      if (local) entry.source = "keep";
    }
    if (!local && azureDir) {
      for (const name of azure) {
        const p = path.join(azureDir, name);
        if (!name.includes("..") && fs.existsSync(p)) {
          local = p;
          entry.source = "azure";
          entry.azurePath = name;
          entry.filename = path.basename(name);
          break;
        }
      }
    }
    if (local) {
      const buf = fs.readFileSync(local);
      entry.bytes = buf.length;
      entry.sha256 = crypto.createHash("sha256").update(buf).digest("hex");
      entry.localPath = local;
      entry.status = "found";
    } else if (azure.length) {
      entry.status = "azure-not-pulled";
      entry.azurePath = azure[0];
    } else if (external.length) {
      entry.status = "dead-host";
      entry.deadLink = external[0];
    } else if (filesDir || azureDir) {
      entry.status = "lost";
    }
    for (const k of Object.keys(entry)) if (entry[k] === undefined) delete entry[k];
    return entry;
  });

  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, `${JSON.stringify(entries, null, 2)}\n`);
  const tally = entries.reduce<Record<string, number>>((t, e) => ((t[e.status as string] = (t[e.status as string] ?? 0) + 1), t), {});
  console.log(`Wrote ${entries.length} downloads to ${out}:`, tally);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
