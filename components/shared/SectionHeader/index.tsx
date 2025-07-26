"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SectionHeader({
  h2,
  p,
  className,
  light = false,
}: {
  h2: string;
  p: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <div className="relative w-fit mx-auto">
      <div
        className={cn(
          "absolute w-full h-full blur-3xl top-0",
          light ? "bg-foreground" : "bg-background"
        )}
      ></div>
      <hgroup className={cn("relative text-center space-y-2", className)}>
        <motion.h2
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className={cn(
            "capitalize text-2xl flex-center flex-wrap gap-2 sm:gap-3",
            light ? "text-background/80" : "text-foreground/80 font-light"
          )}
        >
          <span>//</span>
          {h2.split(" ").map((w, ix) => (
            <span key={ix}>{w}</span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "font-clash-display flex-center flex-wrap gap-2 sm:gap-3 text-4xl md:text-5xl lg:text-7xl flex-center capitalize",
            light ? "text-background/40 font-medium" : "text-foreground/40"
          )}
        >
          <span
            className={cn(light ? "text-background/90" : "text-secondary/90")}
          >
            {p.split(" ").at(0)}
          </span>
          {p.split(" ").map((w, ix) => (ix ? <span key={ix}>{w}</span> : null))}
        </motion.p>
      </hgroup>
    </div>
  );
}

export default SectionHeader;
