"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { SearchDoc } from "@/lib/search";
import { SearchResults, useSearch } from "./SearchResults";

export function SearchClient({ docs }: { docs: SearchDoc[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const results = useSearch(docs, query);

  // Keep the URL in sync so results can be shared, without adding history entries per keystroke.
  useEffect(() => {
    const t = setTimeout(() => {
      const q = query.trim();
      router.replace(q ? `/search?q=${encodeURIComponent(q)}` : "/search", { scroll: false });
    }, 250);
    return () => clearTimeout(t);
  }, [query, router]);

  return (
    // Reserve height so the page doesn't collapse and scroll-jump as results shrink.
    <div className="min-h-[70vh]">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 1.13c widescreen, or steam deck"
          className="w-full rounded-sm border border-stone-600 bg-stone-900 px-4 py-3.5 text-lg text-stone-100 placeholder:text-stone-500 focus:border-gold-500 focus:outline-none"
        />
      </label>
      <SearchResults query={query} results={results} onSuggest={setQuery} />
    </div>
  );
}
