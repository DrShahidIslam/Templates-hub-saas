"use client";

import { Download, X, Lock, KeyRound } from "lucide-react";
import { useState, useEffect } from "react";
import { checkPremiumStatus } from "@/app/actions";
import Link from "next/link";
import toast from "react-hot-toast";

export default function PdfDownloadButton({ title }: { title: string }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [freeDownloadUsed, setFreeDownloadUsed] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const initAuth = async () => {
      if (typeof window !== "undefined") {
        try {
          // checkPremiumStatus() reads the premium_session cookie on the server
          const premium = await checkPremiumStatus();
          if (isMounted) setIsPremium(premium);
        } catch (err) {
          console.error("Auth check failed:", err);
        }

        const used = localStorage.getItem('free_downloads') === '1';
        if (isMounted) setFreeDownloadUsed(used);
      }
      if (isMounted) setMounted(true);
    };

    initAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDownload = async () => {
    // Strictly verify premium status securely on the server before generating PDF
    const serverVerifiedPremium = await checkPremiumStatus();
    
    // The Free Tier Check (Soft Gate)
    if (!serverVerifiedPremium) {
      const hasUsedFree = localStorage.getItem('free_downloads') === '1';
      
      if (hasUsedFree) {
        setShowPaywallModal(true);
        return;
      }
    }

    try {
      setIsGenerating(true);
      console.log("1. Starting PDF generation...");

      const element = document.getElementById('pdf-content');
      if (!element) {
        throw new Error("Target element '#pdf-content' not found on the page.");
      }
      console.log("2. Target element found.");

      // Dynamically import to avoid Next.js window is not defined errors
      const html2pdf = (await import('html2pdf.js')).default;
      console.log("3. Library imported successfully.");

      const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5] as [number, number, number, number],
        filename:     `${title}.pdf`,
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true,
          onclone: (clonedDoc: Document) => {
            // 0. Remove watermarks and upgrade nudges
            clonedDoc.querySelectorAll('.no-pdf').forEach(el => el.remove());

            // 1. Inject Scorched Earth CSS Reset to override all global variables and computed styles
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              :root {
                --background: #ffffff !important;
                --foreground: #000000 !important;
                --tw-prose-body: #000000 !important;
                --tw-prose-headings: #000000 !important;
                --tw-prose-links: #000000 !important;
              }
              * {
                color: #000000 !important;
                background-color: transparent !important;
                border-color: #cccccc !important;
              }
              #pdf-content {
                background-color: #ffffff !important;
              }
              p, h1, h2, h3, h4, h5, li, tr, blockquote {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
            `;
            clonedDoc.head.appendChild(style);

            // 2. Target the cloned PDF wrapper directly
            const pdfContent = clonedDoc.getElementById('pdf-content');
            if (pdfContent) {
              pdfContent.removeAttribute('class');
              pdfContent.style.padding = '40px';
              
              // 3. Loop through every single descendant to aggressively force safe colors
              const allElements = pdfContent.querySelectorAll('*');
              allElements.forEach(el => {
                const htmlEl = el as HTMLElement;
                
                // Nuclear option: completely sever the element from Tailwind and all stylesheets
                htmlEl.removeAttribute('class');

                if (!htmlEl.style) return;

                // Explicitly clear any inline styles that might contain lab or oklch values
                htmlEl.style.color = '';
                htmlEl.style.backgroundColor = '';
                htmlEl.style.borderColor = '';
                htmlEl.style.fontFamily = 'sans-serif';
              });
            }
          }
        },
        pagebreak:    { mode: ['css', 'legacy'], avoid: 'p, h1, h2, h3, h4, h5, li, tr, blockquote' },
        jsPDF:        { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
      };

      console.log("4. Executing html2pdf...");
      await html2pdf().set(opt).from(element).save();
      console.log("5. PDF successfully downloaded!");
      
      // Update free tier state and trigger toast for anonymous users
      if (!serverVerifiedPremium) {
        localStorage.setItem('free_downloads', '1');
        setFreeDownloadUsed(true);
        toast('1/1 Free Download Used. Get Pro for unlimited access.', {
          icon: '🎁',
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("PDF Generation FAILED:", error);
      alert("There was an issue generating the PDF. Please check the console.");
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
    : !freeDownloadUsed
    ? "Download PDF (1 Free Remaining)"
    : "Get Lifetime Access";

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
                You&apos;ve used your 1 free download! Upgrade to Premium to get unlimited lifetime access to our entire library of 1,800+ SOPs, frameworks, and checklists.
              </p>

              <a
                href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
                className="block w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-md shadow-accent/20"
              >
                Upgrade to Premium
              </a>

              {/* ── ALREADY A MEMBER? ── */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-900 mb-4">Already a Pro member?</p>
                
                <Link
                  href="/restore"
                  className="w-full py-3 bg-white text-gray-900 border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-4 h-4 text-accent" />
                  Restore Access
                </Link>
              </div>
              
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
