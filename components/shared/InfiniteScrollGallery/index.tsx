"use client";

import { motion } from "framer-motion";
import ReelCard from "../ReelCard";
import { IGoogleDriveVideo } from "@/types/google-drive";
import { ICloudinaryVid } from "@/lib/fetch-cloudinary-videos";

export default function InfiniteScrollGallery({
  inverseScale = false,
  videos = [],
}: {
  inverseScale?: boolean;
  videos?: ICloudinaryVid[];
}) {
  // Create two arrays of videos for the columns
  const videos1 = videos.slice(0, Math.ceil(videos.length / 2));
  const videos2 = videos.slice(Math.ceil(videos.length / 2));

  // Calculate total height of each column for seamless looping
  const column1Height = videos1.length * 450; // Approximate height per video including gap
  const column2Height = videos2.length * 450;

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
            className="flex flex-col gap-4 w-full"
            animate={{
              y: [-column1Height, 0],
            }}
            transition={{
              duration: 40,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {[...videos1, ...videos1].map((video, ix) => (
              <ReelCard
                className={inverseScale ? "hover:scale-95" : ""}
                reel={video}
                key={`${video.id}-${ix}`}
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
          className="flex flex-col gap-4 w-full"
          animate={{
            y: [-column2Height, 0],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {[...videos2, ...videos2].map((video, ix) => (
            <ReelCard
              className={inverseScale ? "hover:scale-95" : ""}
              reel={video}
              key={`${video.id}-${ix}`}
            />
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
