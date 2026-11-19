import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date("2026-11-19"), changeFrequency: "monthly", priority: 1 }];
}
