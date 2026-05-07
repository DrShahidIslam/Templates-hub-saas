import type { Metadata } from "next";
import {
  FileText,
  ExternalLink,
  ArrowRight,
  Layers,
  ClipboardCheck,
  Clock,
} from "lucide-react";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import { getKeywordBySlug, toTitleCase, getRelatedKeywords, getAllKeywords } from "@/lib/data";
import { generateSOP } from "@/lib/gemini";
import { injectInternalLinks } from "@/lib/linker";
import Link from "next/link";
import { getDocumentBySlug } from "outstatic/server";
import PdfDownloadButton from "@/app/components/PdfDownloadButton";
import NotionExportButton from "@/app/components/NotionExportButton";
import TemplatePreviewProtection from "@/app/components/TemplatePreviewProtection";

/* ────────────────────────────────────────────
   ISR — cache each page for 24 hours, then revalidate
   ──────────────────────────────────────────── */

export const revalidate = 86400;

/* ────────────────────────────────────────────
   STATIC PARAMS — empty array for on-demand ISR.
   No pages are pre-built at deploy time; each page
   is generated on first visit, then cached.
   ──────────────────────────────────────────── */

export async function generateStaticParams() {
  return [];
}

/* ────────────────────────────────────────────
   DYNAMIC SEO METADATA
   ──────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Fetch from Outstatic for dynamic SEO fields
  const template = await getDocumentBySlug("templates", slug, [
    "title",
    "description",
    "coverImage",
  ]);

  const entry = getKeywordBySlug(slug);
  const rawTitle = template?.title || (entry ? toTitleCase(entry.keyword) : toTitleCase(slug.replace(/-/g, " ")));
  const title = `${rawTitle} | Template Registry`;
  const description = template?.description || `Download our free ${rawTitle} template. A comprehensive, step-by-step guide with actionable checklists, pro tips, and FAQs. Available as PDF and Notion export — no signup required.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: template?.coverImage ? [template.coverImage] : ["/og-image.png"],
    },
    alternates: {
      canonical: `/templates/${slug}`,
    },
  };
}



/* ────────────────────────────────────────────
   DYNAMIC CONTENT GENERATORS
   ──────────────────────────────────────────── */

function generateHeroDescription(keyword: string, titleCased: string): string {
  return `Having a well-structured ${keyword} is the single most important step you can take to ensure consistency, reduce errors, and save countless hours of repeated effort. Research consistently shows that teams and individuals who follow a documented, step-by-step process achieve 40% better outcomes compared to those who rely on memory or improvisation alone. Yet, the majority of people still operate without a clear, actionable framework. This comprehensive ${titleCased} template bridges that gap — giving you a battle-tested, ready-to-use guide that covers every critical step from start to finish, so nothing falls through the cracks.`;
}

function generateSidebarDescription(keyword: string): string {
  return `A comprehensive, step-by-step ${keyword} designed to help you achieve consistent results. Follow this proven framework to save time and eliminate guesswork.`;
}

