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
    body: { heading?: string; text: string }[];
    quote: string;
    quoteAttribution: string;
  }
> = {
  "1": {
    title: "Electrons Into Order",
    subtitle:
      "Prof. V. Ramgopal Rao is a globally recognized nanoelectronics researcher with over 500 publications and 50 patents, including 20 US patents and technologies used in hundreds of millions of chips. He previously served as Director of IIT Delhi (2016–2021), co-founded the deep-tech startups Nanosniff and Soilsens, and played a key role in establishing India's major nanoelectronics programmes. He is currently the Group Vice Chancellor of BITS Pilani, overseeing its campuses in Pilani, Hyderabad, Goa, Dubai and Mumbai.",
    date: "Jan 22, 2026",
    author: "Prof. V. Ramgopal Rao",
    designation: "Group Vice Chancellor",
    institution: "BITS Pilani",
    image: "/images/notes/future/v-ramgopal-rao.jpg",
    body: [
      {
        heading: "Witness to the Moore's Law Era",
        text: "I had the privilege of contributing during the peak years of Moore's Law, when device scaling and increased component density drove innovation in nanoelectronics. It was a time of tremendous clarity and excitement, where every advancement had a clear goalpost. That era helped shape not only my technical perspective but also my appreciation for structured innovation.",
      },
      {
        heading: "Embracing a Future of Integration",
        text: "As Moore's Law reaches its limits, I find myself energized by the transition to heterogeneous integration, combining different technologies on a single chip through systems-on-chip and systems-in-package. The future lies not in further miniaturization, but in smarter integration. This transition opens up a rich landscape of possibilities, redefining how we design, scale and innovate.",
      },
      {
        heading: "Exploring Alternatives to the Transistor",
        text: "The need for alternatives to the traditional MOSFET, which could be Nobel Prize-worthy work, is both urgent and inspiring. I'm especially intrigued by molecular electronics, envisioning molecules that act like switches or transistors, with their states changing under electrical stimulus. Success in this area would be revolutionary, and pursuing it represents the kind of high-risk, high-reward science I deeply value.",
      },
      {
        heading: "A Passion for Molecular Logic Systems",
        text: "Beyond making a single molecule switch, the challenge and opportunity lie in scaling, connecting hundreds of such molecules to perform logic operations. To me, this represents one of the most exciting frontiers in technology, where foundational science converges with transformative future applications.",
      },
      {
        heading: "A Believer in India's Semiconductor Promise",
        text: "India holds vast untapped potential in semiconductor manufacturing, backed by a strong talent pool and emerging industrial activity. The entry of leading companies like Micron and Tata into the sector marks an encouraging beginning. With the right combination of infrastructure, policy support, and strategic intent, I think India can become a major global player in this domain.",
      },
      {
        heading: "Championing Policy, Technology, and Execution",
        text: "Throughout my journey, I've learned that success depends on three pillars: sound technology, effective policy, and flawless execution. India often has the technology, but the gap lies in execution and alignment of intent with policy. I strongly advocate for reforms that bring specialists into governance and reduce bureaucratic hurdles to innovation.",
      },
      {
        heading: "Deep Tech and the Call for Patient Capital",
        text: "I'm inspired by India's vibrant startup ecosystem, but I believe our next leap must come from deep tech. This requires long-term investment and an ecosystem that supports intellectual property-driven innovation. I remain optimistic that with evolving investor mindsets and government collaboration, India will soon foster world-class deep tech ventures.",
      },
      {
        heading: "The Joy of Scientific Curiosity",
        text: "What has always driven me is curiosity, the thrill of not just understanding how things work, but how they could work. From my early work on semiconductor devices to current exploration of molecular logic and quantum alternatives, that sense of wonder has never faded. I believe that the future belongs to those who pursue difficult questions with a sense of scientific adventure.",
      },
      {
        heading: "Recognizing Energy as the Next Guiding Principle",
        text: "As we move beyond Moore's Law, energy efficiency is emerging as the next unifying constraint. The era of brute-force computing, with high-performance chips consuming massive power, is not sustainable. I see great opportunity in innovating at the intersection of computing and energy, designing systems that do more with less, in a way that aligns with both environmental and technological advancements.",
      },
      {
        heading: "Encouraging Foundational Infrastructure",
        text: "One key learning from my years in the field is that breakthrough technologies require an equally strong foundation. For India to thrive in semiconductor manufacturing, we must build not just fabs, but the entire ecosystem, gases, chemicals, water, power, and logistics. These are not glamorous elements, but they are absolutely critical, and I remain hopeful that national initiatives will recognize and invest in these enablers.",
      },
      {
        heading: "Mentoring as a Legacy",
        text: "One of the most fulfilling parts of my journey has been mentoring young engineers and researchers. As India moves into an era of innovation-led growth, nurturing talent becomes more important than ever. I'm committed to sharing knowledge, encouraging original thinking, and helping the next generation take bold and informed risks.",
      },
      {
        heading: "Remaining an Optimist for India's Technological Future",
        text: "Despite the challenges, I remain an optimist. I see an India that is young, eager, and capable. With the right intent and the courage to break old molds, I believe we can not only catch up with the world but lead in areas that define the future, be it AI, semiconductors, or clean energy.",
      },
    ],
    quote:
      "No dream is too big if you are willing to start small, stay grounded, and work relentlessly.",
    quoteAttribution: "Prof. V. Ramgopal Rao",
  },
  "2": {
    title: "Dimensions of Fluids",
    subtitle:
      "Professor Suman Chakraborty is a globally acclaimed researcher in the Department of Mechanical Engineering at IIT Kharagpur, where he currently serves as Director and is a Sir J. C. Bose National Fellow. His pioneering work in microfluidics and nanofluidics has translated into affordable point-of-care diagnostic devices, including the COVIRAP rapid COVID-19 detection kit and devices for anaemia and cancer screening. His honours include the Infosys Prize (2022), the Shanti Swarup Bhatnagar Prize (2013), and Fellowships of the American Physical Society, the Royal Society of Chemistry, and ASME.",
    date: "Jan 18, 2026",
    author: "Prof. Suman Chakraborty",
    designation: "Director",
    institution: "Indian Institute of Technology Kharagpur",
    image: "/images/notes/future/suman-chakraborty.png",
    linkedinCard: "/images/linkedin/notes-of-future.png",
    body: [
      {
        heading: "Indie Film (Statistics) over Family Blockbuster (Medicine)",
        text: "I started by purposefully avoiding biology to prevent anyone, including my parents, from forcing me into medical-entrance preparation. Instead, I took statistics as an additional subject. It is quite interesting now, looking back and forth, to see how topics like correlation and regression from that time have been reinvented in modern research within the context of machine learning.",
      },
      {
        heading: "Metaphysics Integration",
        text: "This means combining fluid flow with other fundamental physical forces. For example, studying how a liquid moves when you apply an electric field (electromagnetism), or how a fluid containing tiny particles behaves under light (optics). It's about looking at flow not in isolation, but as part of a complex system of forces. Cell sorting via acoustofluidics, for instance, allows label-free isolation of specific cells, such as Circulating Tumor Cells (CTCs) from a blood sample, without needing to tag them with chemicals.",
      },
      {
        heading: "Multiscale Understanding",
        text: "This involves bridging the gap between the tiniest molecular behaviour (the nano/micro scale) and the observable, large-scale flow (the macroscopic world). It means understanding how the way individual molecules interact with a surface or with each other directly affects the overall flow dynamics of the fluid.",
      },
      {
        heading: "Future of Flow Physics",
        text: "Flow physics is being revolutionized by computational intelligence, data-driven modelling, and bioinspired design, moving us beyond simple efficiency to create systems that are adaptive and self-regulating, just like those found in nature. Ultimately, these high-tech advancements must be driven by empathy and purpose, ensuring their benefits reach the underserved populations where science can have the greatest societal impact.",
      },
      {
        heading: "Integrating IQ and EQ",
        text: "The most valuable lesson I learned, particularly when merging physics and biology, is that future scientific breakthroughs demand boundary-crossing thinking. This means we must deliberately combine engineering rigour with human empathy, and data analytics with creative design, mirroring how the brain integrates IQ (knowledge) and EQ (emotional intelligence) to achieve truly complete and impactful solutions.",
      },
      {
        heading: "Living Technologies",
        text: "Future breakthroughs won't just come from the best labs, but from researchers willing to challenge existing assumptions and break down disciplinary walls. The ultimate goal is to create “living technologies”: systems that can intelligently sense, respond to, and evolve with their environment. This requires a fundamental shift in science from seeking control over nature to pursuing coexistence and dialogue with it, a goal that data science and AI can significantly help achieve, provided we remember to collaborate with AI rather than simply letting it take charge.",
      },
      {
        heading: "Inside-Out or Outside-In",
        text: "Current systems use static, fabricated blood vessels. However, in complex disease progression like cancer, new blood vessels form dynamically via angiogenesis. If we can successfully replicate this naturally, dynamically evolving, personalized physiological system inside a bioengineered framework, it could answer many mysteries about disease progression.",
      },
      {
        heading: "Challenging Parental Hierarchy",
        text: "The principle should be: personal research progress is of the scientist, by the scientist, and for the scientist. While an 80-year-old colleague certainly brings unique life experience, they should not be defining the progress that will primarily be managed by someone in their early 30s. The biggest ongoing mistake is that the 30-year-old is always at the receiving end rather than acting as a director of the direction.",
      },
      {
        heading: "Geopolitics is Inescapable",
        text: "Geopolitics is inescapable for researchers, as it defines funding and opportunities. It drives the migration current of scientists in one way or another. I firmly believe that every challenge presents an opportunity. For instance, had the COVID-19 pandemic not occurred, we might never have seen the rapid progress in mRNA-based vaccine technology or nucleic acid diagnostic tests.",
      },
      {
        heading: "Bus Driver to Life Driver",
        text: "The trajectory of my intellectual journey mirrors a demanding, multi-stage maze: what began as the straightforward, tangible ambition of mastering a powerful vehicle (the bus) in childhood was gradually superseded by solving immediate academic riddles, ultimately leading me to the far more intricate and minute reality of microfluidics and life sciences, where the forces and transport processes governing life are equally, if not more, complex to master than any machinery.",
      },
    ],
    quote:
      "Co-existence of multidomain language of nature is fascinating to dialogue.",
    quoteAttribution: "Prof. Suman Chakraborty",
  },
  "3": {
    title: "Instructing Microbe Genes",
    subtitle:
      "Prof. Dipankar Chatterji is an Indian molecular biologist and Emeritus Professor in the Molecular Biophysics Unit at the Indian Institute of Science, Bangalore. He is known for pioneering research on bacterial gene regulation, expression and stress responses in E. coli and Mycobacterium species. He has produced over 200 peer-reviewed publications, mentored more than 40 doctoral students, served as President of the Indian Academy of Sciences (2013–15), and been honoured with the Shanti Swarup Bhatnagar Prize (1992) and the Padma Shri (2016).",
    date: "Jan 15, 2026",
    author: "Prof. Dipankar Chatterji",
    designation: "Emeritus Professor, Molecular Biophysics Unit",
    institution: "Indian Institute of Science, Bangalore",
    image: "/images/notes/future/dipankar-chatterji.jpg",
    linkedinCard: "/images/linkedin/notes-of-future-1.png",
    body: [
      {
        heading: "Molecular Recognition as the Foundation",
        text: "We are continually enhancing our understanding of molecular recognition, which remains the guiding principle of my own life's work. This concept, how one molecule recognizes another, defining geometry and shape, is still central to resolving problems like how antibiotics recognize disease mechanisms and how proteins are synthesized, forming the basis for many future discoveries.",
      },
      {
        heading: "Unlocking the Gut–Brain Axis",
        text: "A major frontier currently under intense investigation is the gut microbiome and the crucial gut–brain axis. Researchers are actively exploring how our gut environment, influenced by diet and surroundings, is intimately connected to our health, emotion, dreams, and even mental problems, suggesting that key decisions about our future physiology may already be decided within the first six months of life.",
      },
      {
        heading: "Harnessing Artificial Intelligence for Design and Prediction",
        text: "The application of AI is rapidly progressing and has already done a fantastic job in areas such as protein folding and drug development. Startups and research teams are leveraging AI to design and predict effective small molecules that can be used as drug starters, pushing forward the pace of pharmaceutical innovation.",
      },
      {
        heading: "Temporal Manipulation of Gene Expression",
        text: "Startups are currently designing small molecules intended to influence the level of gene expression in a specific, temporal manner. This effort focuses on manipulating protein synthesis only when needed, such as when treating a disease characterized by protein deficiency, representing a highly targeted approach to future therapeutics.",
      },
      {
        heading: "Sustaining the Scientific Ecosystem through Policy",
        text: "A crucial project in progress is the necessity of securing robust government funding and protecting the scientific environment. More scientists need to pivot from “hardcore science” into policy roles to successfully convince decision-makers and the public about the importance of scientific support and to prevent the degradation of the established, robust ecosystem.",
      },
      {
        heading: "Closing the Funding Gap",
        text: "Although we have highly talented students, a constant struggle is that India's science community is not able to catch up with the rest of the world because the amount of money received for grants is so small compared to other countries. This resource issue is an ongoing challenge that must be overcome to fully realize India's potential, especially when competing with highly organized nations demonstrating logarithmic-scale progress.",
      },
      {
        heading: "The Critical Role of RNA and Early Life Decisions",
        text: "The study of RNA remains a highly critical frontier; four Nobel Prizes in the last decade alone underscore its importance to molecular biology. A major challenge we are actively trying to solve is understanding how fundamental decisions are made about our physiology and health very early in life, it is now suggested that a person's future is almost decided within the first six months after birth. This profound and challenging biological mystery underpins the future development of truly predictive personalized medicine.",
      },
      {
        heading: "Preserving the Scientific Ecosystem and Combating Non-Science",
        text: "A significant and ongoing effort must be directed toward protecting the robust, testable scientific ecosystem that took decades to build. Scientists must actively engage in policy to secure necessary funding and prevent the degradation of this environment. We are consistently challenged by non-scientific approaches and views, such as using things like go mutra to treat infection, which pose a tremendous risk of destroying established methodology.",
      },
      {
        heading: "The Promise of Natural Discovery in Therapeutics",
        text: "The possibilities for fundamental discovery remain enormous, especially in areas requiring new therapeutic agents. Research continues to uncover very good entities for applications like antibiotics, sometimes emerging from the most unexpected places, such as soil samples from a kitchen garden. This ongoing work highlights that innovative discovery, which provides solutions to complex issues like antibiotic resistance, can still emerge from highly rudimentary beginnings.",
      },
      {
        heading: "Enhancing Industry–Academia Collaboration",
        text: "The relationship between academia and industry is bound to grow. It is important for academics to recognize that industry will follow up on important discoveries; this relationship requires both academicians to increase engagement with industry and industry to support that movement, facilitating the transfer of academic knowledge.",
      },
    ],
    quote: "Nature is God, in my belief, DNA is part of that truth.",
    quoteAttribution: "Prof. Dipankar Chatterji",
  },
  "4": {
    title: "Nature's Action Chemistry",
    subtitle:
      "Prof. Sabyasachi Sarkar is a chemist known for his work in bioinorganic chemistry and nanoscience. He joined IIT Kanpur in 1978, where he served as Senior Professor and Head of the Chemistry Department. His research has illuminated metalloproteins, modelled heat-resistant enzymes and fish enzyme replicas, and proved that carbon dioxide binds to magnesium in chlorophyll during photosynthesis, confirming a 100-year-old theory. In nanoscience, he has developed water-soluble nanocarbons from low-grade coal, used in plant growth, bioimaging, and drug delivery across the blood–brain barrier. He became a Fellow of the Indian Academy of Sciences in 1997.",
    date: "Jan 12, 2026",
    author: "Prof. Sabyasachi Sarkar",
    designation: "Senior Professor (Retired), Department of Chemistry",
    institution: "Indian Institute of Technology Kanpur",
    image: "/images/notes/future/sabyasachi-sarkar.jpg",
    body: [
      {
        heading: "Recreating Nature in the Lab: A Chemist's Joy",
        text: "My scientific journey began with a deep fascination for how nature constructs complex biomolecules. Recreating molecules like adenine from simple building blocks in the lab, using second-row transition metals like molybdenum as environmental catalysts, was not just an achievement; it was a profound moment of connection with nature's own methods. The joy of designing and synthesizing molecules atom by atom and then watching them function like their natural counterparts remains the most fulfilling reward of my research life.",
      },
      {
        heading: "Challenging a Century-old Scientific Puzzle",
        text: "A persistent question haunted photosynthesis research for a century: does carbon dioxide truly bind to the magnesium centre in chlorophyll? By replicating this chemistry with synthetic porphyrins and verifying it through rigorous 13C NMR studies on natural chlorophyll, we offered concrete proof. It was a tribute to Willstätter's unfulfilled scientific quest. I felt that we not only solved a puzzle but also honoured a scientific legacy through modern tools and creative thinking.",
      },
      {
        heading: "Developing Sustainable Catalysis for Industry and Environment",
        text: "Inspired by the potential of biomimicry, I developed synthetic enzyme models capable of catalysing industrially relevant reactions, like converting acetylene in crude ethylene to useful compounds. These catalysts, mimicking natural enzymes like acetylene hydratase, can detoxify harmful substances and produce valuable products at low cost and with minimal environmental impact. This work represents my vision of chemistry serving both industry and sustainability, creating value while reducing harm.",
      },
      {
        heading: "Revolutionizing Drug Delivery with a Simple Idea",
        text: "While the pharmaceutical world was focused on receptor-based drug delivery, I envisioned something radically different: a universal “Nano-box” that could carry any drug across the blood–brain barrier, regardless of its type. Inspired by the simplicity of the Bombay dabbawala's lunchbox, we created a non-toxic, biodegradable carbon-based nano-carrier that delivers drugs safely and is completely excreted within days. This innovation, tested and patented, holds transformative potential, even if current mindsets have yet to fully embrace it.",
      },
      {
        heading: "Redefining Reaction Mechanisms with Biomimetic Kinetics",
        text: "Traditional chemical mechanisms like the Marcus outer-sphere and Taube inner-sphere fail to explain the unique behaviour of our synthetic atom-transfer reactions. Through my work, I demonstrated that these reactions follow enzyme-like Michaelis–Menten kinetics, emphasizing the formation of enzyme–substrate-like complexes in the ground state. Despite resistance from reviewers, I hold firm that this understanding opens new paths in catalysis, bridging chemistry and biology more closely than ever before.",
      },
      {
        heading: "A Future Dream: Mimicking Nitrogen Fixation",
        text: "One of the greatest unsolved challenges I continue to pursue is the biomimicry of nitrogen fixation. Nature converts nitrogen to ammonia at ambient conditions in the root nodules of plants, something the energy-intensive Haber–Bosch process still struggles to do efficiently. Cracking this code could revolutionize agriculture and global food security. I remain hopeful that a synthetic model will one day achieve this, proving that even the simplest biological feats can inspire world-changing innovation.",
      },
      {
        heading: "Inspiring Minds, Questioning Systems, and Hoping for Change",
        text: "Beyond my lab work, I have always believed that scientific creativity needs freedom and encouragement, qualities often lacking in our current system. While countries like the US, Germany, and Japan push innovation, we in India are still often caught in a cycle of imitation. I strive to break this cycle by mentoring young researchers to think independently, search passionately, and question boldly. Even if just a few choose the path of genuine curiosity and discovery, that would be a legacy worth leaving behind.",
      },
      {
        heading: "Understanding Mosquito Chemistry to Reveal Nature's Ingenuity",
        text: "Curiosity led me to explore how mosquitoes use nitric oxide (NO) to feed unnoticed. By modelling the nitrophorin protein, I uncovered how it binds NO in acidic conditions and releases it at blood pH, enhancing blood flow for easier feeding. Then, it binds histamine to suppress irritation until the mosquito is gone. This molecular sleight of hand is a masterclass in biological efficiency, and studying it deepened my appreciation for nature's elegant problem-solving mechanisms.",
      },
      {
        heading: "Pushing Boundaries Despite Resistance and Rejection",
        text: "Throughout my career, I've often faced resistance when presenting new concepts, especially when they challenge established theories or come from outside the dominant academic circles. But each rejection only strengthened my resolve. From atom-transfer reaction models to alternative pathways in catalysis, I have remained committed to scientific truth over popularity. Progress in science demands courage to persist, even when others are unwilling to listen.",
      },
      {
        heading: "Calling for a National Scientific Renaissance",
        text: "I've observed how deeply systemic issues, including favouritism and intellectual complacency, have slowed our scientific progress. Institutions once envisioned as beacons of innovation have drifted from their missions. Yet I remain hopeful. I believe India has brilliant minds and boundless potential. If we shift our focus from imitation to innovation, provide opportunities for original thinkers, and celebrate risk-taking over safe conformity, we can usher in a renaissance in Indian science, one where we are the first to discover, not just follow.",
      },
    ],
    quote: "Science, a poetic philosophy in understanding nature.",
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
      {
        text: "India is urbanising at a pace and scale without historical precedent. By conservative estimates, over 600 million Indians will live in cities by 2030, and the country will need to build the equivalent of a new Chicago every year to accommodate this growth. Yet the institutional frameworks, governance structures, and policy instruments that shape Indian cities were largely designed for a different era, one of slower growth, simpler economies, and less demanding citizens. The central challenge of urban policy today is to reimagine these frameworks for the realities of twenty-first-century urbanisation.",
      },
      {
        text: "At the heart of this challenge lies the question of governance. Indian cities are among the most poorly governed urban areas in the democratic world. Municipal bodies are starved of fiscal autonomy, fragmented across dozens of overlapping agencies, and subject to constant interference from state governments. The 74th Constitutional Amendment, which was meant to empower urban local bodies, remains largely unimplemented three decades after its passage. Without genuine devolution of power and resources to city governments, no amount of smart-city technology or infrastructure spending will produce cities that work for their residents.",
      },
      {
        text: "Housing and land use represent another critical frontier. India's urban housing shortage is estimated at tens of millions of units, and much of the existing housing stock, particularly in informal settlements, lacks basic services such as clean water, sanitation, and secure tenure. Land use regulations, including outdated floor-space index limits and rigid zoning laws, have constrained the supply of formal housing and pushed prices beyond the reach of the urban poor and middle class alike. Reforming these regulations to allow denser, mixed-use development, while protecting green spaces and heritage areas, is essential to creating inclusive and affordable cities.",
      },
      {
        text: "Infrastructure investment must be guided by a clear vision of the kind of cities India wants to build. The tendency to prioritise motorways and flyovers over public transit, pedestrian infrastructure, and cycling networks has produced cities that are congested, polluted, and hostile to the majority of residents who do not own cars. Cities like Kochi, with its metro, and Indore, with its waste management reforms, offer evidence that a different model is possible, one that prioritises public goods, sustainability, and quality of life over private mobility and speculative real estate.",
      },
      {
        text: "Ultimately, the future of Indian cities will be shaped not just by engineers and planners but by the quality of public deliberation and civic engagement. Urban policy is inherently political. It determines who benefits from the city's growth and who bears its costs. Creating platforms for inclusive decision-making, strengthening local democratic institutions, and investing in the research and data infrastructure needed for evidence-based policy are not luxuries but necessities. India's cities have the potential to be the greatest engines of innovation and social mobility the world has ever seen, but only if the right policy choices are made now.",
      },
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
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
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
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
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
                {article.body.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    {section.heading && (
                      <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-2">
                        {section.heading}
                      </h3>
                    )}
                    <p className="text-slate-700 leading-relaxed">
                      {section.text}
                    </p>
                  </div>
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
