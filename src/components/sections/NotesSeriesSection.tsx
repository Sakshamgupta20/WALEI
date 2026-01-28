import Link from "next/link";
import { ArrowRight } from "lucide-react";

const notesSeries = [
  {
    name: "Notes of Future",
    tagline: "Long-view legacy for what comes next",
    description:
      "Scientists' reflections shaping their disciplines. Insights that guide the questions ahead. For those seeking depth beyond fleeting trends.",
    href: "/notes-of-future",
    color: "#D4A853",
    icon: "F",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(212, 168, 83, 0.15) 0%, transparent 50%)",
  },
  {
    name: "Notes of Challenges",
    tagline: "From ideas to resilience beyond labs",
    description:
      "Honest accounts of building science ventures. Early hurdles, quiet pivots, uncertain decisions. For those scaling ideas beyond labs.",
    href: "/notes-of-challenges",
    color: "#C54B4B",
    icon: "C",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(197, 75, 75, 0.15) 0%, transparent 50%)",
  },
  {
    name: "Notes of Moments",
    tagline: "Living between places, becoming across borders",
    description:
      "Personal reflections from NRIs abroad. Stories of transition and cross-cultural identity. For those living change and finding meaning.",
    href: "/notes-of-moments",
    color: "#6B5B95",
    icon: "M",
    bgPattern: "radial-gradient(circle at 80% 20%, rgba(107, 91, 149, 0.15) 0%, transparent 50%)",
  },
];

export function NotesSeriesSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--light)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
            Explore the Notes Series
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Three distinct perspectives on science, innovation, and the human journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {notesSeries.map((series) => (
            <Link
              key={series.name}
              href={series.href}
              className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: series.color }}
              />

              {/* Card content */}
              <div
                className="p-8 relative min-h-[320px] flex flex-col"
                style={{ background: series.bgPattern }}
              >
                {/* Large letter watermark */}
                <div
                  className="absolute top-4 right-4 text-[120px] font-light leading-none opacity-5 select-none"
                  style={{ color: series.color }}
                >
                  {series.icon}
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {series.name}
                  </h3>

                  <p
                    className="text-sm italic mb-4 font-medium"
                    style={{ color: series.color }}
                  >
                    {series.tagline}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed flex-1">
                    {series.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                      style={{ color: series.color }}
                    >
                      Explore stories
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--gold)" }}>50+</p>
              <p className="text-sm text-gray-500 mt-1">Published Notes</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--teal)" }}>30+</p>
              <p className="text-sm text-gray-500 mt-1">Distinguished Scientists</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--accent-challenges)" }}>15+</p>
              <p className="text-sm text-gray-500 mt-1">Startup Stories</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--accent-moments)" }}>20+</p>
              <p className="text-sm text-gray-500 mt-1">NRI Journeys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
