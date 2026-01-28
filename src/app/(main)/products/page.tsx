"use client";

import { useState } from "react";
import { Search, ArrowUpRight, Rocket } from "lucide-react";

const products = [
  {
    id: "1",
    name: "CareMother",
    founder: "Dr. Shantanu Pathak",
    institution: "IIT Bombay",
    description: "AI-powered maternal health monitoring device for rural India",
    link: "https://caremother.in",
    domain: "Healthcare",
    color: "#C54B4B",
  },
  {
    id: "2",
    name: "IYASO",
    founder: "Viraj Kulkarni",
    institution: "Startup",
    description: "Data analytics platform for healthcare optimization",
    link: "https://iyaso.in",
    domain: "Healthcare AI",
    color: "#6B5B95",
  },
  {
    id: "3",
    name: "NanoClean",
    founder: "Dr. Prateek Sharma",
    institution: "IIT Delhi",
    description: "Nanotechnology-based air purification solutions",
    link: "https://nanoclean.in",
    domain: "Clean Tech",
    color: "#007A8C",
  },
  {
    id: "4",
    name: "AgriSense",
    founder: "Dr. Meera Gupta",
    institution: "IISc Bangalore",
    description: "IoT sensors for precision agriculture and crop monitoring",
    link: "https://agrisense.in",
    domain: "AgriTech",
    color: "#D4A853",
  },
];

const domains = ["All", "Healthcare", "Healthcare AI", "Clean Tech", "AgriTech"];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.founder.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === "All" || product.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

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
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--accent-challenges)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--accent-challenges)" }}>
              Innovation Hub
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Products in Highlight
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Startups and innovations from India&apos;s research ecosystem.
            Discover products transforming industries and shaping the future.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 bg-[var(--light)] border-b border-gray-200 sticky top-14 md:top-16 z-40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products or founders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all"
              />
            </div>

            {/* Domain Filter */}
            <div className="flex gap-2 flex-wrap">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-xl border-2 transition-all ${
                    selectedDomain === domain
                      ? "bg-[var(--teal)] text-white border-[var(--teal)]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[var(--teal)] hover:text-[var(--teal)]"
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="aspect-[3/2] relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${product.color}20 0%, ${product.color}40 100%)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-light text-white"
                      style={{ backgroundColor: product.color }}
                    >
                      {product.name.charAt(0)}
                    </div>
                  </div>
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.domain}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--teal)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Rocket size={14} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{product.founder}</p>
                      <p className="text-xs text-gray-400">{product.institution}</p>
                    </div>
                  </div>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal)] hover:gap-3 transition-all"
                  >
                    Visit Website <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
