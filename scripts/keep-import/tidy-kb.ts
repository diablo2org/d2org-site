/**
 * Cleans up conversion leftovers in the exported knowledge base.
 *
 *   npx tsx scripts/keep-import/tidy-kb.ts [--dry-run]
 *
 * - Drops a first heading that only repeats the article title ("SKILLS.TXT FILE GUIDE").
 * - Drops an opening "by Someone" line when the article already has a credit.
 * - Turns "Warning ..." and "Note: ..." paragraphs, which were icons on the Keep, into callouts.
 * - Puts shouted headings ("SOUND and OVERLAY SETTINGS") in sentence case. Slugs don't change.
 * Humour articles are left alone. Run after export-kb.ts. Safe to re-run.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const KB = path.join(process.cwd(), "content/kb");
const dry = process.argv.includes("--dry-run");

const ACRONYMS = new Set(
  "AI ID IDS DLL DLLS MPQ MPQS UI NPC NPCS PC MAC D2 D2R LOD CD2 DC6 DCC DT1 DS1 COF TBL BIN TC TCS MF PVP PVE FAQ XP HP AR ED FCR FHR IAS FRW OK GUI API ASM PE CRC RGB TCP IP UID HUD ZIP RAR TXT D2SE D2MOO PK".split(" "),
);
const CALLOUT = /^(Warning|Note|Tip|Caution|Important)(?::\s*|\s+(?=[A-Z0-9"'(]))(\S.*)$/;

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function walk(dir: string, out: string[] = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

// Humour articles shout on purpose.
const files = walk(KB).filter((f) => !f.includes(`${path.sep}humor${path.sep}`));

// Proper casing for data file names, taken from article titles: "itemstatcost.txt" -> "ItemStatCost.txt".
const fileNames = new Map<string, string>();
for (const f of files) {
  const { data } = matter(fs.readFileSync(f, "utf8"));
  for (const m of String(data.title).matchAll(/\b[A-Za-z0-9_]+\.(?:txt|bin|tbl|dc6|dcc|dt1|ds1|cof|mpq|dll|json)\b/g)) {
    if (/[a-z]/.test(m[0]) && /[A-Z]/.test(m[0])) fileNames.set(m[0].toLowerCase(), m[0]);
  }
}

function shouting(text: string) {
  const letters = text.replace(/[^A-Za-z]/g, "");
  return letters.length > 3 && letters.replace(/[^A-Z]/g, "").length / letters.length >= 0.7;
}

function sentenceCase(text: string) {
  let first = true;
  return text.replace(/[A-Za-z0-9_.'’-]+/g, (word) => {
    const bare = word.replace(/^[.'’-]+|[.'’-]+$/g, "");
    const lower = word.toLowerCase();
    let out: string;
    if (fileNames.has(bare.toLowerCase())) out = word.replace(bare, fileNames.get(bare.toLowerCase())!);
    else if (/\.(txt|bin|tbl|dc6|dcc|dt1|ds1|cof|mpq|dll|json)$/i.test(bare)) out = bare[0].toUpperCase() + lower.slice(1);
    else if (ACRONYMS.has(bare.toUpperCase()) && bare === bare.toUpperCase()) out = word;
    else if (/^[IVX]+$/.test(bare) && bare.length > 1) out = word;
    else if (/^[IVX]+$/.test(bare) && !first) out = word;
    else out = first ? lower[0].toUpperCase() + lower.slice(1) : lower;
    if (/[A-Za-z]/.test(word)) first = false;
    return out;
  });
}

const tally = { titles: 0, bylines: 0, callouts: 0, headings: 0, files: 0 };

for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  const { data, content } = matter(raw);
  const front = raw.slice(0, raw.length - content.length);
  let body = content;

  // A first heading that restates the title.
  body = body.replace(/^\s*#{1,3} (.+)\n+/, (m, h: string) => {
    const t = norm(String(data.title));
    if (t.length > 2 && norm(h).startsWith(t)) {
      tally.titles++;
      return "";
    }
    return m;
  });

  // An opening byline, when the credit already names the author.
  if (data.credit) {
    body = body.replace(/^\s*(?:[Ww]ritten )?[Bb]y [A-Z][\w'’ &,-]{0,40}?\s*(?: {2}|\\)?\n/, () => {
      tally.bylines++;
      return "";
    });
  }

  const lines = body.split("\n");
  let inCode = false;
  const out: string[] = [];
  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inCode = !inCode;
    if (inCode) {
      out.push(line);
      continue;
    }
    const h = line.match(/^(#{2,6}) (.+?)\s*$/);
    if (h && shouting(h[2])) {
      out.push(`${h[1]} ${sentenceCase(h[2])}`);
      tally.headings++;
      continue;
    }
    const c = line.match(CALLOUT);
    if (c) {
      // Callouts were inline icons, so they often follow a hard break mid-paragraph.
      if (out.length && out[out.length - 1].trim()) out[out.length - 1] = out[out.length - 1].replace(/(\s{2,}|\\)$/, "");
      out.push("", `> **${c[1]}:** ${c[2].replace(/(\s{2,}|\\)$/, "")}`, "");
      tally.callouts++;
      continue;
    }
    out.push(line);
  }
  body = out.join("\n").replace(/\n{3,}/g, "\n\n").replace(/^\n+/, "");

  if (body !== content) {
    tally.files++;
    if (!dry) fs.writeFileSync(f, front + body);
  }
}

console.log(dry ? "Dry run:" : "Tidied:", tally);
