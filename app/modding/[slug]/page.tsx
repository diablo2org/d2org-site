import { ArticlePage, articleMetadata, articleParams } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("modding");
}

export async function generateMetadata({ params }: PageProps<"/modding/[slug]">) {
  return articleMetadata("modding", (await params).slug);
}

export default async function Page({ params }: PageProps<"/modding/[slug]">) {
  return <ArticlePage section="modding" slug={(await params).slug} />;
}
