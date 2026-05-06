import { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Template Registry — The Global Registry of Professional SOPs",
  description:
    "Access 1,800+ professional Standard Operating Procedures, Checklists, and Policies. Engineered for Clinical & Academic Precision, curated by an Assistant Professor.",
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
    description: "1,800+ expert-curated business templates and SOPs.",
    images: ["/og-image.png"], // Assuming you might have one
  }
};

export default function HomePage() {
  return <HomePageClient />;
}
