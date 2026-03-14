import Link from "next/link";
import { ArrowRight, Scale, Briefcase, Triangle } from "lucide-react";

export function MilieuSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900">
            Milieu
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Patents card */}
            <Link
              href="/patents"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Scale size={20} className="text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Patents</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  A collection of registered intellectual properties ready for licensing and deployment.
                </p>
              </div>
              <ArrowRight
                size={16}
                className="text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0"
              />
            </Link>

            {/* Gigs & Micro-Tasks card */}
            <Link
              href="/gigs"
              className="group flex items-center gap-4 p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Briefcase size={20} className="text-gray-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">Gigs & Micro-Tasks</h3>
                <p className="text-sm text-gray-500">
                  Short-term research solutions for specialized research projects.
                </p>
              </div>
              <span className="text-sm font-semibold text-[var(--accent-challenges)] flex-shrink-0">
                42 New
              </span>
            </Link>
          </div>

          {/* Right column - Startups featured card */}
          <Link
            href="/startups"
            className="group relative rounded-2xl overflow-hidden bg-gray-900 p-8 flex flex-col justify-between min-h-[280px] hover:shadow-2xl transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Triangle size={16} className="text-white" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Startups
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
                High-Growth Frontiers
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Incubating the next generation of deep-tech ventures transforming laboratory breakthroughs into market-ready solutions.
              </p>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-challenges)] text-white text-xs font-bold uppercase tracking-wider group-hover:opacity-90 transition-opacity">
                Explore Ventures
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
