/**
 * Converts Phrozen Keep post text to Markdown.
 *
 * The KB holds three formats:
 * - phpBB 3.2+ storage XML, rooted at <r> (rich) or <t> (plain). BBCode markers sit in <s>/<e>,
 *   ignored text in <i>, and every tag is an uppercase element.
 * - Raw HTML from older KB imports, in any letter case.
 * - Plain text with raw BBCode.
 * All three become HTML first, then Markdown through Turndown.
 */
import { gfm } from "@joplin/turndown-plugin-gfm";
import { parseDocument } from "htmlparser2";
import type { ChildNode, Element } from "domhandler";
import TurndownService from "turndown";

const FORUM = "https://d2mods.info/forum/";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const attr = (s: string) => esc(s).replace(/"/g, "&quot;");

function textOf(nodes: ChildNode[]): string {
  let out = "";
  for (const n of nodes) {
    if (n.type === "text") out += n.data;
    else if (n.type === "tag") {
      if (n.name === "s" || n.name === "e" || n.name === "i") continue;
      if (n.name === "br") out += "\n";
      else out += textOf(n.children);
    }
  }
  return out;
}

function storageToHtml(nodes: ChildNode[]): string {
  let out = "";
  for (const n of nodes) {
    if (n.type === "text") {
      out += esc(n.data);
      continue;
    }
    if (n.type !== "tag") continue;
    const el = n as Element;
    const kids = () => storageToHtml(el.children);
    const a = el.attribs;
    switch (el.name) {
      case "s":
      case "e":
      case "i":
        break;
      case "r":
      case "t":
        out += kids();
        break;
      case "br":
        out += "<br>";
        break;
      case "B":
        out += `<strong>${kids()}</strong>`;
        break;
      case "I":
        out += `<em>${kids()}</em>`;
        break;
      case "U":
        out += kids();
        break;
      case "S":
        out += `<del>${kids()}</del>`;
        break;
      case "CENTER":
      case "RIGHT":
      case "DIVBOX":
      case "FBOX":
      case "ATT":
      case "FLOAT":
        out += `<div>${kids()}</div>`;
        break;
      case "HEADLINE":
        out += `<h3>${kids()}</h3>`;
        break;
      case "HR":
        out += "<hr>";
        break;
      case "URL": {
        const href = a.url ?? textOf(el.children);
        out += `<a href="${attr(href)}">${kids() || esc(href)}</a>`;
        break;
      }
      case "LINK_TEXT":
        out += esc(a.text ?? textOf(el.children));
        break;
      case "EMAIL":
        out += kids();
        break;
      case "IMG":
      case "IMGC":
      case "IMAGELEFT": {
        const src = a.src ?? a.imgc ?? a.imageleft ?? textOf(el.children).trim();
        out += `<img src="${attr(src)}" alt="">`;
        break;
      }
      case "IMAGE": {
        const id = textOf(el.children).trim();
        out += `<a href="${FORUM}gallery/image/${attr(id)}">Gallery image ${esc(id)}</a>`;
        break;
      }
      case "POST": {
        const id = textOf(el.children).trim();
        out += `<a href="${FORUM}viewtopic.php?p=${attr(id)}#p${attr(id)}">forum post ${esc(id)}</a>`;
        break;
      }
      case "DL": {
        const href = a.dl ?? a.url ?? textOf(el.children);
        out += `<a href="${attr(href)}">${kids() || esc(href)}</a>`;
        break;
      }
      case "CODE":
      case "PRE":
      case "FORM":
        out += `<pre><code>${esc(textOf(el.children).replace(/^\n+|\n+$/g, ""))}</code></pre>`;
        break;
      case "QUOTE":
        out += `<blockquote>${a.author ? `<p><strong>${esc(a.author)} wrote:</strong></p>` : ""}${kids()}</blockquote>`;
        break;
      case "LIST":
        out += a.type ? `<ol>${kids()}</ol>` : `<ul>${kids()}</ul>`;
        break;
      case "LI":
        out += `<li>${kids()}</li>`;
        break;
      case "TABLE":
      case "TABLE2":
      case "TABLE3":
        out += `<table>${kids()}</table>`;
        break;
      case "TR":
        out += `<tr>${kids()}</tr>`;
        break;
      case "TD":
      case "TD3":
        out += `<td>${kids()}</td>`;
        break;
      case "TH":
        out += `<th>${kids()}</th>`;
        break;
      case "ATTACHMENT":
        out += `[attachment: ${esc(a.filename ?? "")}]`;
        break;
      default:
        // COLOR, SIZE, FACE, REF, TOOLTIP, ACRONYM, E (smilies) and anything unknown keep only their text.
        out += kids();
    }
  }
  return out;
}

const BBCODE: [RegExp, string][] = [
  [/\[b\]([\s\S]*?)\[\/b\]/gi, "<strong>$1</strong>"],
  [/\[i\]([\s\S]*?)\[\/i\]/gi, "<em>$1</em>"],
  [/\[u\]([\s\S]*?)\[\/u\]/gi, "$1"],
  [/\[s\]([\s\S]*?)\[\/s\]/gi, "<del>$1</del>"],
  [/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi, '<a href="$1">$2</a>'],
  [/\[url\]([\s\S]*?)\[\/url\]/gi, '<a href="$1">$1</a>'],
  [/\[img\]([\s\S]*?)\[\/img\]/gi, '<img src="$1" alt="">'],
  [/\[code\]([\s\S]*?)\[\/code\]/gi, "<pre><code>$1</code></pre>"],
  [/\[quote(?:=[^\]]*)?\]([\s\S]*?)\[\/quote\]/gi, "<blockquote>$1</blockquote>"],
  [/\[list(?:=[^\]]*)?\]([\s\S]*?)\[\/list\]/gi, "<ul>$1</ul>"],
  [/\[\*\]/g, "<li>"],
  [/\[\/?(?:color|size|font|center|right|face|acronym|tooltip|ref|float|divbox|fbox|att|headline|dl)(?:=[^\]]*)?\]/gi, ""],
];

