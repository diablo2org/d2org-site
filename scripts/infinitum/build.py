"""Build diablo2.org's Infinitum download entries from a mirror of d2mods.info/resources/infinitum.

usage: python -I inf_build.py <raw_dir> <sizes.json> <out.json> <images.txt>
"""
import html
import json
import re
import sys

RAW, SIZES, OUT, IMAGES = sys.argv[1:5]
BASE = "https://d2mods.info/resources/infinitum/"
GAMES = {"bg1": "Baldur's Gate", "bg2": "Baldur's Gate II", "iwd1": "Icewind Dale", "iwd2": "Icewind Dale II", "pst": "Planescape: Torment"}
sizes = json.load(open(SIZES))  # url -> [status, bytes]
images: set[str] = set()


def page(name):
    try:
        return re.sub(r"\s+", " ", open(f"{RAW}/{name}", encoding="cp1252", errors="replace").read())
    except FileNotFoundError:
        print("missing page", name, file=sys.stderr)
        return ""


def text(s):
    s = re.sub(r"<br\s*/?>", " ", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def rows(t):
    return re.findall(r"<TR>(.*?)</TR>", t, re.I)


def cells(r):
    return re.findall(r"<TD[^>]*>(.*?)</TD>", r, re.I)


LABELS = [("Animated GIF Files", "Animated GIF files"), ("Non-Token Specific DCC Files", "Non-token-specific DCC files"),
          ("New Token Plugin", "New token plugin"), ("Token Replacement", "token replacement"), ("(Rescaled)", "(rescaled)"),
          ("(Resized)", "(resized)")]


def sentence(s):
    for a, b in LABELS:
        s = s.replace(a, b)
    return s


def us_date(s):
    m = re.fullmatch(r"(\d\d)/(\d\d)/(\d\d)", s)
    if not m:
        return s
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return f"{int(m.group(2))} {months[int(m.group(1)) - 1]} 20{m.group(3)}"


def file_of(url, label):
    st, n = sizes.get(url, [0, 0])
    f = {"label": label, "filename": url.rsplit("/", 1)[-1], "status": "available" if st == 200 else "lost"}
    if st == 200:
        f["url"] = url
        f["bytes"] = n
    return f


def entry(id_, title, category, description, original, files):
    ok = [f for f in files if f["status"] == "available"]
    d = {
        "id": id_,
        "title": title,
        "category": ["Infinitum", category],
        "description": description,
        "originalUrl": original,
        "status": "available" if ok else "lost",
        "source": "azure",
    }
    if len(files) == 1:
        f = files[0]
        d["filename"] = f["filename"]
        if ok:
            d["url"], d["bytes"] = f["url"], f["bytes"]
    else:
        d["files"] = files
        if ok:
            d["url"] = ok[0]["url"]
            d["bytes"] = sum(f["bytes"] for f in ok)
    return d


out = []
nid = 200000

# Animations: the eight A-Z index pages list each creature (still image, variant); its own page has the rest.
for idx in ["ac", "df", "gi", "jl", "mo", "pr", "su", "vz"]:
    t = page(f"index-anims-{idx}.html")
    for r in rows(t):
        c = cells(r)
        m = re.search(r'<A HREF="(anims-[^"]+\.html)"><IMG SRC="images/([^"]+)"', c[0] if c else "", re.I)
        if not m:
            continue
        href, still = m.group(1), m.group(2)
        nm = re.search(r"<I>(.*?)</I>", c[0], re.I)
        name = text(nm.group(1)) if nm else text(c[0])
        rest = text(c[0][nm.end():]) if nm else ""
        variant = rest[1:-1] if rest.startswith("(") and rest.endswith(")") else rest
        p = page(href)
        if not p:
            continue
        head = re.search(r'<FONT SIZE=4>(.*?)</FONT></B><br><IMG SRC="images/([^"]+)"[^>]*><p></CENTER>(.*?)</TD>', p, re.I)
        anim = head.group(2) if head else None
        desc = text(head.group(3)) if head else ""
        files = []
        for r in rows(p):
            c = cells(r)
            links = re.findall(r'HREF="(https://phrozenkeep\.blob\.core\.windows\.net/[^"]+)"', r, re.I)
            if len(c) >= 3 and links:
                label, author = sentence(text(c[0])), text(c[1])
                for u in links:
                    files.append(file_of(u, label) | {"author": author})
        if not files:
            continue
        if variant.lower().startswith("random variant"):
            variant = variant.lower()
        title = f"{name} ({variant})" if variant else name
        img = anim or still
        images.add(img)
        images.add(still)
        authors = sorted({f.pop("author") for f in files if f.get("author")})
        md = f"![{name} animated preview](/files/infinitum/{img})\n\n" if img else ""
        md += (desc + "\n\n") if desc else ""
        md += "**Contains:** " + "; ".join(f["label"] for f in files) + ".\n\n"
        if authors:
            names = authors[0] if len(authors) == 1 else ", ".join(authors[:-1]) + " and " + authors[-1]
            md += f"Converted by {names} for Infinitum."
        nid += 1
        out.append(entry(nid, title, "Animations", md.strip(), BASE + href, files))

# Maps, music and sounds: one index page per game.
for game, gname in GAMES.items():
    t = page(f"index-maps-{game}.html")
    for r in rows(t):
        c = cells(r)
        links = re.findall(r'HREF="(https://phrozenkeep\.blob\.core\.windows\.net/[^"]+)"', r, re.I)
        th = re.search(r'HREF="(thumbs/[^"]+)"><IMG SRC="(thumbs/[^"]+)"', r, re.I)
        if len(c) < 3 or not links:
            continue
        parts = re.split(r"<P>", c[1], flags=re.I)
        name = text(parts[0])
        detail = text(parts[1]) if len(parts) > 1 else ""
        md = ""
        if th:
            lg, sm = th.group(1), th.group(2)
            images.update([lg, sm])
            md += f"[![{name}](/files/infinitum/{sm})](/files/infinitum/{lg})\n\n"
        md += f"A {gname} area map{f', {detail}' if detail else ''}, converted for Diablo II."
        nid += 1
        out.append(entry(nid, f"{name} ({gname} map)", "Maps", md, BASE + f"index-maps-{game}.html", [file_of(u, "Map") for u in links]))

    for kind, cat in (("music", "Music"), ("sounds", "Sounds")):
        t = page(f"index-{kind}-{game}.html")
        for r in rows(t):
            c = cells(r)
            links = re.findall(r'HREF="(https://phrozenkeep\.blob\.core\.windows\.net/[^"]+)"', r, re.I)
            if len(c) < 4 or not links:
                continue
            name, fmt, by = text(c[0]), text(c[1]), text(c[2])
            what = "track" if kind == "music" else "sound set"
            md = f"A {gname} {what} for Diablo II mods. Format: {fmt}." + (f" Submitted by {by}." if by else "")
            nid += 1
            out.append(entry(nid, f"{name} ({gname} {'music' if kind == 'music' else 'sounds'})", cat, md, BASE + f"index-{kind}-{game}.html", [file_of(u, cat) for u in links]))

# Extras: three files that were on FilePlanet, which is gone.
t = page("index-extras.html")
for r in rows(t):
    m = re.search(r'<a href="(http://www\.fileplanet\.com/[^"]+)"[^>]*>(.*?)</a>', r, re.I)
    c = cells(r)
    if not m or len(c) < 3:
        continue
    nid += 1
    out.append({
        "id": nid, "title": text(m.group(2)), "category": ["Infinitum", "Extras"],
        "description": f"By {text(c[1])}, added to Infinitum on {us_date(text(c[2]))}. Infinitum linked it from FilePlanet, which has shut down.",
        "originalUrl": BASE + "index-extras.html", "status": "lost",
        "filename": m.group(1).rsplit("/", 1)[-1], "deadLink": m.group(1),
    })

json.dump(out, open(OUT, "w"), indent=1, ensure_ascii=False)
open(IMAGES, "w").write("\n".join(sorted(images)))
from collections import Counter
print(len(out), Counter(d["category"][1] for d in out), Counter(d["status"] for d in out), len(images), "images")
