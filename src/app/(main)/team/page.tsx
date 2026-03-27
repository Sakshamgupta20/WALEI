"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const teamMembers = [
  {
    name: "Jagriti Kumari",
    role: "Architecture",
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
    role: "Computer Science",
    description: "Technology strategy and industry partnerships",
    image: "/images/team/raman.jpg",
  },
  {
    name: "Vishrant",
    role: "Chemical Engineer",
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
    name: "Sivarsa",
    role: "Strategic Partner",
    description: "A strategy-driven digital agency specializing in growth and identity",
    contact: "hello@sivarsa.com",
    website: "sivarsa.com",
  },
];

const tabs = [
  { id: "team", label: "CORE TEAM" },
  // { id: "advisors", label: "ADVISORS" },
  { id: "partners", label: "STRATEGIC PARTNERS" },
  { id: "anthem", label: "ANTHEM" },
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

      {activeTab === "anthem" ? (
        /* Anthem Section */
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Left: Bhabha Portrait + Dedication */}
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={`${basePath}/images/anthem/bhabha.png`}
                    alt="Dr. Homi J. Bhabha"
                    width={670}
                    height={800}
                    className="w-full h-auto grayscale"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Dr. Homi Jehangir Bhabha
                  </h3>
                  <p className="text-sm text-gray-500 italic">
                    &quot;The Father of the Indian Nuclear Programme&quot;
                  </p>
                </div>
              </div>

              {/* Right: Dedication & Anthem Text */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    The Dedication
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    To the memory of Dr. Homi J. Bhabha,
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    The architect of our scientific consciousness and the visionary who
                    taught a young nation to dream in the language of atoms and stars.
                    This work is humbly dedicated to the spirit of &quot;Bhabha&apos;s
                    India&quot;, a land not defined by its limitations, but by the
                    boundless horizon of its indigenous genius.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    At Walei we strive to capture a fragment of that
                    &quot;Bhabha-esque&quot; audacity. We work under the light of his
                    eternal philosophy: that the pursuit of knowledge is the highest
                    form of patriotism.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    The Anthem of Science
                  </h2>
                  <blockquote className="border-l-4 border-[var(--gold)] pl-6 py-2">
                    <p className="text-base text-gray-700 leading-relaxed italic">
                      &quot;We are not a nation that must forever wait for the light to
                      be shown by others. Our destiny is not to follow, but to innovate;
                      for the strength of a country lies not in the wealth it inherits,
                      but in the scientific intellect it dares to cultivate within its
                      own borders.&quot;
                    </p>
                    <footer className="mt-3 text-sm font-medium text-gray-500">
                      - Dr. Homi Jehangir Bhabha
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Grid */
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === "partners" ? (
                /* Sivarsa Strategic Partner Card */
                <article className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow p-8 flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative rounded-full overflow-hidden bg-black mb-5">
                    <Image
                      src={`${basePath}/images/partners/sivarsa.png`}
                      alt="Sivarsa"
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sivarsa</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Strategic Partner</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    A strategy-driven digital agency specializing in growth and identity
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>contact@sivarsa.com</p>
                    <a href="https://sivarsa.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">sivarsa.com</a>
                  </div>
                </article>
              ) : (
                getActiveMembers().map((member, index) => (
                  <article
                    key={index}
                    className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      {"image" in member && member.image ? (
                        <Image
                          src={`${basePath}${member.image}`}
                          alt={member.name}
                          fill
                          className="object-cover object-top"
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
                      <h3 className="text-base font-bold capitalize text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-500 uppercase tracking-wide">
                        {member.role}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                    </div>
                  </article>
                ))
              )}

              {/* About WALEI Card - constant across all tabs */}
              <article className="rounded-xl overflow-hidden bg-[var(--dark)] text-white p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium mb-3" style={{ color: "var(--gold)" }}>
                    About WALEI
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">
                    I, WALEI, designed as a living innovation ecosystem where vision,
                    execution, and discovery continuously reinforce one another. I brings
                    forward how raw elite ideas evolve into viable impact an infrastructure
                    that allows ideas to move towards execution. Scientists, engineers,
                    analysts, and independent research professionals can access meaningful,
                    project-based opportunities that apply their expertise to pressing
                    challenges. What begins as inquiry and experimentation advances into
                    protected assets, skilled collaborations, strategic alliances, and
                    scalable ventures.
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
      )}
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
            WALEI is a collective effort of young minds from academia and industry,
            united by a shared mission to make scientific knowledge interesting,
            insightful, and inspiring. We simplify access to ideas by curating meaningful
            contributions and sharing them across scientific community. Through
            collaboration and shared wisdom, we strive to create an infrastructure
            where vision flows freely, insights thrives, and the energy for action is
            nurtured across generations.
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