function legacyToHtml(src: string): string {
  let s = src;
  for (const [re, rep] of BBCODE) s = s.replace(re, rep);
  // Plain-text articles rely on newlines for layout.
  if (!/<(p|br|div|table|li|pre|h\d)\b/i.test(s)) s = s.replace(/\r?\n/g, "<br>\n");
  return s;
}

/** Turn runs of <br> into paragraph breaks so Markdown gets real paragraphs. */
function paragraphs(html: string) {
  return `<p>${html.replace(/(?:\s*<br\s*\/?>\s*){2,}/gi, "</p>\n<p>")}</p>`;
}

const td = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "_",
  hr: "---",
});
td.use(gfm);
td.remove(["script", "style", "iframe", "object", "embed", "form" as never]);

/** Lines that are only bold text in mostly capital letters, as file guides use for section titles. */
function promoteHeadings(md: string) {
  return md.replace(/^(?:\*\*|__)+_?([^*\n_][^*\n]{1,80}?)_?(?:\*\*|__)+:?\s*$/gm, (line, text: string) => {
    const letters = text.replace(/[^A-Za-z]/g, "");
    if (letters.length < 4) return line;
    const upper = letters.replace(/[^A-Z]/g, "").length / letters.length;
    return upper >= 0.7 ? `\n## ${text.trim()}\n` : line;
  });
}

export interface Converted {
  markdown: string;
  html: string;
}

export function keepToMarkdown(raw: string): Converted {
  const trimmed = raw.trim();
  const isStorage = /^<(r|t)>/.test(trimmed);
  const html = isStorage
    ? paragraphs(storageToHtml(parseDocument(trimmed, { xmlMode: true }).children))
    : paragraphs(legacyToHtml(trimmed));
  let md = td.turndown(html);
  md = promoteHeadings(md)
    .replace(/[ \t]+$/gm, (m) => (m === "  " ? m : ""))
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return { markdown: md, html };
}

/** Plain text of a short field such as a title or description. */
export function keepToText(raw: string): string {
  const trimmed = raw.trim();
  const text = /^<(r|t)>/.test(trimmed)
    ? textOf(parseDocument(trimmed, { xmlMode: true }).children)
    : trimmed.replace(/<[^>]+>/g, " ").replace(/\[[^\]]+\]/g, "");
  return decodeEntities(text).replace(/\s+/g, " ").trim();
}

export function decodeEntities(s: string) {
  return s
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, "&");
}
