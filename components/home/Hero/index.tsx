"use client";
import InfiniteScrollGallery from "@/components/shared/InfiniteScrollGallery";
import { VerticalCutReveal } from "@/components/shared/VerticalCutReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { PARTNERS } from "@/constants/partners";
import Link from "next/link";
import { IGoogleDriveVideo } from "@/types/google-drive";

function HomeHero({ videos = [] }: { videos?: IGoogleDriveVideo[] }) {
  return (
    <div className="relative min-h-screen">
      <div className="container relative">
        <div className="min-h-screen flex items-center">
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: 40 }}
            animate={{ opacity: 1, rotate: -12, x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute z-10 -top-[450px] -left-[400px] pointer-events-none"
          >
            <Image
              src={"/images/home/hero-gradient.png"}
              alt="hero-bg"
              width={1500}
              height={1500}
              className="pointer-events-none"
            />
          </motion.div>
          <div className="w-full lg:w-1/2 space-y-8 mt-12 z-10">
            <hgroup className="space-y-2">
              <h1 className="text-64 leading-20 font-medium tracking-wide">
                {["Your Brand", "Deserves Reels", "That Wins"].map(
                  (ele, ix) => (
                    <VerticalCutReveal
                      key={ix}
                      splitBy="characters"
                      staggerDuration={0.025}
                      staggerFrom={ix % 2 ? "first" : "last"}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 21,
                        delay: 0.3 * ix,
                      }}
                    >
                      {ele}
                    </VerticalCutReveal>
                  )
                )}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="text-lg font-clash-display font-light"
              >
                We create high-converting, scroll-stopping Reels that get your
                brand seen, shared, and remembered.
              </motion.p>
            </hgroup>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              <Link href={"/contact"}>
                <Button
                  dir="rtl"
                  size={"xl"}
                  icon={<ArrowRight className="size-6" />}
                >
                  Let's talk
                </Button>
              </Link>
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.3 }}
                className="text-lg font-light mb-2 opacity-90 font-clash-display"
              >
                Trusted by brands like
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="flex flex-wrap items-center gap-8"
              >
                {PARTNERS.map((ele, i) => (
                  <Image
                    key={i}
                    src={`/images/home/logos/${ele}.svg`}
                    alt={ele}
                    width={100}
                    height={100}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div
            className="absolute w-full md:w-1/2 h-[150%] -rotate-[20deg] -right-72 md:-right-40 -top-40
         [mask-image:linear-gradient(to_bottom,black_50%,transparent_80%),linear-gradient(to_top,black_70%,transparent_100%)]
         [mask-composite:intersect]"
          >
            <InfiniteScrollGallery videos={videos} inverseScale />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
