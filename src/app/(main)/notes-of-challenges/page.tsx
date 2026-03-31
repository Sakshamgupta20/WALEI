import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Notes of Challenges",
  description:
    "Learning from obstacles and discovering how leaders turn their greatest challenges into opportunities for growth.",
};

const articles = [
  {
    id: "1",
    title: "Urban Water Scarcity",
    excerpt:
      "With 21 Indian cities expected to run out of groundwater, researchers and civic leaders discuss scalable solutions.",
    date: "Jan 20, 2026",
    author: "Dr. Shantanu Pathak",
    affiliation: "CareMother",
    image: "/images/notes/challenges/shantanu-pathak.png",
    featured: true,
  },
  {
    id: "2",
    title: "Healthcare Data Analytics",
    excerpt:
      "How AI-driven diagnostics and data analytics platforms are optimising healthcare delivery across India.",
    date: "Jan 16, 2026",
    author: "Viraj Kulkarni",
    affiliation: "IYASO",
    image: "/images/notes/challenges/viraj-kulkarni.png",
    featured: false,
    comingSoon: true,
  },
];

const accentColor = "var(--accent-challenges)";

export default function NotesOfChallengesPage() {
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
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px]" style={{ background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: accentColor }}>
              Notes of Challenges
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Confronting Hard Problems
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Discover how scientists and leaders tackle India&apos;s most pressing
            challenges, from water scarcity and public health to climate adaptation.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-10 bg-white">
          <div className="max-w-[1400px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-of-challenges/${featuredArticle.id}`}
              className="group block"
            >
              <article className="rounded-2xl overflow-hidden md:flex bg-[var(--light)] hover:shadow-xl transition-shadow">
                <div className="h-72 md:h-auto md:min-h-[320px] md:w-1/2 relative overflow-hidden">
                  {featuredArticle.image ? (
                    <Image
                      src={`${basePath}${featuredArticle.image}`}
                      alt={featuredArticle.author}
                      fill
                      className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#C54B4B]/20 to-[#C54B4B]/40" />
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
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-[var(--gold)] transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{featuredArticle.author}</span>
                    <span className="text-xs text-gray-400">{featuredArticle.affiliation}</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-medium text-gray-900">All Articles</h2>
            <p className="text-xs text-gray-500">{articles.length} articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => {
              const inner = (
                <article className={`rounded-xl overflow-hidden border border-gray-100 transition-all ${article.comingSoon ? "opacity-80" : "hover:shadow-lg hover:-translate-y-1"}`}>
                  <div className="h-1 w-full" style={{ backgroundColor: accentColor }} />
                  <div
                    className="h-64 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}30 100%)` }}
                  >
                    {article.image && (
                      <Image
                        src={`${basePath}${article.image}`}
                        alt={article.author}
                        fill
                        className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {article.comingSoon && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                        <span className="px-5 py-2 bg-white/90 text-gray-900 text-sm font-bold uppercase tracking-widest rounded-full">
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold uppercase text-white z-10"
                      style={{ backgroundColor: accentColor }}
                    >
                      Challenge
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-medium text-gray-900 group-hover:text-[var(--gold)] transition-colors line-clamp-2 mb-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{article.author}</span>
                      <span className="text-xs text-gray-400">{article.affiliation}</span>
                    </div>
                  </div>
                </article>
              );
              return article.comingSoon ? (
                <div key={article.id} className="group cursor-default">{inner}</div>
              ) : (
                <Link key={article.id} href={`/notes-of-challenges/${article.id}`} className="group">{inner}</Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/notes-of-challenges"
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
