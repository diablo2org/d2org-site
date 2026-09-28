---
version: 1
slug: "app-servers-page-tsx"
primary_target: "app/servers/page.tsx"
related_targets: ["app/servers/[slug]/page.tsx","components/ServerDirectory.tsx","app/servers/servers.module.css"]
---

# Server directory and profiles

Scope: /servers and /servers/[slug]. Modes: Operate for comparison, Read for profiles.
Visitor task: Find a realm by play style, shortlist up to four and compare documented facts; open a profile and find gameplay differences, setup and official links.
Direction: Preserve the established Exocet, cold stone, bone-white and restrained copper visual identity. Replace the wide seven-column table and repetitive boxes with a compact introduction, filterable editorial rows, an explicit shortlist and a focused comparison. Profiles use an open reading column and a purposeful setup sidebar.
First viewport: Breadcrumb, large Private servers title, concise explanation and explainer link; directly below, browse/compare controls, play-style filters and the first server rows. Profiles show name, status, summary and official links followed by an unboxed facts strip.
Signature interaction: Shortlist servers from the directory and switch to a grouped, readable comparison; row labels remain visible on narrow screens.
Constraints: Preserve all existing records, unknowns, factual copy, routes, links, relationships and verification. No new popularity claims. CSS is scoped to servers. Code-led local redesign within the established identity; no new imagery.

Implemented behavior: Browse opens with the first three non-smaller realms selected. Play-style filters preserve the shortlist; four selections is the maximum. Comparison needs at least two realms and supports clear, individual removal and differences-only filtering. Explicit unknowns remain distinct from “No”. The scrollable comparison keeps feature labels visible and is keyboard-focusable.
Responsive invariants: At widths below 768px, row descriptions move below identity/selection, profile columns stack, and the facts strip and section navigation wrap. Comparison scrolls within its own region. The shortlist remains bottom-sticky with compact mobile copy.
Implementation boundary: `app/servers/servers.module.css` owns the composition and locally scoped shared-component overrides. Shared `EntryLayout` and other directories retain their existing layout. The server-only addendum in `DESIGN.md` records the shipped visual invariants; no global design-system refresh or new raster asset is part of this change.
