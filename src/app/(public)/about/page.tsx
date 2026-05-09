import { Metadata } from "next";
import { Award, ShieldCheck, BookOpen, Clock } from "lucide-react";
import Link from "next/link";

import AboutArchitect from "@/app/components/AboutArchitect";

export const metadata: Metadata = {
  title: "Julian Vance | Chief Architect & Process Engineer",
  description: "Meet Julian Vance, the systems architect behind Template Registry. Specializing in enterprise SOPs, process engineering, and flawless execution frameworks.",
  keywords: ["Julian Vance", "Process Engineering", "Enterprise SOPs", "Systems Architect", "Operations Executive"]
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Julian Vance",
      "jobTitle": "Chief Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "Template Registry"
      },
      "description": "Systems architect and process engineering expert dedicated to scaling businesses through flawless, repeatable execution.",
      "image": "https://templateregistry.com/images/julian_vance.png",
      "knowsAbout": ["Process Engineering", "Standard Operating Procedures", "Quality Assurance", "Organizational Scaling"]
    }
  };

  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* ── HERO ── */}
      <section className="pt-24 pb-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-[#111827] tracking-tight mb-8">
            Standardizing <span className="italic text-gray-400">Excellence.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Template Registry was founded on a simple premise: professional-grade operational frameworks should be accessible to everyone, from clinical researchers to startup founders.
          </p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#111827] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We bridge the gap between academic rigor and business speed. Every template in our library is engineered using evidence-based management principles and peer-reviewed SOP structures.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              Curated by Julian Vance, our Chief Architect, with a background in clinical operations and structural insights, we ensure that every checklist and policy meets the highest standards of precision and usability.
            </p>
            <Link 
              href="/templates" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#111827] text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200"
            >
              Browse the Registry
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
              <Award className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">1,800+</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Templates</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm mt-12">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Clinical</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Precision</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm">
              <BookOpen className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Academic</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Integrity</p>
            </div>
            <div className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm mt-12">
              <Clock className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">2026</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECT ── */}
      <AboutArchitect />
    </main>
  );
}
