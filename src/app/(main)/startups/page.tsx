"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Rocket } from "lucide-react";

const startups = [
  {
    id: "1",
    name: "CareMother",
    founder: "Dr. Shantanu Pathak",
    institution: "IIT Bombay",
    description: "AI-powered maternal health monitoring device for rural India. Bridging the gap in prenatal care access.",
    link: "https://caremother.in",
    sector: "Healthcare",
    color: "#C54B4B",
    highlighted: true,
  },
  {
    id: "2",
    name: "IYASO",
    founder: "Viraj Kulkarni",
    institution: "Startup",
    description: "Data analytics platform for healthcare optimization and AI-driven diagnostics.",
    link: "https://iyaso.in",
    sector: "Healthcare AI",
    color: "#6B5B95",
    highlighted: false,
  },
  {
    id: "3",
    name: "NanoClean",
    founder: "Dr. Prateek Sharma",
    institution: "IIT Delhi",
    description: "Nanotechnology-based air purification solutions for urban environments.",
    link: "https://nanoclean.in",
    sector: "Clean Tech",
    color: "#D4A853",
    highlighted: false,
  },
  {
    id: "4",
    name: "AgriSense",
    founder: "Dr. Meera Gupta",
    institution: "IISc Bangalore",
    description: "IoT sensors for precision agriculture and crop monitoring at scale.",
    link: "https://agrisense.in",
    sector: "AgriTech",
    color: "#B8860B",
    highlighted: false,
  },
];

export default function StartupsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStartups = startups.filter((startup) =>
    startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    startup.founder.toLowerCase().includes(searchQuery.toLowerCase()) ||
    startup.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const highlighted = filteredStartups.find((s) => s.highlighted);
  const others = filteredStartups.filter((s) => !s.highlighted);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              Portfolio
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Start-ups
          </h1>
          <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            Science-based ventures and innovations from India&apos;s research ecosystem.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-4 bg-[var(--light)] border-b border-gray-200 sticky top-14 md:top-16 z-40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search start-ups, founders, or sectors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Highlighted Start-up (CareMother on top) */}
      {highlighted && !searchQuery && (
        <section className="py-10 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <Link href={`/startups/${highlighted.id}`} className="group block">
              <article className="rounded-xl overflow-hidden md:flex bg-[var(--light)] hover:shadow-xl transition-shadow">
                <div
                  className="h-48 md:h-auto md:w-1/3 relative overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${highlighted.color}20 0%, ${highlighted.color}40 100%)` }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-light text-white"
                    style={{ backgroundColor: highlighted.color }}
                  >
                    {highlighted.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <span
                    className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full w-fit mb-4"
                    style={{ backgroundColor: `${highlighted.color}20`, color: highlighted.color }}
                  >
                    Featured Start-up
                  </span>
                  <h2 className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-[var(--gold)] transition-colors mb-2">
                    {highlighted.name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {highlighted.description}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <Rocket size={14} />
                    <span>{highlighted.founder} · {highlighted.institution}</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* Start-up Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(searchQuery ? filteredStartups : others).map((startup) => (
              <Link key={startup.id} href={`/startups/${startup.id}`} className="group">
                <article className="rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Color accent line */}
                  <div className="h-1 w-full" style={{ backgroundColor: startup.color }} />
                  <div
                    className="aspect-[4/3] relative overflow-hidden flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${startup.color}15 0%, ${startup.color}30 100%)` }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-light text-white"
                      style={{ backgroundColor: startup.color }}
                    >
                      {startup.name.charAt(0)}
                    </div>
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                      style={{ backgroundColor: startup.color }}
                    >
                      {startup.sector}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {startup.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                      {startup.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Rocket size={14} className="text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{startup.founder}</p>
                        <p className="text-xs text-gray-400">{startup.institution}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">No start-ups found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
