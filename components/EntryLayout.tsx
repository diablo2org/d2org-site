import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd, JsonLd } from "@/lib/seo";
import type { ProjectStatus as Status, Ref, Verification } from "@/lib/types";
import { EntryLinks, type EntryLink } from "./EntryLinks";
import type { Crumb } from "./PageHeader";
import { ProjectStatus } from "./ProjectStatus";
import { RelatedLinks } from "./Related";
import { VerificationNote } from "./Verification";
import styles from "./Directory.module.css";

/** Consistent project identity, reading column, compatibility and provenance. */
export function EntryLayout({ eyebrow, name, summary, status, crumbs, refKey, verification, file, sidebar, links = [], meta = [], facts = [], schema, children }: {
  eyebrow: string;
  name: string;
  summary: string;
  status: Status;
  crumbs: Crumb[];
  refKey: Ref;
  verification: Verification;
  file: string;
  sidebar?: ReactNode;
  links?: EntryLink[];
  meta?: (string | false | undefined)[];
  facts?: [label: string, value: ReactNode][];
  /** schema.org data describing the entry itself. */
  schema?: Record<string, unknown>;
  children: ReactNode;
}) {
  const directory = crumbs[1] ?? crumbs[0];
  const primary = links.find((link) => link.primary) ?? links[0];
  return <div className={styles.surface}>
    <BreadcrumbJsonLd crumbs={crumbs} current={name} />
    {schema && <JsonLd data={schema} />}
    <header className={`${styles.hero} ${styles.entryHero}`}>
      <div className={styles.width}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          {crumbs.map((crumb) => <span key={crumb.href}><Link href={crumb.href}>{crumb.label}</Link><span aria-hidden="true">/</span></span>)}
          <span>{name}</span>
        </nav>
        <div className={styles.entryTitle}><h1>{name}</h1><ProjectStatus status={status} /></div>
        <p className={styles.entrySummary}>{summary}</p>
        <div className={styles.meta}><span>{eyebrow}</span>{meta.filter(Boolean).map((item) => <span key={String(item)}>{item}</span>)}</div>
        <EntryLinks links={links} />
        {facts.length > 0 && <dl className={styles.facts}>{facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
      </div>
    </header>
    <div className={`${styles.width} ${styles.entryLayout}`}>
      <div className={styles.entryContent}>
        {children}
        {directory && <Link href={directory.href} className={styles.inlineLink}><ArrowLeft size={16} aria-hidden="true" /> Back to {directory.label.toLowerCase()}</Link>}
      </div>
      <aside className={styles.entrySidebar}>
        {sidebar && <section className={styles.compatibility} aria-labelledby="compatibility-heading">
          <h2 id="compatibility-heading">Compatibility & setup</h2>
          {sidebar}
          {primary && <a href={primary.href} rel="noopener" className={styles.action}>{primary.label === "Download" ? "Official download" : primary.label === "GitHub" ? "View on GitHub" : "Visit official site"}<ArrowUpRight size={16} aria-hidden="true" /></a>}
        </section>}
        <section className={styles.provenance}><h2>About this listing</h2><VerificationNote {...verification} file={file} /></section>
        <div className={styles.related}><RelatedLinks refKey={refKey} title="Explore further" /></div>
      </aside>
    </div>
  </div>;
}

export function Block({ title, children }: { title: string; children: ReactNode }) {
  return <section className={styles.block}><h2>{title}</h2>{children}</section>;
}

export function Bullets({ items }: { items: string[] }) {
  return <ul className={styles.bullets}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
