"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none 
      prose-headings:font-bold prose-headings:text-[#111827] prose-headings:tracking-tight
      prose-h1:text-4xl prose-h1:mb-8
      prose-h2:text-2xl prose-h2:border-b prose-h2:border-[#F3F4F6] prose-h2:pb-3 prose-h2:mt-12
      prose-h3:text-xl prose-h3:mt-8
      prose-p:text-[#374151] prose-p:leading-relaxed
      prose-li:text-[#374151] prose-li:my-2
      prose-strong:text-[#111827]
      prose-a:text-[#2563EB] prose-a:font-semibold
      [&>*:not(:first-child)]:mt-6
      [&_li]:break-inside-avoid [&_p]:break-inside-avoid
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
