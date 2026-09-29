import type { Mod } from "@/lib/types";

/**
 * Seed data — needs checking against each project's own documentation.
 * Unknown fields are left out rather than guessed.
 */
export const mods: Mod[] = [
  {
    slug: "project-diablo-2",
    name: "Project Diablo 2",
    style: "vanilla-plus",
    summary:
      "A vanilla-plus mod with seasonal online ladders. It keeps the feel of Diablo II while adding endgame content, balance changes and quality-of-life features.",
    description:
      "Project Diablo 2 (PD2) builds on 1.13c. It keeps the classic game's pacing and look, and adds reworked skills, new uniques and sets, a map-based endgame, and features such as a built-in loot filter. It is primarily played online through its own realm and launcher.",
    status: "active",
    website: "https://www.projectdiablo2.com",
    discord: "https://discord.com/invite/projectdiablo2",
    versions: ["1.13c"],
    os: ["windows"],
    multiplayer: true,
    ladder: true,
    features: {
      newItems: true,
      newSkills: true,
      endgame: true,
      difficultyChanges: true,
    },
    installer: "Dedicated launcher",
    tags: ["pd2", "seasonal", "ladder", "loot filter", "maps", "endgame"],
    related: ["server:project-diablo-2", "version:1.13c", "guide:private-servers-explained"],
    popular: true,
  },
  {
    slug: "median-xl",
    name: "Median XL",
    style: "total-conversion",
    summary:
      "A long-running overhaul that rebuilds classes, items and the endgame, with a much larger scope than vanilla.",
    description:
      "Median XL began in the mid-2000s and has been rebuilt several times. The current incarnation reworks every class's skill tree, adds large numbers of new items and a deep endgame, and runs on 1.13c. It supports singleplayer, and multiplayer through its own realm.",
    status: "active",
    website: "https://www.median-xl.com",
    discord: "https://discord.com/invite/WB8Nv88z28",
    firstRelease: "2005",
    versions: ["1.13c"],
    os: ["windows"],
    singleplayer: true,
    multiplayer: true,
    features: {
      newItems: true,
      newSkills: true,
      newAreas: true,
      endgame: true,
      difficultyChanges: true,
    },
    installer: "Dedicated launcher",
    tags: ["mxl", "sigma", "overhaul", "total conversion", "endgame"],
    related: ["server:median-xl", "version:1.13c", "tool:d2gl"],
    popular: true,
  },
  {
    slug: "path-of-diablo",
    name: "Path of Diablo",
    style: "vanilla-plus",
    summary:
      "A vanilla-plus mod with seasonal online ladders, known for extensive build diversity changes and a built-in loot filter.",
    description:
      "Path of Diablo (PoD) builds on 1.13c. It rebalances skills to make more builds viable, adds new items and endgame content, and runs seasonal ladders on its own realm.",
    status: "active",
    website: "https://pathofdiablo.com",
    discord: "https://discord.gg/GqnfZWXeB4",
    versions: ["1.13c"],
    os: ["windows"],
    multiplayer: true,
    ladder: true,
    features: {
      newItems: true,
      newSkills: true,
      endgame: true,
    },
    installer: "Dedicated launcher",
    tags: ["pod", "seasonal", "ladder", "loot filter", "build diversity"],
    related: ["server:path-of-diablo", "version:1.13c", "guide:private-servers-explained"],
    popular: true,
  },
  {
    slug: "resurgence",
    name: "Resurgence",
    style: "vanilla-plus",
    summary:
      "A 1.13c mod built around character balance and build diversity, with hundreds of new uniques, crystal-based crafting and post-Baal sub-classes.",
    description:
      "Resurgence keeps the original feel of Lord of Destruction while reworking itemisation and skills so more builds are viable. Rare and crafted items can roll high-tier affixes, crafting uses crystals instead of runes, and Nephalem's Valour charms add three specialisation paths per class after Baal. It works in singleplayer, but most players are on its online ladder. Resurgence grew out of the SlashDiablo mod team, and its community runs through Discord.",
    status: "active",
    website: "https://resurgence.slashgaming.net",
    discord: "https://discord.gg/0cDYwWrMLIImycvz",
    versions: ["1.13c"],
    os: ["windows"],
    singleplayer: true,
    multiplayer: true,
    ladder: true,
    features: {
      newItems: true,
      newSkills: true,
      newAreas: true,
      endgame: true,
    },
    installer: "Launcher",
    links: [{ label: "Subreddit", url: "https://www.reddit.com/r/Diablo2Resurgence/" }],
    sources: [{ label: "resurgence.slashgaming.net", url: "https://resurgence.slashgaming.net" }],
    tags: ["resurgence", "vanilla-plus", "crafting", "crystals", "sub-classes"],
    related: ["server:resurgence", "server:slashdiablo", "version:1.13c"],
  },
  {
    slug: "annihilus",
    name: "Annihilus",
    style: "vanilla-plus",
    summary:
      "A mod in development since 2014 that stays close to Lord of Destruction while reworking every unique. The live version is Annihilus Legacy. A full overhaul, Souls of the Rift, is in closed beta.",
    description:
      "Annihilus aims to modernise Diablo II without losing what made it work. Every unique has been reworked, and the endgame adds Unstable Rifts, Riftstone maps with adjustable difficulty, and the Crucible, a randomised 100-level dungeon. It is played online on the Annihilus realm. The game currently played there is Annihilus Legacy. Souls of the Rift, a rebuild that removes skill synergies and adds a crafting system based on Rift Energies, has been in closed beta since at least 2022, open to supporters at the Rare tier or higher on Patreon as of September 2025.",
    status: "active",
    website: "https://annihilus.net",
    discord: "https://discord.gg/annihilus",
    patreon: "https://www.patreon.com/annihilus",
    firstRelease: "2015",
    versions: ["1.13d"],
    os: ["windows"],
    multiplayer: true,
    features: {
      newItems: true,
      newAreas: true,
      endgame: true,
      difficultyChanges: true,
    },
    installer: "Installer",
    sources: [
      { label: "annihilus.net", url: "https://annihilus.net" },
      { label: "Annihilus Patreon", url: "https://www.patreon.com/annihilus" },
      { label: "Annihilus launch trailer (July 2022)", url: "https://www.youtube.com/watch?v=ETBy81nxhv8" },
      { label: "Closed beta patch overview (September 2025)", url: "https://www.youtube.com/watch?v=uTMrEL59zfo" },
      { label: "Annihilus Legacy patch 6.20 (May 2026)", url: "https://www.youtube.com/watch?v=oDauzsffLnc" },
    ],
    tags: ["annihilus", "annihilus legacy", "souls of the rift", "rifts", "crucible", "riftstones"],
    related: ["server:annihilus", "version:1.13d"],
  },
];

export function getMod(slug: string) {
  return mods.find((m) => m.slug === slug);
}
