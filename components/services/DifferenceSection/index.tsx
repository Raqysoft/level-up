import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import { ReelComparision } from "./reel-comparision";
import { IGoogleDriveVideo } from "@/types/google-drive";

function DifferenceSection({
  selectedReel,
}: {
  selectedReel: IGoogleDriveVideo;
}) {
  return (
    <section className="pt-20 pb-24">
      <div className="mx-auto max-w-xl">
        <SectionHeader h2="What's Included" p="See the Difference" />
        <ReelComparision selectedReel={selectedReel} />
      </div>
    </section>
  );
}

export default DifferenceSection;
