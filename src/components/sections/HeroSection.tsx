import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  cta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  overlay?: "dark" | "gradient";
  height?: "full" | "large" | "medium";
  centered?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  quote,
  cta,
  backgroundImage,
  overlay = "gradient",
  height = "large",
  centered = true,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center",
        height === "full" && "min-h-screen",
        height === "large" && "min-h-[80vh]",
        height === "medium" && "min-h-[60vh]"
      )}
    >
      {/* Background */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-walei-blue-600 via-walei-blue-700 to-walei-blue-900" />
      )}

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          overlay === "dark" && "bg-gray-900/70",
          overlay === "gradient" &&
            "bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/20"
        )}
      />

      {/* Content */}
      <Container className={cn("relative z-10 py-20", centered && "text-center")}>
        <div className={cn("max-w-4xl", centered && "mx-auto")}>
          {/* Title */}
          <h1 className="font-serif text-display-2 md:text-display-1 text-white leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Quote */}
          {quote && (
            <blockquote className="mt-10 pt-10 border-t border-white/20">
              <p className="text-xl md:text-2xl text-white/90 italic font-serif leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="text-walei-gold font-semibold">
                    {quote.author}
                  </span>
                  {quote.role && (
                    <span className="text-gray-300 ml-2">— {quote.role}</span>
                  )}
                </cite>
              </footer>
            </blockquote>
          )}

          {/* CTA */}
          {cta && (
            <div className="mt-10">
              <Link href={cta.href}>
                <Button variant="gold" size="xl">
                  {cta.label}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
