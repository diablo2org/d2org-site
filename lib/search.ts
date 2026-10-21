import { communities, communityKinds } from "@/data/communities";
import { mods } from "@/data/mods";
import { servers } from "@/data/servers";
import { toolCategories, tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { getAllArticles, toPlainText } from "./content";
import { categoryOf, downloads } from "./downloads";
import { getKbArticles, getKbCategory } from "./kb";

export type SearchKind = "guide" | "mod" | "server" | "tool" | "version" | "history" | "modding" | "community" | "kb" | "download";

export interface SearchDoc {
  id: string;
  kind: SearchKind;
  title: string;
  href: string;
  summary: string;
  versions: string;
  keywords: string;
  text: string;
}

const MAX_TEXT = 4000;
/** Knowledge base articles are many and long, so they ship less body text to the browser. */
const MAX_KB_TEXT = 400;

export function buildSearchDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const a of getAllArticles()) {
    const kind: SearchKind =
      a.section === "history" ? "history" : a.section === "modding" ? "modding" : "guide";
    docs.push({
      id: `${a.section}:${a.slug}`,
      kind,
      title: a.title,
      href: a.href,
      summary: a.summary,
      versions: (a.versions ?? []).join(" "),
      keywords: (a.keywords ?? []).join(" "),
      text: toPlainText(a.body).slice(0, MAX_TEXT),
    });
  }

  for (const t of tools)
    docs.push({
      id: `tool:${t.slug}`,
      kind: "tool",
      title: t.name,
      href: `/tools/${t.slug}`,
      summary: t.summary,
      versions: t.versions.join(" "),
      keywords: [toolCategories[t.category].label, ...(t.tags ?? [])].join(" "),
      text: t.description ?? "",
    });

  for (const m of mods)
    docs.push({
      id: `mod:${m.slug}`,
      kind: "mod",
      title: m.name,
      href: `/mods/${m.slug}`,
      summary: m.summary,
      versions: m.versions.join(" "),
      keywords: (m.tags ?? []).join(" "),
      text: m.description ?? "",
    });

  for (const s of servers)
    docs.push({
      id: `server:${s.slug}`,
      kind: "server",
      title: s.name,
      href: `/servers/${s.slug}`,
      summary: s.summary,
      versions: s.versions.join(" "),
      keywords: [s.style, ...(s.tags ?? [])].join(" "),
      text: (s.changes ?? []).join(" "),
    });

  for (const c of communities)
    docs.push({
      id: `community:${c.slug}`,
      kind: "community",
      title: c.name,
      href: `/community/${c.slug}`,
      summary: c.summary,
      versions: "",
      keywords: [communityKinds[c.kind], ...(c.tags ?? [])].join(" "),
      text: [c.description ?? "", ...(c.useFor ?? [])].join(" "),
    });

  for (const v of versions)
    docs.push({
      id: `version:${v.version}`,
      kind: "version",
      title: `Patch ${v.version}: ${v.headline}`,
      href: `/play/versions/${v.version}`,
      summary: v.whyItMatters,
      versions: v.version,
      keywords: "patch version",
      text: [...v.changes, v.modding, v.multiplayer].join(" "),
    });

  for (const a of getKbArticles()) {
    const cat = getKbCategory(a.category);
    docs.push({
      id: `kb:${a.category}/${a.slug}`,
      kind: "kb",
      title: a.title,
      href: a.href,
      summary: a.summary,
      versions: cat?.appliesTo ?? "",
      keywords: [cat?.title, cat?.game === "d2r" ? "resurrected d2r" : "", a.author, a.credit, "phrozen keep"].filter(Boolean).join(" "),
      text: toPlainText(a.body).slice(0, MAX_KB_TEXT),
    });
  }

  for (const d of downloads) {
    const c = categoryOf(d);
    docs.push({
      id: `download:${d.id}`,
      kind: "download",
      title: d.title,
      href: `/downloads/${d.id}`,
      summary: `${c.path}${d.uploaded ? `, uploaded ${d.uploaded.slice(0, 4)}` : ""}.`,
      versions: d.version ?? "",
      keywords: [c.path, d.filename, "download phrozen keep"].filter(Boolean).join(" "),
      text: "",
    });
  }

  return docs;
}
