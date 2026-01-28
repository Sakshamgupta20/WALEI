import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Users, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about WALEI's mission to share insights and experiences that inspire through conversations with visionary leaders.",
};

const notesCategories = [
  {
    title: "Notes of Future",
    description: "Long-view legacy for what comes next. Scientists' reflections shaping their disciplines.",
    color: "var(--accent-future)",
    icon: Lightbulb,
  },
  {
    title: "Notes of Challenges",
    description: "From ideas to resilience beyond labs. Honest accounts of building science ventures.",
    color: "var(--accent-challenges)",
    icon: Target,
  },
  {
    title: "Notes of Moments",
    description: "Living between places, becoming across borders. Personal reflections from NRIs abroad.",
    color: "var(--accent-moments)",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] opacity-10"
            style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              About Us
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-[var(--gold)]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            About WALEI
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            <span style={{ color: "var(--gold)" }}>Vision</span>
            <span className="mx-3">·</span>
            <span style={{ color: "var(--teal)" }}>Insight</span>
            <span className="mx-3">·</span>
            <span style={{ color: "var(--accent-challenges)" }}>Action</span>
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ backgroundColor: "var(--teal)" }} />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
                Building Tomorrow&apos;s
                <br />
                <span className="text-gray-400">Scientific</span>{" "}
                <span style={{ color: "var(--gold)" }}>Legacy</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  WALEI is a digital infrastructure at stage 1 of science and innovation.
                  A thought leadership platform dedicated to capturing and sharing the
                  wisdom of visionary leaders from across industries and disciplines.
                </p>
                <p>
                  We believe that every leader has a unique story—a journey filled with
                  challenges overcome, lessons learned, and insights gained. These
                  experiences, when shared, have the power to inspire and guide the
                  next generation of innovators and changemakers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[var(--light)] rounded-2xl p-6">
                <Globe size={24} style={{ color: "var(--gold)" }} className="mb-4" />
                <p className="text-3xl font-light text-gray-900 mb-1">349</p>
                <p className="text-sm text-gray-500">Cities Worldwide</p>
              </div>
              <div className="bg-[var(--light)] rounded-2xl p-6">
                <Award size={24} style={{ color: "var(--teal)" }} className="mb-4" />
                <p className="text-3xl font-light text-gray-900 mb-1">54</p>
                <p className="text-sm text-gray-500">Countries</p>
              </div>
              <div className="col-span-2 bg-[var(--dark)] rounded-2xl p-6 text-white">
                <p className="text-lg italic font-light leading-relaxed">
                  &ldquo;The leaps are charged by the conscience of its community.
                  Building the future with sheer efforts by top minds.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-[var(--light)]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              The Notes Series
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Three distinct perspectives on science, innovation, and the human journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {notesCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="h-1 w-16 mt-6 rounded-full" style={{ backgroundColor: category.color }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--teal)] to-[#005a68] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/10" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Whether you&apos;re a leader with stories to share or someone seeking
            inspiration, we welcome you to be part of the WALEI community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/publish"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--teal)] font-semibold rounded-lg hover:bg-white/90 transition-all"
            >
              Share Your Story
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/notes-of-future"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
