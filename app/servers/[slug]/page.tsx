import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { EntryLinks, entryLinks } from "@/components/EntryLinks";
import { FactList, osList, yesNo } from "@/components/FactList";
import { ProjectStatus } from "@/components/ProjectStatus";
import { RelatedLinks } from "@/components/Related";
import { VerificationNote } from "@/components/Verification";
import { VersionSupport } from "@/components/VersionBadge";
import { mods } from "@/data/mods";
import { getServer, servers } from "@/data/servers";
import styles from "../servers.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return servers.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: PageProps<"/servers/[slug]">): Promise<Metadata> {
  const s = getServer((await params).slug);
  return s ? { title: `${s.name} private server`, description: s.summary } : {};
}

const SCALE = [
  { key: "near-vanilla", label: "Near-vanilla", body: "The original game, with small conveniences." },
  { key: "vanilla-plus", label: "Vanilla-plus", body: "The classic feel, with rebalancing and new content." },
  { key: "heavily-modified", label: "Overhaul", body: "A different game on the same engine." },
];
const host = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

export default async function ServerPage({ params }: PageProps<"/servers/[slug]">) {
  const s = getServer((await params).slug);
  if (!s) notFound();
  const mod = mods.find((m) => m.slug === s.slug);
  const playStyle = SCALE.find((step) => step.key === s.vanillaSimilarity)!;

  return <div className={styles.surface}>
    <header className={`${styles.hero} ${styles.profileHero}`}>
      <div className={styles.width}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/servers">Servers</Link><span aria-hidden="true">/</span><span>{s.name}</span></nav>
        <div className={styles.profileTitle}><h1>{s.name}</h1><ProjectStatus status={s.status} /></div>
        <p className={styles.profileSummary}>{s.summary}</p>
        <EntryLinks links={entryLinks(s)} />
        <dl className={styles.profileFacts}>
          <div><dt>Play style</dt><dd>{s.style}</dd></div>
          <div><dt>Base version</dt><dd>{s.versions.length ? <span className={styles.version}>{s.versions.join(", ")}</span> : "Not documented"}</dd></div>
          <div><dt>Ladder</dt><dd>{s.ladder === undefined ? "Not documented" : s.ladder ? "Seasonal" : "No ladder"}</dd></div>
          {s.founded && <div><dt>Established</dt><dd>{s.founded}</dd></div>}
          {s.cashShop && <div><dt>Monetisation</dt><dd>Cash shop</dd></div>}
        </dl>
      </div>
    </header>
    <div className={styles.width}>
      <nav className={styles.sectionNav} aria-label="On this page">
        <a href="#gameplay">Gameplay</a><a href="#playing">Playing here</a><a href="#setup">Getting started</a>
        {s.services?.length ? <a href="#community">Community tools</a> : null}
        <a href="#sources">Sources</a>
      </nav>
      <div className={styles.profileLayout}>
        <div className={styles.profileContent}>
          <section id="gameplay" className={styles.profileSection}>
            <h2>The experience</h2>
            <div className={styles.experience}>
              <div className={styles.experienceCopy}><h3>{playStyle.label}</h3><p>{playStyle.body}</p></div>
              <ol className={styles.spectrum} aria-label="Similarity to vanilla Diablo II">
                {SCALE.map((step) => <li key={step.key} aria-current={step.key === s.vanillaSimilarity ? "step" : undefined}><span aria-hidden="true" /><span>{step.label}</span>{step.key === s.vanillaSimilarity && <span className="sr-only"> — this server</span>}</li>)}
              </ol>
            </div>
            {s.changes && s.changes.length > 0 && <>
              <h3 className={styles.subheading}>What changes from vanilla</h3>
              <ul className={styles.changes}>{s.changes.map((change) => <li key={change}>{change}</li>)}</ul>
              {mod && <Link href={`/mods/${mod.slug}`} className={styles.inlineLink}>Explore the {mod.name} mod <ArrowUpRight size={16} aria-hidden="true" /></Link>}
            </>}
          </section>
          <section id="playing" className={styles.profileSection}>
            <h2>Playing here</h2>
            <FactList facts={[
              ["Ladder", yesNo(s.ladder) ?? "Not documented"], ["Season length", s.seasonLength], ["Trading", s.trading], ["PvP", s.pvp], ["Endgame", s.endgame], ["Singleplayer", yesNo(s.singleplayer)], ["Multiboxing", s.multiboxing], ["Cash shop", yesNo(s.cashShop)],
            ]} />
            {s.regions && s.regions.length > 0 && <div className={styles.regions}><h3><MapPin size={16} aria-hidden="true" /> Game server locations</h3><ul>{s.regions.map((region) => <li key={region}>{region}</li>)}</ul></div>}
          </section>
          {s.services && s.services.length > 0 && <section id="community" className={styles.profileSection}>
            <h2>Community tools</h2>
            <ul className={styles.services}>{s.services.map((service) => <li key={service.url}><a href={service.url} rel="noopener"><span><strong>{service.label}</strong><p>{service.description}</p><span className={styles.serviceHost}>{host(service.url)}</span></span><ArrowUpRight size={20} aria-hidden="true" /></a></li>)}</ul>
          </section>}
          {s.history && <section className={styles.profileSection}><h2>Background</h2><p className={styles.history}>{s.history}</p></section>}
          <Link href="/servers" className={styles.backLink}><ArrowLeft size={17} aria-hidden="true" /> Back to all servers</Link>
        </div>
        <aside className={styles.profileSidebar}>
          <section id="setup" className={styles.setup}>
            <h2>Getting started</h2>
            <p>{s.launcher ? <>Install using the <strong>{s.launcher}</strong>.</> : "See the official website for installation instructions."}</p>
            <FactList facts={[["Base version", s.versions.join(", ") || "Not documented"], ["Systems", osList(s.os)], ["Language", s.language]]} />
            {s.versions.length > 0 && <div className={styles.versionLinks}><VersionSupport versions={s.versions} /></div>}
            {s.website && <a href={s.website} className={styles.action} rel="noopener">Visit official site <ArrowUpRight size={17} aria-hidden="true" /></a>}
            <p className={styles.setupNote}>Download launchers only from the server’s official site.</p>
            <Link href="/guides/private-servers-explained" className={styles.inlineLink}>Private servers explained <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </section>
          <section id="sources" className={styles.sources}><h2>About this listing</h2><VerificationNote {...s} file="data/servers.ts" /></section>
          <div className={styles.related}><RelatedLinks refKey={`server:${s.slug}`} title="Explore further" /></div>
        </aside>
      </div>
    </div>
  </div>;
}
