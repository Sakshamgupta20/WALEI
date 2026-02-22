"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const teamMembers = [
  {
    name: "Jagriti Kumari",
    role: "Architect",
    description: "Leading design and user experience initiatives",
    image: "/images/team/jagriti.jpg",
  },
  {
    name: "Sphoorti Bhajantri",
    role: "Environment Science",
    description: "Research coordination and content curation",
    image: "/images/team/sphoorti.jpg",
  },
  {
    name: "Raman Kumar",
    role: "Technology & Strategy",
    description: "Technology strategy and industry partnerships",
    image: "/images/team/raman.jpg",
  },
  {
    name: "Vishrant",
    role: "Operations",
    description: "Platform development and infrastructure",
    image: "/images/team/vishrant.jpg",
  },
];

const advisors = [
  {
    name: "Prof. Dipankar Chatterji",
    role: "Scientific Advisor",
    description: "IISc Bangalore, Former President of Indian National Science Academy",
    image: "/images/notes/future/dipankar-chatterji.jpg",
  },
  {
    name: "Prof. V. Ramgopal Rao",
    role: "Academic Advisor",
    description: "Vice Chancellor, BITS Pilani | Former Director, IIT Delhi",
    image: "/images/notes/future/v-ramgopal-rao.jpg",
  },
  {
    name: "Dr. Kiran Mazumdar-Shaw",
    role: "Industry Advisor",
    description: "Executive Chairperson, Biocon Limited",
  },
];

const partners = [
  {
    name: "IIT Kharagpur",
    role: "Academic Partner",
    description: "Research collaboration and student engagement",
  },
  {
    name: "IISc Bangalore",
    role: "Research Partner",
    description: "Scientific content and expert network",
  },
  {
    name: "Max Planck Institute",
    role: "International Partner",
    description: "Global research network and NRI connections",
  },
];

const tabs = [
  { id: "team", label: "CORE TEAM" },
  { id: "advisors", label: "ADVISORS" },
  { id: "partners", label: "STRATEGIC PARTNERS" },
];

function TeamContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("team");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.some((t) => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const getActiveMembers = () => {
    switch (activeTab) {
      case "team":
        return teamMembers;
      case "advisors":
        return advisors;
      case "partners":
        return partners;
      default:
        return teamMembers;
    }
  };

  return (
    <>
      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[var(--gold)] text-[var(--gold)]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getActiveMembers().map((member, index) => (
              <article
                key={index}
                className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  {"image" in member && member.image ? (
                    <Image
                      src={`${basePath}${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-light text-gray-500">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold uppercase text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                </div>
              </article>
            ))}

            {/* About WALEI Card - constant across all tabs */}
            <article className="rounded-xl overflow-hidden bg-[var(--dark)] text-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-medium mb-3" style={{ color: "var(--gold)" }}>
                  About WALEI
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  WALEI is a digital infrastructure at stage 1 of science and innovation.
                  The leaps are charged by the conscience of its community. Building the
                  future with sheer efforts by top minds.
                </p>
                <p className="text-sm italic text-gray-400">
                  Vision · Insight · Action
                </p>
              </div>
              <a
                href="/contact"
                className="mt-6 w-full px-6 py-2.5 text-sm font-semibold rounded-lg text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Join Us
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <span className="text-overline" style={{ color: "var(--gold)" }}>
            Team WALEI
          </span>
          <h1 className="text-3xl md:text-4xl font-light text-gray-900">
            Team, Partners and Advisors
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl">
            WALEI is a collective of thinkers and practitioners from academia and
            industry, united by a shared commitment to expanding access to
            meaningful insights, ideas, and impact in science and innovation.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="py-10 text-center text-gray-400">Loading...</div>
      }>
        <TeamContent />
      </Suspense>
    </>
  );
}
