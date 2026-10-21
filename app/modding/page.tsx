import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DownloadList } from "@/components/DownloadList";
import { KbCategoryGrid } from "@/components/KbCategoryGrid";
import { PageHeader, Section } from "@/components/PageHeader";
import { TopicList } from "@/components/Planned";
import { getArticle } from "@/lib/content";
import { downloads, downloadStats } from "@/lib/downloads";
import { getKbArticles, getKbCategories, getKbCategory } from "@/lib/kb";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modding",
  description:
    "Learn to mod Diablo II: file guides for every data file, tutorials by topic, the Phrozen Keep's tools and mods, and how to mod with an AI assistant.",
  path: "/modding",
});

const link = "text-gold-300 underline decoration-gold-700 hover:text-ember-400";

// Tutorial categories in roughly the order a new modder needs them.
const TOPICS = [
  "tutorials-mod-setup",
  "general-tutorials",
  "tutorials-item-mechanics",
  "tutorials-cube-recipes",
  "tutorials-skill-mechanics",
  "tutorials-unit-mechanics",
  "tutorials-map-making",
  "tutorials-graphics-and-sound",
  "tutorials-ui-mechanics",
  "tutorials-code-editing",
  "tutorials-d2r",
];

export default function ModdingPage() {
  const href = (slug: string) => getArticle("modding", slug)?.href;
  const kb = (slug: string) => {
    const c = getKbCategory(slug);
    const n = getKbArticles(slug).length;
    return c && n ? { href: `/kb/${slug}`, body: `${n} ${n === 1 ? "tutorial" : "tutorials"} in the knowledge base.` } : {};
  };
  const path = [
    { title: "How Diablo II mods work", body: "MPQs, TXT and BIN files, DLLs, save files and assets.", href: href("how-mods-work") },
    { title: "Set up a modding environment", ...kb("tutorials-mod-setup"), ...(href("setup") ? { href: href("setup") } : {}) },
    { title: "Make your first change", body: "Change the damage of an item and see it in game.", href: href("first-change") },
    { title: "Add a cube recipe", ...kb("tutorials-cube-recipes") },
    { title: "Create a custom item", ...kb("tutorials-item-mechanics") },
    { title: "Modify a skill", ...kb("tutorials-skill-mechanics") },
    { title: "Add a monster", ...kb("tutorials-unit-mechanics") },
    { title: "Modify a level", ...kb("tutorials-map-making") },
  ];

  const guides = getKbArticles("file-guides").sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
  const topics = TOPICS.map((s) => getKbCategories().find((c) => c.slug === s)).filter((c) => c !== undefined);
  const tools = downloads
    .filter((d) => d.category[0] === "Tools" && d.status === "available")
    .sort((a, b) => (b.keepDownloads ?? 0) - (a.keepDownloads ?? 0))
    .slice(0, 6);
  const files = downloadStats();
  const jump = [
    { href: "#file-guides", label: "File guides" },
    { href: "#tutorials", label: "Tutorials" },
    { href: "#ai", label: "Modding with AI" },
    { href: "#downloads", label: "Tools and downloads" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Modding"
        title="Learn to mod Diablo II"
        lead="Twenty-five years of Diablo II modding knowledge, in one place: a guide to every data file, tutorials by topic, the Phrozen Keep's tools and mods, and a way to hand all of it to your AI assistant."
        crumbs={[{ href: "/", label: "Home" }]}
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-2">
          {jump.map((j) => (
            <a key={j.href} href={j.href} className="rounded-sm border border-stone-600 px-3 py-1.5 font-ui text-[0.8125rem] tracking-wide text-stone-300 uppercase hover:border-gold-500 hover:text-gold-300">
              {j.label}
            </a>
          ))}
        </nav>
      </PageHeader>

      <Section
        id="file-guides"
        title="File guides"
        lead="Column by column guides to the data files that make up a mod, written for 1.10 to 1.14. Most of what you'll change lives in these."
        action={<Link href="/kb/file-guides" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-ember-400">All {guides.length} guides <ArrowRight className="size-3.5" /></Link>}
      >
        <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 18).map((a) => (
            <li key={a.href} className="border-b border-stone-800">
              <Link href={a.href} className="group flex items-baseline justify-between gap-3 py-2">
                <span className="truncate font-mono text-[0.85rem] text-stone-200 group-hover:text-gold-300">{a.title}</span>
                <span className="shrink-0 font-ui text-[0.8125rem] tabular-nums text-stone-400">{a.views?.toLocaleString("en-GB")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-stone-400">
          Older guides for <Link href="/kb/file-guides-1-09" className={link}>1.09</Link>,{" "}
          <Link href="/kb/file-guides-1-08" className={link}>1.08</Link> and{" "}
          <Link href="/kb/file-guides-1-00-1-06" className={link}>1.00 to 1.06</Link>, and{" "}
          <Link href="/kb/json-file-guides-d2r" className={link}>Resurrected&apos;s JSON files</Link>.
        </p>
      </Section>

      <Section id="tutorials" title="Tutorials" lead="Step by step guides for specific changes, from the Phrozen Keep.">
        <KbCategoryGrid categories={topics} />
        <p className="mt-4 text-sm text-stone-400">
          Tutorials written for <Link href="/kb/tutorials-1-09" className={link}>1.09</Link>,{" "}
          <Link href="/kb/tutorials-1-08" className={link}>1.08</Link> and{" "}
          <Link href="/kb/tutorials-1-00-1-06" className={link}>1.00 to 1.06</Link>, and the{" "}
          <Link href="/knowledge#reference" className={link}>reference charts and research</Link>.
        </p>
      </Section>

      <Section id="ai" title="Modding with AI" lead="Most new mods are made with an assistant open alongside. Give it the knowledge base, so it reads the file guides instead of guessing.">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="grid content-start gap-4 text-stone-300">
            <p>
              The Claude Code skill teaches your assistant to check your game version, find the right file guide, and cite it for every
              change. Every article is also available as plain markdown for any other assistant.
            </p>
            <p>
              <Link href={href("modding-with-ai") ?? "/modding/modding-with-ai"} className="inline-flex items-center gap-2 font-semibold text-gold-400 hover:text-ember-400">
                Read the guide, with prompts that work <ArrowRight className="size-3.5" />
              </Link>
            </p>
          </div>
          <div className="panel min-w-0 rounded-sm p-4">
            <p className="mb-2 font-ui text-[0.8125rem] tracking-[0.14em] text-stone-400 uppercase">Install the skill in your mod folder</p>
            <pre className="overflow-x-auto font-mono text-[0.78rem] leading-relaxed text-stone-200">
              <code>{`mkdir -p .claude/skills/diablo2-modding
curl -o .claude/skills/diablo2-modding/SKILL.md \\
  https://diablo2.org/ai/skills/diablo2-modding/SKILL.md`}</code>
            </pre>
          </div>
        </div>
      </Section>

      <Section
        id="downloads"
        title="Tools and downloads"
        lead={`The Phrozen Keep's library: ${files.available.toLocaleString("en-GB")} mods, tools and plugins ready to download. These are the most-downloaded tools.`}
        action={<Link href="/downloads" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-ember-400">Browse all downloads <ArrowRight className="size-3.5" /></Link>}
      >
        <DownloadList items={tools} />
        <p className="mt-4 text-sm text-stone-400">
          For current tools with maintained pages, see the <Link href="/tools#modding" className={link}>tools directory</Link>.
        </p>
      </Section>

      <Section title="Beginner track" lead="Aimed at 1.13c, the version most mods and tools target. Each step builds on the last.">
        <div className="max-w-3xl">
          <TopicList items={path} numbered />
        </div>
      </Section>

      <Section title="The Phrozen Keep" lead="The home of Diablo II modding since 2000.">
        <p className="max-w-2xl text-stone-400">
          The Keep&apos;s <Link href="/knowledge" className={link}>knowledge base</Link> and{" "}
          <Link href="/downloads" className={link}>download library</Link> are archived here, with every author credited. Its{" "}
          <a href="https://d2mods.info/forum/index.php" className={link}>forums</a> hold twenty-five years of discussion. Its GitHub
          organisation maintains <Link href="/tools/d2moo" className={link}>D2MOO</Link>, an open reimplementation of the game&apos;s
          code. Read <Link href="/history/phrozen-keep" className={link}>the story of the Keep</Link>.
        </p>
      </Section>
    </>
  );
}
