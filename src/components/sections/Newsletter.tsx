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
    <section className="py-24" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-light text-white mb-8">
            Stay Connected
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join thousands of global subscribers receiving monthly updates on
            scientific insights, policy recommendations, and the latest from our
            community of researchers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-5 bg-white bg-opacity-10 border-2 border-white border-opacity-20 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:border-opacity-40 text-lg"
            />
            <button
              type="submit"
              className="px-10 py-5 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg whitespace-nowrap"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Subscribe
            </button>
          </div>

          <label className="flex items-start gap-4 text-sm text-gray-300 cursor-pointer max-w-2xl mx-auto">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4"
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
