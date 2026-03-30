"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, FileText, CheckCircle, Clock, User } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const patents = [
  {
    id: "SS001-1",
    title: "Process for H2O2-Mediated Near Ambient Condition Conversion of Nitrogen Source to Ammonia",
    patentNo: "568389",
    inventor: "Dr. Sumit Kumar Sonkar",
    institution: "MNIT Jaipur",
    domain: "Chemical / Green / Agriculture",
    status: "Granted",
    duration: "2024-2044",
    jurisdiction: "India",
    image: "/images/patents/SS1-H2O2.png",
  },
  {
    id: "SS001-2",
    title: "A Method of Utilization of Waste Industrial Iron Dust for Sunlight-Assisted Photoreduction of Toxic Cr(VI)",
    patentNo: "573068",
    inventor: "Dr. Sumit Kumar Sonkar",
    institution: "MNIT Jaipur",
    domain: "Chemical / Catalyst / Magnetic",
    status: "Granted",
    duration: "2022-2042",
    jurisdiction: "India",
    image: "/images/patents/SS2-iron-oxide.jpg",
  },
  {
    id: "RR002-1",
    title: "Polymer Anchored Microelectromechanical System (MEMS) Cantilever and Method of Fabricating the Same",
    patentNo: "435267 / US20150203345A1",
    inventor: "Prof. Ramgopal Rao",
    institution: "IIT Bombay",
    domain: "Electronic / Polymer / Piezo",
    status: "Granted",
    duration: "2017-2035",
    jurisdiction: "USA",
    image: "/images/patents/US20150203345A1.png",
  },
  {
    id: "RR002-2",
    title: "Micro Electro Mechanical System (MEMS) Based Wide-Band Polymer Photo-Detector",
    patentNo: "459569 / US9786855B2",
    inventor: "Prof. Ramgopal Rao",
    institution: "IIT Bombay",
    domain: "Photonics / MEMS / Polymers",
    status: "Granted",
    duration: "2017-2035",
    jurisdiction: "USA",
    image: "/images/patents/US9786855B2.png",
  },
  {
    id: "SC003-1",
    title: "Point of Care (POC) Device for Facilitating Nucleic Acid Based Testing and Method Thereof",
    patentNo: "US11440014B2",
    inventor: "Prof. Suman Chakraborty",
    institution: "IIT Kharagpur",
    domain: "Biotechnology / Medical",
    status: "Granted",
    duration: "2022-2042",
    jurisdiction: "USA",
    image: "/images/patents/US11440014B2.png",
  },
  {
    id: "SC003-2",
    title: "Hydrogel Microbeads Including Agarose Microbeads and a Process for Preparing the Same",
    patentNo: "426258",
    inventor: "Prof. Suman Chakraborty",
    institution: "IIT Kharagpur",
    domain: "Chemical / Hydrogel / Polymer",
    status: "Granted",
    duration: "2022-2042",
    jurisdiction: "India",
    image: "",
  },
];

export default function PatentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatents = patents.filter((patent) =>
    patent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patent.inventor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patent.patentNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Research IP
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Patents
          </h1>
          <p className="text-base text-gray-400 max-w-2xl leading-relaxed">
            Innovations from India&apos;s leading research institutions. Explore patents
            available for licensing and collaboration.
          </p>
        </div>
      </section>

      {/* Search Only */}
      <section className="py-4 bg-[var(--light)] border-b border-gray-200 sticky top-14 md:top-16 z-40">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search patents, inventors, or patent numbers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </section>

      {/* Patent Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPatents.map((patent) => (
              <Link key={patent.id} href={`/patents/${patent.id}`} className="group">
                <article className="rounded-xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                    {patent.image ? (
                      <Image
                        src={`${basePath}${patent.image}`}
                        alt={patent.title}
                        fill
                        className="object-contain p-4"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                          <FileText size={28} className="text-[var(--gold)]" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase ${
                          patent.status === "Granted"
                            ? "bg-[var(--dark)] text-white"
                            : "bg-gray-400 text-white"
                        }`}
                      >
                        {patent.status === "Granted" ? <CheckCircle size={12} /> : <Clock size={12} />}
                        {patent.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-mono mb-2" style={{ color: "var(--gold)" }}>{patent.patentNo}</p>
                    <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--gold)] transition-colors">
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

                    <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {patent.domain}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        {patent.jurisdiction}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPatents.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-500">No patents found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
