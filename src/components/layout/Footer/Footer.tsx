import Link from "next/link";
import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  about: [
    { label: "About the Initiative", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Leadership", href: "/leaders" },
    { label: "Partners", href: "/partners" },
  ],
  resources: [
    { label: "Notes of Future", href: "/notes-of-future" },
    { label: "Notes of Challenges", href: "/notes-of-challenges" },
    { label: "Research Archive", href: "/archive" },
    { label: "Media Kit", href: "/media" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

const socialLinks = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "var(--dark)", color: "white" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-light mb-2" style={{ color: "var(--gold)" }}>
              WALEI
            </h3>
            <p className="text-xs italic text-gray-400 mb-5">Making Statements</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Amplifying scientific voices and delivering evidence-based statements to world
              leaders and policymakers. Building a future guided by research and reason.
            </p>
          </div>

          {/* About Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-sm font-semibold mb-4">About</h4>
            <ul className="space-y-2.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-10 pb-10 border-b border-gray-700">
          <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p className="text-xs">&copy; 2026 WALEI. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <a
              href="mailto:walei.office@gmail.com"
              className="text-sm hover:text-[var(--gold)] transition-colors"
            >
              walei.office@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
