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
    <footer className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: "var(--dark)", color: "white" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-10 mb-12 pb-12 border-b border-gray-700">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-5xl font-light mb-3" style={{ color: "var(--gold)" }}>
              WALEI
            </h3>
            <p className="text-sm italic text-gray-400 mb-8">Making Statements</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Amplifying scientific voices and delivering evidence-based statements to world
              leaders and policymakers. Building a future guided by research and reason.
            </p>
          </div>

          {/* About Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-lg font-semibold mb-6">About</h4>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-12 pb-12 border-b border-gray-700">
          <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
          <div className="flex gap-5">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-14 h-14 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
          <p className="text-sm">&copy; 2026 WALEI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Mail size={18} />
            <a
              href="mailto:walei.office@gmail.com"
              className="hover:text-[var(--gold)] transition-colors"
            >
              walei.office@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
