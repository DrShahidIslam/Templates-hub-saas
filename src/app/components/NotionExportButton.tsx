"use client";

import { ExternalLink, Check, Lock, X } from "lucide-react";
import { useState, useEffect } from "react";

interface NotionExportButtonProps {
  markdownContent: string;
}

export default function NotionExportButton({ markdownContent }: NotionExportButtonProps) {
  const [copied, setCopied] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [isPremium, setIsPremium] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("isPremium") === "true" ||
        localStorage.getItem("templatehub_premium") === "true"
      );
    }
    return false;
  });
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      let currentPremium = isPremium;

      // A. Check localStorage
      const storedPremium =
        localStorage.getItem("isPremium") === "true" ||
        localStorage.getItem("templatehub_premium") === "true";
      if (storedPremium) {
        setIsPremium(true);
        currentPremium = true;
      }

      // B. Check URL for success redirect
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get("success") === "true") {
        setIsPremium(true);
        currentPremium = true;
        localStorage.setItem("isPremium", "true");
        window.history.replaceState({}, "", window.location.pathname);
      }

      const storedCount = parseInt(localStorage.getItem("templatehub_downloads") || "0", 10);
      setDownloadCount(storedCount);
    }
  }, [isPremium]);

  const handleExport = async () => {
    // Replicate paywall logic: only Pro or within free limit
    if (!isPremium && downloadCount >= 3) {
      setShowPaywallModal(true);
      return;
    }

    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      
      // Feedback toast logic (simulated by button state)
      setTimeout(() => {
        setCopied(false);
      }, 3000);
      
      // Optional: Standard browser alert for extra clarity
      // alert("Copied! Open a blank Notion page and press Ctrl+V / Cmd+V.");
    } catch (err) {
      console.error("Failed to copy markdown: ", err);
      alert("Failed to copy to clipboard.");
    }
  };

  if (!mounted) {
    return (
      <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-foreground border border-border rounded-xl font-medium text-sm opacity-50 cursor-not-allowed">
        <ExternalLink className="w-4 h-4" />
        Export to Notion
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleExport}
        id="export-notion-btn"
        className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 transition-all duration-200 rounded-xl font-medium text-sm cursor-pointer border ${
          copied
            ? "bg-black text-white border-black"
            : "bg-white text-foreground border-border hover:bg-muted hover:border-foreground/20"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-400" />
            <span>✓ Copied for Notion</span>
          </>
        ) : (
          <>
            <ExternalLink className="w-4 h-4" />
            <span>Export to Notion</span>
          </>
        )}
      </button>

      {/* ── PAYWALL MODAL (Replicated from PDF button) ── */}
      {showPaywallModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setShowPaywallModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3 tracking-tight text-foreground">
                Unlock Pro Features
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notion Export is a Pro feature. Upgrade to the All-Access Pass to unlock unlimited exports, PDF downloads, and lifetime access to our 1,800+ templates.
              </p>

              <a
                href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/templates?success=true"
                className="block w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20"
              >
                Upgrade to Premium — $14.99
              </a>
              
              <button
                onClick={() => setShowPaywallModal(false)}
                className="mt-5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
