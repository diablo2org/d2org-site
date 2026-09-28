import Link from "next/link";
import type { ReactNode } from "react";
import { BreadcrumbJsonLd } from "@/lib/seo";

export interface Crumb {
  href: string;
  label: string;
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <header className="page-banner relative overflow-hidden border-b border-stone-700 py-12 sm:py-20">
      {/* The current page needs a plain-text name, so rich titles leave it out of the trail. */}
      {crumbs && <BreadcrumbJsonLd crumbs={crumbs} current={typeof title === "string" ? title : undefined} />}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 font-ui tracking-wider text-xs uppercase text-stone-500">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={c.href} className="hover:text-cobalt-300">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-end lg:gap-14">
          <div>
            <h1 className="engraved-title font-display text-5xl leading-[0.95] font-normal text-balance sm:text-6xl">
              {title}
            </h1>
            {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300 text-pretty">{lead}</p>}
            {children && <div className="mt-6">{children}</div>}
          </div>
          {eyebrow && (
            <p className="border-t border-stone-600 pt-3 font-ui tracking-wider text-xs uppercase text-gold-400 lg:mb-1">
              {eyebrow}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}

export function Section({
  title,
  lead,
  children,
  id,
  action,
}: {
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  id?: string;
  action?: ReactNode;
}) {
  return (
    <section id={id} className="section-rule mx-auto mt-16 max-w-6xl px-4 pt-8 sm:px-6">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="section-title font-display text-3xl leading-snug font-normal text-stone-100">{title}</h2>
          {lead && <p className="mt-2 max-w-2xl text-stone-400">{lead}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
