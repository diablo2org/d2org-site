import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { getKbArticles, getKbCategories, getKbCategory, KB_GROUPS } from "@/lib/kb";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getKbCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/kb/[category]">) {
  const c = getKbCategory((await params).category);
  if (!c) return {};
  return pageMetadata({
    title: `${c.title} - Knowledge base`,
    description: c.description ?? `${KB_GROUPS[c.group].label} from the Phrozen Keep knowledge base: ${c.title}.`,
    path: `/kb/${c.slug}`,
  });
}

export default async function KbCategoryPage({ params }: PageProps<"/kb/[category]">) {
  const c = getKbCategory((await params).category);
  if (!c) notFound();
  const articles = getKbArticles(c.slug);

  return (
    <>
      <PageHeader
        eyebrow={KB_GROUPS[c.group].label}
        title={c.title}
        lead={c.description}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/knowledge", label: "Knowledge base" },
        ]}
      >
        <p className="font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase">
          {articles.length} articles
          {c.game === "d2r" && <> · Diablo II: Resurrected</>}
          {c.appliesTo && <> · Written for {c.appliesTo}</>}
        </p>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-sm border border-stone-700 bg-stone-700">
          {articles.map((a) => (
            <li key={a.href} className="bg-stone-900">
              <Link href={a.href} className="group grid gap-1 px-5 py-4 hover:bg-stone-850 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-6">
                <span className="min-w-0">
                  <span className="block font-medium text-stone-100 group-hover:text-gold-300">{a.title}</span>
                  <span className="mt-0.5 line-clamp-2 block text-sm text-stone-400">{a.summary}</span>
                </span>
                <span className="font-ui text-[0.8125rem] text-stone-400 md:text-right">
                  {[a.author, a.posted?.slice(0, 4)].filter(Boolean).join(" · ")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
