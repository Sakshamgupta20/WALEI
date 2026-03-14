import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const perspectives = [
  {
    id: "1",
    category: "NOTES OF FUTURE",
    title: "On the future of microbial research",
    author: "Prof. Dipankar Chatterji",
    institution: "IISc Bangalore",
    image: "/images/notes/future/dipankar-chatterji.jpg",
    color: "var(--accent-future)",
    href: "/notes-of-future/3",
  },
  {
    id: "2",
    category: "NOTES OF CHALLENGES",
    title: "Building a health-tech startup: Lessons from CareMother",
    author: "Dr. Shantanu Pathak",
    institution: "CareMother",
    image: "/images/notes/challenges/shantanu-pathak.png",
    color: "var(--accent-challenges)",
    href: "/notes-of-challenges/1",
  },
  {
    id: "3",
    category: "NOTES OF MOVEMENTS",
    title: "Navigating Research Cultures",
    author: "Dr. Bhaskar Paul",
    institution: "MPI CEC, Germany",
    image: "/images/notes/movements/bhaskar-paul.jpg",
    color: "var(--accent-movements)",
    href: "/notes-of-movements/1",
  },
];

export function PerspectivesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--light)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900">
            Latest Notes
          </h2>
          <Link
            href="/notes"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            View All
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {perspectives.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={`${basePath}${item.image}`}
                  alt={item.author}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Category badge */}
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>
              </div>

              {/* Text section below image */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900 leading-snug mb-3 group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.institution}</p>
                  </div>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-[var(--gold)]/10 transition-colors">
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-[var(--gold)] transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            View All
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
