"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Join thousands of global subscribers receiving monthly updates on
            scientific insights, policy recommendations, and the latest from our
            community of researchers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-md focus:outline-none focus:border-white/40 text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2.5 text-white rounded-md font-semibold text-sm hover:opacity-90 transition-all whitespace-nowrap"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Subscribe
            </button>
          </div>

          <label className="flex items-start gap-3 text-xs text-gray-400 cursor-pointer max-w-lg mx-auto">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-3.5 h-3.5"
            />
            <span className="leading-relaxed">
              I consent to my email address being used in accordance with the{" "}
              <a
                href="/privacy"
                className="underline hover:text-white transition-colors"
              >
                privacy policy
              </a>
              .
            </span>
          </label>
        </form>
      </div>
    </section>
  );
}
