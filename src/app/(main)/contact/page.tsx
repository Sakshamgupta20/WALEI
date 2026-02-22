"use client";

import { useState, FormEvent } from "react";
import { Mail, Users, Globe, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

const SUBJECT_OPTIONS: { value: string; label: string }[] = [
  { value: "partnership", label: "Partnership Inquiry" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "collaboration", label: "Research Collaboration" },
  { value: "media", label: "Media Inquiry" },
  { value: "general", label: "General Question" },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

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
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Have questions, ideas, or want to collaborate? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-8">
                Reach Out
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:walei.office@gmail.com"
                      className="text-base text-gray-600 hover:text-[var(--gold)] transition-colors"
                    >
                      walei.office@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--gold)" }}
                  >
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      Global Presence
                    </h3>
                    <p className="text-base text-gray-600">
                      349 Cities across 54 Countries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-[var(--light)] rounded-2xl">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-movements)" }}
                  >
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      Community
                    </h3>
                    <p className="text-base text-gray-600">
                      IIT K, IIT B, IISc, IIT KGP, MPI, SDU, VUB...
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="mt-10 p-8 rounded-2xl bg-[var(--dark)] text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6">
                  Our Reach
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p
                      className="text-4xl font-light"
                      style={{ color: "var(--gold)" }}
                    >
                      349
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Cities</p>
                  </div>
                  <div>
                    <p
                      className="text-4xl font-light"
                      style={{ color: "var(--gold)" }}
                    >
                      54
                    </p>
                    <p className="text-sm text-gray-400 mt-1">Countries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--light)] rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl font-light text-gray-900 mb-8">
                Send a Message
              </h2>

              {/* Status Banner */}
              {status === "success" && (
                <div
                  className="flex items-start gap-3 p-4 rounded-xl mb-6"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--gold) 12%, transparent)",
                    border: "1px solid var(--gold)",
                  }}
                >
                  <CheckCircle
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  />
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
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
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
                    <>
                      Sending... <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
