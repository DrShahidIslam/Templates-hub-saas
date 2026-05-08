import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-gray-200 pt-20 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* ── COLUMN 1: BRAND ── */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group shrink-0 mb-6">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#111827]">
                <rect x="3" y="7" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="9" y="3" width="12" height="14" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-serif text-xl text-[#111827] tracking-tight">
                Template<span className="text-gray-400 italic">Registry.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Download free, expertly crafted HR and business templates designed for operational precision. Standardize your excellence today.
            </p>
          </div>

          {/* ── COLUMN 2: CATEGORIES ── */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Main Categories</h4>
            <ul className="space-y-4">
              {[
                { label: "HR & People Ops", href: "/templates?category=hr-people-ops" },
                { label: "Operations", href: "/templates?category=operations" },
                { label: "Legal & Policy", href: "/templates?category=legal-policy" },
                { label: "IT & Security", href: "/templates?category=it-security" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: RESOURCES ── */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "Latest Blog", href: "/blog" },
                { label: "All Templates", href: "/templates" },
                { label: "About Us", href: "/about" },
                { label: "Pro Pass (Soon)", href: "/#cta" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 4: LEGAL ── */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm">Legal</h4>
            <ul className="space-y-4">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Contact Support", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © 2026 Template Registry. All rights reserved. Curated with academic integrity.
          </p>
        </div>
      </div>
    </footer>
  );
}
