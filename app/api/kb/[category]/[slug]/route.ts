import { getKbArticle, getKbArticles, kbArticleMarkdown } from "@/lib/kb";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getKbArticles().map((a) => ({ category: a.category, slug: a.slug }));
}

export async function GET(_req: Request, { params }: RouteContext<"/api/kb/[category]/[slug]">) {
  const { category, slug } = await params;
  const a = getKbArticle(category, slug);
  if (!a) return new Response("Not found", { status: 404 });
  return new Response(kbArticleMarkdown(a, site.url), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
