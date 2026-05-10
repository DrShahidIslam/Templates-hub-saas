import { Metadata } from "next";
import Link from "next/link";
import { Check, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Lifetime Access | Template Registry",
  description: "Unlock 3,000+ premium B2B templates, Clinical & Academic Grade SOPs, and free lifetime updates with a single ROI-positive investment.",
  keywords: ["Lifetime Access", "SOP Pricing", "Business Templates Subscription", "Premium SOPs", "ROI"]
};

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Template Registry Lifetime Access",
    "description": "Unlock 3,000+ premium Standard Operating Procedures, frameworks, and checklists.",
    "offers": {
      "@type": "Offer",
      "price": "14.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://templateregistry.com/pricing"
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-6 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-[#111827] mb-6 tracking-tight">
          Standardize Your Excellence
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Unlock the entire registry of 3,000+ premium Standard Operating Procedures, frameworks, and checklists with a single lifetime pass.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Lifetime Access</h2>
            <p className="text-gray-500 mb-8">One-time payment, forever yours.</p>
            
            <div className="mb-8 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gray-900">$14.99</span>
              <span className="text-gray-400 font-medium">/ lifetime</span>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                "3,000+ Premium B2B Templates",
                "Clinical & Academic Grade SOPs",
                "Instant High-Fidelity PDF Export",
                "1-Click Notion Integration",
                "Free Lifetime Updates"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
              className="block w-full py-5 text-center bg-[#111827] text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Buy Lifetime Access
            </a>

            {/* TRUST BADGE */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 bg-gray-50 py-3 px-4 rounded-xl border border-gray-100">
              <Shield className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>
                Enterprise-grade SOPs architected by Julian Vance.{" "}
                <Link href="/about" className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors underline decoration-indigo-200 underline-offset-4 hover:decoration-indigo-500">
                  Read the methodology
                </Link>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
