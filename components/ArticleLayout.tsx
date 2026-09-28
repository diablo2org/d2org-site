import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { getArticle, getArticles, SECTIONS, type Section } from "@/lib/content";
import type { RefKind } from "@/lib/types";
import { mdxComponents } from "./mdx";
import { PageHeader } from "./PageHeader";
import { RelatedLinks } from "./Related";
import { VersionSupport } from "./VersionBadge";
import { VerificationNote } from "./Verification";

const SECTION_REF: Record<Section, RefKind> = {
  play: "play",
  guides: "guide",
  modding: "modding",
  history: "history",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function articleParams(section: Section) {
  return getArticles(section).map((a) => ({ slug: a.slug }));
}

export function articleMetadata(section: Section, slug: string): Metadata {
  const a = getArticle(section, slug);
  if (!a) return {};
  return { title: a.title, description: a.summary, alternates: { canonical: a.href } };
}

/** Headings in the MDX body, for the on-page contents list. */
function extractToc(body: string) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = m[1].replace(/[`*_]/g, "").trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
    return { text, id };
  });
}

export async function ArticlePage({ section, slug }: { section: Section; slug: string }) {
  const a = getArticle(section, slug);
  if (!a) notFound();

  const toc = extractToc(a.body);
  const sec = SECTIONS[section];
  const crumbs = [{ href: "/", label: "Home" }];
  if (section === "history" || section === "guides") crumbs.push({ href: "/knowledge", label: "Knowledge" });
  if (section !== "guides") crumbs.push({ href: sec.base, label: sec.label });

  return (
    <article>
      <PageHeader eyebrow={sec.label} title={a.title} lead={a.summary} crumbs={crumbs}>
        {a.updated && <p className="text-sm text-stone-500">Updated {formatDate(a.updated)}</p>}
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="prose prose-lg prose-d2 max-w-none min-w-0 lg:max-w-[46rem]">
          <MDXRemote
            source={a.body}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
          />
        </div>

        <aside className="grid content-start gap-8 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
          {!!(a.versions?.length || a.notVersions?.length) && (
            <VersionSupport versions={a.versions ?? []} incompatible={a.notVersions} />
          )}
          {toc.length > 2 && (
            <nav aria-labelledby="toc-heading" className="hidden lg:block">
              <h2 id="toc-heading" className="mb-3 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">
                On this page
              </h2>
              <ul className="grid gap-1.5 border-l border-stone-700 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="-ml-px block border-l border-transparent pl-3 text-stone-400 hover:border-gold-500 hover:text-stone-100">
                      {t.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <RelatedLinks refKey={`${SECTION_REF[section]}:${a.slug}`} />
          <VerificationNote lastVerified={a.lastVerified} sources={a.sources} file={a.file} />
        </aside>
      </div>
    </article>
  );
}
