import Header from "@/components/Header";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import SubNav from "@/components/SubNav";
import EntryBand from "@/components/EntryBand";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import EvpSection from "@/sections/EvpSection";
import OnboardingSection from "@/sections/OnboardingSection";
import GrowthSection from "@/sections/GrowthSection";
import VideoSection from "@/sections/VideoSection";
import NumbersSection from "@/sections/NumbersSection";
import JobsSection from "@/sections/JobsSection";
import FaqSection from "@/sections/FaqSection";
import FlowSection from "@/sections/FlowSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <HeroSection />
        <SubNav />
        <EvpSection />
        <OnboardingSection />
        <GrowthSection />
        <VideoSection />
        <NumbersSection />
        <JobsSection />
        <FaqSection />
        <FlowSection />
        <EntryBand />
      </main>
      <Footer />
      <StickyApplyCTA />
    </>
  );
}
