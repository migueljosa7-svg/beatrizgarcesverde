import type { MetadataRoute } from "next";
import { site, routes } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: r === "/" ? site.url : `${site.url}${r}`,
    lastModified: new Date("2026-11-19"),
    changeFrequency: "monthly",
    priority: r === "/" ? 1 : r === "/contact" || r === "/one-on-one-counseling" ? 0.9 : 0.7,
  }));
}
