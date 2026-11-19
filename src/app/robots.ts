import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const bots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "ClaudeBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...bots.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
