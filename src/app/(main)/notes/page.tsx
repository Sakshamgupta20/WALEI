import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Notes | WALEI",
  description:
    "All notes across Future, Challenges, and Movements — conversations with leaders shaping science, policy, and identity.",
};

const series = [
  {
    key: "future",
    label: "Notes of Future",
    href: "/notes-of-future",
    color: "var(--accent-future)",
    articles: [
      {
        id: "1",
        title: "India's Semiconductor Ambitions: From Design to Fabrication",
        excerpt:
          "With $10 billion committed to the India Semiconductor Mission, experts debate whether India can become a global chip manufacturing hub by 2030.",
        date: "Jan 22, 2026",
        author: "Prof. V. Ramgopal Rao",
        image: "/images/notes/future/v-ramgopal-rao.jpg",
      },
      {
        id: "2",
        title: "Dimensions of Fluids: Micro to Macro Scale Phenomena",
        excerpt:
          "Exploring the fascinating world of fluid dynamics across scales — from microfluidics in medical diagnostics to large-scale energy systems.",
        date: "Jan 18, 2026",
        author: "Prof. Suman Chakraborty",
        image: "/images/notes/future/suman-chakraborty.png",
      },
      {
        id: "3",
        title: "Molecular Biophysics: Decoding Life's Machinery",
        excerpt:
          "How structural biology and biophysics are revealing the intricate molecular machines that power living cells.",
        date: "Jan 15, 2026",
        author: "Prof. Dipankar Chatterji",
        image: "/images/notes/future/dipankar-chatterji.jpg",
      },
    ],
  },
  {
    key: "challenges",
    label: "Notes of Challenges",
    href: "/notes-of-challenges",
    color: "var(--accent-challenges)",
    articles: [
      {
        id: "1",
        title: "Water Scarcity in Urban India: Engineering Solutions at Scale",
        excerpt:
          "With 21 Indian cities expected to run out of groundwater, researchers and civic leaders discuss scalable solutions.",
        date: "Jan 20, 2026",
        author: "Dr. Shantanu Pathak",
        image: "/images/notes/challenges/shantanu-pathak.png",
      },
      {
        id: "2",
        title: "IYASO: Transforming Healthcare with Data Analytics",
        excerpt:
          "How AI-driven diagnostics and data analytics platforms are optimising healthcare delivery across India.",
        date: "Jan 16, 2026",
        author: "Viraj Kulkarni",
        image: "/images/notes/challenges/viraj-kulkarni.png",
      },
    ],
  },
  {
    key: "movements",
    label: "Notes of Movements",
    href: "/notes-of-movements",
    color: "var(--accent-movements)",
    articles: [
      {
        id: "1",
        title: "From IIT Kharagpur to Max Planck: Navigating Research Cultures",
        excerpt:
          "The transition from Indian academia to European research culture brings unexpected challenges and profound growth opportunities.",
        date: "Jan 24, 2026",
        author: "Dr. Bhaskar Paul",
        image: "/images/notes/movements/bhaskar-paul.jpg",
      },
      {
        id: "2",
        title: "Finding Home in Brussels: A Researcher's Dual Identity",
        excerpt:
          "Building a research career while maintaining connections to roots — the journey of an Indian researcher in Belgium.",
        date: "Jan 20, 2026",
        author: "Dr. Richa Sharma",
        image: "/images/notes/movements/richa-sharma.png",
      },
    ],
  },
];

export default function NotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
              All Notes
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Notes
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Conversations with leaders across science, innovation, and identity
            — spanning Future, Challenges, and Movements.
          </p>
        </div>
      </section>

      {/* Series Sections */}
      {series.map((s) => (
        <section key={s.key} className="py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-[2px]"
                  style={{ backgroundColor: s.color }}
                />
                <h2
                  className="text-lg font-medium"
                  style={{ color: s.color }}
                >
                  {s.label}
                </h2>
              </div>
              <Link
                href={s.href}
                className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                style={{ color: s.color }}
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.articles.map((article) => (
                <Link
                  key={article.id}
                  href={`${s.href}/${article.id}`}
                  className="group"
                >
                  <article className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div
                      className="h-1 w-full"
                      style={{ backgroundColor: s.color }}
                    />
                    <div
                      className="h-44 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${s.color}15 0%, ${s.color}30 100%)`,
                      }}
                    >
                      {article.image && (
                        <Image
                          src={`${basePath}${article.image}`}
                          alt={article.author}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm font-medium text-gray-900 group-hover:text-[var(--gold)] transition-colors line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <User size={10} />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
