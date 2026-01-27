"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Notes to Leaders", href: "/notes-to-leaders" },
  { name: "Notes of Future", href: "/notes-of-future" },
  { name: "Notes of Challenges", href: "/notes-of-challenges" },
  { name: "About Us", href: "/about" },
  { name: "Publish", href: "/publish" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Logo */}
        <div className="text-center py-8 border-b border-gray-100">
          <Link href="/" className="inline-block group">
            <h1
              className="text-[2.5rem] md:text-[3rem] mb-1 transition-opacity group-hover:opacity-80"
              style={{ color: "var(--gold)", fontWeight: 300, letterSpacing: "0.06em", lineHeight: 1 }}
            >
              WALEI
            </h1>
            <p className="text-xs text-gray-500 italic" style={{ letterSpacing: "0.08em" }}>
              Making Statements
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-4">
          <ul className="flex items-center justify-center gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[13px] font-semibold text-gray-600 hover:text-[var(--teal)] transition-colors"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="text-gray-600 hover:text-[var(--teal)] transition-colors"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-4 flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <button aria-label="Search">
            <Search size={18} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <ul className="space-y-3 pt-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
