import { communities } from "@/data/communities";
import { mods } from "@/data/mods";
import { servers } from "@/data/servers";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { getArticles, SECTIONS, type Section } from "./content";
import { absoluteUrl } from "./seo";
import { site } from "./site";

// Plain-text renderings of the site for language models, following https://llmstxt.org.

const link = (title: string, path: string, summary: string) => `- [${title}](${absoluteUrl(path)}): ${summary}`;

function header() {
  return `# ${site.name}\n\n> ${site.tagline} ${site.description}\n\nAn independent, community-built reference for the original Diablo II and Lord of Destruction (not Diablo II: Resurrected). It compares mods, private servers and tools as facts and differences, without rankings. Entries that haven't been checked against their sources are marked "Not yet verified" on the site.`;
}

/** MDX body as markdown: component tags are dropped, their text content kept. */
function mdxToMarkdown(body: string) {
  return body
    .replace(/^\s*<[A-Z][\w]*[^>]*\/>\s*$/gm, "")
    .replace(/<\/?[A-Z][\w]*[^>]*>/g, "")
    .replace(/\]\(\//g, `](${site.url}/`)
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const articleSections: [Section, string][] = [
  ["play", "Play"],
  ["guides", "Guides"],
  ["modding", "Modding"],
  ["history", "History"],
];

export function llmsIndex() {
  const parts = [header()];
  for (const [section, label] of articleSections)
    parts.push(`## ${label}\n\n${getArticles(section).map((a) => link(a.title, a.href, a.summary)).join("\n")}`);
  parts.push(`## Game versions\n\n${versions.map((v) => link(`Patch ${v.version}: ${v.headline}`, `/play/versions/${v.version}`, v.whyItMatters)).join("\n")}`);
  parts.push(`## Mods\n\n${mods.map((m) => link(m.name, `/mods/${m.slug}`, m.summary)).join("\n")}`);
  parts.push(`## Private servers\n\n${servers.map((s) => link(s.name, `/servers/${s.slug}`, s.summary)).join("\n")}`);
  parts.push(`## Tools\n\n${tools.map((t) => link(t.name, `/tools/${t.slug}`, t.summary)).join("\n")}`);
  parts.push(`## Communities\n\n${communities.map((c) => link(c.name, `/community/${c.slug}`, c.summary)).join("\n")}`);
  parts.push(`## Optional\n\n${link("Full text", "/llms-full.txt", "Every article and directory entry in one file.")}`);
  return parts.join("\n\n") + "\n";
}

const fields = (rows: [string, string | undefined][]) =>
  rows.filter(([, v]) => v).map(([k, v]) => `- ${k}: ${v}`).join("\n");

export function llmsFull() {
  const parts = [header()];

  for (const [section] of articleSections)
    for (const a of getArticles(section))
      parts.push(
        `# ${a.title}\n\nURL: ${absoluteUrl(a.href)}\nSection: ${SECTIONS[section].label}${a.updated ? `\nUpdated: ${a.updated}` : ""}\n\n> ${a.summary}\n\n${mdxToMarkdown(a.body)}`,
      );

  for (const v of versions)
    parts.push(
      `# Diablo II patch ${v.version}: ${v.headline}\n\nURL: ${absoluteUrl(`/play/versions/${v.version}`)}\nReleased: ${v.released}\n\n${v.whyItMatters}\n\n${v.changes.map((c) => `- ${c}`).join("\n")}\n\nModding: ${v.modding}\n\nMultiplayer: ${v.multiplayer}`,
    );

  for (const m of mods)
    parts.push(
      `# ${m.name} (mod)\n\nURL: ${absoluteUrl(`/mods/${m.slug}`)}\n\n${m.summary}${m.description ? `\n\n${m.description}` : ""}\n\n${fields([
        ["Style", m.style],
        ["Game versions", m.versions.join(", ")],
        ["Status", m.status],
        ["Website", m.website],
      ])}`,
    );

  for (const s of servers)
    parts.push(
      `# ${s.name} (private server)\n\nURL: ${absoluteUrl(`/servers/${s.slug}`)}\n\n${s.summary}${s.history ? `\n\n${s.history}` : ""}${s.changes?.length ? `\n\n${s.changes.map((c) => `- ${c}`).join("\n")}` : ""}\n\n${fields([
        ["Style", s.style],
        ["Game versions", s.versions.join(", ")],
        ["Status", s.status],
        ["Website", s.website],
      ])}`,
    );

  for (const t of tools)
    parts.push(
      `# ${t.name} (tool)\n\nURL: ${absoluteUrl(`/tools/${t.slug}`)}\n\n${t.summary}${t.description ? `\n\n${t.description}` : ""}\n\n${fields([
        ["Category", t.category],
        ["Game versions", t.versions.join(", ")],
        ["Author", t.author],
        ["Website", t.website],
        ["Source", t.source],
      ])}`,
    );

  for (const c of communities)
    parts.push(
      `# ${c.name} (community)\n\nURL: ${absoluteUrl(`/community/${c.slug}`)}\n\n${c.summary}${c.description ? `\n\n${c.description}` : ""}\n\n${fields([
        ["Website", c.website],
        ["Founded", c.founded],
      ])}`,
    );

  return parts.join("\n\n---\n\n") + "\n";
}
