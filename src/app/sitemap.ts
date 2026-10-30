import type { MetadataRoute } from "next";
import { navigation, profile, projects } from "@/data/profile";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...navigation.map(([, path]) => path),
    "/resume",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({
    url: `${profile.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
