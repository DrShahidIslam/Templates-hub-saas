"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
          {question}
        </span>
        <span className="ml-6 flex-shrink-0 text-gray-400 group-hover:text-indigo-600 transition-colors">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <div
        className={`mt-4 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-base">{answer}</p>
      </div>
    </div>
  );
}

export default function CategorySeoBlock({ categoryName }: { categoryName: string }) {
  const faqs = [
    {
      question: `Why is standardizing ${categoryName} critical for enterprise teams?`,
      answer: `Standardization in ${categoryName} eliminates the variance that causes operational friction. By engineering a unified framework, organizations ensure that every team member executes with the same level of precision, meeting strict compliance standards while reducing the risk of costly errors.`
    },
    {
      question: `How are these ${categoryName} blueprints engineered?`,
      answer: `Each blueprint is architected through a process of rigorous technical mapping. We analyze high-stakes workflows, identify bottlenecks, and build modular SOPs that serve as a fail-safe invisible backbone for your operations, allowing for rapid scaling without loss of quality.`
    },
    {
      question: `Can these SOPs be customized for specific organizational needs?`,
      answer: `While our core frameworks are designed for universal compatibility and zero-defect execution, they are provided in high-fidelity formats like Markdown and PDF, enabling your team to easily adapt specific sub-processes without compromising the structural integrity of the master methodology.`
    }
  ];

  return (
    <section className="bg-slate-50 border-t border-gray-200 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-slate prose-lg max-w-none">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-8 leading-tight">
            The Architecture of <span className="italic text-gray-400">{categoryName}</span> Operations
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            Julian Vance, our Chief Architect, approaches <span className="font-semibold text-gray-800">{categoryName}</span> not just as a set of tasks, but as a complex ecosystem that requires structural integrity to function at scale. In any high-stakes environment, the difference between success and failure often lies in the quality of the underlying systems. By implementing these authoritative frameworks, businesses can effectively eliminate operational friction and ensure that their core processes are resistant to human error and ambiguity.
          </p>
          
          <p className="text-gray-600 leading-relaxed mb-12">
            Our <span className="font-semibold text-gray-800">{categoryName}</span> blueprints are engineered through a methodology of precise process mapping and risk mitigation. Each SOP and checklist is developed to serve as a high-performance foundation for your team, ensuring that onboarding is streamlined and that execution remains flawless, regardless of team size. This isn&apos;t just documentation; it is operational engineering designed for predictable, high-margin results.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-serif text-gray-900 mb-8">Methodology & Implementation FAQ</h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
