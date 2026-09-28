import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/PageHeader";
import { mods } from "@/data/mods";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { GAME_VERSIONS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Diablo II versions explained",
  description:
    "Every major legacy Diablo II patch from 1.00 to 1.14d, what changed, and which version to use for mods, tools and multiplayer.",
};

export default function VersionsPage() {
  const supportCount = (v: string) =>
    [...tools, ...mods].filter((p) => (p.versions as string[]).includes(v)).length;

  return (
    <>
      <PageHeader
        eyebrow="Play"
        title="Diablo II versions explained"
        lead="The patch you run decides which mods, tools and servers work. For most people the answer is 1.14d for the unmodified game, and 1.13c for everything else."
        crumbs={[{ href: "/", label: "Home" }, { href: "/play", label: "Play" }]}
      />

      <Section title="The short version">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="panel rounded-sm p-6">
            <p className="font-mono text-2xl text-gold-300">1.14d</p>
            <p className="mt-2 text-stone-300">
              What Blizzard&apos;s installers give you, and what the official realms run. Best if you want the unmodified game
              with as little setup as possible.
            </p>
          </div>
          <div className="panel rounded-sm p-6">
            <p className="font-mono text-2xl text-gold-300">1.13c</p>
            <p className="mt-2 text-stone-300">
              The community standard. Most mods, private servers, plugins and tools target it, because 1.14 broke DLL-based
              modding.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Every version" lead="The number on the right counts the mods and tools in our directory known to support each version.">
        <ol className="relative grid gap-0 border-l border-stone-700 pl-6">
          {versions.map((v) => (
            <li key={v.version} className="relative pb-8 last:pb-0">
              <span aria-hidden className="absolute top-2 -left-[29px] size-2.5 rotate-45 border border-gold-700 bg-stone-950" />
              <Link href={`/play/versions/${v.version}`} className="group block">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-mono text-xl text-stone-100 group-hover:text-gold-300">{v.version}</span>
                  <span className="font-display text-xl font-semibold text-stone-200">{v.headline}</span>
                  <span className="text-sm text-stone-500 tabular-nums">{v.released}</span>
                  {supportCount(v.version) > 0 && (
                    <span className="ml-auto text-xs text-stone-500">{supportCount(v.version)} supported projects</span>
                  )}
                </div>
                <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-stone-400">{v.whyItMatters}</p>
              </Link>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-xs text-stone-500">
          Tracked versions: {GAME_VERSIONS.join(", ")}. Intermediate patches (1.01–1.06, 1.09a–c, 1.13a–b and so on) are
          left out. Few projects target them.
        </p>
      </Section>
    </>
  );
}
