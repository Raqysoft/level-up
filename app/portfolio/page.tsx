import Hero from "@/components/portfolio/Hero";
import ReelsGrid from "@/components/portfolio/ReelsGrid";
import { REELS } from "@/constants/reels";
import React from "react";

async function Portfolio() {
  // const flatVideos = await fetchAllVideos();
  // const flatVideos = await fetchCloudinaryVideos();
  // const categorizedVideos = await fetchCategorizedVideos();

  return (
    <div>
      <Hero reels={REELS} />
      <ReelsGrid reels={REELS} />
    </div>
  );
}

export default Portfolio;
