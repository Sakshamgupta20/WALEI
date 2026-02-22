import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Quote } from "lucide-react";

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
    title: "From IIT Kharagpur to Max Planck: Navigating Research Cultures",
    subtitle:
      "The transition from Indian academia to European research culture brings unexpected challenges and profound growth opportunities.",
    date: "Jan 24, 2026",
    author: "Dr. Bhaskar Paul",
    designation: "Research Group Leader",
    institution: "MPI CEC, Germany",
    image: "/images/notes/movements/bhaskar-paul.jpg",
    linkedinCard: "/images/linkedin/nom-bhaskar-paul.png",
    body: [
      "When I left IIT Kharagpur for the Max Planck Institute for Chemical Energy Conversion in Muelheim, I thought the biggest adjustment would be the weather. I was wrong. The shift in research culture was far more profound — and ultimately more rewarding — than anything I had anticipated.",
      "In Indian academia, the professor-student relationship is deeply hierarchical. You address your supervisor as 'Sir' or 'Ma'am,' and there's an implicit understanding that the senior researcher's direction is not to be openly questioned. At Max Planck, I found myself in meetings where doctoral students would respectfully but firmly challenge their group leader's hypotheses. The first time a second-year PhD student questioned my experimental design in a group meeting, I felt a flash of discomfort. Within weeks, I recognised this culture of constructive questioning as one of the most powerful tools for doing better science.",
      "The administrative differences were equally striking. In India, a significant portion of a researcher's time goes into navigating bureaucratic processes — from procurement to travel approvals. In Germany, the institutional support infrastructure handles most of this, freeing researchers to focus almost entirely on their work. I found myself gaining nearly 10-15 hours per week that would have been consumed by paperwork in India.",
      "But the transition wasn't all gains. I deeply missed the organic collaboration that happens in Indian labs — the casual chai-time discussions that often spark the most creative ideas. German research culture, while excellent at structured collaboration, can feel isolating to someone accustomed to the constant social interaction of an Indian campus. Building community required deliberate effort.",
      "The funding landscape also taught me important lessons. While German research is generously funded compared to India, the expectations for accountability and output are proportionally higher. Every euro spent must be justified, and the peer review process for grant renewal is rigorous. This discipline in research spending is something India's growing research ecosystem could benefit from adopting.",
      "Looking back after five years, I see my journey as one of integration rather than assimilation. I've retained the intuitive, big-picture thinking that Indian scientific training emphasises, while adopting the meticulous documentation and systematic experimental design that German research culture demands. The best science happens when diverse approaches converge.",
    ],
    quote:
      "Moving abroad doesn't mean leaving home behind. It means carrying the best of what shaped you into new contexts where it can create unexpected value. The IIT system taught me resourcefulness; Max Planck taught me rigour. Together, they've made me a better scientist.",
    quoteAttribution: "Dr. Bhaskar Paul",
  },
  "2": {
    title: "Finding Home in Brussels: A Researcher's Dual Identity",
    subtitle:
      "An environmental scientist reflects on building a life between continents while pursuing sustainability research in the heart of Europe.",
    date: "Jan 20, 2026",
    author: "Dr. Richa Sharma",
    designation: "Environmental Scientist",
    institution: "Vrije Universiteit Brussel",
    image: "/images/notes/movements/richa-sharma.png",
    body: [
      "Brussels was never on my radar. Growing up in Jaipur, my mental map of research destinations included the usual suspects — the US, the UK, maybe Australia. But when an opportunity at Vrije Universiteit Brussel appeared in the form of a postdoctoral fellowship in environmental sustainability and policy, I found myself boarding a flight to a city I knew almost nothing about. That leap of faith has shaped both my science and my sense of self in ways I could never have predicted.",
      "The first thing that struck me about Brussels was its multilayered identity. A city where French, Dutch, and English coexist on street signs, where the European Parliament sits alongside Art Nouveau facades, and where a researcher from Rajasthan can somehow feel both entirely foreign and oddly at home. This constant negotiation of identities — linguistic, cultural, institutional — mirrors my own experience as an Indian woman in European academia. I have learned to code-switch not just between languages but between worldviews, and this skill has unexpectedly enriched my research on sustainability policy.",
      "My work focuses on the intersection of environmental science and public policy — specifically, how cities in the Global South can adapt European sustainability frameworks without losing their local context. It is research that demands dual literacy: you need to understand both the technocratic precision of EU environmental directives and the ground-level realities of water management in Indian cities. Being an Indian researcher in Brussels gives me a unique vantage point. I sit at the crossroads of two policy worlds, and my lived experience in both lends credibility and nuance to my analysis that no amount of desk research could replicate.",
      "The personal side of this journey has been equally transformative. Building community in a new country as a researcher is a particular kind of challenge. Your colleagues become your first social circle, but the transient nature of academic life means people are constantly arriving and leaving. I have learned to invest deeply in relationships while holding them lightly — a paradox that mirrors the immigrant experience more broadly. The Indian community in Brussels, though small, has been a lifeline. Weekend gatherings over homemade dal and chai have become rituals that anchor me to a sense of belonging even as my professional life unfolds in seminar rooms and policy workshops conducted in languages I am still mastering.",
      "What I have come to understand is that dual identity is not a deficit — it is a research methodology. The ability to see a problem from two cultural vantage points simultaneously is a form of intellectual depth that monocultural perspectives simply cannot achieve. When I present my work on sustainable urban planning, I bring not just data and models but a lived understanding of what it means to navigate scarcity, aspiration, and institutional complexity across very different societies. Brussels, with its own beautifully fractured identity, has taught me that wholeness does not require uniformity. You can be fully Indian and fully European in your scientific thinking, and the tension between these identities is where the most interesting questions live.",
    ],
    quote:
      "Dual identity is not a deficit — it is a research methodology. The ability to see a problem from two cultural vantage points simultaneously is a form of intellectual depth that monocultural perspectives simply cannot achieve.",
    quoteAttribution: "Dr. Richa Sharma",
  },
  "3": {
    title: "The German Research Landscape: Precision Meets Intuition",
    subtitle:
      "Adapting to German academic culture reveals surprising complementarities between methodical European approaches and the intuitive problem-solving fostered by Indian training.",
    date: "Jan 15, 2026",
    author: "Dr. Kartikay Sharma",
    designation: "Researcher",
    institution: "MPI, Germany",
    image: "",
    body: [
      "The Max Planck Society has a phrase that captures its ethos: 'insight must precede application.' When I arrived at my institute in Germany after completing my doctorate in India, I thought I understood what rigorous research looked like. I was quickly humbled. German academic culture operates with a level of procedural precision that can feel almost philosophical — every experiment is designed not just to answer a question but to answer it in a way that is reproducible, falsifiable, and exhaustively documented. Coming from an Indian research environment where resourcefulness and improvisation are prized, the adjustment was profound.",
      "In Indian labs, we learn to work with constraints. Equipment breaks down, reagents arrive late, power cuts interrupt experiments mid-run. This environment breeds a particular kind of scientific creativity — you learn to design experiments that are robust against disruption, and you develop an intuitive feel for when something is working even before the data confirms it. In Germany, the infrastructure is near-flawless, but the expectations shift accordingly. Without the excuse of logistical challenges, the focus falls entirely on the quality of your thinking. There is nowhere to hide behind circumstance, and this transparency has made me a sharper, more self-critical researcher.",
      "The collaboration culture in German academia deserves particular attention. Unlike the hierarchical structures I was accustomed to in India, German research groups operate with a surprising degree of flatness. Doctoral students are expected to have independent scientific opinions, and group meetings resemble Socratic seminars more than status updates. The first time a master's student questioned the theoretical framework of my project in a group meeting, I felt a jolt of defensiveness. But I soon recognised that this culture of open intellectual challenge is one of the most powerful features of the German system. Ideas are stress-tested collectively, and the result is science that is remarkably robust.",
      "What surprised me most, however, was how much my Indian training complemented the German approach rather than conflicting with it. The intuitive, pattern-recognition style of thinking that Indian scientific education cultivates turns out to be an excellent complement to German methodical rigour. I find that I often spot connections between disparate datasets that my German colleagues miss — not because they are less talented, but because their training emphasises depth within a narrow domain, while Indian training tends to produce broader, more associative thinkers. The best science in our group happens when these two cognitive styles converge.",
      "Living in Germany as an Indian researcher has also taught me about the subtler dimensions of cultural integration. Germans value directness, punctuality, and clear boundaries between professional and personal life. These norms, while initially jarring to someone raised in a culture where professional relationships are deeply personal and time is treated more fluidly, have their own wisdom. I have learned to appreciate the German respect for personal boundaries, even as I gently introduce my colleagues to the Indian tradition of hospitality that makes no distinction between a work friend and a life friend. The cultural exchange goes both ways, and the research is richer for it.",
    ],
    quote:
      "The intuitive, pattern-recognition style of thinking that Indian scientific education cultivates turns out to be an excellent complement to German methodical rigour. The best science happens when these two cognitive styles converge.",
    quoteAttribution: "Dr. Kartikay Sharma",
  },
  "4": {
    title: "Alpine Perspectives: Science at EPFL",
    subtitle:
      "At one of Europe's premier technical universities, an Indian researcher discovers that Swiss precision and Indian intuition can coexist — and that the mountains have lessons of their own.",
    date: "Jan 10, 2026",
    author: "Dr. Deepika Sardana",
    designation: "Researcher",
    institution: "EPFL, Switzerland",
    image: "",
    body: [
      "There is a particular quality of light in Lausanne that I have never encountered anywhere else. On clear mornings, Lake Geneva reflects the Alps with such precision that the boundary between water and mountain dissolves. I often think this landscape is a metaphor for my own experience at EPFL — the dissolution of boundaries between disciplines, between cultures, between the researcher I was trained to be in India and the one I am becoming in Switzerland. It is disorienting and beautiful in equal measure.",
      "EPFL operates at a pace and scale that took my breath away when I first arrived. The laboratories are equipped with instruments I had only read about in journals. The computing infrastructure allows simulations that would have taken weeks on Indian university systems to run in hours. But the most significant resource is not technological — it is the density of talent. In any given corridor, you might pass a Nobel laureate, a startup founder, and a doctoral student whose side project could reshape a field. This concentration of intellectual energy creates a kind of ambient pressure that pushes everyone to think bigger and move faster.",
      "Swiss precision is real and it permeates everything, from the trains that arrive to the second to the laboratory protocols that specify procedures down to the microlitre. For someone trained in Indian universities where jugaad — the art of creative improvisation — is a survival skill, this level of systematisation initially felt constraining. Where was the room for the happy accidents that drive discovery? What I eventually understood is that Swiss precision does not eliminate serendipity; it creates the conditions for more meaningful serendipity. When your baseline is perfectly controlled, the anomalies that appear are genuinely significant rather than artefacts of sloppy methodology.",
      "The cross-cultural dimension of science at EPFL is one of its greatest strengths. My research group alone includes members from eleven countries, and our weekly meetings are conducted in a fluid mixture of English, French, and the universal language of equations. This diversity is not merely demographic — it produces genuinely different approaches to the same problem. I have watched a Swiss colleague and a Brazilian postdoc arrive at the same result through completely different mathematical frameworks, each reflecting the pedagogical traditions of their home countries. My own Indian training, with its emphasis on analytical problem-solving and pattern recognition, adds another dimension to this tapestry.",
      "What EPFL has taught me above all is that excellence is not the property of any single culture or tradition. The Swiss contribute precision and infrastructure, the Americans bring entrepreneurial ambition, the Indians offer frugal innovation and associative thinking, and the result is a scientific culture that is genuinely greater than the sum of its parts. Living in Switzerland as an Indian researcher is an exercise in holding multiple truths simultaneously — that home is both Chandigarh and Lausanne, that rigour and intuition are not opposites but partners, and that the best view always comes after the hardest climb. The Alps remind me of this every morning.",
    ],
    quote:
      "Swiss precision does not eliminate serendipity; it creates the conditions for more meaningful serendipity. When your baseline is perfectly controlled, the anomalies that appear are genuinely significant rather than artefacts of sloppy methodology.",
    quoteAttribution: "Dr. Deepika Sardana",
  },
  "5": {
    title: "The Fellowship Journey: Marie Curie in Copenhagen",
    subtitle:
      "A Marie Sk\u0142odowska-Curie fellowship takes an Indian researcher to Denmark, where Scandinavian research culture and the art of building a life abroad converge.",
    date: "Jan 6, 2026",
    author: "Dr. Ananya Krishnan",
    designation: "Marie Curie Fellow",
    institution: "SDU, Denmark",
    image: "",
    body: [
      "The letter arrived on a Tuesday afternoon in Bangalore. I had applied for the Marie Sk\u0142odowska-Curie Individual Fellowship almost on a whim — the success rate hovers around twelve percent, and the application process is notoriously demanding. When I saw the word 'awarded' in the subject line, I sat very still for a long time. Within three months, I would be living in Odense, Denmark, a city I could not have placed on a map with confidence. The fellowship would take me to the University of Southern Denmark, and it would change everything I thought I knew about research, community, and belonging.",
      "The Scandinavian research ecosystem operates on principles that are quietly revolutionary. The emphasis on work-life balance is not a concession to comfort — it is treated as a precondition for intellectual productivity. My Danish colleagues leave the lab at five, take their full vacation allowances, and spend weekends cycling with their families. And yet, the quality and volume of research output is extraordinary. Coming from an Indian academic culture where long hours are worn as a badge of honour and where burnout is treated as an inevitable cost of serious scholarship, this was a paradigm shift. I learned that creativity does not require exhaustion; in fact, it requires the opposite.",
      "The Marie Curie fellowship itself is a masterclass in how research funding can be structured to maximise impact. Beyond the generous financial support, the fellowship includes a comprehensive training programme, mandatory secondments at partner institutions across Europe, and a strong emphasis on public engagement and science communication. I found myself presenting my research to schoolchildren in Copenhagen, to policymakers in Brussels, and to industry leaders in Berlin — experiences that transformed me from a bench scientist into a public intellectual. The fellowship does not just fund research; it builds researchers.",
      "Building a personal life in Denmark as an Indian woman presented its own unique set of challenges and rewards. Danish culture prizes a concept called hygge — a kind of cosy togetherness that is central to social life. But accessing Danish social circles as a foreigner requires patience and persistence. The Danes are warm but reserved, and friendships develop slowly compared to the instant intimacy that characterises Indian social interactions. I learned to appreciate the depth of Danish friendships precisely because they are not given lightly. The Indian community in Odense, though small, provided the immediate warmth I needed while I learned to navigate the longer rhythms of Scandinavian social life.",
      "Looking back on my fellowship journey, I am struck by how profoundly it has reshaped my understanding of what a scientific career can look like. In India, the path is relatively linear: study, publish, secure a permanent position, repeat. The European research landscape, and the Marie Curie programme in particular, showed me that a career can be a mosaic — a fellowship here, a collaboration there, a policy engagement somewhere else — and that this diversity of experience does not dilute your expertise but enriches it. I carry Bangalore in my bones and Copenhagen in my thinking, and the research I produce is unmistakably shaped by both. The Marie Curie fellowship gave me not just funding but permission to be a scientist without borders.",
    ],
    quote:
      "I carry Bangalore in my bones and Copenhagen in my thinking, and the research I produce is unmistakably shaped by both. The Marie Curie fellowship gave me not just funding but permission to be a scientist without borders.",
    quoteAttribution: "Dr. Ananya Krishnan",
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
          <h1 className="text-3xl md:text-4xl font-light text-white mb-4">
            Living Between Places
          </h1>
          <p className="text-base text-gray-400 max-w-2xl">
            Personal reflections from NRIs abroad. Stories of transition,
            cross-cultural identity, and becoming across borders.
          </p>
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
              {/* Title & Meta */}
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
                    <Quote size={24} className="text-[#6B5B95] opacity-60" />
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
