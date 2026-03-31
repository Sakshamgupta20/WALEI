import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  User,
  Users,
  MapPin,
  Globe,
  Layers,
  Rocket,
  Mail,
  MessageSquare,
  Package,
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const startups: Record<
  string,
  {
    name: string;
    tagline: string;
    founder: string;
    founderDesignation: string;
    institution: string;
    teamSize: number;
    location: string;
    website: string;
    sector: string;
    logo: string;
    story: string[];
    products: {
      name: string;
      description: string;
    }[];
  }
> = {
  "1": {
    name: "CareMother",
    tagline: "AI-powered maternal health monitoring for rural India",
    founder: "Dr. Shantanu Pathak",
    founderDesignation: "CEO & Founder",
    institution: "IIT Bombay",
    teamSize: 25,
    location: "Mumbai, India",
    website: "https://caremother.in",
    sector: "Healthcare",
    logo: "/images/notes/challenges/shantanu-pathak.png",
    story: [
      "CareMother was born from a deeply personal mission: to ensure that no mother in India should die from preventable pregnancy complications simply because she lives far from a hospital. Founded by Dr. Shantanu Pathak during his time at IIT Bombay, the company has grown from a research project into a life-saving venture that operates across 15 Indian states.",
      "The core innovation is a portable, AI-powered device that enables frontline health workers, ANMs and ASHA workers, to conduct comprehensive antenatal check-ups in remote villages. The device measures vital parameters including blood pressure, fetal heart rate, maternal weight, haemoglobin levels, and urine protein, transmitting data in real-time to obstetricians at district hospitals.",
      "What makes CareMother's approach unique is its deep integration with India's existing public health infrastructure. Rather than creating parallel systems, the team designed their technology to work within the government's HMIS (Health Management Information System) framework. This means every screening automatically feeds into the national maternal health database, enabling better policy decisions.",
      "The impact has been remarkable. In districts where CareMother operates, high-risk pregnancy identification has increased by over 300%, and timely referrals to hospitals have reduced maternal complications significantly. The company has screened over 500,000 pregnancies and helped identify more than 75,000 high-risk cases that might otherwise have gone undetected.",
      "Looking ahead, CareMother is expanding into postpartum care monitoring and neonatal health assessment, building a comprehensive continuum-of-care platform. The team is also exploring AI models that can predict pregnancy complications weeks before clinical symptoms appear, potentially revolutionising preventive maternal healthcare.",
    ],
    products: [
      {
        name: "CareMother Fetal Monitor",
        description:
          "Portable AI-powered device for comprehensive antenatal check-ups. Measures blood pressure, fetal heart rate, haemoglobin, urine protein, and maternal weight. Connects to cloud platform for real-time remote monitoring.",
      },
      {
        name: "CareMother Analytics Dashboard",
        description:
          "Web-based platform for obstetricians and health administrators to monitor high-risk pregnancies across districts. Includes automated risk scoring, referral management, and population health analytics.",
      },
    ],
  },
  "2": {
    name: "IYASO",
    tagline: "Data analytics platform for healthcare optimization and AI-driven diagnostics",
    founder: "Viraj Kulkarni",
    founderDesignation: "Founder & CEO",
    institution: "Startup",
    teamSize: 10,
    location: "India",
    website: "https://iyaso.in",
    sector: "Healthcare AI",
    logo: "/images/notes/challenges/viraj-kulkarni.png",
    story: [
      "IYASO is building an AI-driven healthcare data analytics platform that transforms how healthcare providers understand and act on patient data. By combining advanced machine learning with deep domain expertise, IYASO helps hospitals and clinics optimize their operations and improve patient outcomes.",
      "The platform integrates seamlessly with existing hospital management systems, providing real-time insights on patient flow, resource utilization, and clinical decision support. This enables healthcare institutions to reduce wait times, optimize bed management, and identify potential health risks early.",
    ],
    products: [
      {
        name: "IYASO Analytics Platform",
        description:
          "AI-powered healthcare data analytics for hospitals and clinics. Provides real-time insights on patient flow, resource utilization, and clinical decision support.",
      },
    ],
  },
  "3": {
    name: "NanoClean",
    tagline: "Nanotechnology-based air purification solutions for urban environments",
    founder: "Dr. Prateek Sharma",
    founderDesignation: "Founder & CEO",
    institution: "IIT Delhi",
    teamSize: 15,
    location: "New Delhi, India",
    website: "https://nanoclean.in",
    sector: "Clean Tech",
    logo: "",
    story: [
      "NanoClean leverages cutting-edge nanotechnology to develop air purification solutions that are effective, affordable, and scalable for urban environments. Born out of research at IIT Delhi, the company addresses one of the most pressing environmental challenges facing Indian cities.",
      "Their flagship nanotechnology-based filters offer superior filtration efficiency at a fraction of the cost of conventional HEPA filters, making clean air accessible to millions of urban residents.",
    ],
    products: [
      {
        name: "NanoClean Air Filter",
        description:
          "Nanotechnology-based air purification filter that offers superior filtration efficiency at a fraction of the cost of conventional solutions.",
      },
    ],
  },
  "4": {
    name: "AgriSense",
    tagline: "IoT sensors for precision agriculture and crop monitoring at scale",
    founder: "Dr. Meera Gupta",
    founderDesignation: "Founder & CEO",
    institution: "IISc Bangalore",
    teamSize: 12,
    location: "Bangalore, India",
    website: "https://agrisense.in",
    sector: "AgriTech",
    logo: "",
    story: [
      "AgriSense is transforming Indian agriculture through IoT-based precision farming solutions. Founded by Dr. Meera Gupta from IISc Bangalore, the company develops affordable sensor networks that help farmers monitor soil health, weather patterns, and crop conditions in real time.",
      "By making precision agriculture accessible to smallholder farmers, AgriSense is helping increase crop yields while reducing water and fertilizer usage, contributing to both food security and environmental sustainability.",
    ],
    products: [
      {
        name: "AgriSense Sensor Kit",
        description:
          "IoT sensor network for real-time monitoring of soil moisture, temperature, humidity, and nutrient levels. Includes mobile app with AI-powered recommendations for irrigation and fertilization.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(startups).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const startup = startups[id];
  return {
    title: startup ? `${startup.name} | Startups` : "Startup Detail",
    description: startup?.tagline || "",
  };
}

export default async function StartupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const startup = startups[id];

  if (!startup) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Startup not found
          </h1>
          <Link
            href="/startups"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Startups
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
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
              Startup Profile
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            {startup.name}
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            {startup.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          {/* Back Link */}
          <Link
            href="/startups"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--gold)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Startups
          </Link>

          {/* Two-column: Info card LEFT, Story RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Info Card (1/3) */}
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-[var(--light)] border border-gray-100 overflow-hidden sticky top-24">
                {/* Founder Image */}
                <div className="aspect-[4/3] relative bg-gradient-to-br from-[var(--gold)]/10 to-[var(--gold)]/20">
                  {startup.logo ? (
                    <Image
                      src={`${basePath}${startup.logo}`}
                      alt={startup.founder}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Rocket size={48} className="text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Info Fields */}
                <div className="p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <User size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Founder
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {startup.founder}
                      </p>
                      <p className="text-xs text-gray-500">
                        {startup.founderDesignation}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Team Size
                      </p>
                      <p className="text-sm text-gray-900">
                        {startup.teamSize} members
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Location
                      </p>
                      <p className="text-sm text-gray-900">{startup.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Sector
                      </p>
                      <p className="text-sm text-gray-900">{startup.sector}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Website
                      </p>
                      <a
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--gold)] hover:underline"
                      >
                        {startup.website.replace("https://", "")}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Rocket size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                        Institution
                      </p>
                      <p className="text-sm text-gray-900">
                        {startup.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Our Story (2/3) */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[2px] bg-[var(--gold)]" />
                  <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
                    Our Story
                  </h2>
                </div>
                <div className="prose-walei">
                  {startup.story.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Products Section */}
              {startup.products.length > 0 && (
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-[2px] bg-[var(--gold)]" />
                    <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
                      Products
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {startup.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-gray-100 bg-[var(--light)] p-5"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
                            <Package
                              size={16}
                              className="text-[var(--gold)]"
                            />
                          </div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons - hidden for now */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
