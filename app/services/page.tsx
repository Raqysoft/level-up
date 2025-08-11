import DifferenceSection from "@/components/services/DifferenceSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesTimeline from "@/components/services/ServicesTimeline";
import WorkSamples from "@/components/services/WorkSamples";
import FaqAccordion from "@/components/services/Faqs";
import StickyTextReveal from "@/components/shared/StickyTextReveal";
import Hero from "@/components/services/Hero";
import UseCases from "@/components/services/UseCases";
import { fetchAllVideos } from "@/lib/fetch-drive-videos";

async function Services() {
  const allVideos = await fetchAllVideos();
  const sampleVideos = allVideos.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div>
      <Hero featuredReels={sampleVideos.slice(0, 3)} />
      <ServicesGrid />
      <DifferenceSection
        selectedReel={
          sampleVideos[Math.floor(Math.random() * sampleVideos.length)]
        }
      />
      <StickyTextReveal
        title="Reels Production"
        text="Your brand deserves content that's fast, bold, and made to perform"
        subtitle="Keep scrolling to reveal"
      />
      <ServicesTimeline />
      <UseCases />
      <WorkSamples videos={sampleVideos} />
      <FaqAccordion />
    </div>
  );
}

export default Services;
