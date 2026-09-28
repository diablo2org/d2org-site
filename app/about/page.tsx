import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MessagesSquare } from "lucide-react";
import { GitHubIcon } from "@/components/EntryLinks";
import { offsiteProjects, team, type TeamMember, type TeamRole } from "@/data/team";
import { servers } from "@/data/servers";
import { communities } from "@/data/communities";
import { tools } from "@/data/tools";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "./about.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Who runs diablo2.org, how the directory handles projects its team is involved in, and how to get in touch.",
  path: "/about",
});

function roleParts(role: TeamRole) {
  const match = role.label.match(/ (owner|moderator|tech admin|maintainer and admin|admin)$/);
  return { project: match ? role.label.slice(0, match.index) : role.label, position: match?.[1] };
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

const directory = [
  ...servers.map((entry) => ({ ...entry, href: `/servers/${entry.slug}`, kind: "Server" })),
  ...communities.map((entry) => ({ ...entry, href: `/community/${entry.slug}`, kind: "Community" })),
  ...tools.map((entry) => ({ ...entry, href: `/tools/${entry.slug}`, kind: "Tool" })),
];

// Derive affiliations from the same records as the profiles, avoiding a second role list.
const projects = Array.from(new Set(team.flatMap((member) => member.roles.map((role) => role.href ?? roleParts(role).project))))
  .map((key) => {
    const affiliations = team.flatMap((member) => member.roles
      .filter((role) => (role.href ?? roleParts(role).project) === key)
      .map((role) => ({ member: member.name, ...roleParts(role) })));
    const record = directory.find((entry) => entry.href === key);
    return { key, record, name: record?.name ?? affiliations[0].project, summary: record?.summary ?? offsiteProjects[key]?.summary, affiliations };
  });

function MemberProfile({ member }: { member: TeamMember }) {
  return <article className={`diablo-panel ${styles.member}`} aria-labelledby={`member-${member.name}`}>
    <div className={styles.memberHeading}>
      <h3 id={`member-${member.name}`}>{member.name}</h3>
      <a href="#projects" className={styles.memberJump} aria-label={`Explore the projects ${member.name} is involved in`}><ArrowDown size={20} aria-hidden="true" /></a>
    </div>
    <p className={styles.roleLabel}>Projects & roles</p>
    <ul className={styles.roles}>
      {member.roles.map((role) => {
        const { project, position } = roleParts(role);
        const content = <><span><strong>{project}</strong>{position && <span>{position}</span>}</span>{role.href && <ArrowUpRight size={17} aria-hidden="true" />}</>;
        return <li key={role.label}>{!role.href ? <div>{content}</div> : isExternal(role.href) ? <a href={role.href} rel="noopener">{content}</a> : <Link href={role.href}>{content}</Link>}</li>;
      })}
    </ul>
    {(member.github || member.discordId) && <ul className={styles.memberContacts} aria-label={`${member.name}'s links`}>
      {member.github && <li><a href={`https://github.com/${member.github}`} rel="noopener"><GitHubIcon size={16} />{member.github}</a></li>}
      {member.discordId && <li><a href={`https://discord.com/users/${member.discordId}`} rel="noopener"><MessagesSquare size={16} aria-hidden="true" />Discord</a></li>}
    </ul>}
  </article>;
}

export default function AboutPage() {
  return <div className={styles.about}>
    <header className={styles.hero}>
      <div className={styles.width}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">About</span></nav>
        <div className={styles.intro}>
          <h1>Keeping classic<br />Diablo II <span>connected.</span></h1>
          <div className={styles.welcome}>
            <p>An independent reference for classic Diablo II, run by people who have spent years running its servers, forums and tools.</p>
            <a href="#team" className={styles.textLink}>Meet the people behind it <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </header>

    <section id="team" className={`${styles.width} ${styles.team}`} aria-labelledby="team-title">
      <div className={styles.sectionIntro}>
        <h2 id="team-title">Who runs it</h2>
        <p>You may already know us from a realm, a forum or a project. Here&apos;s where our paths cross.</p>
      </div>
      <div className={styles.members}>{team.map((member) => <MemberProfile key={member.name} member={member} />)}</div>
    </section>

    <section className={styles.story} aria-labelledby="story-title">
      <div className={`${styles.width} ${styles.storyGrid}`}>
        <div><h2 id="story-title">It started with<br />a conversation.</h2><p className={styles.storyAside}>Bringing people together.<br />Keeping things friendly.</p></div>
        <div className={styles.prose}>
          <p>diablo2.org started with server owners needing somewhere to talk. The Phrozen Keep doesn&apos;t allow discussion of private servers, so around the time Meanski took over as admin of the PvPGN forums, we set this up as a place where people running servers could come together and work through the problems they were having.</p>
          <p>It has always been about bringing people together and keeping things friendly. The site grows that into a shared reference that covers every server, mod and tool as facts and differences, without picking sides. With Diablo II: Resurrected out, we think classic Diablo II needs a place like this more than ever.</p>
        </div>
      </div>
    </section>

    <section id="projects" className={`${styles.width} ${styles.projects}`} aria-labelledby="projects-title">
      <div className={styles.sectionIntro}>
        <h2 id="projects-title">The projects<br />we&apos;re part of</h2>
        <p>Some of the servers, communities and tools in this directory are run by the people who run this site. Explore the projects and see where we&apos;re involved.</p>
      </div>
      <ul className={styles.projectList}>
        {projects.map(({ key, record, name, summary, affiliations }) => <li key={key} className={styles.project}>
          <div className={styles.projectIdentity}>
            <h3>{record ? <Link href={record.href}>{name}<ArrowUpRight size={18} aria-hidden="true" /></Link> : isExternal(key) ? <a href={key} rel="noopener">{name}<ArrowUpRight size={18} aria-hidden="true" /></a> : name}</h3>
            {record && <span>{record.kind}</span>}
          </div>
          <div className={styles.projectDescription}>
            {summary && <p>{summary}</p>}
            <ul aria-label={`Team involvement in ${name}`} className={styles.affiliations}>
              {affiliations.map(({ member, position }) => <li key={member}><a href={`#member-${member}`}>{member}</a><span>{position}</span></li>)}
            </ul>
          </div>
        </li>)}
      </ul>
      <aside className={styles.editorial} aria-labelledby="editorial-title">
        <h3 id="editorial-title">Part of the community.<br />The same standards for everyone.</h3>
        <p>Those projects get the same entry format as every other listing. The directory compares facts and differences without ranking projects, and entries that haven&apos;t been checked against their sources are marked <span>“Not yet verified”</span>.</p>
      </aside>
    </section>

    <section className={`${styles.width} ${styles.contact}`} aria-labelledby="contact-title">
      <MessagesSquare size={32} strokeWidth={1.3} aria-hidden="true" />
      <div><h2 id="contact-title">Come say hello.</h2><p>Spotted something wrong, or want a project added?<br />Tell us on the diablo2.org Discord.</p></div>
      <div className={styles.contactActions}>
        <a href={site.discordUrl} className="diablo-button">Join the conversation</a>
        {site.repoUrl && <a href={site.repoUrl} className={styles.textLink}>Open an issue on GitHub <ArrowRight size={16} aria-hidden="true" /></a>}
      </div>
    </section>
  </div>;
}
