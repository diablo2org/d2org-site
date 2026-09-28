import type { Tool, ToolCategory } from "@/lib/types";

export const toolCategories: Record<
  ToolCategory,
  { label: string; blurb: string }
> = {
  graphics: {
    label: "Graphics",
    blurb: "Renderers and wrappers that fix display problems, raise resolution and add effects.",
  },
  "save-management": {
    label: "Save management",
    blurb: "Mule tools, stash managers and character editors.",
  },
  "quality-of-life": {
    label: "Quality of life",
    blurb: "Plugins that add stash space, loot filtering and convenience features.",
  },
  modding: {
    label: "Modding",
    blurb: "Tools for editing game data, archives, levels and code.",
  },
  launchers: {
    label: "Launchers",
    blurb: "Tools for installing, switching between and launching mods and game versions.",
  },
  automation: {
    label: "Maphacks & automation",
    blurb:
      "Overlays and bots. Only use them in singleplayer or on servers whose rules allow them. Never use them on Blizzard's official realms.",
  },
  "server-software": {
    label: "Server software",
    blurb: "Software for hosting your own Battle.net-style realm.",
  },
  calculators: {
    label: "Calculators",
    blurb: "Breakpoint calculators and skill and character planners.",
  },
};

/**
 * Seed data — every entry below still needs checking against its sources.
 * Where we were unsure, fields are left out rather than guessed.
 */
