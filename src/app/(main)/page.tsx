import {
  HeroSection,
  PerspectivesSection,
  UpcomingSection,
  NotesSeriesSection,
  AboutWaleiSection,
  MilieuSection,
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

      {/* Milieu - Patents, Startups, Gigs */}
      <MilieuSection />

      {/* About WALEI Stats */}
      <AboutWaleiSection />

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  );
}
