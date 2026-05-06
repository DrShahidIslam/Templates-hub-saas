"use client";

import { Download, X, Lock } from "lucide-react";
import { useState, useEffect } from "react";

export default function PdfDownloadButton({ title }: { title: string }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      // 1. Check for payment success directly via window.location 
      // (avoiding useSearchParams to prevent static de-opting)
      const search = window.location.search;
      if (search.includes("success=true")) {
        setIsPremium(true);
        localStorage.setItem("templatehub_premium", "true");
        
        // Clean the URL without causing a page reload
        window.history.replaceState(null, "", window.location.pathname);
      } else {
        // 2. Load existing state from localStorage
        const storedPremium = localStorage.getItem("templatehub_premium") === "true";
        const storedCount = parseInt(localStorage.getItem("templatehub_downloads") || "0", 10);
        
        setIsPremium(storedPremium);
        setDownloadCount(storedCount);
      }
    }
  }, []);

  const handleDownload = async () => {
    // Check metered paywall limit
    if (!isPremium && downloadCount >= 3) {
      setShowPaywallModal(true);
      return;
    }

    try {
      setIsGenerating(true);
      // Dynamically import html2pdf.js to avoid SSR errors
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("pdf-content");

      if (!element) {
        console.error("PDF content element not found");
        return;
      }

      const opt = {
        margin: 15,
        filename: `${title}.pdf`,
        image: { type: "jpeg" as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm" as const, format: "a4" as const, orientation: "portrait" as const },
      };

      await html2pdf().set(opt).from(element).save();

      // Increment count on successful download for free users
      if (!isPremium) {
        const newCount = downloadCount + 1;
        setDownloadCount(newCount);
        localStorage.setItem("templatehub_downloads", newCount.toString());
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // Determine button text securely after hydration
  const buttonText = !mounted
    ? "Download as PDF"
    : isGenerating
    ? "Generating PDF..."
    : isPremium
    ? "Download PDF (Pro)"
    : `Download as PDF (${3 - downloadCount}/3 Free)`;

  return (
    <>
      <button
        onClick={handleDownload}
        disabled={isGenerating}
        id="download-pdf-btn"
        className={`cta-pulse w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-all duration-200 cursor-pointer ${
          isGenerating ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        <Download className="w-4 h-4" />
        {buttonText}
      </button>

      {/* ── PAYWALL MODAL ── */}
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
                Unlock Unlimited Templates
              </h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                You've used your 3 free downloads! Upgrade to Premium to get unlimited lifetime access to our entire library of 1,800+ SOPs, frameworks, and checklists.
              </p>

              <a
                href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l"
                className="block w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20"
              >
                Upgrade to Premium
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
