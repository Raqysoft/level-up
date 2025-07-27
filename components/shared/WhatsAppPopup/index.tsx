"use client";
import React from "react";
import { motion } from "framer-motion";

function WhatsAppPopup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed z-50 bottom-6 left-6 size-14 bg-green-500 border border-green-300 rounded-2xl"
    ></motion.div>
  );
}

export default WhatsAppPopup;
