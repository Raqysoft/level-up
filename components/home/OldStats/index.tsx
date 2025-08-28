"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";
import Image from "next/image";
import { REELS } from "@/constants/reels";

function Stats() {
  const [isMount, setIsMount] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const cardsLeft = [1, 2, 3];
  const cardsRight = [1, 5, 3];

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      // Trigger when the bottom of the viewport reaches 60% of the section
      if (scrollPosition - 50 > sectionTop + sectionHeight * 0.4) {
        setIsMount(true);
        window.removeEventListener("scroll", handleScroll); // only once
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container relative z-10 py-28"
      ref={sectionRef}
    >
      <motion.div
        layout
        className="rounded-3xl bg-foreground flex flex-col justify-center gap-16 overflow-hidden py-12 px-4"
      >
        {/* Images */}
        <motion.div layout className="flex-1 flex-center gap-4">
          {cardsLeft.map((i, ix) => (
            <motion.div
              layout
              key={`left-${i}-${ix}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.2 + 0.2 * ix,
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <ReelCard
                speaker={i}
                reel={REELS[i % REELS.length]}
                className="h-[300px] min-w-48 bg-primary/50"
              />
            </motion.div>
          ))}

          <AnimatePresence>
            {isMount && (
              <motion.div
                key="center-highlight"
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 60 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="group relative mx-4"
              >
                <div className="absolute-center bg-primary/40 w-[110%] h-[85%] group-hover:size-[90%] rounded-xl group-hover:rounded-3xl duration-300"></div>
                <ReelCard
                  speaker={4}
                  reel={REELS[4 % REELS.length]}
                  className="h-[450px] min-w-72 sm:min-w-80 bg-primary/50 rounded-3xl shadow-primary border-2 border-white hover:scale-100"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {cardsRight.map((i, ix) => (
            <motion.div
              layout
              key={`right-${i}-${ix}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.8 - 0.2 * ix,
                duration: 0.5,
                ease: "backOut",
              }}
            >
              <ReelCard
                speaker={i}
                reel={REELS[i % REELS.length]}
                className="h-[300px] min-w-48 bg-primary/50"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <div className="flex-center text-background flex-wrap gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/svgs/engagement.svg"
              alt="engagement"
              width={40}
              height={40}
              className="absolute -bottom-4 -right-6"
            />
            <span className="text-5xl font-clash-display font-bold">+230%</span>
            <p className="text-lg font-light">Engagement lift</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/svgs/views.svg"
              alt="engagement"
              width={40}
              height={40}
              className="absolute -top-0 right-4"
            />
            <span className="text-5xl font-clash-display font-bold">7.2M</span>
            <p className="text-lg font-light">Total Views Generated</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <Image
              src="/svgs/curved-path.svg"
              alt="engagement"
              width={40}
              height={40}
              className="absolute bottom-4 left-24"
            />
            <span className="text-5xl font-clash-display font-bold">60+</span>
            <p className="text-lg font-light">Brands & Creators Served</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Stats;
