import Hero from "@/components/portfolio/Hero";
import ReelsGrid from "@/components/portfolio/ReelsGrid";
import {
  fetchAllVideos,
  fetchCategorizedVideos,
  fetchFolderVideos,
  fetchGoogleDriveFolders,
} from "@/lib/fetch-drive-videos";
import { IGoogleDriveVideo } from "@/types/google-drive";
import React from "react";

async function Portfolio() {
  const flatVideos = await fetchAllVideos();
  const categorizedVideos = await fetchCategorizedVideos();

  return (
    <div>
      <Hero reels={flatVideos} />
      <ReelsGrid reels={categorizedVideos} />
    </div>
  );
}

export default Portfolio;
