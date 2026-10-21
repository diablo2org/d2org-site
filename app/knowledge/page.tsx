import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkCard } from "@/components/Cards";
import { KbCategoryGrid } from "@/components/KbCategoryGrid";
import { PageHeader, Section } from "@/components/PageHeader";
import { getArticles } from "@/lib/content";
import { downloadStats } from "@/lib/downloads";
import { getKbArticles, getKbCategories, KB_GROUPS, type KbArticle, type KbGroup } from "@/lib/kb";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Knowledge base",
  description:
    "File guides, tutorials and references for modding Diablo II and Diablo II: Resurrected, archived from the Phrozen Keep, plus game mechanics and history.",
  path: "/knowledge",
  keywords: ["phrozen keep", "knowledge base", "file guides", "txt files", "modding tutorials", "diablo 2 mechanics"],
});

const ORDER: KbGroup[] = ["file-guides", "tutorials", "reference", "community"];
const link = "text-gold-300 underline decoration-gold-700 hover:text-ember-400";
const byViews = (a: KbArticle, b: KbArticle) => (b.views ?? 0) - (a.views ?? 0);

export default function KnowledgePage() {
  const categories = getKbCategories();
  const articles = getKbArticles();
  const inCategory = (slug: string) => articles.filter((a) => a.category === slug);
  const startHere = articles.filter((a) => a.category === "file-guides").sort(byViews).slice(0, 6);
  const mostRead = [...articles].sort(byViews).slice(0, 12);
  const totalViews = articles.reduce((t, a) => t + (a.views ?? 0), 0);
  const years = articles.map((a) => a.posted?.slice(0, 4)).filter(Boolean).sort();
  const files = downloadStats();
  const guides = getArticles("guides");

  const figures = [
    { value: articles.length.toLocaleString("en-GB"), label: "articles" },
    { value: categories.length, label: "categories" },
    { value: `${Number(years[years.length - 1]) - Number(years[0])} years`, label: `of writing, ${years[0]} to ${years[years.length - 1]}` },
    { value: `${(totalViews / 1e6).toFixed(1)}m`, label: "reads on the Keep" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="From the Phrozen Keep"
        title="Knowledge base"
        lead="File guides, tutorials and references written by the Diablo II modding community over 25 years. Archived from the Phrozen Keep with every author credited, and searchable from the bar at the top of every page."
        crumbs={[{ href: "/", label: "Home" }]}
      >
        <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
          {figures.map((f) => (
            <div key={f.label} className="border-l border-gold-700 pl-3">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-ui text-2xl font-semibold text-stone-100 tabular-nums">{f.value}</dd>
              <dd className="font-ui text-[0.8125rem] tracking-wide text-stone-400">{f.label}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <Section title="Start here" lead="The most-read file guides. Most mods start with these files.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {startHere.map((a) => (
            <LinkCard key={a.href} href={a.href} eyebrow={`${a.views?.toLocaleString("en-GB")} reads`} title={a.title}>
              {a.credit ? a.credit.replace(/^by /i, "By ") : a.author ? `Posted by ${a.author}` : undefined}
            </LinkCard>
          ))}
        </div>
      </Section>

      {ORDER.map((group) => {
        const cats = categories.filter((c) => c.group === group);
        if (!cats.length) return null;
        const count = cats.reduce((t, c) => t + inCategory(c.slug).length, 0);
        return (
          <Section key={group} id={group} title={KB_GROUPS[group].label} lead={KB_GROUPS[group].lead}
            action={<span className="font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase tabular-nums">{count} articles</span>}>
            <KbCategoryGrid categories={cats} />
          </Section>
        );
      })}

      <Section title="Most read" lead="By views on the Phrozen Keep.">
        <ol className="grid gap-x-10 md:grid-cols-2">
          {mostRead.map((a) => (
            <li key={a.href} className="flex items-baseline justify-between gap-4 border-b border-stone-800 py-2">
              <Link href={a.href} className="text-stone-200 hover:text-gold-300">
                {a.title}
              </Link>
              <span className="shrink-0 font-ui text-[0.8125rem] tabular-nums text-stone-400">{a.views?.toLocaleString("en-GB")}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="For your AI assistant" lead="Every article is also published as plain markdown, so Claude Code and other assistants can read the guides instead of guessing.">
        <div className="grid gap-4 md:grid-cols-3">
          <LinkCard href="/modding/modding-with-ai" eyebrow="Guide" title="Modding with AI">
            Install the Claude Code skill, and prompts that get good answers.
          </LinkCard>
          <div className="panel grid content-start gap-2 rounded-sm p-6 text-sm text-stone-300 md:col-span-2">
            <p>
              <a href="/llms-kb.txt" className={link}>llms-kb.txt</a> has every article in one file.{" "}
              <Link href="/api/kb" prefetch={false} className={link}>/api/kb</Link> is a JSON index with a markdown link for each one.
            </p>
            <p>Each article page has a &quot;Plain markdown&quot; link in its sidebar, with the author, original URL and game version first.</p>
          </div>
        </div>
      </Section>

      <Section title="Also on diablo2.org">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <LinkCard href="/downloads" eyebrow={`${files.recovered.toLocaleString("en-GB")} files`} title="Downloads">
            The Keep&apos;s library of mods, tools and plugins, recovered and checksummed.
          </LinkCard>
          <LinkCard href="/mechanics" eyebrow="In progress" title="Mechanics">
            Breakpoints, resistances, treasure classes, item generation and everything else the game hides from you.
          </LinkCard>
          <LinkCard href="/technical" eyebrow="In progress" title="Technical reference">
            Data files, file formats and game internals, for modders and developers.
          </LinkCard>
          <LinkCard href="/history" eyebrow={`${getArticles("history").length} articles`} title="History">
            Patches, the realm economy, community sites, and hacks and bots.
          </LinkCard>
          <LinkCard href="/community" eyebrow="Directory" title="Communities">
            The Phrozen Keep, the Arreat Summit, the Amazon Basin, d2jsp and the other sites where Diablo II knowledge lives.
          </LinkCard>
        </div>
        {guides.length > 0 && (
          <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
            {guides.map((g) => (
              <li key={g.href} className="border-b border-stone-800">
                <Link href={g.href} className="group flex items-center justify-between gap-4 py-2 text-stone-200 hover:text-gold-300">
                  {g.title}
                  <ArrowRight aria-hidden className="size-3.5 text-stone-600 group-hover:text-gold-400" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
