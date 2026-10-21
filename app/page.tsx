import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Hammer, ScrollText } from "lucide-react";
import { ModCard, ServerCard, ToolCard } from "@/components/Cards";
import { Section } from "@/components/PageHeader";
import { ProjectTabs } from "@/components/ProjectTabs";
import { mods } from "@/data/mods";
import { mainServers } from "@/data/servers";
import { tools } from "@/data/tools";
import { getArticles } from "@/lib/content";
import { downloads, downloadStats } from "@/lib/downloads";
import { getKbArticles } from "@/lib/kb";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({ title: `${site.name}: ${site.tagline}`, absoluteTitle: true, description: site.description, path: "/" });

const paths = [
  { href: "/play", title: "Play Diablo II", body: "Installation & setup guides", image: "items/7cr.png" },
  { href: "/mods", title: "Mods", body: "Overhauls & new adventures", image: "items/box.png" },
  { href: "/servers", title: "Servers", body: "Find your multiplayer realm", image: "items/tbk.png" },
  { href: "/tools", title: "Tools", body: "Graphics, utilities & editors", image: "items/r01.png" },
];

const steps = [
  ["Choose your version", "Classic, Lord of Destruction & patch compatibility", "/play/versions"],
  ["Find your way to play", "Vanilla, mods & private servers explained", "/guides/private-servers-explained"],
  ["Get up and running", "Installing on Windows 10 & 11", "/play/windows"],
  ["Bring the world into focus", "Modern graphics & widescreen support", "/guides/modern-diablo-2-graphics"],
  ["Pack the essentials", "Quality-of-life tools for the journey", "/tools"],
];

