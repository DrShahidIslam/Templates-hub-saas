"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/categories", label: "Categories" },
  { href: "/blog", label: "Blog" },
];

const POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Programmatic Kill-Switch for Admin Routes
  if (pathname?.startsWith("/outstatic")) return null;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#FAFAFA]/80 backdrop-blur-md border-b border-gray-200 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* ── BRAND ── */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#111827] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif text-2xl text-[#111827] tracking-tight">
            Template<span className="text-gray-400 italic">Registry.</span>
          </span>
        </Link>

        {/* ── DESKTOP NAVIGATION ── */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href 
                  ? "text-[#111827]" 
                  : "text-gray-500 hover:text-[#111827]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>



        {/* ── MOBILE TOGGLE ── */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#111827] hover:bg-gray-200 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-900 border-b border-gray-50 pb-4"
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
