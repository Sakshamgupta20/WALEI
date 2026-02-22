import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

// Placeholder articles - will be replaced with Sanity data
const placeholderArticles = [
  {
    id: 1,
    title: "Innovation in the Age of AI: A Conversation with Leading Researchers",
    excerpt:
      "Exploring how artificial intelligence is reshaping research methodologies and opening new frontiers in scientific discovery.",
    category: "Notes of Future",
    categorySlug: "notes-of-future",
    date: "Jan 18, 2026",
    author: "Prof. V Ramgopal Rao",
  },
  {
    id: 2,
    title: "Building Resilience: Lessons from Entrepreneurial Journeys",
    excerpt:
      "Founders share their experiences of navigating uncertainty and building companies that stand the test of time.",
    category: "Notes of Challenges",
    categorySlug: "notes-of-challenges",
    date: "Jan 16, 2026",
    author: "Dr. Shantanu Pathak",
  },
  {
    id: 3,
    title: "The Future of Higher Education in India",
    excerpt:
      "How institutions are adapting to meet the demands of a rapidly evolving job market and technological landscape.",
    category: "Notes to Leaders",
    categorySlug: "notes-to-leaders",
    date: "Jan 14, 2026",
    author: "Prof. Dipankar Chatterji",
  },
  {
    id: 4,
    title: "Sustainable Innovation: Balancing Growth and Responsibility",
    excerpt:
      "Industry leaders discuss how to drive innovation while maintaining environmental and social responsibility.",
    category: "Notes of Future",
    categorySlug: "notes-of-future",
    date: "Jan 12, 2026",
    author: "Dr. Aisha Sharma",
  },
];

export function LatestArticles() {
  return (
    <section className="py-16 md:py-24 bg-[var(--light)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-headline md:text-display-2 text-gray-900">
              Latest from WALEI
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              Fresh insights and conversations with thought leaders
            </p>
          </div>
          <Link href="/notes" className="mt-6 md:mt-0">
            <Button variant="secondary" size="lg">
              View All Articles
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {placeholderArticles.map((article, index) => (
            <article
              key={article.id}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Link
                href={`/${article.categorySlug}/${article.id}`}
                className={`block ${index === 0 ? "md:flex" : ""}`}
              >
                {/* Image Placeholder */}
                <div
                  className={`relative bg-gradient-to-br from-gray-100 to-gray-200 ${
                    index === 0
                      ? "h-48 md:h-auto md:w-1/2"
                      : "h-40"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-300 text-6xl font-serif opacity-50">
                      W
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`p-6 ${
                    index === 0 ? "md:w-1/2 md:p-8 md:flex md:flex-col md:justify-center" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="outline" size="sm">
                      {article.category}
                    </Badge>
                    <time className="text-xs text-gray-500">{article.date}</time>
                  </div>

                  <h3
                    className={`font-serif font-semibold text-gray-900 group-hover:text-[var(--gold)] transition-colors ${
                      index === 0 ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`mt-3 text-gray-600 line-clamp-2 ${
                      index === 0 ? "md:line-clamp-3" : ""
                    }`}
                  >
                    {article.excerpt}
                  </p>

                  <p className="mt-4 text-sm text-gray-500">
                    By{" "}
                    <span className="font-medium text-gray-700">
                      {article.author}
                    </span>
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
