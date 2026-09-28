import { getServer, servers } from "@/data/servers";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return servers.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const e = getServer((await params).slug);
  return ogImage({ eyebrow: "Private server", title: e ? e.name : "Private server" });
}
