import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const WALEI_LINKEDIN = "https://www.linkedin.com/company/walei/";

const upcomingNotes = [
  {
    category: "Notes of Future",
    href: WALEI_LINKEDIN,
    title: "DIMENSIONS OF FLUIDS",
    speaker: "Prof. Suman Chakraborty",
    institution: "IIT KGP",
    color: "var(--accent-future)",
    image: "/images/notes/future/suman-chakraborty.png",
    external: true,
  },
  {
    category: "Notes of Challenges",
    href: WALEI_LINKEDIN,
    title: "IYASO",
    speaker: "Viraj Kulkarni",
    institution: "Founder & CEO",
    color: "var(--accent-challenges)",
    image: "/images/notes/challenges/viraj-kulkarni.png",
    external: true,
  },
];

export function UpcomingSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Upcoming
            </h2>
            <p className="text-gray-500 mt-2">Featured voices in the next series</p>
          </div>
          <Link
            href="/notes"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: "var(--gold)" }}
          >
            View all upcoming
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingNotes.map((note) => (
            <a
              key={note.category}
              href={note.href}
              target={note.external ? "_blank" : undefined}
              rel={note.external ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-500"
            >
              {/* Full-bleed photo card */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={`${basePath}${note.image}`}
                  alt={note.speaker}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Category badge top-left */}
                <div className="absolute top-5 left-5">
                  <span
                    className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: note.color }}
                  >
                    {note.category}
                  </span>
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                    {note.title}
                  </h3>
                  <p className="text-base text-white/90 font-medium">{note.speaker}</p>
                  <p className="text-sm text-white/60">{note.institution}</p>
                </div>

                {/* Arrow top-right */}
                <div className="absolute top-5 right-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors"
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
