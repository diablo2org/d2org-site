export interface TeamRole {
  label: string;
  /** The project's page on this site, or its own site or Discord when it has no entry here. */
  href?: string;
}

export interface TeamMember {
  name: string;
  roles: TeamRole[];
  /** GitHub username. */
  github?: string;
  /** Discord user ID, for the discord.com/users profile link. */
  discordId?: string;
}

/** Summaries for projects with no directory entry, keyed by the role's `href`. */
export const offsiteProjects: Record<string, { summary: string }> = {
  "https://discord.gg/URucKf8efT": {
    summary:
      "A project recreating the Diablo II 1.09d experience on 1.13c, with a vanilla-like core and regular updates tied to seasonal play. A quality-of-life toolset, with every feature toggleable, is planned.",
  },
};

export const team: TeamMember[] = [
  {
    name: "Kieran",
    github: "kiertaylor",
    discordId: "233291235475980288",
    roles: [
      { label: "Diablo09 owner", href: "/servers/diablo09" },
      { label: "Phrozen Keep moderator", href: "/community/phrozen-keep" },
      { label: "Hellforged admin", href: "https://discord.gg/URucKf8efT" },
    ],
  },
  {
    name: "Meanski",
    github: "meanski",
    discordId: "119708174327480325",
    roles: [
      { label: "SlashDiablo owner", href: "/servers/slashdiablo" },
      { label: "Phrozen Keep tech admin", href: "/community/phrozen-keep" },
      { label: "D2Resurgence admin", href: "/servers/resurgence" },
      { label: "Hellforged admin", href: "https://discord.gg/URucKf8efT" },
      { label: "PvPGN maintainer and admin", href: "/tools/pvpgn" },
    ],
  },
];
