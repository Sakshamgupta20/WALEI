import {
  HeroSection,
  PerspectivesSection,
  UpcomingSection,
  NotesSeriesSection,
  AboutWaleiSection,
  FeaturedScientist,
  Newsletter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Perspectives - ETH Zurich style news cards */}
      <PerspectivesSection />

      {/* Upcoming Notes - Two column with circular photos */}
      <UpcomingSection />

      {/* Notes Series Overview - Three columns */}
      <NotesSeriesSection />

      {/* Featured Scientist Interview */}
      <FeaturedScientist />

      {/* About WALEI Stats */}
      <AboutWaleiSection />

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  );
}
