import React from "react";
import ReelCard from "../ReelCard";
import { motion } from "framer-motion";

interface IColData {
  speakers: number[];
  delay?: number;
}

function ReelsFootage() {
  return (
    <div className="min-h-[140vh] grid grid-cols-10 grid-rows-1 gap-3">
      {/* Left */}
      <FirstCol speakers={[1, 4]} delay={0} />
      <SecondCol speakers={[6, 7]} delay={0.1} />
      <ThirdCol speakers={[3]} delay={0.2} />
      <FourthCol speakers={[8]} delay={0.3} />
      <FifthCol speakers={[5]} delay={0.4} />
      {/* Right */}
      <FifthCol speakers={[2]} delay={0.5} />
      <FourthCol speakers={[7]} delay={0.6} />
      <ThirdCol speakers={[1]} delay={0.7} />
      <SecondCol speakers={[3, 4]} delay={0.8} />
      <FirstCol speakers={[2, 5]} delay={0.9} />
    </div>
  );
}

const FirstCol = ({ speakers, delay = 0 }: IColData) => {
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
        <ReelCard speaker={speakers[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard speaker={speakers[1]} className="w-full h-full min-h-60" />
      </motion.div>
    </div>
  );
};

const SecondCol = ({ speakers, delay = 0 }: IColData) => {
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
        <ReelCard speaker={speakers[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
        className="rounded-lg bg-zinc-600 row-span-3"
      >
        <ReelCard speaker={speakers[1]} className="w-full h-full min-h-60" />
      </motion.div>
      <div />
    </div>
  );
};

const ThirdCol = ({ speakers, delay = 0 }: IColData) => {
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
        <ReelCard speaker={speakers[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-3"></div>
    </div>
  );
};

const FourthCol = ({ speakers, delay = 0 }: IColData) => {
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
        <ReelCard speaker={speakers[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-4"></div>
    </div>
  );
};

const FifthCol = ({ speakers, delay = 0 }: IColData) => {
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
        <ReelCard speaker={speakers[0]} className="w-full h-full min-h-60" />
      </motion.div>
      <div className="row-span-3"></div>
    </div>
  );
};

export default ReelsFootage;
