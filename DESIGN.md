---
name: diablo2.org
description: "A gothic gateway to classic Diablo II, with practical reference beneath the artwork."
colors:
  stone-950: "#090908"
  stone-900: "#10100f"
  stone-800: "#211f1c"
  stone-700: "#34302a"
  stone-600: "#4b453c"
  stone-500: "#9b907e"
  stone-400: "#aca18f"
  stone-300: "#c5bcac"
  stone-200: "#e1d9ca"
  stone-100: "#f3eee4"
  gold-300: "#f0d8a7"
  gold-400: "#dcad5c"
  gold-500: "#b97528"
  gold-700: "#654421"
  ember-400: "#d95c40"
  blood-500: "#94271f"
  cobalt-300: "#91b9d7"
  q-set: "#83ad77"
  q-magic: "#879fd0"
  q-unique: "#c8a56d"
  q-rare: "#d9c761"
  q-broken: "#c5584e"
  page-ground: "#0c0c0a"
  hero-lettering: "#e4cc99"
  action-text: "#f4dfb6"
  action-top: "#70291d"
  action-bottom: "#461a13"
  action-hover: "#813626"
  action-border: "#a37844"
  panel-border: "#473724"
typography:
  display:
    fontFamily: "Cinzel, ui-serif, Georgia, serif"
    fontSize: "clamp(3rem, 5.8vw, 5rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cinzel, ui-serif, Georgia, serif"
    fontSize: "36px"
    fontWeight: 500
    lineHeight: 1.3
  title:
    fontFamily: "Cinzel, ui-serif, Georgia, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: "Barlow Semi Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
  article:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "18px"
    lineHeight: 1.7777778
  label:
    fontFamily: "Barlow Semi Condensed, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.075em"
  button:
    fontFamily: "Cinzel, ui-serif, Georgia, serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.07em"
  version:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.78rem"
    lineHeight: 1
rounded:
  square: "0px"
  sm: "4px"
  inline-code: "3px"
spacing:
  badge-x: "6px"
  badge-y: "4px"
  card: "24px"
  grid-gap: "16px"
  content-gap: "48px"
components:
  button-primary:
    textColor: "{colors.action-text}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.action-text}"
  button-secondary:
    backgroundColor: "rgb(14 13 10 / .76)"
    textColor: "{colors.action-text}"
    typography: "{typography.button}"
    rounded: "{rounded.square}"
    padding: "14px 22px"
  input-search:
    backgroundColor: "{colors.stone-900}"
    textColor: "{colors.stone-100}"
    rounded: "{rounded.sm}"
    padding: "14px 16px"
    width: "100%"
  version-badge:
    backgroundColor: "{colors.stone-800}"
    textColor: "{colors.stone-200}"
    rounded: "{rounded.sm}"
    typography: "{typography.version}"
    padding: "4px 6px"
  project-card:
    textColor: "{colors.stone-300}"
    rounded: "{rounded.square}"
    padding: "{spacing.card}"
  desktop-nav:
    typography: "{typography.label}"
  path-link:
    rounded: "{rounded.square}"
    padding: "27px 20px"
---

# Design System: diablo2.org

## Overview

**Creative North Star: "The Monastery Gateway"**

The visual world is a dark monastery gateway: weathered stone, blackened iron, antique gold lettering, and restrained oxblood actions. The user requested a Diablo website identity; classic Diablo II was the stated implementation assumption after the optional era question went unanswered. This document records that built direction, not a separately approved visual comp.

Cinematic artwork introduces the world; precise typography and restrained ornament carry the reference material. Display lettering feels engraved, UI copy stays compact and scannable, and long articles use a warmer book serif. Dark tonal layers and thin metal-colored borders provide structure without turning every content block into a raised panel.

**Key Characteristics:**

- Original gothic environment and still-life artwork, served locally as optimized WebP.
- Antique gold Cinzel titles, condensed Barlow UI, Source Serif 4 reading text.
- Squared iron-and-oxblood controls with fine bevels, corner marks, and diamond rules.
- Compatibility, project status, and source metadata remain legible within the atmosphere.

The normative values above are extracted from `app/globals.css` and shared components. `app/layout.tsx` carries design contract `sanctuary-db95f3e7`. The homepage-specific composition lives in `.impeccable/surfaces/app-page-tsx.md`; it is not a required template for every route.

