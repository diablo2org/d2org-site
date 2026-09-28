import { getArticle, getArticles } from "@/lib/content";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getArticles("history").map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle("history", (await params).slug);
  return ogImage({ eyebrow: "History", title: a?.title ?? "History" });
}
