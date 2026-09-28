"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeftRight, Check, List, X } from "lucide-react";
import { ProjectStatus } from "./ProjectStatus";
import type { Server } from "@/lib/types";
import styles from "@/app/servers/servers.module.css";

const STYLES = [
  { key: "all", label: "All play styles" },
  { key: "near-vanilla", label: "Near-vanilla" },
  { key: "vanilla-plus", label: "Vanilla-plus" },
  { key: "heavily-modified", label: "Overhaul" },
] as const;
const similarity = (s: Server) => STYLES.find((style) => style.key === s.vanillaSimilarity)?.label;
const unknown = <span className={styles.unknown}>Not documented</span>;
const yn = (value?: boolean) => value === undefined ? unknown : value ? <span className={styles.yes}><Check size={13} aria-hidden="true" /> Yes</span> : "No";

type Field = { label: string; value: (s: Server) => ReactNode };
const groups: { title: string; fields: Field[] }[] = [
  { title: "The experience", fields: [
    { label: "Play style", value: (s) => s.style },
    { label: "Vanilla similarity", value: similarity },
    { label: "Custom content", value: (s) => yn(s.customContent) },
    { label: "Loot changes", value: (s) => yn(s.lootChanges) },
    { label: "Skill changes", value: (s) => yn(s.skillChanges) },
    { label: "Endgame", value: (s) => s.endgame ?? unknown },
  ] },
  { title: "Playing together", fields: [
    { label: "Ladder", value: (s) => yn(s.ladder) },
    { label: "Season length", value: (s) => s.seasonLength ?? unknown },
    { label: "Trading", value: (s) => s.trading ?? unknown },
    { label: "PvP", value: (s) => s.pvp ?? unknown },
    { label: "Multiboxing", value: (s) => s.multiboxing ?? unknown },
    { label: "Singleplayer", value: (s) => yn(s.singleplayer) },
    { label: "Cash shop", value: (s) => yn(s.cashShop) },
  ] },
  { title: "Getting connected", fields: [
    { label: "Base version", value: (s) => s.versions.length ? <span className={styles.version}>{s.versions.join(", ")}</span> : unknown },
    { label: "Launcher", value: (s) => s.launcher ?? unknown },
    { label: "Game servers", value: (s) => s.regions?.join(", ") ?? unknown },
    { label: "Status", value: (s) => <ProjectStatus status={s.status} /> },
    { label: "Last verified", value: (s) => s.lastVerified ?? "Not yet verified" },
  ] },
];

