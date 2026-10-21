"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export interface FinderItem {
  id: number;
  title: string;
  version?: string;
  category: string;
  year?: string;
  recovered: boolean;
}

const LIMIT = 40;

/** Filters the whole download library by title, version and category as you type. */
export function DownloadFinder({ items }: { items: FinderItem[] }) {
  const [query, setQuery] = useState("");
  const [onlyRecovered, setOnlyRecovered] = useState(false);

  const matches = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return items.filter((i) => {
      if (onlyRecovered && !i.recovered) return false;
      const hay = `${i.title} ${i.version ?? ""} ${i.category}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [items, query, onlyRecovered]);

  return (
    <div className="panel rounded-sm p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <label htmlFor="download-query" className="relative min-w-0 flex-1 basis-72">
          <span className="sr-only">Search downloads</span>
          <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-stone-400" />
          <input
            id="download-query"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 1,187 downloads: eastern sun, d2se, 1.10, sound..."
            className="w-full rounded-sm border border-stone-600 bg-stone-950 py-2.5 pr-3 pl-9 text-stone-100 placeholder:text-stone-400 focus:border-gold-500 focus:outline-none"
          />
        </label>
        <label htmlFor="download-recovered" className="flex items-center gap-2 font-ui text-sm text-stone-300">
          <input
            id="download-recovered"
            type="checkbox"
            checked={onlyRecovered}
            onChange={(e) => setOnlyRecovered(e.target.checked)}
            className="accent-gold-500"
          />
          Recovered files only
        </label>
      </div>

      {query.trim() && (
        <div className="mt-4">
          <p className="mb-2 font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase" aria-live="polite">
            {matches.length === 0
              ? "No downloads match. Try fewer words, or a version like 1.09."
              : `${matches.length.toLocaleString("en-GB")} ${matches.length === 1 ? "match" : "matches"}${matches.length > LIMIT ? `, showing the first ${LIMIT}` : ""}`}
          </p>
          {matches.length > 0 && (
            <ul className="grid gap-px overflow-hidden rounded-sm border border-stone-700 bg-stone-700">
              {matches.slice(0, LIMIT).map((m) => (
                <li key={m.id} className="bg-stone-900">
                  <Link href={`/downloads/${m.id}`} className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 hover:bg-stone-850">
                    <span className="min-w-0 text-stone-100 group-hover:text-gold-300">
                      {m.title}
                      {m.version && <span className="ml-2 font-mono text-[0.8125rem] text-stone-400">{m.version}</span>}
                    </span>
                    <span className="font-ui text-[0.8125rem] text-stone-400">
                      {[m.category, m.year, !m.recovered && "not recovered"].filter(Boolean).join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
