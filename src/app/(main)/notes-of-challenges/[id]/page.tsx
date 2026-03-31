import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User, Quote, Linkedin, Instagram, Share2 } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const accentColor = "var(--accent-challenges)";

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
    title: "Urban Water Scarcity",
    subtitle:
      "With 21 Indian cities expected to run out of groundwater, researchers and civic leaders discuss scalable solutions for one of India's most pressing crises.",
    date: "Jan 20, 2026",
    author: "Dr. Shantanu Pathak",
    designation: "Researcher & Entrepreneur",
    institution: "IIT Bombay",
    image: "/images/notes/challenges/shantanu-pathak.png",
    body: [
      "India is staring at a water crisis of unprecedented proportions. According to NITI Aayog, 21 major Indian cities are projected to run out of groundwater by 2030, affecting over 100 million people. The crisis isn't just about scarcity. It's about mismanagement, aging infrastructure, and a fundamental disconnect between water policy and ground reality.",
      "Urban India consumes roughly 150 litres per capita per day, but nearly 40% of treated water is lost to leakage in distribution networks. Cities like Bangalore, which depend on water pumped from over 100 km away, spend enormous energy budgets on water transport while losing a significant portion to non-revenue water. The economics of urban water supply are broken, and engineering solutions must address both supply and demand sides.",
      "Decentralised water treatment is emerging as a promising approach. Rather than depending solely on massive centralised plants, researchers are developing modular treatment systems that can be deployed at the ward or community level. These systems use membrane bioreactors, constructed wetlands, and advanced oxidation processes to treat greywater for reuse, reducing the load on freshwater sources by up to 30%.",
      "Rainwater harvesting, once dismissed as insufficient for urban needs, is being reimagined through IoT-enabled smart collection systems. Chennai's experience after the 2019 water crisis demonstrated that systematic rainwater harvesting can recharge aquifers and provide meaningful supplementary supply. The key is moving from voluntary adoption to mandated, well-engineered systems integrated into building codes.",
      "Perhaps the most critical intervention needed is in agricultural water use, which accounts for nearly 80% of India's total water consumption. Drip irrigation, soil moisture sensing, and crop pattern optimisation can dramatically reduce agricultural water demand, freeing up resources for urban centres. The challenge is not technological. It's about creating the right incentive structures and policy frameworks to drive adoption at scale.",
    ],
    quote:
      "We don't have a water scarcity problem. We have a water management problem. India receives enough rainfall to meet its needs. The challenge is capturing, storing, and distributing it intelligently.",
    quoteAttribution: "Dr. Shantanu Pathak",
  },
  "2": {
    title: "Healthcare Data Analytics",
    subtitle:
      "How AI-driven diagnostics and data analytics platforms are optimising healthcare delivery across India.",
    date: "Jan 16, 2026",
    author: "Viraj Kulkarni",
    designation: "Founder",
    institution: "IYASO",
    image: "/images/notes/challenges/viraj-kulkarni.png",
    body: [
      "India's healthcare system serves over 1.4 billion people, yet it struggles with chronic inefficiencies, from misdiagnoses in rural clinics to overwhelmed urban hospitals that see hundreds of patients daily. The promise of data analytics in healthcare is not simply automation; it is the ability to surface patterns that human practitioners, constrained by time and cognitive bandwidth, inevitably miss. IYASO was founded on the conviction that well-structured data can bridge the gap between the healthcare India has and the healthcare India needs.",
      "Predictive analytics is already reshaping how hospitals manage patient flow, anticipate disease outbreaks, and allocate scarce resources. By analysing admission records, lab results, and even regional weather data, IYASO's platform can forecast patient surges with remarkable accuracy, allowing hospital administrators to pre-position staff and supplies rather than scrambling reactively. In pilot deployments across three mid-sized hospitals in Maharashtra, the system reduced emergency department wait times by 22% and cut unnecessary diagnostic tests by nearly 15%.",
      "The real challenge, however, is not building the algorithms. It is building trust. Indian healthcare providers, particularly senior clinicians, are understandably sceptical of AI-generated recommendations. IYASO's approach has been to position its tools as decision-support systems rather than decision-making systems, ensuring that the physician always retains final authority. This design philosophy has been critical to adoption: clinicians engage more willingly with a system that augments their judgement rather than one that appears to override it.",
      "Data quality remains the single largest obstacle to scaling healthcare analytics in India. Unlike developed markets where electronic health records are standardised and comprehensive, Indian patient data is fragmented across handwritten prescriptions, incompatible hospital management systems, and informal record-keeping practices. IYASO invests heavily in data normalisation pipelines, unglamorous but essential infrastructure that converts messy, heterogeneous inputs into clean, analysable datasets.",
      "Looking ahead, the convergence of wearable health devices, telemedicine platforms, and advanced analytics creates an unprecedented opportunity. India could leapfrog traditional healthcare delivery models entirely, moving toward a system where continuous monitoring and early intervention replace the current paradigm of late diagnosis and expensive treatment. The startup journey in health-tech is fraught with regulatory complexity and long sales cycles, but the scale of impact possible in a country of India's size makes the challenge worth pursuing.",
    ],
    quote:
      "The biggest bottleneck in healthcare AI isn't the technology. It's the data. Clean, standardised, interoperable health data is the foundation everything else depends on.",
    quoteAttribution: "Viraj Kulkarni",
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
    title: article?.title || "Notes of Challenges",
    description: article?.subtitle || "",
  };
}

export default async function NotesOfChallengesDetailPage({
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
            Article not found
          </h1>
          <Link
            href="/notes-of-challenges"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Notes of Challenges
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
              Notes of Challenges
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
            href="/notes-of-challenges"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--gold)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Notes of Challenges
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
                    backgroundColor: "#C54B4B20",
                    color: accentColor,
                  }}
                >
                  Challenge
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
                  <Quote size={20} className="text-[#C54B4B] opacity-60 mb-3" />
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
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://walei.org/notes-of-challenges/${id}`)}`}
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
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://walei.org/notes-of-challenges/${id}`)}`}
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
