"use client";
import ReelCard from "@/components/shared/ReelCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ReelsCols = ({ reels }: { reels: number[] }) => (
  <div className="space-y-4">
    {reels.map((r, ix) => (
      <motion.div
        key={ix}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ReelCard speaker={r} className="hover:scale-95" />
      </motion.div>
    ))}
  </div>
);

function WorkSamples() {
  return (
    <section className="py-12 md:py-20 flex flex-col gap-20 container">
      <SectionHeader h2="Portfolio" p="Work samples" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 w-full max-w-5xl mx-auto">
        <ReelsCols reels={[2, 6, 3, 1, 5]} />
        <div className="lg:pt-20">
          <ReelsCols reels={[6, 1, 5, 2, 3]} />
        </div>
        <ReelsCols reels={[3, 5, 2, 6, 1]} />
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
