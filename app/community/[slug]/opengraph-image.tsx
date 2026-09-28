import { getCommunity, communities } from "@/data/communities";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return communities.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const e = getCommunity((await params).slug);
  return ogImage({ eyebrow: "Community", title: e ? e.name : "Community" });
}
