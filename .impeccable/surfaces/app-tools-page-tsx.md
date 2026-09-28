---
version: 1
slug: "app-tools-page-tsx"
primary_target: "app/tools/page.tsx"
related_targets: ["app/tools/[slug]/page.tsx","app/mods/page.tsx","app/mods/[slug]/page.tsx","components/EntryLayout.tsx","components/DirectoryHeader.tsx","components/ToolsDirectory.tsx","components/ModsDirectory.tsx","components/Directory.module.css"]
---

# Tools and mods directories

Scope: /tools, /mods and their individual records; shared EntryLayout also gives community records consistent typography, links and provenance. Operate for discovery and compatibility; Read for detail pages.

Primary paths: find a tool by category, name or documented patch support; switch directly to a compatibility table. Browse mods by supported play mode, understand their gameplay changes, then open the project or its realm.

Direction: Extend the server redesign's Exocet, cold stone, bone-white, copper and silver language. Compact entrances, open directory rows, task-specific filters, readable project columns. A category rail on tools becomes a horizontal navigation strip on phones. Mod rows put identity and patches beside the description, feature summary and play modes.

Detail rules: Official links remain in the header, key facts sit in an unboxed strip, compatibility/setup receives a distinct sidebar, and provenance remains visible below it. Collapse to one column on mobile without changing reading order. Empty data stays explicit; no unsupported capability claims or invented download links.

Interaction: Native category and compatibility hashes are shareable and preserve existing deep links. Search and patch filtering combine; patch filtering explicitly excludes unknowns. Compatibility uses readable symbols with accessible labels and sticky row names. Mod play-mode filters include only documented support.

Constraints: Preserve all records, factual copy, existing URLs, status, verification and relationships. CSS Modules isolate these changes from articles, homepage and the finished server pages. No new raster assets or visual identity.
