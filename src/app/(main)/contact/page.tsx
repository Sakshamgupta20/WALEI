"use client";

import { useState, useEffect, Suspense, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  Rocket,
  FileText,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

const SUBJECT_OPTIONS = [
  { value: "partnership", label: "Partnership / Collaboration" },
  { value: "advisory", label: "Advisory Board" },
  { value: "patents", label: "Patents" },
  { value: "startup", label: "Start-up Inventory" },
  { value: "gigs", label: "Gigs" },
  { value: "media", label: "Media Enquiry" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "general", label: "General" },
];

const tabs = [
  { id: "connect", label: "CONNECT" },
  { id: "startup", label: "START-UP" },
  { id: "patent", label: "PATENT" },
  { id: "gig", label: "GIG" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("connect");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.some((t) => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const subjectLabel =
      SUBJECT_OPTIONS.find((opt) => opt.value === subject)?.label ?? subject;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          subject: `[WALEI Contact] ${subjectLabel}`,
          message,
          from_name: "WALEI Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
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

      {activeTab === "connect" && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Left - Reach Out */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-light text-gray-900 mb-6">
                  Reach Out
                </h2>
                <div className="space-y-4">
                  <a
                    href="mailto:walei.office@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--light)] border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(212, 168, 83, 0.15)" }}
                    >
                      <Mail size={18} style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--gold)" }}>
                        Email
                      </p>
                      <p className="text-sm text-gray-700">walei.office@gmail.com</p>
                    </div>
                  </a>
                </div>

                {/* Submission links */}
                <div className="mt-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    Submissions
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setActiveTab("startup")}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--light)] border border-gray-100 hover:shadow-md transition-all text-left group"
                    >
                      <Rocket size={18} style={{ color: "var(--gold)" }} />
                      <span className="text-sm font-medium text-gray-700 flex-1">Start-up Submission</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[var(--gold)] transition-colors" />
                    </button>
                    <button
                      onClick={() => setActiveTab("patent")}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--light)] border border-gray-100 hover:shadow-md transition-all text-left group"
                    >
                      <FileText size={18} style={{ color: "var(--gold)" }} />
                      <span className="text-sm font-medium text-gray-700 flex-1">Patent Submission</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[var(--gold)] transition-colors" />
                    </button>
                    <button
                      onClick={() => setActiveTab("gig")}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-[var(--light)] border border-gray-100 hover:shadow-md transition-all text-left group"
                    >
                      <Briefcase size={18} style={{ color: "var(--gold)" }} />
                      <span className="text-sm font-medium text-gray-700 flex-1">Gig Submission</span>
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-[var(--gold)] transition-colors" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right - Send a Message */}
              <div className="lg:col-span-3">
                <div className="bg-[var(--light)] rounded-3xl p-8 md:p-10">
                  <h2 className="text-2xl font-light text-gray-900 mb-8">
                    Send a Message
                  </h2>

                  {status === "success" && (
                    <div
                      className="flex items-start gap-3 p-4 rounded-xl mb-6"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--gold) 12%, transparent)",
                        border: "1px solid var(--gold)",
                      }}
                    >
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <p className="text-sm" style={{ color: "var(--gold)" }}>
                        Your message has been sent successfully! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl mb-6 bg-red-50 border border-red-200">
                      <AlertCircle size={20} className="flex-shrink-0 mt-0.5 text-red-500" />
                      <p className="text-sm text-red-600">
                        Something went wrong. Please try again or email us directly at{" "}
                        <a href="mailto:walei.office@gmail.com" className="underline font-medium">
                          walei.office@gmail.com
                        </a>
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent text-sm transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent text-sm transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent text-sm transition-all"
                      >
                        <option value="">Select a topic</option>
                        {SUBJECT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent resize-none text-sm transition-all"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full px-6 py-4 bg-[var(--gold)] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>Sending... <Loader2 size={18} className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send size={18} /></>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === "startup" && <StartupForm />}
      {activeTab === "patent" && <PatentForm />}
      {activeTab === "gig" && <GigForm />}
    </>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-2">
      <div className="w-7 h-7 rounded-full bg-[var(--dark)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
        {number}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    </div>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-6 md:p-8">
      {children}
    </div>
  );
}

