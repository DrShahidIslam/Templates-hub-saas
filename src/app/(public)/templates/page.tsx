import { Metadata } from "next";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

export const metadata: Metadata = {
  title: "All Templates & Checklists | Template Registry",
  description: "Browse our complete directory of expert-reviewed templates, SOPs, and checklists for operations, HR, travel, and more.",
};

const ITEMS_PER_PAGE = 24;

export default function TemplatesIndexPage() {
  const allTemplates = getDocuments('templates', ['title', 'slug', 'description', 'category']);
  const totalItems = allTemplates.length;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* ── HERO ── */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
          Template Directory
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Browse our comprehensive collection of {totalItems}+ standard operating procedures,
          checklists, and operational frameworks. Designed to save you time and eliminate guesswork.
        </p>
      </header>

      {/* ── TEMPLATES GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allTemplates.map((template) => (
          <Link
            key={template.slug}
            href={`/templates/${template.slug}`}
            prefetch={false}
            className="group border border-border rounded-xl p-5 bg-white hover:border-accent/50 hover:shadow-sm transition-all duration-200 flex flex-col h-full"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors shrink-0">
              <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <h2 className="font-medium text-foreground text-[15px] leading-snug group-hover:text-accent transition-colors mb-2 flex-grow">
              {template.title || template.slug.replace(/-/g, ' ')}
            </h2>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors mt-auto pt-2">
              View template
              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>

    </main>
  );
}
