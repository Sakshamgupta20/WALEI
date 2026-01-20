import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Notes of Challenges",
  description:
    "Learning from obstacles and discovering how leaders turn their greatest challenges into opportunities for growth.",
};

// Placeholder articles - will be replaced with Sanity data
const articles = [
  {
    id: "1",
    title: "Building Resilience: Lessons from Entrepreneurial Journeys",
    excerpt:
      "Founders share their experiences of navigating uncertainty and building companies that stand the test of time.",
    date: "Jan 16, 2026",
    author: "Dr. Shantanu Pathak",
    featured: true,
  },
  {
    id: "2",
    title: "Navigating Uncertainty in Startups",
    excerpt:
      "How successful entrepreneurs learned to embrace ambiguity and turn it into their greatest advantage.",
    date: "Jan 14, 2026",
    author: "Vikram Sharma",
    featured: false,
  },
  {
    id: "3",
    title: "The Pivot That Saved Our Company",
    excerpt:
      "A candid conversation about recognizing when to change direction and having the courage to do it.",
    date: "Jan 11, 2026",
    author: "Meera Krishnan",
    featured: false,
  },
  {
    id: "4",
    title: "Leading Through Crisis: A CEO's Perspective",
    excerpt:
      "Lessons learned from guiding a team through unprecedented challenges and emerging stronger.",
    date: "Jan 8, 2026",
    author: "Arjun Reddy",
    featured: false,
  },
  {
    id: "5",
    title: "From Failure to Fortune: Rebuilding After Setback",
    excerpt:
      "The story of how one entrepreneur turned their biggest failure into their greatest success.",
    date: "Jan 5, 2026",
    author: "Priya Malhotra",
    featured: false,
  },
];

export default function NotesOfChallengesPage() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-amber-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="gold" size="lg" className="mb-4">
              Notes of Challenges
            </Badge>
            <h1 className="font-serif text-display-2 md:text-display-1 text-gray-900">
              Learning from Obstacles
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Discover how leaders turn their greatest challenges into
              opportunities for growth, innovation, and transformation.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <Container>
            <Link
              href={`/notes-of-challenges/${featuredArticle.id}`}
              className="group block"
            >
              <article className="bg-amber-50 rounded-2xl overflow-hidden md:flex">
                <div className="h-64 md:h-auto md:w-1/2 bg-gradient-to-br from-amber-200 to-amber-300 relative">
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
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-walei-gold-dark transition-colors">
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
                href={`/notes-of-challenges/${article.id}`}
                className="group"
              >
                <article className="bg-walei-pale rounded-xl overflow-hidden hover:shadow-deep transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-amber-100 to-amber-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-amber-300 text-5xl font-serif">
                        W
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-walei-gold-dark transition-colors line-clamp-2">
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
