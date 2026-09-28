import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { mainServers, servers } from "@/data/servers";
import type { ToolCategory } from "@/lib/types";
import { ServerCard, ToolCard } from "./Cards";
import { ProjectStatus } from "./ProjectStatus";

const CALLOUT = {
  note: { label: "Note", cls: "border-q-magic/50 bg-q-magic/5", title: "text-q-magic" },
  tip: { label: "Tip", cls: "border-q-set/50 bg-q-set/5", title: "text-q-set" },
  warning: { label: "Warning", cls: "border-q-crafted/60 bg-q-crafted/5", title: "text-q-crafted" },
} as const;

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: keyof typeof CALLOUT;
  title?: string;
  children: ReactNode;
}) {
  const c = CALLOUT[type];
  return (
    <div className={`not-prose my-6 rounded-sm border-l-2 px-4 py-3 text-[0.95rem] leading-relaxed ${c.cls}`}>
      <p className={`mb-1 text-xs font-semibold tracking-[0.14em] uppercase ${c.title}`}>{title ?? c.label}</p>
      <div className="text-stone-200 [&_a]:text-gold-300 [&_a]:underline [&_a]:decoration-gold-700 [&_a:hover]:text-ember-400 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-gold-300 [&>p+p]:mt-2">
        {children}
      </div>
    </div>
  );
}

function Check({ v }: { v: boolean | undefined }) {
  if (v === undefined) return <span className="text-stone-600" title="Not yet documented">?</span>;
  return v ? (
    <span className="text-q-set" aria-label="Yes">✓</span>
  ) : (
    <span className="text-stone-500" aria-label="No">—</span>
  );
}

/** Renderer comparison, generated from tools data. */
export function RendererTable() {
  const renderers = tools.filter((t) => t.category === "graphics");
  const cols = ["1.13c", "1.14d"] as const;
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-sm border border-stone-700">
      <table className="w-full min-w-[36rem] text-sm">
        <thead className="bg-stone-850 text-left text-xs tracking-wide text-gold-300 uppercase">
          <tr>
            <th className="px-3 py-2.5 font-medium">Renderer</th>
            <th className="px-3 py-2.5 text-center font-medium">High FPS</th>
            <th className="px-3 py-2.5 text-center font-medium">Widescreen</th>
            <th className="px-3 py-2.5 text-center font-medium">Shaders</th>
            {cols.map((c) => (
              <th key={c} className="px-3 py-2.5 text-center font-mono font-medium normal-case">{c}</th>
            ))}
            <th className="px-3 py-2.5 text-center font-medium">Linux</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800">
          {renderers.map((t) => (
            <tr key={t.slug} className="hover:bg-stone-850/60">
              <td className="px-3 py-2.5">
                <Link href={`/tools/${t.slug}`} className="text-stone-100 hover:text-gold-300">{t.name}</Link>
              </td>
              <td className="px-3 py-2.5 text-center"><Check v={t.renderer?.highFps} /></td>
              <td className="px-3 py-2.5 text-center"><Check v={t.renderer?.widescreen} /></td>
              <td className="px-3 py-2.5 text-center"><Check v={t.renderer?.shaders} /></td>
              {cols.map((c) => (
                <td key={c} className="px-3 py-2.5 text-center">
                  <Check v={t.versions.length ? t.versions.includes(c) : undefined} />
                </td>
              ))}
              <td className="px-3 py-2.5 text-center"><Check v={t.os?.includes("linux") || undefined} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-stone-800 bg-stone-900 px-3 py-2 text-xs text-stone-500">
        Generated from the <Link href="/tools" className="text-stone-300 hover:text-gold-300">tools directory</Link>. &quot;?&quot; means not yet documented.
      </p>
    </div>
  );
}

export function VersionSummary() {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-sm border border-stone-700">
      <table className="w-full min-w-[32rem] text-sm">
        <thead className="bg-stone-850 text-left text-xs tracking-wide text-gold-300 uppercase">
          <tr>
            <th className="px-3 py-2.5 font-medium">Version</th>
            <th className="px-3 py-2.5 font-medium">Released</th>
            <th className="px-3 py-2.5 font-medium">Headline</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-800">
          {versions.map((v) => (
            <tr key={v.version} className="hover:bg-stone-850/60">
              <td className="px-3 py-2.5 font-mono">
                <Link href={`/play/versions/${v.version}`} className="text-stone-100 hover:text-gold-300">{v.version}</Link>
              </td>
              <td className="px-3 py-2.5 text-stone-400 tabular-nums">{v.released}</td>
              <td className="px-3 py-2.5 text-stone-200">{v.headline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ToolGrid({ category }: { category: ToolCategory }) {
  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {tools.filter((t) => t.category === category).map((t) => <ToolCard key={t.slug} tool={t} />)}
    </div>
  );
}

export function ServerGrid() {
  return (
    <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
      {mainServers.map((s) => <ServerCard key={s.slug} server={s} />)}
    </div>
  );
}

export function Status({ of }: { of: string }) {
  const t = tools.find((x) => x.slug === of) ?? servers.find((x) => x.slug === of);
  return t ? <ProjectStatus status={t.status} /> : null;
}

function A({ href = "", ...props }: ComponentProps<"a">) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} rel="noopener" {...props} />;
}

export const mdxComponents = {
  a: A,
  Callout,
  RendererTable,
  VersionSummary,
  ToolGrid,
  ServerGrid,
  Status,
};
