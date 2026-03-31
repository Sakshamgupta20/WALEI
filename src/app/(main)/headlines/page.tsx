"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Clock } from "lucide-react";

const categoryColors: Record<string, string> = {
  Success: "bg-emerald-100 text-emerald-700",
  Tragedy: "bg-red-100 text-red-700",
  Research: "bg-blue-100 text-blue-700",
  Policy: "bg-purple-100 text-purple-700",
  Setback: "bg-orange-100 text-orange-700",
  Controversies: "bg-yellow-100 text-yellow-800",
};

const allCategories = ["All", "Success", "Research", "Policy", "Tragedy", "Setback", "Controversies"];

const headlines = [
  { id: "1", timestamp: "17 Mar", headline: "IIT Madras launches EduReach AI learning platform for rural schools", category: "Success" },
  { id: "2", timestamp: "13 Mar", headline: "First-year IIT Delhi student found dead in campus apartment suicide", category: "Tragedy" },
  { id: "3", timestamp: "12 Mar", headline: "IIT Bombay hosts Tohoku University Global Immersion Program 2026", category: "Success" },
  { id: "4", timestamp: "11 Mar", headline: "NITI Aayog releases Fiscal Health Index 2026 evaluating state finances", category: "Policy" },
  { id: "5", timestamp: "24 Feb", headline: "ISRO opens registration for START 2026 space training program", category: "Success" },
  { id: "6", timestamp: "23 Feb", headline: "IIT Madras hosts Cosmic Origins physics conference on gravitational waves", category: "Research" },
  { id: "7", timestamp: "6 Feb", headline: "IIT Madras launches Rs 600 crore deeptech fund with Unicorn India", category: "Success" },
  { id: "8", timestamp: "28 Jan", headline: "IIT Delhi Class of 2000 pledges Rs 70 crore at Silver Jubilee reunion", category: "Success" },
  { id: "9", timestamp: "26 Jan", headline: "IIT Kanpur PhD scholar suicide marks eighth campus death in months", category: "Tragedy" },
  { id: "10", timestamp: "24 Jan", headline: "ISRO Chairman announces multiple satellite launches planned for 2026", category: "Success" },
  { id: "11", timestamp: "23 Jan", headline: "IIT Madras hosts international conference on cosmic origins research", category: "Research" },
  { id: "12", timestamp: "20 Jan", headline: "IIT Kanpur PhD scholar from Earth Sciences dies by suicide on campus", category: "Tragedy" },
  { id: "13", timestamp: "16 Jan", headline: "IIT Patna reports 17% salary hike with Google hiring 19 students", category: "Success" },
  { id: "14", timestamp: "14 Jan", headline: "IIT Patna secures 319 job offers from 90 companies in Phase 1", category: "Success" },
  { id: "15", timestamp: "12 Jan", headline: "ISRO's PSLV-C62 mission fails losing 16 satellites in third stage anomaly", category: "Setback" },
  { id: "16", timestamp: "8 Jan", headline: "IIT Hyderabad student bags record Rs 2.5 crore international package", category: "Success" },
  { id: "17", timestamp: "3 Jan", headline: "Edward Nathan Varghese secures highest IIT Hyderabad package ever", category: "Success" },
  { id: "18", timestamp: "30 Dec", headline: "IIT Delhi students secure 1,275 job offers by December 2025 end", category: "Success" },
  { id: "19", timestamp: "26 Dec", headline: "IIT Kanpur concludes Phase 1 placements with 1,202 total offers", category: "Success" },
  { id: "20", timestamp: "26 Dec", headline: "IIT Kanpur sees 15 international offers from Europe Japan Korea US", category: "Success" },
  { id: "21", timestamp: "20 Dec", headline: "IIT Delhi's Manasvi STEM program empowers 100 high school girls", category: "Success" },
  { id: "22", timestamp: "19 Dec", headline: "IIT Madras Winter School on quantum physics begins at research park", category: "Research" },
  { id: "23", timestamp: "17 Dec", headline: "IISc Bangalore hosts computational methods in lattice field theories school", category: "Research" },
  { id: "24", timestamp: "10 Dec", headline: "IIT Bombay launches Rs 250 crore Y-Point deep tech VC fund", category: "Success" },
  { id: "25", timestamp: "9 Dec", headline: "IIT Delhi concludes fourth edition of Manasvi mentorship program", category: "Success" },
  { id: "26", timestamp: "5 Dec", headline: "Da Vinci Trading offers Rs 2.8 crore packages at IIT placements", category: "Success" },
  { id: "27", timestamp: "2 Dec", headline: "IIT placements 2026 see record offers exceeding Rs 2.8 crore from global firms", category: "Success" },
  { id: "28", timestamp: "1 Dec", headline: "IIT BHU receives 489 offers from 125 companies on Day 1", category: "Success" },
  { id: "29", timestamp: "22 Nov", headline: "IIT Kanpur hosts SCOPE conference on sustainability and water policy", category: "Research" },
  { id: "30", timestamp: "19 Nov", headline: "IIT placements 2026 gear up with sharp rise in recruiter participation", category: "Success" },
  { id: "31", timestamp: "15 Nov", headline: "IIT Bombay Lumina women alumni community holds first virtual event", category: "Success" },
  { id: "32", timestamp: "12 Nov", headline: "IIT Bombay unveils Lumina initiative for women alumni mentorship", category: "Success" },
  { id: "33", timestamp: "1 Nov", headline: "IISc Bangalore computational physics school opens registrations", category: "Research" },
  { id: "34", timestamp: "28 Oct", headline: "Novel tuberculosis skin test SIILTIBCY gets marketing authorization", category: "Success" },
  { id: "35", timestamp: "25 Oct", headline: "IIT Delhi initiates center to revive traditional Indian textiles", category: "Success" },
  { id: "36", timestamp: "22 Oct", headline: "Two premier institutes claim best research output sparking rivalry", category: "Controversies" },
  { id: "37", timestamp: "19 Oct", headline: "Indian astronaut Shubhanshu Shukla returns after 18-day ISS mission", category: "Success" },
  { id: "38", timestamp: "17 Oct", headline: "IIT Bombay's Ten Minute Million startup funding event returns", category: "Success" },
  { id: "39", timestamp: "15 Oct", headline: "CSIR-IGIB launches BIRSA 101 CRISPR therapy for sickle cell disease", category: "Success" },
  { id: "40", timestamp: "11 Oct", headline: "Kerala government launches ROCERS chemical emergency response system", category: "Success" },
  { id: "41", timestamp: "8 Oct", headline: "Serum Institute develops prototype Disease X vaccine platform", category: "Success" },
  { id: "42", timestamp: "5 Oct", headline: "IIT Mandi students protest sudden hike in mess and hostel fees", category: "Controversies" },
  { id: "43", timestamp: "2 Oct", headline: "IIT Bombay's MadhuNetrAI screens diabetic retinopathy via mobile", category: "Success" },
  { id: "44", timestamp: "28 Sep", headline: "QNu Labs develops world's longest 500 km Quantum Key Distribution network", category: "Success" },
  { id: "45", timestamp: "25 Sep", headline: "IIT Indore students design low-cost 3D-printed prosthetic limbs", category: "Success" },
  { id: "46", timestamp: "20 Sep", headline: "PhD scholar found dead in IIT Kharagpur hostel room", category: "Tragedy" },
  { id: "47", timestamp: "20 Sep", headline: "Silicon Valley CEO visits IIT Kanpur sparking recruitment rumors", category: "Controversies" },
  { id: "48", timestamp: "19 Sep", headline: "IIT Kharagpur PhD scholar death marks sixth unnatural death in 2025", category: "Tragedy" },
  { id: "49", timestamp: "17 Sep", headline: "IIT Roorkee hosts University of Twente professor for collaboration", category: "Success" },
  { id: "50", timestamp: "15 Sep", headline: "NASSCOM reports India hosts over 3,600 deep-tech ventures", category: "Success" },
  { id: "51", timestamp: "15 Sep", headline: "TU Dresden professor visits IIT Roorkee under DAAD exchange program", category: "Success" },
  { id: "52", timestamp: "10 Sep", headline: "IISc scientist receives international prize for green hydrogen research", category: "Success" },
  { id: "53", timestamp: "6 Sep", headline: "IIT Roorkee holds online meeting with Turin Polytechnic University", category: "Success" },
  { id: "54", timestamp: "5 Sep", headline: "Ghostwriting scandal hits research papers as premier institutes tighten checks", category: "Controversies" },
  { id: "55", timestamp: "1 Sep", headline: "INSPIRE-MANAK mobilizes 1.14 million science ideas from school students", category: "Success" },
  { id: "56", timestamp: "25 Aug", headline: "Government allocates Rs 211 crore for space startups commercial economy", category: "Policy" },
  { id: "57", timestamp: "15 Aug", headline: "PM announces Mission Sudarshan Chakra for indigenous electronic warfare", category: "Policy" },
  { id: "58", timestamp: "5 Aug", headline: "DAC clears Rs 67,000 crore for BrahMos launchers and naval defence", category: "Policy" },
  { id: "59", timestamp: "1 Aug", headline: "Shimane University professor visits IIT Roorkee for geoscience collaboration", category: "Success" },
  { id: "60", timestamp: "31 Jul", headline: "IIT Roorkee and Myanmar's NSPU sign MoU to strengthen academic ties", category: "Success" },
  { id: "61", timestamp: "31 Jul", headline: "IIT Roorkee PhD scholar awarded Fulbright-Nehru Doctoral Research Fellowship", category: "Success" },
  { id: "62", timestamp: "31 Jul", headline: "University of Saskatchewan professor visits IIT Roorkee for collaboration", category: "Success" },
  { id: "63", timestamp: "30 Jul", headline: "ISRO-NASA joint satellite NISAR launch date officially set", category: "Success" },
  { id: "64", timestamp: "24 Jul", headline: "Rutgers University representative visits IIT Roorkee for cooperation", category: "Success" },
  { id: "65", timestamp: "23 Jul", headline: "Myanmar faculty joins IIT Roorkee under AINU-FEP mobility program", category: "Success" },
  { id: "66", timestamp: "21 Jul", headline: "Dr. Naw Lay Wah from Myanmar begins two-month visit at IIT Roorkee", category: "Success" },
  { id: "67", timestamp: "18 Jul", headline: "IIT Kharagpur B.Tech student Ritam Mondal found dead in hostel", category: "Tragedy" },
  { id: "68", timestamp: "16 Jul", headline: "IIT Roorkee delegation visits Hanyang University South Korea", category: "Success" },
  { id: "69", timestamp: "15 Jul", headline: "IIT Roorkee delegation advances Indo-Korean academic ties at Yonsei", category: "Success" },
  { id: "70", timestamp: "14 Jul", headline: "IIT Roorkee strengthens global ties with Changwon National University", category: "Success" },
];

