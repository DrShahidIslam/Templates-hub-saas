"use client";

import { ExternalLink, Check, Lock, X, KeyRound } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { checkPremiumStatus } from "@/app/actions";
import Link from "next/link";

interface NotionExportButtonProps {
  markdownContent: string;
}

export default function NotionExportButton({ markdownContent }: NotionExportButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywallModal, setShowPaywallModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const initAuth = async () => {
      if (typeof window !== "undefined") {
        try {
          const premium = await checkPremiumStatus();
          if (isMounted) setIsPremium(premium);
        } catch (err) {
          console.error("Auth check failed:", err);
        }
      }
      if (isMounted) setMounted(true);
    };

    initAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleExport = async () => {
    const serverVerifiedPremium = await checkPremiumStatus();
    
    if (!serverVerifiedPremium) {
      setShowPaywallModal(true);
      return;
    }

    // 3. ACTUAL EXPORT LOGIC
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      toast.success("Markdown copied for Notion!");

      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error("Failed to copy markdown: ", err);
      toast.error("Failed to copy to clipboard.");
    }
  };

  if (!mounted) {
    return (
      <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-white text-gray-400 border border-gray-200 rounded-xl font-medium text-sm opacity-50 cursor-not-allowed">
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
            ? "bg-[#111827] text-white border-[#111827]"
            : "bg-white text-[#111827] border-gray-200 hover:bg-gray-50 hover:border-gray-300"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-emerald-400" />
            <span>✓ Copied for Notion</span>
          </>
        ) : (
          <>
            <div className="relative">
              <ExternalLink className="w-4 h-4" />
              {!isPremium && (
                <Lock className="w-2.5 h-2.5 absolute -top-1 -right-1 text-indigo-600 bg-white rounded-full" />
              )}
            </div>
            <span>
              {isPremium ? "Export to Notion (Pro)" : "Export to Notion"}
            </span>
            {!isPremium && (
              <span className="ml-auto text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                Pro
              </span>
            )}
          </>
        )}
      </button>

      {/* ── PAYWALL MODAL ── */}
      {showPaywallModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setShowPaywallModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-indigo-600" />
              </div>
              
              <h2 className="text-2xl font-bold mb-3 tracking-tight text-gray-900">
                Unlock Unlimited Templates
              </h2>
              
              <p className="text-gray-500 mb-8 leading-relaxed">
                This feature is exclusively available for our Pro members. Upgrade to Premium to get unlimited lifetime access to our entire library of 1,800+ SOPs, frameworks, and checklists.
              </p>

              <a
                href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
                className="block w-full py-4 bg-[#4F46E5] text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-md shadow-indigo-500/20"
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
                  <KeyRound className="w-4 h-4 text-indigo-600" />
                  Restore Access
                </Link>
              </div>
              
              <button
                onClick={() => setShowPaywallModal(false)}
                className="mt-5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
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
