export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { MetadataRoute } from "next";
import { getDocuments } from "outstatic/server";
import fs from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://templateregistry.com";

  // 1. Fetch all templates for dynamic indexing
  const templates = await getDocuments("templates", ["slug", "publishedAt"]);
  const templateUrls = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: new Date(template.publishedAt || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 2. Fetch all blog posts for dynamic indexing
  const posts = await getDocuments("blog", ["slug", "publishedAt"]);
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 3. Define Static Routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/sop-generator`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/compliance-scorecard`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...templateUrls, ...blogUrls];
}
