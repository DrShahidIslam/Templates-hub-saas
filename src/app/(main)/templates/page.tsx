import { Metadata } from "next";
import { Layers, FileText, ArrowRight } from "lucide-react";
import { getAllKeywords, toTitleCase } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Templates & Checklists | Template Registry",
  description: "Browse our complete directory of expert-reviewed templates, SOPs, and checklists for operations, HR, travel, and more.",
};

export default function TemplatesIndexPage() {
  const keywords = getAllKeywords();

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* ── HERO ── */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
            Template Directory
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Browse our comprehensive collection of {keywords.length}+ standard operating procedures,
            checklists, and operational frameworks. Designed to save you time and eliminate guesswork.
          </p>
        </header>

        {/* ── TEMPLATES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {keywords.map((entry) => (
            <Link
              key={entry.slug}
              href={`/templates/${entry.slug}`}
              prefetch={false}
              className="group border border-border rounded-xl p-5 bg-white hover:border-accent/50 hover:shadow-sm transition-all duration-200 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors shrink-0">
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h2 className="font-medium text-foreground text-[15px] leading-snug group-hover:text-accent transition-colors mb-2 flex-grow">
                {toTitleCase(entry.keyword)}
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-accent transition-colors mt-auto pt-2">
                View template
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-sm tracking-tight">
                Template Registry
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 Template Registry. Free templates for modern teams.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
