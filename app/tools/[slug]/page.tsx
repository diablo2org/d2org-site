import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { Block, EntryLayout } from "@/components/EntryLayout";
import { entryLinks } from "@/components/EntryLinks";
import { FactList, osList, yesNo } from "@/components/FactList";
import { VersionSupport } from "@/components/VersionBadge";
import { getTool, toolCategories, tools } from "@/data/tools";
import styles from "@/components/Directory.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: PageProps<"/tools/[slug]">): Promise<Metadata> {
  const t = getTool((await params).slug);
  return t ? { title: t.name, description: t.summary } : {};
}
export default async function ToolPage({ params }: PageProps<"/tools/[slug]">) {
  const t = getTool((await params).slug);
  if (!t) notFound();
  const category = toolCategories[t.category].label;
  const capabilities = t.renderer ? [
    { name: "High FPS", value: t.renderer.highFps },
    { name: "Widescreen", value: t.renderer.widescreen },
    { name: "Shaders", value: t.renderer.shaders },
  ] : [];

  return <EntryLayout
    eyebrow={category} name={t.name} summary={t.summary} status={t.status}
    refKey={`tool:${t.slug}`} verification={t} file="data/tools.ts"
    crumbs={[{ href: "/", label: "Home" }, { href: "/tools", label: "Tools" }, { href: `/tools#${t.category}`, label: category }]}
    links={entryLinks(t)} meta={[t.author && `By ${t.author}`]}
    facts={[["Platform", osList(t.os) ?? "Not documented"], ["Source code", yesNo(t.openSource) === "Yes" ? "Open source" : t.openSource === false ? "Not open source" : "Not documented"], ...(t.currentVersion ? [["Release", t.currentVersion] as [string, string]] : [])]}
    sidebar={<><VersionSupport versions={t.versions} incompatible={t.incompatibleVersions} /><p className={styles.setupNote}>Use the project’s own documentation for installation instructions and requirements.</p><Link href="/play/versions" className={styles.inlineLink}>Understanding game versions<ArrowUpRight size={14} aria-hidden="true" /></Link></>}
  >
    {t.description && <Block title="About this tool"><p className={styles.reading}>{t.description}</p></Block>}
    {capabilities.length > 0 && <Block title="Renderer features"><dl className={styles.capabilities}>{capabilities.map(({name, value}) => <div key={name}><dt>{name}</dt><dd className={value ? styles.works : undefined}>{value === true ? <Check size={18} aria-hidden="true" /> : <Minus size={18} aria-hidden="true" />}{value === undefined ? "Not documented" : value ? "Supported" : "Not supported"}</dd></div>)}</dl></Block>}
    <Block title="Project details"><FactList facts={[["Category", category], ["Author", t.author], ["Current version", t.currentVersion], ["Open source", yesNo(t.openSource)], ["Operating systems", osList(t.os)]]} /></Block>
    {t.category === "graphics" && <Link href="/guides/modern-diablo-2-graphics" className={styles.readMore}><span><strong>Choosing a graphics setup</strong><span>Compare renderers, resolution options and modern display support.</span></span><ArrowUpRight size={21} aria-hidden="true" /></Link>}
  </EntryLayout>;
}
