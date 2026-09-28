import { getMod, mods } from "@/data/mods";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return mods.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const e = getMod((await params).slug);
  return ogImage({ eyebrow: "Mod", title: e ? e.name : "Mod" });
}
