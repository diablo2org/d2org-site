import type { Metadata } from "next";
import { site } from "./site";
import type { OS } from "./types";

export const siteKeywords = ["Diablo II", "Diablo 2", "Lord of Destruction", "legacy Diablo II", "D2"];

/**
 * Full metadata for a page: title, description, canonical URL, Open Graph and
 * Twitter card. Pages must set all of these together, because a page's
 * `openGraph` replaces the layout's rather than merging with it.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  type = "website",
  modified,
  keywords,
}: {
  /** Page title. The layout's template appends the site name unless `absoluteTitle` is set. */
  title: string;
  absoluteTitle?: boolean;
  description: string;
  path: string;
  type?: "website" | "article";
  /** ISO date the content last changed, for articles. */
  modified?: string;
  /** Page-specific terms, added to the site-wide ones. */
  keywords?: string[];
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...new Set([...(keywords ?? []), ...siteKeywords])],
    alternates: { canonical: path },
    openGraph: {
      siteName: site.name,
      locale: "en",
      url: path,
      title,
      description,
      ...(type === "article" ? { type, modifiedTime: modified } : { type }),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();

/** Renders schema.org structured data. `<` is escaped so content can't close the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...data }).replace(/</g, "\\u003c") }}
    />
  );
}

/** BreadcrumbList for the crumbs shown on a page, ending with the page itself. */
export function BreadcrumbJsonLd({ crumbs, current }: { crumbs: { href: string; label: string }[]; current?: string }) {
  const trail = [...crumbs.map((c) => ({ name: c.label, item: absoluteUrl(c.href) })), ...(current ? [{ name: current }] : [])];
  if (trail.length < 2) return null;
  return <JsonLd data={{ "@type": "BreadcrumbList", itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, ...t })) }} />;
}

const OS_NAMES: Record<OS, string> = { windows: "Windows", linux: "Linux", macos: "macOS", "steam-deck": "SteamOS" };

/** SoftwareApplication data for a mod or tool, from fields we already hold. Unknown fields are left out. */
export function softwareSchema(
  p: { name: string; summary: string; website?: string; source?: string; os?: OS[]; currentVersion?: string },
  path: string,
  subCategory: string,
) {
  const sameAs = [p.website, p.source].filter(Boolean);
  return {
    "@type": "SoftwareApplication",
    name: p.name,
    description: p.summary,
    url: absoluteUrl(path),
    applicationCategory: "GameApplication",
    applicationSubCategory: subCategory,
    operatingSystem: p.os?.map((o) => OS_NAMES[o]).join(", "),
    softwareVersion: p.currentVersion,
    sameAs: sameAs.length ? sameAs : undefined,
    about: { "@type": "VideoGame", name: "Diablo II" },
  };
}

export const publisher = { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url };
