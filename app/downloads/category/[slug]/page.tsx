import { notFound } from "next/navigation";
import { DownloadList } from "@/components/DownloadList";
import { PageHeader } from "@/components/PageHeader";
import { DOWNLOAD_SECTIONS, downloadCategories, downloadsIn, getDownloadCategory } from "@/lib/downloads";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return downloadCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/downloads/category/[slug]">) {
  const c = getDownloadCategory((await params).slug);
  if (!c) return {};
  return pageMetadata({
    title: `${c.title} - Downloads`,
    description: `${c.count} downloads from the Phrozen Keep's ${c.path} category.`,
    path: `/downloads/category/${c.slug}`,
  });
}

export default async function DownloadCategoryPage({ params }: PageProps<"/downloads/category/[slug]">) {
  const c = getDownloadCategory((await params).slug);
  if (!c) notFound();
  const items = downloadsIn(c.slug);
  const available = items.filter((d) => d.status === "available").length;

  return (
    <>
      <PageHeader
        eyebrow={DOWNLOAD_SECTIONS[c.section].label}
        title={c.title}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/downloads", label: "Downloads" },
          { href: `/downloads#${c.section}`, label: DOWNLOAD_SECTIONS[c.section].label },
        ]}
      >
        <p className="font-ui text-[0.8125rem] tracking-wide text-stone-400 uppercase">
          {items.length} {items.length === 1 ? "file" : "files"} · {available} ready to download · {c.path} on the Phrozen Keep
        </p>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <DownloadList items={items} showCategory={false} />
      </div>
    </>
  );
}
