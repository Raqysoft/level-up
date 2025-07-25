"use client";

import type * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveVertical } from "lucide-react";

export interface StickyTextRevealProps {
  text: string;
  title?: string;
  subtitle?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-3 text-4xl md:text-6xl lg:text-7xl font-semibold">
      <span className="absolute opacity-20 text-foreground/50">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <div className={`absolute text-foreground/90 ${className}`}>
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      animate={{
        rotate: 360,
        y: [-10, 10, -10],
        scale: [
          0.7 + Math.random() * 0.4,
          1 + Math.random() * 0.3,
          0.6 + Math.random() * 0.3,
          1,
        ],
      }}
      transition={{
        duration: Math.random() * 2 + 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <path d="M8 0l2.5 5.5L16 8l-5.5 2.5L8 16l-2.5-5.5L0 8l5.5-2.5L8 0z" />
    </motion.svg>
  </div>
);

const StickyTextReveal: React.FC<StickyTextRevealProps> = ({
  text,
  title = "Reels Production",
  subtitle = "Scroll for more",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the sticky section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Track scroll progress for text reveal
  const { scrollYProgress: textProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "center start"],
  });

  const words = text.split(" ");

  return (
    <section ref={sectionRef} className="relative">
      {/* The sticky container - stays in document flow */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700" />

        {/* Decorative stars */}
        <StarIcon className="top-16 left-16" />
        <StarIcon className="top-32 right-24" />
        <StarIcon className="top-48 left-1/3" />
        <StarIcon className="bottom-32 right-16" />
        <StarIcon className="bottom-48 left-24" />
        <StarIcon className="top-1/3 right-1/3" />
        <StarIcon className="bottom-1/3 left-1/2" />

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 h-full flex flex-col items-center justify-center max-w-6xl mx-auto px-8 text-center"
        >
          {/* Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-foreground/60 text-xl font-medium tracking-wide">
              {title}
            </p>
          </motion.div>

          {/* Animated text */}
          <motion.h2
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <p className="flex flex-wrap justify-center leading-tight">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;

                return (
                  <Word key={i} progress={textProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </motion.h2>

          {/* Scroll indicator */}
          <motion.div
            style={{
              opacity: useTransform(textProgress, [0.9, 1], [1, 0]),
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center space-y-4"
          >
            <p className="text-foreground/60 text-lg font-medium tracking-wide">
              {subtitle}
            </p>
            <div className="w-7 h-10 border-2 border-foreground/50 rounded-full pt-1.5 flex items-start justify-center">
              <motion.div
                animate={{
                  y: [0, 2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MoveVertical className="size-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spacer to create scroll distance for the sticky effect */}
      <div className="h-screen" />
    </section>
  );
};

export default StickyTextReveal;
