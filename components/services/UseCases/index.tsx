"use client";
import React from "react";
import { motion } from "framer-motion";
import ReusableSlider from "@/components/shared/ReusableSlider";
import { SwiperSlide } from "swiper/react";
import SectionHeader from "@/components/shared/SectionHeader";
import Image from "next/image";

function UseCases() {
  return (
    <div className="container pt-16 pb-32">
      <SectionHeader h2="Use Cases" p="Who's It For" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <ReusableSlider
          className="mx-auto w-[95%] xl:w-[100%] mt-4 sm:mt-12"
          renderSlides={() => {
            return Array(8)
              .fill("")
              .map((_, ix) => (
                <SwiperSlide key={ix}>
                  <div className="relative h-[400px]">
                    <Image
                      src={`/images/use-cases/use-case-${
                        (ix + 1) % 3 || 1
                      }.jpg`}
                      alt={`use-case-${(ix + 1) % 3 || 1}`}
                      fill
                      className="object-cover"
                    />
                    <hgroup className="absolute py-2 px-4 bottom-0 left-0 w-full bg-gradient-to-t from-black/70">
                      <h2 className="text-lg">Coaches & Creators</h2>
                      <p className="text-sm opacity-80 -mt-1">
                        Coaches & Creators
                      </p>
                    </hgroup>
                  </div>
                </SwiperSlide>
              ));
          }}
        />
      </motion.div>
    </div>
  );
}

export default UseCases;
