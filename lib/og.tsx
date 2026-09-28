import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared Open Graph card: the landing key art behind an Exocet title. Rendered at build time only,
// since it reads from disk. Every opengraph-image route must be statically generated.

const assets = Promise.all([
  readFile(join(process.cwd(), "public/fonts/exocet-blizzard.woff")),
  readFile(join(process.cwd(), "public/diablo/landing/bg/FadeBlack2.jpg"), "base64"),
]);

export async function ogImage({ eyebrow, title }: { eyebrow?: string; title: string }) {
  const [font, art] = await assets;
  const titleSize = title.length > 48 ? 56 : title.length > 28 ? 68 : 84;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#050606", fontFamily: "Exocet" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/jpeg;base64,${art}`} alt="" width={1260} height={630} style={{ position: "absolute", top: 0, left: 330 }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, background: "linear-gradient(90deg, #050606 0%, #050606 30%, rgba(5,6,6,0.55) 62%, rgba(5,6,6,0) 100%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "60px 72px" }}>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 34, color: "#eeece7", textTransform: "uppercase" }}>
            diablo<span style={{ color: "#ffffff" }}>2</span>
            <span style={{ fontFamily: "sans-serif", fontSize: 20, color: "#bbc4c6", textTransform: "lowercase" }}>.org</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
            {eyebrow && <div style={{ fontSize: 26, color: "#c9946b", textTransform: "uppercase", letterSpacing: 2 }}>{eyebrow}</div>}
            <div style={{ marginTop: 18, fontSize: titleSize, lineHeight: 1.08, color: "#f5f3ee", textTransform: "uppercase" }}>{title}</div>
            <div style={{ marginTop: 30, width: 120, height: 3, background: "#94271f" }} />
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, fonts: [{ name: "Exocet", data: font, style: "normal", weight: 400 }] },
  );
}
