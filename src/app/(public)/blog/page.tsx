import { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  Calendar,
  ChevronRight,
  TrendingUp,
  BookOpen
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Registry Log | Operations & SOP Insights",
  description: "Expert insights on business operations, standard operating procedures, and academic frameworks for efficiency.",
};

const blogPosts = [
  {
    title: "How SOPs Can Reduce Employee Turnover by 30%",
    slug: "sops-reduce-employee-turnover",
    excerpt: "Research shows that clear documentation is the #1 factor in employee confidence during the first 90 days of onboarding.",
    date: "May 12, 2026",
    readTime: "6 min read",
    category: "Operations",
    featured: true
  },
  {
    title: "The Professor's Guide to Clinical Checklists",
    slug: "professors-guide-clinical-checklists",
    excerpt: "Applying academic rigor to everyday business tasks. Why the 'Double-Check' framework is failing your team.",
    date: "May 10, 2026",
    readTime: "8 min read",
    category: "Academic",
    featured: false
  },
  {
    title: "Why Visa Applications Fail: A Structural Analysis",
    slug: "why-visa-applications-fail",
    excerpt: "An in-depth look at the most common administrative errors in global mobility and how to automate them away.",
    date: "May 08, 2026",
    readTime: "10 min read",
    category: "Global Mobility",
    featured: false
  },
  {
    title: "Scaling a 10-Person Startup with Zero Management",
    slug: "scaling-startup-with-sops",
    excerpt: "The paradoxical truth: The more you document, the less you need to manage. A deep dive into autonomous workflows.",
    date: "May 05, 2026",
    readTime: "5 min read",
    category: "Business",
    featured: false
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured);
  const recentPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ── HEADER ── */}
      <section className="pt-24 pb-16 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-medium">Blog</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-[#111827] tracking-tight mb-6">
                The Registry <span className="italic text-gray-400">Log.</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
                Operations, academic frameworks, and structural insights from the intersection of business and research.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white border border-gray-100 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Readers</p>
                  <p className="text-sm font-bold text-gray-900">4,281 this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* ── FEATURED POST ── */}
        {featuredPost && (
          <div className="mb-20">
            <Link 
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="aspect-[16/10] bg-gray-100 rounded-[2.5rem] overflow-hidden relative border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-gray-200" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-wider">
                    Featured Article
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-[#111827] mb-6 group-hover:text-indigo-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Dr. Shahid Islam</p>
                    <p className="text-xs text-gray-500">Assistant Professor & Operations Specialist</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── RECENT POSTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recentPosts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="aspect-[16/10] bg-white border border-gray-100 rounded-3xl mb-6 relative overflow-hidden group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 text-gray-300">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 text-xs font-bold text-indigo-600 uppercase tracking-widest">
                <span>{post.category}</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#111827] mb-4 group-hover:text-indigo-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#111827] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-[#111827] mb-6">Join the Registry Digest</h2>
          <p className="text-gray-500 mb-10 text-lg">
            Weekly operations insights and new template alerts. Curated for the efficient leader.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500/30 transition-all"
            />
            <button className="px-8 py-4 bg-[#111827] text-white rounded-2xl font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
