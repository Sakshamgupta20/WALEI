import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Notes of Future",
  description:
    "Exploring tomorrow's possibilities through conversations with visionary leaders shaping the future.",
};

const articles = [
  {
    id: "1",
    title: "India's Semiconductor Ambitions: From Design to Fabrication",
    excerpt:
      "With $10 billion committed to the India Semiconductor Mission, experts debate whether India can become a global chip manufacturing hub by 2030.",
    date: "Jan 22, 2026",
    author: "Prof. V. Ramgopal Rao",
    image: "/images/scientists/scientist-4.png",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of AI in Education: Reimagining How India Learns",
    excerpt:
      "Exploring how artificial intelligence is reshaping learning experiences for 300 million Indian students.",
    date: "Jan 18, 2026",
    author: "Dr. Aisha Sharma",
    featured: false,
  },
  {
    id: "3",
    title: "Green Hydrogen: India's Path to Energy Independence",
    excerpt:
      "How the National Green Hydrogen Mission could position India as a global clean energy leader.",
    date: "Jan 15, 2026",
    author: "Dr. Rajesh Menon",
    featured: false,
  },
  {
    id: "4",
    title: "Quantum Computing: India's Silent Revolution",
    excerpt:
      "From IISc to TIFR, Indian researchers are making breakthroughs in quantum error correction.",
    date: "Jan 12, 2026",
    author: "Prof. Sunita Verma",
    featured: false,
  },
  {
    id: "5",
    title: "Digital Health Infrastructure: Building on CoWIN's Legacy",
    excerpt:
      "How India's Ayushman Bharat Digital Mission is creating the world's largest interoperable health records system.",
    date: "Jan 8, 2026",
    author: "Dr. Amit Patel",
    featured: false,
  },
  {
    id: "6",
    title: "Smart Cities 2.0: Lessons from Pune, Surat, and Bhubaneswar",
    excerpt:
      "Three Indian cities leading the smart urban transformation share what worked and what comes next.",
    date: "Jan 5, 2026",
    author: "Architect Priya Nair",
    featured: false,
  },
];

const accentColor = "var(--accent-future)";

export default function NotesOfFuturePage() {
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
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent" style={{ background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: accentColor }}>
              Notes of Future
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Exploring Tomorrow
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Conversations with visionary leaders shaping what comes next — from
            semiconductor policy and AI governance to clean energy and digital infrastructure.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-of-future/${featuredArticle.id}`}
              className="group block"
            >
              <article className="rounded-2xl overflow-hidden md:flex bg-[var(--light)] hover:shadow-xl transition-shadow">
                <div className="h-56 md:h-auto md:w-1/2 relative overflow-hidden">
                  {featuredArticle.image ? (
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.author}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#D4A853]/20 to-[#D4A853]/40" />
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
            <h2 className="text-lg font-medium text-gray-900">All Articles</h2>
            <p className="text-xs text-gray-500">{articles.length} articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/notes-of-future/${article.id}`}
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
                      Future
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
              href="/notes-of-future"
              className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
              style={{ color: accentColor }}
            >
              Load more articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
