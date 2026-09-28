import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Block, Bullets, EntryLayout } from "@/components/EntryLayout";
import { entryLinks } from "@/components/EntryLinks";
import { FactList } from "@/components/FactList";
import { communities, communityKinds, getCommunity } from "@/data/communities";
import { resolve } from "@/lib/relationships";

export const dynamicParams = false;

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/community/[slug]">): Promise<Metadata> {
  const c = getCommunity((await params).slug);
  return c ? { title: c.name, description: c.summary } : {};
}

const COVERS = { legacy: "Legacy Diablo II", resurrected: "Diablo II Resurrected", both: "Legacy and Resurrected" };

export default async function CommunityPage({ params }: PageProps<"/community/[slug]">) {
  const c = getCommunity((await params).slug);
  if (!c) notFound();
  const article = c.article ? resolve(c.article) : undefined;

  return (
    <EntryLayout
      eyebrow={`Community · ${communityKinds[c.kind]}`}
      name={c.name}
      summary={c.summary}
      status={c.status}
      refKey={`community:${c.slug}`}
      verification={c}
      file="data/communities.ts"
      crumbs={[{ href: "/", label: "Home" }, { href: "/community", label: "Communities" }]}
      links={entryLinks(c)}
      meta={[c.founded && `Since ${c.founded}`]}
    >
      {c.description && <p className="max-w-3xl text-lg leading-relaxed text-stone-300">{c.description}</p>}

      {c.useFor && c.useFor.length > 0 && (
        <Block title="Use it for">
          <Bullets items={c.useFor} />
        </Block>
      )}

      <Block title="Details">
        <FactList
          facts={[
            ["Type", communityKinds[c.kind]],
            ["Running since", c.founded],
            ["Covers", COVERS[c.covers]],
          ]}
        />
      </Block>

      {article && (
        <p className="text-stone-300">
          Read the full story: <Link href={article.href} className="text-gold-300 hover:text-ember-400">{article.title}</Link>.
        </p>
      )}
    </EntryLayout>
  );
}
