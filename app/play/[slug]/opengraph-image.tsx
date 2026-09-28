import { getArticle, getArticles } from "@/lib/content";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getArticles("play").map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle("play", (await params).slug);
  return ogImage({ eyebrow: "Play", title: a?.title ?? "Play" });
}
