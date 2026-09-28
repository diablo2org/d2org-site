import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Block, EntryLayout } from "@/components/EntryLayout";
import { entryLinks } from "@/components/EntryLinks";
import { FactList, osList, yesNo } from "@/components/FactList";
import { VersionSupport } from "@/components/VersionBadge";
import { getMod, mods } from "@/data/mods";
import { getServer } from "@/data/servers";
import type { Mod } from "@/lib/types";
import styles from "@/components/Directory.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return mods.map((m) => ({ slug: m.slug })); }
export async function generateMetadata({ params }: PageProps<"/mods/[slug]">): Promise<Metadata> {
  const m = getMod((await params).slug);
  return m ? { title: m.name, description: m.summary } : {};
}
const STYLE: Record<Mod["style"], string> = { "vanilla-plus": "Vanilla-plus", overhaul: "Overhaul", "total-conversion": "Total conversion", utility: "Utility" };
export default async function ModPage({ params }: PageProps<"/mods/[slug]">) {
  const m = getMod((await params).slug);
  if (!m) notFound();
  const f = m.features ?? {};
  const realm = getServer(m.slug);
  return <EntryLayout
    eyebrow={`Mod · ${STYLE[m.style]}`} name={m.name} summary={m.summary} status={m.status}
    refKey={`mod:${m.slug}`} verification={m} file="data/mods.ts"
    crumbs={[{ href: "/", label: "Home" }, { href: "/mods", label: "Mods" }]}
    links={[...entryLinks(m), ...(m.links ?? []).map((l) => ({ label: l.label, href: l.url, icon: ExternalLink }))]}
    meta={[m.firstRelease && `Since ${m.firstRelease}`]}
    facts={[["Play style", STYLE[m.style]], ["Base version", m.versions.join(", ") || "Not documented"], ["Play modes", [m.singleplayer && "Singleplayer", m.multiplayer && "Multiplayer"].filter(Boolean).join(" & ") || "Not documented"]]}
    sidebar={<><VersionSupport versions={m.versions} incompatible={m.incompatibleVersions} /><FactList facts={[["Installer", m.installer], ["Systems", osList(m.os)]]} /><p className={styles.setupNote}>Follow the project’s installation guide for its required game files and launcher.</p></>}
  >
    {m.description && <Block title="The experience"><p className={styles.reading}>{m.description}</p></Block>}
    <Block title="What changes"><FactList facts={[["Custom classes", yesNo(f.customClasses)], ["New items", yesNo(f.newItems)], ["New skills", yesNo(f.newSkills)], ["New areas", yesNo(f.newAreas)], ["Endgame content", yesNo(f.endgame)], ["Difficulty changes", yesNo(f.difficultyChanges)]]} /><p className={styles.footnote}>Only documented features are listed.</p></Block>
    <Block title="Ways to play"><FactList facts={[["Singleplayer", yesNo(m.singleplayer) ?? "Not documented"], ["Multiplayer", yesNo(m.multiplayer) ?? "Not documented"], ["Seasonal ladder", yesNo(m.ladder) ?? "Not documented"]]} />
      {realm && <Link href={`/servers/${realm.slug}`} className={styles.readMore}><span><strong>{realm.name} realm</strong><span>Server rules, seasons and community links.</span></span><ArrowRight size={20} aria-hidden="true" /></Link>}
    </Block>
    {(m.firstRelease || m.latestRelease) && <Block title="Release history"><FactList facts={[["First release", m.firstRelease], ["Latest release", m.latestRelease]]} /></Block>}
  </EntryLayout>;
}
