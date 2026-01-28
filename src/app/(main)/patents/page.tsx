"use client";

import { useState } from "react";
import { Search, FileText, CheckCircle, Clock, User } from "lucide-react";

const patents = [
  {
    id: "1",
    title: "Nano-scale Drug Delivery System",
    patentNo: "IN202341045678",
    inventor: "Dr. Suman Chakraborty",
    institution: "IIT Kharagpur",
    domain: "Biomedical Engineering",
    status: "Granted",
  },
  {
    id: "2",
    title: "AI-Powered Diagnostic Tool for Tuberculosis",
    patentNo: "IN202341098765",
    inventor: "Dr. Gagandeep Kang",
    institution: "CMC Vellore",
    domain: "Healthcare AI",
    status: "Pending",
  },
  {
    id: "3",
    title: "Solar-Powered Water Purification Device",
    patentNo: "IN202241012345",
    inventor: "Prof. Ashutosh Sharma",
    institution: "IIT Kanpur",
    domain: "Clean Technology",
    status: "Granted",
  },
  {
    id: "4",
    title: "Microfluidic Chip for Point-of-Care Testing",
    patentNo: "IN202341056789",
    inventor: "Dr. Shantanu Pathak",
    institution: "CareMother",
    domain: "Medical Devices",
    status: "Granted",
  },
];

const domains = ["All", "Biomedical Engineering", "Healthcare AI", "Clean Technology", "Medical Devices"];

export default function PatentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredPatents = patents.filter((patent) => {
    const matchesSearch =
      patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patent.inventor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDomain = selectedDomain === "All" || patent.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--teal)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--teal)" }}>
              Research IP
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Patents Database
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Innovations from India&apos;s leading research institutions. Explore patents
            available for licensing and collaboration.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-[var(--light)] border-b border-gray-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search patents or inventors..."
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

      {/* Patent Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPatents.map((patent) => (
              <article
                key={patent.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--teal)]/10 to-[var(--teal)]/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <FileText size={28} className="text-[var(--teal)]" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase ${
                        patent.status === "Granted"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {patent.status === "Granted" ? <CheckCircle size={12} /> : <Clock size={12} />}
                      {patent.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[var(--teal)] font-mono mb-2">{patent.patentNo}</p>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--teal)] transition-colors">
                    {patent.title}
                  </h3>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User size={14} className="text-gray-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{patent.inventor}</p>
                      <p className="text-xs text-gray-400">{patent.institution}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {patent.domain}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPatents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">No patents found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
