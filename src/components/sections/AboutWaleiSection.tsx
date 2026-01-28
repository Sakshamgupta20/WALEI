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
                className="text-[11px] uppercase tracking-[0.2em] font-semibold"
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
              The leaps are charged by the conscience of its community. Building the
              future with sheer efforts by top minds.
            </p>

            <p className="text-lg italic font-light">
              <span style={{ color: "var(--gold)" }}>Vision</span>
              <span className="text-gray-500 mx-2">·</span>
              <span style={{ color: "var(--teal)" }}>Insight</span>
              <span className="text-gray-500 mx-2">·</span>
              <span style={{ color: "var(--accent-challenges)" }}>Action</span>
            </p>
          </div>

          {/* Right - Stats Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-6">
              {/* Presence */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Globe size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Presence
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-light">349</span>
                  <span className="text-gray-500 text-sm">Cities</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl md:text-4xl font-light">54</span>
                  <span className="text-gray-500 text-sm">Countries</span>
                </div>
              </div>

              {/* Community */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Users size={18} style={{ color: "var(--teal)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Community
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["IIT K", "IIT B", "IISC", "IIT KGP", "MPI", "SDU", "VUB"].map((inst) => (
                    <span
                      key={inst}
                      className="px-2 py-1 text-xs bg-white/10 rounded text-gray-300"
                    >
                      {inst}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-xs text-gray-500">+more</span>
                </div>
              </div>

              {/* Notemakers */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Award size={18} style={{ color: "var(--accent-challenges)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Notemakers
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Director", "VC", "Padma Shri", "Founder", "CEO"].map((role) => (
                    <span
                      key={role}
                      className="px-2 py-1 text-xs bg-white/10 rounded text-gray-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Target size={18} style={{ color: "var(--accent-moments)" }} />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                    Our Goals
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Stats are mere quantity. WALEI is at just stage 1 — building the
                  foundation for a global scientific community.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/10 to-transparent rounded-2xl" />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10">
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
                    <p className="text-white font-medium">{testimonial.author}</p>
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
