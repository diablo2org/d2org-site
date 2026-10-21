import type { Metadata } from "next";
import { LinkCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { downloadStats, formatBytes } from "@/lib/downloads";
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