const timelineData = [
  { date: "Jan–Feb 2026", label: "Concluded", items: [
    "[UG/PG Exam] JEE Main (Session 1), GATE, NID DAT, NIFT, IIT JAM",
    "[Grant/Funding] Lady Tata Memorial Trust Junior Scholarship: Applications typically closed in mid-January.",
  ]},
  { date: "March 2026", label: "Current", items: [
    "[UG/PG Exam] CUET PG, MAH MCA CET",
    "[Grant/Funding] SERB N-PDF (National Post-Doctoral Fellowship): Application window typically closes in early to mid-March.",
    "[Grant/Funding] Ramanujan Fellowship (SERB): Rolling deadline throughout the year, but March/April is a common time for researchers to submit nominations.",
  ]},
  { date: "April 2026", label: "", items: [
    "[UG/PG Exam] JEE Main (Session 2), NDA 1, CDS 1, MHT CET, BITSAT (Session 1), JEST, AEEE, KIITEE, GUJCET",
    "[Grant/Funding] DBT JRF (Biotechnology Eligibility Test): Exam usually conducted in mid-to-late April.",
  ]},
  { date: "May 2026", label: "", items: [
    "[UG/PG Exam] NEET UG, CUET UG, JEE Advanced, UPSC CSE (Prelims), WBJEE, BITSAT (Session 2), COMEDK, KCET, TS EAMCET, AP EAPCET, CUSAT CAT, ISI Admission Test",
    "[Grant/Funding] Fulbright-Nehru Doctoral Research Fellowships: Deadline usually falls around mid-May.",
    "[Grant/Funding] PMRF (Prime Minister's Research Fellows) Cycle 1: Nominations from granting institutions typically occur in May.",
  ]},
  { date: "June 2026", label: "", items: [
    "[UG/PG Exam] NEST, IISER Aptitude Test (IAT), CMI Entrance, NIMCET, ICAR AIEEA, CSIR NET (Session 1), UGC NET (Session 1), NEET PG",
    "[Intl PhD] Standardized Testing Window Opens: Ideal month to start taking the GRE, GMAT, TOEFL, IELTS, or PTE.",
  ]},
  { date: "July 2026", label: "", items: [
    "[UG/PG Exam] CAPF (AC)",
    "[Grant/Funding] ICSSR Doctoral Fellowships: Application window typically opens in July for social science and interdisciplinary researchers.",
  ]},
  { date: "August 2026", label: "", items: [
    "[UG/PG Exam] UPSC CSE (Mains) begins.",
    "[Intl PhD] Spring 2027 PhD Admissions (US/Canada): Application deadlines typically run from August through early October.",
  ]},
  { date: "September 2026", label: "", items: [
    "[UG/PG Exam] NDA 2, CDS 2, SSC CGL (Tier 1)",
    "[Grant/Funding] DST INSPIRE Fellowship: Application window for top-ranking university postgraduates generally opens in September.",
    "[Intl PhD] University Shortlisting & Faculty Outreach: Best time for Indian students to email potential PIs in the US/UK/Europe.",
  ]},
  { date: "October 2026", label: "", items: [
    "[Grant/Funding] Khorana Program for Scholars: Deadline usually falls in late October.",
    "[Grant/Funding] S.N. Bose Scholars Program: Deadline usually falls in late October.",
  ]},
  { date: "November 2026", label: "", items: [
    "[UG/PG Exam] CAT (Expected Nov 29)",
    "[Intl PhD] UK/Europe Fall 2027 PhD Priority Deadlines: Deadlines for fully funded programs (Oxford, Cambridge, Max Planck Institutes) begin in November.",
  ]},
  { date: "December 2026", label: "", items: [
    "[UG/PG Exam] CLAT 2027, CSIR NET (Session 2), UGC NET (Session 2)",
    "[Grant/Funding] PMRF (Prime Minister's Research Fellows) Cycle 2: Second window for nominations usually opens.",
    "[Intl PhD] US Fall 2027 Major PhD Deadlines: The vast majority of US STEM PhD application deadlines fall on December 1 or December 15.",
  ]},
];

