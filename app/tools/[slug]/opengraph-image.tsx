import { getTool, tools } from "@/data/tools";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return tools.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const e = getTool((await params).slug);
  return ogImage({ eyebrow: "Tool", title: e ? e.name : "Tool" });
}
