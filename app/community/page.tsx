import type { Metadata } from "next";
import { CommunityCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { communities } from "@/data/communities";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Communities",
  description:
    "The sites where Diablo II knowledge lives: the Phrozen Keep, the Arreat Summit, the Amazon Basin, d2jsp and more.",
  path: "/community",
});

export default function CommunitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Communities"
        lead="Twenty-five years of Diablo II knowledge lives on these sites. Here's what each one is for, and whether it still covers the legacy game."
        crumbs={[{ href: "/", label: "Home" }, { href: "/knowledge", label: "Knowledge" }]}
      />
      <Section title={`${communities.length} communities`} lead="Server communities are in the servers directory. Each server page links its Discord.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {communities.map((c) => <CommunityCard key={c.slug} community={c} />)}
        </div>
      </Section>
    </>
  );
}
