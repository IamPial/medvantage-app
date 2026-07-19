import FeaturedSection from "@/components/homepage/FeaturedSection";
import HeroSection from "@/components/homepage/HeroSection";
import StatisticsSection from "@/components/homepage/StatisticsSection";
import TestimonialsSection from "@/components/homepage/TestimonialSection";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";
import WorkflowSection from "@/components/homepage/WorkFlowSection";

export default function Home() {
  return (
    <div className="bg-zinc-50/50 min-h-screen">
      <HeroSection />
      <StatisticsSection />
      <FeaturedSection />
      <WhyChooseSection />
      <WorkflowSection />
      <TestimonialsSection />
    </div>
  );
}

