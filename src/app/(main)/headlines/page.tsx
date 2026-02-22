"use client";

import { useState } from "react";
import { Clock, Mail, Send, ChevronRight } from "lucide-react";

const headlines = [
  {
    id: "1",
    headline:
      "WALEI launches Notes of Movements series featuring NRI researchers across 15 countries sharing cross-cultural science experiences.",
    timestamp: "Feb 20, 2026",
  },
  {
    id: "2",
    headline:
      "Prof. Dipankar Chatterji discusses microbial gene regulation breakthroughs in exclusive Notes of Future interview.",
    timestamp: "Feb 15, 2026",
  },
  {
    id: "3",
    headline:
      "CareMother featured as flagship start-up in WALEI portfolio, highlighting maternal health innovations.",
    timestamp: "Feb 10, 2026",
  },
];

const timelineData = [
  { date: "Feb 2026", event: "Notes of Movements series launch" },
  { date: "Jan 2026", event: "WALEI reaches 349 cities across 54 countries" },
  {
    date: "Dec 2025",
    event: "Notes of Future: Interview with Prof. Suman Chakraborty",
  },
  { date: "Nov 2025", event: "Patent database launched with 50+ entries" },
  { date: "Oct 2025", event: "WALEI Gigs platform beta release" },
];

export default function HeadlinesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Stay Updated
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Headlines &amp; Timelines
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            The latest from WALEI and a chronological view of our journey building India&apos;s science and innovation network.
          </p>
        </div>
      </section>

      {/* Email Subscription */}
      <section className="py-8 bg-[var(--light)] border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-lg">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Subscribe to receive headlines in your inbox
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="relative flex-1">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-white font-semibold rounded-xl hover:bg-[var(--gold-light)] transition-all text-sm flex-shrink-0"
              >
                <Send size={14} />
                Subscribe
              </button>
            </form>
            {submitted && (
              <p className="text-sm text-[var(--gold)] mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Headlines Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px]" style={{ backgroundColor: "var(--gold)" }} />
            <h2 className="text-2xl font-light text-gray-900">Latest Headlines</h2>
          </div>

          <div className="space-y-0">
            {headlines.map((item, index) => (
              <article
                key={item.id}
                className={`group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-6 ${
                  index < headlines.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 text-sm text-gray-400 md:w-36 flex-shrink-0">
                  <Clock size={14} />
                  <time>{item.timestamp}</time>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 leading-relaxed group-hover:text-[var(--gold)] transition-colors">
                    {item.headline}
                  </p>
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-300 group-hover:text-[var(--gold)] transition-colors hidden md:block flex-shrink-0 mt-1"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-20 bg-[var(--light)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-[2px]" style={{ backgroundColor: "var(--gold)" }} />
            <h2 className="text-2xl font-light text-gray-900">Our Timeline</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gray-200" />

            <div className="space-y-10">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex gap-6 md:gap-10 items-start">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor:
                          index === 0 ? "var(--gold)" : "white",
                        border:
                          index === 0
                            ? "none"
                            : "2px solid var(--gold)",
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor:
                            index === 0 ? "white" : "var(--gold)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <p
                      className="text-sm font-bold uppercase tracking-wider mb-2"
                      style={{ color: "var(--gold)" }}
                    >
                      {item.date}
                    </p>
                    <div className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                      <p className="text-gray-800 leading-relaxed">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
