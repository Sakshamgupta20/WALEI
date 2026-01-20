import {
  HeroSection,
  TaglineSection,
  CategoryPreview,
  FeaturedLeaders,
  LatestArticles,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Featured Interview */}
      <HeroSection
        title="Experiences that inspire"
        subtitle="Conversations with visionary leaders shaping tomorrow's world"
        quote={{
          text: "Innovation is not about having all the answers. It's about asking the right questions and having the courage to pursue them.",
          author: "Prof. V Ramgopal Rao",
          role: "Former Director, IIT Delhi",
        }}
        cta={{
          label: "Read Featured Interview",
          href: "/notes-of-future/featured",
        }}
        overlay="gradient"
        height="large"
      />

      {/* Mission / Tagline Section */}
      <TaglineSection />

      {/* Category Previews */}
      <CategoryPreview />

      {/* Featured Leaders */}
      <FeaturedLeaders />

      {/* Latest Articles Grid */}
      <LatestArticles />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
