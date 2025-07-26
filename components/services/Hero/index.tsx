"use client";
import React from "react";
import { motion } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";
import Image from "next/image";

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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-light md:text-lg max-w-xl mx-auto opacity-60"
          >
            Transform your social media presence with our expert Reels creation
            service. We specialize in crafting engaging, professional content
            that elevates your brand and connects with your audience.
          </motion.p>
        </hgroup>
      </section>
    </div>
  );
}

export default Hero;
