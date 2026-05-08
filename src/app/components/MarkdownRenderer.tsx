"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="max-w-none text-lg text-[#374151]
      [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-[#111827] [&_h1]:mb-8 [&_h1]:tracking-tight
      [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#111827] [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-[#F3F4F6] [&_h2]:pb-3 [&_h2]:mt-12
      [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-[#111827] [&_h3]:mt-8
      [&_p]:leading-relaxed [&_p]:text-[#374151]
      [&_ul]:list-disc [&_ul]:pl-5
      [&_ol]:list-decimal [&_ol]:pl-5
      [&_li]:my-2 [&_li]:text-[#374151]
      [&_strong]:text-[#111827] [&_strong]:font-bold
      [&_a]:text-[#2563EB] [&_a]:font-semibold
      [&>*:not(:first-child)]:mt-6
      [&_li]:break-inside-avoid [&_p]:break-inside-avoid
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
