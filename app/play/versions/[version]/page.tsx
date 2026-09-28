import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { ModCard, ToolCard } from "@/components/Cards";
import { PageHeader, Section } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/Related";
import { VerificationNote } from "@/components/Verification";
import { mods } from "@/data/mods";
import { tools } from "@/data/tools";
import { getVersion, versions } from "@/data/versions";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return versions.map((v) => ({ version: v.version }));
}

export async function generateMetadata({ params }: PageProps<"/play/versions/[version]">): Promise<Metadata> {
  const v = getVersion((await params).version);
  if (!v) return {};
  return pageMetadata({ title: `Diablo II ${v.version}: ${v.headline}`, description: v.whyItMatters, path: `/play/versions/${v.version}` });
}

export default async function VersionPage({ params }: PageProps<"/play/versions/[version]">) {
  const v = getVersion((await params).version);
  if (!v) notFound();

  const works = <T extends { versions: readonly string[] }>(xs: T[]) => xs.filter((x) => x.versions.includes(v.version));
  const broken = tools.filter((t) => t.incompatibleVersions?.includes(v.version));

  return (
    <>
      <PageHeader
        eyebrow={`Patch · ${v.released}`}
        title={
          <>
            <span className="font-mono text-gold-300">{v.version}</span> {v.headline}
          </>
        }
        lead={v.whyItMatters}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/play", label: "Play" },
          { href: "/play/versions", label: "Versions" },
        ]}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="grid content-start gap-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-100">Major changes</h2>
            <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-stone-300 marker:text-gold-700">
              {v.changes.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-semibold text-stone-100">Modding</h2>
              <p className="mt-2 text-stone-300">{v.modding}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-stone-100">Multiplayer</h2>
              <p className="mt-2 text-stone-300">{v.multiplayer}</p>
            </div>
          </div>
        </div>
        <aside className="grid content-start gap-8">
          {v.downloads && (
            <div>
              <h2 className="font-display text-lg text-stone-100">Download the patch</h2>
              <ul className="mt-3 grid gap-2">
                {v.downloads.map((d) => (
                  <li key={d.url}>
                    <a href={d.url} className="entry-link w-full">
                      <Download size={15} aria-hidden="true" />
                      <span>{d.edition === "lod" ? "Lord of Destruction" : "Classic"}</span>
                      {d.bytes && <span className="ml-auto text-xs text-stone-400">{(d.bytes / 1024 / 1024).toFixed(1)} MB</span>}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-stone-400">
                Official installers from Blizzard&apos;s patch server. Pick the one that matches your install.
              </p>
            </div>
          )}
          <RelatedLinks refKey={`version:${v.version}`} />
          <VerificationNote />
        </aside>
      </div>

      {(works(mods).length > 0 || works(tools).length > 0) && (
        <Section title={`Works with ${v.version}`} lead="Mods and tools in our directory known to support this version.">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {works(mods).map((m) => <ModCard key={m.slug} mod={m} />)}
            {works(tools).map((t) => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </Section>
      )}
      {broken.length > 0 && (
        <Section title={`Not compatible with ${v.version}`}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {broken.map((t) => <ToolCard key={t.slug} tool={t} />)}
          </div>
        </Section>
      )}
    </>
  );
}
