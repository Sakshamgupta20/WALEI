"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const notesCategories = [
  {
    name: "Notes of Future",
    href: "/notes-of-future",
    color: "var(--accent-future)",
    description: "Long-view legacy for what comes next",
  },
  {
    name: "Notes of Challenges",
    href: "/notes-of-challenges",
    color: "var(--accent-challenges)",
    description: "From ideas to resilience beyond labs",
  },
  {
    name: "Notes of Moments",
    href: "/notes-of-moments",
    color: "var(--accent-moments)",
    description: "Living between places, becoming across borders",
  },
];

const navItems = [
  { name: "Sponsors", href: "/sponsors" },
  { name: "Products", href: "/products" },
  { name: "News", href: "/news" },
  { name: "Patents", href: "/patents" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notesDropdownOpen, setNotesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo mark */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="WALEI"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logo text */}
            <div className="hidden sm:block">
              <h1
                className="text-xl font-medium tracking-wide transition-colors"
                style={{ color: "var(--dark)" }}
              >
                WALEI
              </h1>
              <p
                className="text-[9px] uppercase tracking-[0.2em] -mt-0.5"
                style={{ color: "var(--gold)" }}
              >
                Vision · Insight · Action
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Notes Series Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setNotesDropdownOpen(true)}
              onMouseLeave={() => setNotesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--teal)] transition-colors rounded-lg hover:bg-gray-50">
                Notes Series
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    notesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  notesDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px]">
                  {notesCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <span className="text-sm font-medium text-gray-800 group-hover/item:text-[var(--teal)] transition-colors">
                          {category.name}
                        </span>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Regular Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[var(--teal)] transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-white rounded-lg flex items-center gap-2 hover:opacity-90 transition-all"
              style={{ backgroundColor: "var(--teal)" }}
            >
              Get in Touch
              <ArrowRight size={14} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 bg-white">
          {/* Notes Series */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
              Notes Series
            </p>
            <div className="space-y-1">
              {notesCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 my-4" />

          {/* Other Nav Items */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="mt-4 w-full px-5 py-3 text-sm font-semibold text-white rounded-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: "var(--teal)" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </header>
  );
}
