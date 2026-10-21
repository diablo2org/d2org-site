import { categoryOf, DOWNLOAD_SECTIONS, downloadCategories, downloads } from "@/lib/downloads";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/** The Phrozen Keep download catalogue: every entry with its category, recovery status and links. */
export function GET() {
  return Response.json({
    data: {
      sections: DOWNLOAD_SECTIONS,
      categories: downloadCategories.map((c) => ({ ...c, url: absoluteUrl(`/downloads/category/${c.slug}`) })),
      downloads: downloads.map((d) => {
        const c = categoryOf(d);
        return {
          id: d.id,
          title: d.title,
          version: d.version,
          section: c.section,
          category: c.slug,
          categoryPath: c.path,
          filename: d.filename,
          description: d.description,
          uploaded: d.uploaded,
          changed: d.changed,
          keepDownloads: d.keepDownloads,
          status: d.status,
          bytes: d.bytes,
          sha256: d.sha256,
          fileUrl: d.url,
          url: absoluteUrl(`/downloads/${d.id}`),
          originalUrl: d.originalUrl,
        };
      }),
    },
  });
}
