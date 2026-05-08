"use client";

import { ExternalLink, Check, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { checkPremiumStatus } from "@/app/actions";
import Cookies from "js-cookie";

interface NotionExportButtonProps {
  markdownContent: string;
}

export default function NotionExportButton({ markdownContent }: NotionExportButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setMounted(true);

      if (typeof window !== "undefined") {
        const storedEmail = Cookies.get("user_email");
        if (storedEmail) {
          const premium = await checkPremiumStatus(storedEmail);
          setIsPremium(premium);
        }
        
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.get("success") === "true") {
          window.history.replaceState({}, "", window.location.pathname);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleExport = async () => {
    // 1. SECURE LOCKDOWN: Pro Only
    if (!isPremium) {
      toast.error("Notion Export is a Pro Feature", {
        duration: 3000,
        icon: '🔒',
      });
      
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success";
      }, 2000);
      return;
    }

    // 2. ACTUAL EXPORT LOGIC
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
          <span>Export to Notion</span>
          {!isPremium && (
            <span className="ml-auto text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
              Pro
            </span>
          )}
        </>
      )}
    </button>
  );
}