function formSubmit(form: HTMLFormElement, setStatus: (s: FormStatus) => void, label: string) {
  return async () => {
    const data = new FormData(form);
    const fields: Record<string, string> = { access_key: WEB3FORMS_KEY, from_name: label };
    data.forEach((val, key) => { fields[key] = val.toString(); });
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const json = await res.json();
      if (json.success) { setStatus("success"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };
}

/* ─── Start-up Submission Form ─── */
function StartupForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await formSubmit(e.currentTarget, setStatus, "WALEI Start-up Submission")();
  }

  return (
    <section className="py-12 md:py-20 bg-[var(--light)]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "var(--gold)" }}>
            Start-up Submission
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Start-up Submission Format
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Welcome to the ecosystem portal. Approved entries will be featured in our quarterly Science &amp; Industry index. Fields marked with * are mandatory.
          </p>
        </div>

        <StatusBanner status={status} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Core Identity */}
          <SectionCard>
            <SectionHeader number={1} title="Core Identity" />
            <div className="space-y-5">
              <FormField label="Start-up Name *" name="startup_name" required placeholder="e.g. Sciencia Dynamics" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Sector *" name="sector" required placeholder="e.g. Biotechnology" />
                <FormField label="Founders & CEO *" name="founders" required placeholder="Names" />
              </div>
              <FormField label="One-line Description *" name="one_liner" required placeholder="What does your start-up do in one sentence?" />
              <FormField label="Logo / Team Photo URL" name="photo_url" placeholder="Link to image" />
            </div>
          </SectionCard>

          {/* Section 2: Operational Data */}
          <SectionCard>
            <SectionHeader number={2} title="Operational Data" />
            <div className="space-y-5">
              <FormField label="Abstract *" name="abstract" required placeholder="Brief overview of your venture, technology, and impact..." textarea />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Institutions / Labs" name="institutions" placeholder="e.g. IIT Bombay, CSIR" />
                <FormField label="Team Size" name="team_size" placeholder="e.g. 12" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="HQ Location" name="location" placeholder="City, Country" />
                <FormField label="Website Link" name="link" placeholder="https://" />
              </div>
            </div>
          </SectionCard>

          {/* Section 3: Portfolio & Contact */}
          <SectionCard>
            <SectionHeader number={3} title="Portfolio & Contact" />
            <div className="space-y-5">
              <FormField label="Products / Services" name="products" placeholder="Key products or services" />
              <FormField label="Brief Description of Flagship Offering" name="flagship" placeholder="What sets you apart?" textarea rows={3} />
              <FormField label="Contact Email *" name="email" type="email" required placeholder="official@startup.com" />
            </div>
          </SectionCard>

          <div className="flex items-center justify-end gap-4 pt-2">
            <SubmitButton status={status} label="Submit Application" />
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─── Patent Submission Form ─── */
function PatentForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await formSubmit(e.currentTarget, setStatus, "WALEI Patent Submission")();
  }

  return (
    <section className="py-12 md:py-20 bg-[var(--light)]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "var(--gold)" }}>
            Submission Guide
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Patent Specification
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Detailed format requirements for submitting intellectual property documentation to the WALEI ecosystem.
          </p>
        </div>

        <StatusBanner status={status} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Identification */}
          <SectionCard>
            <SectionHeader number={1} title="Identification" />
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Patent Title *" name="title" required placeholder="Full patent title" />
                <FormField label="Patent No. *" name="patent_no" required placeholder="e.g. 568389" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField label="Lead Professor *" name="patentee" required placeholder="Name" />
                <FormField label="Co-Authors" name="authors" placeholder="Comma-separated" />
                <FormField label="Filing Status *" name="status" required placeholder="Granted / Pending" />
              </div>
              <FormField label="Affiliated Institution *" name="institution" required placeholder="e.g. Malaviya National Institute of Technology" />
            </div>
          </SectionCard>

          {/* Section 2: Logistics */}
          <SectionCard>
            <SectionHeader number={2} title="Logistics" />
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField label="Protection Duration" name="duration" placeholder="e.g. 20 years" />
                <FormField label="Primary Domain *" name="domain" required placeholder="e.g. Chemical / Green" />
                <FormField label="Jurisdiction *" name="jurisdiction" required placeholder="e.g. India, USA" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Patent Link (if available)" name="link" placeholder="https://patents.google.com/..." />
                <FormField label="Contact Email *" name="email" type="email" required placeholder="researcher@institute.edu" />
              </div>
            </div>
          </SectionCard>

          {/* Section 3: IP Details */}
          <SectionCard>
            <SectionHeader number={3} title="IP Details" />
            <div className="space-y-5">
              <FormField label="Abstract *" name="abstract" required placeholder="Detailed patent abstract..." textarea rows={5} />
              <FormField label="Unique Selling Propositions (4-6 points)" name="usps" placeholder="One USP per line" textarea rows={4} />
            </div>
          </SectionCard>

          {/* Section 4: Commercialization */}
          <SectionCard>
            <div className="flex items-start gap-3 p-4 rounded-xl mb-6" style={{ backgroundColor: "rgba(212, 168, 83, 0.08)", border: "1px solid rgba(212, 168, 83, 0.25)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Commercialization Open</p>
                <p className="text-xs text-gray-500">This patent is currently available for external partnerships. Interested parties may inquire directly.</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Open for</label>
              <div className="flex flex-wrap gap-3">
                {["Tech Transfer", "Joint Venture", "Licensing"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--dark)] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer hover:opacity-80 transition-opacity">
                    <input type="checkbox" name="collaboration" value={opt} className="accent-[var(--gold)] sr-only peer" />
                    <span className="peer-checked:text-[var(--gold)]">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </SectionCard>

          <div className="flex items-center justify-end gap-4 pt-2">
            <SubmitButton status={status} label="Proceed to Review" />
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─── Gig Submission Form ─── */
function GigForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await formSubmit(e.currentTarget, setStatus, "WALEI Gig Submission")();
  }

  return (
    <section className="py-12 md:py-20 bg-[var(--light)]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: "var(--gold)" }}>
            Foundry Submission
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-3">
            Submit a Gig
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Create a comprehensive profile for your scientific service or expertise. This guide ensures your gig meets ecosystem standards.
          </p>
        </div>

        <StatusBanner status={status} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Audience & Contact */}
          <SectionCard>
            <SectionHeader number={1} title="Audience & Contact" />
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Who is this gig aimed at?</label>
                <div className="flex gap-3">
                  {["Partner", "Consumer"].map((opt) => (
                    <label key={opt} className={`flex-1 text-center px-4 py-3 rounded-xl border border-gray-200 bg-white cursor-pointer hover:border-[var(--gold)] transition-colors text-sm font-medium text-gray-700`}>
                      <input type="radio" name="role" value={opt} className="sr-only peer" />
                      <span className="peer-checked:text-[var(--gold)]">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <FormField label="Primary Contact Email *" name="email" type="email" required placeholder="researcher.lab@university.edu" />
            </div>
          </SectionCard>

          {/* Section 2: Service Identity */}
          <SectionCard>
            <SectionHeader number={2} title="Service Identity" />
            <div className="space-y-5">
              <FormField label="Gig Title *" name="gig_name" required placeholder="e.g. Advanced Proteomics Analysis" />
              <FormField label="One-line Description *" name="one_liner" required placeholder="In 60 words, describe your service proposition" textarea rows={3} />
              <FormField label="Cover Photo URL" name="photo_url" placeholder="Link to card image" />
            </div>
          </SectionCard>

          {/* Section 3: Professional Context */}
          <SectionCard>
            <SectionHeader number={3} title="Professional Context" />
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField label="Institution / Lab Name" name="institution" placeholder="e.g. IISc Bangalore" />
                <FormField label="Area of Expertise *" name="expertise" required placeholder="e.g. Proteomics, NGS" />
              </div>
              <FormField label="Your Name *" name="name" required placeholder="Full name" />
              <FormField label="About the Lab" name="about" placeholder="Detailed background on your research group, methodology, and facilities..." textarea rows={3} />
            </div>
          </SectionCard>

          {/* Section 4: Capability & Stats */}
          <SectionCard>
            <SectionHeader number={4} title="Capability & Stats" />
            <div className="space-y-5">
              <FormField label="Services Offered (up to 3)" name="services" placeholder="Service 1 (e.g. Mass Spectrometry)&#10;Service 2 (e.g. Data Analysis)&#10;Service 3" textarea rows={3} />
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-[var(--light)] border border-gray-200 p-4 text-center">
                  <input type="number" name="stat_projects" placeholder="0" className="w-full text-center text-2xl font-light text-gray-900 bg-transparent border-none focus:outline-none" />
                  <p className="text-xs text-gray-500 mt-1">Projects</p>
                </div>
                <div className="rounded-xl bg-[var(--light)] border border-gray-200 p-4 text-center">
                  <input type="number" name="stat_publications" placeholder="0%" className="w-full text-center text-2xl font-light text-gray-900 bg-transparent border-none focus:outline-none" />
                  <p className="text-xs text-gray-500 mt-1">Completion</p>
                </div>
                <div className="rounded-xl bg-[var(--light)] border border-gray-200 p-4 text-center">
                  <input type="number" name="stat_satisfaction" placeholder="0%" className="w-full text-center text-2xl font-light text-gray-900 bg-transparent border-none focus:outline-none" />
                  <p className="text-xs text-gray-500 mt-1">Satisfaction</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <div className="flex items-center justify-end gap-4 pt-2">
            <SubmitButton status={status} label="Publish Gig" />
          </div>
        </form>
      </div>
    </section>
  );
}

/* ─── Shared Components ─── */
function FormField({
  label, name, required, placeholder, type = "text", textarea, rows = 4,
}: {
  label: string; name: string; required?: boolean; placeholder?: string; type?: string; textarea?: boolean; rows?: number;
}) {
  const cls = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent text-sm transition-all";
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      {textarea ? (
        <textarea id={name} name={name} rows={rows} required={required} placeholder={placeholder} className={`${cls} resize-none`} />
      ) : (
        <input type={type} id={name} name={name} required={required} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}

function StatusBanner({ status }: { status: FormStatus }) {
  if (status === "success") {
    return (
      <div className="flex items-start gap-3 p-4 rounded-xl mb-6" style={{ backgroundColor: "color-mix(in srgb, var(--gold) 12%, transparent)", border: "1px solid var(--gold)" }}>
        <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
        <p className="text-sm" style={{ color: "var(--gold)" }}>Submitted successfully! We&apos;ll review and get back to you.</p>
      </div>
    );
  }
  if (status === "error") {
    return (
      <div className="flex items-start gap-3 p-4 rounded-xl mb-6 bg-red-50 border border-red-200">
        <AlertCircle size={20} className="flex-shrink-0 mt-0.5 text-red-500" />
        <p className="text-sm text-red-600">
          Something went wrong. Please email us at{" "}
          <a href="mailto:walei.office@gmail.com" className="underline font-medium">walei.office@gmail.com</a>
        </p>
      </div>
    );
  }
  return null;
}

function SubmitButton({ status, label }: { status: FormStatus; label: string }) {
  return (
    <button
      type="submit"
      disabled={status === "submitting"}
      className="w-full px-6 py-4 bg-[var(--gold)] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {status === "submitting" ? (
        <>Submitting... <Loader2 size={18} className="animate-spin" /></>
      ) : (
        <>{label} <ArrowRight size={18} /></>
      )}
    </button>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--dark)] py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full border border-white/5" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-white/5" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--gold)" }}>
              Connect
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Have questions, ideas, or want to collaborate? Reach out or submit your work directly.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="py-10 text-center text-gray-400">Loading...</div>}>
        <ContactContent />
      </Suspense>
    </>
  );
}
