import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import React from "react";

async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Home;
