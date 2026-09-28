@AGENTS.md

# diablo2.org

Structure and frontmatter: `README.md`.

- Run `npm run check` after touching content or data. It fails on broken `related` refs and internal links.
- Never invent facts in `data/*.ts` or `content/`. Leave unknown fields out. Only set `lastVerified` when claims have been checked against listed `sources`.
- MDX is rendered by next-mdx-remote with JS expressions blocked, so pass only string props to MDX components.
- Writing style: plain, specific, sentence-case headings, no em dashes, straight quotes.
- Stay project-neutral: facts and differences, not rankings.