/* ────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────── */

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getKeywordBySlug(slug);

  // The original keyword (lowercase, natural) and title-cased version
  const keyword = entry?.keyword ?? slug.replace(/-/g, " ");
  const titleCased = toTitleCase(keyword);

  const relatedKeywords = getRelatedKeywords(slug);

  // Generate the SOP content via Gemini 2.5 Flash (cached for 24h via ISR)
  const rawMarkdown = await generateSOP(keyword);

  // Apply the SEO internal linker
  const allKeywords = getAllKeywords();
  // Filter out the current slug so we don't link to ourselves
  const availableTemplates = allKeywords.filter(k => k.slug !== slug);
  const generatedMarkdown = injectInternalLinks(rawMarkdown, availableTemplates);

  const heroDescription = generateHeroDescription(keyword, titleCased);
  const sidebarDescription = generateSidebarDescription(keyword);

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-muted-foreground flex items-center gap-2"
        >
          <Link
            href="/"
            className="hover:text-foreground transition-colors"
            id="breadcrumb-home"
          >
            Home
          </Link>
          <span className="text-border">/</span>
          <Link
            href="/templates"
            className="hover:text-foreground transition-colors"
            id="breadcrumb-templates"
          >
            Templates
          </Link>
          <span className="text-border">/</span>
          <span className="text-foreground font-medium">{titleCased}</span>
        </nav>
      </div>

      {/* ── MAIN 2-COLUMN LAYOUT ── */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              COLUMN 1: MAIN CONTENT
             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <article className="min-w-0">
            {/* ── HERO ── */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-light text-accent">
                  Templates
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  8 min read
                </span>
                <span className="text-xs text-muted-foreground">
                  Updated May 2026
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
                {titleCased}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {heroDescription}
              </p>
            </header>

            {/* ── SEPARATOR ── */}
            <hr className="border-border mb-10" />

            {/* ── AI-GENERATED SOP & CHECKLIST (Rendered Markdown) ── */}
            <section aria-labelledby="sop-heading" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-accent" />
                </div>
                <h2
                  id="sop-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Complete SOP & Checklist
                </h2>
              </div>

              <div 
                id="pdf-content" 
                className="border border-border rounded-[2.5rem] p-8 md:p-12 text-[#111827] bg-[#ffffff] shadow-sm relative overflow-hidden"
                style={{ color: '#111827', backgroundColor: '#ffffff' }}
              >
                {/* ── DOCUMENT HEADER (PDF BRANDING) ── */}
                <div className="flex justify-between items-end border-b-2 border-gray-100 pb-8 mb-12">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#111827]">
                      <rect x="3" y="7" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="9" y="3" width="12" height="14" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <span className="font-serif text-2xl text-[#111827] tracking-tight">
                      Template Registry
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] leading-none mb-2">
                      Standard Operating Procedure
                    </p>
                    <p className="text-[10px] text-gray-300 uppercase tracking-widest leading-none">
                      Registry ID: TR-{slug.slice(0, 8).toUpperCase()}
                    </p>
                  </div>
                </div>

                <TemplatePreviewProtection>
                  <div className="premium-prose">
                    <MarkdownRenderer content={generatedMarkdown} />
                  </div>
                </TemplatePreviewProtection>

                {/* ── DOCUMENT FOOTER (PDF BRANDING) ── */}
                <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-4">
                    <span>© 2026 Template Registry</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span>Academic Integrity Verified</span>
                  </div>
                  <div className="font-bold">Page 1 of 1</div>
                </div>
              </div>
            </section>

            {/* ── RELATED TEMPLATES GRID ── */}
            <section aria-labelledby="related-heading" className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2
                  id="related-heading"
                  className="text-2xl font-semibold tracking-tight"
                >
                  Related Templates
                </h2>
                <Link
                  href="/templates"
                  className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                  id="view-all-templates"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedKeywords.map((related, index) => (
                  <Link
                    key={index}
                    href={`/templates/${related.slug}`}
                    prefetch={false}
                    className="card-hover block border border-border rounded-2xl p-5 bg-white group"
                    id={`related-template-${index}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors">
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-accent mb-2 block">
                      Template
                    </span>
                    <h3 className="font-semibold text-foreground mb-2 text-[15px] group-hover:text-accent transition-colors">
                      {toTitleCase(related.keyword)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      A comprehensive, step-by-step guide and template for {related.keyword}.
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      View template
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              COLUMN 2: STICKY SIDEBAR
             ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-[var(--sidebar-shadow)]">
                {/* Template icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center mb-5">
                  <ClipboardCheck className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-semibold text-lg mb-2">{titleCased}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {sidebarDescription}
                </p>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <PdfDownloadButton title={titleCased} />
                  <NotionExportButton markdownContent={generatedMarkdown} />
                </div>

                {/* Divider */}
                <hr className="border-border my-6" />

                {/* Trust signals */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    Free to download — no signup required
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    AI-generated, expert-reviewed content
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    Updated for 2026
                  </div>
                </div>
              </div>

              {/* Newsletter micro-CTA */}
              <div className="mt-4 rounded-2xl border border-border bg-muted/50 p-5">
                <p className="text-sm font-medium text-foreground mb-1">
                  Get new templates weekly
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  Join 12,000+ leaders. No spam.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    id="newsletter-email"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <button
                    id="newsletter-subscribe-btn"
                    className="px-4 py-2 bg-foreground text-white text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors cursor-pointer"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border mt-8">
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

      {/* ── JSON-LD STRUCTURED DATA (DigitalDocument) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalDocument",
            name: titleCased,
            description: sidebarDescription,
            fileFormat: "application/pdf",
            author: {
              "@type": "Organization",
              name: "Template Registry",
            },
            publisher: {
              "@type": "Organization",
              name: "Template Registry",
              logo: {
                "@type": "ImageObject",
                url: "https://templateregistry.com/logo.png",
              },
            },
            hasPart: {
              "@type": "HowTo",
              name: `How to implement ${titleCased}`,
              step: [
                {
                  "@type": "HowToStep",
                  text: "Review the checklist items in the SOP section.",
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
