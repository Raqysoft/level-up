import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import React from "react";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;
