"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { Search, X } from "lucide-react";
import type { SearchDoc } from "@/lib/search";
import { SearchResults, useSearch } from "./SearchResults";

const OPEN_EVENT = "d2:open-search";
const NO_DOCS: SearchDoc[] = [];

// Fetched once, on first open, so the index isn't shipped with every page.
let docsRequest: Promise<SearchDoc[]> | null = null;
function loadDocs() {
  docsRequest ??= fetch("/api/search")
    .then((res) => {
      if (!res.ok) throw new Error(`Search index returned ${res.status}`);
      return res.json() as Promise<{ data: SearchDoc[] }>;
    })
    .then((json) => json.data)
    .catch((err) => {
      docsRequest = null;
      throw err;
    });
  return docsRequest;
}

/** A link to /search that opens the search dialog instead, so it still works without JS. */
export function SearchTrigger({ className, children, onOpen }: { className?: string; children: ReactNode; onOpen?: () => void }) {
  const onClick = (event: MouseEvent) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen?.();
    window.dispatchEvent(new Event(OPEN_EVENT));
  };
  return (
    <a href="/search" role="button" aria-haspopup="dialog" className={className} onClick={onClick}>
      {children}
    </a>
  );
}

function isTyping(target: EventTarget | null) {
  return target instanceof HTMLElement && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
}

export function SearchDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const results = useSearch(docs ?? NO_DOCS, query);
  const pathname = usePathname();

  const open = useCallback(() => {
    const el = dialog.current;
    if (!el || el.open) return;
    el.showModal();
    input.current?.select();
    setFailed(false);
    loadDocs().then(setDocs, () => setFailed(true));
  }, []);

  const close = useCallback(() => dialog.current?.close(), []);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (shortcut || (event.key === "/" && !isTyping(event.target))) {
        event.preventDefault();
        open();
      }
    };
    window.addEventListener(OPEN_EVENT, open);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close after following a result.
  useEffect(close, [pathname, close]);

  // Arrow keys move between the input and the result links.
  const onKeyDown = (event: KeyboardEvent) => {
    const links = [...(dialog.current?.querySelectorAll<HTMLElement>("[data-search-result]") ?? [])];
    if (event.key === "Enter" && event.target === input.current) {
      links[0]?.click();
      return;
    }
    if ((event.key !== "ArrowDown" && event.key !== "ArrowUp") || !links.length) return;
    event.preventDefault();
    const next = links.indexOf(document.activeElement as HTMLElement) + (event.key === "ArrowDown" ? 1 : -1);
    if (next < 0) input.current?.focus();
    else links[Math.min(next, links.length - 1)].focus();
  };

  let body: ReactNode;
  if (failed)
    body = (
      <p className="mt-6 text-stone-400">
        Search couldn&apos;t load.{" "}
        <Link href={`/search?q=${encodeURIComponent(query.trim())}`} className="text-gold-300 underline" onClick={close}>
          Try the search page
        </Link>
        .
      </p>
    );
  else if (!docs && query.trim()) body = <p className="mt-6 text-stone-400">Loading…</p>;
  else body = <SearchResults query={query} results={results} onSuggest={setQuery} onNavigate={close} />;

  return (
    <dialog
      ref={dialog}
      className="search-dialog"
      aria-label="Search diablo2.org"
      onKeyDown={onKeyDown}
      // A click on the dialog element itself (not its content) is a click on the backdrop.
      onClick={(event) => event.target === event.currentTarget && close()}
    >
      <div className="search-dialog-panel">
        <div className="search-dialog-head">
          <Search size={18} aria-hidden="true" />
          <input
            ref={input}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, mods, servers and tools"
            aria-label="Search diablo2.org"
            enterKeyHint="go"
          />
          <button type="button" onClick={close} className="search-dialog-close" aria-label="Close search">
            <X size={18} />
          </button>
        </div>
        <div className="search-dialog-body">{body}</div>
      </div>
    </dialog>
  );
}
