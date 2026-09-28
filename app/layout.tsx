import type { Metadata, Viewport } from "next";
import { Geist_Mono, Lato } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd, siteKeywords } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const exocet = localFont({
  src: "../public/fonts/exocet-blizzard.woff",
  variable: "--font-exocet",
  weight: "400",
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSerif = localFont({
  src: "../public/fonts/SourceSerifVariable-Roman.woff2",
  variable: "--font-source-serif",
  weight: "200 900",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Colours the browser UI on mobile and the side stripe of Discord link embeds.
export const viewport: Viewport = { themeColor: "#94271f" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  keywords: siteKeywords,
  title: {
    default: `${site.name}: ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${exocet.variable} ${lato.variable} ${sourceSerif.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/json"
          data-design-contract="diablo-reference-sd-main"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              thesis: "A Diablo II community reference grounded in the game's own visual language.",
              world: "User-supplied sd-main assets: Exocet lettering, carved stone navigation, silver button sprites, bone-white text, cold black backgrounds, and sparse copper links.",
              story: "Recognize Diablo II immediately, start playing, then explore mods, realms, tools and guides.",
              firstViewport: "Framed navigation over centered Diablo key art; white Exocet title beneath the character, silver primary action and four game-sprite navigation paths. Buttons use the source sprite's hover and pressed states.",
              form: "User-pinned sd-main reference, replacing the rejected gold-heavy direction. Code-led implementation.",
              finish: "unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance",
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-stone-800 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@graph": [
              { "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, description: site.description, inLanguage: "en", publisher: { "@id": `${site.url}/#organization` } },
              { "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, sameAs: [site.discordUrl] },
            ],
          }}
        />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
