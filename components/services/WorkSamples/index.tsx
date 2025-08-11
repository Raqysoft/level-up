"use client";
import ReelCard from "@/components/shared/ReelCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IGoogleDriveVideo } from "@/types/google-drive";

const ReelsCols = ({ videos }: { videos: IGoogleDriveVideo[] }) => (
  <div className="space-y-4">
    {videos.map((video, ix) => (
      <motion.div
        key={video.id}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ReelCard speaker={ix + 1} reel={video} className="hover:scale-95" />
      </motion.div>
    ))}
  </div>
);

function WorkSamples({ videos }: { videos: IGoogleDriveVideo[] }) {
  // Split videos into three columns
  const colSize = Math.ceil(videos.length / 3);
  const col1 = videos.slice(0, colSize);
  const col2 = videos.slice(colSize, colSize * 2);
  const col3 = videos.slice(colSize * 2);

  return (
    <section className="py-12 md:py-20 flex flex-col gap-20 container">
      <SectionHeader h2="Portfolio" p="Work samples" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 w-full max-w-5xl mx-auto">
        <ReelsCols videos={col1} />
        <div className="lg:pt-20">
          <ReelsCols videos={col2} />
        </div>
        <ReelsCols videos={col3} />
      </div>
      <Link href={"/portfolio"} className="mx-auto mt-4">
        <Button size={"lg"} className="w-44 h-12">
          View all
        </Button>
      </Link>
    </section>
  );
}

export default WorkSamples;
