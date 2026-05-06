"""
Cache Warmer Script for Programmatic SEO Pages
================================================
Reads seo_keywords.csv and sends GET requests to each template URL,
triggering Next.js ISR to generate and cache each page.

Usage:
    python scripts/warmer.py

Environment Variables:
    BASE_URL (optional): Override the production domain.
                         Default: https://your-production-domain.com
"""

import csv
import os
import re
import time
import requests

# ── Configuration ──────────────────────────────────────────────────────────

BASE_URL = os.environ.get("BASE_URL", "https://templates-hub-beta.vercel.app/templates").rstrip("/")
CSV_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "seo_keywords.csv")
REQUEST_DELAY = 15  # seconds between requests to respect API rate limits


def to_slug(keyword: str) -> str:
    """Convert a raw keyword to a URL-friendly kebab-case slug."""
    slug = keyword.lower().strip()
    slug = re.sub(r"[\s_]+", "-", slug)       # spaces & underscores → hyphens
    slug = re.sub(r"[^a-z0-9-]", "", slug)    # strip non-alphanumeric
    slug = re.sub(r"-{2,}", "-", slug)         # collapse multiple hyphens
    slug = slug.strip("-")                      # trim leading/trailing hyphens
    return slug


def main():
    # Read keywords from CSV
    with open(CSV_PATH, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        keywords = [row["Keyword"].strip() for row in reader if row["Keyword"].strip()]

    total = len(keywords)
    print(f"🔥 Cache Warmer — {total} keywords to warm")
    print(f"🌐 Target: {BASE_URL}")
    print(f"⏱️  Delay: {REQUEST_DELAY}s between requests\n")

    success = 0
    failed = 0

    for i, keyword in enumerate(keywords, start=1):
        slug = to_slug(keyword)
        if not slug:
            print(f"  [{i}/{total}] ⚠️  Skipped empty slug for: '{keyword}'")
            continue

        url = f"{BASE_URL}/{slug}"

        while True:
            try:
                response = requests.get(url, timeout=60)
                status = response.status_code

                # Detect Next.js soft-fallback indicating a background Gemini 429 error
                if "We are currently experiencing high demand" in response.text:
                    print(f"  [{i}/{total}] ⚠️  Rate limit hit detected on {url}. Pausing for 65 seconds...")
                    time.sleep(65)
                    continue  # Retry this exact URL

                if status == 200:
                    print(f"  [{i}/{total}] ✅ {status} — {slug}")
                    success += 1
                else:
                    print(f"  [{i}/{total}] ⚠️  {status} — {slug}")
                    failed += 1
                
                break # Proceed to next keyword

            except requests.RequestException as e:
                print(f"  [{i}/{total}] ❌ ERROR — {slug}: {e}")
                failed += 1
                break # Proceed to next keyword

        # Respect API rate limits
        if i < total:
            time.sleep(REQUEST_DELAY)

    print(f"\n{'='*50}")
    print(f"✅ Warmed: {success} | ❌ Failed: {failed} | Total: {total}")
    print(f"{'='*50}")


if __name__ == "__main__":
    main()
