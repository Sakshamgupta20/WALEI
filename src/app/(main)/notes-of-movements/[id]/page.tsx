import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User, Quote, Linkedin, Instagram, Share2 } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const accentColor = "var(--accent-movements)";

const articles: Record<
  string,
  {
    title: string;
    subtitle: string;
    date: string;
    author: string;
    designation: string;
    institution: string;
    image: string;
    linkedinCard?: string;
    body: { heading?: string; text: string }[];
    quote: string;
    quoteAttribution: string;
  }
> = {
  "1": {
    title: "We Have a Molecular Recycling Challenge",
    subtitle:
      "Dr. Bhaskar Paul began his journey in Medinipur, West Bengal, completed his graduation from Vidyasagar University, and earned his doctorate at IIT Kanpur under Prof. S. Kundu. His postdoctoral path took him to UC Riverside (Prof. R. Schrock) and Oxford (Prof. E. Anderson), and he is currently at the Max Planck Institute for Chemical Energy Conversion (MPI CEC) with Prof. W. Leitner. His research centres on sustainable catalysis, adaptive materials, and organometallic chemistry, designing catalytic systems for efficient transformations of CO₂ and hydrogen.",
    date: "Jan 24, 2026",
    author: "Dr. Bhaskar Paul",
    designation: "Researcher",
    institution: "Max Planck Institute for Chemical Energy Conversion (MPI CEC)",
    image: "/images/notes/movements/bhaskar-paul.jpg",
    linkedinCard: "/images/linkedin/nom-bhaskar-paul.png",
    body: [
      {
        heading: "We Have a Molecular Recycling Challenge",
        text: "I've spent my career learning how to talk to molecules to make them work for us. My work focuses on designing sustainable catalysts that trigger low-energy transformations, essentially teaching hydrogen and carbon dioxide to dance. By blending surface chemistry with advanced characterization, I'm building the responsive systems our green-energy future actually needs.",
      },
      {
        heading: "Carbon: Recycled, Not Released",
        text: "The biggest hurdle to a sustainable future is energy efficiency. To solve this, I develop high-performance catalytic materials that make CO₂ and H₂ conversion faster, cheaper, and cleaner. It's about more than just a reaction in a flask; it's about creating recyclable, scalable solutions that move us toward a circular chemical economy.",
      },
      {
        heading: "It's Not a Solution, It's a Prototype",
        text: "CO₂ conversion is no longer just a laboratory curiosity, it's a rapidly maturing field of materials science. From electrochemical CO₂-to-ethylene systems to high-stability CO production, the focus is now on durability and precision. The chemical industry now needs to build faster, smarter, and more tunable systems.",
      },
      {
        heading: "Sustainably Intelligent",
        text: "We are entering the era of adaptive, multifunctional catalysts that think as fast as they react. By merging the precision of molecular chemistry with the durability of materials science, we are unlocking low-energy paths to turn CO₂ into fuels. Backed by renewable energy, these tunable systems are the final piece of the puzzle for a truly carbon-neutral world.",
      },
      {
        heading: "Catalyst Can Switch",
        text: "My research focuses on the sophisticated world of organometallic complexes as catalysts for change. By designing switchable systems that respond to CO₂ and H₂, we are seeing ways to make lignin hydrogenation more selective and polymer design more sustainable. Now the work isn't just about the reaction; it's about the “intelligence” of the material extending into precise deuteration and cutting-edge electrochemical capture.",
      },
      {
        heading: "Perspective Shift",
        text: "I used to think the lab work was everything, but I now see that a clear narrative and a creative approach are what actually move the needle. Learning to think like a researcher has meant realizing that a well-posed question is often more impactful than the data itself.",
      },
      {
        heading: "Why & How",
        text: "My transition from a Master's student to an award-winning PhD researcher was defined by a shift toward independence and advanced catalyst synthesis, particularly in the utilization of methanol as a sustainable C1 source. That foundation was only the beginning, my postdoctoral work across several world-leading institutions has broadened my expertise from olefin metathesis to heterogeneous catalysis and material design. This trajectory has shaped me into a versatile, interdisciplinary scientist driven by understanding the “why” behind the “how.”",
      },
      {
        heading: "What Are Quick Wins",
        text: "I've found that financial stability doesn't change why you do research, but it certainly changes how you do it. For me, it has enabled a more focused, long-term vision in sustainable catalysis. Instead of chasing quick wins, I am now able to invest in meticulous project planning and highly reproducible science. This stability has turned into a tool for efficiency, encouraging a more thoughtful use of materials and a deliberate focus on high-impact innovations.",
      },
    ],
    quote:
      "I've spent my career learning how to talk to molecules to make them work for us, essentially teaching hydrogen and carbon dioxide to dance.",
    quoteAttribution: "Dr. Bhaskar Paul",
  },
  "2": {
    title: "Bacteria Are Winning the Arms Race",
    subtitle:
      "Dr. Richa Sharma's journey began in Bhagpat, Uttar Pradesh. She completed her graduation from Hindu College, University of Delhi, and her doctorate at MNIT Jaipur, before moving to Vrije Universiteit Brussel as a Marie Skłodowska-Curie IMPACT Fellow. Her research focuses on antivirulence therapeutics, skeletal editing, and digital chemistry, developing chemical strategies to combat microbial resistance, explore new molecular transformations, and integrate computational approaches with experimental chemistry.",
    date: "Jan 20, 2026",
    author: "Dr. Richa Sharma",
    designation: "Marie Skłodowska-Curie IMPACT Fellow",
    institution: "Vrije Universiteit Brussel",
    image: "/images/notes/movements/richa-sharma.png",
    body: [
      {
        heading: "Bacteria Are Winning the Arms Race",
        text: "After 40 years of antibiotic stagnation, Acinetobacter baumannii has climbed to the top of the WHO's most-wanted list. My postdoc work focuses on a new chemical scout: strained cyclocarbamates designed to strip these superbugs of their power.",
      },
      {
        heading: "Nature is the Ultimate Chemist",
        text: "But she doesn't give up her secrets easily. Extracting complex molecules from natural sources is slow, wasteful, and inefficient. My research focuses on developing the “blueprints”: new synthetic methods that allow us to build these complex pharmacophores from scratch, faster and cleaner.",
      },
      {
        heading: "Upgrading the OS",
        text: "Synthetic organic chemistry is getting a massive “software update.” We're moving past the era of trial-and-error and entering the age of skeletal editing and AI-driven design. It's no longer about just mixing chemicals; it's about precision engineering at the atomic level.",
      },
      {
        heading: "Real-World Impact",
        text: "Method development for its own sake is evolving into “synthesis with a purpose.” We are entering a phase where the metrics of success aren't just yield and selectivity, but how quickly a new method can be scaled to treat a patient. The future of our field lies at the intersection of fundamental discovery and industrial reality.",
      },
      {
        heading: "Perspective Shift",
        text: "The most dangerous phrase in a lab is “we've always done it this way.” Recent conferences have been a wake-up call: there are a thousand ways to solve a chemical bottleneck, and the most unexpected perspectives often lead to the biggest wins. It's not just about what you know; it's about who you listen to.",
      },
      {
        heading: "The Resilience",
        text: "In a PhD, a failed experiment feels like a setback. In a postdoc, it's just data. My journey across continents and academic milestones has traded my “imposter syndrome” for a deep, battle-tested resilience that keeps me focused when the chemistry gets tough.",
      },
      {
        heading: "Quality Over Quantity",
        text: "In the beginning of my career, success was measured by the amount of data I could generate. Today, success is measured by the quality of the questions I ask. I've traded the “rush to get results” for the “wisdom to find the right path”, and that shift has changed everything about how I approach the bench.",
      },
    ],
    quote:
      "The most dangerous phrase in a lab is “we've always done it this way.” The most unexpected perspectives often lead to the biggest wins.",
    quoteAttribution: "Dr. Richa Sharma",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = articles[id];
  return {
    title: article?.title || "Notes of Movements",
    description: article?.subtitle || "",
  };
}

export default async function NotesOfMovementsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles[id];

  if (!article) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Story not found
          </h1>
          <Link
            href="/notes-of-movements"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Notes of Movements
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Compact Dark Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-[2px]"
              style={{
                background: `linear-gradient(to right, transparent, ${accentColor})`,
              }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: accentColor }}
            >
              Notes of Movements
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          {/* Back Link */}
          <Link
            href="/notes-of-movements"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--gold)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Notes of Movements
          </Link>

          {/* Two-column: Text left, Image right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Article Text (2/3) */}
            <div className="lg:col-span-2">
              {/* Author & Meta */}
              <div className="mb-8">
                <span
                  className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full inline-block mb-4"
                  style={{
                    backgroundColor: "#6B5B9520",
                    color: accentColor,
                  }}
                >
                  Movement
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                  {article.author}
                </h2>
                <p className="text-sm text-gray-500">
                  {article.designation} · {article.institution}
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-3">
                  Introduction
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="prose-walei">
                {article.body.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    {section.heading && (
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                        {section.heading}
                      </h3>
                    )}
                    <p className="text-gray-700 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: Professor Image & Info (1/3) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-200">
                  {/* Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200">
                    {article.image ? (
                      <Image
                        src={`${basePath}${article.image}`}
                        alt={article.author}
                        fill
                        className="object-cover object-[center_20%]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={48} className="text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-base font-medium text-gray-900 mb-1">
                      {article.author}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">
                      {article.designation}
                    </p>
                    <p className="text-xs text-gray-400">
                      {article.institution}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 rounded-2xl bg-white border border-gray-200 p-5">
                  <Quote size={20} className="text-[#6B5B95] opacity-60 mb-3" />
                  <p className="text-sm text-gray-700 italic leading-relaxed mb-2 font-serif">
                    &ldquo;{article.quote}&rdquo;
                  </p>
                  <p className="text-xs text-gray-500">
                    &mdash; {article.quoteAttribution}
                  </p>
                </div>

                {/* Social Share */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://walei.org/notes-of-movements/${id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/walei_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://walei.org/notes-of-movements/${id}`)}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                  >
                    <Share2 size={16} />
                  </a>
                </div>

                {/* LinkedIn Card */}
                {article.linkedinCard && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={`${basePath}${article.linkedinCard}`}
                      alt={`${article.author} - Featured on LinkedIn`}
                      width={400}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
