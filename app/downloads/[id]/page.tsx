import Link from "next/link";
import { notFound } from "next/navigation";
import { DownloadStatusPill, SECTION_ACCENT } from "@/components/DownloadList";
import { PageHeader } from "@/components/PageHeader";
import { categoryOf, DOWNLOAD_SECTIONS, downloads, downloadsIn, formatBytes, getDownload } from "@/lib/downloads";
import { renderKbMarkdown } from "@/lib/kb";
import { absoluteUrl, JsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return downloads.map((d) => ({ id: String(d.id) }));
}

export async function generateMetadata({ params }: PageProps<"/downloads/[id]">) {
  const d = getDownload(Number((await params).id));
  if (!d) return {};
  const c = categoryOf(d);
  return pageMetadata({
    title: `${d.title}${d.version ? ` ${d.version}` : ""} - Downloads`,
    description: `${d.title}, from the Phrozen Keep's ${c.path} downloads. Uploaded ${d.uploaded?.slice(0, 4) ?? "to the Keep"}.`,
    path: `/downloads/${d.id}`,
  });
}

function formatDate(d?: string) {
  if (!d) return undefined;
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

const link = "text-gold-300 underline decoration-gold-700 hover:text-ember-400";

export default async function DownloadPage({ params }: PageProps<"/downloads/[id]">) {
  const d = getDownload(Number((await params).id));
  if (!d) notFound();
  const c = categoryOf(d);
  const html = d.description ? await renderKbMarkdown(d.description) : "";
  const siblings = downloadsIn(c.slug).filter((s) => s.id !== d.id).sort((a, b) => (b.keepDownloads ?? 0) - (a.keepDownloads ?? 0)).slice(0, 8);

  const facts: [string, React.ReactNode][] = [
    ["Status", <DownloadStatusPill key="s" status={d.status} />],
    ["File", d.filename && <span className="font-mono text-[0.8rem] break-all">{d.filename}</span>],
    ["Size", formatBytes(d.bytes)],
    ["Version", d.version],
    ["Uploaded", formatDate(d.uploaded)],
    ["Updated", formatDate(d.changed)],
    ["Keep downloads", d.keepDownloads?.toLocaleString("en-GB")],
    ["SHA-256", d.sha256 && <span className="font-mono text-[0.8rem] leading-snug break-all text-stone-400">{d.sha256}</span>],
  ];

  return (
    <article>
      <JsonLd
        data={{
          "@type": "SoftwareApplication",
          name: d.title,
          ...(d.version ? { softwareVersion: d.version } : {}),
          applicationCategory: "GameApplication",
          url: absoluteUrl(`/downloads/${d.id}`),
          datePublished: d.uploaded,
          ...(d.bytes ? { fileSize: formatBytes(d.bytes) } : {}),
          isBasedOn: d.originalUrl,
        }}
      />
      <PageHeader
        eyebrow={c.title}
        title={d.title}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/downloads", label: "Downloads" },
          { href: `/downloads/category/${c.slug}`, label: c.title },
        ]}
      >
        <p className="flex flex-wrap items-center gap-x-2 font-ui text-sm text-stone-400">
          <span aria-hidden className={`size-2 rotate-45 ${SECTION_ACCENT[c.section].dot}`} />
          <span className={SECTION_ACCENT[c.section].text}>{DOWNLOAD_SECTIONS[c.section].label}</span>
          <span>· {[c.path, d.uploaded && `Uploaded ${d.uploaded.slice(0, 4)}`].filter(Boolean).join(" · ")}</span>
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="min-w-0">
          {html ? (
            <div className="prose prose-d2 max-w-none min-w-0 overflow-x-auto lg:max-w-[46rem]" dangerouslySetInnerHTML={{ __html: html }} />
          ) : (
            <p className="text-stone-400">The Keep listing has no description for this file.</p>
          )}

          {siblings.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-4 font-ui text-[0.8125rem] font-semibold tracking-[0.14em] text-stone-400 uppercase">
                More in {c.title}
              </h2>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {siblings.map((s) => (
                  <li key={s.id} className="border-b border-stone-800">
                    <Link href={`/downloads/${s.id}`} className="flex items-baseline justify-between gap-3 py-2 text-stone-200 hover:text-gold-300">
                      <span className="truncate">{s.title}</span>
                      <span className="shrink-0 font-ui text-[0.8125rem] tabular-nums text-stone-400">{s.uploaded?.slice(0, 4)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="grid content-start gap-6 text-sm">
          <div className="panel rounded-sm p-4">
            {d.url ? (
              <>
                <a href={d.url} className="diablo-button mx-auto !flex">
                  Download {formatBytes(d.bytes)}
                </a>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-stone-400">From the Phrozen Keep&apos;s file mirror.</p>
              </>
            ) : d.status === "recovered" ? (
              <p className="leading-relaxed text-stone-300">
                Recovered from the Keep&apos;s server backup. A download link will be added once the archive&apos;s file hosting is set up.
              </p>
            ) : d.status === "dead-host" ? (
              <p className="leading-relaxed text-stone-300">
                The Keep linked to a copy on{" "}
                <span className="break-all text-stone-200">{d.deadLink ? new URL(d.deadLink).hostname : "another site"}</span>, which has shut
                down. If you have this file, we&apos;d like to hear from you.
              </p>
            ) : (
              <p className="leading-relaxed text-stone-300">
                The listing survived but the file didn&apos;t. If you have a copy, we&apos;d like to hear from you.
              </p>
            )}
            <dl className="mt-4 grid grid-cols-[6.5rem_minmax(0,1fr)] gap-x-3 gap-y-2 border-t border-stone-700 pt-4">
              {facts
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase">{k}</dt>
                    <dd className="text-stone-200 tabular-nums">{v}</dd>
                  </div>
                ))}
            </dl>
          </div>
          <p className="text-stone-400">
            <a href={d.originalUrl} className={link}>Original listing on d2mods.info</a>
          </p>
        </aside>
      </div>
    </article>
  );
}