export const tools: Tool[] = [
  {
    slug: "d2gl",
    name: "D2GL",
    category: "graphics",
    summary:
      "An OpenGL renderer for legacy Diablo II, with high-FPS motion smoothing, upscaling, shaders and HD text.",
    status: "active",
    source: "https://github.com/bayaraa/d2gl",
    openSource: true,
    versions: ["1.09d", "1.10f", "1.11b", "1.12a", "1.13c", "1.13d", "1.14d"],
    os: ["windows"],
    renderer: { highFps: true, widescreen: true, shaders: true },
    tags: ["renderer", "opengl", "glide", "widescreen", "high fps", "shaders", "upscaling", "hd"],
    related: ["guide:modern-diablo-2-graphics", "play:windows", "mod:median-xl"],
    popular: true,
  },
  {
    slug: "d2dx",
    name: "D2DX",
    category: "graphics",
    summary:
      "A Glide wrapper that makes Diablo II run well on modern PCs, with motion prediction for higher frame rates and widescreen support.",
    status: "inactive",
    author: "bolrog",
    source: "https://github.com/bolrog/d2dx",
    openSource: true,
    versions: ["1.09d", "1.10f", "1.12a", "1.13c", "1.13d", "1.14d"],
    os: ["windows", "linux", "steam-deck"],
    renderer: { highFps: true, widescreen: true, shaders: false },
    tags: ["glide", "wrapper", "widescreen", "high fps", "motion prediction", "upscaling"],
    related: ["guide:modern-diablo-2-graphics", "play:windows", "play:steam-deck"],
    popular: true,
  },
  {
    slug: "d2opengl",
    name: "D2OpenGL",
    category: "graphics",
    summary: "An OpenGL-based renderer for Diablo II.",
    status: "unknown",
    versions: [],
    tags: ["renderer", "opengl"],
    related: ["guide:modern-diablo-2-graphics"],
  },
  {
    slug: "cnc-ddraw",
    name: "cnc-ddraw",
    category: "graphics",
    summary:
      "A general-purpose DirectDraw replacement for old games. It can fix colour and scaling problems when Diablo II runs in DirectDraw mode.",
    status: "active",
    author: "FunkyFr3sh",
    source: "https://github.com/FunkyFr3sh/cnc-ddraw",
    openSource: true,
    versions: [],
    os: ["windows", "linux"],
    tags: ["directdraw", "ddraw", "wrapper", "scaling", "colours"],
    related: ["guide:modern-diablo-2-graphics", "play:windows"],
  },
  {
    slug: "plugy",
    name: "PlugY",
    category: "quality-of-life",
    summary:
      "The classic singleplayer plugin: shared and effectively unlimited stash pages, respec, and ladder-only runewords and world events offline.",
    status: "maintained",
    author: "Yohann Nicolas",
    website: "http://plugy.free.fr",
    openSource: true,
    versions: ["1.09d", "1.10f", "1.11b", "1.12a", "1.13c", "1.13d", "1.14d"],
    os: ["windows"],
    tags: ["stash", "shared stash", "singleplayer", "respec", "ladder runewords", "offline"],
    related: ["version:1.13c", "tool:d2se", "tool:gomule", "play:getting-started"],
    popular: true,
  },
  {
    slug: "basemod",
    name: "BaseMod",
    category: "quality-of-life",
    summary:
      "A plugin for 1.13c that adds quality-of-life features such as higher resolutions.",
    status: "unknown",
    versions: ["1.13c"],
    tags: ["plugin", "widescreen", "resolution"],
    related: ["version:1.13c"],
  },
  {
    slug: "gomule",
    name: "GoMule",
    category: "save-management",
    summary:
      "A muling tool for singleplayer. It moves items between characters and a separate item stash, and can dump character and stash contents.",
    status: "maintained",
    source: "https://github.com/gomule/gomule",
    openSource: true,
    versions: ["1.10f", "1.13c", "1.13d", "1.14d"],
    os: ["windows", "linux", "macos"],
    tags: ["mule", "stash", "save", "d2s", "singleplayer", "items"],
    related: ["tool:plugy", "tool:atma"],
  },
  {
    slug: "atma",
    name: "ATMA",
    category: "save-management",
    summary:
      "One of the original singleplayer stash tools from the 1.09 era, largely superseded by GoMule.",
    status: "archived",
    versions: ["1.09d"],
    tags: ["mule", "stash", "save", "historical"],
    related: ["tool:gomule", "version:1.09d"],
  },
  {
    slug: "hero-editor",
    name: "Hero Editor",
    category: "save-management",
    summary:
      "A well-known early character and item editor for singleplayer saves.",
    status: "archived",
    versions: ["1.09d"],
    tags: ["editor", "character editor", "save", "d2s", "historical"],
    related: ["version:1.09d"],
  },
  {
    slug: "d2se",
    name: "D2SE",
    category: "launchers",
    summary:
      "A mod launcher that runs several mods and game versions from a single Diablo II install.",
    status: "inactive",
    versions: ["1.07", "1.08", "1.09d", "1.10f", "1.11b", "1.12a", "1.13c", "1.13d"],
    incompatibleVersions: ["1.14d"],
    os: ["windows"],
    tags: ["launcher", "mod manager", "version switcher"],
    related: ["version:1.13c", "tool:plugy"],
  },
  {
    slug: "slashdiablo-maphack",
    name: "SlashDiablo Maphack (BH)",
    category: "automation",
    summary:
      "The maphack most 1.13c players know: map reveal, a configurable loot filter, item and stat details, one-click item moving and stash export. Built for SlashDiablo and open source.",
    description:
      "A customised version of McGod's BH maphack, made for SlashDiablo. It reveals the map, monsters and missiles, and adds a configurable item display for sockets, item level and ethereal items. It can move items between inventory, stash and cube in one click, auto-party, warn about skills, show a secondary attributes screen with IAS and FHR, and export your stash. SlashDiablo provides it officially. Check other servers' rules before using it there.",
    status: "active",
    author: "McGod (original BH), Deadlock39, planqi",
    source: "https://github.com/planqi/slashdiablo-maphack",
    openSource: true,
    versions: ["1.13c", "1.13d"],
    os: ["windows"],
    tags: ["bh", "maphack", "map hack", "loot filter", "item filter", "slashdiablo", "overlay", "stash export"],
    related: ["server:slashdiablo", "history:hacks-bots-automation"],
    sources: [{ label: "GitHub README", url: "https://github.com/planqi/slashdiablo-maphack" }],
    popular: true,
  },
  {
    slug: "kolbot",
    name: "kolbot (D2BS)",
    category: "automation",
    summary:
      "The best-known open-source Diablo II botting system: the D2BS core, the D2Bot# manager and the kolbot JavaScript script library.",
    description:
      "D2BS is made of three parts: the D2BS core in C++, the D2Bot# game manager in C#, and the kolbot script library in JavaScript. The project describes itself as educational tooling, meant for offline play or private servers that explicitly allow bots, and not for Battle.net. It's free, and the project warns never to pay for it. A related project, kolbot-SoloPlay, levels characters from 1 to 99 unattended.",
    status: "active",
    author: "kolton (kolbot), noah (D2Bot#), blizzhackers",
    source: "https://github.com/blizzhackers/kolbot",
    openSource: true,
    versions: [],
    os: ["windows"],
    tags: ["bot", "botting", "d2bs", "d2bot", "kolbot", "automation", "soloplay"],
    related: ["history:hacks-bots-automation"],
    sources: [
      { label: "GitHub: blizzhackers/kolbot", url: "https://github.com/blizzhackers/kolbot" },
      { label: "Blizzhackers documentation", url: "https://bhdocs.github.io/" },
    ],
  },
  {
    slug: "sgd2freeres",
    name: "SGD2FreeRes",
    category: "graphics",
    summary:
      "SlashGaming Diablo II Free Resolution: lets the game run at any resolution you choose from the Video Options menu, moving the inventory and UI to fit.",
    description:
      "SGD2FreeRes adds user-specified resolutions to Diablo II and repositions the inventory and other UI elements, using 800×600 as the base layout. It's unrestricted in GDI mode, with Glide wrappers (Sven's, nGlide, D2DX, D2GL) and with DirectDraw wrappers (cnc-ddraw, D2GL). Standard DirectDraw and Direct3D modes are limited to standard resolutions. It works with PlugY and D2SE. The DLL does nothing alone: it has to be loaded into the game by another tool.",
    status: "active",
    author: "Mir Drualga",
    source: "https://github.com/mir-diablo-ii-tools/SlashGaming-Diablo-II-Free-Resolution",
    openSource: true,
    versions: ["1.09d", "1.10f", "1.12a", "1.13c", "1.13d", "1.14d"],
    os: ["windows"],
    renderer: { widescreen: true },
    tags: ["resolution", "widescreen", "custom resolution", "hd", "slashgaming", "sgd2freeres", "slashdiablo hd"],
    related: ["guide:modern-diablo-2-graphics", "server:slashdiablo", "tool:d2dx", "tool:d2gl", "tool:plugy"],
    sources: [{ label: "GitHub README", url: "https://github.com/mir-diablo-ii-tools/SlashGaming-Diablo-II-Free-Resolution" }],
  },
  {
    slug: "d2moo",
    name: "D2MOO",
    category: "modding",
    summary:
      "An open-source reimplementation of Diablo II's game code, based on 1.10f, with patching tools so modders can replace individual functions.",
    description:
      "D2MOO reconstructs the game's logic, focusing on D2Common.dll and D2Game.dll, where most of it lives. D2Common can already be built and swapped in. Rather than replacing whole DLLs, modders patch the individual functions they need, through the D2.Detours project. It stays faithful to the original and doesn't fix bugs. It's the best open reference for how the game actually works. Maintained under The Phrozen Keep's GitHub organisation.",
    status: "active",
    source: "https://github.com/ThePhrozenKeep/D2MOO",
    openSource: true,
    versions: ["1.10f"],
    os: ["windows"],
    tags: ["reverse engineering", "source", "reimplementation", "d2common", "d2game", "code modding", "phrozen keep"],
    related: ["history:phrozen-keep", "modding:how-mods-work", "tool:d2template"],
    sources: [{ label: "GitHub README", url: "https://github.com/ThePhrozenKeep/D2MOO" }],
  },
  {
    slug: "d2template",
    name: "D2Template",
    category: "modding",
    summary: "A starter project for injecting your own code into Diablo II, from The Phrozen Keep.",
    status: "unknown",
    source: "https://github.com/ThePhrozenKeep/D2Template",
    openSource: true,
    versions: [],
    tags: ["code injection", "dll", "code modding", "template", "phrozen keep"],
    related: ["history:phrozen-keep", "tool:d2moo"],
    sources: [{ label: "The Phrozen Keep on GitHub", url: "https://github.com/ThePhrozenKeep" }],
  },
  {
    slug: "svens-glide-wrapper",
    name: "Sven's Glide Wrapper",
    category: "graphics",
    summary:
      "The classic Glide-to-OpenGL wrapper for Diablo II, with windowed mode, custom resolutions and vsync. The standard choice for years before D2DX and D2GL.",
    description:
      "Sven Labusch wrote the wrapper because Diablo II ran much better in Glide mode than in Direct3D, and he wanted Glide on cards that weren't 3dfx Voodoos. It translates Glide 3 calls to OpenGL. Options include windowed or fullscreen play at an adjustable resolution, vsync, shader-based gamma correction, texture memory settings and an FPS overlay. To install it, copy glide3x.dll into the game folder and select Glide in the video test, or launch with -3dfx. Version 1.4e (2010) is the final release.",
    status: "archived",
    author: "Sven Labusch",
    currentVersion: "1.4e",
    versions: [],
    os: ["windows"],
    renderer: { highFps: false },
    tags: ["glide", "wrapper", "opengl", "sven", "glide3x", "windowed", "vsync"],
    related: ["guide:modern-diablo-2-graphics", "tool:nglide", "tool:d2dx", "tool:sgd2freeres"],
    sources: [
      { label: "Wrapper readme (1.4e)", url: "https://d2.lc/glide-readme.txt" },
      { label: "Glide Wrapper 1.4e on ModDB", url: "https://www.moddb.com/games/diablo-2-lod/downloads/glide-wrapper-v14e-final" },
    ],
  },
  {
    slug: "nglide",
    name: "nGlide",
    category: "graphics",
    summary:
      "A free, general-purpose 3dfx Glide wrapper that runs Glide games through Direct3D or Vulkan, with support for high resolutions.",
    description:
      "nGlide emulates the Glide environment for any game written for 3dfx Voodoo cards, not only Diablo II. It supports all three Glide API versions (2.11, 2.60 and 3.10) and renders through Direct3D or Vulkan. It's freeware from Zeus Software, installed system-wide rather than per game.",
    status: "active",
    author: "Zeus Software",
    website: "https://www.zeus-software.com/downloads/nglide",
    currentVersion: "2.10",
    openSource: false,
    versions: [],
    os: ["windows"],
    tags: ["glide", "wrapper", "direct3d", "vulkan", "3dfx", "voodoo"],
    related: ["guide:modern-diablo-2-graphics", "tool:svens-glide-wrapper", "tool:sgd2freeres"],
    sources: [{ label: "nGlide (Zeus Software)", url: "https://www.zeus-software.com/downloads/nglide" }],
  },
  {
    slug: "multires",
    name: "D2MultiRes",
    category: "graphics",
    summary:
      "An older multiple-resolution patch by Sluggy for 1.12a. It adds higher resolutions to the Video Options menu and was long bundled alongside mods such as Median XL.",
    description:
      "D2MultiRes lets you switch to higher resolutions in-game from the Video Options menu. It needs a clean 1.12a install and does not work with 1.13c, and the author recommends DirectDraw mode to avoid graphical glitches. It can be loaded alongside PlugY by adding D2Multires.dll to PlugY's DllToLoad setting. Median XL's realm doesn't support it. For newer versions, SGD2FreeRes and the modern renderers do the same job.",
    status: "archived",
    author: "Sluggy",
    versions: ["1.12a"],
    incompatibleVersions: ["1.13c"],
    os: ["windows"],
    renderer: { widescreen: true },
    tags: ["multires", "d2multires", "resolution", "widescreen", "median xl"],
    related: ["tool:sgd2freeres", "tool:plugy", "mod:median-xl", "version:1.12a"],
    sources: [{ label: "D2MultiRes on ModDB", url: "https://www.moddb.com/games/diablo-2/news/d2multires" }],
  },
  {
    slug: "mpq-editor",
    name: "Ladik's MPQ Editor",
    category: "modding",
    summary:
      "The standard tool for opening Blizzard's MPQ archives: browse, extract, add, rename and delete files, and build new MPQs for your mod.",
    description:
      "An Explorer-style editor for MPQ archives, the format Diablo II ships its data in. It can extract files, run files directly from an archive, rename and delete them, and create new compressed archives. No installer: unzip it and run MPQEditor.exe. It works on Windows 7 and newer, and handles every Blizzard game that uses MPQs.",
    status: "active",
    author: "Ladislav Zezula",
    website: "https://www.zezula.net/en/mpq/download.html",
    versions: [],
    os: ["windows"],
    tags: ["mpq", "archive", "extract", "d2data", "d2exp", "patch_d2.mpq", "ladik"],
    related: ["modding:how-mods-work", "tool:afj-sheet-edit"],
    sources: [{ label: "MPQ Editor downloads", url: "https://www.zezula.net/en/mpq/download.html" }],
    popular: true,
  },
  {
    slug: "afj-sheet-edit",
    name: "AFJ Sheet Edit",
    category: "modding",
    summary:
      "A spreadsheet-style editor made for Diablo II's tab-separated TXT files. Modders recommend it over Excel, which tends to mangle them.",
    description:
      "Written because editing the game's TXT files in Microsoft Excel caused problems, AFJ Sheet Edit reads and writes tabbed TXT files directly. It can open several files at once, search and replace, hide rows and columns, resize columns to fit, open files by drag and drop, and optionally back up files before saving. It has more features than D2Excel.",
    status: "inactive",
    currentVersion: "0.61b",
    versions: [],
    os: ["windows"],
    tags: ["txt", "excel", "spreadsheet", "tabbed text", "data files", "sheet editor"],
    related: ["modding:how-mods-work", "tool:d2excel", "tool:mpq-editor", "history:phrozen-keep"],
    sources: [
      { label: "AFJ Sheet Editor (Phrozen Keep)", url: "https://d2mods.info/forum/viewtopic.php?t=15874" },
      { label: "AFJ Sheet Editor 0.61b update", url: "https://d2mods.info/forum/viewtopic.php?t=63847" },
    ],
    popular: true,
  },
  {
    slug: "d2excel",
    name: "D2Excel & D2ExcelPlus",
    category: "modding",
    summary:
      "A lightweight TXT editor for people without Microsoft Excel, and D2ExcelPlus, an open-source rewrite that adds quality-of-life features and Resurrected support.",
    description:
      "D2Excel loads a TXT file such as weapons.txt into a grid you can edit and save. D2ExcelPlus by Cjreek started as an improvement on it and edits both Lord of Destruction and Resurrected text files.",
    status: "maintained",
    source: "https://github.com/Cjreek/D2ExcelPlus",
    openSource: true,
    versions: [],
    os: ["windows"],
    tags: ["txt", "excel", "d2excelplus", "spreadsheet", "data files"],
    related: ["tool:afj-sheet-edit", "modding:how-mods-work"],
    sources: [
      { label: "D2ExcelPlus on GitHub", url: "https://github.com/Cjreek/D2ExcelPlus" },
      { label: "D2Excel Plus (Phrozen Keep)", url: "https://d2mods.info/forum/viewtopic.php?t=66019" },
    ],
  },
  {
    slug: "dc6con",
    name: "DC6CON",
    category: "modding",
    summary:
      "A command-line converter for DC6 sprites, the format used for Diablo II's item graphics and UI. Paul Siramy's modified version removes the original's limits on animated files.",
    description:
      "DC6CON converts between DC6 and ordinary images, so you can make inventory graphics for new items. It's an MS-DOS program that runs almost anywhere. Paul Siramy, who also documented the DCC format, released the modified version most people use. It's available from the Phrozen Keep file center.",
    status: "archived",
    author: "Paul Siramy (modified version)",
    versions: [],
    os: ["windows"],
    tags: ["dc6", "graphics", "sprites", "inventory graphics", "converter", "paul siramy"],
    related: ["tool:sixdice", "history:phrozen-keep"],
    sources: [
      { label: "DC6 item conversions (Phrozen Keep KB)", url: "https://d2mods.info/forum/kb/viewarticle?a=180" },
      { label: "Conversion using DC6CON", url: "https://d2mods.info/forum/viewtopic.php?t=7224" },
    ],
  },
  {
    slug: "sixdice",
    name: "SixDice",
    category: "modding",
    summary: "A Java-based editor and converter for both DC6 and DCC files, Diablo II's two sprite formats.",
    description:
      "SixDice reads and writes DC6 and DCC files. Its DCC support was built with a lot of help from Paul Siramy, and its DC6 encoding is based on his revision of DC6CON. Because it's Java, it runs on any system with a Java runtime.",
    status: "archived",
    website: "https://bahj.com/sixdice/",
    currentVersion: "0.55",
    versions: [],
    os: ["windows", "linux", "macos"],
    tags: ["dc6", "dcc", "graphics", "sprites", "converter", "java"],
    related: ["tool:dc6con", "history:phrozen-keep"],
    sources: [{ label: "SixDice 0.55 release (Phrozen Keep)", url: "https://d2mods.info/forum/viewtopic.php?t=33174" }],
  },
  {
    slug: "d2mod",
    name: "D2Mod",
    category: "modding",
    summary:
      "SVR's code plugin system for 1.10. Modders drop in prebuilt plugins, listed in an INI file, to add features the TXT files can't express.",
    description:
      "Released in 2004, D2Mod loads code plugins so modders who can't program can still use code changes. You place d2mod.dll in the game folder, put plugins in a mod subfolder, and list the DLLs to load in an INI file. Plugins include D1-style spellbooks, in-game resolution changes and D2ItemSpell, which lets items cast skills. NefEx later served a similar role for 1.11 and later.",
    status: "archived",
    author: "SVR",
    versions: ["1.10f"],
    os: ["windows"],
    tags: ["plugin", "code modding", "dll", "svr", "d2mod", "nefex"],
    related: ["history:phrozen-keep", "tool:d2template", "version:1.10f"],
    sources: [
      { label: "New system for code mods: D2Mod.dll", url: "https://d2mods.info/forum/viewtopic.php?f=133&t=22382" },
      { label: "History of the Phrozen Keep", url: "https://d2mods.info/forum/kb/viewarticle?a=455" },
    ],
  },
  {
    slug: "pvpgn",
    name: "PvPGN",
    category: "server-software",
    summary:
      "Free, open-source Battle.net server software. The basis of many Diablo II private realms, and the easiest way to run your own for friends.",
    description:
      "PvPGN emulates Battle.net for Blizzard and Westwood games. For Diablo II it provides the Battle.net server and the Diablo II character and database servers for closed realms. The actual game server, D2GS, isn't part of PvPGN and isn't supported by the project. The original PvPGN stopped development in 2011. PvPGN-PRO is the maintained fork.",
    status: "active",
    source: "https://github.com/pvpgn/pvpgn-server",
    openSource: true,
    versions: ["1.10f", "1.11b", "1.12a", "1.13c", "1.14d"],
    os: ["windows", "linux", "macos"],
    tags: ["pvpgn", "bnetd", "d2cs", "d2dbs", "d2gs", "realm", "server", "host", "battle.net emulator"],
    related: ["guide:private-servers-explained", "history:battlenet-history"],
    sources: [{ label: "PvPGN-PRO on GitHub", url: "https://github.com/pvpgn/pvpgn-server" }],
  },
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}
