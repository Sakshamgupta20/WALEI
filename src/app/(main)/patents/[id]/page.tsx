import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  User,
  Building2,
  Clock,
  Globe,
  Lightbulb,
  Handshake,
  Mail,
  Shield,
  Award,
} from "lucide-react";

const patents: Record<
  string,
  {
    title: string;
    patentNo: string;
    patentee: string;
    designation: string;
    institution: string;
    domain: string;
    status: string;
    duration: string;
    jurisdiction: string;
    abstract: string[];
    usps: string[];
    collaborationOptions: string[];
  }
> = {
  "1": {
    title: "Nano-scale Drug Delivery System",
    patentNo: "IN202341045678",
    patentee: "Dr. Suman Chakraborty",
    designation: "Professor, Department of Mechanical Engineering",
    institution: "IIT Kharagpur",
    domain: "Biomedical Engineering",
    status: "Granted",
    duration: "2023 - 2043",
    jurisdiction: "India",
    abstract: [
      "The present invention relates to a novel nano-scale drug delivery system comprising biocompatible polymer nanoparticles functionalised with targeting ligands for site-specific therapeutic delivery. The system utilises a microfluidic fabrication process that enables precise control over particle size distribution (50-200 nm), drug encapsulation efficiency (>85%), and surface charge characteristics.",
      "The drug delivery vehicle employs a pH-responsive release mechanism that remains stable under physiological conditions (pH 7.4) while triggering controlled drug release in the acidic tumour microenvironment (pH 5.5-6.5). This selective release profile minimises systemic toxicity while maximising therapeutic concentration at the target site.",
      "In vitro studies demonstrate a 4.7-fold improvement in drug bioavailability compared to conventional formulations, with sustained release kinetics extending over 72 hours. In vivo studies in murine models show significant tumour regression with reduced off-target effects. The microfluidic fabrication approach enables scalable, reproducible manufacturing suitable for clinical translation.",
      "The invention further encompasses a surface modification strategy using PEGylation and antibody conjugation that extends circulation half-life by 3.2x while maintaining targeting specificity. This dual-functional coating addresses two of the most significant challenges in nanomedicine: rapid clearance by the reticuloendothelial system and insufficient accumulation at disease sites.",
    ],
    usps: [
      "pH-responsive release mechanism with >85% encapsulation efficiency",
      "4.7x improvement in drug bioavailability vs. conventional formulations",
      "Scalable microfluidic manufacturing process for clinical translation",
      "PEGylated surface with antibody conjugation for extended circulation (3.2x half-life)",
      "Sustained release kinetics over 72 hours with precise dosage control",
      "Biocompatible and biodegradable polymer matrix with minimal toxicity",
    ],
    collaborationOptions: ["Tech Transfer", "Joint Venture", "Licensing"],
  },
};

export function generateStaticParams() {
  return Object.keys(patents).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const patent = patents[id];
  return {
    title: patent ? `${patent.title} | Patents` : "Patent Detail",
    description: patent
      ? `Patent ${patent.patentNo} by ${patent.patentee}`
      : "",
  };
}

export default async function PatentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const patent = patents[id];

  if (!patent) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">
            Patent not found
          </h1>
          <Link
            href="/patents"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Patents
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
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
              Research IP
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Patent Detail
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Innovations available for licensing and collaboration.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          {/* Back Link */}
          <Link
            href="/patents"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--gold)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Patents
          </Link>

          {/* TOP card: Patent No, Title, Patentee + Collaboration options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 rounded-xl bg-[var(--light)] border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
                  <FileText size={20} className="text-[var(--gold)]" />
                </div>
                <p className="text-xs text-[var(--gold)] font-mono font-semibold">
                  {patent.patentNo}
                </p>
                <span
                  className={`ml-auto px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    patent.status === "Granted"
                      ? "bg-gray-800 text-white"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  {patent.status}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-light text-gray-900 mb-3">
                {patent.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <User size={14} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {patent.patentee}
                  </p>
                  <p className="text-xs text-gray-500">
                    {patent.designation}
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration Card (top right) */}
            <div className="lg:col-span-1 rounded-xl bg-[var(--dark)] p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-5">
                <Handshake size={18} className="text-[var(--gold)]" />
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
                  Collaboration
                </h3>
              </div>
              <div className="space-y-3 mb-6">
                {patent.collaborationOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    {option === "Tech Transfer" && (
                      <Shield size={16} className="text-[var(--gold)]" />
                    )}
                    {option === "Joint Venture" && (
                      <Handshake size={16} className="text-[var(--gold)]" />
                    )}
                    {option === "Licensing" && (
                      <Award size={16} className="text-[var(--gold)]" />
                    )}
                    <span className="text-sm text-gray-200">{option}</span>
                  </div>
                ))}
              </div>
              <a
                href={`mailto:walei.office@gmail.com?subject=Patent Inquiry - ${patent.patentNo}`}
                className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl bg-[var(--gold)] text-white text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors"
              >
                <Mail size={14} />
                Contact for Collaboration
              </a>
            </div>
          </div>

          {/* Middle row: LEFT info card + CENTER abstract */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* LEFT: Institution / Duration / Jurisdiction */}
            <div className="lg:col-span-1 rounded-xl bg-white border border-gray-100 p-6">
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-5">
                Patent Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Building2
                    size={16}
                    className="text-[var(--gold)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Institution / Company
                    </p>
                    <p className="text-sm text-gray-900">
                      {patent.institution}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="text-[var(--gold)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Patent Duration
                    </p>
                    <p className="text-sm text-gray-900">{patent.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe
                    size={16}
                    className="text-[var(--gold)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Patent Jurisdiction
                    </p>
                    <p className="text-sm text-gray-900">
                      {patent.jurisdiction}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb
                    size={16}
                    className="text-[var(--gold)] mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">
                      Domain
                    </p>
                    <p className="text-sm text-gray-900">{patent.domain}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER: Abstract ("Our Story" style) */}
            <div className="lg:col-span-2 rounded-xl bg-white border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-[var(--gold)]" />
                <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
                  Abstract
                </h2>
              </div>
              <div className="prose-walei">
                {patent.abstract.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* USP Section */}
          <div className="rounded-xl bg-[var(--light)] border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[var(--gold)]" />
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--gold)]">
                Unique Selling Propositions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patent.usps.map((usp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <div className="w-7 h-7 rounded-full bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb size={14} className="text-[var(--gold)]" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{usp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
