import type { Metadata } from "next";
import { DirectoryHeader } from "@/components/DirectoryHeader";
import { ModsDirectory } from "@/components/ModsDirectory";
import { mods } from "@/data/mods";
import styles from "@/components/Directory.module.css";

export const metadata: Metadata = {
  title: "Mods",
  description: "Compare legacy Diablo II mods and total conversions by gameplay changes, singleplayer and multiplayer support, and required game version.",
};
export default function ModsPage() {
  return <div className={styles.surface}>
    <DirectoryHeader title="Mods" description="A familiar world, reimagined. Explore balance changes, new builds and complete overhauls—and find the version of Sanctuary you want to play." guide={{ href: "/servers", description: "Taking your character online?", label: "Compare private servers" }} />
    <ModsDirectory mods={mods} />
  </div>;
}
