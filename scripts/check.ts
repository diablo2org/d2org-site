/**
 * Content integrity checks. Run with `npm run check`.
 * Fails on cross-references that point at nothing and on internal links
 * in MDX that don't match a known page.
 */
import { communities } from "@/data/communities";
import { mods } from "@/data/mods";
import { servers } from "@/data/servers";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { getAllArticles } from "@/lib/content";
import { findBrokenRefs } from "@/lib/relationships";

const STATIC_PAGES = [
  "/", "/play", "/play/versions", "/mods", "/servers", "/tools", "/modding", "/knowledge",
  "/mechanics", "/technical", "/history", "/archive", "/search", "/community",
];

const known = new Set([
  ...STATIC_PAGES,
  ...getAllArticles().map((a) => a.href),
  ...communities.map((c) => `/community/${c.slug}`),
  ...mods.map((m) => `/mods/${m.slug}`),
  ...servers.map((s) => `/servers/${s.slug}`),
  ...tools.map((t) => `/tools/${t.slug}`),
  ...versions.map((v) => `/play/versions/${v.version}`),
]);

const problems: string[] = [];

for (const { from, to } of findBrokenRefs()) problems.push(`${from} relates to missing ${to}`);

for (const a of getAllArticles()) {
  for (const m of a.body.matchAll(/\]\((\/[^)#\s]*)/g)) {
    if (!known.has(m[1])) problems.push(`${a.file} links to unknown page ${m[1]}`);
  }
  if (!a.title || !a.summary) problems.push(`${a.file} is missing title or summary`);
}

if (problems.length) {
  console.error(`✕ ${problems.length} problem(s):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`✓ ${known.size} pages, all references resolve`);
