import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Play",
    links: [
      { href: "/play/getting-started", label: "Getting started" },
      { href: "/play/windows", label: "Windows 10 & 11" },
      { href: "/play/linux", label: "Linux" },
      { href: "/play/steam-deck", label: "Steam Deck" },
      { href: "/play/versions", label: "Versions" },
    ],
  },
  {
    title: "Directory",
    links: [
      { href: "/mods", label: "Mods" },
      { href: "/servers", label: "Servers" },
      { href: "/tools", label: "Tools" },
      { href: "/community", label: "Communities" },
      { href: "/guides/modern-diablo-2-graphics", label: "Graphics guide" },
    ],
  },
  {
    title: "Knowledge",
    links: [
      { href: "/modding", label: "Modding" },
      { href: "/history", label: "History" },
      { href: "/mechanics", label: "Mechanics" },
      { href: "/technical", label: "Technical reference" },
      { href: "/archive", label: "Archive" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="ornament-rule absolute inset-x-0 top-0 -translate-y-1/2" aria-hidden><span /></div>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <p className="font-display text-2xl font-normal text-stone-100">diablo2.org</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">{site.tagline} Play it. Mod it. Understand it. Keep it alive.</p>
          <p className="mt-4 text-sm">
            <a href={site.discordUrl} className="inline-flex items-center gap-1.5 text-gold-300 hover:text-ember-400">
              Join the diablo2.org Discord <ArrowUpRight className="size-3.5" />
            </a>
          </p>
          {site.repoUrl && (
            <p className="mt-4 text-sm">
              <a href={site.repoUrl} className="inline-flex items-center gap-1.5 text-gold-300 hover:text-ember-400">
                Contribute on GitHub <ArrowUpRight className="size-3.5" />
              </a>
            </p>
          )}
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h2 className="border-t border-stone-600 pt-3 font-ui tracking-[0.15em] text-xs uppercase text-stone-300">{col.title}</h2>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-stone-300 hover:text-stone-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-stone-800">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs leading-relaxed text-stone-500 sm:px-6">
          diablo2.org is an independent community project and is not affiliated with or endorsed by Blizzard
          Entertainment. Diablo is a trademark of Blizzard Entertainment, Inc.
        </p>
      </div>
    </footer>
  );
}
