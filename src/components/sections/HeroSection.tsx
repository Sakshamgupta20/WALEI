import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
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
              A global platform where scientists and researchers deliver
              evidence-based insights to policymakers — shaping climate action,
              AI governance, and the future of humanity.
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
                Contribute Your Voice
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
            </div>
          </div>

          {/* Right - Featured Quote Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Background card decoration */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-white/10 rounded-lg" />

              {/* Main card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <Image
                      src="/images/scientists/scientist-3.png"
                      alt="Prof. Suman Chakraborty"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">Prof. Suman Chakraborty</p>
                    <p className="text-sm text-gray-500">IIT Kharagpur</p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-6">
                  &ldquo;The beauty of fluid mechanics lies in its universal
                  presence — from blood vessels to cosmic jets. Understanding
                  the dimensions of fluids unlocks nature&apos;s deepest secrets.&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(212, 168, 83, 0.15)", color: "var(--gold)" }}
                  >
                    Notes of Future
                  </span>
                  <Link
                    href="/notes-of-future"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Read more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
