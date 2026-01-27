import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about WALEI's mission to share insights and experiences that inspire through conversations with visionary leaders.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-14" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900">
              About WALEI
            </h1>
            <p className="mt-4 text-sm md:text-base text-gray-500">
              Experiences that inspire
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="prose-walei">
              <p>
                WALEI is a thought leadership platform dedicated to capturing
                and sharing the wisdom of visionary leaders from across
                industries and disciplines.
              </p>
              <p>
                We believe that every leader has a unique story—a journey filled
                with challenges overcome, lessons learned, and insights gained.
                These experiences, when shared, have the power to inspire and
                guide the next generation of innovators, entrepreneurs, and
                changemakers.
              </p>
              <p>
                Through in-depth interviews and thoughtful conversations, we
                document the experiences of those who are shaping our world,
                creating a repository of wisdom that transcends boundaries and
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 md:py-16" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 text-center mb-10">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,122,140,0.1)" }}
              >
                <span className="text-base font-bold" style={{ color: "var(--teal)", fontFamily: "Georgia, serif" }}>
                  1
                </span>
              </div>
              <h3 className="text-base font-normal text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Notes of Future
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exploring tomorrow&apos;s possibilities through conversations with
                visionary thinkers who are shaping what comes next.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,122,140,0.1)" }}
              >
                <span className="text-base font-bold" style={{ color: "var(--teal)", fontFamily: "Georgia, serif" }}>
                  2
                </span>
              </div>
              <h3 className="text-base font-normal text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Notes of Challenges
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learning from obstacles and discovering how leaders turn their
                greatest challenges into opportunities for growth.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,122,140,0.1)" }}
              >
                <span className="text-base font-bold" style={{ color: "var(--teal)", fontFamily: "Georgia, serif" }}>
                  3
                </span>
              </div>
              <h3 className="text-base font-normal text-gray-900 mb-2" style={{ fontFamily: "Georgia, serif" }}>
                Notes to Leaders
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Wisdom and insights for aspiring and established leaders,
                distilled from decades of experience and reflection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
              Join Our Community
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Whether you&apos;re a leader with stories to share or someone seeking
              inspiration, we welcome you to be part of the WALEI community.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/publish"
                className="px-6 py-2.5 text-white rounded-md font-semibold text-sm hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Share Your Story
              </Link>
              <Link
                href="/notes-of-future"
                className="px-6 py-2.5 border rounded-md font-semibold text-sm hover:bg-[var(--teal)] hover:text-white hover:border-[var(--teal)] transition-all"
                style={{ borderColor: "var(--teal)", color: "var(--teal)" }}
              >
                Explore Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
