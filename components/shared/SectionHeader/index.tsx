"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionHeader({
  h2,
  p,
  className,
}: {
  h2: string;
  p: string;
  className?: string;
}) {
  return (
    <div className="relative w-fit mx-auto">
      <div className="absolute w-full h-full blur-3xl bg-background top-0"></div>
      <hgroup className={cn("relative text-center space-y-2", className)}>
        <motion.h2
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-light capitalize text-2xl text-foreground/80 flex-center gap-2 sm:gap-3"
        >
          <span>//</span>
          {h2.split(" ").map((w, ix) => (
            <span key={ix}>{w}</span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="font-clash-display flex-center gap-2 sm:gap-3 text-4xl md:text-5xl lg:text-7xl flex-center text-zinc-500 capitalize"
        >
          <span className="text-secondary/90">{p.split(" ").at(0)}</span>
          {p.split(" ").map((w, ix) => (ix ? <span key={ix}>{w}</span> : null))}
        </motion.p>
      </hgroup>
    </div>
  );
}

export default SectionHeader;
