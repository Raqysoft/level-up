"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "@/constants/process";

const steps = [
  {
    id: "01",
    title: "Step title",
    description:
      "Send us your clips, voice notes, or ideas raw or rough is fine.",
  },
  {
    id: "02",
    title: "Step title",
    description:
      "Receive polished Reels ready to publish fast, on-brand, and made to perform.",
  },
  {
    id: "03",
    title: "Step title",
    description:
      "Send us your clips, voice notes, or ideas raw or rough is fine.",
  },
  {
    id: "04",
    title: "Step title",
    description:
      "Receive polished Reels ready to publish fast, on-brand, and made to perform.",
  },
  {
    id: "05",
    title: "Step title",
    description:
      "Send us your clips, voice notes, or ideas raw or rough is fine.",
  },
];

function TimelineStep({
  step,
  index,
  scrollProgress,
}: {
  step: (typeof steps)[0];
  index: number;
  scrollProgress: any;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  const stepThreshold = index / (steps.length - 1);
  const isStepActive = useTransform(
    scrollProgress,
    [Math.max(0, stepThreshold - 0.1), stepThreshold],
    [0, 1]
  );

  return (
    <div
      ref={ref}
      className="relative flex items-start justify-center min-h-[10rem] sm:min-h-[12rem] md:min-h-[14rem]"
    >
      {/* Step badge */}
      <motion.div
        className="relative z-20 w-12 h-12 border-2 rounded-lg flex items-center justify-center font-medium transition-all duration-300 font-clash-display"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{
          backgroundColor: useTransform(
            isStepActive,
            [0, 1],
            ["rgb(17, 24, 39)", "rgb(132, 204, 22)"]
          ),
          borderColor: useTransform(
            isStepActive,
            [0, 1],
            ["rgb(75, 85, 99)", "rgb(132, 204, 22)"]
          ),
          color: useTransform(
            isStepActive,
            [0, 1],
            ["rgb(156, 163, 175)", "rgb(0, 0, 0)"]
          ),
          scale: useTransform(isStepActive, [0, 1], [1, 1.1]),
        }}
      >
        {step.id}
      </motion.div>

      {/* Step content */}
      <motion.div
        className={`absolute w-[90%] max-w-sm sm:max-w-md md:w-80
          ${isEven ? "md:-left-20 md:text-right" : "md:-right-20 md:text-left"}
          top-14 md:top-auto
          text-left
        `}
        initial={{
          opacity: 0,
          x: isEven ? 50 : -50,
          y: 20,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {
                opacity: 0,
                x: isEven ? 50 : -50,
                y: 20,
              }
        }
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        style={{
          opacity: useTransform(isStepActive, [0, 1], [0.6, 1]),
        }}
      >
        <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function ServicesTimeline() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.3", "end 0.7"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="py-32 md:py-52">
      <div className="max-w-4xl mx-auto px-4">
        <div ref={containerRef} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5">
            <div className="absolute inset-0 bg-gray-700/50" />
            <motion.div
              ref={pathRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-lime-400 to-lime-500 shadow-lg"
              style={{
                height: pathLength,
                boxShadow: "0 0 20px rgba(132, 204, 22, 0.3)",
              }}
            />
            <motion.div
              className="absolute w-8 h-8 bg-lime-400/20 rounded-full -left-3.5 border border-lime-400/30"
              style={{
                top: useTransform(
                  pathLength,
                  (value) => `calc(${value} - 1rem)`
                ),
                scale: useTransform(
                  scrollYProgress,
                  [0, 0.05, 0.95, 1],
                  [0, 1, 1, 0]
                ),
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Timeline steps */}
          <div className="flex flex-col justify-between relative z-10 min-h-[1000px] sm:min-h-[1200px] md:min-h-[1400px]">
            {PROCESS.map((step, index) => (
              <TimelineStep
                key={index}
                step={{ ...step, id: `${index}` }}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
