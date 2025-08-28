import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import { ReelComparision } from "./reel-comparision";
import { IGoogleDriveVideo } from "@/types/google-drive";
import { ICloudinaryVid } from "@/lib/fetch-cloudinary-videos";

function DifferenceSection({
  selectedReel,
}: {
  selectedReel: ICloudinaryVid;
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
