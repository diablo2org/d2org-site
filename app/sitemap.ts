import type { MetadataRoute } from "next";
import { communities } from "@/data/communities";
import { mods } from "@/data/mods";
import { servers } from "@/data/servers";
import { tools } from "@/data/tools";
import { versions } from "@/data/versions";
import { getAllArticles } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/play",
    "/play/versions",
    "/mods",
    "/servers",
    "/tools",
    "/modding",
    "/knowledge",
    "/mechanics",
    "/technical",
    "/history",
    "/archive",
    "/community",
    ...communities.map((c) => `/community/${c.slug}`),
    ...getAllArticles().map((a) => a.href),
    ...mods.map((m) => `/mods/${m.slug}`),
    ...servers.map((s) => `/servers/${s.slug}`),
    ...tools.map((t) => `/tools/${t.slug}`),
    ...versions.map((v) => `/play/versions/${v.version}`),
  ];
  return paths.map((p) => ({ url: new URL(p, site.url).toString() }));
}
