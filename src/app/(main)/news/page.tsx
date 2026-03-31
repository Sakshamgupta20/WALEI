import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from WALEI - science policy, research breakthroughs, and community highlights.",
};

const featuredNews = {
  id: "1",
  title: "Good morning, sunshine",
  excerpt:
    "India's solar energy revolution reaches new milestone with breakthrough in panel efficiency",
  date: "18 DEC 2025",
  category: "Energy",
  color: "var(--gold)",
};

const news = [
  {
    id: "2",
    title: "NIH's proposed caps on open-access publishing fees roil researchers",
    date: "18 DEC 2025",
    author: "Phie Jacobs",
    category: "Policy",
    color: "var(--gold)",
  },
  {
    id: "3",
    title: "A new preprint server welcomes papers written and reviewed by AI",
    date: "18 DEC 2025",
    author: "Celina Zhao",
    category: "Technology",
    color: "var(--accent-movements)",
  },
  {
    id: "4",
    title: "Pandemic security needs national leadership",
    date: "11 DEC 2025",
    author: "Editorial",
    category: "Health",
    color: "var(--accent-challenges)",
  },
];

const editorials = [
  { title: "Here comes the Sun", date: "18 DEC 2025" },
  { title: "Pandemic security needs national leadership", date: "11 DEC 2025" },
];

const firstRelease = [
  { title: "A second planetesimal collision in the Fomalhaut system", date: "18 DEC 2025" },
  { title: "Chromatin buffers torsional stress during transcription", date: "18 DEC 2025" },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              Latest Updates
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            News & Insights
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Latest updates from the world of science, policy, and innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              {/* Featured */}
              <a href="https://www.linkedin.com/company/walei/" target="_blank" rel="noopener noreferrer" className="group block mb-12">
                <div
                  className="aspect-[16/9] rounded-2xl mb-6 relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${featuredNews.color}40 0%, ${featuredNews.color}80 100%)` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div
                    className="absolute top-6 left-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: featuredNews.color }}
                  >
                    {featuredNews.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-sm text-white/80 mb-2 flex items-center gap-2">
                      <Calendar size={12} />
                      {featuredNews.date}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-light text-white group-hover:text-white/90 transition-colors">
                      {featuredNews.title}
                    </h3>
                  </div>
                </div>
              </a>

              {/* News Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {news.map((item) => (
                  <a
                    key={item.id}
                    href="https://www.linkedin.com/company/walei/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div
                      className="aspect-[4/3] rounded-xl mb-4 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)` }}
                    >
                      <div
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.category}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2 flex items-center gap-2">
                      <Calendar size={10} />
                      {item.date}
                    </p>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-[var(--gold)] transition-colors line-clamp-3 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5">
                      <User size={10} />
                      {item.author}
                    </p>
                  </a>
                ))}
              </div>

              <Link
                href="/news"
                className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-[var(--gold)] hover:gap-3 transition-all"
              >
                View all news <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-10">
              {/* Editorial */}
              <div className="bg-[var(--light)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">Editorial</h2>
                </div>
                <div className="space-y-4">
                  {editorials.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                      <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                      <h4 className="text-sm font-medium text-gray-900 hover:text-[var(--gold)] cursor-pointer transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* First Release */}
              <div className="bg-[var(--light)] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-6 rounded-full" style={{ backgroundColor: "var(--gold)" }} />
                  <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">First Release</h2>
                </div>
                <div className="space-y-4">
                  {firstRelease.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                      <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                      <h4 className="text-sm font-medium text-gray-900 hover:text-[var(--gold)] cursor-pointer transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
