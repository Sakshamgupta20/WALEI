import Link from "next/link";
import { PenLine, Users, Globe } from "lucide-react";

const features = [
  {
    Icon: PenLine,
    title: "Write Your Statement",
    description:
      "Draft evidence-based policy briefs grounded in peer-reviewed research and real-world data",
  },
  {
    Icon: Users,
    title: "Join the Community",
    description:
      "Connect with 2,000+ scientists across 40 countries committed to policy impact",
  },
  {
    Icon: Globe,
    title: "Make an Impact",
    description:
      "Your insights reach G20 policymakers, UN delegates, and national government advisors",
  },
];

export function NotesToLeadersSection() {
  return (
    <section className="py-14 md:py-20" style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-4">
            Notes to Leaders
          </h2>
          <p className="text-sm md:text-base text-white/85 leading-relaxed">
            A global initiative bringing together scientists, researchers, and
            thought leaders to deliver evidence-based policy recommendations
            directly to world leaders and decision-makers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.Icon
                  className="w-6 h-6 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-normal text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/publish"
            className="inline-block px-6 py-2.5 text-white rounded-md font-semibold text-sm hover:opacity-90 transition-all"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Contribute to Notes to Leaders
          </Link>
        </div>
      </div>
    </section>
  );
}
