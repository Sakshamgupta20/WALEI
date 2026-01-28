"use client";

import { useState } from "react";

const teamMembers = [
  {
    name: "Jagriti Kumari",
    role: "Architect",
    description: "Leading design and user experience initiatives",
    category: "team",
  },
  {
    name: "Sphoorti Bhajantri",
    role: "Environment Science",
    description: "Research coordination and content curation",
    category: "team",
  },
  {
    name: "Rahul Verma",
    role: "Technology Lead",
    description: "Platform development and infrastructure",
    category: "team",
  },
  {
    name: "Priya Singh",
    role: "Community Manager",
    description: "Building and nurturing the WALEI community",
    category: "team",
  },
];

const advisors = [
  {
    name: "Prof. Dipankar Chatterji",
    role: "Scientific Advisor",
    description: "IISc Bangalore, Former President of Indian National Science Academy",
    category: "advisors",
  },
  {
    name: "Prof. V. Ramgopal Rao",
    role: "Academic Advisor",
    description: "Vice Chancellor, BITS Pilani | Former Director, IIT Delhi",
    category: "advisors",
  },
  {
    name: "Dr. Kiran Mazumdar-Shaw",
    role: "Industry Advisor",
    description: "Executive Chairperson, Biocon Limited",
    category: "advisors",
  },
];

const partners = [
  {
    name: "IIT Kharagpur",
    role: "Academic Partner",
    description: "Research collaboration and student engagement",
    category: "partners",
  },
  {
    name: "IISc Bangalore",
    role: "Research Partner",
    description: "Scientific content and expert network",
    category: "partners",
  },
  {
    name: "Max Planck Institute",
    role: "International Partner",
    description: "Global research network and NRI connections",
    category: "partners",
  },
];

const tabs = [
  { id: "team", label: "TEAM" },
  { id: "advisors", label: "ADVISORS" },
  { id: "partners", label: "STRATEGIC PARTNERS" },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("team");

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
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <span className="text-overline" style={{ color: "var(--teal)" }}>
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
                    ? "border-[var(--teal)] text-[var(--teal)]"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getActiveMembers().map((member, index) => (
              <article
                key={index}
                className="rounded-lg overflow-hidden bg-white border border-red-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gray-300" />
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

            {/* Join CTA Card */}
            <article className="rounded-lg overflow-hidden bg-gradient-to-br from-[var(--light)] to-white border border-gray-200 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-lg font-light italic text-gray-700">
                Join to discover your own journey!
              </p>
              <a
                href="/contact"
                className="mt-4 px-6 py-2.5 bg-[var(--teal)] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
