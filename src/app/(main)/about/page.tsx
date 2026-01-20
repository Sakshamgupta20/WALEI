import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about WALEI's mission to share insights and experiences that inspire through conversations with visionary leaders.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-walei-smoke to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-display-2 md:text-display-1 text-gray-900">
              About WALEI
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Experiences that inspire
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-headline text-gray-900 mb-6">
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
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-walei-smoke">
        <Container>
          <h2 className="font-serif text-headline text-gray-900 text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-natural">
              <div className="w-12 h-12 rounded-full bg-walei-blue-100 flex items-center justify-center mb-6">
                <span className="text-walei-blue-600 text-xl font-serif font-bold">
                  1
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                Notes of Future
              </h3>
              <p className="text-gray-600">
                Exploring tomorrow&apos;s possibilities through conversations with
                visionary thinkers who are shaping what comes next.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-natural">
              <div className="w-12 h-12 rounded-full bg-walei-blue-100 flex items-center justify-center mb-6">
                <span className="text-walei-blue-600 text-xl font-serif font-bold">
                  2
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                Notes of Challenges
              </h3>
              <p className="text-gray-600">
                Learning from obstacles and discovering how leaders turn their
                greatest challenges into opportunities for growth.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-natural">
              <div className="w-12 h-12 rounded-full bg-walei-blue-100 flex items-center justify-center mb-6">
                <span className="text-walei-blue-600 text-xl font-serif font-bold">
                  3
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                Notes to Leaders
              </h3>
              <p className="text-gray-600">
                Wisdom and insights for aspiring and established leaders,
                distilled from decades of experience and reflection.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-headline text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8">
              Whether you&apos;re a leader with stories to share or someone seeking
              inspiration, we welcome you to be part of the WALEI community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/publish">
                <Button variant="primary" size="lg">
                  Share Your Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/notes-of-future">
                <Button variant="secondary" size="lg">
                  Explore Articles
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
