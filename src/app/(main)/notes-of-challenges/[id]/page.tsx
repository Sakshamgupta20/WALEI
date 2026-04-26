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
    body: { heading?: string; text: string }[];
    quote: string;
    quoteAttribution: string;
  }
> = {
  "1": {
    title: "CareMother: Technology with Compassion",
    subtitle:
      "Dr. Shantanu Pathak is a technology-driven entrepreneur and social innovator who founded CareMother in 2015 and Doto Health in 2023. With a PhD from IIT Bombay and a passion for women's and maternal health, he leads CareMother's mission to transform low-resource settings through AI-powered digital tools that improve maternal and neonatal care. Under his leadership, CareMother has been recognized for leveraging AI and digital innovation to tackle maternal health challenges, with installations across 200+ towns in India and six other developing countries.",
    date: "Jan 20, 2026",
    author: "Dr. Shantanu Pathak",
    designation: "CEO & Founder",
    institution: "CareMother / Doto Health",
    image: "/images/notes/challenges/shantanu-pathak.png",
    body: [
      {
        heading: "Building CareMother: Technology with Compassion",
        text: "I founded Doto Health, better known as CareMother, a digital health company focused on maternal and newborn care. Our product suite includes last-mile kits for detecting high-risk pregnancies, integrated labour and fetal monitoring systems, newborn monitoring solutions, and a connected care platform with AI-based decision support. We've completed over 2,000 installations across 200+ towns in India and six other developing countries.",
      },
      {
        heading: "Rooted in Resilience: From Vidarbha to Vision",
        text: "I was raised in the Vidarbha region of Maharashtra, now classified as an aspirational district by the Indian government. My educational journey began at Navodaya Vidyalaya, a fully government-sponsored school that laid the foundation for my values and aspirations. Losing my father at age 13 made healthcare inaccessibility personal and deeply transformative, shaping my lifelong commitment to building equitable systems.",
      },
      {
        heading: "Academic Excellence with Purpose",
        text: "I earned my bachelor's degree in Electronics & Telecommunication Engineering from Mumbai University. I later pursued a PhD at IIT Bombay, a pivotal phase that allowed me to explore problem solving through technology. I also worked in Shenzhen, China, gaining early industry experience in telecom systems before returning to India with a focus on socially driven innovation.",
      },
      {
        heading: "Personal Experiences, Not Professional Legacy, Fuelled My Direction",
        text: "When people ask if I come from a family of doctors, I say: “No, I come from a family of patients.” This personal lens helped me understand the pain and delays in accessing basic healthcare, especially for mothers and newborns in underserved areas. These formative experiences led me to work on grassroots innovations as early as 2011, including water filters, solar dryers, and LED lighting systems.",
      },
      {
        heading: "Discovery of a National Problem Worth Solving",
        text: "I identified maternal and newborn health as a critical area. India contributes significantly to global maternal deaths, and over 50% of these are related to undetected high-risk pregnancies. The hypothesis was: if frontline workers were equipped to detect anaemia, gestational diabetes, and pregnancy-induced hypertension early, many of these deaths could be prevented.",
      },
      {
        heading: "Research That Reaches Real Lives",
        text: "At IIT Bombay, I had the opportunity to work with Professor Rohit Srivastava, whose support enabled me to conduct translational research. This unique approach allowed me to pilot solutions in the field while working on my PhD. During this period, we published impactful data and tested technology directly with health workers and communities to validate our approach, ensuring solutions were both practical and effective.",
      },
      {
        heading: "The Shift to Entrepreneurship: Making Innovation Sustainable",
        text: "I realized that innovation must be sustainable to scale. This insight led to my transition from researcher to entrepreneur. I had to learn business fundamentals like reading balance sheets, understanding P&L statements, hiring and building teams, all while staying grounded in my social mission. Entrepreneurship, I learned, is a dynamic blend of science, art, and constant adaptation.",
      },
      {
        heading: "Human-Centered Innovation in Action Saves Lives",
        text: "One case from Bengaluru during COVID-19 stands out: a third-trimester patient monitored at home using our fetal monitoring kit showed signs of distress. The alert led to a timely C-section, preventing what could have been a stillbirth. Another example in tribal India showed the emotional power of hearing a baby's heartbeat, so compelling that families returned just to hear it again. Over time, we even began sharing heartbeat audio clips via WhatsApp, deepening family engagement and making maternal care more personal and emotionally connected.",
      },
      {
        heading: "Global Expansion with Local Impact",
        text: "To date, CareMother has touched over 600,000 pregnancies. In the next five years, we aim to reach 5 million pregnancies worldwide. We've already piloted our solutions in three Asian and three African countries, with plans to enter developing markets like the Middle East, Africa, and Southeast Asia by 2026, and developed countries like the UK and US by 2027, using healthcare-provider-led or homecare-based models.",
      },
      {
        heading: "Collaborations that Shape the Future",
        text: "Key partnerships with government innovation programmes like DST, BIRAC, and incubation centres enabled early growth by funding R&D and field trials. We've also received grants to test global hypotheses. Attending events like the World Health Assembly in Geneva opened doors for international collaborations, strategic planning, and engagement with policymakers. These alliances are critical to scaling our vision for equitable maternal care across geographies.",
      },
    ],
    quote:
      "I don't come from a family of doctors. I come from a family of patients, and that lens shapes every product we build at CareMother.",
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
      {
        text: "India's healthcare system serves over 1.4 billion people, yet it struggles with chronic inefficiencies, from misdiagnoses in rural clinics to overwhelmed urban hospitals that see hundreds of patients daily. The promise of data analytics in healthcare is not simply automation; it is the ability to surface patterns that human practitioners, constrained by time and cognitive bandwidth, inevitably miss. IYASO was founded on the conviction that well-structured data can bridge the gap between the healthcare India has and the healthcare India needs.",
      },
      {
        text: "Predictive analytics is already reshaping how hospitals manage patient flow, anticipate disease outbreaks, and allocate scarce resources. By analysing admission records, lab results, and even regional weather data, IYASO's platform can forecast patient surges with remarkable accuracy, allowing hospital administrators to pre-position staff and supplies rather than scrambling reactively. In pilot deployments across three mid-sized hospitals in Maharashtra, the system reduced emergency department wait times by 22% and cut unnecessary diagnostic tests by nearly 15%.",
      },
      {
        text: "The real challenge, however, is not building the algorithms. It is building trust. Indian healthcare providers, particularly senior clinicians, are understandably sceptical of AI-generated recommendations. IYASO's approach has been to position its tools as decision-support systems rather than decision-making systems, ensuring that the physician always retains final authority. This design philosophy has been critical to adoption: clinicians engage more willingly with a system that augments their judgement rather than one that appears to override it.",
      },
      {
        text: "Data quality remains the single largest obstacle to scaling healthcare analytics in India. Unlike developed markets where electronic health records are standardised and comprehensive, Indian patient data is fragmented across handwritten prescriptions, incompatible hospital management systems, and informal record-keeping practices. IYASO invests heavily in data normalisation pipelines, unglamorous but essential infrastructure that converts messy, heterogeneous inputs into clean, analysable datasets.",
      },
      {
        text: "Looking ahead, the convergence of wearable health devices, telemedicine platforms, and advanced analytics creates an unprecedented opportunity. India could leapfrog traditional healthcare delivery models entirely, moving toward a system where continuous monitoring and early intervention replace the current paradigm of late diagnosis and expensive treatment. The startup journey in health-tech is fraught with regulatory complexity and long sales cycles, but the scale of impact possible in a country of India's size makes the challenge worth pursuing.",
      },
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
