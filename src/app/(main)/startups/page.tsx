"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Rocket } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
    founderImage: "/images/notes/challenges/shantanu-pathak.png",
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
    founderImage: "/images/notes/challenges/viraj-kulkarni.png",
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
    founderImage: "",
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
    founderImage: "",
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

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
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
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
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

      {/* Start-up Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup) => (
              <Link key={startup.id} href={`/startups/${startup.id}`} className="group">
                <article className="h-full rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Avatar */}
                      {startup.founderImage ? (
                        <Image
                          src={basePath + startup.founderImage}
                          alt={startup.founder}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-light text-white flex-shrink-0"
                          style={{ backgroundColor: startup.color }}
                        >
                          {startup.name.charAt(0)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-[var(--gold)] transition-colors truncate">
                          {startup.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {startup.founder} · {startup.institution}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {startup.description}
                    </p>

                    {/* Sector Tag */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{ backgroundColor: `${startup.color}15`, color: startup.color }}
                      >
                        {startup.sector}
                      </span>
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
