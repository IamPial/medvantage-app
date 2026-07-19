import FeaturedSection from "@/components/homepage/FeaturedSection";
import HeroSection from "@/components/homepage/HeroSection";
import StatisticsSection from "@/components/homepage/StatisticsSection";

export default function Home() {
  return (
    <div className="bg-zinc-50/50 min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <FeaturedSection />
    </div>
  );
}

