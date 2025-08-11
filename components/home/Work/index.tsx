"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ReusableSlider from "@/components/shared/ReusableSlider";
import { SwiperSlide } from "swiper/react";
import ReelCard from "@/components/shared/ReelCard";
import CategoryTabs from "@/components/shared/CategoryTabs";
import { IGoogleDriveVideo } from "@/types/google-drive";

function Work({ videos }: { videos: IGoogleDriveVideo[] }) {
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
          transition={{ delay: 0.6 }}
        >
          <ReusableSlider
            className="mx-auto w-[95%] xl:w-[100%] mt-4 sm:mt-6"
            renderSlides={() => {
              return videos.map((video, ix) => (
                <SwiperSlide key={video.id}>
                  <ReelCard speaker={ix + 1} reel={video} className="hover:scale-95" />
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
