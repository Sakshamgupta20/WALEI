import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Placeholder leaders - will be replaced with Sanity data
const placeholderLeaders = [
  {
    id: 1,
    name: "Prof. V Ramgopal Rao",
    title: "Former Director",
    organization: "IIT Delhi",
    image: "/images/leaders/placeholder-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Shantanu Pathak",
    title: "Innovation Expert",
    organization: "Tech Industry",
    image: "/images/leaders/placeholder-2.jpg",
  },
  {
    id: 3,
    name: "Prof. Dipankar Chatterji",
    title: "Distinguished Scientist",
    organization: "IISc Bangalore",
    image: "/images/leaders/placeholder-3.jpg",
  },
  {
    id: 4,
    name: "Dr. Aisha Sharma",
    title: "Healthcare Innovator",
    organization: "MedTech Labs",
    image: "/images/leaders/placeholder-4.jpg",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    title: "Entrepreneur & Investor",
    organization: "Venture Capital",
    image: "/images/leaders/placeholder-5.jpg",
  },
];

export function FeaturedLeaders() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-headline md:text-display-2 text-gray-900">
              Featured Leaders
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl">
              Meet the visionary minds shaping tomorrow through their insights
              and experiences
            </p>
          </div>
          <Link href="/team" className="mt-6 md:mt-0">
            <Button variant="outline" size="lg">
              View All Leaders
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {placeholderLeaders.map((leader) => (
            <Link
              key={leader.id}
              href={`/leaders/${leader.id}`}
              className="group text-center"
            >
              {/* Portrait */}
              <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-gray-100 mb-4">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <span className="text-[var(--gold)] text-2xl font-serif font-bold">
                    {leader.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif font-semibold text-gray-900 group-hover:text-[var(--gold)] transition-colors">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{leader.title}</p>
              <p className="text-xs text-gray-500">{leader.organization}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
