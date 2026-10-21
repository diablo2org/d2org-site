/**
 * Exports the Phrozen Keep knowledge base into content/kb.
 *
 *   KEEP_DB_URL=mysql://user:pass@127.0.0.1:3306/keep npx tsx scripts/keep-import/export-kb.ts
 *
 * Reads a restored copy of the Keep database, never production. Only published articles
 * (article_visibility = 1) are exported. Re-running replaces content/kb completely.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import mysql from "mysql2/promise";
import { CATEGORY_MAP } from "./categories";
import { decodeEntities, keepToMarkdown, keepToText } from "./convert";

const PREFIX = process.env.KEEP_TABLE_PREFIX ?? "phrozenkeepv3_";
const OUT = path.join(process.cwd(), "content/kb");
const REDIRECTS = path.join(process.cwd(), "data/keep-redirects.json");
const KB = "https://d2mods.info/forum/kb/";

interface Row {
  article_id: number;
  article_title: string;
  article_description: string;
  article_text: string;
  article_poster_name: string;
  article_time: number;
  article_edit_time: number;
  article_views: number;
  category_id: number;
}

const iso = (t: number) => (t > 0 ? new Date(t * 1000).toISOString().slice(0, 10) : undefined);

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/\.txt\b/g, "-txt")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80)
      .replace(/-+$/, "") || "article"
  );
}

/** A description that only credits authors ("by Nefarius, restyled by ...") is not a summary. */
function isCredit(d: string) {
  return /^(by|written by|author|original(ly)? by|from)\b/i.test(d) || /\bby [A-Z]/.test(d) && d.length < 140;
}

function excerpt(md: string) {
  const para = md
    .split(/\n{2,}/)
    .filter((p) => !p.startsWith("#"))
    .map((p) =>
      p
        .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[#*_`>|\\]/g, "")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .map((p) => p.replace(/^by [^.]{0,60}?(?= [A-Z])/, "").trim())
    .find((p) => p.length >= 60 && !/^by\b/i.test(p));
  if (!para) return undefined;
  if (para.length <= 200) return para;
  const cut = para.slice(0, 200);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

async function main() {
  const url = process.env.KEEP_DB_URL;
  if (!url) throw new Error("Set KEEP_DB_URL to a restored copy of the Keep database.");
  const db = await mysql.createConnection({ uri: url, charset: "utf8mb4" });

  const [cats] = await db.query(`SELECT category_id, category_name, category_description FROM ${PREFIX}kb_categories`);
  const [rows] = await db.query(
    `SELECT a.article_id, a.article_title, a.article_description, a.article_text, a.article_poster_name,
            a.article_time, a.article_edit_time, a.article_views, c.category_id
       FROM ${PREFIX}kb_articles a
       JOIN ${PREFIX}kb_article_category c USING (article_id)
      WHERE a.article_visibility = 1
      ORDER BY a.article_id`,
  );
  await db.end();

  const articles = rows as Row[];
  const unmapped = new Set<number>();

  // Pick slugs first so cross-links between articles can be rewritten.
  const used = new Map<string, Set<string>>();
  const hrefById = new Map<number, string>();
  const slugById = new Map<number, string>();
  for (const r of articles) {
    const cat = CATEGORY_MAP[r.category_id];
    if (!cat) {
      unmapped.add(r.category_id);
      continue;
    }
    const taken = used.get(cat.slug) ?? new Set();
    used.set(cat.slug, taken);
    let slug = slugify(decodeEntities(r.article_title));
    if (taken.has(slug)) slug = `${slug}-${r.article_id}`;
    taken.add(slug);
    slugById.set(r.article_id, slug);
    hrefById.set(r.article_id, `/kb/${cat.slug}/${slug}`);
  }
  if (unmapped.size) throw new Error(`Unmapped KB categories: ${[...unmapped].join(", ")}`);

  const rewriteLinks = (md: string) =>
    md.replace(/\]\((?:https?:\/\/(?:www\.)?d2mods\.info\/forum\/kb\/|\.\/(?:kb\/)?)viewarticle(?:\.php)?\?a=(\d+)[^)]*\)/gi, (m, id) => {
      const href = hrefById.get(Number(id));
      return href ? `](${href})` : m;
    }).replace(/\]\(\.\/([^)]+)\)/g, "](https://d2mods.info/forum/$1)");

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const counts = new Map<string, number>();
  for (const r of articles) {
    const cat = CATEGORY_MAP[r.category_id];
    const slug = slugById.get(r.article_id)!;
    const title = decodeEntities(r.article_title).trim();
    const description = keepToText(r.article_description ?? "");
    const { markdown } = keepToMarkdown(r.article_text ?? "");
    const body = rewriteLinks(markdown);

    const credit = description && isCredit(description) ? description : undefined;
    const summary = (!credit && description.length >= 20 ? description : undefined) ?? excerpt(body) ?? title;

    const data: Record<string, unknown> = {
      title,
      summary,
      keepId: r.article_id,
      author: r.article_poster_name || undefined,
      credit,
      posted: iso(r.article_time),
      modified: r.article_edit_time > r.article_time ? iso(r.article_edit_time) : undefined,
      views: r.article_views,
      originalUrl: `${KB}viewarticle?a=${r.article_id}`,
    };
    for (const k of Object.keys(data)) if (data[k] === undefined || data[k] === "") delete data[k];

    const dir = path.join(OUT, cat.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${slug}.md`), matter.stringify(`${body}\n`, data));
    counts.set(cat.slug, (counts.get(cat.slug) ?? 0) + 1);
  }

  const categoryRows = cats as { category_id: number; category_name: string; category_description: string }[];
  const categories = categoryRows
    .filter((c) => CATEGORY_MAP[c.category_id] && counts.get(CATEGORY_MAP[c.category_id].slug))
    .map((c) => {
      const def = CATEGORY_MAP[c.category_id];
      const description = keepToText(c.category_description ?? "");
      return { ...def, keepId: c.category_id, keepName: decodeEntities(c.category_name), description: description || undefined };
    })
    .sort((a, b) => Object.keys(CATEGORY_MAP).indexOf(String(a.keepId)) - Object.keys(CATEGORY_MAP).indexOf(String(b.keepId)));
  fs.writeFileSync(path.join(OUT, "categories.json"), `${JSON.stringify(categories, null, 2)}\n`);

  const redirects: Record<string, string> = { "/forum/kb/index": "/knowledge" };
  for (const c of categories) redirects[`/forum/kb/index?c=${c.keepId}`] = `/kb/${c.slug}`;
  for (const [id, href] of hrefById) redirects[`/forum/kb/viewarticle?a=${id}`] = href;
  fs.writeFileSync(REDIRECTS, `${JSON.stringify(redirects, null, 2)}\n`);

  console.log(`Wrote ${articles.length} articles in ${categories.length} categories, ${Object.keys(redirects).length} redirects.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
