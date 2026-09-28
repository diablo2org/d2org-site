import { getVersion, versions } from "@/data/versions";
import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return versions.map((v) => ({ version: v.version }));
}

export default async function Image({ params }: { params: Promise<{ version: string }> }) {
  const v = getVersion((await params).version);
  return ogImage({ eyebrow: v ? `Patch ${v.version}` : "Patch", title: v?.headline ?? "Diablo II versions" });
}
