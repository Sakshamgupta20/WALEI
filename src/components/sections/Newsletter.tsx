"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

type SubStatus = "idle" | "submitting" | "success" | "error";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<SubStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email,
          subject: "[WALEI] New Newsletter Subscription",
          message: `New subscriber: ${email}`,
          from_name: "WALEI Newsletter",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setEmail("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--dark)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/10" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Mail size={20} className="text-white" />
              </div>
              <span className="text-sm uppercase tracking-wider text-white/70 font-semibold">
                Newsletter
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight">
              Stay at the Frontier of
              <br />
              <span style={{ color: "var(--gold)" }}>Science & Policy</span>
            </h3>

            <p className="text-base text-white/70 leading-relaxed mb-6">
              Join thousands of global subscribers receiving monthly updates on
              scientific insights, policy recommendations, and the latest from our
              community of researchers shaping the future.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-white/80" />
                <span>Monthly digest</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-white/80" />
                <span>Exclusive interviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-white/80" />
                <span>Research highlights</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[var(--gold)]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[var(--gold)]" />
                </div>
                <h4 className="text-xl font-medium text-white mb-2">
                  You&apos;re subscribed!
                </h4>
                <p className="text-white/60">
                  Thank you for joining our community. We&apos;ll keep you updated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm text-white/80 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-lg focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-base"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-white/60 cursor-pointer mb-6">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[var(--gold)]"
                  />
                  <span className="leading-relaxed">
                    I consent to receive emails in accordance with the{" "}
                    <a
                      href="/about"
                      className="underline hover:text-white transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </span>
                </label>

                {status === "error" && (
                  <p className="text-sm text-red-400 mb-4">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 text-white font-semibold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--gold)" }}
                >
                  {status === "submitting" ? (
                    <>
                      Subscribing... <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Subscribe Now <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
