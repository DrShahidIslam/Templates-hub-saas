import fs from "fs";
import path from "path";

export interface KeywordEntry {
  /** The original keyword exactly as it appears in the CSV */
  keyword: string;
  /** URL-friendly slug: lowercase, kebab-case, no special characters */
  slug: string;
}

/**
 * Convert a raw keyword string into a URL-safe kebab-case slug.
 *
 * Rules:
 *  - Lowercased
 *  - Spaces / underscores → hyphens
 *  - Strip everything except a-z, 0-9, and hyphens
 *  - Collapse consecutive hyphens
 *  - Trim leading/trailing hyphens
 */
function toSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-") // spaces & underscores → hyphens
    .replace(/[^a-z0-9-]/g, "") // strip non-alphanumeric (except hyphens)
    .replace(/-{2,}/g, "-") // collapse multiple hyphens
    .replace(/^-|-$/g, ""); // trim leading/trailing hyphens
}

/**
 * Title-case a raw keyword string for display.
 * Keeps small words (a, an, the, for, in, of, on, to, and, or, with, at, by)
 * lowercase unless they are the first word.
 */
const SMALL_WORDS = new Set([
  "a", "an", "the", "for", "in", "of", "on", "to",
  "and", "or", "with", "at", "by", "is", "vs",
]);

export function toTitleCase(keyword: string): string {
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

// ─── Cache ──────────────────────────────────────────────────────────────────

let _cache: KeywordEntry[] | null = null;

/**
 * Read and parse `seo_keywords.csv` from the project root.
 * Returns a de-duplicated array of { keyword, slug } objects.
 * Results are cached in-memory for the lifetime of the process.
 */
export function getAllKeywords(): KeywordEntry[] {
  if (_cache) return _cache;

  const csvPath = path.join(process.cwd(), "seo_keywords.csv");
  const raw = fs.readFileSync(csvPath, "utf-8");

  const seenSlugs = new Set<string>();
  const entries: KeywordEntry[] = [];

  const lines = raw.split(/\r?\n/);

  // Skip header row (line 0) and process the rest
  for (let i = 1; i < lines.length; i++) {
    const keyword = lines[i].trim();
    if (!keyword) continue;

    const slug = toSlug(keyword);
    if (!slug || seenSlugs.has(slug)) continue;

    seenSlugs.add(slug);
    entries.push({ keyword, slug });
  }

  _cache = entries;
  return entries;
}

/**
 * Look up a single keyword entry by its slug.
 * Returns `undefined` if no match is found.
 */
export function getKeywordBySlug(slug: string): KeywordEntry | undefined {
  return getAllKeywords().find((entry) => entry.slug === slug);
}

/**
 * Return all unique slugs — used by `generateStaticParams`.
 */
export function getAllSlugs(): string[] {
  return getAllKeywords().map((entry) => entry.slug);
}

/**
 * Get a random selection of related keywords, excluding the current slug.
 */
export function getRelatedKeywords(currentSlug: string, count: number = 3): KeywordEntry[] {
  const all = getAllKeywords().filter((entry) => entry.slug !== currentSlug);
  
  // Random shuffle
  const shuffled = all.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, count);
}
