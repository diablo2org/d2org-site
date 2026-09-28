import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/PageHeader";
import { TopicList } from "@/components/Planned";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Technical reference",
  description:
    "Diablo II data files, file formats and game internals, for modders and developers.",
  path: "/technical",
});

const dataFiles = ["skills.txt", "weapons.txt", "armor.txt", "uniqueitems.txt", "setitems.txt", "monstats.txt", "levels.txt", "cubemain.txt"];
const formats = [
  { title: "DCC", body: "Compressed animation sprites" },
  { title: "DC6", body: "Sprites for UI and items" },
  { title: "DT1", body: "Level tiles" },
  { title: "DS1", body: "Level layouts" },
  { title: "COF", body: "Animation composition" },
  { title: "D2S", body: "Character saves" },
  { title: "MPQ", body: "Blizzard archive format" },
];
const internals = ["D2Client", "D2Common", "D2Game", "Fog", "Storm", "Ordinals", "Function hooks", "Memory structures"];

export default function TechnicalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Knowledge"
        title="Technical reference"
        lead="For developers and serious modders. Data file pages will document every column, its type, known values, version differences and related files. Where possible we reference open-source research instead of repeating undocumented claims."
        crumbs={[{ href: "/", label: "Home" }, { href: "/knowledge", label: "Knowledge" }]}
      />
      <div className="mx-auto grid max-w-6xl gap-x-8 px-4 sm:px-6 lg:grid-cols-3 [&>section]:px-0">
        <Section title="Data files">
          <TopicList items={dataFiles.map((f) => ({ title: f }))} />
        </Section>
        <Section title="File formats">
          <TopicList items={formats} />
        </Section>
        <Section title="Game internals">
          <TopicList items={internals.map((title) => ({ title }))} />
        </Section>
      </div>
    </>
  );
}