## Colors

Warm, smoke-dark neutrals support worn gold, muted blood red, and small factual status accents. The frontmatter owns the values; the names below describe their use.

### Primary

- **Antique gold** (`gold-300`, `gold-400`): directory titles, inline links, focus outlines, and small navigation accents. Hero lettering uses the quieter `hero-lettering` tone.
- **Burnished bronze** (`gold-500`, `gold-700`, `action-border`, `panel-border`): active field borders, subdued rules, article underline color, and metal edging.

### Secondary

- **Oxblood** (`action-top`, `action-bottom`, `action-hover`, `blood-500`): the primary CTA gradient and hover, with small red metadata separators. `action-text` keeps button labels pale and warm.
- **Ember** (`ember-400`): hover emphasis on article and source links.
- **Cool blue** (`cobalt-300`): an existing secondary hover accent on breadcrumbs; it does not replace gold as the main navigation color.

### Tertiary

- **Set green**, **magic blue**, and **unique gold** (`q-set`, `q-magic`, `q-unique`): active, maintained, and inactive project status. Each includes a written label.
- **Rare yellow** (`q-rare`): verification notices. **Broken red** (`q-broken`): incompatible version badges with a strike-through and a compatibility label.

### Neutral

- **Charred ground** (`page-ground`, `stone-950`, `stone-900`): page, footer, search field, and code-block foundations.
- **Blackened iron** (`stone-800`, `stone-700`, `stone-600`): badge fills, dividers, and functional borders.
- **Weathered ash** (`stone-500`, `stone-400`, `stone-300`): secondary metadata through readable supporting text.
- **Warm parchment** (`stone-200`, `stone-100`): body text and strong headings on dark ground.

**The Reading Surface Rule.** Illustration establishes atmosphere at entrances; reading and comparison happen on quiet dark surfaces.

## Typography

**Display:** Cinzel with UI serif and Georgia fallbacks. **UI:** Barlow Semi Condensed with system sans fallbacks. **Articles:** Source Serif 4 with Georgia. **Technical labels:** Geist Mono with UI monospace fallbacks. Fonts are loaded through `next/font/google` in the root layout.

The display face supplies the classic fantasy character; condensed UI copy keeps navigation and metadata economical. Source Serif 4 supports sustained reading without borrowing the heading face's ornamental weight. Visible all-capital navigation and CTA treatments use CSS; content headings remain sentence case.

### Hierarchy

- **Display:** fluid homepage title as defined above; mobile changes to `clamp(2.7rem, 9.8vw, 4.5rem)` below 768px. Interior banners use 48px/60px headings, with a mobile `clamp(2rem, 8vw, 3rem)` override and anywhere wrapping for long titles.
- **Headline:** the 36px home section role; the knowledge heading uses 30px, while generic shared sections use 30px desktop and 26px mobile.
- **Title:** 20px directory card headings. Guide rows use 17px desktop and 15px mobile.
- **Body:** 17px baseline UI; directory descriptions use 16px with relaxed leading. The hero summary uses 18px at 1.65 line-height, reduced to 17px on mobile.
- **Article:** Tailwind Typography's large prose size, with a maximum desktop reading width of 46rem. Article h2/h3 inherit Cinzel at 600, with sizes 1.85em/1.35em.
- **Label:** compact uppercase navigation; metadata is typically 12px with tracking. Versions keep their exact punctuation in monospace.

**The Engraved Hierarchy Rule.** Reserve Cinzel for headings and deliberate actions; use the reading and UI families for sustained information.

## Layout

The cinematic home sections use a centered container capped at 1152px with 32px side gutters; below 768px gutters become 20px. Shared interior layouts use `max-w-6xl` with 16px gutters, increasing to 24px from 640px. Preserve these existing layout families when extending them.

The sticky header has an 80px inner height on desktop, 70px below 1024px, and 66px below 768px. Desktop navigation and search give way to a menu below 1024px. The home hero remains at least 650px tall: copy is vertically centered on desktop and bottom aligned on mobile. Its image shifts from a centered crop to 68% horizontal positioning on mobile, with a stronger bottom shade.

The four-path bar is four columns on desktop and two below 1024px. Two-column home editorial sections stack below 768px. Directory grids progress from one to two columns at 768px and three at 1024px, with a 16px gap and 24px card inset. Articles use a 17rem sidebar from 1024px; directory details use 19rem. Article sidebars are sticky with viewport-bounded scrolling. Tables scroll horizontally when needed.

