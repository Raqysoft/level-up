"use client";
import React from "react";
import { motion } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";

const SLIDER_ITEMS = 8;
function Hero() {
  return (
    <section className="relative min-h-screen container">
      <hgroup className="text-center pt-52 pb-36">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-64"
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-light md:text-lg max-w-xl mx-auto opacity-60"
        >
          We create high-converting, scroll-stopping Reels that get your brand
          seen, shared, and remembered.
        </motion.p>
      </hgroup>

      <div className="skew-y-[8deg] skew-x-6 pb-40">
        <motion.div
          animate={{
            x: [(-SLIDER_ITEMS * 150) / 2, 0],
          }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex items-center gap-6"
        >
          {Array(SLIDER_ITEMS * 2)
            .fill(0)
            .map((_, ix) => (
              <div key={ix}>
                <ReelCard
                  className="min-w-64 min-h-64"
                  speaker={Math.ceil(Math.random() * 8)}
                />
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