const tabs = [
  { id: "headlines", label: "HEADLINES" },
  { id: "timelines", label: "TIMELINES" },
];

function HAndTContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("headlines");
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.some((t) => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const filteredHeadlines = activeCategory === "All"
    ? headlines
    : headlines.filter((h) => h.category === activeCategory);

  return (
    <>
      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[var(--gold)] text-[var(--gold)]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "headlines" ? (
        /* Headlines Section */
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--dark)] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-0">
              {filteredHeadlines.map((item, index) => (
                <article
                  key={item.id}
                  className={`group flex flex-col md:flex-row md:items-start gap-3 md:gap-6 py-5 ${
                    index < filteredHeadlines.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-400 md:w-24 flex-shrink-0">
                    <Clock size={14} />
                    <time>{item.timestamp}</time>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed group-hover:text-[var(--gold)] transition-colors">
                      {item.headline}
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColors[item.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {item.category}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Timeline Section */
        <section className="py-16 md:py-20 bg-[var(--light)]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ backgroundColor: "var(--gold)" }} />
              <h2 className="text-2xl font-light text-gray-900">Timeline</h2>
            </div>
            <p className="text-xs text-gray-400 mb-10 italic">
              Caution: Please check respective authorities for exact timelines and modifications. The updates here might be old.
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gray-200" />

              <div className="space-y-10">
                {timelineData.map((item, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-10 items-start">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor:
                            index === 0 ? "var(--gold)" : "white",
                          border:
                            index === 0
                              ? "none"
                              : "2px solid var(--gold)",
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              index === 0 ? "white" : "var(--gold)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-3">
                        <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--gold)" }}>
                          {item.date}
                        </p>
                        {item.label && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                            {item.label}
                          </span>
                        )}
                      </div>
                      <div className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm space-y-2">
                        {item.items.map((entry, i) => (
                          <p key={i} className="text-sm text-gray-700 leading-relaxed">{entry}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function HeadlinesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Stay Updated
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-6">
            Headlines &amp; Timelines
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            The latest from WALEI and a chronological view of our journey building India&apos;s science and innovation network.
          </p>
        </div>
      </section>

      <Suspense fallback={
        <div className="py-10 text-center text-gray-400">Loading...</div>
      }>
        <HAndTContent />
      </Suspense>
    </>
  );
}
