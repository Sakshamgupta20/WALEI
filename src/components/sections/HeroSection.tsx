import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <span
              className="text-xs uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full bg-white bg-opacity-10 backdrop-blur-sm"
              style={{ color: "var(--gold)" }}
            >
              Amplifying Scientific Voices
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            Evidence-Based Statements
            <br className="hidden sm:block" />
            to World Leaders
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto" style={{ lineHeight: "1.7" }}>
            Join scientists and researchers from around the globe in delivering
            critical insights to policymakers and shaping the future of
            evidence-based decision making.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/publish"
              className="px-12 py-5 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Contribute Now
            </Link>
            <Link
              href="/about"
              className="px-12 py-5 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
