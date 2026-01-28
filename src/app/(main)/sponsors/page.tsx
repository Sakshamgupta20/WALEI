import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Award, Star, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Our sponsors and partners who make WALEI possible. Join us in amplifying scientific voices.",
};

const sponsors = [
  {
    tier: "Platinum",
    icon: Sparkles,
    color: "#B8860B",
    partners: [
      { name: "IIT Kharagpur", logo: null },
      { name: "IISc Bangalore", logo: null },
    ],
  },
  {
    tier: "Gold",
    icon: Award,
    color: "#D4A853",
    partners: [
      { name: "BITS Pilani", logo: null },
      { name: "IIT Bombay", logo: null },
      { name: "IIT Delhi", logo: null },
    ],
  },
  {
    tier: "Silver",
    icon: Star,
    color: "#9CA3AF",
    partners: [
      { name: "Max Planck Institute", logo: null },
      { name: "EPFL", logo: null },
      { name: "Vrije Universiteit Brussel", logo: null },
      { name: "SDU Denmark", logo: null },
    ],
  },
];

export default function SponsorsPage() {
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
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              Our Partners
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Sponsors & Partners
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Institutions and organizations supporting WALEI&apos;s mission to amplify
            scientific voices and bridge research with policy.
          </p>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          {sponsors.map((tier) => {
            const Icon = tier.icon;
            return (
              <div key={tier.tier} className="mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${tier.color}20` }}
                  >
                    <Icon size={18} style={{ color: tier.color }} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {tier.tier} Partners
                    </h2>
                    <div className="h-0.5 w-16 mt-1" style={{ backgroundColor: tier.color }} />
                  </div>
                </div>
                <div
                  className={`grid gap-6 ${
                    tier.tier === "Platinum"
                      ? "grid-cols-1 md:grid-cols-2"
                      : tier.tier === "Gold"
                      ? "grid-cols-2 md:grid-cols-3"
                      : "grid-cols-2 md:grid-cols-4"
                  }`}
                >
                  {tier.partners.map((partner) => (
                    <div
                      key={partner.name}
                      className={`group relative bg-white rounded-2xl border-2 hover:shadow-xl transition-all duration-300 overflow-hidden ${
                        tier.tier === "Platinum" ? "p-10" : tier.tier === "Gold" ? "p-8" : "p-6"
                      }`}
                      style={{ borderColor: `${tier.color}30` }}
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: tier.color }}
                      />
                      <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center gap-3">
                          <Building2
                            size={tier.tier === "Platinum" ? 32 : tier.tier === "Gold" ? 28 : 24}
                            className="text-gray-300 group-hover:text-gray-400 transition-colors"
                          />
                          <span
                            className={`font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors ${
                              tier.tier === "Platinum"
                                ? "text-xl"
                                : tier.tier === "Gold"
                                ? "text-base"
                                : "text-sm"
                            }`}
                          >
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Become a Sponsor CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--teal)] to-[#005a68] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/10" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Partner with WALEI
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Join us in building a future guided by research and reason. Support
            the amplification of scientific voices to policymakers worldwide.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--teal)] font-semibold rounded-lg hover:bg-white/90 transition-all"
          >
            Become a Sponsor
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
