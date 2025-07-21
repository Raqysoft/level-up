"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReelCard from "../ReelCard";

const images1 = [4, 2, 5, 1, 6, 3];
const images2 = [5, 6, 3, 2, 1, 4];

export default function InfiniteScrollGallery({
  inverseScale = false,
}: {
  inverseScale?: boolean;
}) {
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
            {[...images1, ...images1].map((item, ix) => (
              <ReelCard
                className={inverseScale ? "hover:scale-95" : ""}
                speaker={item}
                key={ix}
              />
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
          {[...images2, ...images2].map((item, ix) => (
            <ReelCard
              className={inverseScale ? "hover:scale-95" : ""}
              speaker={item}
              key={ix}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
