import { Metadata } from "next";
import Link from "next/link";
import { 
  ChevronLeft, 
  Clock, 
  Calendar, 
  Share2,
  BookOpen,
  Link as LinkIcon
} from "lucide-react";

import { getDocumentBySlug } from 'outstatic/server';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getDocumentBySlug('blog', slug, ['title', 'description']);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | The Registry Log`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getDocumentBySlug('blog', slug, [
    'title',
    'publishedAt',
    'content',
    'author',
    'coverImage'
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* ── TOP NAVIGATION ── */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </Link>
      </div>

      {/* ── ARTICLE HEADER ── */}
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-wider">
              Operations Insight
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              10 min read
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111827] leading-[1.1] mb-10 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-y border-gray-100">
            <div className="flex items-center gap-4">
              {post.author?.picture && (
                <img 
                  src={post.author.picture} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full border border-gray-100 object-cover" 
                />
              )}
              <div>
                <p className="font-bold text-[#111827]">{post.author?.name || 'Julian Vance'}</p>
                <p className="text-xs text-gray-500">Chief Architect & Systems Engineer</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase tracking-widest">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-indigo-600">
                  <LinkIcon className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-indigo-600">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── ARTICLE CONTENT ── */}
        <div className="prose prose-indigo prose-lg max-w-none text-gray-600 leading-relaxed font-sans">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* ── AUTHOR BIO ── */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-xl shrink-0" />
            <div>
              <h4 className="font-serif text-2xl text-[#111827] mb-2">About the Author</h4>
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                Julian Vance is a systems architect and process engineering expert specialized in developing elite Standard Operating Procedures (SOPs) and fail-safe checklists.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/about" 
                  className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline"
                >
                  View Credentials
                </Link>
                <Link 
                  href="/templates" 
                  className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline"
                >
                  Browse Author&apos;s Library
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* ── READ NEXT ── */}
      <section className="py-24 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl text-[#111827] mb-12">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Link 
                key={i} 
                href="/blog"
                className="group flex gap-8 items-center p-6 rounded-[2rem] hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
              >
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0">
                  <BookOpen className="w-8 h-8 text-gray-300" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Recent Insight</div>
                  <h3 className="font-serif text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Standardizing Excellence: The Next Frontier of Operations
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
