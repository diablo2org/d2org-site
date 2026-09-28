import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/PageHeader";
import { TopicList } from "@/components/Planned";

export const metadata: Metadata = {
  title: "Mechanics",
  description: "How Diablo II actually works: attack speed, breakpoints, resistances, treasure classes, item generation and more.",
};

const groups = [
  { title: "Combat", items: ["Attack speed", "Faster cast rate", "Faster hit recovery", "Blocking", "Defense", "Resistances", "Crushing Blow", "Deadly Strike", "Open Wounds", "Immunities"] },
  { title: "Items and loot", items: ["Magic Find", "Treasure classes", "Item generation", "Gambling", "Runewords", "Horadric Cube"] },
  { title: "Monsters and the world", items: ["Experience", "Monster levels", "Area levels", "Player count", "Mercenaries"] },
];

export default function MechanicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Mechanics"
        lead="How Diablo II actually works. Every page will state which game versions it applies to, because many mechanics changed between patches."
        crumbs={[{ href: "/", label: "Home" }, { href: "/knowledge", label: "Knowledge" }]}
      />
      <div className="mx-auto grid max-w-6xl gap-x-8 px-4 sm:px-6 lg:grid-cols-3 [&>section]:px-0">
        {groups.map((g) => (
          <Section key={g.title} title={g.title}>
            <TopicList items={g.items.map((title) => ({ title }))} />
          </Section>
        ))}
      </div>
    </>
  );
}
