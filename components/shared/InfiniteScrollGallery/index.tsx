"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import PlayBtn from "./play-btn";
import Image from "next/image";

const images1 = [
  "/images/speakers/speaker-4.png",
  "/images/speakers/speaker-2.png",
  "/images/speakers/speaker-5.png",
  "/images/speakers/speaker-1.png",
  "/images/speakers/speaker-6.png",
  "/images/speakers/speaker-3.png",
];

const images2 = [
  "/images/speakers/speaker-5.png",
  "/images/speakers/speaker-6.png",
  "/images/speakers/speaker-3.png",
  "/images/speakers/speaker-2.png",
  "/images/speakers/speaker-1.png",
  "/images/speakers/speaker-4.png",
];

export default function InfiniteScrollGallery() {
  // Calculate total height of each column for seamless looping
  const column1Height = images1.length * 450; // Approximate height per image including gap
  const column2Height = (images2.length - 1) * 450;

  return (
    <div className="h-full flex gap-4 md:gap-6 justify-center max-w-6xl mx-auto">
      {/* First Column */}
      <div className="flex-1 min-w-16 relative h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 400, x: 400 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col gap-4 "
            animate={{
              y: [-column1Height, 0],
            }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* First set of images */}
            {images1.map((src, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-center w-full h-[450px] relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50 "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`speaker-${index + 1}`}
                  className="object-cover"
                  fill
                  priority
                />
                <PlayBtn />
              </motion.div>
            ))}

            {images1.map((src, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-center w-full h-[450px] relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`speaker-${index + 1}`}
                  className="object-cover"
                  fill
                  priority
                />
                <PlayBtn />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Second Column - Offset Animation */}

      <motion.div
        initial={{ opacity: 0, y: 200, x: 100 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex-1 min-w-16 relative h-full overflow-hidden"
      >
        <motion.div
          className="flex flex-col gap-4"
          animate={{
            y: [-column2Height, 0],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* First set of images */}
          {images1.map((src, index) => (
            <motion.div
              key={`first-${index}`}
              className="w-full h-[450px] flex-center relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`speaker-${index + 1}`}
                className="object-cover"
                fill
                priority
              />
              <PlayBtn />
            </motion.div>
          ))}

          {images1.map((src, index) => (
            <motion.div
              key={`first-${index}`}
              className="w-full h-[450px] flex-center relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`speaker-${index + 1}`}
                className="object-cover"
                fill
                priority
              />
              <PlayBtn />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
