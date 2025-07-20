"use client";
import React from "react";
import { motion } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";
import Image from "next/image";
import { Play } from "lucide-react";

const SLIDER_ITEMS = 8;
function Hero() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, rotate: -6 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="w-[120%] h-[200px] bg-primary/80 blur-[90px] absolute bottom-[350px] left-1/2 -translate-x-1/2 -rotate-12"
      ></motion.div>
      <Image
        src={"/images/vector-map.png"}
        alt="vector-map"
        width={800}
        height={800}
        className="absolute top-1/2 -translate-y-1/2 right-0 mix-blend-overlay"
      />
      <section className="relative">
        <div className="relative z-10 min-h-screen max-w-5xl mx-auto px-12">
          <hgroup className="text-center pt-52 pb-32">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-64"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-light md:text-lg max-w-xl mx-auto opacity-60"
            >
              We create high-converting, scroll-stopping Reels that get your
              brand seen, shared, and remembered.
            </motion.p>
          </hgroup>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.4 }}
            className="relative mx-auto rounded-2xl bg-secondary h-80 md:h-[400px] lg:h-[500px] overflow-hidden border-4 border-secondary/20"
          >
            <Image
              src="/images/contact-cover.jpg"
              alt="contact"
              className="object-cover"
              fill
              priority
            />
            <div className="absolute-center size-20 backdrop-blur-xs border-4 bg-white/20 flex-center rounded-full cursor-pointer duration-300 hover:scale-95">
              <Play size={32} />
            </div>
          </motion.div>
        </div>
        <div className="absolute bg-foreground w-full h-[25%] bottom-0 left-0"></div>
      </section>
    </div>
  );
}

export default Hero;
