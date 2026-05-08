"use client";

import { Download, X, Lock, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { checkPremiumStatus } from "@/app/actions";
import Cookies from "js-cookie";

export default function PdfDownloadButton({ title }: { title: string }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      setMounted(true);

      if (typeof window !== "undefined") {
        // 1. Check for stored email in cookie
        const storedEmail = Cookies.get("user_email");
        if (storedEmail) {
          const premium = await checkPremiumStatus(storedEmail);
          setIsPremium(premium);
        }

        // 2. Check for success param (post-purchase)
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get('success') === 'true') {
          // Note: In a real flow, we'd wait for the webhook to finish, 
          // but for UX we can show a 'verifying' state or just refresh.
          window.history.replaceState({}, "", window.location.pathname);
        }

        const storedCount = parseInt(localStorage.getItem("templatehub_downloads") || "0", 10);
        setDownloadCount(storedCount);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationEmail) return;

    setVerifying(true);
    try {
      const premium = await checkPremiumStatus(verificationEmail);
      if (premium) {
        setIsPremium(true);
        Cookies.set("user_email", verificationEmail, { expires: 365 });
        setShowPaywallModal(false);
      } else {
        alert("Email not found in our Premium database. Please ensure you used the correct email at checkout.");
      }
    } catch (err) {
      console.error("Verification failed:", err);
    } finally {
      setVerifying(false);
    }
  };

  const handleDownload = async () => {
    // Check metered paywall limit
    if (!isPremium && downloadCount >= 3) {
      setShowPaywallModal(true);
      return;
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

            // 1. Nuclear scrub of all <style> tags in the head
            const styleTags = clonedDoc.querySelectorAll('style');
            styleTags.forEach(style => {
              if (style.innerHTML) {
                style.innerHTML = style.innerHTML
                  .replace(/oklch\([^)]+\)/g, '#000000')
                  .replace(/lab\([^)]+\)/g, '#000000');
              }
            });

            // 2. Scrub every single element's inline and computed styles
            const allElements = clonedDoc.querySelectorAll('*');
            allElements.forEach(el => {
              const htmlEl = el as HTMLElement;
              if (!htmlEl.style) return;

              const computed = window.getComputedStyle(htmlEl);
              const propsToCheck = [
                'color', 'backgroundColor', 'borderColor', 'borderTopColor', 
                'borderRightColor', 'borderBottomColor', 'borderLeftColor', 
                'textDecorationColor', 'fill', 'stroke'
              ] as const;
              
              propsToCheck.forEach(prop => {
                const val = computed.getPropertyValue(prop);
                if (val && (val.includes('lab') || val.includes('oklch'))) {
                  // Fallbacks: Backgrounds become transparent, everything else becomes black
                  htmlEl.style.setProperty(prop, prop.toLowerCase().includes('background') ? 'transparent' : '#000000');
                }
              });
              
              // 3. Force override the Tailwind default border
              htmlEl.style.borderColor = '#e5e7eb'; // Safe hex gray
            });
          }
        },
        jsPDF:        { unit: 'in' as const, format: 'letter' as const, orientation: 'portrait' as const }
      };

      console.log("4. Executing html2pdf...");
      await html2pdf().set(opt).from(element).save();
      console.log("5. PDF successfully downloaded!");

      // Increment count on successful download for free users
      if (!isPremium) {
        const newCount = downloadCount + 1;
        setDownloadCount(newCount);
        localStorage.setItem("templatehub_downloads", newCount.toString());
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
                You&apos;ve used your 3 free downloads! Upgrade to Premium to get unlimited lifetime access to our entire library of 1,800+ SOPs, frameworks, and checklists.
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
                <form onSubmit={handleVerify} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your purchase email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all"
                      value={verificationEmail}
                      onChange={(e) => setVerificationEmail(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={verifying}
                    className="w-full py-3 bg-white text-gray-900 border border-gray-200 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {verifying ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Verify Access
                      </>
                    )}
                  </button>
                </form>
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
