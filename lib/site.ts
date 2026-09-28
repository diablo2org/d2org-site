export const site = {
  name: "diablo2.org",
  tagline: "The modern guide to classic Diablo II.",
  description:
    "Everything you need to play, mod, understand and explore legacy Diablo II.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://diablo2.org",
  /** GitHub repo for "Edit this page" links, e.g. https://github.com/org/repo */
  repoUrl: process.env.NEXT_PUBLIC_REPO_URL,
  repoBranch: process.env.NEXT_PUBLIC_REPO_BRANCH ?? "main",
  discordUrl: "https://discord.gg/3EqeBFZ5JD",
};

export const nav = [
  { href: "/play", label: "Play" },
  { href: "/mods", label: "Mods" },
  { href: "/servers", label: "Servers" },
  { href: "/tools", label: "Tools" },
  { href: "/modding", label: "Modding" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/archive", label: "Archive" },
] as const;

export function editUrl(repoPath: string) {
  if (!site.repoUrl) return undefined;
  return `${site.repoUrl}/edit/${site.repoBranch}/${repoPath}`;
}
