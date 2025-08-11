"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard } from "./testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/autoplay";
import { IGoogleDriveVideo } from "@/types/google-drive";

function Testimonials({ videos = [] }: { videos?: IGoogleDriveVideo[] }) {
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
            <Swiper
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              loop
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={6000}
              grabCursor
              centeredSlides
              modules={[Autoplay]}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => {
                const videoIndex = index % videos.length;
                return (
                  <SwiperSlide
                    key={`${testimonial.id}-${index}`}
                    className="w-[90vw] md:w-[700px]"
                  >
                    <TestimonialCard 
                      testimonial={testimonial} 
                      video={videos[videoIndex]}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
