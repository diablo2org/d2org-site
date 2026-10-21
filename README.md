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
| `content/kb/<category>/*.md` | The knowledge base archived from the Phrozen Keep. Plain markdown, not MDX. Generated, then edited by hand. |
| `content/kb/categories.json` | Knowledge base categories. Mapping lives in `scripts/keep-import/categories.ts`. |
| `data/keep-redirects.json` | Old d2mods.info knowledge base URLs and their new paths, for redirects on the Keep's side. |
| `public/ai/skills/` | Claude Code skills served from the site. |

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

## Phrozen Keep import

`scripts/keep-import` reads a restored copy of the Keep's phpBB database. Never point it at production.

```sh
docker run -d --name keepdb -e MYSQL_ROOT_PASSWORD=... -e MYSQL_DATABASE=keep -p 127.0.0.1:33066:3306 mysql:8.0
docker exec -i keepdb mysql -uroot -p... keep < dump.sql
export KEEP_DB_URL=mysql://root:...@127.0.0.1:33066/keep
npx tsx scripts/keep-import/export-kb.ts                      # rewrites content/kb and data/keep-redirects.json
npx tsx scripts/keep-import/localise-images.ts <backup public_html>  # copies article images into public/kb/img
npx tsx scripts/keep-import/tidy-kb.ts                        # callouts, duplicate titles, shouted headings
npx tsx scripts/keep-import/export-downloads.ts out.json [files-dir] [azure-dir]  # download manifest, kept outside the repo
npx tsx scripts/keep-import/publish-downloads.ts out.json     # writes data/keep-downloads.json for /downloads
```

Re-running `export-kb.ts` replaces `content/kb` completely, so hand edits to imported articles are lost. Once editing starts, stop re-running it.

Only published articles are exported. The database dump contains private messages, emails and password hashes, so keep it out of the repo.

