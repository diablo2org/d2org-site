"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ProjectStatus } from "./ProjectStatus";
import { VersionSupport } from "./VersionBadge";
import type { Mod } from "@/lib/types";
import styles from "./Directory.module.css";

export const MOD_STYLES = { "vanilla-plus": "Vanilla-plus", overhaul: "Overhaul", "total-conversion": "Total conversion", utility: "Utility" };
const featureLabels: [keyof NonNullable<Mod["features"]>, string][] = [
  ["customClasses", "Custom classes"], ["newItems", "New items"], ["newSkills", "New skills"], ["newAreas", "New areas"], ["endgame", "Endgame content"], ["difficultyChanges", "Difficulty changes"],
];

export function ModsDirectory({ mods }: { mods: Mod[] }) {
  const [mode, setMode] = useState("all");
  const shown = mods.filter((mod) => mode === "all" || (mode === "singleplayer" ? mod.singleplayer : mod.multiplayer));
  return <div className={styles.width}>
    <div className={styles.modToolbar}>
      <div className={styles.modeFilters} role="group" aria-label="Filter mods by play mode">
        {[["all", "All mods"], ["singleplayer", "Singleplayer"], ["multiplayer", "Multiplayer"]].map(([value, label]) => <button key={value} type="button" aria-pressed={mode === value} onClick={() => setMode(value)}>{label}</button>)}
      </div>
      <span role="status">{shown.length} {shown.length === 1 ? "mod" : "mods"}</span>
    </div>
    {mode !== "all" && <p className={styles.filterNote}>Showing documented {mode} support. Undocumented play modes are excluded.</p>}
    <ul className={styles.modList}>{shown.map((mod) => <li key={mod.slug} className={styles.modRow}>
      <div className={styles.modIdentity}><ProjectStatus status={mod.status} /><h2><Link href={`/mods/${mod.slug}`}>{mod.name}</Link></h2><span>{MOD_STYLES[mod.style]}</span><VersionSupport versions={mod.versions} compact /></div>
      <div className={styles.modBody}><p>{mod.summary}</p><ul className={styles.featureTags}>{featureLabels.filter(([key]) => mod.features?.[key]).map(([key, label]) => <li key={key}><Check size={14} aria-hidden="true" />{label}</li>)}</ul><div className={styles.modActions}><Link href={`/mods/${mod.slug}`} className={styles.inlineLink}>Explore {mod.name}<ArrowRight size={16} aria-hidden="true" /></Link><span>{[mod.singleplayer && "Singleplayer", mod.multiplayer && "Multiplayer", mod.ladder && "Seasonal ladder"].filter(Boolean).join(" · ") || "Play modes not documented"}</span></div></div>
    </li>)}</ul>
    {!shown.length && <div className={styles.empty}><h2>No documented matches yet</h2><p>Try all mods to see the full directory.</p><button type="button" onClick={() => setMode("all")} className={styles.action}>Show all mods</button></div>}
    <div className={styles.directoryClose}><div><h2>Looking for a realm?</h2><p>Compare ladders, server rules and the online side of these projects.</p></div><Link href="/servers" className={styles.action}>Compare servers <ArrowRight size={16} aria-hidden="true" /></Link></div>
    <p className={styles.footnote}>Historical and smaller mods will be added as the directory grows. For stash plugins and graphics utilities, explore <Link href="/tools">Tools</Link>.</p>
  </div>;
}
