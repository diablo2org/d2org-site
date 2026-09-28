import type { Metadata } from "next";
import Link from "next/link";
import { LinkCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { versions } from "@/data/versions";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Play",
  description: "Go from zero to playing legacy Diablo II on Windows, Linux or Steam Deck.",
};

export default function PlayPage() {
  const guides = getArticles("play");
  return (
    <>
      <PageHeader
        eyebrow="Play"
        title="Play classic Diablo II today"
        lead="Everything you need to go from nothing to playing: which version to use, how to install it, and how to make it run well on modern systems."
        crumbs={[{ href: "/", label: "Home" }]}
      />
      <Section title="Guides">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <LinkCard key={g.href} href={g.href} title={g.title}>
              {g.summary}
            </LinkCard>
          ))}
          <LinkCard href="/guides/modern-diablo-2-graphics" title="Making Diablo II look good on a modern PC">
            Renderers, widescreen, high frame rates and shaders.
          </LinkCard>
        </div>
      </Section>
      <Section
        title="Versions"
        lead="Diablo II was patched for sixteen years. Which version you use decides which mods and tools work."
        action={<Link href="/play/versions" className="text-sm text-gold-300 hover:text-ember-400">Versions explained →</Link>}
      >
        <div className="flex flex-wrap gap-2">
          {versions.map((v) => (
            <Link
              key={v.version}
              href={`/play/versions/${v.version}`}
              className="panel rounded-sm px-4 py-3 transition-colors hover:border-gold-700"
            >
              <span className="block font-mono text-stone-100">{v.version}</span>
              <span className="block text-xs text-stone-400">{v.headline}</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
