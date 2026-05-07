"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
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

  const [searchQuery, setSearchQuery] = useState("");

  // Programmatic Kill-Switch for Admin Routes
  if (pathname?.startsWith("/outstatic")) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      setMobileMenuOpen(false);
    }
  };

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
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#111827] group-hover:scale-110 transition-transform duration-300">
            <rect x="3" y="7" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <rect x="9" y="3" width="12" height="14" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-serif text-2xl text-[#111827] tracking-tight">
            Template<span className="text-gray-400 italic">Registry.</span>
          </span>
        </Link>

        {/* ── DESKTOP NAVIGATION ── */}
        <nav className="hidden md:flex items-center gap-8">
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
          
          {/* ── NAVBAR SEARCH ── */}
          <form onSubmit={handleSearch} className="relative group ml-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search..."
              className="pl-9 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 rounded-full text-sm outline-none transition-all w-40 focus:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
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
              {/* ── MOBILE SEARCH ── */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Search templates..."
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-base outline-none focus:border-indigo-500/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

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
