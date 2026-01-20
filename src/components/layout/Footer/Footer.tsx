import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "../Header/Logo";
import { navigation } from "@/lib/constants/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Experiences that inspire. A thought leadership platform featuring
              conversations with visionary leaders shaping our future.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/walei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/walei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-overline text-gray-400 mb-4">Categories</h4>
            <ul className="space-y-3">
              {navigation.footer.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-overline text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.footer.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-overline text-gray-400 mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.footer.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} WALEI. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with purpose. Designed to inspire.
          </p>
        </div>
      </Container>
    </footer>
  );
}
