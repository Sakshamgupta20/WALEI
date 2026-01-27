import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20" />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-5">
            <span
              className="text-[11px] uppercase tracking-[0.15em] font-bold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm"
              style={{ color: "var(--gold)" }}
            >
              Amplifying Scientific Voices
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Evidence-Based Statements
            <br className="hidden sm:block" />
            to World Leaders
          </h2>

          <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A global platform where scientists and researchers deliver critical
            insights to policymakers — shaping climate action, AI governance,
            public health, and the future of humanity through rigorous,
            evidence-based discourse.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/publish"
              className="px-8 py-3 text-white rounded-md font-semibold text-sm hover:opacity-90 transition-all"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Contribute Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 text-white border border-white/40 rounded-md font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
