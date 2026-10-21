/**
 * Writes the site's copy of the Phrozen Keep download library from the manifest export-downloads.ts made.
 *
 *   npx tsx scripts/keep-import/publish-downloads.ts <manifest.json>
 *
 * Drops local paths and the Keep's "external download" button images, and records where each file can be
 * fetched today. Writes data/keep-downloads.json.
 */
import fs from "node:fs";
import path from "node:path";

const AZURE = "https://phrozenkeep.blob.core.windows.net/public/";

interface ManifestEntry {
  id: number;
  title: string;
  category: string[];
  version?: string;
  filename?: string;
  description?: string;
  uploaded?: string;
  changed?: string;
  downloads?: number;
  originalUrl: string;
  status: string;
  source?: "keep" | "azure";
  azurePath?: string;
  bytes?: number;
  sha256?: string;
  deadLink?: string;
}

const manifest = process.argv[2];
if (!manifest) throw new Error("Usage: publish-downloads.ts <manifest.json>");
const entries = JSON.parse(fs.readFileSync(manifest, "utf8")) as ManifestEntry[];

const out = entries.map((e) => {
  const description = (e.description ?? "")
    .replace(/\[!\[[^\]]*\]\(https?:\/\/(?:www\.)?d2mods\.info\/buttons\/[^)]*\)\]\([^)]*\)/g, "")
    .replace(/!\[[^\]]*\]\(https?:\/\/(?:www\.)?d2mods\.info\/buttons\/[^)]*\)/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return {
    id: e.id,
    title: e.title,
    category: e.category,
    // Bare numbers ("148") and file sizes ("1.8 MB") in the Keep's version field aren't versions.
    version: e.version && !/^\d+$/.test(e.version) && !/\d\s*[KM]B$/i.test(e.version) ? e.version : undefined,
    filename: e.filename,
    description: description || undefined,
    uploaded: e.uploaded,
    changed: e.changed !== e.uploaded ? e.changed : undefined,
    keepDownloads: e.downloads,
    originalUrl: e.originalUrl,
    // What a visitor can do: download it now, wait for hosting, or not at all.
    status: e.status !== "found" ? "lost" : e.source === "azure" && e.azurePath ? "available" : "pending",
    source: e.status === "found" ? e.source : undefined,
    // Necrolis's public Azure container still serves these. Files only in the hosting backup have no public copy yet.
    url: e.status === "found" && e.source === "azure" && e.azurePath ? AZURE + e.azurePath.split("/").map(encodeURIComponent).join("/") : undefined,
    bytes: e.bytes,
    sha256: e.sha256,
    deadLink: e.deadLink,
  };
});

const file = path.join(process.cwd(), "data/keep-downloads.json");
fs.writeFileSync(file, `${JSON.stringify(out, null, 1)}\n`);
const tally = out.reduce<Record<string, number>>((t, e) => ((t[e.status] = (t[e.status] ?? 0) + 1), t), {});
console.log(`Wrote ${out.length} downloads to ${path.relative(process.cwd(), file)}:`, tally);
