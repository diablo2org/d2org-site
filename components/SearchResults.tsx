"use client";

import MiniSearch from "minisearch";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { SearchDoc, SearchKind } from "@/lib/search";

const KIND_LABELS: Record<SearchKind, string> = {
  guide: "Guides",
  mod: "Mods",
  server: "Servers",
  tool: "Tools",
  version: "Versions",
  modding: "Modding",
  history: "History",
  community: "Communities",
};

const SUGGESTIONS = ["1.13c widescreen", "steam deck", "shared stash", "private server", "glide", "mpq"];

export function useSearch(docs: SearchDoc[], query: string) {
  const index = useMemo(() => {
    const ms = new MiniSearch<SearchDoc>({
      fields: ["title", "versions", "keywords", "summary", "text"],
      storeFields: ["id"],
      searchOptions: {
        boost: { title: 4, versions: 3, keywords: 2.5, summary: 1.5 },
        prefix: true,
        fuzzy: 0.15,
        combineWith: "AND",
      },
      // Keep version strings like "1.13c" as single tokens.
      tokenize: (text) => text.toLowerCase().split(/[^a-z0-9.]+/).map((t) => t.replace(/^\.+|\.+$/g, "")).filter(Boolean),
    });
    ms.addAll(docs);
    return ms;
  }, [docs]);

  const byId = useMemo(() => new Map(docs.map((d) => [d.id, d])), [docs]);

  return useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    let hits = index.search(q);
    // Fall back to OR matching so multi-word queries still return something.
    if (!hits.length) hits = index.search(q, { combineWith: "OR" });
    return hits.map((h) => byId.get(h.id)!).filter(Boolean);
  }, [query, index, byId]);
}

export function SearchResults({
  query,
  results,
  onSuggest,
  onNavigate,
}: {
  query: string;
  results: SearchDoc[];
  onSuggest: (q: string) => void;
  onNavigate?: () => void;
}) {
  const [kind, setKind] = useState<SearchKind | "all">("all");

  const counts = useMemo(() => {
    const c = new Map<SearchKind, number>();
    for (const r of results) c.set(r.kind, (c.get(r.kind) ?? 0) + 1);
    return c;
  }, [results]);

  const shown = kind === "all" || !counts.has(kind) ? results : results.filter((r) => r.kind === kind);

  if (query.trim() === "")
    return (
      <div className="mt-6">
        <p className="text-sm text-stone-400">Search covers guides, mods, servers, tools, versions and history. Try:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSuggest(s)}
              className="rounded-sm border border-stone-700 bg-stone-900 px-3 py-1.5 font-mono text-sm text-stone-300 hover:border-gold-700 hover:text-gold-300"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    );

  return (
    <>
      <div role="group" aria-label="Filter by type" className="mt-4 flex flex-wrap gap-1.5">
        {(["all", ...counts.keys()] as const).map((k) => {
          const active = kind === k;
          const n = k === "all" ? results.length : counts.get(k);
          return (
            <button
              key={k}
              type="button"
              aria-pressed={active}
              onClick={() => setKind(k)}
              className={`rounded-sm border px-2.5 py-1 text-xs transition-colors ${
                active ? "border-gold-500 bg-gold-500/10 text-gold-300" : "border-stone-700 text-stone-400 hover:text-stone-200"
              }`}
            >
              {k === "all" ? "All" : KIND_LABELS[k]} <span className="tabular-nums opacity-70">{n}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {shown.length} results
      </p>

      {shown.length === 0 ? (
        <p className="mt-8 text-stone-400">
          Nothing found for &quot;{query}&quot;. The site is young, so if this is something that should be documented, please
          suggest it.
        </p>
      ) : (
        <ul className="mt-6 divide-y divide-stone-800 border-t border-stone-800">
          {shown.map((r) => (
            <li key={r.id}>
              <Link
                href={r.href}
                data-search-result
                onClick={onNavigate}
                className="group block py-4"
              >
                <span className="flex items-baseline gap-3">
                  <span className="w-16 shrink-0 text-[0.7rem] tracking-wide text-stone-500 uppercase">
                    {KIND_LABELS[r.kind].replace(/ies$/, "y").replace(/s$/, "")}
                  </span>
                  <span className="font-display text-xl font-semibold text-stone-100 group-hover:text-gold-300">{r.title}</span>
                </span>
                <span className="mt-1 block pl-[4.75rem] text-sm text-stone-400">{r.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
