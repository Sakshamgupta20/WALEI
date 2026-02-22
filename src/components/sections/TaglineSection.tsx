import { Container } from "@/components/ui/Container";

export function TaglineSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-overline text-[var(--gold)] mb-4">Our Mission</p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-relaxed">
            We believe in the power of shared experiences to{" "}
            <span className="text-[var(--gold)]">inspire</span>,{" "}
            <span className="text-[var(--gold)]">educate</span>, and{" "}
            <span className="text-[var(--gold)]">transform</span>.
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            WALEI brings together visionary leaders from across industries to
            share their journeys, challenges, and insights—creating a platform
            where wisdom flows freely and inspiration knows no bounds.
          </p>
        </div>
      </Container>
    </section>
  );
}
