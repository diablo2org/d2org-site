"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { Menu, Search, X } from "lucide-react";
import { SearchTrigger } from "./SearchDialog";

export function MobileMenu({ items }: { items: readonly { href: string; label: string }[] }) {
  const details = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  return (
    <details ref={details} className="mobile-menu" onKeyDown={(event) => {
      if (event.key === "Escape" && details.current?.open) {
        details.current.open = false;
        details.current.querySelector("summary")?.focus();
      }
    }}>
      <summary><span className="sr-only">Toggle navigation menu</span><Menu className="menu-open-icon" size={22} /><X className="menu-close-icon" size={22} /></summary>
      <nav aria-label="Mobile navigation" className="mobile-menu-panel">
        <SearchTrigger className="mobile-search-trigger" onOpen={() => { if (details.current) details.current.open = false; }}>
          <Search size={19} aria-hidden="true" /><span>Search the archives</span>
        </SearchTrigger>
        <ul>{items.map((item) => (
          <li key={item.href}><Link href={item.href} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined} onClick={() => { if (details.current) details.current.open = false; }}>{item.label}</Link></li>
        ))}</ul>
      </nav>
    </details>
  );
}
