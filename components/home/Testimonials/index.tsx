"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard } from "./testimonial-card";

function Testimonials() {
  // Calculate total width for seamless looping
  const sliderWidth = TESTIMONIALS.length * 450; // Approximate width per card including margin

  return (
    <section className="bg-foreground py-20 relative overflow-hidden">
      <div className="absolute inset-0 size-full grid grid-cols-4">
        <div className="border-background/15 border-r"></div>
        <div className="border-background/15 border-r"></div>
        <div className="border-background/15 border-r"></div>
      </div>

      <div className="relative z-10">
        <SectionHeader h2="our work" p="Success Stories" light />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-lg max-w-xl mx-auto mt-4 mb-12 text-background/80"
        >
          Clients don't just love us because we save them time. It's because we
          also get them results.
        </motion.p>

        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <motion.div
              className="flex"
              animate={{
                x: [-sliderWidth / 2, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {/* Double the testimonials for seamless looping */}
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
