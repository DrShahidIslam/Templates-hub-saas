"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Users,
  Scale,
  Settings,
  HeartPulse,
  Monitor,
  BarChart3
} from "lucide-react";

const categories = [
  {
    title: "HR & People Ops",
    count: "450+",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    slug: "hr-people-ops",
    size: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "Operations",
    count: "320+",
    icon: Settings,
    color: "bg-orange-50 text-orange-600",
    slug: "operations",
    size: "col-span-1 md:col-span-1 row-span-2"
  },
  {
    title: "Legal & Policy",
    count: "180+",
    icon: Scale,
    color: "bg-purple-50 text-purple-600",
    slug: "legal-policy",
    size: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    title: "IT & Security",
    count: "240+",
    icon: Monitor,
    color: "bg-indigo-50 text-indigo-600",
    slug: "it-security",
    size: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    title: "Healthcare",
    count: "150+",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
    slug: "healthcare",
    size: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    title: "Finance",
    count: "210+",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600",
    slug: "finance",
    size: "col-span-1 md:col-span-1 row-span-1"
  }
];

const trendingTags = ["#Onboarding", "#HR-Policy", "#RemoteWork", "#Compliance", "#SecuritySOP"];

export default function HomePageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <main className="relative">
        
        {/* ── HERO SECTION ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] opacity-60" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-[100px] opacity-40" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-[13px] font-medium text-gray-500 mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Trusted by 12,000+ Business Leaders
              </span>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#111827] tracking-tight mb-8 leading-[1.1]">
                The Global Registry of <br />
                <span className="italic text-gray-400">Professional SOPs.</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-10 group"
            >
              <div className="relative flex items-center p-2 bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500/50 transition-all duration-300">
                <div className="pl-4 pr-3 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
                <input 
                  type="text"
                  placeholder="Search 1,800+ templates (e.g. 'Employee Onboarding')"
                  className="flex-1 py-4 bg-transparent outline-none text-lg text-gray-900 placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 text-xs font-mono ml-2">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
                <Link 
                  href={`/templates?q=${encodeURIComponent(searchQuery)}`}
                  className="ml-2 px-6 py-4 bg-[#4F46E5] text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Search
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center items-center gap-3"
            >
              <span className="text-sm font-medium text-gray-400 mr-2">Trending:</span>
              {trendingTags.map((tag) => (
                <Link 
                  key={tag} 
                  href={`/templates?q=${tag.replace('#', '')}`}
                  className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-indigo-500/30 hover:text-indigo-600 transition-all"
                >
                  {tag}
                </Link>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-[#F5F5F7] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center border border-indigo-100">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#111827]">Engineered for Clinical Precision</h3>
                  <p className="text-sm text-gray-500">Curated by an Assistant Professor.</p>
                </div>
              </div>
              <div className="h-px w-24 md:w-px md:h-12 bg-gray-200" />
              <div className="flex gap-12 items-center">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 leading-none">1,800+</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">SOP Library</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 leading-none">12k</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Users Served</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900 leading-none">4.9/5</span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1">Precision Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-[#111827] mb-4">Browse by Domain</h2>
            <p className="text-gray-500 max-w-lg leading-relaxed">
              Explore our exhaustive library organized by specialized business functions and academic frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${cat.size} group relative overflow-hidden bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <cat.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#111827] mb-2">{cat.title}</h3>
                    <p className="text-sm text-gray-400 mb-6">{cat.count} Specialized Templates</p>
                  </div>
                  
                  <Link 
                    href={`/templates?category=${cat.slug}`}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold group/link"
                  >
                    Browse Domain
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="font-serif text-5xl text-[#111827] mb-8 leading-tight">
                Academic Precision. <br />
                Business Speed.
              </h2>
              <div className="space-y-10">
                {[
                  {
                    title: "Peer-Reviewed Logic",
                    desc: "Every SOP is engineered using evidence-based management frameworks and clinical-grade checklists.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Universal Compatibility",
                    desc: "Export to high-fidelity PDF or copy raw Markdown directly into Notion, Obsidian, or Slack.",
                    icon: Zap
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-[#111827] mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="p-8 bg-white font-serif text-gray-800 space-y-4">
                  <div className="h-8 w-3/4 bg-gray-50 rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-gray-50 rounded-lg animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-50 rounded-lg animate-pulse" />
                  <div className="pt-8 space-y-4">
                    <div className="h-12 w-full border border-indigo-100 rounded-xl bg-indigo-50/20" />
                    <div className="h-12 w-full border border-gray-100 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 p-6 bg-white border border-gray-100 rounded-3xl shadow-xl max-w-[200px]">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Verified Framework</p>
                <p className="text-sm font-serif text-gray-700 italic">"The definitive standard for clinical operations."</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#111827] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-5xl md:text-6xl text-white mb-8">
                Ready to scale with precision?
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                Join thousands of organizations using the Registry to standardize their excellence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/templates"
                  className="px-10 py-5 bg-[#4F46E5] text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
                >
                  Browse 1,800+ Templates
                </Link>
                <a 
                  href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l"
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  All-Access Pass — $14.99
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center">
              <span className="text-white font-bold text-xs">TR</span>
            </div>
            <span className="font-bold text-[#111827]">Template Registry</span>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Library</span>
              <Link href="/templates" className="text-sm text-gray-600 hover:text-indigo-600">Browse All</Link>
              <Link href="/templates?category=hr" className="text-sm text-gray-600 hover:text-indigo-600">HR Policies</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Company</span>
              <Link href="/about" className="text-sm text-gray-600 hover:text-indigo-600">Our Mission</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-600">Support</Link>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400 mb-2">© 2026 Template Registry.</p>
            <p className="text-xs text-gray-300">Curated with Academic Integrity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
