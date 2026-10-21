import Link from "next/link";
import { getKbArticles, type KbCategory } from "@/lib/kb";

/** Knowledge base categories as a ruled grid: name, size, the most-read article, and the Keep's version label. */
export function KbCategoryGrid({ categories }: { categories: KbCategory[] }) {
  const articles = getKbArticles();
  return (
    <ul className="grid gap-px overflow-hidden rounded-sm border border-stone-700 bg-stone-700 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => {
        const inCat = articles.filter((a) => a.category === c.slug);
        const top = [...inCat].sort((a, b) => (b.views ?? 0) - (a.views ?? 0))[0];
        return (
          <li key={c.slug} className="bg-stone-900">
            <Link href={`/kb/${c.slug}`} className="group flex h-full flex-col gap-1.5 px-5 py-4 hover:bg-stone-850">
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-medium text-stone-100 group-hover:text-gold-300">{c.title}</span>
                <span className="font-ui text-[0.8125rem] tabular-nums text-stone-400">{inCat.length}</span>
              </span>
              {top && <span className="line-clamp-1 text-sm text-stone-400">{top.title}</span>}
              {(c.appliesTo || c.game === "d2r") && (
                <span className="mt-auto pt-1 font-mono text-[0.8rem] text-gold-400/80">{c.game === "d2r" ? "Resurrected" : c.appliesTo}</span>
              )}
            </Link>
          </li>
        );
      })}
      {/* Fill the last row so the grid keeps its edge. */}
      {Array.from({ length: (3 - (categories.length % 3)) % 3 }, (_, i) => (
        <li key={`fill-${i}`} aria-hidden className="hidden bg-stone-900 lg:block" />
      ))}
    </ul>
  );
}
