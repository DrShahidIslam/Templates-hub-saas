"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Mail,
  Download,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function SuccessPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      setMounted(true);
      if (typeof window !== "undefined") {
        const searchParams = new URLSearchParams(window.location.search);
        const emailFromUrl = searchParams.get("email"); // Assume Polar or we pass it
        
        if (emailFromUrl) {
          Cookies.set("user_email", emailFromUrl, { expires: 365 });
          toast.success("Lifetime Access Activated!", {
            duration: 5000,
            icon: '💎',
          });
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24 px-6 selection:bg-indigo-100 selection:text-indigo-900">
      <main className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ── VERIFICATION BADGE ── */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-8 shadow-sm">
            <CheckCircle2 className="w-4 h-4" />
            Payment Verified
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-[#111827] tracking-tight mb-6 leading-tight">
            Welcome to the Inner Circle <br />
            <span className="italic text-gray-400">of Efficiency.</span>
          </h1>

          <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Your Lifetime All-Access Pass is now active. You have unlocked 1,800+ templates with zero restrictions.
          </p>

          {/* ── PRO FEATURE GUIDE ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-12">
            <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4">
                <Download className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Unlimited PDFs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Download every SOP and checklist in high-resolution PDF format. No watermarks, no limits.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <ExternalLink className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1-Click Notion Export</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Copy raw Markdown optimized for Notion, Obsidian, or Trello. Your workflow is now seamless.
              </p>
            </div>
          </div>

          {/* ── BONUS VALUE: REQUEST SOPs ── */}
          <div className="p-8 bg-[#111827] rounded-[2.5rem] text-left relative overflow-hidden mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[60px]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Pro Benefit</span>
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Can&apos;t find a specific template?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                As a Pro member, you can request custom SOPs for your industry. Email us and we&apos;ll prioritize your niche in our next 500-template batch.
              </p>
              <a 
                href="mailto:support@templateregistry.com" 
                className="inline-flex items-center gap-2 text-white font-bold hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@templateregistry.com
              </a>
            </div>
          </div>

          {/* ── RETURN BUTTON ── */}
          <Link 
            href="/templates"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#4F46E5] text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
          >
            Back to Registry
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="mt-8 text-xs text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-3 h-3" />
            Lifetime License Secured
          </p>
        </motion.div>
      </main>
    </div>
  );
}
