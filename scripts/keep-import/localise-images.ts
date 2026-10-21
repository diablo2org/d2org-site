/**
 * Copies images used by knowledge base articles into public/kb/img and rewrites the articles to use them.
 *
 *   npx tsx scripts/keep-import/localise-images.ts <path to backup public_html>
 *
 * Images come from the d2mods.info hosting backup when it has them. Images on dead hosts
 * (GameSpy, it-point) are looked up in the Wayback Machine. Live third-party hosts are left alone.
 * Run after export-kb.ts. Safe to re-run.
 */
import fs from "node:fs";
import path from "node:path";

const KB = path.join(process.cwd(), "content/kb");
const OUT = path.join(process.cwd(), "public/kb/img");
const DEAD = /(^|\.)gamespy\.com$|^phrozenkeep\.it-point\.com$/;
const KEEP = /(^|\.)d2mods\.info$/;
const IMAGE = /\.(png|gif|jpe?g|bmp|webp)$/i;

function walk(dir: string, visit: (p: string) => void, skip?: RegExp) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (!skip?.test(p)) walk(p, visit, skip);
    } else visit(p);
  }
}

function looksLikeImage(buf: Buffer) {
  const sig = buf.subarray(0, 4).toString("hex");
  return sig.startsWith("89504e47") || sig.startsWith("47494638") || sig.startsWith("ffd8ff") || sig.startsWith("424d");
}

async function wayback(url: string): Promise<Buffer | undefined> {
  // The CDX index is far less rate-limited than the availability API.
  const bare = url.replace(/^https?:\/\//, "");
  const cdx = `https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(bare)}&filter=statuscode:200&limit=1&output=json`;
  try {
    const rows = (await (await fetch(cdx)).json()) as string[][];
    const hit = rows[1];
    if (!hit) return undefined;
    const [, timestamp, original] = hit;
    // The id_ flag returns the original bytes without the Wayback toolbar.
    const res = await fetch(`https://web.archive.org/web/${timestamp}id_/${original}`);
    if (!res.ok) return undefined;
    const buf = Buffer.from(await res.arrayBuffer());
    return looksLikeImage(buf) ? buf : undefined;
  } catch {
    return undefined;
  }
}

/** Stable local path for a remote image: host and path, lowercased, safe characters only. */
function localPath(u: URL) {
  const clean = `${u.hostname.replace(/^www\./, "")}${decodeURIComponent(u.pathname)}`
    .toLowerCase()
    .replace(/[^a-z0-9._/-]+/g, "-");
  return clean;
}

async function main() {
  const site = process.argv[2];
  if (!site || !fs.existsSync(site)) throw new Error("Pass the path to the backup's public_html folder.");

  const byName = new Map<string, string[]>();
  walk(
    site,
    (p) => {
      if (!IMAGE.test(p)) return;
      const k = path.basename(p).toLowerCase();
      byName.set(k, [...(byName.get(k) ?? []), p]);
    },
    /forum\/cache$/,
  );

  const files: string[] = [];
  walk(KB, (p) => p.endsWith(".md") && files.push(p));

  // Old HTML articles link smilies relative to the forum root.
  for (const f of files) {
    const text = fs.readFileSync(f, "utf8");
    const fixed = text.replace(/\]\((?:\.\/)?images\/smiles\//g, "](https://d2mods.info/forum/images/smiles/");
    if (fixed !== text) fs.writeFileSync(f, fixed);
  }

  const urls = new Set<string>();
  for (const f of files)
    for (const m of fs.readFileSync(f, "utf8").matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)) urls.add(m[1]);

  const mapped = new Map<string, string>();
  const tally = { backup: 0, wayback: 0, missing: 0, external: 0 };
  const missing: string[] = [];

  for (const raw of urls) {
    let u: URL;
    try {
      u = new URL(raw);
    } catch {
      continue;
    }
    const keep = KEEP.test(u.hostname);
    const dead = DEAD.test(u.hostname);
    if (!keep && !dead) {
      tally.external++;
      continue;
    }

    let source: string | undefined;
    if (keep) {
      const direct = path.join(site, decodeURIComponent(u.pathname));
      if (fs.existsSync(direct)) source = direct;
    }
    if (!source) {
      const hits = byName.get(decodeURIComponent(u.pathname.split("/").pop() ?? "").toLowerCase());
      if (hits?.length === 1) source = hits[0];
    }

    const rel = localPath(u);
    const dest = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    if (source) {
      fs.copyFileSync(source, dest);
      tally.backup++;
    } else if (fs.existsSync(dest)) {
      tally.wayback++;
    } else {
      const buf = await wayback(raw);
      await new Promise((r) => setTimeout(r, 2500));
      if (!buf) {
        tally.missing++;
        missing.push(raw);
        continue;
      }
      fs.writeFileSync(dest, buf);
      tally.wayback++;
    }
    mapped.set(raw, `/kb/img/${rel}`);
  }

  let changed = 0;
  for (const f of files) {
    const before = fs.readFileSync(f, "utf8");
    const after = before.replace(/(!\[[^\]]*\]\()(https?:\/\/[^)\s]+)(\))/g, (m, a, url, b) =>
      mapped.has(url) ? `${a}${mapped.get(url)}${b}` : m,
    );
    if (after !== before) {
      fs.writeFileSync(f, after);
      changed++;
    }
  }

  console.log(`Images: ${urls.size} unique.`, tally, `${changed} articles rewritten.`);
  if (missing.length) console.log(`Not recovered:\n  ${missing.join("\n  ")}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
