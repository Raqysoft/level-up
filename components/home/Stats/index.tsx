"use client";
import React from "react";
import { motion } from "framer-motion";

function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-600px" }}
      className="container relative z-10 py-28"
    >
      <div className="rounded-3xl bg-white min-h-[70vh]"></div>
    </motion.div>
  );
}

export default Stats;
