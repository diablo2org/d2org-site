import { ogImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "diablo2.org: the modern guide to classic Diablo II";

export default function Image() {
  return ogImage({ title: "The modern guide to the classic" });
}
