"use client";

import { useState } from "react";
import Link from "next/link";
import { Layers, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/templates", label: "Browse Templates" },
  { href: "/categories", label: "Categories" },
  { href: "/blog", label: "Blog" },
];

const POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_SvXvG4jukzotDEekGNPrlidHn7MXXdXlQJSeT2Kt33l?success_url=https://templateregistry.com/success";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ── LEFT: Brand ── */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Template<span className="gradient-text">Registry</span>
          </span>
        </Link>

        {/* ── CENTER: Desktop Links ── */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── RIGHT: Desktop CTAs ── */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={POLAR_CHECKOUT_URL}
            className="px-5 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm shadow-accent/15"
          >
            Get Lifetime Access — $14.99
          </a>
        </div>

        {/* ── MOBILE: Hamburger Button ── */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-muted transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* ── MOBILE: Slide-down Menu ── */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-border my-2" />

            <a
              href={POLAR_CHECKOUT_URL}
              className="py-3 px-3 rounded-lg bg-accent text-white font-semibold text-center hover:bg-accent-hover transition-colors"
            >
              Get Lifetime Access — $14.99
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
