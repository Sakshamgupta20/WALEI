import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const upcomingNotes = [
  {
    category: "Notes of Future",
    href: "/notes-of-future",
    title: "DIMENSIONS OF FLUIDS",
    speaker: "Prof. Suman Chakraborty",
    institution: "IIT KGP",
    color: "var(--accent-future)",
    bgFrom: "#f5e6c8",
    bgTo: "#e8d4a8",
    image: "/images/scientists/suman-chakraborty.png",
  },
  {
    category: "Notes of Challenges",
    href: "/notes-of-challenges",
    title: "IYASO",
    speaker: "Viraj Kulkarni",
    institution: "Founder & CEO",
    color: "var(--accent-challenges)",
    bgFrom: "#f5d4d4",
    bgTo: "#e8bfbf",
    image: "/images/team/team-member-2.jpg",
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
            href="/notes-of-future"
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
            style={{ color: "var(--teal)" }}
          >
            View all upcoming
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {upcomingNotes.map((note) => (
            <Link
              key={note.category}
              href={note.href}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Background with gradient */}
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${note.bgFrom} 0%, ${note.bgTo} 100%)` }}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-8 left-8 w-32 h-32 rounded-full border border-black/5" />
                  <div className="absolute bottom-8 right-[40%] w-20 h-20 rounded-full border border-black/5" />
                </div>

                {/* Speaker Photo (circular, positioned right) */}
                <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    {/* Outer ring */}
                    <div
                      className="absolute -inset-2 rounded-full opacity-30"
                      style={{ border: `2px solid ${note.color}` }}
                    />
                    {/* Photo */}
                    <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={note.image}
                        alt={note.speaker}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Category Label */}
                <div
                  className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-xs uppercase tracking-wider shadow-sm"
                  style={{ color: note.color }}
                >
                  {note.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white border-t" style={{ borderColor: note.color }}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {note.title}
                    </h3>
                    <p className="text-base text-gray-800 font-medium">{note.speaker}</p>
                    <p className="text-sm text-gray-500">{note.institution}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: note.color }}
                  >
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
