"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-xl overflow-hidden transition-colors hover:border-accent/30"
        >
          <button
            id={`faq-trigger-${index}`}
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span className="font-medium text-foreground pr-4 text-[15px] group-hover:text-accent transition-colors">
              {item.question}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-accent" : ""
              }`}
            />
          </button>
          <div
            id={`faq-content-${index}`}
            className="accordion-content"
            data-open={openIndex === index}
            role="region"
            aria-labelledby={`faq-trigger-${index}`}
          >
            <div>
              <div className="px-6 pb-5 text-muted-foreground text-[15px] leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
