"use client";

import { useState } from "react";
import { Search, CheckCircle, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const gigs = [
  {
    id: "1",
    name: "Dr. Shantanu Pathak",
    verified: true,
    description:
      "Health-tech innovation consultant with 15+ years in medical devices and maternal care technology.",
    services: ["Consulting", "Medical Devices", "Health-Tech"],
    image: "/images/notes/challenges/shantanu-pathak.png",
  },
  {
    id: "2",
    name: "Prof. Suman Chakraborty",
    verified: true,
    description:
      "Fluid mechanics expert offering research collaboration and academic mentorship.",
    services: ["Research", "Mentorship", "Fluid Mechanics"],
    image: "/images/notes/future/suman-chakraborty.png",
  },
  {
    id: "3",
    name: "Viraj Kulkarni",
    verified: true,
    description:
      "Data analytics leader specializing in healthcare optimization and AI-driven solutions.",
    services: ["Data Analytics", "Healthcare AI", "Strategy"],
    image: "/images/notes/challenges/viraj-kulkarni.png",
  },
  {
    id: "4",
    name: "Dr. Richa Sharma",
    verified: false,
    description:
      "Environmental science researcher focused on sustainability and policy advocacy.",
    services: ["Research", "Sustainability", "Policy"],
    image: "/images/notes/movements/richa-sharma.png",
  },
  {
    id: "5",
    name: "Dr. Bhaskar Paul",
    verified: true,
    description:
      "Chemical engineering specialist with expertise in catalysis and green chemistry.",
    services: ["Chemical Engineering", "Green Tech", "R&D"],
    image: "/images/notes/movements/bhaskar-paul.jpg",
  },
  {
    id: "6",
    name: "Raman Kumar",
    verified: false,
    description:
      "Technology strategist bridging academic research with industry applications.",
    services: ["Strategy", "Tech Transfer", "Innovation"],
    image: "/images/team/raman.jpg",
  },
];

export default function GigsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGigs = gigs.filter((gig) => {
    const query = searchQuery.toLowerCase();
    return (
      gig.name.toLowerCase().includes(query) ||
      gig.description.toLowerCase().includes(query) ||
      gig.services.some((s) => s.toLowerCase().includes(query))
    );
  });

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
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Talent Network
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-6">
            Foundry
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Connect with verified experts for consulting, research collaboration, and specialized services.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-4 bg-[var(--light)] border-b border-gray-200 sticky top-14 md:top-16 z-40">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="relative max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search experts, services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Gigs Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGigs.map((gig) => (
              <Link key={gig.id} href={`/gigs/${gig.id}`} className="group">
                <article className="h-full rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Card Header */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Avatar */}
                      {gig.image ? (
                        <Image
                          src={basePath + gig.image}
                          alt={gig.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/40 flex items-center justify-center flex-shrink-0">
                          <User size={24} className="text-[var(--gold)]" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-semibold text-gray-900 group-hover:text-[var(--gold)] transition-colors truncate">
                            {gig.name}
                          </h3>
                          {gig.verified && (
                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-[10px] font-bold uppercase flex-shrink-0">
                              <CheckCircle size={10} />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {gig.description}
                    </p>

                    {/* Service Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {gig.services.map((service) => (
                        <span
                          key={service}
                          className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredGigs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">
                No results found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
