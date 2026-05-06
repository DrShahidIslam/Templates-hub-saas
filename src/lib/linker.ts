export interface TemplateKeyword {
  keyword: string;
  slug: string;
}

/**
 * Injects up to 5 internal SEO links into a Markdown string.
 * It strictly avoids modifying text inside headings, existing links, or code blocks.
 */
export function injectInternalLinks(markdownContent: string, allTemplates: TemplateKeyword[]): string {
  // 1. Filter and sort templates
  // Must be > 3 chars. Sorted by length descending to match longest phrases first.
  const validTemplates = allTemplates
    .filter(t => t.keyword.trim().length > 3)
    .sort((a, b) => b.keyword.length - a.keyword.length);

  let linksInjected = 0;
  const usedSlugs = new Set<string>();
  const linkReplacements: string[] = [];

  // 2. Tokenize markdown to protect existing structures
  // Protects: headings, markdown links, inline code, code blocks, and HTML tags
  const protectedRegex = /(^#+ .*$|\[.*?\]\(.*?\)|\`.*?\`|```[\s\S]*?```|<.*?>)/gm;
  const tokens = markdownContent.split(protectedRegex);

  // 3. Process safe text blocks
  for (let i = 0; i < tokens.length; i++) {
    // Even indices are safe plain text, odd indices are protected markdown structures
    if (i % 2 === 0 && tokens[i]) {
      let safeText = tokens[i];
      
      for (const template of validTemplates) {
        if (linksInjected >= 5) break;
        if (usedSlugs.has(template.slug)) continue;

        const escapedKeyword = template.keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Word boundary, case insensitive
        const keywordRegex = new RegExp(`\\b(${escapedKeyword})\\b`, 'i');

        if (keywordRegex.test(safeText)) {
          // Replace ONLY the first occurrence in this block with a temporary token
          safeText = safeText.replace(keywordRegex, (match) => {
            const token = `__LINK_${linkReplacements.length}__`;
            linkReplacements.push(`[${match}](/templates/${template.slug})`);
            return token;
          });
          
          linksInjected++;
          usedSlugs.add(template.slug);
        }
      }
      tokens[i] = safeText;
    }
  }

  let finalContent = tokens.join('');
  
  // 4. Restore the tokens with actual Next.js compatible markdown links
  for (let i = 0; i < linkReplacements.length; i++) {
    finalContent = finalContent.replace(`__LINK_${i}__`, linkReplacements[i]);
  }

  return finalContent;
}
