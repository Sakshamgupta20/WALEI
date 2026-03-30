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
    body: string[];
    quote: string;
    quoteAttribution: string;
  }
> = {
  "1": {
    title: "Navigating Research Cultures",
    subtitle:
      "The transition from Indian academia to European research culture brings unexpected challenges and profound growth opportunities.",
    date: "Jan 24, 2026",
    author: "Dr. Bhaskar Paul",
    designation: "Research Group Leader",
    institution: "MPI CEC, Germany",
    image: "/images/notes/movements/bhaskar-paul.jpg",
    linkedinCard: "/images/linkedin/nom-bhaskar-paul.png",
    body: [
      "When I left IIT Kharagpur for the Max Planck Institute for Chemical Energy Conversion in Muelheim, I thought the biggest adjustment would be the weather. I was wrong. The shift in research culture was far more profound, and ultimately more rewarding, than anything I had anticipated.",
      "In Indian academia, the professor-student relationship is deeply hierarchical. You address your supervisor as 'Sir' or 'Ma'am,' and there's an implicit understanding that the senior researcher's direction is not to be openly questioned. At Max Planck, I found myself in meetings where doctoral students would respectfully but firmly challenge their group leader's hypotheses. The first time a second-year PhD student questioned my experimental design in a group meeting, I felt a flash of discomfort. Within weeks, I recognised this culture of constructive questioning as one of the most powerful tools for doing better science.",
      "The administrative differences were equally striking. In India, a significant portion of a researcher's time goes into navigating bureaucratic processes, from procurement to travel approvals. In Germany, the institutional support infrastructure handles most of this, freeing researchers to focus almost entirely on their work. I found myself gaining nearly 10-15 hours per week that would have been consumed by paperwork in India.",
      "But the transition wasn't all gains. I deeply missed the organic collaboration that happens in Indian labs, the casual chai-time discussions that often spark the most creative ideas. German research culture, while excellent at structured collaboration, can feel isolating to someone accustomed to the constant social interaction of an Indian campus. Building community required deliberate effort.",
      "The funding landscape also taught me important lessons. While German research is generously funded compared to India, the expectations for accountability and output are proportionally higher. Every euro spent must be justified, and the peer review process for grant renewal is rigorous. This discipline in research spending is something India's growing research ecosystem could benefit from adopting.",
      "Looking back after five years, I see my journey as one of integration rather than assimilation. I've retained the intuitive, big-picture thinking that Indian scientific training emphasises, while adopting the meticulous documentation and systematic experimental design that German research culture demands. The best science happens when diverse approaches converge.",
    ],
    quote:
      "Moving abroad doesn't mean leaving home behind. It means carrying the best of what shaped you into new contexts where it can create unexpected value. The IIT system taught me resourcefulness; Max Planck taught me rigour. Together, they've made me a better scientist.",
    quoteAttribution: "Dr. Bhaskar Paul",
  },
  "2": {
    title: "Finding Home in Brussels",
    subtitle:
      "An environmental scientist reflects on building a life between continents while pursuing sustainability research in the heart of Europe.",
    date: "Jan 20, 2026",
    author: "Dr. Richa Sharma",
    designation: "Environmental Scientist",
    institution: "Vrije Universiteit Brussel",
    image: "/images/notes/movements/richa-sharma.png",
    body: [
      "Brussels was never on my radar. Growing up in Jaipur, my mental map of research destinations included the usual suspects, the US, the UK, maybe Australia. But when an opportunity at Vrije Universiteit Brussel appeared in the form of a postdoctoral fellowship in environmental sustainability and policy, I found myself boarding a flight to a city I knew almost nothing about. That leap of faith has shaped both my science and my sense of self in ways I could never have predicted.",
      "The first thing that struck me about Brussels was its multilayered identity. A city where French, Dutch, and English coexist on street signs, where the European Parliament sits alongside Art Nouveau facades, and where a researcher from Rajasthan can somehow feel both entirely foreign and oddly at home. This constant negotiation of identities, linguistic, cultural, institutional, mirrors my own experience as an Indian woman in European academia. I have learned to code-switch not just between languages but between worldviews, and this skill has unexpectedly enriched my research on sustainability policy.",
      "My work focuses on the intersection of environmental science and public policy, specifically, how cities in the Global South can adapt European sustainability frameworks without losing their local context. It is research that demands dual literacy: you need to understand both the technocratic precision of EU environmental directives and the ground-level realities of water management in Indian cities. Being an Indian researcher in Brussels gives me a unique vantage point. I sit at the crossroads of two policy worlds, and my lived experience in both lends credibility and nuance to my analysis that no amount of desk research could replicate.",
      "The personal side of this journey has been equally transformative. Building community in a new country as a researcher is a particular kind of challenge. Your colleagues become your first social circle, but the transient nature of academic life means people are constantly arriving and leaving. I have learned to invest deeply in relationships while holding them lightly, a paradox that mirrors the immigrant experience more broadly. The Indian community in Brussels, though small, has been a lifeline. Weekend gatherings over homemade dal and chai have become rituals that anchor me to a sense of belonging even as my professional life unfolds in seminar rooms and policy workshops conducted in languages I am still mastering.",
      "What I have come to understand is that dual identity is not a deficit. It is a research methodology. The ability to see a problem from two cultural vantage points simultaneously is a form of intellectual depth that monocultural perspectives simply cannot achieve. When I present my work on sustainable urban planning, I bring not just data and models but a lived understanding of what it means to navigate scarcity, aspiration, and institutional complexity across very different societies. Brussels, with its own beautifully fractured identity, has taught me that wholeness does not require uniformity. You can be fully Indian and fully European in your scientific thinking, and the tension between these identities is where the most interesting questions live.",
    ],
    quote:
      "Dual identity is not a deficit. It is a research methodology. The ability to see a problem from two cultural vantage points simultaneously is a form of intellectual depth that monocultural perspectives simply cannot achieve.",
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
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
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
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
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
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
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
                {article.body.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
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
