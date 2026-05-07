import { getDocuments } from "outstatic/server";
import { FileText, ArrowRight, Search as SearchIcon } from "lucide-react";
import Link from "next/link";
import { toTitleCase } from "@/lib/data";
import Fuse from "fuse.js";

export const metadata = {
  title: "Search Results | Template Registry",
  description: "Search our directory of 1,800+ expert-reviewed templates, SOPs, and checklists.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q: query } = await searchParams;
  
  // Fetch templates with content for deep searching
  const allTemplates = await getDocuments("templates", [
    "title",
    "slug",
    "description",
    "content",
    "publishedAt",
  ]);

  let filteredTemplates: any[] = [];

  if (query) {
    const fuse = new Fuse(allTemplates, {
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'description', weight: 0.2 },
        { name: 'content', weight: 0.1 }
      ],
      threshold: 0.35, // Adjust for fuzziness
      ignoreLocation: true,
      findAllMatches: true,
      minMatchCharLength: 2,
    });

    const results = fuse.search(query);
    filteredTemplates = results.map(r => r.item);
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-4">
          {query ? `Results for "${query}"` : "Search Directory"}
        </h1>
        <p className="text-lg text-muted-foreground">
          {query 
            ? `Found ${filteredTemplates.length} templates matching your search.` 
            : "Enter a keyword to search our complete library of operational frameworks."}
        </p>
      </header>

      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className="group border border-border rounded-xl p-5 bg-white hover:border-accent/50 hover:shadow-sm transition-all duration-200 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors shrink-0">
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h2 className="font-medium text-foreground text-[15px] leading-snug group-hover:text-accent transition-colors mb-2 flex-grow">
                {toTitleCase(template.title)}
              </h2>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                {template.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors mt-auto pt-2">
                View template
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        query && (
          <div className="py-20 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <SearchIcon className="w-8 h-8 text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-sm mx-auto mb-8">
              We couldn't find any templates for "{query}". Try searching for broader terms like "HR", "Sales", or "SOP".
            </p>
            <Link 
              href="/templates" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#111827] text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Browse all templates
            </Link>
          </div>
        )
      )}
    </main>
  );
}
