import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

import { getDocuments } from "outstatic/server";

export const metadata: Metadata = {
  title: "Template Registry — The Global Registry of Professional SOPs",
  description:
    "Access 3,000+ professional Standard Operating Procedures, Checklists, and Policies. Engineered for Clinical & Academic Precision, curated by a Chief Architect.",
  keywords: [
    "business templates",
    "SOP templates",
    "HR checklists",
    "clinical SOPs",
    "academic frameworks",
    "professional checklists",
  ],
  openGraph: {
    title: "Template Registry — The Global Registry of Professional SOPs",
    description: "3,000+ expert-curated business templates and SOPs.",
    images: ["/og-image.png"],
  }
};

export default async function HomePage() {
  const allTemplates = getDocuments('templates', ['title', 'slug', 'description', 'category'], 10000)
    .map(t => ({ keyword: t.title || t.slug.replace(/-/g, ' '), slug: t.slug }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Template Registry",
    "url": "https://templateregistry.com",
    "description": "Access 3,000+ professional Standard Operating Procedures, Checklists, and Policies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://templateregistry.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
    
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomePageClient allTemplates={allTemplates} />
    </>
  );
}
