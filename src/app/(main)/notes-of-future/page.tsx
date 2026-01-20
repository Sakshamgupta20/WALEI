import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Notes of Future",
  description:
    "Exploring tomorrow's possibilities through conversations with visionary leaders shaping the future.",
};

// Placeholder articles - will be replaced with Sanity data
const articles = [
  {
    id: "1",
    title: "The Future of AI in Education: A Conversation with Leading Researchers",
    excerpt:
      "Exploring how artificial intelligence is reshaping learning experiences and opening new frontiers in educational technology.",
    date: "Jan 18, 2026",
    author: "Prof. V Ramgopal Rao",
    featured: true,
  },
  {
    id: "2",
    title: "Sustainable Innovation: Balancing Growth and Responsibility",
    excerpt:
      "Industry leaders discuss how to drive innovation while maintaining environmental and social responsibility.",
    date: "Jan 15, 2026",
    author: "Dr. Aisha Sharma",
    featured: false,
  },
  {
    id: "3",
    title: "The Next Decade of Space Technology",
    excerpt:
      "How private companies and researchers are pushing the boundaries of space exploration.",
    date: "Jan 12, 2026",
    author: "Dr. Rajesh Menon",
    featured: false,
  },
  {
    id: "4",
    title: "Quantum Computing: From Theory to Practice",
    excerpt:
      "Understanding the journey from laboratory breakthroughs to real-world quantum applications.",
    date: "Jan 10, 2026",
    author: "Prof. Sunita Verma",
    featured: false,
  },
  {
    id: "5",
    title: "The Evolution of Digital Healthcare",
    excerpt:
      "How technology is transforming patient care and medical research in unprecedented ways.",
    date: "Jan 8, 2026",
    author: "Dr. Amit Patel",
    featured: false,
  },
  {
    id: "6",
    title: "Building the Cities of Tomorrow",
    excerpt:
      "Urban planners and technologists share their vision for sustainable, smart cities.",
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
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-walei-blue-50 to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="default" size="lg" className="mb-4">
              Notes of Future
            </Badge>
            <h1 className="font-serif text-display-2 md:text-display-1 text-gray-900">
              Exploring Tomorrow
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Conversations with visionary leaders who are shaping what comes
              next—from technology and science to business and society.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-8 bg-white">
          <Container>
            <Link
              href={`/notes-of-future/${featuredArticle.id}`}
              className="group block"
            >
              <article className="bg-walei-smoke rounded-2xl overflow-hidden md:flex">
                {/* Image Placeholder */}
                <div className="h-64 md:h-auto md:w-1/2 bg-gradient-to-br from-walei-blue-200 to-walei-blue-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-8xl font-serif opacity-30">
                      W
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                  <Badge variant="gold" size="sm" className="self-start mb-4">
                    Featured
                  </Badge>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-walei-blue-600 transition-colors">
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
                href={`/notes-of-future/${article.id}`}
                className="group"
              >
                <article className="bg-walei-pale rounded-xl overflow-hidden hover:shadow-deep transition-shadow">
                  {/* Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-walei-blue-100 to-walei-blue-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-walei-blue-300 text-5xl font-serif">
                        W
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-walei-blue-600 transition-colors line-clamp-2">
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
