import type { Metadata } from "next";
import Link from "next/link";
import { DownloadFinder } from "@/components/DownloadFinder";
import { DownloadList, SECTION_ACCENT } from "@/components/DownloadList";
import { PageHeader, Section } from "@/components/PageHeader";
import {
  categoryOf,
  DOWNLOAD_SECTIONS,
  DOWNLOAD_STATUS,
  downloadCategories,
  downloads,
  downloadStats,
  extraVersion,
  formatBytes,
  type DownloadSection,
} from "@/lib/downloads";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Downloads",
  description:
    "The Phrozen Keep's download library: Diablo II mods, modding tools, plugins and patches uploaded since 2003, with every file checksummed.",
  path: "/downloads",
  keywords: ["phrozen keep", "diablo 2 mods download", "d2 modding tools", "d2se", "plugins"],
});

const ORDER: DownloadSection[] = ["mods", "tools", "plugins", "game-files", "resources"];

export default function DownloadsPage() {
  const stats = downloadStats();
  const mostDownloaded = [...downloads].sort((a, b) => (b.keepDownloads ?? 0) - (a.keepDownloads ?? 0)).slice(0, 10);
  const finder = downloads.map((d) => ({
    id: d.id,
    title: d.title,
    version: extraVersion(d),
    category: categoryOf(d).path,
    year: d.uploaded?.slice(0, 4),
    available: d.status === "available",
    status: d.status === "available" ? undefined : DOWNLOAD_STATUS[d.status].toLowerCase(),
  }));
  const figures = [
    { value: stats.total.toLocaleString("en-GB"), label: "uploads catalogued" },
    { value: stats.available.toLocaleString("en-GB"), label: "ready to download" },
    { value: formatBytes(stats.bytes), label: "of mods, tools and plugins" },
    { value: stats.keepDownloads.toLocaleString("en-GB"), label: "downloads on the Keep" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Phrozen Keep archive"
        title="Downloads"
        lead={`Every mod, tool and plugin uploaded to the Phrozen Keep since ${stats.oldest?.slice(0, 4)}. ${stats.available.toLocaleString("en-GB")} of them are ready to download, each with a checksum so you know you have the original file.`}
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

      <div className="mx-auto grid max-w-6xl gap-4 px-4 pt-10 sm:px-6">
        <DownloadFinder items={finder} />
        <nav aria-label="Kinds of download" className="flex flex-wrap gap-2">
          {ORDER.map((s) => (
            <a key={s} href={`#${s}`} className="flex items-center gap-2 rounded-sm border border-stone-700 px-3 py-1.5 font-ui text-sm text-stone-300 hover:border-stone-500 hover:text-stone-100">
              <span aria-hidden className={`size-2 rotate-45 ${SECTION_ACCENT[s].dot}`} />
              {DOWNLOAD_SECTIONS[s].label}
            </a>
          ))}
        </nav>
      </div>

      {ORDER.map((section) => {
        const cats = downloadCategories.filter((c) => c.section === section);
        const total = cats.reduce((t, c) => t + c.count, 0);
        return (
          <Section key={section} id={section} title={DOWNLOAD_SECTIONS[section].label} lead={DOWNLOAD_SECTIONS[section].lead}
            action={<span className="font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase tabular-nums">{total} files</span>}>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-stone-700 bg-stone-700 sm:grid-cols-2 lg:grid-cols-3">
              {cats.map((c) => (
                <li key={c.slug} className={`bg-stone-900 ${SECTION_ACCENT[section].bar}`}>
                  <Link href={`/downloads/category/${c.slug}`} className="group flex h-full items-baseline justify-between gap-3 px-5 py-3.5 hover:bg-stone-850">
                    <span className="min-w-0">
                      <span className="block text-stone-100 group-hover:text-gold-300">{c.title}</span>
                      {c.parent && <span className="block font-ui text-[0.8125rem] text-stone-400">{c.parent}</span>}
                    </span>
                    <span className="font-ui text-[0.8125rem] tabular-nums text-stone-400">{c.count}</span>
                  </Link>
                </li>
              ))}
              {/* Fill the last row so the grid keeps its edge. */}
              {Array.from({ length: (3 - (cats.length % 3)) % 3 }, (_, i) => (
                <li key={`fill-${i}`} aria-hidden className="hidden bg-stone-900 lg:block" />
              ))}
            </ul>
          </Section>
        );
      })}

      <Section title="Most downloaded" lead="By download count on the Phrozen Keep.">
        <DownloadList items={mostDownloaded} />
      </Section>

      <Section title="Can't download something?">
        <dl className="grid max-w-3xl gap-4 text-stone-300 sm:grid-cols-2">
          <div>
            <dt className="font-ui text-[0.8125rem] tracking-[0.08em] text-q-rare uppercase">Coming soon</dt>
            <dd className="mt-1 text-sm">We have the file, saved from the Keep&apos;s servers, and it will be downloadable once our file hosting is set up.</dd>
          </div>
          <div>
            <dt className="font-ui text-[0.8125rem] tracking-[0.08em] text-q-broken uppercase">Lost</dt>
            <dd className="mt-1 text-sm">The listing survives but nobody has the file, often because it was hosted on a site that shut down. If you have a copy, we&apos;d like to hear from you.</dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
