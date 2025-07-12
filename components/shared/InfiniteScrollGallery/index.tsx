"use client";

import { motion } from "framer-motion";

const images1 = [
  "/placeholder.svg?height=300&width=250",
  "/placeholder.svg?height=400&width=250",
  "/placeholder.svg?height=350&width=250",
  "/placeholder.svg?height=320&width=250",
  "/placeholder.svg?height=380&width=250",
  "/placeholder.svg?height=300&width=250",
];

const images2 = [
  "/placeholder.svg?height=360&width=250",
  "/placeholder.svg?height=320&width=250",
  "/placeholder.svg?height=400&width=250",
  "/placeholder.svg?height=280&width=250",
  "/placeholder.svg?height=350&width=250",
  "/placeholder.svg?height=330&width=250",
];

export default function InfiniteScrollGallery() {
  // Calculate total height of each column for seamless looping
  const column1Height = images1.length * 450; // Approximate height per image including gap
  const column2Height = (images2.length - 1) * 450;

  return (
    <div className="h-full flex gap-4 md:gap-6 lg:gap-8 justify-center max-w-6xl mx-auto">
      {/* First Column */}
      <div className="flex-1 max-w-xs relative h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 800, x: 800 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col gap-4"
            animate={{
              y: [-column1Height, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* First set of images */}
            {images1.map((src, index) => (
              <motion.div
                key={`first-${index}`}
                className="w-full h-[450px] relative overflow-hidden rounded-lg shadow-lg bg-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            ))}

            {images1.map((src, index) => (
              <motion.div
                key={`first-${index}`}
                className="w-full h-[450px] relative overflow-hidden rounded-lg shadow-lg bg-primary/80"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Second Column - Offset Animation */}

      <motion.div
        initial={{ opacity: 0, y: 400, x: 400 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex-1 max-w-xs relative h-full overflow-hidden"
      >
        <motion.div
          className="flex flex-col gap-4"
          animate={{
            y: [-column2Height, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* First set of images */}
          {images1.map((src, index) => (
            <motion.div
              key={`first-${index}`}
              className="w-full h-[450px] relative overflow-hidden rounded-lg shadow-lg bg-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          ))}

          {images1.map((src, index) => (
            <motion.div
              key={`first-${index}`}
              className="w-full h-[450px] relative overflow-hidden rounded-lg shadow-lg bg-primary/80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
