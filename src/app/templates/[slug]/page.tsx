import type { Metadata } from "next";
import {
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  Layers,
  ClipboardCheck,
  Clock,
} from "lucide-react";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import { getKeywordBySlug, toTitleCase } from "@/lib/data";
import { generateSOP } from "@/lib/gemini";

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
  const entry = getKeywordBySlug(slug);
  const title = entry ? toTitleCase(entry.keyword) : toTitleCase(slug.replace(/-/g, " "));

  return {
    title: `${title} | Free PDF Template & Guide`,
    description: `Download our free ${title} template. A comprehensive, step-by-step guide with actionable checklists, pro tips, and FAQs. Available as PDF and Notion export — no signup required.`,
    openGraph: {
      title: `${title} — Free Template & Downloadable Guide`,
      description: `Get the ultimate ${title} template. Expertly crafted with detailed checklists, best practices, and ready-to-use frameworks. Download as PDF or export to Notion.`,
      type: "article",
    },
    alternates: {
      canonical: `/templates/${slug}`,
    },
  };
}

/* ────────────────────────────────────────────
   STATIC DATA
   ──────────────────────────────────────────── */

const RELATED_TEMPLATES = [
  {
    title: "Employee Termination SOP",
    description:
      "A step-by-step standard operating procedure to handle employee offboarding with compliance and dignity.",
    slug: "employee-termination-sop",
    category: "HR Operations",
  },
  {
    title: "Interview Scorecard",
    description:
      "A structured evaluation rubric to standardize candidate assessments and eliminate unconscious hiring bias.",
    slug: "interview-scorecard",
    category: "Talent Acquisition",
  },
  {
    title: "90-Day Review Template",
    description:
      "A comprehensive performance review framework for evaluating new hires at the critical 90-day milestone.",
    slug: "90-day-review-template",
    category: "Performance",
  },
];

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

  // Generate the SOP content via Gemini 2.5 Flash (cached for 24h via ISR)
  const generatedMarkdown = await generateSOP(keyword);

  const heroDescription = generateHeroDescription(keyword, titleCased);
  const sidebarDescription = generateSidebarDescription(keyword);

  return (
    <>
      {/* ── NAVIGATION ── */}
      <nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group" id="nav-logo">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Template<span className="gradient-text">Hub</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="/templates"
              className="hover:text-foreground transition-colors"
              id="nav-templates"
            >
              Templates
            </a>
            <a
              href="/categories"
              className="hover:text-foreground transition-colors"
              id="nav-categories"
            >
              Categories
            </a>
            <a
              href="/blog"
              className="hover:text-foreground transition-colors"
              id="nav-blog"
            >
              Blog
            </a>
            <a
              href="/pricing"
              className="px-4 py-2 bg-foreground text-white rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              id="nav-pricing"
            >
              Go Pro
            </a>
          </div>
        </div>
      </nav>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-muted-foreground flex items-center gap-2"
        >
          <a
            href="/"
            className="hover:text-foreground transition-colors"
            id="breadcrumb-home"
          >
            Home
          </a>
          <span className="text-border">/</span>
          <a
            href="/templates"
            className="hover:text-foreground transition-colors"
            id="breadcrumb-templates"
          >
            Templates
          </a>
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

              <div className="border border-border rounded-2xl p-6 md:p-8 bg-white">
                <MarkdownRenderer content={generatedMarkdown} />
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
                <a
                  href="/templates"
                  className="text-sm text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                  id="view-all-templates"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {RELATED_TEMPLATES.map((tpl, index) => (
                  <a
                    key={index}
                    href={`/templates/${tpl.slug}`}
                    className="card-hover block border border-border rounded-2xl p-5 bg-white group"
                    id={`related-template-${index}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-accent-light transition-colors">
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-accent mb-2 block">
                      {tpl.category}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2 text-[15px] group-hover:text-accent transition-colors">
                      {tpl.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {tpl.description}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      View template
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </a>
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
                  <button
                    id="download-pdf-btn"
                    className="cta-pulse w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-all duration-200 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download as PDF
                  </button>
                  <button
                    id="export-notion-btn"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-foreground border border-border rounded-xl font-medium text-sm hover:bg-muted hover:border-foreground/20 transition-all duration-200 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Export to Notion
                  </button>
                </div>

                {/* Divider */}
                <hr className="border-border my-6" />

                {/* Trust signals */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    Free to download — no signup required
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </div>
                    AI-generated, expert-reviewed content
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-success" />
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
                TemplateHub
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 TemplateHub. Free templates for modern teams.
            </p>
          </div>
        </div>
      </footer>

      {/* ── JSON-LD STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: titleCased,
            description: sidebarDescription,
          }),
        }}
      />
    </>
  );
}
