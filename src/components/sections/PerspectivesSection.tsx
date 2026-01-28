import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const perspectives = [
  {
    id: "1",
    category: "NOTES OF FUTURE",
    title: "Prof. Dipankar Chatterji on the future of microbial research",
    date: "15.01.2026",
    author: "Prof. Dipankar Chatterji",
    institution: "IISc Bangalore",
    image: "/images/scientists/scientist-1.png",
    color: "var(--accent-future)",
  },
  {
    id: "2",
    category: "NOTES OF CHALLENGES",
    title: "Building a health-tech startup: Lessons from CareMother",
    date: "08.01.2026",
    author: "Dr. Shantanu Pathak",
    institution: "CareMother",
    image: "/images/scientists/scientist-3.png",
    color: "var(--accent-challenges)",
  },
];

export function PerspectivesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--light)]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[var(--dark)]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
                Latest Perspectives
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Featured Stories
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--teal)] transition-colors"
          >
            View all news
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {perspectives.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={`${basePath}${item.image}`}
                  alt={item.author}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-10 right-10 w-12 h-12 rounded-full border border-white/10" />

                {/* Category badge */}
                <div
                  className="absolute top-6 left-6 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.category}
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-light text-white leading-snug mb-4 group-hover:text-gray-100 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white font-medium">{item.author}</p>
                      <p className="text-xs text-gray-400">{item.institution} · {item.date}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-white/20 transition-colors"
                    >
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--teal)] transition-colors"
          >
            View all news
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
