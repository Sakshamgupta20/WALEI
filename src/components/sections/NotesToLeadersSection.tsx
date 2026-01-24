import Link from "next/link";
import { PenLine, Users, Globe } from "lucide-react";

const features = [
  {
    Icon: PenLine,
    title: "Write Your Statement",
    description:
      "Share your research-backed insights on critical global challenges",
  },
  {
    Icon: Users,
    title: "Join the Community",
    description:
      "Connect with fellow scientists committed to evidence-based policy",
  },
  {
    Icon: Globe,
    title: "Make an Impact",
    description:
      "Your voice reaches policymakers and influences global decision-making",
  },
];

export function NotesToLeadersSection() {
  return (
    <section className="py-28" style={{ backgroundColor: "var(--teal)" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
            Notes to Leaders
          </h2>
          <p className="text-2xl text-white text-opacity-90 leading-relaxed">
            A global initiative bringing together scientists, researchers, and
            thought leaders to deliver evidence-based policy recommendations
            directly to world leaders and decision-makers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <feature.Icon
                  className="w-12 h-12 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-lg text-white text-opacity-80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/notes-to-leaders"
            className="inline-block px-12 py-5 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Contribute to Notes to Leaders
          </Link>
        </div>
      </div>
    </section>
  );
}
