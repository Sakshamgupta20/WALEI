import { Metadata } from "next";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Supplies",
  description: "Research supplies and resources curated by the WALEI network.",
};

export default function SuppliesPage() {
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
              Resources
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Supplies
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Research supplies and resources curated by the WALEI network.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-8">
            <Package size={36} className="text-[var(--gold)]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            We are curating a collection of essential research supplies and resources.
            This section will connect researchers with the tools they need.
          </p>
        </div>
      </section>
    </>
  );
}
