import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI crawlers and assistants, named explicitly so the intent is clear even where a host rewrites the wildcard rule.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/search" },
      { userAgent: AI_BOTS, allow: "/", disallow: "/search" },
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
