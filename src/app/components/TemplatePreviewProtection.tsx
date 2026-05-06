"use client";

import { Lock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * TemplatePreviewProtection
 * 
 * Discourages direct copying of templates for non-Pro users.
 * Features:
 * - DRAFT PREVIEW watermark (hidden in PDF)
 * - Disable text selection for free users
 * - Disable right-click on content
 * - Upgrade nudge card
 */
export default function TemplatePreviewProtection({ children }: { children: React.ReactNode }) {
  const [isPremium, setIsPremium] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const premium =
        localStorage.getItem("isPremium") === "true" ||
        localStorage.getItem("templatehub_premium") === "true";
      setIsPremium(premium);
    }
  }, []);

  // Simple right-click prevention for non-Pro users
  const handleContextMenu = (e: React.MouseEvent) => {
    if (!isPremium) {
      e.preventDefault();
    }
  };

  if (!mounted) {
    return <div className="relative">{children}</div>;
  }

  return (
    <div className="relative group">
      <div
        onContextMenu={handleContextMenu}
        className={`relative transition-all duration-300 ${
          !isPremium ? "select-none" : ""
        }`}
      >
        {/* ── WATERMARK ── */}
        {!isPremium && (
          <div 
            id="preview-watermark"
            className="no-pdf absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden"
          >
            <div className="text-[80px] md:text-[120px] font-bold text-gray-900/[0.04] -rotate-45 whitespace-nowrap select-none">
              DRAFT PREVIEW
            </div>
          </div>
        )}

        {/* The actual Markdown content */}
        <div className="relative z-0">
          {children}
        </div>
      </div>

      {/* ── UPGRADE NUDGE ── */}
      {!isPremium && (
        <div className="no-pdf mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
              <Lock className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-indigo-900">Want a clean, boardroom-ready version?</h4>
              <p className="text-sm text-indigo-700/80">Upgrade to Pro for high-res PDFs and 1-click Notion exports.</p>
            </div>
          </div>
          <a
            href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
            className="whitespace-nowrap px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 active:scale-95"
          >
            Upgrade to Pro
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}
