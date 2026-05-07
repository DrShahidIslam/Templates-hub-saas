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
                { label: "Categories", href: "/categories" },
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
          <div className="flex gap-6">
            <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </Link>
            <Link href="https://github.com" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
