import Link from "next/link";
import { Rocket, Dna, Cpu, FlaskConical } from "lucide-react";

export function HeroSection() {
  return (
    <>
    <section className="relative bg-[var(--dark)] overflow-hidden min-h-[85vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]" />

        {/* Decorative circle */}
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border border-white/5" />

        {/* Accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[150px] opacity-10"
          style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
        />
      </div>

      {/* Orbital animation styles */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.06; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.02); }
        }
      `}</style>

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-20 md:py-28">
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
              Making
              <br />
              <span style={{ color: "var(--gold)" }}>Statements</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              WALEI is generation of innovation infrastructure for the lifecycle
              of an idea accessible to everyone. Experimentation, advances into
              protected assets, skilled collaborations, strategic alliances, and
              scalable ventures for the future
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/publish"
                className="px-8 py-4 text-white border border-white/30 font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
              >
                Do you have Notes?
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
                <p className="text-3xl md:text-4xl font-light text-white">2k+</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Community</p>
              </div>
            </div>
          </div>

          {/* Right - Animated Science Icons */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative" style={{ width: 420, height: 420 }}>
              {/* Orbit ring — r=160, diameter=320, inset=50 */}
              <div className="absolute rounded-full border-2 border-white/[0.1]" style={{ inset: 50 }} />
              {/* Inner ring */}
              <div className="absolute rounded-full border border-white/[0.06]" style={{ inset: 120 }} />

              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-xl" style={{ background: 'rgba(184,134,11,0.1)' }} />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/25 font-semibold text-center leading-relaxed">
                  WALEI
                </p>
              </div>

              {/* Rotating container — icons sit ON the ring */}
              <div className="absolute" style={{ inset: 0, transformOrigin: '210px 210px', animation: 'spin 30s linear infinite' }}>
                {/* Top (0°): center at (210, 50) */}
                <div className="absolute flex items-center justify-center rounded-full" style={{ width: 76, height: 76, top: 12, left: 172, background: '#1e1e1e', border: '2px solid rgba(184,134,11,0.25)', boxShadow: '0 0 24px rgba(184,134,11,0.1)', animation: 'spin-reverse 30s linear infinite' }}>
                  <Rocket size={28} className="text-[var(--gold)]" />
                </div>
                {/* Right (90°): center at (370, 210) */}
                <div className="absolute flex items-center justify-center rounded-full" style={{ width: 76, height: 76, top: 172, left: 332, background: '#1e1e1e', border: '2px solid rgba(184,134,11,0.25)', boxShadow: '0 0 24px rgba(184,134,11,0.1)', animation: 'spin-reverse 30s linear infinite' }}>
                  <Dna size={28} className="text-[var(--gold)]" />
                </div>
                {/* Bottom (180°): center at (210, 370) */}
                <div className="absolute flex items-center justify-center rounded-full" style={{ width: 76, height: 76, top: 332, left: 172, background: '#1e1e1e', border: '2px solid rgba(184,134,11,0.25)', boxShadow: '0 0 24px rgba(184,134,11,0.1)', animation: 'spin-reverse 30s linear infinite' }}>
                  <Cpu size={28} className="text-[var(--gold)]" />
                </div>
                {/* Left (270°): center at (50, 210) */}
                <div className="absolute flex items-center justify-center rounded-full" style={{ width: 76, height: 76, top: 172, left: 12, background: '#1e1e1e', border: '2px solid rgba(184,134,11,0.25)', boxShadow: '0 0 24px rgba(184,134,11,0.1)', animation: 'spin-reverse 30s linear infinite' }}>
                  <FlaskConical size={28} className="text-[var(--gold)]" />
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
