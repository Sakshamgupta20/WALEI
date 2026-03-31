import Link from "next/link";

const newsItems = [
  {
    category: "Climate Science",
    title: "India's Green Hydrogen Mission: A Blueprint for Energy Independence",
    excerpt:
      "How India's $2.3 billion National Green Hydrogen Mission could reshape the global energy landscape and reduce carbon emissions by 50 million tonnes annually.",
    date: "January 22, 2026",
    slug: "india-green-hydrogen-mission",
    readTime: "8 min read",
  },
  {
    category: "Artificial Intelligence",
    title: "Ethics in AI: Building Responsible Frameworks for Autonomous Systems",
    excerpt:
      "Leading AI researchers from IITs and global institutions propose comprehensive ethical guidelines for autonomous systems and machine learning governance.",
    date: "January 18, 2026",
    slug: "ethics-in-ai",
    readTime: "6 min read",
  },
  {
    category: "Public Health",
    title: "Pandemic Preparedness: Lessons from India's Vaccination Drive",
    excerpt:
      "Analysis of the world's largest vaccination campaign reveals critical insights for future pandemic preparedness and global health equity strategies.",
    date: "January 15, 2026",
    slug: "pandemic-preparedness",
    readTime: "10 min read",
  },
];

export function LatestNews() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="border-t border-gray-200 pt-10 mb-10">
          <span className="text-overline" style={{ color: "var(--gold)" }}>
            Latest News
          </span>
          <h2 className="text-2xl md:text-3xl font-light mb-3">Stay Informed</h2>
          <p className="text-sm text-gray-500 max-w-xl">
            Discover the latest scientific insights and policy recommendations
            from leading researchers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {newsItems.map((item, index) => (
            <Link
              href={`/notes-of-future/${item.slug}`}
              key={index}
              className="group"
            >
              <article>
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-500" />
                </div>

                <span className="text-overline" style={{ color: "var(--gold)", marginBottom: "8px" }}>
                  {item.category}
                </span>

                <h3 className="text-base font-normal mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <span className="text-xs text-gray-300">&middot;</span>
                  <span className="text-xs text-gray-400">{item.readTime}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notes-of-future"
            className="inline-block px-6 py-2.5 border rounded-md font-semibold text-sm hover:bg-[var(--gold)] hover:text-white hover:border-[var(--gold)] transition-all"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
