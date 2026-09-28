import { ArticlePage, articleMetadata, articleParams } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("history");
}

export async function generateMetadata({ params }: PageProps<"/history/[slug]">) {
  return articleMetadata("history", (await params).slug);
}

export default async function Page({ params }: PageProps<"/history/[slug]">) {
  return <ArticlePage section="history" slug={(await params).slug} />;
}
