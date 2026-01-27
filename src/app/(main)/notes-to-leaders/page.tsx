import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes to Leaders",
  description:
    "Wisdom and insights for aspiring and established leaders, distilled from decades of experience and reflection.",
};

const articles = [
  {
    id: "1",
    title: "Reimagining Higher Education: NEP 2020 Five Years On",
    excerpt:
      "How India's National Education Policy is transforming research universities, and what challenges remain in implementation across 40,000 institutions.",
    date: "Jan 20, 2026",
    author: "Prof. Dipankar Chatterji",
    featured: true,
  },
  {
    id: "2",
    title: "Science Diplomacy: India's Role in Global Research Governance",
    excerpt:
      "How Indian scientists are shaping international policy frameworks on climate, AI, and biosecurity through multilateral forums.",
    date: "Jan 16, 2026",
    author: "Dr. K. VijayRaghavan",
    featured: false,
  },
  {
    id: "3",
    title: "Funding Basic Research: Why India Must Double Its R&D Spend",
    excerpt:
      "At 0.7% of GDP, India's R&D spending lags behind peers. Scientists present a roadmap to reach 2% by 2030.",
    date: "Jan 12, 2026",
    author: "Prof. Ashutosh Sharma",
    featured: false,
  },
  {
    id: "4",
    title: "Women in STEM: Breaking Barriers in Indian Science",
    excerpt:
      "Only 14% of STEM researchers in India are women. Leaders discuss systemic changes needed to close the gap.",
    date: "Jan 8, 2026",
    author: "Dr. Gagandeep Kang",
    featured: false,
  },
  {
    id: "5",
    title: "Building Innovation Ecosystems: Lessons from Bangalore and Hyderabad",
    excerpt:
      "What India's top tech hubs can teach other cities about nurturing deep-tech startups and research commercialization.",
    date: "Jan 4, 2026",
    author: "Dr. Kiran Mazumdar-Shaw",
    featured: false,
  },
];

export default function NotesToLeadersPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-overline" style={{ color: "var(--teal)" }}>
              Notes to Leaders
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Policy & Leadership
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl">
              Evidence-based recommendations for India&apos;s policymakers — from
              research funding and education reform to science diplomacy and
              innovation ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-to-leaders/${featuredArticle.id}`}
              className="group block"
            >
              <article className="rounded-lg overflow-hidden md:flex" style={{ backgroundColor: "var(--light)" }}>
                <div className="h-48 md:h-auto md:w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl opacity-30">W</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
                  <span className="text-overline" style={{ color: "var(--gold)" }}>
                    Featured
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-[var(--teal)] transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">
                      {featuredArticle.author}
                    </span>
                    <span>&middot;</span>
                    <time>{featuredArticle.date}</time>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-normal text-gray-900">
              All Articles
            </h2>
            <p className="text-xs text-gray-500">{articles.length} articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/notes-to-leaders/${article.id}`}
                className="group"
              >
                <article className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="h-36 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-400 text-4xl">W</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-normal text-gray-900 group-hover:text-[var(--teal)] transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-gray-700 font-medium">
                        {article.author}
                      </span>
                      <time className="text-gray-400">{article.date}</time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
