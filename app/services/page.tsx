import Difference from "@/components/services/Difference";
import { FaqAccordion } from "@/components/services/Faqs";
import ServicesTimeline from "@/components/services/ServicesTimeline";
import WorkSamples from "@/components/services/WorkSamples";
import StickyTextReveal from "@/components/shared/StickyTextReveal";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen bg-zinc-900"></div>
      <div className="h-screen bg-zinc-800"></div>
      <Difference />
      {/* Sticky text reveal section */}
      <StickyTextReveal
        title="Reels Production"
        text="Your brand deserves content that's fast, bold, and made to perform"
        subtitle="Keep scrolling to reveal"
      />
      <ServicesTimeline />
      <div className="h-screen bg-zinc-900"></div>
      <WorkSamples />
      <FaqAccordion />
    </main>
  );
}