Spacing is deliberately mixed by role: fine 4–6px metadata spacing, 16–24px component spacing, 48px interior content gaps, and broader 56–90px transitions between homepage sections. It is not a newly imposed universal spacing scale.

## Elevation & Depth

Depth comes primarily from tonal gradients, dark image shades, one-pixel metal borders, and tiny ornamental corners. Primary actions use an inset bevel; display lettering uses dark text shadows for separation from art. The mobile menu is the only major floating surface, with a substantial shadow. The sidecar records the exact shadow and motion values.

### Shadow Vocabulary

- **Action bevel:** two inset strokes give the red CTA a recessed, tactile edge.
- **Hero lettering:** a black text shadow keeps the title separate from the monastery scene.
- **Engraved banner lettering:** a softer dark text shadow supports interior headings.
- **Menu elevation:** a downward shadow separates the small navigation overlay from the page.

**The Still World Rule.** The artwork may reveal once, then remains still; hover feedback changes color without displacing the interface.

The hero brightness reveal lasts 1.4 seconds and is enabled only under `prefers-reduced-motion: no-preference`. Custom navigation, CTA, path, step, and text-link color feedback uses 180ms transitions. There is no continuous scene movement.

## Shapes

Large controls, directory cards, panels, and navigation blocks have square corners. Functional search fields and badges retain small 4px rounding; inline code uses 3px. Status dots are circular. Do not infer that every small component must become square.

Thin bronze borders, opposing right-angle card corner marks, and small rotated-square ornaments repeat across the interface. Dividers and ornaments remain secondary to headings. The original linear Sanctuary mark is an inline SVG, separate from the diablo2.org wordmark.

## Components

### Buttons

Primary actions are engraved rectangular plates: an oxblood vertical gradient, warm label, bronze one-pixel border, and inset bevel. The frontmatter records their type and padding; the sidecar preserves the gradient and exact bevel. They have a 49px minimum height and 174px minimum width on desktop. Below 768px the minimum width is removed, horizontal padding becomes 19px, and type becomes 11px. Hover brightens both the fill and border without motion.

Secondary actions share the geometry and use translucent dark fill; hover changes to a warm dark surface. Global keyboard focus uses a 2px gold outline offset by 5px.

### Cards / Containers

Directory links use a bronze-edged dark diagonal gradient, 24px padding, and tiny marks at opposing corners. Hover warms the background and brightens the title. The entire card is a link; version badges inside it are spans, avoiding nested links. Metadata, written status, summary, and supported versions retain their own hierarchy.

### Inputs / Fields

Search-page inputs have a dark iron fill, subtle rounded corners, a stone border, and light text. Focus changes the border to gold; this field intentionally uses its own focus border instead of the global outline. Header search is visually quieter. Mobile search sits inside a bordered row with an explicit submit icon and accessible label. The implementation does not define error or disabled field variants.

### Chips and status

Compatible versions use small stone badges and monospace strings; linked badges brighten their border and text on hover. Incompatible badges use broken red with a strike-through. Search filters use a gold border and faint gold tint for `aria-pressed="true"`; inactive filters use stone borders. Status uses a colored dot plus text, never color alone.

### Navigation

The desktop header uses tracked uppercase Barlow labels, warm gray at rest, pale gold on hover and for the current route. A thin gold underline identifies the active route. The mobile menu uses native disclosure semantics, a 44px minimum toggle target, Cinzel links, and an embedded search form. Escape closes it and returns focus to the toggle; following a link or submitting search also closes it.

The mobile panel is capped at `calc(100dvh - 96px)`, scrolls vertically, and contains overscroll so navigation remains reachable in short landscape viewports. Its width is `min(330px, calc(100vw - 48px))`.

### Paths and ordered guide rows

The home path bar pairs thin line icons with a Cinzel label, Barlow description, and a small arrow when space permits. Adjacent paths share fine borders. Hover warms the surface without displacement. Ordered guide rows use Roman numerals, horizontal rules, a two-level text hierarchy, and a right arrow; the complete row is interactive.

### Imagery and banners

The homepage monastery scene places the wanderer and illuminated gateway on the right, leaving shaded space for live text on the left. The smaller travel still-life supports the setup section. Interior banners reuse the monastery image with a subdued overlay; they do not replicate the whole home composition.

