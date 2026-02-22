import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function FeaturedScientist() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px]" style={{ backgroundColor: "var(--gold)" }} />
            <span
              className="text-[11px] uppercase tracking-[0.2em] font-bold"
              style={{ color: "var(--gold)" }}
            >
              Featured Interview
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image Column */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border-2 rounded-lg"
                style={{ borderColor: "var(--gold)" }}
              />

              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={`${basePath}/images/notes/future/dipankar-chatterji.jpg`}
                  alt="Prof. Dipankar Chatterji"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-light text-white mb-1">
                    Prof. Dipankar Chatterji
                  </h3>
                  <p className="text-sm text-gray-300">
                    IISc Bangalore
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-lg"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Notes of Future
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">
              Indian Institute of Science • Molecular Biophysics
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight" style={{ color: "var(--dark)" }}>
              Instructing Microbe Genes:
              <br />
              <span className="italic text-gray-500">The Future of Biotechnology</span>
            </h2>

            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              In this exclusive conversation, Professor Chatterji shares his
              groundbreaking work on microbial gene regulation. From understanding
              bacterial survival mechanisms to potential applications in medicine
              and biotechnology, he explores the frontier of molecular biology.
            </p>

            {/* Quote Card */}
            <div className="relative bg-[var(--light)] rounded-lg p-6 mb-8">
              <svg
                className="absolute top-4 left-4 w-8 h-8 opacity-20"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "var(--gold)" }}
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="relative z-10 text-lg italic text-gray-700 leading-relaxed pl-8">
                &ldquo;Understanding how microbes communicate and adapt is key to
                developing new antibiotics and therapeutic approaches. The language
                of genes holds answers we&apos;re just beginning to decode.&rdquo;
              </blockquote>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/notes-of-future"
                className="group px-6 py-3 font-semibold text-sm tracking-wide text-white flex items-center gap-2 hover:opacity-90 transition-all"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Read Full Interview
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <a
                href="https://www.linkedin.com/company/walei/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-600 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all text-sm font-medium"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
