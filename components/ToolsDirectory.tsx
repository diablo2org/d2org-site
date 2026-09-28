"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, Check, List, Search, Table2, X } from "lucide-react";
import { ProjectStatus } from "./ProjectStatus";
import { VersionSupport } from "./VersionBadge";
import { toolCategories } from "@/data/tools";
import { GAME_VERSIONS, type GameVersion, type Tool, type ToolCategory } from "@/lib/types";
import styles from "./Directory.module.css";

const categories = Object.entries(toolCategories) as [ToolCategory, { label: string; blurb: string }][];
const subscribe = (notify: () => void) => { window.addEventListener("hashchange", notify); return () => window.removeEventListener("hashchange", notify); };
const snapshot = () => window.location.hash.slice(1);
const serverSnapshot = () => "";

export function ToolsDirectory({ tools }: { tools: Tool[] }) {
  const hash = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const category = categories.some(([key]) => key === hash) ? hash : "all";
  const matrix = hash === "compatibility";
  const [query, setQuery] = useState("");
  const [version, setVersion] = useState("");
  const [allVersions, setAllVersions] = useState(false);
  const filtered = tools.filter((tool) =>
    (matrix || category === "all" || tool.category === category) &&
    (!version || tool.versions.includes(version as GameVersion)) &&
    (!query.trim() || `${tool.name} ${tool.summary} ${tool.tags?.join(" ") ?? ""}`.toLowerCase().includes(query.trim().toLowerCase()))
  );
  const shownVersions = version ? [version as GameVersion] : allVersions ? GAME_VERSIONS : GAME_VERSIONS.filter((v) => ["1.09d", "1.10f", "1.12a", "1.13c", "1.13d", "1.14d"].includes(v));
  function reset() { setQuery(""); setVersion(""); window.location.hash = "tools"; }

  return <div className={styles.width} id="tools">
    <nav className={styles.viewBar} aria-label="Tools view">
      <a href="#tools" aria-current={!matrix ? "page" : undefined}><List size={17} aria-hidden="true" /> Browse tools</a>
      <a href="#compatibility" aria-current={matrix ? "page" : undefined}><Table2 size={17} aria-hidden="true" /> Compatibility</a>
    </nav>
    <div className={styles.searchBar}>
      <label className={styles.search}><Search size={18} aria-hidden="true" /><span className="sr-only">Search tools</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools, features or names" /></label>
      <label className={styles.select}><span>Game version</span><select value={version} onChange={(event) => setVersion(event.target.value)}><option value="">All versions</option>{GAME_VERSIONS.toReversed().map((v) => <option key={v} value={v}>{v}</option>)}</select></label>
    </div>
    {version && <p className={styles.filterNote}>Showing documented support for patch {version}. Tools with unknown compatibility are excluded.</p>}
    <div className={styles.catalogue}>
      <nav className={styles.categories} aria-label="Tool categories">
        <a href="#tools" aria-current={category === "all" && !matrix ? "true" : undefined}><span>All tools</span><span>{tools.length}</span></a>
        {categories.map(([key, info]) => <a key={key} href={`#${key}`} aria-current={category === key && !matrix ? "true" : undefined}><span>{info.label}</span><span>{tools.filter((t) => t.category === key).length}</span></a>)}
        <Link href="/guides/modern-diablo-2-graphics" className={styles.categoryGuide}>Choosing a renderer?<span>Read the graphics guide <ArrowRight size={14} aria-hidden="true" /></span></Link>
      </nav>
      <div className={styles.results}>
        <div className={styles.resultsHeader}><span role="status">{filtered.length} {filtered.length === 1 ? "tool" : "tools"}{query ? ` matching “${query}”` : ""}</span>{(query || version || category !== "all") && <button type="button" onClick={reset}>Reset filters</button>}</div>
        {!filtered.length ? <div className={styles.empty}><h2>{category === "calculators" && !query && !version ? "Calculators are on the way" : "No tools match these filters"}</h2><p>{category === "calculators" && !query && !version ? "Breakpoint calculators and character planners will be added here as the directory grows." : "Try another name, choose a different version, or browse all tools."}</p><button type="button" className={styles.action} onClick={reset}>Browse all tools <ArrowRight size={16} aria-hidden="true" /></button></div> : matrix ? <section id="compatibility">
          <div className={styles.sectionHeading}><h2>Version compatibility</h2><p>Documented support for each tool. An unknown is not an incompatibility.</p></div>
          <div className={styles.matrixTools}><span><Check size={14} aria-hidden="true" /> Works <X size={14} aria-hidden="true" /> Incompatible <span>— Unknown</span></span>{!version && <label><input type="checkbox" checked={allVersions} onChange={(event) => setAllVersions(event.target.checked)} /> Include older versions</label>}</div>
          <p className={styles.scrollNote}>Scroll across for more versions. Tool names stay in view.</p>
          <div className={styles.matrixScroll} role="region" aria-label="Tool compatibility table" tabIndex={0}><table className={styles.matrix}>
            <caption className="sr-only">Tool compatibility by Diablo II patch</caption>
            <thead><tr><th scope="col">Tool</th>{shownVersions.map((v) => <th scope="col" key={v}><Link href={`/play/versions/${v}`}>{v}</Link></th>)}</tr></thead>
            <tbody>{filtered.map((tool) => <tr key={tool.slug}><th scope="row"><Link href={`/tools/${tool.slug}`}>{tool.name}</Link></th>{shownVersions.map((v) => <td key={v}>{tool.versions.includes(v) ? <span className={styles.works}><Check size={17} aria-hidden="true" /><span className="sr-only">Works</span></span> : tool.incompatibleVersions?.includes(v) ? <span className={styles.incompatible}><X size={17} aria-hidden="true" /><span className="sr-only">Not compatible</span></span> : <span className={styles.unknown}><span aria-hidden="true">—</span><span className="sr-only">Not documented</span></span>}</td>)}</tr>)}</tbody>
          </table></div>
        </section> : categories.map(([key, info]) => {
          const items = filtered.filter((tool) => tool.category === key);
          return items.length > 0 && <section key={key} id={key} className={styles.toolGroup}>
            <div className={styles.sectionHeading}><h2>{info.label}</h2><p>{info.blurb}</p></div>
            <ul className={styles.toolList}>{items.map((tool) => <li key={tool.slug} className={styles.toolRow}>
              <div><h3><Link href={`/tools/${tool.slug}`}>{tool.name}<ArrowRight size={16} aria-hidden="true" /></Link></h3><ProjectStatus status={tool.status} /></div>
              <div><p>{tool.summary}</p><div className={styles.toolVersions}><span>Works with</span>{tool.versions.length ? <VersionSupport versions={tool.versions} compact /> : <span className={styles.unknown}>Not yet documented</span>}</div></div>
            </li>)}</ul>
          </section>;
        })}
      </div>
    </div>
  </div>;
}
