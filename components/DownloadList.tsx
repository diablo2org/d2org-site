import Link from "next/link";
import { categoryOf, DOWNLOAD_STATUS, extraVersion, formatBytes, type Download, type DownloadSection, type DownloadStatus } from "@/lib/downloads";

/** Each kind of download wears an item quality colour, so the type reads at a glance. */
export const SECTION_ACCENT: Record<DownloadSection, { bar: string; dot: string; text: string }> = {
  mods: { bar: "shadow-[inset_3px_0_0_var(--color-q-unique)]", dot: "bg-q-unique", text: "text-q-unique" },
  tools: { bar: "shadow-[inset_3px_0_0_var(--color-q-magic)]", dot: "bg-q-magic", text: "text-q-magic" },
  plugins: { bar: "shadow-[inset_3px_0_0_var(--color-q-set)]", dot: "bg-q-set", text: "text-q-set" },
  "game-files": { bar: "shadow-[inset_3px_0_0_var(--color-q-rare)]", dot: "bg-q-rare", text: "text-q-rare" },
  resources: { bar: "shadow-[inset_3px_0_0_var(--color-stone-500)]", dot: "bg-stone-500", text: "text-stone-300" },
};

const STATUS_STYLE: Record<DownloadStatus, string> = {
  recovered: "border-q-set/40 text-q-set",
  missing: "border-q-broken/40 text-q-broken",
  "dead-host": "border-stone-600 text-stone-400",
};

export function DownloadStatusPill({ status }: { status: DownloadStatus }) {
  return (
    <span className={`inline-block rounded-sm border px-1.5 py-0.5 font-ui text-[0.72rem] tracking-[0.08em] uppercase ${STATUS_STYLE[status]}`}>
      {DOWNLOAD_STATUS[status]}
    </span>
  );
}

/** One row per download: title and version, where it lives, and the facts people compare. */
export function DownloadList({ items, showCategory = true }: { items: Download[]; showCategory?: boolean }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-sm border border-stone-700 bg-stone-700">
      {items.map((d) => (
        <li key={d.id} className={`bg-stone-900 ${SECTION_ACCENT[categoryOf(d).section].bar}`}>
          <Link
            href={`/downloads/${d.id}`}
            className="group grid gap-1 px-5 py-3.5 hover:bg-stone-850 md:grid-cols-[minmax(0,1fr)_7rem_6rem_7.5rem] md:items-center md:gap-6"
          >
            <span className="min-w-0">
              <span className="block truncate font-medium text-stone-100 group-hover:text-gold-300">
                {d.title}
                {extraVersion(d) && <span className="ml-2 font-mono text-[0.8125rem] text-stone-400">{extraVersion(d)}</span>}
              </span>
              {showCategory && <span className="block truncate font-ui text-[0.8125rem] text-stone-400">{categoryOf(d).path}</span>}
            </span>
            <span className="font-ui text-[0.8125rem] tabular-nums text-stone-400 md:text-right">
              {d.keepDownloads !== undefined && `${d.keepDownloads.toLocaleString("en-GB")} downloads`}
            </span>
            <span className="font-ui text-[0.8125rem] tabular-nums text-stone-400 md:text-right">
              {[d.uploaded?.slice(0, 4), formatBytes(d.bytes)].filter(Boolean).join(" · ")}
            </span>
            <span className="md:text-right">
              <DownloadStatusPill status={d.status} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
