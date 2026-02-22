import { Mail, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-medium"
              style={{ color: "var(--dark)" }}
            >
              WALEI
            </span>
            <span className="text-xs text-gray-400">
              Vision · Insight · Action
            </span>
          </div>

          {/* Social Links - Email, LinkedIn, Instagram only */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:walei.office@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Mail size={16} className="text-gray-600" />
            </a>
            <a
              href="https://www.linkedin.com/company/walei/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Linkedin size={16} className="text-gray-600" />
            </a>
            <a
              href="https://instagram.com/walei_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Instagram size={16} className="text-gray-600" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            &copy; 2026 WALEI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
