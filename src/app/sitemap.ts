import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://templateregistry.com";
  const slugs = getAllSlugs();
  const currentDate = new Date();

  // Create sitemap objects for all dynamic templates
  const templateEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/templates/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Templates Directory Index
    {
      url: `${baseUrl}/templates`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Programmatic Pages
    ...templateEntries,
  ];
}
