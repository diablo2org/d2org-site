import { getArticle, getArticles } from "@/lib/content";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getArticles("modding").map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle("modding", (await params).slug);
  return ogImage({ eyebrow: "Modding", title: a?.title ?? "Modding" });
}
