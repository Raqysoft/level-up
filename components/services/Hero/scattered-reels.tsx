import ReelCard from "@/components/shared/ReelCard";
import { BadgeCheck, Gauge, TrendingUp } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function ScatteredReels() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: 0.4 }}
      className="group relative max-w-lg mx-auto h-[550px] rounded-2xl bg-zinc-800"
    >
      {/* Fast Turnaround */}
      <div
        className="absolute z-10 text-lg flex-center gap-2 py-2 px-4 bg-[#D8FF1E] w-fit rounded-full text-background duration-300
        rotate-0 left-1/2 -translate-x-1/2 top-12
        md:rotate-[-12deg] md:left-[100%] md:top-4 
        md:group-hover:rotate-0 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2 md:group-hover:top-12"
      >
        <Gauge size={24} />
        <span className="font-clash-display text-nowrap">Fast Turnaround</span>
      </div>

      {/* Viral-Ready */}
      <div
        className="absolute text-lg flex-center gap-2 py-2 px-4 bg-primary w-fit rounded-full text-foreground duration-300
        left-1/2 -translate-x-1/2 top-0
        md:left-36 md:translate-x-0 md:-top-8 md:rotate-6 
        md:group-hover:left-1/2 md:group-hover:-translate-x-1/2 md:group-hover:top-0 md:group-hover:rotate-0"
      >
        <TrendingUp size={24} />
        <span className="font-clash-display text-nowrap">Viral-Ready</span>
      </div>

      {/* Trend-Driven */}
      <div
        className="absolute text-lg flex-center gap-2 py-2 px-4 bg-foreground w-fit rounded-full text-background duration-300
        rotate-0 left-1/2 -translate-x-1/2 -top-12
        md:rotate-12 md:-left-14 md:top-12
        md:group-hover:rotate-0 md:group-hover:left-1/2 md:group-hover:-translate-x-1/2 md:group-hover:-top-12"
      >
        <BadgeCheck size={24} />
        <span className="font-clash-display text-nowrap">Trend-Driven</span>
      </div>

      {/* Card Background Layers */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[70%] h-5/6">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[70%] h-[99%] rounded-lg bg-zinc-500"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[85%] h-[97%] rounded-lg bg-zinc-600"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[100%] h-[94%] rounded-lg bg-zinc-700"></div>
      </div>

      {/* ReelCard Left */}
      <ReelCard
        speaker={5}
        className="absolute w-[270px] h-[400px] border-4 border-white hover:scale-95 duration-300
        bottom-4 left-1/2 -translate-x-1/2 rotate-0 origin-bottom-left
        md:left-40 md:bottom-[-3rem] md:-rotate-[32deg]
        md:group-hover:left-1/2 md:group-hover:-translate-x-1/2 md:group-hover:rotate-0 md:group-hover:bottom-4 md:group-hover:origin-bottom hover:-translate-y-8"
      />

      {/* ReelCard Center */}
      <ReelCard
        speaker={3}
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[270px] h-[400px] border-4 border-white hover:scale-95 hover:-translate-y-4"
      />

      {/* ReelCard Right */}
      <ReelCard
        speaker={8}
        className="absolute w-[270px] h-[400px] border-4 border-white hover:scale-95
        bottom-[-1.5rem] left-1/2 -translate-x-1/2 rotate-0 origin-bottom-right
        md:-right-44 md:left-auto md:rotate-[20deg]
        md:group-hover:left-1/2 md:group-hover:-translate-x-1/2 md:group-hover:rotate-0 md:group-hover:-bottom-6 md:group-hover:origin-bottom hover:-translate-y-6"
      />
    </motion.div>
  );
}

export default ScatteredReels;
