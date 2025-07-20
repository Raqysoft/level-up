"use client";
import React from "react";
import { motion } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";
import Image from "next/image";

const SLIDER_ITEMS = 8;
function Hero() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, rotate: -6 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="w-[120%] h-[200px] bg-primary/90 blur-[90px] absolute bottom-[320px] left-1/2 -translate-x-1/2 -rotate-12"
      ></motion.div>
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="skew-y-[6deg] skew-x-6 pb-40">
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
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
