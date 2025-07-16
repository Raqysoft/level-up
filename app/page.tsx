import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Work from "@/components/home/Work";
import React from "react";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Process />
      <Testimonials />
    </div>
  );
}

export default Home;
