import type { Metadata } from "next";
import { LinkCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { TopicList } from "@/components/Planned";
import { getArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "History",
  description: "The history of Diablo II: patches, the realm economy, the community and the long fight over hacks and bots.",
};

const economy = ["Stones of Jordan as currency", "High runes", "Dupes", "Bugged items", "White items", "Hex items", "Ith weapons", "1.08 uniques", "The rune economy"];
const community = [
  { title: "The Phrozen Keep", href: "/history/phrozen-keep" },
  { title: "The Arreat Summit", href: "/community/arreat-summit" },
  { title: "The Amazon Basin", href: "/community/amazon-basin" },
  { title: "d2jsp", href: "/community/d2jsp" },
  ...["Diabloii.net", "Battle.net forums", "Clan communities"].map((title) => ({ title })),
];

export default function HistoryPage() {
  const articles = getArticles("history");
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="History"
        lead="Twenty-five years of patches, economies, communities and cheating. Much of this history lives on dead websites, and we want to write it down before it disappears."
        crumbs={[{ href: "/", label: "Home" }, { href: "/knowledge", label: "Knowledge" }]}
      />
      <Section title="Articles">
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((a) => (
            <LinkCard key={a.href} href={a.href} title={a.title}>{a.summary}</LinkCard>
          ))}
        </div>
      </Section>
      <div className="mx-auto grid max-w-6xl gap-x-10 px-4 sm:px-6 md:grid-cols-2 [&>section]:px-0">
        <Section title="Economy history">
          <TopicList items={economy.map((title) => ({ title }))} />
        </Section>
        <Section title="Community history">
          <TopicList items={community} />
        </Section>
      </div>
    </>
  );
}
