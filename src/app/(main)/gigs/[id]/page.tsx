import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, User, Mail, Handshake, MessageSquare } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const gigs: Record<
  string,
  {
    name: string;
    verified: boolean;
    description: string;
    bio: string;
    services: string[];
    expertise: string[];
    institution: string;
    image: string | null;
    stats: { projects: number; satisfaction: string; experience: string };
  }
> = {
  "1": {
    name: "Dr. Shantanu Pathak",
    verified: true,
    description:
      "Health-tech innovation consultant with 15+ years in medical devices and maternal care technology.",
    bio: "Dr. Shantanu Pathak is the founder of CareMother, a pioneering health-tech company focused on maternal and neonatal care. With a background from IIT Bombay and extensive experience in medical device innovation, he bridges the gap between cutting-edge research and real-world healthcare solutions across India and beyond.",
    services: ["Maternal Health Technology", "Medical Device Design", "Health-Tech Startups", "Product Strategy", "Regulatory Compliance"],
    expertise: ["Consulting", "Medical Devices", "Health-Tech"],
    institution: "CareMother / IIT Bombay",
    image: "/images/notes/challenges/shantanu-pathak.png",
    stats: { projects: 12, satisfaction: "96%", experience: "15y" },
  },
  "2": {
    name: "Prof. Suman Chakraborty",
    verified: true,
    description:
      "Fluid mechanics expert offering research collaboration and academic mentorship.",
    bio: "Prof. Suman Chakraborty is a distinguished professor at IIT Kharagpur, renowned for his groundbreaking work in micro and nano-scale fluid dynamics. His research spans biomedical microfluidics, energy systems, and computational methods, with over 400 publications in leading journals.",
    services: ["Microfluidics", "Computational Fluid Dynamics", "Biomedical Engineering", "Academic Mentorship", "Research Strategy"],
    expertise: ["Research", "Mentorship", "Fluid Mechanics"],
    institution: "IIT Kharagpur",
    image: "/images/notes/future/suman-chakraborty.png",
    stats: { projects: 25, satisfaction: "98%", experience: "20y" },
  },
  "3": {
    name: "Viraj Kulkarni",
    verified: true,
    description:
      "Data analytics leader specializing in healthcare optimization and AI-driven solutions.",
    bio: "Viraj Kulkarni is the founder of IYASO, a data analytics company transforming healthcare delivery through AI. His work focuses on predictive analytics, operational optimization, and building data-driven decision frameworks for healthcare institutions.",
    services: ["Healthcare Analytics", "Machine Learning", "Data Strategy", "AI Implementation", "Operational Optimization"],
    expertise: ["Data Analytics", "Healthcare AI", "Strategy"],
    institution: "IYASO",
    image: "/images/notes/challenges/viraj-kulkarni.png",
    stats: { projects: 18, satisfaction: "94%", experience: "10y" },
  },
  "4": {
    name: "Dr. Richa Sharma",
    verified: false,
    description:
      "Environmental science researcher focused on sustainability and policy advocacy.",
    bio: "Dr. Richa Sharma is an environmental scientist at Vrije Universiteit Brussel, working at the intersection of sustainability research and policy. Her work focuses on developing evidence-based frameworks for environmental governance and corporate sustainability practices.",
    services: ["Environmental Policy", "Sustainability Frameworks", "Climate Research", "Corporate ESG", "Policy Advocacy"],
    expertise: ["Research", "Sustainability", "Policy"],
    institution: "Vrije Universiteit Brussel",
    image: "/images/notes/movements/richa-sharma.png",
    stats: { projects: 8, satisfaction: "92%", experience: "7y" },
  },
  "5": {
    name: "Dr. Bhaskar Paul",
    verified: true,
    description:
      "Chemical engineering specialist with expertise in catalysis and green chemistry.",
    bio: "Dr. Bhaskar Paul is a researcher at the Max Planck Institute for Chemical Energy Conversion, specializing in heterogeneous catalysis and sustainable chemistry. His research aims to develop novel catalytic materials for clean energy applications and green chemical processes.",
    services: ["Heterogeneous Catalysis", "Green Chemistry", "Clean Energy", "Materials Science", "Process Engineering"],
    expertise: ["Chemical Engineering", "Green Tech", "R&D"],
    institution: "MPI CEC, Germany",
    image: "/images/notes/movements/bhaskar-paul.jpg",
    stats: { projects: 14, satisfaction: "97%", experience: "12y" },
  },
  "6": {
    name: "Raman Kumar",
    verified: false,
    description:
      "Technology strategist bridging academic research with industry applications.",
    bio: "Raman Kumar is a technology strategist with deep expertise in translating academic research into viable commercial products. He advises universities and research labs on technology transfer, IP strategy, and building industry partnerships.",
    services: ["Technology Transfer", "IP Strategy", "Industry Partnerships", "Innovation Management", "Commercialization"],
    expertise: ["Strategy", "Tech Transfer", "Innovation"],
    institution: "Independent Consultant",
    image: "/images/team/raman.jpg",
    stats: { projects: 20, satisfaction: "95%", experience: "18y" },
  },
};

export function generateStaticParams() {
  return Object.keys(gigs).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const gig = gigs[id];
  return {
    title: gig ? `${gig.name} | Foundry` : "Foundry Detail",
    description: gig?.description || "",
  };
}

export default async function GigDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const gig = gigs[id];

  if (!gig) {
    return (
      <section className="py-32 bg-white text-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Gig Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The gig you are looking for does not exist.
          </p>
          <Link
            href="/gigs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} />
            Back to Foundry
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <Link
            href="/gigs"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Back to Foundry
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Expert Profile
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            {gig.name}
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            {gig.description}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Profile Card */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-gray-100 overflow-hidden sticky top-24">
                {/* Avatar Area */}
                <div className="bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold)]/25 p-8 flex flex-col items-center text-center">
                  {gig.image ? (
                    <Image
                      src={basePath + gig.image}
                      alt={gig.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover shadow-lg mb-4"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg mb-4">
                      <User size={40} className="text-[var(--gold)]" />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    {gig.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">
                    {gig.institution}
                  </p>
                  {gig.verified && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] text-xs font-bold uppercase">
                      <CheckCircle size={12} />
                      Verified Expert
                    </span>
                  )}
                </div>

                {/* Expertise */}
                <div className="p-6 border-t border-gray-100">
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-500 mb-3">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {gig.expertise.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 border-t border-gray-100">
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-500 mb-3">
                    Gig Metrics
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-gray-50">
                      <p className="text-lg font-semibold text-gray-900">{gig.stats.projects}</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">Projects</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gray-50">
                      <p className="text-lg font-semibold text-gray-900">{gig.stats.satisfaction}</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">Satisfaction</p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-gray-50">
                      <p className="text-lg font-semibold text-gray-900">{gig.stats.experience}</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Bio */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed">{gig.bio}</p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gig.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 rounded-xl bg-[var(--light)] border border-gray-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact / CTA */}
              {/* Connect section - hidden for now */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
