"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FileText,
  ArrowRight,
  Copy,
  Check,
  AlertCircle,
  Loader2,
  Wand2,
  ShieldCheck,
  Zap,
  ClipboardCheck,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NotionExportButton from "@/app/components/NotionExportButton";
import PdfDownloadButton from "@/app/components/PdfDownloadButton";
import Link from "next/link";

/* ────────────────────────────────────────────────────────
   EXAMPLE PROMPTS — shown as suggestion pills
   ──────────────────────────────────────────────────────── */

const EXAMPLE_PROMPTS = [
  "Employee Onboarding Process for a 50-person startup",
  "HIPAA-compliant Data Breach Response Plan",
  "Restaurant Kitchen Opening and Closing Checklist",
  "SaaS Customer Success Handoff from Sales to CS",
  "ISO 27001 Incident Response Procedure",
  "Quarterly Business Review (QBR) Preparation SOP",
];

/* ────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────── */

export default function SOPGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError("");
    setMarkdown("");

    try {
      const res = await fetch("/api/generate-sop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate SOP.");
      }

      setMarkdown(data.markdown);

      // Scroll to results after a short delay for render
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard failed silently
    }
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  // Derive a PDF title from the prompt
  const pdfTitle = prompt.trim()
    ? `SOP - ${prompt.trim().substring(0, 60)}`
    : "Generated SOP";

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-indigo-500/30 selection:text-white">
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-24">
        {/* ── HERO HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-gray-400 mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            AI-Powered · Free to Use
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
            Custom SOP{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Describe any process and our AI Architect will engineer a
            clinical-grade Standard Operating Procedure in seconds.
          </p>
        </motion.div>

        {/* ── INPUT SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8"
        >
          <div className="relative rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-950/20">
            {/* Glowing top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="p-6 md:p-8">
              <label
                htmlFor="sop-prompt"
                className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3 uppercase tracking-widest"
              >
                <Wand2 className="w-4 h-4 text-indigo-400" />
                Describe Your SOP
              </label>

              <textarea
                id="sop-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a detailed SOP for onboarding remote employees at a Series-B fintech startup, covering IT provisioning, HR paperwork, manager introductions, and 30-60-90 day milestones..."
                rows={5}
                maxLength={2000}
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-[15px] text-gray-100 placeholder:text-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all duration-200 leading-relaxed"
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-gray-600">
                  {prompt.length}/2,000 characters
                </span>

                <button
                  id="generate-sop-btn"
                  onClick={handleGenerate}
                  disabled={isLoading || !prompt.trim()}
                  className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    isLoading
                      ? "bg-indigo-600/50 text-indigo-200 cursor-not-allowed"
                      : !prompt.trim()
                      ? "bg-white/5 text-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Architecting SOP...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Generate SOP
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── EXAMPLE PROMPTS ── */}
        {!markdown && !isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">
              Try an example
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {EXAMPLE_PROMPTS.map((example) => (
                <button
                  key={example}
                  onClick={() => handleExampleClick(example)}
                  className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/8 text-sm text-gray-400 hover:text-indigo-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 cursor-pointer"
                >
                  {example}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── LOADING SKELETON ── */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-12"
            >
              <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 md:p-10 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-300">Julian Vance is architecting your SOP...</p>
                    <p className="text-xs text-gray-600">This usually takes 10-20 seconds</p>
                  </div>
                </div>
                {/* Shimmer lines */}
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 rounded-lg bg-gradient-to-r from-white/[0.03] via-white/[0.06] to-white/[0.03] animate-pulse"
                      style={{
                        width: `${70 + Math.random() * 30}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── ERROR STATE ── */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-8"
            >
              <div className="flex items-start gap-3 p-5 rounded-xl bg-red-500/5 border border-red-500/20 text-red-300">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm mb-1">Generation Failed</p>
                  <p className="text-sm text-red-400/80">{error}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── GENERATED OUTPUT ── */}
        <AnimatePresence>
          {markdown && !isLoading && (
            <motion.div
              ref={resultRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Result Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <ClipboardCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-200">SOP Generated Successfully</p>
                    <p className="text-xs text-gray-500">by Julian Vance, Chief Architect</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyMarkdown}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Raw
                    </>
                  )}
                </button>
              </div>

              {/* Rendered Markdown Output */}
              <div
                id="pdf-content"
                className="rounded-2xl bg-white border border-gray-200 p-8 md:p-12 shadow-2xl shadow-black/30 overflow-hidden"
                style={{ color: "#111827", backgroundColor: "#ffffff" }}
              >
                {/* Document Header (Matches template page branding) */}
                <div className="flex justify-between items-end border-b-2 border-[#F3F4F6] pb-8 mb-12">
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
                    <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.25em] leading-none mb-2">
                      AI-Generated SOP
                    </p>
                    <p className="text-[10px] text-[#D1D5DB] uppercase tracking-widest leading-none">
                      Custom Generation
                    </p>
                  </div>
                </div>

                {/* Prose Content */}
                <div className="max-w-none text-lg text-[#374151]
                  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-[#111827] [&_h1]:mb-8 [&_h1]:tracking-tight
                  [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#111827] [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-[#F3F4F6] [&_h2]:pb-3 [&_h2]:mt-12
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#111827] [&_h3]:mt-8
                  [&_p]:leading-relaxed [&_p]:text-[#374151]
                  [&_ul]:list-disc [&_ul]:pl-5
                  [&_ol]:list-decimal [&_ol]:pl-5
                  [&_li]:my-2 [&_li]:text-[#374151]
                  [&_strong]:text-[#111827] [&_strong]:font-bold
                  [&_a]:text-[#2563EB] [&_a]:font-semibold
                  [&>*:not(:first-child)]:mt-6
                  [&_li]:break-inside-avoid [&_p]:break-inside-avoid
                  [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
                  [&_th]:bg-[#F9FAFB] [&_th]:border [&_th]:border-[#E5E7EB] [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-[#111827]
                  [&_td]:border [&_td]:border-[#E5E7EB] [&_td]:px-4 [&_td]:py-2 [&_td]:text-sm
                ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                  </ReactMarkdown>
                </div>

                {/* Document Footer */}
                <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-4">
                    <span>© 2026 Template Registry</span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span>AI-Generated Document</span>
                  </div>
                  <div className="font-bold">Custom SOP</div>
                </div>
              </div>

              {/* ── PAYWALL EXPORT BUTTONS ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-200">Export Your SOP</p>
                      <p className="text-xs text-gray-500">
                        Download as PDF or copy for Notion
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <PdfDownloadButton title={pdfTitle} />
                    <NotionExportButton markdownContent={markdown} />
                  </div>

                  {/* Trust signal */}
                  <div className="mt-5 pt-5 border-t border-white/5 flex items-center gap-2 text-xs text-gray-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Premium export powered by Template Registry Pro
                  </div>
                </div>
              </motion.div>

              {/* ── UPGRADE CTA ── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <div className="rounded-2xl bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 p-6 md:p-8 text-center">
                  <p className="text-lg font-semibold text-gray-200 mb-2">
                    Need unlimited SOPs, exports, and 3,000+ templates?
                  </p>
                  <p className="text-sm text-gray-500 mb-5">
                    One-time payment. Lifetime access. No subscriptions.
                  </p>
                  <a
                    href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Zap className="w-4 h-4" />
                    Unlock All-Access — $14.99
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FEATURE GRID (shown when no result) ── */}
        {!markdown && !isLoading && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Clinical-Grade SOPs",
                  desc: "Every procedure follows evidence-based management frameworks with actionable checklists.",
                },
                {
                  icon: Sparkles,
                  title: "AI-Powered Generation",
                  desc: "Powered by Google Gemini and engineered by Julian Vance, Chief Architect.",
                },
                {
                  icon: FileText,
                  title: "Export Anywhere",
                  desc: "Download as PDF or copy Markdown directly into Notion, Obsidian, or any wiki.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-indigo-500/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-200 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Browse Templates CTA */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-600 mb-4">
                Or browse our curated library of 3,000+ pre-built templates
              </p>
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Browse Templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}
