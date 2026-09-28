import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";
import { TopicList } from "@/components/Planned";
import { getArticle } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modding",
  description:
    "A structured path for learning to mod legacy Diablo II, from how the game's files work to adding monsters and levels.",
  path: "/modding",
});

export default function ModdingPage() {
  const href = (slug: string) => getArticle("modding", slug)?.href;
  const path = [
    { title: "How Diablo II mods work", body: "MPQs, TXT and BIN files, DLLs, save files and assets.", href: href("how-mods-work") },
    { title: "Set up a modding environment", body: "A clean 1.13c install, the tools you need, and a safe way to test.", href: href("setup") },
    { title: "Make your first change", body: "Change the damage of an item and see it in game.", href: href("first-change") },
    { title: "Add a cube recipe", href: href("cube-recipe") },
    { title: "Create a custom item", href: href("custom-item") },
    { title: "Modify a skill", href: href("modify-skill") },
    { title: "Add a monster", href: href("add-monster") },
    { title: "Modify a level", href: href("modify-level") },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Modding"
        title="Learn to mod Diablo II"
        lead="Diablo II modding knowledge is spread across twenty years of forum posts. This is a structured path instead: start at the beginning and each step builds on the last."
        crumbs={[{ href: "/", label: "Home" }]}
      />
      <Section title="Beginner track" lead="Aimed at 1.13c, the version most mods and tools target.">
        <div className="max-w-3xl">
          <TopicList items={path} numbered />
        </div>
      </Section>
      <Section title="Reference" lead="Detailed file and format documentation for when you need to look things up.">
        <p className="max-w-2xl text-stone-400">
          Documentation for every data file and file format is planned for the{" "}
          <Link href="/technical" className="text-gold-300 hover:text-ember-400">technical reference</Link>. The modding tools we
          document are in the <Link href="/tools#modding" className="text-gold-300 hover:text-ember-400">tools directory</Link>.
        </p>
      </Section>
      <Section title="The Phrozen Keep" lead="The home of Diablo II modding since 2000.">
        <p className="max-w-2xl text-stone-400">
          When you get stuck, the Keep&apos;s{" "}
          <a href="https://d2mods.info/forum/kb/index" className="text-gold-300 hover:text-ember-400">knowledge base</a> and{" "}
          <a href="https://d2mods.info/forum/index.php" className="text-gold-300 hover:text-ember-400">forums</a> are where modders
          have gone for twenty-five years. Its GitHub organisation maintains{" "}
          <Link href="/tools/d2moo" className="text-gold-300 hover:text-ember-400">D2MOO</Link>, an open reimplementation of the game&apos;s
          code. Read <Link href="/history/phrozen-keep" className="text-gold-300 hover:text-ember-400">the story of the Keep</Link>.
        </p>
      </Section>
    </>
  );
}
