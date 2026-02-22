import { Globe, Users, Award, Target } from "lucide-react";

const testimonial = {
  quote:
    "The conversation was enlightening. It was a great opportunity and pleasure to interact with Prof. Dipankar Chatterji, esteemed Indian Bio-scientist. A much appreciated effort by the team.",
  author: "Jayansh Deora",
  affiliation: "Subodh Public School Jaipur",
};

export function AboutWaleiSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--dark)] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Left - About */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span
                className="text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: "var(--gold)" }}
              >
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight">
              Building Tomorrow&apos;s
              <br />
              <span className="text-gray-400">Scientific</span>{" "}
              <span style={{ color: "var(--gold)" }}>Legacy</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              WALEI is a digital infrastructure at stage 1 of science and innovation.
              The leaps are charged by the conscience of its community. It is building
              of future with sheer efforts by the top minds.
            </p>

            <p className="text-lg italic font-light">
              <span style={{ color: "var(--gold)" }}>Vision</span>
              <span className="text-gray-500 mx-2">·</span>
              <span style={{ color: "var(--coral)" }}>Insight</span>
              <span className="text-gray-500 mx-2">·</span>
              <span style={{ color: "var(--purple)" }}>Action</span>
            </p>
          </div>

          {/* Right - 4 Colored Boxes (2x2) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {/* Presence - Gold */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: "rgba(212, 168, 83, 0.1)", borderColor: "rgba(212, 168, 83, 0.25)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(212, 168, 83, 0.2)" }}>
                    <Globe size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--gold)" }}>
                    Presence
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-light">349</span>
                  <span className="text-gray-500 text-sm">Cities</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-sm text-gray-400">across</span>
                  <span className="text-3xl md:text-4xl font-light">54</span>
                  <span className="text-gray-500 text-sm">Countries</span>
                </div>
              </div>

              {/* Community - Coral */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: "rgba(197, 75, 75, 0.1)", borderColor: "rgba(197, 75, 75, 0.25)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(197, 75, 75, 0.2)" }}>
                    <Users size={18} style={{ color: "var(--coral)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--coral)" }}>
                    Community
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["IIT K", "IIT B", "IISC", "IIT KGP", "MPI", "SDU", "VUB", "CareMother"].map((inst) => (
                    <span
                      key={inst}
                      className="px-2 py-1 text-xs rounded text-gray-300"
                      style={{ backgroundColor: "rgba(197, 75, 75, 0.15)" }}
                    >
                      {inst}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-xs text-gray-500">&hellip;</span>
                </div>
              </div>

              {/* Notemakers - Purple */}
              <div className="rounded-xl p-6 border" style={{ backgroundColor: "rgba(107, 91, 149, 0.1)", borderColor: "rgba(107, 91, 149, 0.25)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(107, 91, 149, 0.2)" }}>
                    <Award size={18} style={{ color: "var(--purple)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--purple)" }}>
                    Notemakers
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Director", "VC", "Padma Shri", "Founder", "CEO", "Marie Curie Fellow"].map((role) => (
                    <span
                      key={role}
                      className="px-2 py-1 text-xs rounded text-gray-300"
                      style={{ backgroundColor: "rgba(107, 91, 149, 0.15)" }}
                    >
                      {role}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-xs text-gray-500">&hellip;</span>
                </div>
              </div>

              {/* Our Goals - Gray/Dark */}
              <div className="rounded-xl p-6 border border-gray-700 bg-gray-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                    <Target size={18} className="text-gray-300" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-300 font-semibold">
                    Our Goals
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Stats are mere quantity, WALEI is at just stage 1 — building the
                  foundation for a global scientific community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/10 to-transparent rounded-xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--gold)" }}
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-600" />
                  <div>
                    <p className="text-white font-medium">~{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.affiliation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
