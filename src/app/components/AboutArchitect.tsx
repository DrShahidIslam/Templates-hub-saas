"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, Waypoints, ShieldCheck, TrendingUp } from "lucide-react";

export default function AboutArchitect() {
  const expertise = [
    {
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      title: "Standard Operating Procedure Development",
      description: "Crafting clear, compliance-driven, and highly actionable procedural frameworks."
    },
    {
      icon: <Waypoints className="w-5 h-5 text-indigo-600" />,
      title: "Process Mapping & Optimization",
      description: "Identifying bottlenecks and engineering streamlined paths from initiation to completion."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: "Quality Assurance & Risk Mitigation",
      description: "Designing foolproof checklists that ensure zero-defect execution in critical environments."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "Organizational Scaling",
      description: "Building the foundational documentation required for businesses to scale rapidly without losing control."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* IMAGE PANE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-900/10 relative">
              <Image 
                src="/images/julian_vance.png" 
                alt="Julian Vance - Systems Architect" 
                fill 
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Decorative background blur */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gray-50 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* COPY PANE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-3 block">
                Meet Julian Vance
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-[1.15] tracking-tight mb-8">
                The Architecture of <br className="hidden md:block" />
                <span className="italic text-gray-400">Flawless Execution</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-500 leading-relaxed font-sans">
                <p>
                  Julian Vance is a systems architect and process engineering expert dedicated to a single, uncompromising mission: helping businesses scale through flawless, repeatable execution. With a deep specialization in developing elite Standard Operating Procedures (SOPs) and fail-safe checklists, he has spent his career transforming complex, high-stakes workflows into streamlined, automated frameworks.
                </p>
                <p>
                  As the chief architect behind the Template Registry, Julian&apos;s methodology is rooted in a fundamental business truth: a company&apos;s ability to scale relies entirely on the precise, daily execution of its core processes. By eliminating operational friction and ambiguity, his bespoke blueprints empower organizations to drastically reduce human error, ensure strict compliance, and accelerate team onboarding with zero drop-off in quality.
                </p>
                <p>
                  Whether designing quality assurance protocols for enterprise teams or building step-by-step operational foundations for rapidly growing startups, Julian&apos;s work serves as the invisible backbone of elite organizational efficiency. He doesn&apos;t just write documents; he engineers clarity, turning organizational chaos into predictable, high-margin results.
                </p>
              </div>
            </div>

            {/* EXPERTISE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              {expertise.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
