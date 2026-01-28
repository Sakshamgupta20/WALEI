import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes of Moments",
  description:
    "Personal reflections from NRIs abroad. Stories of transition and cross-cultural identity. For those living change and finding meaning.",
};

const researchers = [
  {
    id: "1",
    name: "Dr. Bhaskar Paul",
    title: "Post Doctorate",
    institution: "MPI CEC, Germany",
    topic: "Catalysis at the Molecular Level",
    excerpt:
      "From IIT Kharagpur to Max Planck - navigating the transition from Indian academia to European research culture.",
    linkedIn: "https://linkedin.com/in/bhaskar-paul",
    featured: true,
  },
  {
    id: "2",
    name: "Dr. Richa Sharma",
    title: "Post Doctorate",
    institution: "Vrije Universiteit Brussel",
    topic: "Finding Home in Brussels",
    excerpt:
      "Building a research career while maintaining connections to roots - the dual identity of an Indian researcher in Belgium.",
    linkedIn: "https://linkedin.com/in/richa-sharma",
    featured: false,
  },
  {
    id: "3",
    name: "Dr. Kartikay Sharma",
    title: "Post Doctorate",
    institution: "MPI, Germany",
    topic: "The German Research Landscape",
    excerpt:
      "Adapting to the precision and structure of German academia after years in India&apos;s more flexible research environment.",
    linkedIn: "https://linkedin.com/in/kartikay-sharma",
    featured: false,
  },
  {
    id: "4",
    name: "Dr. Deepika Sardana",
    title: "Post Doctorate",
    institution: "EPFL, Switzerland",
    topic: "Alpine Perspectives on Science",
    excerpt:
      "Life at one of Europe&apos;s top technical universities - bridging Indian intuition with Swiss precision.",
    linkedIn: "https://linkedin.com/in/deepika-sardana",
    featured: false,
  },
];

export default function NotesOfMomentsPage() {
  const featuredResearcher = researchers.find((r) => r.featured);
  const otherResearchers = researchers.filter((r) => !r.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <span className="text-overline" style={{ color: "var(--accent-moments)" }}>
              Notes of Moments
            </span>
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              Living Between Places, Becoming Across Borders
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl">
              Personal reflections from NRIs abroad. Stories of transition and
              cross-cultural identity. For those living change and finding meaning.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredResearcher && (
        <section className="py-8 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <a
              href={featuredResearcher.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="rounded-lg overflow-hidden md:flex" style={{ backgroundColor: "var(--light)" }}>
                <div className="h-48 md:h-auto md:w-1/2 bg-gradient-to-br from-purple-200 to-purple-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-purple-400" />
                  </div>
                </div>
                <div className="p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
                  <span className="text-overline" style={{ color: "var(--accent-moments)" }}>
                    Featured
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-[var(--accent-moments)] transition-colors">
                    {featuredResearcher.topic}
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {featuredResearcher.excerpt}
                  </p>
                  <div className="mt-4 text-sm">
                    <span className="font-medium text-gray-900">{featuredResearcher.name}</span>
                    <span className="text-gray-500"> · {featuredResearcher.title}</span>
                    <p className="text-gray-400 text-xs mt-1">{featuredResearcher.institution}</p>
                  </div>
                </div>
              </article>
            </a>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-normal text-gray-900">All Stories</h2>
            <p className="text-xs text-gray-500">{researchers.length} stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherResearchers.map((researcher) => (
              <a
                key={researcher.id}
                href={researcher.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <article className="rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-purple-300 group-hover:scale-105 transition-transform" />
                  </div>
                  <div
                    className="p-5 border-t-4"
                    style={{ borderTopColor: "var(--accent-moments)" }}
                  >
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">
                      {researcher.topic}
                    </h3>
                    <p className="text-base font-normal text-gray-800">{researcher.name}</p>
                    <p className="text-sm text-gray-500">{researcher.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{researcher.institution}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
