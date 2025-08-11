import React from "react";
import ReelCard from "../ReelCard";
import { motion } from "framer-motion";
import { IGoogleDriveVideo } from "@/types/google-drive";

interface IColData {
  videos: IGoogleDriveVideo[];
  delay?: number;
}

function ReelsFootage({ videos = [] }: { videos?: IGoogleDriveVideo[] }) {
  // Ensure we have enough videos by repeating the array if necessary
  const extendedVideos = [...videos, ...videos].slice(0, 15);
  
  return (
    <div className="min-h-[140vh] grid grid-cols-10 grid-rows-1 gap-3">
      {/* Left */}
      <FirstCol videos={[extendedVideos[0], extendedVideos[1]]} delay={0} />
      <SecondCol videos={[extendedVideos[2], extendedVideos[3]]} delay={0.1} />
      <ThirdCol videos={[extendedVideos[4]]} delay={0.2} />
      <FourthCol videos={[extendedVideos[5]]} delay={0.3} />
      <FifthCol videos={[extendedVideos[6]]} delay={0.4} />
      {/* Right */}
      <FifthCol videos={[extendedVideos[7]]} delay={0.5} />
      <FourthCol videos={[extendedVideos[8]]} delay={0.6} />
      <ThirdCol videos={[extendedVideos[9]]} delay={0.7} />
      <SecondCol videos={[extendedVideos[10], extendedVideos[11]]} delay={0.8} />
      <FirstCol videos={[extendedVideos[12], extendedVideos[13]]} delay={0.9} />
    </div>
  );
}

const FirstCol = ({ videos, delay = 0 }: IColData) => {
  return (
    <div className="grid grid-rows-10 gap-3">
      <div className="row-span-4"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[1]} className="w-full h-full min-h-60" />
      </motion.div>
    </div>
  );
};

const SecondCol = ({ videos, delay = 0 }: IColData) => {
  return (
    <div className="grid grid-rows-10 gap-3">
      <div className="row-span-3"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[1]} className="w-full h-full min-h-60" />
      </motion.div>
      <div />
    </div>
  );
};

const ThirdCol = ({ videos, delay = 0 }: IColData) => {
  return (
    <div className="grid grid-rows-10 gap-3">
      <div className="row-span-4"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-3"></div>
    </div>
  );
};

const FourthCol = ({ videos, delay = 0 }: IColData) => {
  return (
    <div className="grid grid-rows-10 gap-3">
      <div className="row-span-3"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-4"></div>
    </div>
  );
};

const FifthCol = ({ videos, delay = 0 }: IColData) => {
  return (
    <div className="h-full grid grid-rows-10 gap-3">
      <div className="row-span-4"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard reel={videos[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-3"></div>
    </div>
  );
};

export default ReelsFootage;
