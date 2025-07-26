import DifferenceSection from "@/components/services/DifferenceSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesTimeline from "@/components/services/ServicesTimeline";
import WorkSamples from "@/components/services/WorkSamples";
import FaqAccordion from "@/components/services/Faqs";
import StickyTextReveal from "@/components/shared/StickyTextReveal";
import Hero from "@/components/services/Hero";
import UseCases from "@/components/services/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <DifferenceSection />
      <StickyTextReveal
        title="Reels Production"
        text="Your brand deserves content that's fast, bold, and made to perform"
        subtitle="Keep scrolling to reveal"
      />
      <ServicesTimeline />
      <UseCases />
      <WorkSamples />
      <FaqAccordion />
    </>
  );
}
