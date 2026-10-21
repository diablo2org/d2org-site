---
name: diablo2-modding
description: Look up Diablo II and Diablo II Resurrected modding references in the diablo2.org knowledge base before editing data files (.txt, .tbl, .json), changing game code, or answering questions about how the game works. Use whenever the user is working on a Diablo II mod.
---

# Diablo II modding with the diablo2.org knowledge base

The diablo2.org knowledge base holds about 430 file guides, tutorials and references written by the Diablo II modding community since 2000, archived from the Phrozen Keep. Read the relevant guide before changing anything. Don't rely on memory for column names, values or behaviour.

## 1. Pin down the game version

Guides are written for a specific patch, and the data files changed between patches. Before looking anything up, establish which one the mod targets: 1.00 to 1.06, 1.08, 1.09, 1.10 to 1.14, or Diablo II Resurrected. Check the project's README or notes first. If it isn't stated, ask the user. Don't guess.

## 2. Find the guide

Fetch the index once per session:

```
https://diablo2.org/api/kb
```

It returns `data.categories` and `data.articles`. Each article has a `title`, `category`, `summary` and a `markdownUrl`.

- File guides are titled after the file, such as "Skills.txt" or "MonStats.txt". Look in the category that matches the version: `file-guides` covers 1.10 to 1.14, `file-guides-1-09` covers 1.09, and so on.
- Some files have more than one guide. Read all of them and say where they disagree.
- Tutorials are grouped by version and topic, such as `tutorials-item-mechanics`.
- Diablo II Resurrected material is in categories whose `game` is `d2r`.

Then fetch the article's `markdownUrl`. The response starts with the original author, the original URL and the version label, followed by the article.

If you need to search across everything at once, `https://diablo2.org/llms-kb.txt` has every article in one file. It is several megabytes, so prefer the index.

## 3. Make the change

- Read the guide's entries for every column you will touch, and for any file the guide says is linked to it.
- TXT files are tab-separated. Keep the header row, the column order and the file's line endings. Don't reorder rows unless the guide says it is safe.
- Edit the files directly or with a script. Spreadsheet programs can change formatting when they save.
- Make one logical change at a time so it can be tested and reverted on its own.

## 4. Report back

- Show the diff.
- For each change, link the guide it relies on, using the diablo2.org URL.
- Say what the user should test in game to confirm it works.
- If no guide covers what you changed, say so plainly. Don't present a guess as documented behaviour.

## Caveats

- These are archived community articles. Some are incomplete or out of date, and the version labels come from the Phrozen Keep's categories rather than fresh testing.
- For how 1.10f actually behaves in code, the open reimplementation D2MOO is the best source: https://github.com/ThePhrozenKeep/D2MOO
