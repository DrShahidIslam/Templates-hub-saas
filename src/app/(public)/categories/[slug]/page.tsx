import { Metadata } from "next";
import Link from "next/link";
import { 
  ChevronRight, 
  Search, 
  FileText, 
  ArrowRight,
  Filter
} from "lucide-react";
import { getDocuments } from "outstatic/server";
import CategorySeoBlock from "@/app/components/CategorySeoBlock";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${name} SOPs & Templates | Template Registry`,
    description: `Browse our professional ${name} Standard Operating Procedures, checklists, and templates.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Format the name from slug (e.g., "business-hr" -> "Business & HR")
  const categoryName = slug
    .split("-")
    .map(word => {
      if (word === "hr") return "HR";
      if (word === "it") return "IT";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ")
    .replace(" And ", " & ");

  const categoryKeywords: Record<string, string[]> = {
    'Visa & Travel': ['visa', 'tourist', 'travel', 'passport', 'border', 'immigration', 'flight', 'hotel'],
    'Health & Wellness': ['health', 'adhd', 'medical', 'fitness', 'wellness', 'diet', 'mental', 'therapy', 'clinical'],
    'Business & HR': ['business', 'hr', 'hiring', 'onboarding', 'employee', 'office', 'payroll', 'sop', 'policy', 'startup'],
    'Home & Lifestyle': ['home', 'lifestyle', 'garden', 'cleaning', 'cooking', 'family', 'pet', 'house', 'interior'],
    'Legal & Policy': ['legal', 'policy', 'law', 'contract', 'agreement', 'terms', 'privacy', 'compliance'],
    'Operations': ['operations', 'ops', 'management', 'process', 'workflow', 'inventory', 'logistics'],
    'IT & Security': ['it', 'security', 'tech', 'software', 'hardware', 'network', 'data', 'cyber']
  };

  const allTemplates = getDocuments('templates', ['title', 'slug', 'category', 'tags', 'description']);

  const keywords = categoryKeywords[categoryName] || slug.split("-");

  const filteredTemplates = allTemplates.filter((doc) => {
    const safeCategory = (typeof doc.category === 'string' ? doc.category : "").toLowerCase().trim().replace(/\s+/g, '-');
    const safeTags = (Array.isArray(doc.tags) ? doc.tags.join("-") : typeof doc.tags === 'string' ? doc.tags : "").toLowerCase().trim().replace(/\s+/g, '-');
    
    if (safeCategory === slug.toLowerCase() || safeTags.includes(slug.toLowerCase())) {
      return true;
    }

    const searchString = `${doc.title} ${doc.slug}`.toLowerCase();
    return keywords.some(k => searchString.includes(k.toLowerCase()));
  });

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-indigo-600 transition-colors">Categories</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 block">Domain Specific Registry</span>
              <h1 className="font-serif text-5xl md:text-6xl text-[#111827] tracking-tight mb-6">
                SOPs for <span className="italic text-gray-400">{categoryName}.</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                A specialized collection of professional frameworks and operational guides designed specifically for {categoryName} operations.
              </p>
            </div>

            {/* Micro Search within category */}
            <div className="w-full lg:w-96">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder={`Search ${categoryName}...`}
                  className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT GRID ── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
            <div className="text-sm text-gray-500">
              Showing <span className="font-bold text-gray-900">{filteredTemplates.length} results</span> for this domain.
            </div>
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>

          {filteredTemplates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <Link
                  href={`/templates/${template.slug}`}
                  key={template.slug}
                  className="group bg-white border border-gray-200 rounded-3xl p-6 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 text-indigo-600" />
                  </div>
                  
                  <h3 className="font-semibold text-[#111827] text-lg mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {template.title || template.slug.replace(/-/g, ' ')}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow line-clamp-3">
                    {template.description || `Download our comprehensive ${template.title} template.`}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all">
                    View Template
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-20 text-center py-24 bg-white border border-gray-100 rounded-[3rem] shadow-sm">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Filter className="w-10 h-10 text-indigo-200" />
              </div>
              <h2 className="font-serif text-3xl text-[#111827] mb-4">Populating the Registry</h2>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed mb-10">
                We are currently finalizing the batch generation for {categoryName}. Check back soon for 100+ professional templates.
              </p>
              <Link 
                href="/templates"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline"
              >
                Browse all live templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── SEO METHODOLOGY BLOCK ── */}
      <CategorySeoBlock categoryName={categoryName} />
    </div>
  );
}
