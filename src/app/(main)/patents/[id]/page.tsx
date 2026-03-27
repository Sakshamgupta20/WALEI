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
    email?: string;
    link?: string;
    authors?: string[];
  }
> = {
  "SS001-1": {
    title: "Process for H2O2-Mediated Near Ambient Condition Conversion of Nitrogen Source to Ammonia",
    patentNo: "568389",
    patentee: "Dr. Sumit Kumar Sonkar",
    designation: "Professor",
    institution: "Malaviya National Institute of Technology, Jaipur, India",
    domain: "Chemical / Green / Agriculture",
    status: "Granted",
    duration: "20 years from 19th December 2024",
    jurisdiction: "India (Indian Patent Office)",
    authors: ["Vishrant Kumar", "Rohit", "Anjali Kumari Garg", "Sumit Kumar Sonkar"],
    abstract: [
      "Aspects of present disclosure relate to H₂O₂-mediated near ambient condition thermal conversion of nitrogen source to Ammonia over iron filings. The process comprising of mixing H₂O₂ and H₂O to form a solution; adding a nitrogen source and iron fillings; packing resulting mixture into a reactor and heating at a pre-defined temperature to enable reduction reaction; and cooling down the reactor at a pre-defined time for stopping the reaction.",
      "This approach aims to develop methods for H₂O₂ mediated near ambient conditioned NO₃⁻ and nitrogen gas (N₂) into ammonia (NH₃) effectively. A promising strategy involves the thermal reduction of NO₃⁻ and N₂ using low-cost iron metal filings in the presence of hydrogen peroxide (H₂O₂) at 100°C.",
      "This method has demonstrated significant yields, with approximately 65 mM and 40 mM of produced NH₃ in reduction NO₃⁻ and N₂, respectively. The produced NH₃ is quantified and identified by using the Indophenol blue method and ¹H NMR spectroscopy, respectively.",
    ],
    usps: [
      "Low-energy, ambient-condition synthesis",
      "H₂O₂-mediated waste-to-ammonia chemistry",
      "Scalable, decentralized, onsite modularity",
      "Renewable-ready, zero-carbon production",
    ],
    collaborationOptions: ["Joint Venture", "Licensing"],
    email: "sksonkar.chy@mnit.ac.in",
  },
  "SS001-2": {
    title: "A Method of Utilization of Waste Industrial Iron Dust for Sunlight-Assisted Photoreduction of Toxic Cr(VI)",
    patentNo: "573068",
    patentee: "Dr. Sumit Kumar Sonkar",
    designation: "Professor",
    institution: "Malaviya National Institute of Technology, Jaipur, India",
    domain: "Chemical / Catalyst / Magnetic",
    status: "Granted",
    duration: "20 years from 5th September 2022",
    jurisdiction: "India (Indian Patent Office)",
    authors: ["Sumit Kumar Sonkar", "Jaidev Kaushik", "Twinkle", "Satyesh Raj Anand"],
    abstract: [
      "The present invention provides reduced iron nano particles as photo catalyst synthesized from industrial iron dust for treating toxic Cr(VI) ions present in the wastewater.",
      "The present invention provides the most sustainable way that can not only remove the hazardous heavy Cr(VI) metal ion from wastewater but also solves the problem of inert waste iron dust that is liberated in tons from industry on regular basis and cause various diseases.",
    ],
    usps: [
      "Solar-driven reduction",
      "100% Magnetic recovery",
      "High-load treatment",
      "Zero-waste valorization",
    ],
    collaborationOptions: ["Joint Venture", "Licensing"],
    email: "sksonkar.chy@mnit.ac.in",
  },
  "RR002-1": {
    title: "Polymer Anchored Microelectromechanical System (MEMS) Cantilever and Method of Fabricating the Same",
    patentNo: "435267 / US20150203345A1",
    patentee: "Prof. Ramgopal Rao",
    designation: "Professor",
    institution: "Indian Institute of Technology Bombay",
    domain: "Electronic / Polymer / Piezo",
    status: "Granted",
    duration: "15 August 2017 – 21 January 2035",
    jurisdiction: "USA",
    authors: ["Patkar Rajul Sachin", "Apte Prakash Ramchandra", "Rao Valipe Ramgopal"],
    link: "https://patents.google.com/patent/US20150203345A1/en",
    abstract: [
      "A microelectromechanical system (MEMS) cantilever includes a base and a cantilever beam projecting from the base. The cantilever beam includes a piezo layer sandwiched between an inorganic material structural layer and an inorganic material encapsulating and immobilising layer. A pair of electrical contacts are formed in the encapsulating and immobilising layer in contact with the piezo layer. The base consists of polymer.",
      "A method includes depositing a sacrificial layer on a substrate; forming a MEMS cantilever beam on the sacrificial layer by depositing an inorganic material structural layer thereon; depositing a piezo layer on the structural layer; and depositing an inorganic material encapsulating and immobilising layer on the piezo layer; forming a pair of electrical contacts in the encapsulating and immobilising layer in contact with the piezo layer; forming a polymer base for the cantilever beam; and etching the sacrificial layer to release the MEMS cantilever beam from the substrate.",
    ],
    usps: [
      "High resonant frequency of 23.5 KHz",
      "Low spring constant of 0.9 N/m",
      "Reliable stability across 3 distinct mediums",
      "Simple 5-step surface micromachining fabrication process",
    ],
    collaborationOptions: ["Tech Transfer"],
  },
  "RR002-2": {
    title: "Micro Electro Mechanical System (MEMS) Based Wide-Band Polymer Photo-Detector",
    patentNo: "459569 / US9786855B2",
    patentee: "Prof. Ramgopal Rao",
    designation: "Professor",
    institution: "Indian Institute of Technology Bombay",
    domain: "Photonics / MEMS / Polymers",
    status: "Granted",
    duration: "10 October 2017 – 28 December 2035",
    jurisdiction: "USA",
    authors: ["Sangita Chaki Roy", "Tapanendu Kundu", "V. Ramgopal Rao"],
    link: "https://patents.google.com/patent/US9786855B2/en",
    abstract: [
      "A polymer based photo-detector has photoresponsivity in Ultraviolet, Visible, Near and Mid Infrared regions. The photo-detector comprises a single layer of polyvinyl alcohol (PVA) as a photoactive layer; with no additional buffer layer for accepting Ultraviolet, Visible and Infrared radiation as well as no buffer layer to block charge carrier injection.",
      "The PVA layer's photoresponsivity is extended from Ultraviolet to Near Infrared by changing its nano-morphology on a low thermal device structure. The primarily photo-generated charge carriers diffuse through the amorphous part of the polymer layer and split into charge carriers on the electrodes or by the charge traps in the layer.",
      "The charge carrier generation is in the picosecond range; thus the exciton and Polaron drift diffusion cause electrical conduction of the polymer layer under Ultraviolet illumination. The low thermal mass of the MEMS based structure reduces localized heating effect due to Infrared radiation, increasing responsivity of the photo-detector.",
    ],
    usps: [
      "Broad spectral range from 200nm to 12 microns",
      "High peak responsivity of 0.53 A/W",
      "Fast rise time of 441ns signal recorded",
      "Single 350nm layer simplifies the fabrication process",
    ],
    collaborationOptions: ["Tech Transfer"],
  },
  "SC003-1": {
    title: "Point of Care (POC) Device for Facilitating Nucleic Acid Based Testing and Method Thereof",
    patentNo: "US11440014B2",
    patentee: "Prof. Suman Chakraborty",
    designation: "Professor",
    institution: "Indian Institute of Technology Kharagpur / Healthledger Diagnostics Pvt. Ltd.",
    domain: "Biotechnology / Medical",
    status: "Granted",
    duration: "20 years from 13 September 2022",
    jurisdiction: "USA",
    authors: ["Nandita Kedia", "Sujay Kumar Biswas", "Saptarshi Banerjee", "Aditya Bandopadhyay", "Arindam Mondal", "Suman Chakraborty"],
    link: "https://patents.google.com/patent/US11440014B2/en",
    abstract: [
      "A generic point of care based portable device and method thereof as a platform technology for detecting pathogenic infection via nucleic acid based testing achieving sample-to-result integration, comprising interconnected stand-alone modules: a thermal unit for executing piece-wise isothermal reactions in a pre-programmable concomitant fashion without necessitating in-between operative intervention; a colorimetric detection unit seamlessly interfaced with smartphone-app based analytics for detecting the target analyte.",
      "The said platform technology is capable of detecting targeted pathogen-associated RNA by coupling additional complementary DNA probe hybridization combined with isothermal reaction purposed for reverse transcription of RNA followed by amplification of the resulting c-DNA as well as subsequent specific binding of the same in a single user-step in a concomitant fashion and its smartphone-enabled interpretation, in a generic modular format that renders operative suitability outside controlled laboratory environment in a user-friendly manner, with predictive accuracy favorably comparable with gold standard RT-PCR tests.",
    ],
    usps: [
      "Integrated sample-to-result in one single step",
      "Gold-standard accuracy with simple 50°C hybridization",
      "Ultra-low-cost replacement for expensive Peltier thermocyclers",
      "Rapid 4-step process eliminates manual pipetting",
    ],
    collaborationOptions: ["Tech Transfer", "Joint Venture", "Licensing"],
  },
  "SC003-2": {
    title: "Hydrogel Microbeads Including Agarose Microbeads and a Process for Preparing the Same",
    patentNo: "426258",
    patentee: "Prof. Suman Chakraborty",
    designation: "Professor",
    institution: "Indian Institute of Technology Kharagpur",
    domain: "Chemical / Hydrogel / Polymer",
    status: "Granted",
    duration: "20 years from 4th February 2022",
    jurisdiction: "India",
    authors: ["Jyotsana Priyadarshani", "Prasoon Awasthi", "Suman Chakraborty", "Soumen Das"],
    abstract: [
      "Hydrogel beads including agarose microbeads and a process of preparing the same is provided free of any oil, emulsifier and any other residual substances including solvents, chemical cross linkers, metal cations and specialized equipment.",
      "The process could be attained out of sol-gel transition of polysaccharide polymer free of use of any oil or emulsifier followed by liquifying the gel and breaking into microbeads based on Rayleigh-Plateau based instability phenomena on a hydrophobic substrate, preferably PDMS substrate.",
    ],
    usps: [],
    collaborationOptions: [],
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
                {["Tech Transfer", "Joint Venture", "Licensing"].map((option, idx) => {
                  const isOpen = patent.collaborationOptions.includes(option);
                  return (
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
                      <span className="text-sm text-gray-200 flex-1">{option}</span>
                      {isOpen && (
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>
              <a
                href={`mailto:${patent.email || "walei.office@gmail.com"}?subject=Patent Inquiry - ${patent.patentNo}`}
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
