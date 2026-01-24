import Link from "next/link";

const newsItems = [
  {
    category: "Climate Science",
    title: "Accelerating Carbon Capture: New Frontiers",
    excerpt:
      "Recent breakthroughs in carbon capture technology offer new pathways for addressing global climate challenges and achieving net-zero emissions.",
    date: "January 18, 2026",
    slug: "carbon-capture-frontiers",
  },
  {
    category: "Artificial Intelligence",
    title: "Ethics in AI: Building Responsible Frameworks",
    excerpt:
      "Leading AI researchers propose comprehensive ethical guidelines for the development of autonomous systems and machine learning applications.",
    date: "January 15, 2026",
    slug: "ethics-in-ai",
  },
  {
    category: "Public Health",
    title: "Global Vaccine Equity: Pandemic Lessons",
    excerpt:
      "Analysis of vaccine distribution patterns reveals critical insights for future pandemic preparedness and healthcare infrastructure.",
    date: "January 12, 2026",
    slug: "vaccine-equity",
  },
];

export function LatestNews() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="border-t border-gray-200 pt-12 mb-12">
          <span
            className="text-overline"
            style={{ color: "var(--teal)" }}
          >
            Latest News
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">Stay Informed</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Discover the latest scientific insights and policy recommendations
            from leading researchers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Link
              href={`/notes-of-future/${item.slug}`}
              key={index}
              className="group cursor-pointer"
            >
              <article>
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <span
                  className="text-overline"
                  style={{ color: "var(--gold)" }}
                >
                  {item.category}
                </span>

                <h3 className="text-lg md:text-xl font-light mb-3 group-hover:text-[var(--teal)] transition-colors" style={{ letterSpacing: "-0.01em" }}>
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-4" style={{ lineHeight: "1.6" }}>
                  {item.excerpt}
                </p>

                <span className="text-sm text-gray-500">{item.date}</span>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notes-of-future"
            className="inline-block px-10 py-4 border-2 rounded-lg font-semibold hover:bg-[var(--teal)] hover:text-white transition-all text-base"
            style={{ borderColor: "var(--teal)", color: "var(--teal)", letterSpacing: "0.01em" }}
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
