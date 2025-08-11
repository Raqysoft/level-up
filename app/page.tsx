import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import { fetchAllVideos } from "@/lib/fetch-drive-videos";
import React from "react";

async function Home() {
  const videos = await fetchAllVideos();
  return (
    <div className="overflow-x-hidden">
      <Hero videos={videos} />
      <Stats videos={videos} />
      <Services />
      <Work videos={videos.sort(() => Math.random() - 0.5).slice(0, 8)} />
      <Process />
      <Testimonials videos={videos} />
    </div>
  );
}

export default Home;
