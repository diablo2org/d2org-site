export const GAME_VERSIONS = [
  "1.00",
  "1.06b",
  "1.07",
  "1.08",
  "1.09d",
  "1.10f",
  "1.11b",
  "1.12a",
  "1.13c",
  "1.13d",
  "1.14d",
] as const;

export type GameVersion = (typeof GAME_VERSIONS)[number];

export type ProjectStatus =
  | "active"
  | "maintained"
  | "inactive"
  | "archived"
  | "unknown";

export type OS = "windows" | "linux" | "macos" | "steam-deck";

/**
 * A cross-reference to another piece of content, written as `kind:slug`.
 * e.g. "tool:d2gl", "mod:median-xl", "version:1.13c", "play:windows".
 */
export type Ref = `${RefKind}:${string}`;

export type RefKind =
  | "mod"
  | "server"
  | "tool"
  | "version"
  | "play"
  | "guide"
  | "modding"
  | "history"
  | "community";

export interface Verification {
  /**
   * Month the entry was last checked against its sources, as YYYY-MM.
   * Leave undefined for seed data nobody has checked yet — the UI flags it.
   */
  lastVerified?: string;
  /** Where the claims in this entry come from. */
  sources?: { label: string; url: string }[];
}

interface ProjectBase extends Verification {
  slug: string;
  name: string;
  summary: string;
  description?: string;
  status: ProjectStatus;
  website?: string;
  source?: string;
  discord?: string;
  reddit?: string;
  patreon?: string;
  /** Game versions the project is known to work with. */
  versions: GameVersion[];
  /** Game versions the project is known NOT to work with. */
  incompatibleVersions?: GameVersion[];
  os?: OS[];
  tags?: string[];
  related?: Ref[];
}

export type ModStyle = "vanilla-plus" | "overhaul" | "total-conversion" | "utility";

export interface Mod extends ProjectBase {
  style: ModStyle;
  firstRelease?: string;
  latestRelease?: string;
  singleplayer?: boolean;
  multiplayer?: boolean;
  ladder?: boolean;
  features?: {
    customClasses?: boolean;
    newItems?: boolean;
    newSkills?: boolean;
    newAreas?: boolean;
    endgame?: boolean;
    difficultyChanges?: boolean;
  };
  installer?: string;
  links?: { label: string; url: string }[];
  popular?: boolean;
}

export interface Server extends ProjectBase {
  /** Short description of how it plays, e.g. "Vanilla-plus seasonal ladder". */
  style: string;
  vanillaSimilarity: "near-vanilla" | "vanilla-plus" | "heavily-modified";
  ladder?: boolean;
  seasonLength?: string;
  trading?: string;
  customContent?: boolean;
  lootChanges?: boolean;
  skillChanges?: boolean;
  endgame?: string;
  pvp?: string;
  launcher?: string;
  singleplayer?: boolean;
  /** Community-facing services the server runs: armory, ladder, trackers, apps. */
  services?: ServerService[];
  /** Year the server opened. */
  founded?: string;
  /** A short paragraph on where the server came from. */
  history?: string;
  /** Game server locations, e.g. "New York", "Amsterdam". */
  regions?: string[];
  multiboxing?: string;
  /** What changes from vanilla — bullet points. */
  changes?: string[];
  popular?: boolean;
  /** Highlighted on the homepage and server directory. Order comes from the data array. */
  featured?: boolean;
  /**
   * Smaller or niche realms. They get a full page but appear in the compact
   * "Smaller realms" list instead of the cards, comparison table and homepage.
   */
  smaller?: boolean;
  /** Real-money shop selling items, loot boxes or currency. */
  cashShop?: boolean;
  /** Primary community language, when it isn't English. */
  language?: string;
}

export interface ServerService {
  label: string;
  url: string;
  description: string;
  icon?: "armory" | "ladder" | "grail" | "app" | "stats";
}

export type ToolCategory =
  | "graphics"
  | "save-management"
  | "quality-of-life"
  | "modding"
  | "launchers"
  | "automation"
  | "server-software"
  | "calculators";

export interface Tool extends ProjectBase {
  category: ToolCategory;
  author?: string;
  download?: string;
  currentVersion?: string;
  openSource?: boolean;
  popular?: boolean;
  /** Renderer capabilities, for graphics tools only. */
  renderer?: {
    highFps?: boolean;
    widescreen?: boolean;
    shaders?: boolean;
  };
}

export interface VersionInfo extends Verification {
  version: GameVersion;
  /** Release date, as precise as is known: YYYY, YYYY-MM or YYYY-MM-DD, or a short phrase when unknown. */
  released: string;
  headline: string;
  changes: string[];
  whyItMatters: string;
  modding: string;
  multiplayer: string;
  /** Official patch installers. Only list URLs that have been checked to resolve. */
  downloads?: PatchDownload[];
  related?: Ref[];
}

export interface PatchDownload {
  /** Which install the patch applies to. */
  edition: "classic" | "lod";
  url: string;
  /** File size in bytes, as served. */
  bytes?: number;
}

export type CommunityKind = "modding" | "reference" | "wiki" | "trading" | "forum";

export interface Community extends Verification {
  slug: string;
  name: string;
  kind: CommunityKind;
  summary: string;
  description?: string;
  status: ProjectStatus;
  website: string;
  discord?: string;
  founded?: string;
  /** What it's most useful for today, as short bullets. */
  useFor?: string[];
  /** Whether it covers legacy Diablo II, Resurrected, or both. */
  covers: "legacy" | "resurrected" | "both";
  /** A longer article about it, if we have one. */
  article?: Ref;
  tags?: string[];
  related?: Ref[];
}
