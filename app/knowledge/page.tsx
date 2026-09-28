import type { Metadata } from "next";
import { LinkCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { getArticles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Knowledge",
  description:
    "Game mechanics, technical reference, guides and history for legacy Diablo II.",
  path: "/knowledge",
});

export default function KnowledgePage() {
  const guides = getArticles("guides");
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="How Diablo II works"
        lead="Game mechanics, technical reference and history. Each page says which game versions it applies to."
        crumbs={[{ href: "/", label: "Home" }]}
      />
      <Section title="Sections">
        <div className="grid gap-4 md:grid-cols-2">
          <LinkCard href="/mechanics" eyebrow="In progress" title="Mechanics">
            Breakpoints, resistances, treasure classes, item generation and everything else the game hides from you.
          </LinkCard>
          <LinkCard href="/technical" eyebrow="In progress" title="Technical reference">
            Data files, file formats and game internals, for modders and developers.
          </LinkCard>
          <LinkCard href="/community" eyebrow="Directory" title="Communities">
            The Phrozen Keep, the Arreat Summit, the Amazon Basin, d2jsp and the other sites where Diablo II knowledge lives.
          </LinkCard>
          <LinkCard href="/history" eyebrow={`${getArticles("history").length} articles`} title="History">
            Patches, the realm economy, community sites, and hacks and bots.
          </LinkCard>
        </div>
      </Section>
      <Section title="Guides">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <LinkCard key={g.href} href={g.href} title={g.title}>{g.summary}</LinkCard>
          ))}
        </div>
      </Section>
    </>
  );
}
