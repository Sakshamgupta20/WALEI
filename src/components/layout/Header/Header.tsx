"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const dropdownMenus = [
  {
    label: "Notes",
    items: [
      {
        name: "Notes series",
        href: "/notes",
        description: "All notes across every series",
      },
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
        name: "Notes of Movements",
        href: "/notes-of-movements",
        color: "var(--accent-movements)",
        description: "Living between places, becoming across borders",
      },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { name: "Start-ups", href: "/startups", description: "Science-based ventures and innovations" },
      { name: "Patents", href: "/patents", description: "Research IP and licensing opportunities" },
      { name: "Supplies", href: "/supplies", description: "Coming soon" },
      { name: "Projects", href: "/projects", description: "Coming soon" },
    ],
  },
];

const flatNavItems = [
  { name: "Gigs", href: "/gigs" },
  { name: "H&T", href: "/headlines" },
  { name: "Team", href: "/team" },
  // { name: "NEWS", href: "/news" },
  // { name: "Calendar", href: "/calendar" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
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
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform group-hover:scale-105">
              <Image
                src={`${basePath}/logo.png`}
                alt="WALEI"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1
                className="text-lg font-medium tracking-wide transition-colors leading-tight"
                style={{ color: "var(--dark)" }}
              >
                WALEI
              </h1>
              <p
                className="text-[8px] uppercase tracking-[0.15em] -mt-0.5"
                style={{ color: "var(--gold)" }}
              >
                Vision · Insight · Action
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Dropdown Menus */}
            {dropdownMenus.map((menu) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(menu.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-gray-700 hover:text-[var(--gold)] transition-colors rounded-lg hover:bg-gray-50">
                  {menu.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${
                      openDropdown === menu.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-full left-0 pt-1.5 transition-all duration-200 ${
                    openDropdown === menu.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 min-w-[240px]">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group/item"
                      >
                        {"color" in item && (
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: (item as { color: string }).color }}
                          />
                        )}
                        <div>
                          <span className="text-xs font-medium text-gray-800 group-hover/item:text-[var(--gold)] transition-colors">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-[11px] text-gray-500 mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Flat Nav Items */}
            {flatNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-[var(--gold)] transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-xs font-semibold text-white rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-all"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Get in Touch
              <ArrowRight size={12} />
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
          mobileMenuOpen ? "max-h-[80vh] border-t border-gray-100 overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 bg-white">
          {/* Dropdown Sections */}
          {dropdownMenus.map((menu) => (
            <div key={menu.label} className="mb-2">
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-700 rounded-lg hover:bg-gray-50"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === menu.label ? null : menu.label)
                }
              >
                {menu.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    mobileExpanded === menu.label ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-200 overflow-hidden ${
                  mobileExpanded === menu.label ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                <div className="pl-3 space-y-1 pb-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {"color" in item && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: (item as { color: string }).color }}
                        />
                      )}
                      <span className="text-sm text-gray-600">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Divider */}
          <div className="h-px bg-gray-100 my-3" />

          {/* Flat Nav Items */}
          <div className="space-y-1">
            {flatNavItems.map((item) => (
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
            style={{ backgroundColor: "var(--gold)" }}
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
