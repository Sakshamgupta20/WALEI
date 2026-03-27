import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, User, Quote, Linkedin, Instagram, Share2 } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const accentColor = "var(--accent-future)";

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
    title: "India's Semiconductor Ambitions",
    subtitle:
      "With $10 billion committed to the India Semiconductor Mission, experts debate whether India can become a global chip manufacturing hub by 2030.",
    date: "Jan 22, 2026",
    author: "Prof. V. Ramgopal Rao",
    designation: "Former Director, IIT Delhi",
    institution: "Indian Institute of Technology Delhi",
    image: "/images/notes/future/v-ramgopal-rao.jpg",
    body: [
      "India's semiconductor journey is at a critical inflection point. With the India Semiconductor Mission (ISM) committing $10 billion towards building a domestic chip ecosystem, the country is making its most ambitious bet yet on becoming a global semiconductor player. But the path from chip design, where India already excels, to chip fabrication is fraught with challenges that go far beyond capital investment.",
      "For decades, India has been a powerhouse in semiconductor design. Companies like Intel, Qualcomm, and Texas Instruments have their largest design centres outside the US right here in Bangalore and Hyderabad. Over 20% of the world's chip designers are Indian. But design and fabrication are fundamentally different beasts. While design requires talent and intellectual capital, fabrication demands massive infrastructure, ultra-pure water supplies, stable power grids, and a supply chain ecosystem that takes decades to build.",
      "The recent announcements of fab projects in Gujarat and Karnataka have generated significant excitement. The Tata-PSMC partnership for a 28nm fab in Dholera and the Micron ATMP facility in Sanand represent concrete steps forward. However, industry experts caution that we must be realistic about timelines. Building a competitive fab ecosystem is a 15-20 year journey, not a 5-year sprint.",
      "What India can do in the near term is strengthen its position in semiconductor packaging, testing, and design services, areas where we have natural advantages. The OSAT (Outsourced Semiconductor Assembly and Test) facilities being planned can create immediate value while the longer-term fab ecosystem matures.",
      "The talent pipeline is another critical factor. While India produces excellent chip designers, we need to rapidly scale up expertise in process engineering, equipment maintenance, and yield optimization. This requires deep collaboration between industry and academia, with curriculum reforms that align with industry needs.",
    ],
    quote:
      "The semiconductor mission isn't just about building fabs. It's about building an entire ecosystem. India's strength lies in its design talent, and we must leverage that while patiently building fabrication capabilities.",
    quoteAttribution: "Prof. V. Ramgopal Rao",
  },
  "2": {
    title: "Dimensions of Fluids",
    subtitle:
      "From lab-on-a-chip devices to large-scale industrial flows, the science of fluid dynamics is reshaping medicine, energy, and engineering at every scale.",
    date: "Jan 18, 2026",
    author: "Prof. Suman Chakraborty",
    designation: "Professor, Department of Mechanical Engineering",
    institution: "Indian Institute of Technology Kharagpur",
    image: "/images/notes/future/suman-chakraborty.png",
    linkedinCard: "/images/linkedin/notes-of-future.png",
    body: [
      "The field of microfluidics has undergone a remarkable transformation over the past two decades. What began as a niche curiosity in the physics of small-scale flows has blossomed into a discipline with profound implications for healthcare, environmental monitoring, and materials science. At the heart of this revolution lies a simple yet powerful idea: when fluids are confined to channels smaller than a human hair, they behave in ways that defy everyday intuition. Surface tension dominates over gravity, mixing becomes extraordinarily difficult, and precise control over individual droplets and even single cells becomes possible.",
      "One of the most exciting frontiers in this domain is the convergence of microfluidics with biomedical engineering. Lab-on-a-chip devices are now capable of performing complex diagnostic tests, from blood analysis to pathogen detection, using just a few microlitres of sample, delivering results in minutes rather than days. These point-of-care platforms are especially transformative for resource-limited settings where access to centralised laboratories is scarce. In India, where the burden of infectious disease remains high and the doctor-to-patient ratio is stretched thin, microfluidic diagnostics hold the promise of democratising healthcare in ways that conventional infrastructure never could.",
      "Computational fluid dynamics (CFD) has been an indispensable partner in this progress. High-fidelity simulations allow researchers to model flows across scales, from the nanometre-level interactions at a cell membrane to the turbulent eddies in an industrial reactor. Advances in machine learning are now accelerating these simulations further, enabling surrogate models that can predict flow behaviour in real time. The marriage of data-driven methods and first-principles physics is producing tools of unprecedented predictive power, bridging the gap between theoretical understanding and practical engineering design.",
      "At the macro scale, fluid dynamics continues to drive innovation in energy systems, climate science, and aerospace. Understanding turbulent flows remains one of the great unsolved problems in classical physics, and new experimental techniques, from particle image velocimetry to digital holography, are providing the high-resolution data needed to refine turbulence models. Meanwhile, the push towards sustainable energy has placed renewed emphasis on optimising fluid systems, whether in next-generation wind turbines, efficient heat exchangers, or hydrogen fuel cells.",
      "Looking ahead, the future of fluid dynamics research lies in its interdisciplinary character. The boundaries between mechanical engineering, biology, chemistry, and data science are dissolving, giving rise to problems, and solutions, that no single discipline could address alone. India, with its depth of engineering talent and its urgent societal challenges in health, water, and energy, is uniquely positioned to lead in this space, provided it invests in the fundamental research and collaborative infrastructure that transformative science demands.",
    ],
    quote:
      "Fluid dynamics at the micro scale is not merely a miniaturisation of classical phenomena. It is an entirely new paradigm where surface forces reign supreme and every droplet becomes a laboratory.",
    quoteAttribution: "Prof. Suman Chakraborty",
  },
  "3": {
    title: "Molecular Biophysics",
    subtitle:
      "With over 200 peer-reviewed publications and a Padma Shri to his name, Prof. Dipankar Chatterji has spent decades unravelling the molecular mechanisms that govern bacterial life, and his work is far from finished.",
    date: "Jan 15, 2026",
    author: "Prof. Dipankar Chatterji",
    designation: "Emeritus Professor, Molecular Biophysics Unit",
    institution: "Indian Institute of Science, Bangalore",
    image: "/images/notes/future/dipankar-chatterji.jpg",
    linkedinCard: "/images/linkedin/notes-of-future-1.png",
    body: [
      "At the molecular level, life operates as an astonishingly precise machine. Proteins fold into exact three-dimensional shapes to catalyse reactions, nucleic acids store and transmit genetic information with remarkable fidelity, and signalling molecules coordinate the behaviour of billions of cells. Understanding this machinery, how it works, how it fails, and how it can be harnessed, is the central mission of molecular biophysics. Over a career spanning more than four decades, Prof. Dipankar Chatterji has contributed foundational insights into the regulation of gene expression in bacteria, work that has implications far beyond the microbial world.",
      "One of the key threads in Chatterji's research has been the study of stringent response in bacteria, the molecular alarm system that allows organisms like Mycobacterium tuberculosis to survive under nutrient-deprived or stressful conditions. By investigating the signalling molecules and transcriptional regulators involved, his group has shed light on why certain bacteria are so difficult to eradicate with conventional antibiotics. This line of inquiry has direct relevance to the global tuberculosis crisis, particularly in India, which bears the highest TB burden of any country in the world. Understanding how bacteria enter dormancy and resist drug treatment is essential to developing the next generation of antimicrobial therapies.",
      "More recently, the intersection of biophysics and neuroscience has opened a fascinating new chapter: the gut-brain axis. Emerging research suggests that the microbial communities residing in our gut communicate with the brain through chemical signalling pathways, influencing mood, cognition, and even susceptibility to neurological disease. While this field is still in its early stages, it represents a profound expansion of how we understand human health, one in which the trillions of microbes we carry are not mere passengers but active participants in our physiology.",
      "The advent of artificial intelligence is rapidly reshaping the landscape of biophysics and drug discovery. Tools like AlphaFold have demonstrated that machine learning can predict protein structures with near-experimental accuracy, a feat that once seemed decades away. AI-driven screening of chemical libraries is accelerating the identification of drug candidates, while generative models are beginning to design entirely novel molecules with desired properties. For a country like India, with its vast biodiversity and growing computational infrastructure, the convergence of AI and biology presents an extraordinary opportunity to leapfrog traditional drug development timelines.",
      "Throughout his career, recognised by the Shanti Swarup Bhatnagar Prize in 1992 and the Padma Shri in 2016, Chatterji has mentored over forty doctoral students, many of whom now lead their own research programmes across India and abroad. His legacy is not only in the papers published or the prizes won, but in the culture of rigorous, curiosity-driven science he has helped build. As he has often remarked, 'Nature is God, in my belief, DNA is part of that truth', a reminder that the deepest motivations of science are not so different from the deepest questions of philosophy.",
    ],
    quote:
      "Nature is God, in my belief, DNA is part of that truth.",
    quoteAttribution: "Prof. Dipankar Chatterji",
  },
  "4": {
    title: "Frontiers in Organic Chemistry",
    subtitle:
      "From metalloproteins to water-soluble nanocarbons derived from low-grade coal, Prof. Sabyasachi Sarkar's work at the intersection of bioinorganic chemistry and nanoscience is charting new paths for medicine and materials.",
    date: "Jan 12, 2026",
    author: "Prof. Sabyasachi Sarkar",
    designation: "Senior Professor (Retired), Department of Chemistry",
    institution: "Indian Institute of Technology Kanpur",
    image: "/images/notes/future/sabyasachi-sarkar.jpg",
    body: [
      "Chemistry, at its best, is a creative art, the design and synthesis of molecules that do not exist in nature but that can transform human life. Bioinorganic chemistry occupies a particularly rich niche within this endeavour, sitting at the crossroads of inorganic chemistry, biology, and medicine. It asks fundamental questions: how do metal ions embedded in proteins enable the chemistry of life, carrying oxygen in haemoglobin, splitting water in photosynthesis, fixing nitrogen in the soil? Prof. Sabyasachi Sarkar has devoted much of his career to answering these questions, with a body of work that spans metalloprotein modelling, catalysis, and the emerging science of nanocarbons.",
      "A central theme in Sarkar's research has been the study of molybdenum- and vanadium-containing enzymes and their synthetic analogues. These metalloenzymes catalyse some of the most important reactions in the biosphere, including the reduction of atmospheric nitrogen to ammonia, the process that ultimately sustains all life on Earth. By constructing model compounds that replicate the active sites of these enzymes, his group has advanced our understanding of how nature achieves feats of catalytic efficiency that industrial chemistry still struggles to match. This work has implications not only for fundamental science but also for the design of greener, more sustainable chemical processes.",
      "Perhaps Sarkar's most striking recent contribution has been the development of water-soluble nanocarbons derived from low-grade Indian coal. Coal, long regarded as a dirty and declining fuel, turns out to be a surprisingly rich source of nanoscale carbon materials, quantum dots and functionalised nanoparticles with remarkable optical and electronic properties. By converting a waste product into high-value nanomaterials, this work exemplifies the kind of frugal innovation at which Indian science excels. These nanocarbons have shown promise in applications ranging from bioimaging and drug delivery to water purification and environmental remediation.",
      "The broader frontier of drug discovery is being reshaped by advances in computational chemistry, high-throughput screening, and structure-based design. Understanding the precise three-dimensional interactions between a drug molecule and its biological target, often a metalloprotein, is now the starting point for rational drug design. Sarkar's work on CO2-magnesium binding and other metal-ligand interactions contributes directly to this effort, providing the fundamental chemical knowledge on which new therapeutic strategies can be built. As antibiotic resistance grows and the need for novel drugs intensifies, this kind of basic research becomes ever more urgent.",
      "Elected a Fellow of the Indian Academy of Sciences in 1997, Sarkar has long championed the view that science is inseparable from a deeper philosophical engagement with nature. As he has written, 'Science, a poetic philosophy in understanding nature', a sentiment that captures the sense of wonder that continues to drive discovery at the boundaries of chemistry, biology, and materials science. For the next generation of Indian chemists, his career offers both a model of rigorous inquiry and a reminder that the most impactful science often emerges from the most unexpected places.",
    ],
    quote:
      "Science, a poetic philosophy in understanding nature.",
    quoteAttribution: "Prof. Sabyasachi Sarkar",
  },
  "5": {
    title: "Future of Indian Cities",
    subtitle:
      "As India's urban population surges past half a billion, the decisions made today about governance, infrastructure, and inclusion will determine whether Indian cities become engines of prosperity or crucibles of inequality.",
    date: "Jan 8, 2026",
    author: "Prof. Shishir K. Jha",
    designation: "Professor, Centre for Policy Studies",
    institution: "Indian Institute of Technology Bombay",
    image: "/images/notes/future/shishir-jha.jpg",
    body: [
      "India is urbanising at a pace and scale without historical precedent. By conservative estimates, over 600 million Indians will live in cities by 2030, and the country will need to build the equivalent of a new Chicago every year to accommodate this growth. Yet the institutional frameworks, governance structures, and policy instruments that shape Indian cities were largely designed for a different era, one of slower growth, simpler economies, and less demanding citizens. The central challenge of urban policy today is to reimagine these frameworks for the realities of twenty-first-century urbanisation.",
      "At the heart of this challenge lies the question of governance. Indian cities are among the most poorly governed urban areas in the democratic world. Municipal bodies are starved of fiscal autonomy, fragmented across dozens of overlapping agencies, and subject to constant interference from state governments. The 74th Constitutional Amendment, which was meant to empower urban local bodies, remains largely unimplemented three decades after its passage. Without genuine devolution of power and resources to city governments, no amount of smart-city technology or infrastructure spending will produce cities that work for their residents.",
      "Housing and land use represent another critical frontier. India's urban housing shortage is estimated at tens of millions of units, and much of the existing housing stock, particularly in informal settlements, lacks basic services such as clean water, sanitation, and secure tenure. Land use regulations, including outdated floor-space index limits and rigid zoning laws, have constrained the supply of formal housing and pushed prices beyond the reach of the urban poor and middle class alike. Reforming these regulations to allow denser, mixed-use development, while protecting green spaces and heritage areas, is essential to creating inclusive and affordable cities.",
      "Infrastructure investment must be guided by a clear vision of the kind of cities India wants to build. The tendency to prioritise motorways and flyovers over public transit, pedestrian infrastructure, and cycling networks has produced cities that are congested, polluted, and hostile to the majority of residents who do not own cars. Cities like Kochi, with its metro, and Indore, with its waste management reforms, offer evidence that a different model is possible, one that prioritises public goods, sustainability, and quality of life over private mobility and speculative real estate.",
      "Ultimately, the future of Indian cities will be shaped not just by engineers and planners but by the quality of public deliberation and civic engagement. Urban policy is inherently political. It determines who benefits from the city's growth and who bears its costs. Creating platforms for inclusive decision-making, strengthening local democratic institutions, and investing in the research and data infrastructure needed for evidence-based policy are not luxuries but necessities. India's cities have the potential to be the greatest engines of innovation and social mobility the world has ever seen, but only if the right policy choices are made now.",
    ],
    quote:
      "The measure of a great city is not its skyline but the quality of life it offers to its most vulnerable residents. Policy must bridge the gap between aspiration and equity.",
    quoteAttribution: "Prof. Shishir K. Jha",
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
    title: article?.title || "Notes of Future",
    description: article?.subtitle || "",
  };
}

