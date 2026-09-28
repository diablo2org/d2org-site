import type { Metadata } from "next";
import { DirectoryHeader } from "@/components/DirectoryHeader";
import { ToolsDirectory } from "@/components/ToolsDirectory";
import { tools } from "@/data/tools";
import styles from "@/components/Directory.module.css";

export const metadata: Metadata = {
  title: "Tools",
  description: "Find graphics wrappers, save tools, plugins, launchers and modding utilities for legacy Diablo II. Filter by game version and compare compatibility.",
};

export default function ToolsPage() {
  return <div className={styles.surface}>
    <DirectoryHeader title="Tools" description="Make the game work your way. Find renderers, stash managers, launchers and modding utilities that fit your version of Diablo II." guide={{ href: "/guides/modern-diablo-2-graphics", description: "A better-looking Diablo II", label: "Explore the graphics guide" }} />
    <ToolsDirectory tools={tools} />
  </div>;
}
