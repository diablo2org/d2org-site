"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const KNOWLEDGE_PATHS = ["/knowledge", "/mechanics", "/technical", "/history", "/guides", "/community"];

export function NavLinks({ items }: { items: readonly { href: string; label: string }[] }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`) ||
    (href === "/knowledge" && KNOWLEDGE_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`)));
  return (
    <nav aria-label="Main" className="desktop-nav">
      <ul>{items.map((item) => (
        <li key={item.href}><Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link></li>
      ))}</ul>
    </nav>
  );
}
