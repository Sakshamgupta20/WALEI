import { Metadata } from "next";
import { Mail, Users, Globe, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WALEI. Reach out for partnerships, collaborations, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Have questions, ideas, or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">Reach Out</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--teal)" }}
                  >
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:walei.office@gmail.com"
                      className="text-base text-gray-600 hover:text-[var(--teal)] transition-colors"
                    >
                      walei.office@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Global Presence</h3>
                    <p className="text-base text-gray-600">
                      349 Cities across 54 Countries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-moments)" }}
                  >
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Community</h3>
                    <p className="text-base text-gray-600">
                      IIT K, IIT B, IISc, IIT KGP, MPI, SDU, VUB...
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="mt-10 p-8 rounded-2xl bg-[var(--dark)] text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                  Our Reach
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-light" style={{ color: "var(--gold)" }}>349</p>
                    <p className="text-sm text-gray-400 mt-1">Cities</p>
                  </div>
                  <div>
                    <p className="text-4xl font-light" style={{ color: "var(--teal)" }}>54</p>
                    <p className="text-sm text-gray-400 mt-1">Countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--light)] rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent text-sm transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent text-sm transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent text-sm transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent resize-none text-sm transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[var(--teal)] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
