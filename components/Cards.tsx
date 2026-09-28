import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { communityKinds } from "@/data/communities";
import { toolCategories } from "@/data/tools";
import type { Community, Mod, Server, Tool } from "@/lib/types";
import { ProjectStatus } from "./ProjectStatus";
import { VersionSupport } from "./VersionBadge";

const MOD_STYLE: Record<Mod["style"], string> = {
  "vanilla-plus": "Vanilla-plus",
  overhaul: "Overhaul",
  "total-conversion": "Total conversion",
  utility: "Utility",
};

function CardShell({ href, featured, children }: { href: string; featured?: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`project-card diablo-panel${featured ? " is-featured" : ""} group relative flex h-full flex-col p-6 transition-colors hover:border-gold-700`}
    >
      {children}
    </Link>
  );
}

function Meta({ items, featured }: { items: (string | false | undefined)[]; featured?: boolean }) {
  const shown = items.filter(Boolean) as string[];
  return (
    <p className="font-ui text-[0.65rem] tracking-[0.04em] uppercase text-stone-400">
      {featured && <span className="featured-mark">Featured<span className="mx-1.5 text-blood-500">/</span></span>}
      {shown.map((m, i) => (
        <span key={m}>
          {i > 0 && <span className="mx-1.5 text-blood-500">/</span>}
          {m}
        </span>
      ))}
    </p>
  );
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-4 font-display text-xl leading-snug font-normal text-stone-100 transition-colors group-hover:text-white">
      {children}
    </h3>
  );
}

export function ModCard({ mod }: { mod: Mod }) {
  const play = [mod.singleplayer && "Singleplayer", mod.multiplayer && "Multiplayer"].filter(Boolean).join(" & ");
  return (
    <CardShell href={`/mods/${mod.slug}`}>
      <div className="grid min-h-9 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <Meta items={["Mod", MOD_STYLE[mod.style], play || undefined]} />
        <ProjectStatus status={mod.status} />
      </div>
      <CardTitle>{mod.name}</CardTitle>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-300">{mod.summary}</p>
      <div className="mt-4">
        <VersionSupport versions={mod.versions} compact />
      </div>
    </CardShell>
  );
}

export function ServerCard({ server }: { server: Server }) {
  return (
    <CardShell href={`/servers/${server.slug}`} featured={server.featured}>
      <div className="grid min-h-9 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <Meta items={["Server", server.style]} featured={server.featured} />
        <ProjectStatus status={server.status} />
      </div>
      <CardTitle>{server.name}</CardTitle>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-300">{server.summary}</p>
      <div className="mt-4">
        <VersionSupport versions={server.versions} compact />
      </div>
    </CardShell>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <CardShell href={`/tools/${tool.slug}`}>
      <div className="grid min-h-9 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <Meta items={["Tool", toolCategories[tool.category].label, tool.openSource && "Open source"]} />
        <ProjectStatus status={tool.status} />
      </div>
      <CardTitle>{tool.name}</CardTitle>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-300">{tool.summary}</p>
      <div className="mt-4">
        <VersionSupport versions={tool.versions} compact />
      </div>
    </CardShell>
  );
}

const COVERS: Record<Community["covers"], string> = {
  legacy: "Legacy D2",
  resurrected: "Resurrected",
  both: "Legacy & Resurrected",
};

export function CommunityCard({ community }: { community: Community }) {
  return (
    <CardShell href={`/community/${community.slug}`}>
      <div className="grid min-h-9 grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <Meta items={[communityKinds[community.kind], community.founded && `Since ${community.founded}`, COVERS[community.covers]]} />
        <ProjectStatus status={community.status} />
      </div>
      <CardTitle>{community.name}</CardTitle>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-300">{community.summary}</p>
    </CardShell>
  );
}

export function LinkCard({
  href,
  eyebrow,
  title,
  children,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <CardShell href={href}>
      {eyebrow && <Meta items={[eyebrow]} />}
      <CardTitle>{title}</CardTitle>
      {children && <p className="mt-2 text-sm leading-relaxed text-stone-300">{children}</p>}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 transition-colors group-hover:text-ember-400" aria-hidden>
        Read <ArrowRight className="size-3.5" />
      </span>
    </CardShell>
  );
}
