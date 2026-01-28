import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Notes of Moments",
  description:
    "Personal reflections from NRIs abroad. Stories of transition and cross-cultural identity. For those living change and finding meaning.",
};

const articles = [
  {
    id: "1",
    title: "From IIT Kharagpur to Max Planck: Navigating Research Cultures",
    excerpt:
      "The transition from Indian academia to European research culture brings unexpected challenges and profound growth opportunities.",
    date: "Jan 24, 2026",
    author: "Dr. Bhaskar Paul",
    institution: "MPI CEC, Germany",
    image: "/images/scientists/scientist-2.png",
    featured: true,
  },
  {
    id: "2",
    title: "Finding Home in Brussels: A Researcher's Dual Identity",
    excerpt:
      "Building a research career while maintaining connections to roots — the journey of an Indian researcher in Belgium.",
    date: "Jan 20, 2026",
    author: "Dr. Richa Sharma",
    institution: "Vrije Universiteit Brussel",
    featured: false,
  },
  {
    id: "3",
    title: "The German Research Landscape: Precision Meets Intuition",
    excerpt:
      "Adapting to the structure of German academia after years in India's more flexible research environment.",
    date: "Jan 15, 2026",
    author: "Dr. Kartikay Sharma",
    institution: "MPI, Germany",
    featured: false,
  },
  {
    id: "4",
    title: "Alpine Perspectives: Science at EPFL",
    excerpt:
      "Life at one of Europe's top technical universities — bridging Indian intuition with Swiss precision.",
    date: "Jan 10, 2026",
    author: "Dr. Deepika Sardana",
    institution: "EPFL, Switzerland",
    featured: false,
  },
  {
    id: "5",
    title: "The Fellowship Journey: Marie Curie in Copenhagen",
    excerpt:
      "Reflections on securing a prestigious fellowship and building a life in Scandinavia's research ecosystem.",
    date: "Jan 6, 2026",
    author: "Dr. Ananya Krishnan",
    institution: "SDU, Denmark",
    featured: false,
  },
];

const accentColor = "var(--accent-moments)";

export default function NotesOfMomentsPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: accentColor }}>
              Notes of Moments
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Living Between Places
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Personal reflections from NRIs abroad. Stories of transition, cross-cultural
            identity, and becoming across borders. For those living change and finding meaning.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-of-moments/${featuredArticle.id}`}
              className="group block"
            >
              <article className="rounded-2xl overflow-hidden md:flex bg-[var(--light)] hover:shadow-xl transition-shadow">
                <div className="h-56 md:h-auto md:w-1/2 relative overflow-hidden">
                  {featuredArticle.image ? (
                    <Image
                      src={`${basePath}${featuredArticle.image}`}
                      alt={featuredArticle.author}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#6B5B95]/20 to-[#6B5B95]/40" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                  <span
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full w-fit mb-4"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                  >
                    Featured
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-[var(--teal)] transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {featuredArticle.date}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-medium text-gray-900">All Stories</h2>
            <p className="text-xs text-gray-500">{articles.length} stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/notes-of-moments/${article.id}`}
                className="group"
              >
                <article className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div
                    className="h-32 relative"
                    style={{ background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}30 100%)` }}
                  >
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-[9px] font-bold uppercase text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      Moment
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-[var(--teal)] transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/notes-of-moments"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: accentColor }}
            >
              Load more stories <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
