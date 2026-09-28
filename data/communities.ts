import type { Community, CommunityKind } from "@/lib/types";

export const communityKinds: Record<CommunityKind, string> = {
  modding: "Modding",
  reference: "Reference",
  wiki: "Wiki & guides",
  trading: "Trading",
  forum: "Forum",
};

export const communities: Community[] = [
  {
    slug: "phrozen-keep",
    name: "The Phrozen Keep",
    kind: "modding",
    summary:
      "The home of Diablo II modding since 2000: forums, a knowledge base of file guides and tutorials, a file center, and open-source projects such as D2MOO.",
    description:
      "Most of what the community knows about Diablo II's files was worked out and written down at the Keep. Its knowledge base is the first place to look for how a TXT column or file format works. Its forums are where modders ask questions and post projects. Its GitHub organisation maintains D2MOO, D2Template and CE_Database.",
    status: "active",
    website: "https://d2mods.info",
    founded: "2000",
    covers: "both",
    useFor: [
      "File guides and tutorials in the knowledge base",
      "Modding questions and project threads",
      "Downloading classic modding tools from the file center",
      "D2MOO and other open-source research on GitHub",
    ],
    article: "history:phrozen-keep",
    tags: ["d2mods", "modding", "knowledge base", "file guides", "forums"],
    related: ["history:phrozen-keep", "tool:d2moo", "tool:d2template", "modding:how-mods-work"],
    sources: [
      { label: "The Phrozen Keep", url: "https://d2mods.info/home.php" },
      { label: "History of the Phrozen Keep", url: "https://d2mods.info/forum/kb/viewarticle?a=455" },
    ],
  },
  {
    slug: "arreat-summit",
    name: "The Arreat Summit",
    kind: "reference",
    summary:
      "Blizzard's own strategy guide for Diablo II and Lord of Destruction, still hosted on classic.battle.net. Classes, skills, items, monsters, quests and maps.",
    description:
      "The Arreat Summit was Blizzard's official reference for the game, covering basics, classes and skills, items, monsters, quests, maps and an FAQ. It's no longer updated, and community research has since corrected or extended parts of it. It's still a quick, reliable place to check quest rewards, runeword recipes and item bases.",
    status: "archived",
    website: "https://classic.battle.net/diablo2exp/",
    covers: "legacy",
    useFor: ["Quest rewards and walkthroughs", "Runeword and cube recipes", "Item bases and monster basics", "Area maps and waypoints"],
    tags: ["arreat summit", "official guide", "blizzard", "classic.battle.net", "reference"],
    related: ["history:battlenet-history"],
    sources: [{ label: "The Arreat Summit", url: "https://classic.battle.net/diablo2exp/" }],
  },
  {
    slug: "amazon-basin",
    name: "The Amazon Basin",
    kind: "wiki",
    summary:
      "A community that began in 2000 as a Diablo II guild, known for its motto \"play nice and show some class\" and for its detailed Diablo II wiki.",
    description:
      "The Basin started as a guild for Amazon players who wanted no part of duping and bad play, then opened to everyone. It grew into other games, but its wiki still has some of the web's most detailed Diablo II information, and a few people keep it updated for Resurrected.",
    status: "active",
    website: "https://www.theamazonbasin.com",
    founded: "2000",
    covers: "both",
    useFor: ["Detailed mechanics and item pages on the Basin wiki", "A long-running, friendly forum"],
    tags: ["basin", "amazon basin", "wiki", "guild", "forum"],
    sources: [
      { label: "The Amazon Basin", url: "https://www.theamazonbasin.com/" },
      { label: "Basin Wiki: Diablo II", url: "http://www.theamazonbasin.com/wiki/index.php/Diablo_II" },
    ],
  },
  {
    slug: "d2jsp",
    name: "d2jsp",
    kind: "trading",
    summary:
      "The trading forum that grew out of Diablo II in 2002. Its Forum Gold became the game's unofficial currency, and it now covers many games.",
    description:
      "Paul Taulborg founded d2jsp in 2002. Its trading runs on Forum Gold, a site currency, with free mediation to help trades go safely. It became one of the largest gaming trade communities online. Its origins are part of the history of Diablo II's economy and automation.",
    status: "active",
    website: "https://forums.d2jsp.org",
    founded: "2002",
    covers: "both",
    useFor: ["Trading", "Price checking", "Game-specific forums"],
    tags: ["d2jsp", "forum gold", "fg", "trading", "price check"],
    related: ["history:battlenet-history", "history:hacks-bots-automation"],
    sources: [
      { label: "What is d2jsp?", url: "https://forums.d2jsp.org/info.php?p=32" },
      { label: "What is Forum Gold?", url: "https://forums.d2jsp.org/info.php?p=35" },
    ],
  },
  {
    slug: "diablo2-io",
    name: "diablo2.io",
    kind: "forum",
    summary:
      "An item database, trading marketplace and forum. It's focused on Resurrected, but its database falls back to 1.14 data and its forums include legacy players and modders.",
    description:
      "The database covers every item, area, monster, quest, NPC and skill, with stats, images and market status. The marketplace tracks trades and price history. Where Resurrected hasn't changed something, the database uses 1.14 Lord of Destruction data, so much of it applies to legacy play.",
    status: "active",
    website: "https://diablo2.io",
    covers: "both",
    useFor: ["Searchable item, monster and skill database", "Trading and price history", "Forums"],
    tags: ["diablo2.io", "database", "trading", "marketplace", "forum"],
    sources: [{ label: "diablo2.io", url: "https://diablo2.io/" }],
  },
];

export function getCommunity(slug: string) {
  return communities.find((c) => c.slug === slug);
}
