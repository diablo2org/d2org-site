import type { PatchDownload, VersionInfo } from "@/lib/types";

/** Blizzard's patch server. It still serves files over plain HTTP; HTTPS and directory listings don't work. */
const patch = (edition: PatchDownload["edition"], file: string, bytes: number): PatchDownload => ({
  edition,
  url: `http://ftp.blizzard.com/pub/${edition === "lod" ? "diablo2exp" : "diablo2"}/patches/PC/${file}`,
  bytes,
});

/**
 * Seed data. Release dates are given only as precisely as we are confident
 * of; tighten them as sources are added.
 */
export const versions: VersionInfo[] = [
  {
    version: "1.00",
    released: "2000-06",
    headline: "Diablo II launches",
    changes: [
      "Original release of Diablo II (Classic): five classes, four acts.",
      "Open and closed Battle.net realms.",
    ],
    whyItMatters:
      "The starting point. Early patches changed a great deal, so very little of the modern ecosystem targets it.",
    modding: "Not used as a modding base today.",
    multiplayer: "No active multiplayer relevance.",
  },
  {
    version: "1.06b",
    released: "Before June 2001",
    headline: "Late Classic",
    downloads: [patch("classic", "D2Patch_106b.exe", 2644258)],
    changes: [
      "One of the last patches before Lord of Destruction.",
      "Fixed a bug that let players crash others by spamming them, and a bug that stopped Open Battle.net characters saving.",
    ],
    whyItMatters:
      "The final form of Classic Diablo II before the expansion changed everything. It's the version nostalgia realms target when they want the pre-LoD game.",
    modding: "Not used as a modding base today.",
    multiplayer: "RetroD2 runs a 1.06b realm.",
    related: ["server:retrod2"],
    sources: [{ label: "Diablo Wiki: Patch 1.06b", url: "https://diablo.fandom.com/wiki/Patch_1.06b_(Diablo_II)" }],
  },
  {
    version: "1.07",
    released: "2001-06",
    headline: "Lord of Destruction",
    changes: [
      "Released alongside the Lord of Destruction expansion.",
      "Adds the Assassin and Druid, Act V, runewords and the higher 800×600 resolution.",
    ],
    whyItMatters:
      "The expansion reshaped the game. Most things people mean by Diablo II today assume LoD.",
    modding: "Rarely targeted today.",
    multiplayer: "Historical only.",
  },
  {
    version: "1.08",
    released: "2001",
    headline: "Early LoD balance",
    downloads: [patch("classic", "D2Patch_108.exe", 5052213)],
    changes: ["Early Lord of Destruction balance and bug-fix patch."],
    whyItMatters:
      "Remembered mostly for its economy. Items from this era, such as 1.08 uniques, became collector items. See the economy history.",
    modding: "Rarely targeted today.",
    multiplayer: "Historical only.",
    related: ["history:patch-timeline"],
  },
  {
    version: "1.09d",
    released: "2001",
    headline: "The long-lived classic patch",
    downloads: [patch("classic", "D2Patch_109d.exe", 5174877)],
    changes: [
      "Major rebalance of items and skills.",
      "Stayed current for roughly two years, longer than any earlier patch.",
    ],
    whyItMatters:
      "Many older tools (ATMA, Hero Editor) and early mods were built around 1.09, and some players still prefer its balance.",
    modding: "Historical mod base. Some tools still support it.",
    related: ["server:diablo09"],
    multiplayer: "Diablo 09 runs a dedicated 1.09 realm.",
  },
  {
    version: "1.10f",
    released: "2003-10",
    headline: "Synergies and the modern endgame",
    downloads: [patch("lod", "LODPatch_110.exe", 5122687), patch("classic", "D2Patch_110.exe", 9857598)],
    changes: [
      "Skill synergies introduced, changing most builds.",
      "Uber Diablo and the Annihilus charm.",
      "New ladder-only runewords such as Enigma.",
    ],
    whyItMatters:
      "Most of the class balance and endgame people remember comes from 1.10. It was also the base patch for a generation of mods.",
    modding:
      "A major historical mod base. Much older modding documentation assumes 1.10 file layouts.",
    multiplayer: "Some mod realms historically ran on 1.10.",
  },
  {
    version: "1.11b",
    released: "2005",
    headline: "Pandemonium Event",
    downloads: [patch("lod", "LODPatch_111b.exe", 6809384), patch("classic", "D2Patch_111b.exe", 11018173)],
    changes: [
      "Uber Tristram / Pandemonium Event and the Hellfire Torch charm.",
      "Anti-cheat changes on official realms.",
    ],
    whyItMatters: "Completes the endgame content most players know.",
    modding: "Rarely used as a mod base.",
    multiplayer: "Historical only.",
  },
  {
    version: "1.12a",
    released: "2008-06",
    headline: "No CD required",
    downloads: [patch("lod", "LODPatch_112a.exe", 5490375), patch("classic", "D2Patch_112a.exe", 9712947)],
    changes: [
      "The CD no longer needs to be in the drive once its MPQ files are copied to the install directory.",
    ],
    whyItMatters:
      "Made the game far easier to run on machines without optical drives.",
    modding: "Occasionally targeted by tools.",
    multiplayer: "Historical only.",
  },
  {
    version: "1.13c",
    released: "2010",
    headline: "The community's reference patch",
    downloads: [patch("lod", "LODPatch_113c.exe", 5435543), patch("classic", "D2Patch_113c.exe", 9757336)],
    changes: [
      "Respec: Akara resets skills and stats once per difficulty after the Den of Evil.",
      "Token of Absolution, crafted from essences dropped by act bosses.",
    ],
    whyItMatters:
      "The most widely supported version in the modern ecosystem. Major mods and private servers, PlugY, and most graphics wrappers target it.",
    modding:
      "The de facto modding base. Game code still lives in separate DLLs, which mods and plugins rely on to load their own code.",
    multiplayer:
      "The base of most private servers, including SlashDiablo, Project Diablo 2, Path of Diablo and Resurgence.",
    related: ["server:slashdiablo", "tool:plugy", "tool:d2se", "tool:d2dx", "tool:d2gl", "modding:how-mods-work"],
  },
  {
    version: "1.13d",
    released: "2014",
    headline: "Minor 1.13 follow-up",
    downloads: [patch("lod", "LODPatch_113d.exe", 5454719), patch("classic", "D2Patch_113d.exe", 9776431)],
    changes: ["Bug fixes over 1.13c."],
    whyItMatters:
      "Plays almost identically to 1.13c. Most of the ecosystem still standardises on 1.13c, so check tool support before choosing 1.13d.",
    modding: "Less commonly targeted than 1.13c.",
    multiplayer: "Annihilus runs on 1.13d.",
    related: ["server:annihilus"],
  },
  {
    version: "1.14d",
    released: "2016",
    headline: "Modern Windows compatibility",
    downloads: [patch("lod", "LODPatch_114d.exe", 6343200), patch("classic", "D2Patch_114d.exe", 10671384)],
    changes: [
      "Compatibility work for modern Windows.",
      "Game code merged from separate DLLs into a single Game.exe.",
      "This is the version Blizzard's current installers produce.",
    ],
    whyItMatters:
      "The easiest version to get running out of the box, and the version you have after a fresh install. It is the version the official legacy realms use.",
    modding:
      "Merging the DLLs into Game.exe broke many DLL-based mods and tools, which is why much of the modding scene stayed on 1.13c.",
    multiplayer: "Official Battle.net legacy realms.",
    related: ["play:windows", "play:getting-started"],
  },
];

export function getVersion(v: string) {
  return versions.find((x) => x.version === v);
}
