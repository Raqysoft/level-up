"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import React, { useState } from "react";
import ProcessCard from "./process-card";
import { PROCESS } from "@/constants/process";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const rotationStyling = [
  "sm:rotate-[-6deg] sm:translate-x-12",
  "sm:rotate-[6deg] sm:translate-y-4",
  "sm:rotate-[-10deg] sm:translate-x-14 sm:-translate-y-2",
  "sm:rotate-[9deg] sm:-translate-x-12 sm:translate-y-4",
];

function Process() {
  const [hoveredIx, setHoverIx] = useState<null | number>(null);
  return (
    <div className="pt-28 pb-32">
      <div className="container space-y-12 md:space-y-20">
        <SectionHeader h2="our process" p="our process" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {PROCESS.map((ele, ix) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: ix * 0.2, duration: 0.2 }}
              key={ix}
              onMouseEnter={() => setHoverIx(ix)}
              onMouseLeave={() => setHoverIx(null)}
              className={cn(
                "origin-bottom duration-300 ",
                hoveredIx === ix || hoveredIx === null
                  ? "z-20 opacity-100"
                  : "!opacity-25 translate-0 scale-90",
                rotationStyling[ix],
                "hover:rotate-0 hover:translate-0"
              )}
            >
              <ProcessCard {...ele} ix={ix} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
