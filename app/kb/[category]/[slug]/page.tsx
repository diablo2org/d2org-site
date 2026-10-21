import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { getKbArticle, getKbArticles, getKbCategory, kbToc, renderKbMarkdown } from "@/lib/kb";
import { absoluteUrl, JsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getKbArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kb/[category]/[slug]">) {
  const { category, slug } = await params;
  const a = getKbArticle(category, slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.summary, path: a.href, type: "article", modified: a.modified ?? a.posted });
}

function formatDate(d?: string) {
  if (!d) return undefined;
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

const link = "text-gold-300 underline decoration-gold-700 hover:text-ember-400";

export default async function KbArticlePage({ params }: PageProps<"/kb/[category]/[slug]">) {
  const { category, slug } = await params;
  const a = getKbArticle(category, slug);
  const c = getKbCategory(category);
  if (!a || !c) notFound();

  const html = await renderKbMarkdown(a.body);
  const toc = kbToc(a.body);

  return (
    <article>
      <JsonLd
        data={{
          "@type": "Article",
          headline: a.title,
          description: a.summary,
          url: absoluteUrl(a.href),
          datePublished: a.posted,
          dateModified: a.modified ?? a.posted,
          inLanguage: "en",
          about: { "@type": "VideoGame", name: c.game === "d2r" ? "Diablo II: Resurrected" : "Diablo II" },
          ...(a.author ? { author: { "@type": "Person", name: a.author } } : {}),
          isBasedOn: a.originalUrl,
        }}
      />
      <PageHeader
        eyebrow={c.title}
        title={a.title}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/knowledge", label: "Knowledge base" },
          { href: `/kb/${c.slug}`, label: c.title },
        ]}
      >
        <p className="font-ui text-sm text-stone-400">
          {[a.author && `Posted by ${a.author}`, formatDate(a.posted)].filter(Boolean).join(" · ")}
        </p>
        {a.credit && <p className="mt-1 font-ui text-sm text-stone-400">Credits: {a.credit}</p>}
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div className="min-w-0">
          <div className="prose prose-lg prose-d2 max-w-none min-w-0 overflow-x-auto lg:max-w-[46rem]" dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <aside className="grid content-start gap-8 text-sm lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto">
          <div className="rounded-sm border border-stone-700 bg-stone-900/60 px-4 py-3 leading-relaxed text-stone-300">
            <p className="mb-1 text-[0.8125rem] font-semibold tracking-[0.14em] text-stone-400 uppercase">Archived from the Phrozen Keep</p>
            <p>
              This article is kept as it was written
              {c.appliesTo ? <>, for {c.game === "d2r" ? "Diablo II: Resurrected" : `patch ${c.appliesTo}`}</> : null}. Some details may
              not hold for other versions.
            </p>
            <ul className="mt-3 grid gap-1 text-stone-400">
              {a.modified && <li>Last edited {formatDate(a.modified)}</li>}
              <li>
                <a href={a.originalUrl} className={link}>Original on d2mods.info</a>
              </li>
              <li>
                <a href={a.markdownHref} className={link}>Plain markdown</a>
              </li>
            </ul>
          </div>

          {toc.length > 2 && (
            <nav aria-labelledby="toc-heading" className="hidden lg:block">
              <h2 id="toc-heading" className="mb-3 text-[0.8125rem] font-semibold tracking-[0.14em] text-stone-400 uppercase">
                On this page
              </h2>
              <ul className="grid gap-1.5 border-l border-stone-700">
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

          <p className="text-stone-400">
            More in <Link href={`/kb/${c.slug}`} className={link}>{c.title}</Link>
          </p>
        </aside>
      </div>
    </article>
  );
}
