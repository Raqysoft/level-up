import Hero from "@/components/home/Hero";
import React from "react";

async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="h-[500vh]">
      <Hero />
    </div>
  );
}

export default Home;
