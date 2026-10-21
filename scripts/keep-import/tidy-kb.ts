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

const tally = { titles: 0, bylines: 0, callouts: 0, headings: 0, joined: 0, code: 0, terms: 0, files: 0 };

// Lines that are code in old articles that never marked them: batch commands, hex, assembly,
// "column - value" settings and "code -> meaning" tables.
const CODE_LINE = [
  /^@?(?:echo|cls|pause|copy|del|rename|ren|move|md|mkdir|cd|set|goto|call|start|xcopy|mpq2k)\b/,
  /^[A-Za-z]\w* - [\w./%+*-]+$/,
  /^\w+ -> .{1,40}$/,
  /^(?:[0-9A-Fa-f]{2}\s+){3,}[0-9A-Fa-f]{2}\b/,
  /^(?:[0-9A-Fa-f]{6,8}[: ]\s*)?(?:mov|push|pop|call|jmp|je|jne|jz|jnz|cmp|add|sub|xor|lea|ret|test|nop|inc|dec|and|or|shl|shr|imul)\s/i,
];
/** A short label on its own line, like a column name in a file guide. */
const TERM = /^[A-Za-z][\w()*/.-]*(?: [\w()*/.-]+){0,2}$/;
/** "column=value" settings lines, which are never wrapped prose. */
const ASSIGN = /^[\w,.[\]\\]+\s*=/;
const KEY_VALUE = /^([A-Za-z][\w ]{0,24}?):\s+(\S.*)$/;

const lineText = (l: string) => l.replace(/(\s{2,}|\\)$/, "").trim();
const unescape = (s: string) => s.replace(/\\([\\`*_{}[\]()#+\-.!|>~<])/g, "$1");
const special = (b: string) => /^(#|```|~~~|>|\||!\[|[-*+] |\d+\. |<| {4})/.test(b);
const isCode = (b: string) => !special(b) && b.split("\n").every((l) => CODE_LINE.some((r) => r.test(unescape(lineText(l)))));
const fence = (bs: string[]) => ["```", ...bs.flatMap((b) => b.split("\n").map((l) => unescape(lineText(l)))), "```"].join("\n");

function toBlocks(body: string) {
  const blocks: string[] = [];
  let cur: string[] = [];
  let inFence = false;
  for (const line of body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (!inFence && !line.trim()) {
      if (cur.length) blocks.push(cur.join("\n"));
      cur = [];
    } else cur.push(line);
  }
  if (cur.length) blocks.push(cur.join("\n"));
  return blocks;
}

const lastLine = (s: string) => s.split("\n").pop()!;
const codeish = (s: string) => CODE_LINE.some((r) => r.test(unescape(lineText(s))));
/** Lines that stand alone in reference articles: settings, "column: text", "column - text", "a -> b" and bare column names. */
const standalone = (s: string) =>
  codeish(s) || KEY_VALUE.test(s) || ASSIGN.test(s) || /^\w[\w%]* - /.test(s) || s.includes(" -> ") || (TERM.test(s) && s.length <= 32);

/** Whether paragraph b continues a sentence that was hard-wrapped at the end of prev. */
function wraps(prev: string, b: string) {
  const last = lastLine(prev);
  return (
    !special(prev) && !special(b) && prev.length >= 40 &&
    !/(\s{2,}|\\)$/.test(last) && // an intended line break
    !/[.!?:;)"'*]$/.test(last.trim()) &&
    !/ = /.test(last) && // a formula or setting, not prose
    /^[a-z]/.test(b) &&
    !standalone(lineText(last)) && !standalone(lineText(b.split("\n")[0]))
  );
}

/** Fixes articles whose HTML put every line in its own paragraph and never marked code as code. */
function reflow(body: string) {
  let blocks = toBlocks(body);

  // "--- cut below ---" ... "--- stop cutting above ---" wraps a script.
  const cut: string[] = [];
  for (let i = 0; i < blocks.length; i++) {
    if (/^\\?-{2,}\s*cut below\s*-*$/i.test(blocks[i])) {
      const end = blocks.findIndex((b, j) => j > i && /^\\?-{2,}\s*stop cutting/i.test(b));
      if (end > i) {
        cut.push(fence(blocks.slice(i + 1, end)));
        tally.code++;
        i = end;
        continue;
      }
    }
    cut.push(blocks[i]);
  }
  blocks = cut;

  // "--- commands ---" dividers are section headings.
  blocks = blocks.map((b) => {
    const m = b.match(/^\\?-{3,}\s*(.+?)\s*-{3,}$/);
    if (!m || b.includes("\n")) return b;
    tally.headings++;
    const t = unescape(m[1]).replace(/^\w/, (c) => c.toUpperCase());
    return `### ${t}`;
  });

  // Runs of three or more code lines.
  const coded: string[] = [];
  for (let i = 0; i < blocks.length; ) {
    let j = i;
    // A short lowercase line between two code lines is a wrapped command.
    const continues = (k: number) => /^[a-z]/.test(blocks[k]) && blocks[k].length < 80 && !special(blocks[k]) && k > i && isCode(blocks[k - 1]) && isCode(blocks[k + 1] ?? "");
    while (j < blocks.length && (isCode(blocks[j]) || continues(j))) j++;
    const lines = blocks.slice(i, j).reduce((t, b) => t + b.split("\n").length, 0);
    if (j > i && lines >= 3) {
      coded.push(fence(blocks.slice(i, j)));
      tally.code++;
      i = j;
    } else {
      coded.push(blocks[i]);
      i++;
    }
  }
  blocks = coded;

  // Sentences hard-wrapped into separate paragraphs.
  const joined: string[] = [];
  for (const b of blocks) {
    const prev = joined[joined.length - 1];
    if (prev && wraps(prev, b)) {
      joined[joined.length - 1] = `${lineText(prev)} ${b}`;
      tally.joined++;
    } else joined.push(b);
  }
  blocks = joined;

  // "column: description" runs, as in the old file guides.
  for (let i = 0; i < blocks.length; ) {
    let j = i;
    while (j < blocks.length && !blocks[j].includes("\n") && KEY_VALUE.test(blocks[j]) && !special(blocks[j])) j++;
    if (j - i >= 4) {
      for (let k = i; k < j; k++) blocks[k] = blocks[k].replace(KEY_VALUE, "**$1:** $2");
      tally.terms += j - i;
    }
    i = Math.max(j, i + 1);
  }

  // A column name on its own line followed by its description, when the article does it throughout.
  const pair = (i: number) =>
    TERM.test(blocks[i]) && blocks[i].length <= 32 && blocks[i + 1] && !special(blocks[i + 1]) && !TERM.test(blocks[i + 1]) &&
    // The description reads as one: lowercase, a full sentence, or the guide's own "???".
    /^[a-z]|[.?!]$|^\?+$/.test(lineText(blocks[i + 1]));
  if (blocks.filter((_, i) => pair(i)).length >= 4) {
    const merged: string[] = [];
    for (let i = 0; i < blocks.length; i++) {
      if (pair(i)) {
        merged.push(`**${unescape(blocks[i])}**  \n${blocks[i + 1]}`);
        tally.terms++;
        i++;
      } else merged.push(blocks[i]);
    }
    blocks = merged;
  }

  return `${blocks.join("\n\n")}\n`;
}

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
  // Each pass can expose more to fix, so run until nothing changes.
  for (let pass = 0; pass < 5; pass++) {
    const next = reflow(body);
    if (next === body) break;
    body = next;
  }

  if (body !== content) {
    tally.files++;
    if (!dry) fs.writeFileSync(f, front + body);
  }
}

console.log(dry ? "Dry run:" : "Tidied:", tally);
