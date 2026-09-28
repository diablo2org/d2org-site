import Link from "next/link";
import { Search } from "lucide-react";
import { nav } from "@/lib/site";
import { NavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";
import { SearchDialog, SearchTrigger } from "./SearchDialog";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-frame" aria-hidden="true" />
      <div className="site-width header-inner">
        <Link href="/" className="brand" aria-label="diablo2.org home">
          <span className="brand-wordmark">diablo<span className="brand-two">2</span><span className="brand-domain">.org</span></span>
        </Link>
        <NavLinks items={nav} />
        <SearchTrigger className="header-search"><Search size={15} aria-hidden="true" /><span>Search the archives</span></SearchTrigger>
        <MobileMenu items={nav} />
        <SearchDialog />
      </div>
    </header>
  );
}