export default async function NotesOfFutureDetailPage({
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
            href="/notes-of-future"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[var(--gold)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Notes of Future
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
              Notes of Future
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
            href="/notes-of-future"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[var(--gold)] transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to Notes of Future
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
                    backgroundColor: `color-mix(in srgb, ${accentColor} 15%, transparent)`,
                    color: accentColor,
                  }}
                >
                  Future
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
                  {article.author}
                </h2>
                <p className="text-sm text-slate-500">
                  {article.designation} · {article.institution}
                </p>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3">
                  Introduction
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  {article.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="prose-walei">
                {article.body.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

            {/* Right: Professor Image & Info (1/3) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden bg-white border border-slate-200">
                  {/* Image */}
                  <div className="aspect-square relative bg-gradient-to-br from-slate-100 to-slate-200">
                    {article.image ? (
                      <Image
                        src={`${basePath}${article.image}`}
                        alt={article.author}
                        fill
                        className="object-cover object-[center_20%]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={48} className="text-slate-300" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-base font-medium text-slate-900 mb-1">
                      {article.author}
                    </h3>
                    <p className="text-xs text-slate-500 mb-1">
                      {article.designation}
                    </p>
                    <p className="text-xs text-slate-400">
                      {article.institution}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-5">
                  <Quote size={20} className="text-[var(--gold)] opacity-60 mb-3" />
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-2 font-serif">
                    &ldquo;{article.quote}&rdquo;
                  </p>
                  <p className="text-xs text-slate-500">
                    &mdash; {article.quoteAttribution}
                  </p>
                </div>

                {/* Social Share */}
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://walei.org/notes-of-future/${id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/walei_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://walei.org/notes-of-future/${id}`)}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                  >
                    <Share2 size={16} />
                  </a>
                </div>

                {/* LinkedIn Card */}
                {article.linkedinCard && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
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