Both images are original generated illustrations, not supplied game art. `public/images/monastery-gate.webp.json` and `public/images/travelers-journal.webp.json` record the complete generation prompts and their built-in image-generation provenance dated 2026-09-26. Keep those files beside their optimized assets. The decorative hero uses empty alt text; the informative still-life has descriptive alt text.

## Do's and Don'ts

### Do:

- **Do** use Cinzel for display and section titles, Barlow Semi Condensed for UI, Source Serif 4 for articles, and Geist Mono for version strings.
- **Do** keep text over imagery on a dark shade and verify the mobile crop independently.
- **Do** retain visible focus, textual status labels, and reduced-motion behavior.
- **Do** preserve original raster provenance next to every shipped image.
- **Do** keep directory cards, compatibility badges, and verification notes factual and easy to scan.

### Don't:

- **Don't** use decorative display lettering for long article paragraphs.
- **Don't** replace the square iron surfaces with pill cards or soft floating panels.
- **Don't** place detailed illustration behind dense reference text.
- **Don't** introduce looping ambient motion; the shipped hero settles after one light reveal.
- **Don't** imply that generated illustrations or the custom mark are official Blizzard assets.

## Server surface addendum

This addendum applies only to `/servers` and `/servers/[slug]`. For these routes, the built source in `app/servers/servers.module.css` and `components/ServerDirectory.tsx` takes precedence over the older global palette and type descriptions above. It records the established Exocet/Lato, cold stone, bone-white and restrained copper identity; it does not refresh the global design system or sidecar.

### Layout and typography

Both routes use a centered container capped at 1152px, with 32px side gutters and 20px gutters below 768px. Exocet headings sit above compact sans-serif facts and summaries; versions use the inherited monospace face and profile history uses Source Serif. The existing stone image is subdued behind the introduction. Fine cold-gray rules divide open directory rows and reading sections; silver rectangular actions carry the strongest contrast.

Directory rows separate identity, summary/facts and comparison selection. Below 768px the summary moves beneath the identity and selection. Profiles use a reading column and a 310px setup/source sidebar, narrowing to 290px at 1100px and stacking below the reading column below 768px. The facts strip and section navigation wrap. Preserve anchor clearance beneath the shared header.

### Components and interaction

**The Visible Facts Rule.** Preserve written status and explicit unknowns; “Not documented” is not a negative answer. Browse filters and view controls expose their selected state. The shortlist allows four realms, disables further additions at that limit, and retains selections while switching views. Its bottom-sticky bar keeps comparison reachable.

The comparison requires at least two realms, groups facts by task, supports differences-only filtering and provides clear/remove controls. Keep horizontal overflow within the keyboard-focusable table region and retain the sticky feature-name column. Profile setup, verification and related links remain distinct from the main reading flow. Action hover changes color without movement and its transition is removed for reduced motion.

**The Surface Isolation Rule.** Keep this composition in the server CSS module. Shared-component overrides must remain beneath a local server wrapper; do not change shared `EntryLayout` or impose these route-specific rows, sidebar widths or comparison behavior on other directories.

## Tools and mods surface addendum

The subsequent tools/mods refresh deliberately extends the server visual language to `/tools`, `/mods`, their records and the community records that share `EntryLayout`. Its source of truth is `components/Directory.module.css`; it does not alter the separate server module or the global design-system sidecar.

Use compact Exocet introductions, Lato summaries, cold stone rules, restrained copper links and silver primary actions. Directories use open rows. Tools pair a category rail with search and a patch selector; on phones the rail becomes a horizontally scrollable navigation strip. Mods pair project identity and patch badges with descriptions, documented features and play modes. Preserve the 1152px maximum width and 32px desktop / 20px mobile gutters.

Project headers group the name, status, official links and key facts. The reading column sits beside a 310px compatibility/setup and provenance sidebar, stacking in DOM order on phones. Community records omit compatibility when none is supplied. Preserve unknown values, source links and verification notes; do not invent capability or support claims to fill space.

Tools search, category and patch filters combine. The patch filter includes documented support only and explains that unknowns are excluded. Category and compatibility hashes remain shareable. Compatibility tables use accessible support labels, sticky row names and contained horizontal scrolling. Mod filters likewise use documented play modes. Empty results provide a clear reset action.
