import { Download, Globe, Heart, MessagesSquare } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/** GitHub mark (Octicons). Lucide dropped brand icons. */
export function GitHubIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="currentColor" aria-hidden {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function RedditIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden {...props}>
      <ellipse cx="8" cy="9.5" rx="5.5" ry="4" />
      <circle cx="12.5" cy="3" r="1.2" />
      <path d="M8 5.5 9 2l3.3.9" strokeLinecap="round" />
      <circle cx="6" cy="9" r=".6" fill="currentColor" />
      <circle cx="10" cy="9" r=".6" fill="currentColor" />
      <path d="M6.2 11.2c1 .7 2.6.7 3.6 0" strokeLinecap="round" />
    </svg>
  );
}

export interface EntryLink {
  label: string;
  href: string;
  icon: ComponentType<IconProps>;
  primary?: boolean;
}

const isGitHub = (url: string) => /^https?:\/\/(www\.)?github\.com\//.test(url);

/** Header links for a directory entry, most important first. */
export function entryLinks(e: {
  website?: string;
  source?: string;
  download?: string;
  discord?: string;
  reddit?: string;
  patreon?: string;
}): EntryLink[] {
  const links: EntryLink[] = [];
  if (e.website) links.push({ label: "Website", href: e.website, icon: Globe });
  if (e.source) links.push({ label: isGitHub(e.source) ? "GitHub" : "Source", href: e.source, icon: isGitHub(e.source) ? GitHubIcon : Globe });
  if (e.download) links.push({ label: "Download", href: e.download, icon: Download });
  if (e.discord) links.push({ label: "Discord", href: e.discord, icon: MessagesSquare });
  if (e.reddit) links.push({ label: "Reddit", href: e.reddit, icon: RedditIcon });
  if (e.patreon) links.push({ label: "Patreon", href: e.patreon, icon: Heart });
  if (links[0]) links[0].primary = true;
  return links;
}

export function EntryLinks({ links }: { links: EntryLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="entry-links" aria-label="Links">
      {links.map(({ label, href, icon: Icon, primary }) => (
        <li key={href}>
          <a href={href} rel="noopener" className={`entry-link${primary ? " is-primary" : ""}`}>
            <Icon size={15} />
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
