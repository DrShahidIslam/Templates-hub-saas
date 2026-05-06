import { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  FileText,
  ArrowRight,
  Download,
  Shield,
  Zap,
  RefreshCw,
  CheckCircle2,
  Users,
  Building2,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Template Registry — 1,800+ Free Business Templates, SOPs & Checklists",
  description:
    "Access 1,800+ professional Standard Operating Procedures, Checklists, and Policies. Stop writing from scratch and scale your business faster with Template Registry.",
  keywords: [
    "business templates",
    "SOP templates",
    "HR checklists",
    "onboarding checklist",
    "free business templates",
    "standard operating procedures",
    "policy templates",
  ],
};

const featuredTemplates = [
  {
    title: "Candidate Onboarding Checklist",
    slug: "candidate-onboarding-checklist",
    description:
      "Streamline new hire integration with a comprehensive step-by-step onboarding workflow.",
    category: "HR & People Ops",
  },
  {
    title: "Social Media Policy",
    slug: "social-media-policy-for-organizations",
    description:
      "Protect your brand with clear guidelines for employee social media usage.",
    category: "Marketing & Comms",
  },
  {
    title: "IT Security SOP",
    slug: "sop-for-it-security",
    description:
      "Establish robust cybersecurity procedures to safeguard company data and infrastructure.",
    category: "IT & Security",
  },
  {
    title: "Employee Handbook Template",
    slug: "employee-handbook-template",
    description:
      "Build a professional employee handbook covering policies, benefits, and company culture.",
    category: "HR & People Ops",
  },
  {
    title: "Performance Review Template",
    slug: "performance-review-template",
    description:
      "Run effective performance evaluations with structured criteria and actionable feedback.",
    category: "Management",
  },
  {
    title: "Business Continuity Plan",
    slug: "business-continuity-plan-template",
    description:
      "Prepare your organization to maintain operations during unexpected disruptions.",
    category: "Operations",
  },
];

const valueProps = [
  {
    icon: Download,
    title: "Clean PDF Export",
    description:
      "Download any template as a polished, print-ready PDF with one click. No formatting headaches.",
  },
  {
    icon: Shield,
    title: "No Watermarks",
    description:
      "Every template is completely clean. Use them for clients, teams, or internal documentation.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description:
      "Unlock the entire library of 1,800+ templates instantly. No waiting, no drip-feed.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Updates",
    description:
      "We continuously add new templates and refine existing ones. Your access never expires.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── NAVIGATION ── */}
      <nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Template<span className="gradient-text">Registry</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link
              href="/templates"
              className="hover:text-foreground transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/categories"
              className="hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/blog"
              className="hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-foreground text-white rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Go Pro
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO SECTION ── */}
        <section className="relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent-light/50 via-white to-white pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-accent/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light border border-accent/15 text-accent text-sm font-medium mb-8">
                <Zap className="w-3.5 h-3.5" />
                1,800+ Templates & Growing
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
                The Ultimate Business{" "}
                <span className="gradient-text">Template Registry</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
                Access 1,800+ professional Standard Operating Procedures,
                Checklists, and Policies. Stop writing from scratch and scale
                your business faster.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates"
                  id="hero-browse-cta"
                  className="cta-pulse w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-base hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Browse 1,800+ Templates
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <a
                  href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/templates?success=true"
                  id="hero-purchase-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-foreground rounded-xl font-semibold text-base border border-border hover:border-accent/40 hover:shadow-md transition-all duration-200"
                >
                  Get Lifetime Access — $14.99
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF BANNER ── */}
        <section className="border-y border-border bg-muted/40">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Trusted by teams everywhere
              </p>
              <div className="flex items-center gap-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Founders</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">HR Teams</span>
                </div>
                <div className="w-px h-4 bg-border" />
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium">Agency Owners</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED TEMPLATES (SEO HUB) ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Popular Templates
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Jump into our most popular SOPs, checklists, and policies — used
              by thousands of teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTemplates.map((template) => (
              <Link
                key={template.slug}
                href={`/templates/${template.slug}`}
                prefetch={false}
                id={`featured-${template.slug}`}
                className="group border border-border rounded-2xl p-6 bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-accent-light transition-colors shrink-0">
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                    {template.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-lg leading-snug group-hover:text-accent transition-colors mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                  {template.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-auto">
                  View Template
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates"
              id="browse-all-cta"
              className="inline-flex items-center gap-2 px-6 py-3 text-accent font-semibold hover:bg-accent-light rounded-xl transition-colors"
            >
              Browse all 1,800+ templates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── VALUE PROPOSITION: ALL-ACCESS PASS ── */}
        <section className="bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-semibold tracking-wider uppercase mb-6">
                  All-Access Pass
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                  Unlock Every Template.{" "}
                  <span className="gradient-text">Forever.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Get instant, lifetime access to our full library of 1,800+
                  business-grade templates. No subscriptions. No recurring fees.
                  Just one simple purchase.
                </p>

                <ul className="space-y-3 mb-10">
                  {[
                    "Unlimited PDF downloads",
                    "All 1,800+ templates unlocked",
                    "New templates added weekly",
                    "No watermarks or branding",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/templates?success=true"
                  id="value-purchase-cta"
                  className="cta-pulse inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-white rounded-xl font-semibold text-base hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Get Lifetime Access — $14.99
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* Right: Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {valueProps.map((prop) => (
                  <div
                    key={prop.title}
                    className="border border-border rounded-2xl p-6 bg-white hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                      <prop.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-purple-600 p-10 md:p-16 text-center">
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to Stop Writing From Scratch?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Join thousands of professionals using Template Registry to
                streamline their workflows and scale their operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/templates"
                  id="final-browse-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-accent rounded-xl font-semibold text-base hover:bg-white/90 transition-all duration-200 shadow-lg"
                >
                  Browse Templates
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <a
                  href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/templates?success=true"
                  id="final-purchase-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/15 text-white border border-white/30 rounded-xl font-semibold text-base hover:bg-white/25 transition-all duration-200 backdrop-blur-sm"
                >
                  Get Lifetime Access — $14.99
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border">
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
