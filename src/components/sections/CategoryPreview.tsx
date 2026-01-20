import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { navigation } from "@/lib/constants/navigation";

// Placeholder article data - will be replaced with Sanity data
const placeholderArticles = {
  "notes-of-future": [
    {
      id: 1,
      title: "The Future of AI in Education",
      excerpt: "How artificial intelligence is reshaping learning experiences...",
      date: "Jan 15, 2026",
    },
    {
      id: 2,
      title: "Sustainable Innovation Trends",
      excerpt: "Emerging technologies driving environmental change...",
      date: "Jan 12, 2026",
    },
  ],
  "notes-of-challenges": [
    {
      id: 1,
      title: "Navigating Uncertainty in Startups",
      excerpt: "Lessons from founders who turned obstacles into opportunities...",
      date: "Jan 14, 2026",
    },
    {
      id: 2,
      title: "Building Resilient Teams",
      excerpt: "How leaders foster adaptability in challenging times...",
      date: "Jan 10, 2026",
    },
  ],
  "notes-to-leaders": [
    {
      id: 1,
      title: "The Art of Decisive Leadership",
      excerpt: "Making impactful decisions under pressure...",
      date: "Jan 13, 2026",
    },
    {
      id: 2,
      title: "Cultivating Innovation Culture",
      excerpt: "Creating environments where breakthrough ideas flourish...",
      date: "Jan 8, 2026",
    },
  ],
};

export function CategoryPreview() {
  return (
    <section className="py-16 md:py-24 bg-walei-smoke">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-headline md:text-display-2 text-gray-900">
            Explore Our Categories
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover insights across different dimensions of thought leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {navigation.categories.map((category) => {
            const slug = category.href.replace("/", "") as keyof typeof placeholderArticles;
            const articles = placeholderArticles[slug] || [];

            return (
              <div
                key={category.name}
                className="bg-white rounded-xl p-6 shadow-natural hover:shadow-deep transition-shadow"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <Badge variant="default" size="lg">
                    {category.name}
                  </Badge>
                  <p className="mt-3 text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>

                {/* Article List */}
                <div className="space-y-4 mb-6">
                  {articles.map((article) => (
                    <article key={article.id} className="group">
                      <Link
                        href={`${category.href}/${article.id}`}
                        className="block"
                      >
                        <h3 className="font-serif font-semibold text-gray-900 group-hover:text-walei-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <time className="mt-2 text-xs text-gray-400 block">
                          {article.date}
                        </time>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* View All Link */}
                <Link
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-walei-blue-600 hover:text-walei-blue-700 transition-colors group"
                >
                  View all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
