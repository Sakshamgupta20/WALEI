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
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="text-center py-10 md:py-12 border-b border-gray-100">
          <Link href="/" className="inline-block group">
            <h1
              className="text-[3rem] md:text-[3.75rem] lg:text-[4.5rem] mb-2 transition-opacity group-hover:opacity-80"
              style={{
                color: "var(--gold)",
                fontWeight: 300,
                letterSpacing: "0.05em",
                lineHeight: 1
              }}
            >
              WALEI
            </h1>
            <p className="text-sm md:text-base text-gray-600 italic" style={{ letterSpacing: "0.1em" }}>
              Making Statements
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-6">
          <ul className="flex items-center justify-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-[var(--teal)] transition-colors"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="text-gray-800 hover:text-[var(--teal)] transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-6 flex items-center justify-between">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100">
            <ul className="space-y-4 pt-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-gray-800"
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
