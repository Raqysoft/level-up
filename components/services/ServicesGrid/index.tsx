"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import { SpotlightCard } from "./spotlight-card";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { FEATURES } from "@/constants/features";

function ServicesGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <SectionHeader h2="What's Included" p="What You Get" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-12 pointer-events-none">
          {FEATURES.map((ele, ix) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              key={ix}
            >
              <SpotlightCard
                className={cn(
                  "w-full p-8  pb-12 rounded-none overflow-hidden",
                  ix == 0 && "rounded-t-xl md:rounded-tr-none md:rounded-tl-xl",
                  ix == 1 && "md:rounded-tr-xl lg:rounded-none",
                  ix == 2 && "lg:rounded-tr-xl",
                  ix == 3 && "lg:rounded-bl-xl",
                  ix == 4 && "md:rounded-bl-xl lg:rounded-none",
                  ix == 5 && "rounded-b-xl md:rounded-bl-none md:rounded-br-xl"
                )}
              >
                <div className="mt-auto bg-zinc-800 border border-foreground/30 flex-center size-14 !rounded-lg">
                  <Sparkles />
                </div>
                <hgroup>
                  <h3 className="text-xl md:text-2xl">{ele.title}</h3>
                  <p className="opacity-50 font-light">{ele.description}</p>
                </hgroup>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
