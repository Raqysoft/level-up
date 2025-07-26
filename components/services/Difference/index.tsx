import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import { ReelComparision } from "./reel-comparision";

function Difference() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl">
        <SectionHeader h2="What's Included" p="See the Difference" />
        <ReelComparision />
      </div>
    </section>
  );
}

export default Difference;
