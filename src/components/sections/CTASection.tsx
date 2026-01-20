import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-walei-blue-600">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-headline md:text-display-2 text-white">
            Have a story to share?
          </h2>
          <p className="mt-4 text-lg text-walei-blue-100 max-w-xl mx-auto">
            Every leader has experiences worth sharing. Submit your insights and
            inspire the next generation of innovators and changemakers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/publish">
              <Button variant="gold" size="xl">
                Submit Your Story
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
