import { getDocuments } from "outstatic/server";

export interface KeywordEntry {
  keyword: string;
  slug: string;
}

const SMALL_WORDS = new Set([
  "a", "an", "the", "for", "in", "of", "on", "to",
  "and", "or", "with", "at", "by", "is", "vs",
]);

/**
 * Title-case a raw keyword string for display.
 */
export function toTitleCase(keyword: string): string {
  if (!keyword) return "";
  return keyword
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      const lower = word.toLowerCase();
      if (index === 0 || !SMALL_WORDS.has(lower)) {
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
      return lower;
    })
    .join(" ");
}

/**
 * Fetch all templates from Outstatic and map to KeywordEntry.
 */
export async function getAllKeywords(): Promise<KeywordEntry[]> {
  const templates = await getDocuments("templates", ["title", "slug"]);
  return templates.map((t) => ({
    keyword: t.title,
    slug: t.slug,
  }));
}

/**
 * Look up a single keyword entry by its slug via Outstatic.
 */
export async function getKeywordBySlug(slug: string): Promise<KeywordEntry | undefined> {
  const all = await getAllKeywords();
  return all.find((entry) => entry.slug === slug);
}

/**
 * Get a random selection of related keywords via Outstatic.
 */
export async function getRelatedKeywords(currentSlug: string, count: number = 3): Promise<KeywordEntry[]> {
  const all = await getAllKeywords();
  const filtered = all.filter((entry) => entry.slug !== currentSlug);
  
  // Random shuffle
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, count);
}
