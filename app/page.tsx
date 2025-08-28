import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import { REELS } from "@/constants/reels";
import { fetchCloudinaryVideos } from "@/lib/fetch-cloudinary-videos";
import { fetchAllVideos } from "@/lib/fetch-drive-videos";
import React from "react";

async function Home() {
  // const videos = await fetchAllVideos();
  // const videos = await fetchCloudinaryVideos();
  return (
    <div className="overflow-x-hidden">
      <Hero videos={REELS} />
      <Stats videos={REELS} />
      <Services />
      <Work videos={REELS.sort(() => Math.random() - 0.5).slice(0, 8)} />
      <Process />
      <Testimonials videos={REELS} />
    </div>
  );
}

export default Home;