export function ServerDirectory({ servers }: { servers: Server[] }) {
  const [view, setView] = useState<"browse" | "compare">("browse");
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<string[]>(servers.filter((s) => !s.smaller).slice(0, 3).map((s) => s.slug));
  const [differences, setDifferences] = useState(false);
  const chosen = servers.filter((s) => selected.includes(s.slug));
  const visible = servers.filter((s) => filter === "all" || s.vanillaSimilarity === filter);

  function toggle(slug: string) {
    setSelected((current) => current.includes(slug) ? current.filter((s) => s !== slug) : current.length < 4 ? [...current, slug] : current);
  }

  function choose(s: Server) {
    return <label className={styles.selectServer}>
      <input type="checkbox" checked={selected.includes(s.slug)} onChange={() => toggle(s.slug)} disabled={!selected.includes(s.slug) && selected.length >= 4} />
      <span>{view === "browse" ? "Compare" : s.name}</span>
      {view === "browse" && <span className="sr-only"> {s.name}</span>}
    </label>;
  }

  const row = (s: Server) => <li key={s.slug} className={styles.serverRow}>
    <div className={styles.serverIdentity}>
      <ProjectStatus status={s.status} />
      <h3><Link href={`/servers/${s.slug}`}>{s.name}<ArrowRight size={17} aria-hidden="true" /></Link></h3>
      <span className={styles.styleLabel}>{similarity(s)}</span>
    </div>
    <div className={styles.serverDescription}>
      <p>{s.summary}</p>
      <div className={styles.rowFacts}>
        {s.versions.length > 0 && <span>Patch <span className={styles.version}>{s.versions.join(", ")}</span></span>}
        <span>{s.ladder === undefined ? "Ladder not documented" : s.ladder ? "Seasonal ladder" : "No ladder"}</span>
        {s.cashShop && <span>Cash shop</span>}
      </div>
    </div>
    {choose(s)}
  </li>;

  return <section className={styles.directory} aria-label="Find and compare servers">
    <div className={styles.viewBar}>
      <div className={styles.viewSwitch} role="group" aria-label="Directory view">
        <button type="button" aria-pressed={view === "browse"} onClick={() => setView("browse")}><List size={17} aria-hidden="true" /> Browse servers</button>
        <button type="button" aria-pressed={view === "compare"} onClick={() => setView("compare")}><ArrowLeftRight size={17} aria-hidden="true" /> Compare <span className={styles.count}>{selected.length}</span></button>
      </div>
      <span className={styles.directoryNote}>Facts, not rankings.</span>
    </div>

    {view === "browse" ? <>
      <div className={styles.filterBar}>
        <div className={styles.filters} role="group" aria-label="Filter by play style">
          {STYLES.map((style) => <button key={style.key} type="button" aria-pressed={filter === style.key} onClick={() => setFilter(style.key)}>{style.label}</button>)}
        </div>
        <span className={styles.resultCount} aria-live="polite">{visible.length} realms</span>
      </div>
      <h2 className="sr-only">Server overview</h2>
      <ul className={styles.serverList}>{visible.filter((s) => !s.smaller).map(row)}</ul>
      {visible.some((s) => s.smaller) && <section id="smaller" className={styles.smaller}>
        <div className={styles.sectionHeading}><h2>Smaller realms</h2><p>Niche and regional communities, with their own take on the game.</p></div>
        <ul className={styles.serverList}>{visible.filter((s) => s.smaller).map(row)}</ul>
      </section>}
      <div className={styles.shortlist}>
        <div><strong aria-live="polite">{selected.length} of 4 selected</strong><span>Choose realms to compare side by side.</span></div>
        <button type="button" className={styles.action} onClick={() => { setView("compare"); document.getElementById("main")?.scrollIntoView(); }}>Compare servers <ArrowRight size={16} aria-hidden="true" /></button>
      </div>
    </> : <div className={styles.comparison}>
      <div className={styles.compareIntro}><div><h2>Side by side</h2><p>Choose up to four realms. Undocumented details stay marked as unknown.</p></div><button type="button" className={styles.textButton} onClick={() => setSelected([])}>Clear selection</button></div>
      <fieldset className={styles.picker}><legend className="sr-only">Servers to compare, maximum four</legend>{servers.map((s) => <div key={s.slug}>{choose(s)}</div>)}</fieldset>
      {chosen.length >= 2 ? <>
        <div className={styles.tableTools}><span aria-live="polite">Comparing {chosen.length} realms</span><label><input type="checkbox" checked={differences} onChange={(e) => setDifferences(e.target.checked)} /> Show differences only</label></div>
        <p className={styles.scrollHint}>Scroll across to compare. Feature names stay in place.</p>
        <div className={styles.tableScroll} role="region" aria-label="Server comparison table" tabIndex={0}>
          <table className={styles.compareTable} style={{ minWidth: 170 + chosen.length * 230 }}>
            <caption className="sr-only">Documented features of {chosen.map((s) => s.name).join(", ")}</caption>
            <thead><tr><th scope="col">Compare realms</th>{chosen.map((s) => <th scope="col" key={s.slug}><Link href={`/servers/${s.slug}`}>{s.name}<ArrowRight size={15} aria-hidden="true" /></Link><ProjectStatus status={s.status} /><button type="button" onClick={() => toggle(s.slug)} aria-label={`Remove ${s.name} from comparison`}><X size={15} aria-hidden="true" /></button></th>)}</tr></thead>
            {groups.map((group) => {
              // React node output is deterministic here; compare the underlying record fields instead.
              const keys: Record<string, keyof Server> = { "Play style": "style", "Vanilla similarity": "vanillaSimilarity", "Custom content": "customContent", "Loot changes": "lootChanges", "Skill changes": "skillChanges", "Endgame": "endgame", "Ladder": "ladder", "Season length": "seasonLength", "Trading": "trading", "PvP": "pvp", "Multiboxing": "multiboxing", "Singleplayer": "singleplayer", "Cash shop": "cashShop", "Base version": "versions", "Launcher": "launcher", "Game servers": "regions", "Status": "status", "Last verified": "lastVerified" };
              const fields = group.fields.filter((field) => !differences || new Set(chosen.map((s) => JSON.stringify(s[keys[field.label]]))).size > 1);
              return fields.length > 0 && <tbody key={group.title}><tr className={styles.tableGroup}><th colSpan={chosen.length + 1} scope="rowgroup">{group.title}</th></tr>{fields.map((field) => <tr key={field.label}><th scope="row">{field.label}</th>{chosen.map((s) => <td key={s.slug}>{field.value(s)}</td>)}</tr>)}</tbody>;
            })}
          </table>
        </div>
        <p className={styles.dataNote}>Season schedules and server rules can change. Check each realm’s official site before joining. “Not documented” does not mean a feature is unavailable.</p>
      </> : <div className={styles.empty}><ArrowLeftRight size={28} aria-hidden="true" /><h3>Choose {chosen.length === 1 ? "one more realm" : "two or more realms"}</h3><p>Select servers above to compare their gameplay, seasons and setup.</p></div>}
    </div>}
  </section>;
}
