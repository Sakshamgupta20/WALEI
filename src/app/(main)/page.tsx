import {
  HeroSection,
  LatestNews,
  FeaturedScientist,
  NotesToLeadersSection,
  UpcomingSpeakers,
  Newsletter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Latest News */}
      <LatestNews />

      {/* Featured Scientist */}
      <FeaturedScientist />

      {/* Notes to Leaders */}
      <NotesToLeadersSection />

      {/* Upcoming Speakers */}
      <UpcomingSpeakers />

      {/* Newsletter Signup */}
      <Newsletter />
    </>
  );
}
