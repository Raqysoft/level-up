"use client";
import React from "react";
import { motion } from "framer-motion";

function BodyLines({ cols }: { cols: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute size-full inset-0 grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {[...Array(cols)].map((_, i) => (
        <div key={i} className="border-r border-white/10 last:border-0" />
      ))}
    </motion.div>
  );
}

export default BodyLines;
