import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Notes to Leaders",
  description:
    "Wisdom and insights for aspiring and established leaders, distilled from decades of experience and reflection.",
};

// Placeholder articles - will be replaced with Sanity data
const articles = [
  {
    id: "1",
    title: "The Future of Higher Education in India",
    excerpt:
      "How institutions are adapting to meet the demands of a rapidly evolving job market and technological landscape.",
    date: "Jan 14, 2026",
    author: "Prof. Dipankar Chatterji",
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Decisive Leadership",
    excerpt:
      "Making impactful decisions under pressure while maintaining clarity and purpose.",
    date: "Jan 12, 2026",
    author: "Ravi Shankar",
    featured: false,
  },
  {
    id: "3",
    title: "Cultivating Innovation Culture",
    excerpt:
      "Creating environments where breakthrough ideas can flourish and teams can thrive.",
    date: "Jan 10, 2026",
    author: "Dr. Ananya Desai",
    featured: false,
  },
  {
    id: "4",
    title: "Building Teams That Last",
    excerpt:
      "The secrets to assembling and retaining high-performing teams in competitive markets.",
    date: "Jan 7, 2026",
    author: "Kiran Bedi",
    featured: false,
  },
  {
    id: "5",
    title: "The Power of Authentic Leadership",
    excerpt:
      "Why being true to yourself is the foundation of effective leadership.",
    date: "Jan 4, 2026",
    author: "Sudha Murthy",
    featured: false,
  },
];

export default function NotesToLeadersPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-emerald-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="default" size="lg" className="mb-4 bg-emerald-100 text-emerald-700">
              Notes to Leaders
            </Badge>
            <h1 className="font-serif text-display-2 md:text-display-1 text-gray-900">
              Wisdom for Leaders
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Insights and guidance for aspiring and established leaders,
              distilled from decades of experience across industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <Container>
            <Link
              href={`/notes-to-leaders/${featuredArticle.id}`}
              className="group block"
            >
              <article className="bg-emerald-50 rounded-2xl overflow-hidden md:flex">
                <div className="h-64 md:h-auto md:w-1/2 bg-gradient-to-br from-emerald-200 to-emerald-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-8xl font-serif opacity-30">
                      W
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <Badge variant="gold" size="sm" className="self-start mb-4">
                    Featured
                  </Badge>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="mt-4 text-gray-600 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">
                      {featuredArticle.author}
                    </span>
                    <span>&middot;</span>
                    <time>{featuredArticle.date}</time>
                  </div>
                </div>
              </article>
            </Link>
          </Container>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-xl font-semibold text-gray-900">
              All Articles
            </h2>
            <p className="text-sm text-gray-500">{articles.length} articles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/notes-to-leaders/${article.id}`}
                className="group"
              >
                <article className="bg-walei-pale rounded-xl overflow-hidden hover:shadow-deep transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-emerald-300 text-5xl font-serif">
                        W
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-gray-700 font-medium">
                        {article.author}
                      </span>
                      <time className="text-gray-500">{article.date}</time>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
