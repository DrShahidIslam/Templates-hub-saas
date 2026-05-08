import { Metadata } from "next";
import Link from "next/link";
import { 
  Plane, 
  HeartPulse, 
  Briefcase, 
  Home, 
  Monitor, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { getDocuments } from "outstatic/server";

export const metadata: Metadata = {
  title: "Browse by Category | Template Registry",
  description: "Explore our exhaustive library of professional SOPs and checklists across Visa & Travel, Health, Business, and more.",
};

const categoryDefinitions = [
  {
    name: "Visa & Travel",
    slug: "visa-travel",
    desc: "Global mobility frameworks and travel documentation guides.",
    icon: Plane,
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    desc: "Clinical-grade SOPs and wellness maintenance checklists.",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
  },
  {
    name: "Business & HR",
    slug: "business-hr",
    desc: "Operations, hiring, and people management protocols.",
    icon: Briefcase,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "Home & Lifestyle",
    slug: "home-lifestyle",
    desc: "Domestic operations and lifestyle optimization frameworks.",
    icon: Home,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Tech & IT",
    slug: "tech-it",
    desc: "Security protocols and systems management SOPs.",
    icon: Monitor,
    color: "bg-emerald-50 text-emerald-600",
  }
];

// Helper to normalize strings for perfect matching
const normalize = (str?: string) => str?.toLowerCase().trim().replace(/[-_ ]+/g, '-') || "";

export default function CategoriesPage() {
  const allTemplates = getDocuments('templates', ['category']);

  // Map over category definitions and inject dynamic counts
  const categoriesWithCounts = categoryDefinitions.map(cat => {
    const safeCatSlug = normalize(cat.slug);
    const count = allTemplates.filter((t: any) => normalize(t.category) === safeCatSlug).length;
    
    return {
      ...cat,
      count: count > 0 ? `${count} Templates` : "0 Templates"
    };
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-24 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">Categories</span>
          </nav>
          <h1 className="font-serif text-5xl md:text-6xl text-[#111827] tracking-tight mb-6">
            Browse by <span className="italic text-gray-400">Category.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Standardize your excellence across every domain. Explore our curated registry of 1,800+ professional templates organized by specialized industry functions.
          </p>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriesWithCounts.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:border-indigo-500/20 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <cat.icon className="w-8 h-8" />
                  </div>
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl text-[#111827] mb-3">{cat.name}</h2>
                    <p className="text-gray-500 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {cat.count}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#111827] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="font-serif text-4xl text-white mb-6">Need a custom category?</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto">
              Our Pro members can request specialized industry batches. Join the Registry to prioritize your niche.
            </p>
            <Link 
              href="https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
            >
              Get All-Access Pass
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
