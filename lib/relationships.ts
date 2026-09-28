import { communities } from "@/data/communities";
import { mods } from "@/data/mods";
import { servers } from "@/data/servers";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { getAllArticles, type Section } from "./content";
import type { Ref, RefKind } from "./types";

export interface Node {
  ref: Ref;
  kind: RefKind;
  title: string;
  href: string;
  summary: string;
  related: Ref[];
}

export const KIND_LABELS: Record<RefKind, string> = {
  mod: "Mod",
  server: "Server",
  tool: "Tool",
  version: "Version",
  play: "Guide",
  guide: "Guide",
  modding: "Modding",
  history: "History",
  community: "Community",
};

const SECTION_KIND: Record<Section, RefKind> = {
  play: "play",
  guides: "guide",
  modding: "modding",
  history: "history",
};

let graph: Map<Ref, Node> | undefined;

function buildGraph() {
  const g = new Map<Ref, Node>();
  const add = (n: Node) => g.set(n.ref, n);

  for (const m of mods)
    add({ ref: `mod:${m.slug}`, kind: "mod", title: m.name, href: `/mods/${m.slug}`, summary: m.summary, related: m.related ?? [] });
  for (const s of servers)
    add({ ref: `server:${s.slug}`, kind: "server", title: s.name, href: `/servers/${s.slug}`, summary: s.summary, related: s.related ?? [] });
  for (const c of communities)
    add({ ref: `community:${c.slug}`, kind: "community", title: c.name, href: `/community/${c.slug}`, summary: c.summary, related: c.related ?? [] });
  for (const t of tools)
    add({ ref: `tool:${t.slug}`, kind: "tool", title: t.name, href: `/tools/${t.slug}`, summary: t.summary, related: t.related ?? [] });
  for (const v of versions)
    add({ ref: `version:${v.version}`, kind: "version", title: `Patch ${v.version}`, href: `/play/versions/${v.version}`, summary: v.headline, related: v.related ?? [] });
  for (const a of getAllArticles()) {
    const kind = SECTION_KIND[a.section];
    add({ ref: `${kind}:${a.slug}`, kind, title: a.title, href: a.href, summary: a.summary, related: a.related ?? [] });
  }
  return g;
}

function getGraph() {
  if (!graph || process.env.NODE_ENV !== "production") graph = buildGraph();
  return graph;
}

export function resolve(ref: Ref) {
  return getGraph().get(ref);
}

/**
 * Everything this node links to, plus everything that links to it.
 * Relationships only need declaring on one side.
 */
export function getRelated(ref: Ref): Node[] {
  const g = getGraph();
  const out = new Map<Ref, Node>();
  const self = g.get(ref);
  for (const r of self?.related ?? []) {
    const n = g.get(r);
    if (n) out.set(r, n);
  }
  for (const n of g.values()) {
    if (n.ref !== ref && n.related.includes(ref)) out.set(n.ref, n);
  }
  out.delete(ref);
  return [...out.values()];
}

/** Refs that point at nothing — surfaced by `npm run check`. */
export function findBrokenRefs() {
  const g = getGraph();
  const broken: { from: Ref; to: Ref }[] = [];
  for (const n of g.values())
    for (const r of n.related) if (!g.has(r)) broken.push({ from: n.ref, to: r });
  return broken;
}
