# diablo2.org

The modern guide to classic Diablo II.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
npm run check      # broken cross-references and internal links
npm run lint
npm run build      # fully static output
```

Optional env vars: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_REPO_URL` (turns on "Edit this page on GitHub" links), `NEXT_PUBLIC_REPO_BRANCH`.

## Where things live

| Path | What |
| --- | --- |
| `content/{play,guides,modding,history}/*.mdx` | Articles. The file name is the URL slug. |
| `data/{mods,servers,tools,versions,communities}.ts` | Structured directory entries, typed by `lib/types.ts`. |
| `lib/relationships.ts` | Cross-links. Declare `related: ["tool:d2gl", ...]` on one side and both pages show it. |
| `lib/search.ts` | Builds the client-side search index from content and data. |
| `components/mdx.tsx` | Components usable in MDX: `Callout`, `RendererTable`, `VersionSummary`, `ToolGrid`, `ServerGrid`. |
| `app/api/*` | Static JSON of the directory data. |

### Article frontmatter

```yaml
title: Running Diablo II on Linux
summary: One sentence, shown under the title and in search.
order: 3                     # sort order within the section
updated: 2026-09-26
versions: ["1.13c", "1.14d"] # "Works with" badges
notVersions: ["1.14d"]       # "Not compatible with" badges
related: ["play:steam-deck", "tool:d2dx"]
keywords: ["wine", "proton"] # search-only terms
lastVerified: 2026-09        # omit until someone has checked it against sources
sources:
  - { label: "Project README", url: "https://..." }
```

Ref kinds: `mod`, `server`, `tool`, `version`, `play`, `guide`, `modding`, `history`, `community`.

## Accuracy

All current content is seed data. Anything without `lastVerified` shows a "Not yet verified" notice. When you check an entry against its sources, add `sources` and `lastVerified`. Leave unknown fields out rather than guessing. The UI shows "?" or hides them.
