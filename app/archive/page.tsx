import type { Metadata } from "next";
import { LinkCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { downloadCategories, downloadStats, formatBytes } from "@/lib/downloads";
import { getKbArticles } from "@/lib/kb";
import { TopicList } from "@/components/Planned";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Archive",
  description:
    "Preserving old Diablo II guides, tools, documentation and community history.",
  path: "/archive",
});

const kinds = [
  "Old modding documents",
  "Dead project documentation",
  "Historical tools",
  "Screenshots",
  "Patch notes",
  "Old websites",
  "Interviews",
  "Community guides",
  "README files",
  "Old source releases",
];

const INFINITUM_LEADS: Record<string, string> = {
  Animations: "Creatures from Baldur's Gate, Icewind Dale and Planescape: Torment as animated GIFs, DCC files and token plugins.",
  Maps: "Area maps from the Infinity Engine games, with previews.",
  Music: "Soundtrack pieces as MP3s.",
  Sounds: "Creature and character sound sets as WAV files.",
  Extras: "Tools Infinitum linked from FilePlanet, which has shut down.",
};

/** Infinitum's tutorials, still on the Keep. They date from 2004, so they're history rather than current advice. */
const INFINITUM_TUTORIALS = [
  { title: "Diablo II Animation Conversion Extended Tutorial", by: "Joel, Alkalund and Nefarius", url: "https://d2mods.info/resources/infinitum/tut_files/dcc_tutorial/index.html" },
  { title: "Creating a new token from existing DCC animations", by: "reiyo_oki", url: "https://d2mods.info/resources/infinitum/tut_files/token-tutorial.html" },
];

const record = ["Original author", "Original URL", "Approximate date", "Source", "Mirror status", "Notes"];

export default function ArchivePage() {
  const files = downloadStats();
  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="Preserving 25 years of Diablo II"
        lead="Guides, tools and documentation from sites that no longer exist. Where we can't legally or safely mirror a file, we link to the original source, Archive.org or a trusted mirror."
        crumbs={[{ href: "/", label: "Home" }]}
      />
      <Section title="The Phrozen Keep" lead="The home of Diablo II modding since 2000. Its knowledge base and download library now live here.">
        <div className="grid gap-4 md:grid-cols-2">
          <LinkCard href="/knowledge" eyebrow={`${getKbArticles().length} articles`} title="Knowledge base">
            File guides, tutorials, references and interviews from 25 years of the Keep, with every author credited.
          </LinkCard>
          <LinkCard href="/downloads" eyebrow={`${files.available.toLocaleString("en-GB")} files to download`} title="Downloads">
            {`Mods, tools, plugins and patches uploaded since ${files.oldest?.slice(0, 4)}: ${formatBytes(files.bytes)}, each with a checksum.`}
          </LinkCard>
        </div>
      </Section>
      <Section
        title="Infinitum"
        lead="Phrozen Heart's 2005-2006 site of Infinity Engine material converted for Diablo II, hosted by the Phrozen Keep. The files download from the Keep's mirror."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {downloadCategories
            .filter((c) => c.path.startsWith("Infinitum / "))
            .sort((a, b) => Object.keys(INFINITUM_LEADS).indexOf(a.title) - Object.keys(INFINITUM_LEADS).indexOf(b.title))
            .map((c) => (
              <LinkCard key={c.slug} href={`/downloads/category/${c.slug}`} eyebrow={`${c.count} ${c.count === 1 ? "entry" : "entries"}`} title={c.title}>
                {INFINITUM_LEADS[c.title] ?? ""}
              </LinkCard>
            ))}
        </div>
        <h3 className="mt-8 mb-3 font-ui text-[0.8125rem] font-semibold tracking-[0.14em] text-stone-400 uppercase">Tutorials (2004, outdated)</h3>
        <ul className="grid gap-2 text-sm">
          {INFINITUM_TUTORIALS.map((t) => (
            <li key={t.url}>
              <a href={t.url} className="text-gold-300 underline decoration-gold-700 hover:text-ember-400">{t.title}</a>
              <span className="text-stone-400"> by {t.by}, on the Phrozen Keep</span>
            </li>
          ))}
        </ul>
      </Section>
      <div className="mx-auto grid max-w-6xl gap-x-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] [&>section]:px-0">
        <Section title="What we'll collect">
          <TopicList items={kinds.map((title) => ({ title }))} />
        </Section>
        <Section title="Every item records">
          <ul className="panel grid gap-2 rounded-sm p-5 text-sm text-stone-300">
            {record.map((r) => (
              <li key={r} className="flex items-center gap-3">
                <span aria-hidden className="size-1.5 rotate-45 bg-gold-700" />
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone-400">
            If you have old Diablo II material on a hard drive, or know where a lost resource is archived, we&apos;d like to
            hear about it.
          </p>
        </Section>
      </div>
    </>
  );
}
