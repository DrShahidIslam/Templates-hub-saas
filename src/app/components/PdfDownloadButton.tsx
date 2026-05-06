"use client";

import { Download } from "lucide-react";
import { useState } from "react";

export default function PdfDownloadButton({ title }: { title: string }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      // Dynamically import html2pdf.js to avoid SSR errors
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("pdf-content");

      if (!element) {
        console.error("PDF content element not found");
        return;
      }

      const opt = {
        margin: [15, 15, 15, 15],
        filename: `${title}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      id="download-pdf-btn"
      className={`cta-pulse w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-accent-hover transition-all duration-200 cursor-pointer ${
        isGenerating ? "opacity-75 cursor-not-allowed" : ""
      }`}
    >
      <Download className="w-4 h-4" />
      {isGenerating ? "Generating PDF..." : "Download as PDF"}
    </button>
  );
}
