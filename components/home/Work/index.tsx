"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ReusableSlider from "@/components/shared/ReusableSlider";
import { SwiperSlide } from "swiper/react";
import ReelCard from "@/components/shared/ReelCard";

function Work() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="mb-12">
          <div className="text-center mb-8">
            <hgroup className="flex flex-col items-center justify-center mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                className="capitalize text-2xl font-clash-display font-light text-foreground/80 flex-center tracking-wider mb-4"
              >
                // Our Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-7xl max-w-xl font-clash-display mb-2 flex-center flex-wrap gap-x-2"
              >
                <span className="text-secondary/90">Work</span>
                <span className="opacity-45">That</span>
                <br />
                <span className="text-secondary/90">Speaks</span>
                <span className="text-secondary/90">for</span>
                <span className="opacity-45">Itself</span>
              </motion.p>
            </hgroup>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-[80%] max-w-4xl mx-auto grid md:grid-cols-3 gap-4 md:gap-12"
        >
          {[
            "Content Strategy",
            "Editing & Effects",
            "Performance Tracking",
          ].map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <span
                className={`text- font-medium transition-colors ${
                  activeTab === index ? "text-[#D4FF00]" : "text-gray-400"
                }`}
              >
                {tab}
              </span>
              <div
                className={`mt-2 w-[115%] transition-colors duration-300 ${
                  activeTab === index ? "h-1 bg-[#D4FF00]" : "h-0.5 bg-gray-800"
                }`}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <ReusableSlider
            className="mx-auto w-[95%] xl:w-[100%] mt-4 sm:mt-6"
            renderSlides={() => {
              return Array(8)
                .fill("")
                .map((_, ix) => (
                  <SwiperSlide key={ix}>
                    <ReelCard speaker={ix + 1} className="hover:scale-95" />
                  </SwiperSlide>
                ));
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Work;
