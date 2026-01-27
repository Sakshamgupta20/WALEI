import Link from "next/link";

export function FeaturedScientist() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--light)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-3" />
                  <p className="text-xs">Scientist Portrait</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-overline" style={{ color: "var(--teal)" }}>
              Featured Scientist
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3">
              Prof. V. Ramgopal Rao
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              Vice Chancellor, BITS Pilani | Former Director, IIT Delhi
            </p>

            <h3 className="text-lg md:text-xl font-light mb-3 italic">
              Electrons Into Order: India&apos;s Semiconductor Future
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              In this exclusive conversation, Professor Rao discusses how India
              can build a world-class semiconductor ecosystem. From the
              challenges of chip fabrication to the opportunities in VLSI design,
              he outlines a roadmap for India&apos;s technological sovereignty.
              Drawing from his decades of experience in nanoelectronics and
              his leadership of two premier institutions, he argues for a
              strategic approach combining policy, academia, and industry.
            </p>

            <blockquote
              className="border-l-3 pl-5 py-3 mb-6 italic text-base text-gray-700"
              style={{ borderLeft: "3px solid var(--gold)", lineHeight: "1.6" }}
            >
              &ldquo;India doesn&apos;t need to build everything from scratch. We need
              strategic partnerships, a strong design ecosystem, and the
              political will to invest in deep tech for the long term.&rdquo;
            </blockquote>

            <Link
              href="/leaders/v-ramgopal-rao"
              className="inline-block px-6 py-2.5 border rounded-md font-semibold text-sm hover:bg-[var(--teal)] hover:text-white hover:border-[var(--teal)] transition-all"
              style={{ borderColor: "var(--teal)", color: "var(--teal)" }}
            >
              Read Full Interview
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
