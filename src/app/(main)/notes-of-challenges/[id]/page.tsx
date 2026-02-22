import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Quote } from "lucide-react";

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
    title: "Water Scarcity in Urban India: Engineering Solutions at Scale",
    subtitle:
      "With 21 Indian cities expected to run out of groundwater, researchers and civic leaders discuss scalable solutions for one of India's most pressing crises.",
    date: "Jan 20, 2026",
    author: "Dr. Shantanu Pathak",
    designation: "Researcher & Entrepreneur",
    institution: "IIT Bombay",
    image: "/images/notes/challenges/shantanu-pathak.png",
    body: [
      "India is staring at a water crisis of unprecedented proportions. According to NITI Aayog, 21 major Indian cities are projected to run out of groundwater by 2030, affecting over 100 million people. The crisis isn't just about scarcity — it's about mismanagement, aging infrastructure, and a fundamental disconnect between water policy and ground reality.",
      "Urban India consumes roughly 150 litres per capita per day, but nearly 40% of treated water is lost to leakage in distribution networks. Cities like Bangalore, which depend on water pumped from over 100 km away, spend enormous energy budgets on water transport while losing a significant portion to non-revenue water. The economics of urban water supply are broken, and engineering solutions must address both supply and demand sides.",
      "Decentralised water treatment is emerging as a promising approach. Rather than depending solely on massive centralised plants, researchers are developing modular treatment systems that can be deployed at the ward or community level. These systems use membrane bioreactors, constructed wetlands, and advanced oxidation processes to treat greywater for reuse, reducing the load on freshwater sources by up to 30%.",
      "Rainwater harvesting, once dismissed as insufficient for urban needs, is being reimagined through IoT-enabled smart collection systems. Chennai's experience after the 2019 water crisis demonstrated that systematic rainwater harvesting can recharge aquifers and provide meaningful supplementary supply. The key is moving from voluntary adoption to mandated, well-engineered systems integrated into building codes.",
      "Perhaps the most critical intervention needed is in agricultural water use, which accounts for nearly 80% of India's total water consumption. Drip irrigation, soil moisture sensing, and crop pattern optimisation can dramatically reduce agricultural water demand, freeing up resources for urban centres. The challenge is not technological — it's about creating the right incentive structures and policy frameworks to drive adoption at scale.",
    ],
    quote:
      "We don't have a water scarcity problem — we have a water management problem. India receives enough rainfall to meet its needs. The challenge is capturing, storing, and distributing it intelligently.",
    quoteAttribution: "Dr. Shantanu Pathak",
  },
  "2": {
    title: "IYASO: Transforming Healthcare with Data Analytics",
    subtitle:
      "How AI-driven diagnostics and data analytics platforms are optimising healthcare delivery across India.",
    date: "Jan 16, 2026",
    author: "Viraj Kulkarni",
    designation: "Founder",
    institution: "IYASO",
    image: "/images/notes/challenges/viraj-kulkarni.png",
    body: [
      "India's healthcare system serves over 1.4 billion people, yet it struggles with chronic inefficiencies — from misdiagnoses in rural clinics to overwhelmed urban hospitals that see hundreds of patients daily. The promise of data analytics in healthcare is not simply automation; it is the ability to surface patterns that human practitioners, constrained by time and cognitive bandwidth, inevitably miss. IYASO was founded on the conviction that well-structured data can bridge the gap between the healthcare India has and the healthcare India needs.",
      "Predictive analytics is already reshaping how hospitals manage patient flow, anticipate disease outbreaks, and allocate scarce resources. By analysing admission records, lab results, and even regional weather data, IYASO's platform can forecast patient surges with remarkable accuracy, allowing hospital administrators to pre-position staff and supplies rather than scrambling reactively. In pilot deployments across three mid-sized hospitals in Maharashtra, the system reduced emergency department wait times by 22% and cut unnecessary diagnostic tests by nearly 15%.",
      "The real challenge, however, is not building the algorithms — it is building trust. Indian healthcare providers, particularly senior clinicians, are understandably sceptical of AI-generated recommendations. IYASO's approach has been to position its tools as decision-support systems rather than decision-making systems, ensuring that the physician always retains final authority. This design philosophy has been critical to adoption: clinicians engage more willingly with a system that augments their judgement rather than one that appears to override it.",
      "Data quality remains the single largest obstacle to scaling healthcare analytics in India. Unlike developed markets where electronic health records are standardised and comprehensive, Indian patient data is fragmented across handwritten prescriptions, incompatible hospital management systems, and informal record-keeping practices. IYASO invests heavily in data normalisation pipelines — unglamorous but essential infrastructure that converts messy, heterogeneous inputs into clean, analysable datasets.",
      "Looking ahead, the convergence of wearable health devices, telemedicine platforms, and advanced analytics creates an unprecedented opportunity. India could leapfrog traditional healthcare delivery models entirely, moving toward a system where continuous monitoring and early intervention replace the current paradigm of late diagnosis and expensive treatment. The startup journey in health-tech is fraught with regulatory complexity and long sales cycles, but the scale of impact possible in a country of India's size makes the challenge worth pursuing.",
    ],
    quote:
      "The biggest bottleneck in healthcare AI isn't the technology — it's the data. Clean, standardised, interoperable health data is the foundation everything else depends on.",
    quoteAttribution: "Viraj Kulkarni",
  },
  "3": {
    title: "The Brain Drain Dilemma: Can India Retain Its Best Researchers?",
    subtitle:
      "An honest conversation about why top scientists leave India and what systemic changes could reverse the trend.",
    date: "Jan 12, 2026",
    author: "Prof. Ashutosh Sharma",
    designation: "Former Secretary, Department of Science & Technology",
    institution: "Government of India",
    image: "",
    body: [
      "Every year, thousands of India's brightest scientific minds leave the country for research positions in the United States, Europe, and East Asia. The numbers are stark: India produces roughly 30,000 PhD graduates annually, yet a significant fraction — estimates range from 30% to 40% of those in STEM fields — eventually seek careers abroad. This is not merely a loss of trained individuals; it represents a systematic haemorrhage of intellectual capital that India has invested decades and billions of rupees in developing.",
      "The reasons behind brain drain are well-documented but rarely addressed with the urgency they deserve. Inadequate research funding, bureaucratic obstacles to procurement and collaboration, poor laboratory infrastructure, and a pervasive culture of seniority over merit all contribute to an environment where ambitious young researchers feel stifled. When a postdoctoral researcher in India earns a fraction of what their counterpart receives in Singapore or Germany, and faces months of paperwork to import a basic reagent, the decision to emigrate becomes almost rational.",
      "Reversing brain drain requires more than competitive salaries, though compensation certainly matters. It demands a fundamental rethinking of how India structures its research ecosystem. The most impactful reforms would include granting principal investigators genuine autonomy over their budgets and hiring, streamlining customs and procurement processes for scientific equipment, and creating transparent, merit-based pathways for career advancement that do not depend on patronage or institutional politics.",
      "There are encouraging signs of change. Programmes like the Ramanujan Fellowship and the INSPIRE Faculty scheme have attracted some researchers back to India, and institutions like IISERs and TIFR have built pockets of genuine research excellence. The new National Research Foundation, if implemented with adequate funding and independence, could be transformative. But these efforts remain insufficient against the scale of the problem — India's total R&D spending hovers around 0.7% of GDP, compared to over 2% in China and nearly 3% in South Korea.",
      "Perhaps the most underappreciated dimension of brain drain is its effect on mentorship and intellectual culture. When senior researchers leave, they take with them not just their expertise but their networks, their standards, and their ability to train the next generation. India risks entering a vicious cycle where the absence of world-class mentors makes it harder to produce world-class students, which in turn accelerates further emigration. Breaking this cycle requires sustained political will, substantial financial commitment, and an honest reckoning with the structural barriers that make Indian academia inhospitable to its own talent.",
    ],
    quote:
      "We cannot build a knowledge economy by training our best minds and then making it impossible for them to do meaningful work at home. Retention starts with respect — for researchers, for the scientific process, and for the time it takes to produce real breakthroughs.",
    quoteAttribution: "Prof. Ashutosh Sharma",
  },
  "4": {
    title: "Climate Adaptation: Protecting Coastal Communities",
    subtitle:
      "Mumbai, Chennai, and Kolkata face existential flooding risks. Scientists map out survival strategies.",
    date: "Jan 8, 2026",
    author: "Dr. Roxy Mathew Koll",
    designation: "Climate Scientist",
    institution: "Indian Institute of Tropical Meteorology",
    image: "",
    body: [
      "India's coastline stretches over 7,500 kilometres, and along it live more than 170 million people whose lives and livelihoods are increasingly threatened by rising seas, intensifying cyclones, and erratic monsoon patterns. The three megacities most at risk — Mumbai, Chennai, and Kolkata — collectively house over 50 million residents, many of them in low-lying areas that flood with alarming regularity. Climate adaptation for these communities is no longer a distant planning exercise; it is an immediate survival imperative.",
      "Mumbai's flooding challenges illustrate the compounding nature of climate risk. The city sits on reclaimed land, its natural drainage systems — creeks, mangroves, and wetlands — systematically destroyed by decades of unchecked construction. When heavy rainfall coincides with high tides, as it increasingly does due to sea-level rise, the city has nowhere to send its water. The catastrophic floods of 2005 killed over 1,000 people, and yet the fundamental vulnerabilities that caused that disaster remain largely unaddressed. Climate projections suggest that what was once a once-in-a-century rainfall event may become a once-in-a-decade occurrence by 2040.",
      "Chennai's experience with the 2015 floods revealed a different but equally dangerous pattern: the destruction of water-absorbing landscapes on the city's periphery. Lakes, tanks, and marshlands that historically served as natural flood buffers have been paved over for housing developments and IT parks. The result is a city that can neither absorb heavy rainfall nor channel it safely to the sea. Restoration of these traditional water bodies, combined with modern stormwater management infrastructure, is essential but requires the kind of coordinated urban planning that Indian cities have historically struggled to execute.",
      "Kolkata faces perhaps the most existential threat of any Indian megacity. Built on deltaic sediments along the Hooghly River, the city is subsiding even as sea levels rise — a double jeopardy that could render large portions uninhabitable within decades. The Sundarbans, the vast mangrove forest that has long served as a natural barrier against storm surges from the Bay of Bengal, is itself retreating due to rising salinity and coastal erosion. Protecting Kolkata means protecting the Sundarbans, yet the communities who depend on the Sundarbans for their livelihoods are among India's poorest and most vulnerable.",
      "Effective climate adaptation requires moving beyond engineered defences alone. Nature-based solutions — mangrove restoration, urban wetland conservation, permeable urban surfaces, and green corridors — offer cost-effective resilience that grey infrastructure cannot match. Equally important is investing in early warning systems, community preparedness programmes, and climate-resilient housing for the urban poor who bear the greatest burden of flooding. The science is clear; the solutions are known. What remains is the political and institutional will to act at the scale the crisis demands.",
    ],
    quote:
      "Coastal cities cannot engineer their way out of climate change. We need a fundamental shift toward living with water rather than fighting it — and that means restoring the natural systems we have spent decades destroying.",
    quoteAttribution: "Dr. Roxy Mathew Koll",
  },
  "5": {
    title: "Antibiotic Resistance: India's Ticking Health Time Bomb",
    subtitle:
      "With over 58,000 newborns dying annually from drug-resistant infections, microbiologists urge immediate action.",
    date: "Jan 5, 2026",
    author: "Prof. Dipankar Chatterji",
    designation: "Emeritus Professor, Molecular Biophysics Unit",
    institution: "IISc Bangalore",
    image: "/images/notes/future/dipankar-chatterji.jpg",
    body: [
      "Antibiotic resistance is arguably the most underappreciated public health crisis facing India today. Each year, drug-resistant infections claim the lives of over 58,000 newborns in India alone — a staggering figure that exceeds the death toll of many diseases that receive far greater attention and funding. The World Health Organisation has identified antimicrobial resistance as one of the top ten global public health threats, and India, with its unique combination of high antibiotic consumption, inadequate sanitation, and dense population, sits at the epicentre of this crisis.",
      "The roots of India's antibiotic resistance problem are systemic. Antibiotics are available over the counter in most Indian pharmacies, often dispensed without prescriptions and frequently in incorrect dosages. The poultry and livestock industries use antibiotics as growth promoters on a massive scale, creating reservoirs of resistant bacteria that enter the human food chain. Hospital-acquired infections, particularly in intensive care units, are increasingly caused by organisms resistant to multiple drug classes, including carbapenems — often considered the antibiotics of last resort.",
      "From a molecular biology perspective, the mechanisms of resistance are both fascinating and terrifying. Bacteria share resistance genes not only through vertical inheritance but through horizontal gene transfer — plasmids, transposons, and integrons that can spread resistance determinants across species boundaries with alarming speed. The NDM-1 gene, first identified in a patient in New Delhi, has since been found in bacteria on every continent, a stark illustration of how resistance genes respect no borders. Understanding these molecular mechanisms is essential for developing strategies to slow the spread of resistance and identify new therapeutic targets.",
      "India's pharmaceutical industry, paradoxically, is both part of the problem and potentially part of the solution. India manufactures a large share of the world's generic antibiotics, and effluent from pharmaceutical manufacturing facilities in Hyderabad and other hubs has been found to contain antibiotic concentrations high enough to promote resistance in environmental bacteria. At the same time, Indian researchers and drug companies have the expertise and infrastructure to contribute meaningfully to the development of novel antimicrobials, bacteriophage therapies, and diagnostic tools that could help combat resistance.",
      "Addressing antibiotic resistance in India requires a coordinated One Health approach that bridges human medicine, veterinary practice, environmental science, and public policy. Immediate priorities include enforcing prescription-only sales of critical antibiotics, establishing robust national surveillance of resistance patterns, investing in rapid diagnostic technologies that reduce empirical prescribing, and strengthening infection prevention and control in hospitals. The scientific community has been sounding the alarm for years; what is needed now is decisive action before the post-antibiotic era — in which common infections become untreatable — becomes a reality.",
    ],
    quote:
      "We are running out of effective antibiotics faster than we are developing new ones. If we do not act now, we risk returning to a pre-antibiotic era where a simple wound infection could be a death sentence.",
    quoteAttribution: "Prof. Dipankar Chatterji",
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
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
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
              Notes of Challenges
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Confronting Hard Problems
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Discover how scientists and leaders tackle India&apos;s most pressing
            challenges.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
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
              {/* Title & Meta */}
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
                <h2 className="text-2xl font-light text-gray-900 mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {article.subtitle}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <User size={12} />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="prose-walei">
                {article.body.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Quote Card */}
              <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Quote size={24} className="text-[#C54B4B] opacity-60" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-800 italic leading-relaxed mb-3 font-serif">
                      &ldquo;{article.quote}&rdquo;
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      &mdash; {article.quoteAttribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Professor Image & Info (1/3) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-xl overflow-hidden bg-white border border-gray-200">
                  {/* Image */}
                  <div className="aspect-[3/4] relative bg-gradient-to-br from-gray-100 to-gray-200">
                    {article.image ? (
                      <Image
                        src={`${basePath}${article.image}`}
                        alt={article.author}
                        fill
                        className="object-cover"
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

                {/* LinkedIn Card */}
                {article.linkedinCard && (
                  <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
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
