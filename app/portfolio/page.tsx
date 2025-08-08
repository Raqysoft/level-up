import Hero from "@/components/portfolio/Hero";
import ReelsGrid from "@/components/portfolio/ReelsGrid";
import { fetchGoogleDriveVideos } from "@/lib/fetch-drive-videos";
import { IGoogleDriveVideo } from "@/types/google-drive";
import React from "react";

async function Portfolio() {
  const videos = await fetchGoogleDriveVideos();

  return (
    <div className="overflow-x-hidden">
      <Hero reels={videos} />
      <ReelsGrid reels={videos} />
    </div>
  );
}

export default Portfolio;
