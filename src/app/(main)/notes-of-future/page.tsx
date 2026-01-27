import { Metadata } from "next";
import Link from "next/link";

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
    featured: true,
  },
  {
    id: "2",
    title: "The Future of AI in Education: Reimagining How India Learns",
    excerpt:
      "Exploring how artificial intelligence is reshaping learning experiences for 300 million Indian students, from rural classrooms to elite institutions.",
    date: "Jan 18, 2026",
    author: "Dr. Aisha Sharma",
    featured: false,
  },
  {
    id: "3",
    title: "Green Hydrogen: India's Path to Energy Independence",
    excerpt:
      "How the National Green Hydrogen Mission could position India as a global clean energy leader and reduce imports by $12 billion annually.",
    date: "Jan 15, 2026",
    author: "Dr. Rajesh Menon",
    featured: false,
  },
  {
    id: "4",
    title: "Quantum Computing: India's Silent Revolution",
    excerpt:
      "From IISc to TIFR, Indian researchers are making breakthroughs in quantum error correction that could redefine computing within a decade.",
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
      "Three Indian cities leading the smart urban transformation share what worked, what didn't, and what comes next.",
    date: "Jan 5, 2026",
    author: "Architect Priya Nair",
    featured: false,
  },
];

export default function NotesOfFuturePage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-overline" style={{ color: "var(--teal)" }}>
              Notes of Future
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Exploring Tomorrow
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl">
              Conversations with visionary leaders who are shaping what comes
              next — from semiconductor policy and AI governance to clean energy
              and digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link
              href={`/notes-of-future/${featuredArticle.id}`}
              className="group block"
            >
              <article className="rounded-lg overflow-hidden md:flex" style={{ backgroundColor: "var(--light)" }}>
                <div className="h-48 md:h-auto md:w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-6xl opacity-30">
                      W
                    </span>
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
                href={`/notes-of-future/${article.id}`}
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
