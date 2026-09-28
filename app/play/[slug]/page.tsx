import { ArticlePage, articleMetadata, articleParams } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("play");
}

export async function generateMetadata({ params }: PageProps<"/play/[slug]">) {
  return articleMetadata("play", (await params).slug);
}

export default async function Page({ params }: PageProps<"/play/[slug]">) {
  return <ArticlePage section="play" slug={(await params).slug} />;
}