export default function Home() {
  // Main servers only, in data order, which puts featured realms first.
  const homeServers = mainServers.slice(0, 6);
  const popularTools = tools.filter((t) => t.popular);
  const grid = "project-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3";
  const browse = (href: string, label: string) => (
    <Link href={href} className="text-link">{label} <ArrowRight size={15} /></Link>
  );
  const guides = [...getArticles("play"), ...getArticles("guides")];

  return (
    <>
      <section className="sanctuary-hero" aria-labelledby="hero-title">
        <Image src="/diablo/landing/bg/FadeBlack2.jpg" alt="" width={1600} height={800} preload sizes="100vw" className="sanctuary-art" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content site-width">
          <div className="hero-copy">
            <h1 id="hero-title">Diablo2.org</h1>
            <p className="hero-intro">The modern guide to the classic.</p>
            <p className="hero-description">Everything you need to play, mod and explore the original Diablo II and Lord of Destruction.</p>
            <div className="hero-actions">
              <Link href="/play/getting-started" className="diablo-button">Start playing</Link>
              <a href={site.discordUrl} className="diablo-button" target="_blank" rel="noopener noreferrer">Join Discord</a>
              <Link href="/mods" className="diablo-button secondary">Explore mods</Link>
            </div>
            <p className="community-note">An independent, community-built resource.</p>
          </div>
        </div>
      </section>

      <nav className="path-bar" aria-label="Explore Diablo II">
        <div className="site-width path-grid">
          {paths.map(({ href, title, body, image }) => (
            <Link href={href} key={href} className="path-link">
              <span className="path-sprite"><Image src={`/diablo/images/${image}`} width={44} height={48} alt="" unoptimized /></span>
              <span><span className="path-title">{title}</span><span className="path-description">{body}</span></span>
              <ArrowRight className="path-arrow" size={15} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </nav>

      <section className="return-section site-width" aria-labelledby="return-title">
        <div className="return-intro">
          <h2 id="return-title">Return to Sanctuary</h2>
          <p>Coming back after ten or twenty years? Find the right version, get it running on a modern machine, and pick up where you left off.</p>
          <Link href="/play/getting-started" className="text-link">Read the getting started guide <ArrowRight size={16} /></Link>
          <div className="journal-art">
            <Image src="/diablo/landing/hd.png" alt="Classic Diablo II gameplay with the character inventory open at the Rogue Encampment" fill sizes="(max-width: 767px) 100vw, 560px" />
          </div>
        </div>
        <ol className="journey-steps">
          {steps.map(([title, description, href], index) => (
            <li key={href}>
              <Link href={href}>
                <span className="step-number" aria-hidden="true">{["I", "II", "III", "IV", "V"][index]}</span>
                <span><span className="step-title">{title}</span><span className="step-description">{description}</span></span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <Section title="Popular projects" lead="Realms, mods and tools from the Diablo II community.">
        <ProjectTabs
          tabs={[
            {
              id: "servers",
              label: "Servers",
              count: mainServers.length,
              content: <div className={grid}>{homeServers.map((sv) => <ServerCard key={sv.slug} server={sv} />)}</div>,
              footer: browse("/servers", "Compare all servers"),
            },
            {
              id: "mods",
              label: "Mods",
              count: mods.length,
              content: <div className={grid}>{mods.map((m) => <ModCard key={m.slug} mod={m} />)}</div>,
              footer: browse("/mods", "Browse all mods"),
            },
            {
              id: "tools",
              label: "Tools",
              count: tools.length,
              content: <div className={grid}>{popularTools.map((t) => <ToolCard key={t.slug} tool={t} />)}</div>,
              footer: browse("/tools", "Browse all tools"),
            },
          ]}
        />
      </Section>

      <KeepBand />

      <section className="knowledge-section" aria-labelledby="knowledge-title">
        <div className="site-width knowledge-inner">
          <div className="knowledge-heading">
            <BookOpen size={32} strokeWidth={1} aria-hidden="true" />
            <h2 id="knowledge-title">Guides & knowledge</h2>
            <p>Practical guides for the journey ahead. Preserved knowledge from the paths already travelled.</p>
            <Link href="/knowledge" className="text-link">Enter the knowledge base <ArrowRight size={16} /></Link>
          </div>
          <ul className="guide-list">
            {guides.map((guide) => (
              <li key={guide.href}><Link href={guide.href}><span><span className="guide-title">{guide.title}</span><span className="guide-summary">{guide.summary}</span></span><ArrowRight size={16} aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="site-width deeper-links" aria-label="More to explore">
        <Link href="/modding"><Hammer size={23} strokeWidth={1.3} aria-hidden="true" /><span><strong>Modding</strong><span>Guides & technical knowledge</span></span><ArrowRight size={17} aria-hidden="true" /></Link>
        <Link href="/archive"><ScrollText size={23} strokeWidth={1.3} aria-hidden="true" /><span><strong>The archive</strong><span>Diablo II history & community resources</span></span><ArrowRight size={17} aria-hidden="true" /></Link>
      </nav>
    </>
  );
}

/** The Phrozen Keep's knowledge base and download library, archived here. */
function KeepBand() {
  const articles = getKbArticles();
  const guides = [...articles].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, 5);
  const files = [...downloads].filter((d) => d.status === "recovered").sort((a, b) => (b.keepDownloads ?? 0) - (a.keepDownloads ?? 0)).slice(0, 5);
  const stats = downloadStats();
  const list = (title: string, href: string, label: string, items: { href: string; title: string; note: string }[]) => (
    <div>
      <h3 className="mb-3 font-ui text-sm font-semibold tracking-[0.12em] text-stone-300 uppercase">{title}</h3>
      <ul>
        {items.map((i) => (
          <li key={i.href} className="border-b border-stone-800">
            <Link href={i.href} className="flex items-baseline justify-between gap-4 py-2.5 text-stone-200 hover:text-gold-300">
              <span className="truncate">{i.title}</span>
              <span className="shrink-0 font-ui text-[0.8125rem] tabular-nums text-stone-400">{i.note}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={href} className="text-link mt-4">{label} <ArrowRight size={15} /></Link>
    </div>
  );
  return (
    <Section
      title="From the Phrozen Keep"
      lead={`The home of Diablo II modding since 2000. Its ${articles.length} knowledge base articles and ${stats.recovered.toLocaleString("en-GB")} recovered downloads now live here, with every author credited.`}
    >
      <div className="grid gap-10 md:grid-cols-2">
        {list("Most-read guides", "/knowledge", "Enter the knowledge base", guides.map((a) => ({ href: a.href, title: a.title, note: `${a.views?.toLocaleString("en-GB")} reads` })))}
        {list("Most-downloaded files", "/downloads", "Browse all downloads", files.map((d) => ({ href: `/downloads/${d.id}`, title: d.title, note: `${d.keepDownloads?.toLocaleString("en-GB")} downloads` })))}
      </div>
    </Section>
  );
}
