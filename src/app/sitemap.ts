import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${profile.siteUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${profile.siteUrl}/work`, changeFrequency: "monthly", priority: 0.9 },
    ...projects.map((p) => ({ url: `${profile.siteUrl}/work/${p.slug}`, changeFrequency: "yearly" as const, priority: 0.8 })),
  ];
}
