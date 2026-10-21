import { getKbArticles, getKbCategories } from "@/lib/kb";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** Index of the knowledge base: categories and every article, with links to the page and its plain markdown. */
export function GET() {
  return Response.json({
    data: {
      categories: getKbCategories(),
      articles: getKbArticles().map((a) => ({
        title: a.title,
        summary: a.summary,
        category: a.category,
        author: a.author,
        credit: a.credit,
        posted: a.posted,
        modified: a.modified,
        views: a.views,
        originalUrl: a.originalUrl,
        url: absoluteUrl(a.href),
        markdownUrl: absoluteUrl(a.markdownHref),
      })),
    },
  });
}
