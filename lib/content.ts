import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { GameVersion, Ref, Verification } from "./types";

export const SECTIONS = {
  play: { base: "/play", label: "Play" },
  guides: { base: "/guides", label: "Guides" },
  modding: { base: "/modding", label: "Modding" },
  history: { base: "/history", label: "History" },
} as const;

export type Section = keyof typeof SECTIONS;

export interface ArticleMeta extends Verification {
  title: string;
  summary: string;
  /** Versions the article applies to. */
  versions?: GameVersion[];
  /** Versions the article explicitly does not apply to. */
  notVersions?: GameVersion[];
  related?: Ref[];
  /** YYYY-MM-DD */
  updated?: string;
  order?: number;
  /** Search-only keywords that don't appear in the prose. */
  keywords?: string[];
}

export interface Article extends ArticleMeta {
  section: Section;
  slug: string;
  href: string;
  /** Repo-relative path, for "Edit on GitHub". */
  file: string;
  body: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

const cache = new Map<Section, Article[]>();

export function getArticles(section: Section): Article[] {
  const hit = cache.get(section);
  if (hit && process.env.NODE_ENV === "production") return hit;

  const dir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(dir)) return [];

  const articles = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return {
        ...(data as ArticleMeta),
        section,
        slug,
        href: `${SECTIONS[section].base}/${slug}`,
        file: `content/${section}/${f}`,
        body: content,
      } satisfies Article;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title));

  cache.set(section, articles);
  return articles;
}

export function getArticle(section: Section, slug: string) {
  return getArticles(section).find((a) => a.slug === slug);
}

export function getAllArticles() {
  return (Object.keys(SECTIONS) as Section[]).flatMap(getArticles);
}

/** Rough plain-text version of an MDX body, for search indexing. */
export function toPlainText(mdx: string) {
  return mdx
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
