"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { navigation } from "@/lib/constants/navigation";

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBackground = isScrolled || !transparent;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showBackground
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-natural"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant={!showBackground && transparent ? "white" : "default"} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  !showBackground && transparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                !showBackground && transparent && "text-white hover:bg-white/10"
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Publish CTA (Desktop) */}
            <Link href="/publish" className="hidden md:block">
              <Button variant="primary" size="sm">
                Publish
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:hidden",
                !showBackground && transparent && "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link href="/publish" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="lg" className="w-full">
                    Publish Your Story
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
