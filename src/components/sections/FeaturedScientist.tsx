import Link from "next/link";

export function FeaturedScientist() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--light)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-40 h-40 bg-gray-500 rounded-full mx-auto mb-4" />
                  <p className="text-sm font-medium">Scientist Portrait</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span
              className="text-overline"
              style={{ color: "var(--teal)" }}
            >
              Featured Scientist
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4" style={{ letterSpacing: "-0.02em" }}>
              Prof. V. Ramgopal Rao
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-8" style={{ lineHeight: "1.6" }}>
              Director, IIT Delhi | Former Director, IIT Bombay
            </p>

            <h3 className="text-xl md:text-2xl font-light mb-4" style={{ letterSpacing: "-0.01em" }}>
              Electrons Into Order
            </h3>

            <p className="text-sm md:text-base text-gray-700 mb-8" style={{ lineHeight: "1.7" }}>
              Exploring the intersection of semiconductor technology, artificial
              intelligence, and policy frameworks that will shape India&apos;s
              technological sovereignty in the coming decades. Professor Rao
              discusses the critical need for strategic thinking in research and
              development.
            </p>

            <blockquote
              className="border-l-4 pl-6 py-4 mb-8 italic text-lg md:text-xl text-gray-800"
              style={{ borderColor: "var(--gold)", lineHeight: "1.6" }}
            >
              &ldquo;Technology alone cannot solve problems. We need the right
              policy framework and the will to execute. That&apos;s where the
              bridge between science and governance becomes critical.&rdquo;
            </blockquote>

            <Link
              href="/leaders/v-ramgopal-rao"
              className="inline-block px-10 py-4 border-2 rounded-lg font-semibold hover:bg-[var(--teal)] hover:text-white transition-all text-base"
              style={{ borderColor: "var(--teal)", color: "var(--teal)", letterSpacing: "0.01em" }}
            >
              Read Full Interview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
