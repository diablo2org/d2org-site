import { ArticlePage, articleMetadata, articleParams } from "@/components/ArticleLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleParams("guides");
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">) {
  return articleMetadata("guides", (await params).slug);
}

export default async function Page({ params }: PageProps<"/guides/[slug]">) {
  return <ArticlePage section="guides" slug={(await params).slug} />;
}
