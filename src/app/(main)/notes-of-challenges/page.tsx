import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes of Challenges",
  description:
    "Learning from obstacles and discovering how leaders turn their greatest challenges into opportunities for growth.",
};

const articles = [
  {
    id: "1",
    title: "Water Scarcity in Urban India: Engineering Solutions at Scale",
    excerpt:
      "With 21 Indian cities expected to run out of groundwater, researchers and civic leaders discuss scalable solutions from rainwater harvesting to desalination.",
    date: "Jan 20, 2026",
    author: "Dr. Shantanu Pathak",
    featured: true,
  },
  {
    id: "2",
    title: "Bridging the Rural-Urban Healthcare Gap",
    excerpt:
      "How telemedicine startups and ASHA workers are collaborating to bring specialist care to 600,000 villages across India.",
    date: "Jan 16, 2026",
    author: "Dr. Gagandeep Kang",
    featured: false,
  },
  {
    id: "3",
    title: "The Brain Drain Dilemma: Can India Retain Its Best Researchers?",
    excerpt:
      "An honest conversation about why top scientists leave India and what systemic changes could reverse the trend.",
    date: "Jan 12, 2026",
    author: "Prof. Ashutosh Sharma",
    featured: false,
  },
  {
    id: "4",
    title: "Climate Adaptation: Protecting Coastal Communities from Rising Seas",
    excerpt:
      "Mumbai, Chennai, and Kolkata face existential flooding risks. Scientists map out survival strategies for 40 million coastal residents.",
    date: "Jan 8, 2026",
    author: "Dr. Roxy Mathew Koll",
    featured: false,
  },
  {
    id: "5",
    title: "Antibiotic Resistance: India's Ticking Health Time Bomb",
    excerpt:
      "With over 58,000 newborns dying annually from drug-resistant infections, microbiologists urge immediate policy action.",
    date: "Jan 5, 2026",
    author: "Prof. Dipankar Chatterji",
    featured: false,
  },
];

export default function NotesOfChallengesPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-overline" style={{ color: "var(--gold)" }}>
              Notes of Challenges
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Confronting Hard Problems
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl">
              Discover how scientists and leaders tackle India&apos;s most pressing
              challenges — from water scarcity and public health to climate
              adaptation and research funding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-of-challenges/${featuredArticle.id}`}
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
                href={`/notes-of-challenges/${article.id}`}
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
