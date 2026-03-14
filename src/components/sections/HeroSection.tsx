import Link from "next/link";
import { Rocket, Dna, Cpu, FlaskConical } from "lucide-react";

export function HeroSection() {
  return (
    <>
    {/* Making Statements Bar */}
    <div className="bg-white py-4 md:py-5">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Making <span style={{ color: "var(--gold)" }}>Statements</span>
        </h2>
      </div>
    </div>

    <section className="relative bg-[var(--dark)] overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full border border-white/5" />
        <div className="absolute top-32 right-[18%] w-[400px] h-[400px] rounded-full border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-white/5" />

        {/* Accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />
      </div>

      {/* Spin animation */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbit 30s linear infinite;
        }
        .animate-counter-orbit {
          animation: counter-orbit 30s linear infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.08; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.03); }
        }
        .animate-pulse-ring {
          animation: pulse-ring 5s ease-in-out infinite;
        }
      `}</style>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
              <span
                className="text-[11px] uppercase tracking-[0.2em] font-semibold"
                style={{ color: "var(--gold)" }}
              >
                Vision · Insight · Action
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-[1.1]">
              Where Science
              <br />
              <span className="text-gray-400">Shapes</span>
              <br />
              <span style={{ color: "var(--gold)" }}>Policy</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              WALEI is generation of innovation infrastructure for the lifecycle
              of an idea accessible to everyone. Experimentation, advances into
              protected assets, skilled collaborations, strategic alliances, and
              scalable ventures for the future
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/notes-of-future"
                className="group px-8 py-4 text-white font-semibold text-sm tracking-wide hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Explore Notes
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/publish"
                className="px-8 py-4 text-white border border-white/30 font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
              >
                Tell us what you think?
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl md:text-4xl font-light text-white">349</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Cities</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-white">54</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Countries</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--gold)" }}>∞</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Impact</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-light text-white">2k+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Community</p>
              </div>
            </div>
          </div>

          {/* Right - Animated Science Icons */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[280px] h-[280px]">
              {/* Outer ring with pulse */}
              <div className="absolute -inset-5 rounded-full border border-white/[0.04] animate-pulse-ring" />
              {/* Main ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
              {/* Inner ring */}
              <div className="absolute inset-[60px] rounded-full border border-white/[0.06]" />

              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[var(--gold)]/[0.06] blur-xl" />

              {/* Center label */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25 font-semibold leading-relaxed">Science<br />&amp; Innovation</p>
              </div>

              {/* Orbiting icons - placed ON the main ring (r=140px from center) */}
              <div className="absolute inset-[-20px] animate-orbit">
                {/* Top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#222] flex items-center justify-center border border-white/10 shadow-lg animate-counter-orbit">
                  <Rocket size={16} className="text-[var(--gold)]" />
                </div>
                {/* Right */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#222] flex items-center justify-center border border-white/10 shadow-lg animate-counter-orbit">
                  <Dna size={16} className="text-[var(--gold)]" />
                </div>
                {/* Bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#222] flex items-center justify-center border border-white/10 shadow-lg animate-counter-orbit">
                  <Cpu size={16} className="text-[var(--gold)]" />
                </div>
                {/* Left */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-[#222] flex items-center justify-center border border-white/10 shadow-lg animate-counter-orbit">
                  <FlaskConical size={16} className="text-[var(--gold)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
