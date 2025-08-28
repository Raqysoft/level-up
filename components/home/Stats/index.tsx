"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import ReelCard from "@/components/shared/ReelCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import { IGoogleDriveVideo } from "@/types/google-drive";
import { ICloudinaryVid } from "@/lib/fetch-cloudinary-videos";

function Stats({ videos = [] }: { videos?: ICloudinaryVid[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container relative z-10 py-28"
      ref={sectionRef}
    >
      <motion.div className="rounded-3xl bg-foreground flex flex-col justify-center gap-16 overflow-hidden py-12 px-4 md:px-8">
        {/* Swiper Slider */}
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            speed={600}
            breakpoints={{
              320: { spaceBetween: 20 },
              640: { spaceBetween: 25 },
              768: { spaceBetween: 30 },
              1024: { spaceBetween: 10 },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className="!overflow-visible !py-12"
          >
            {videos.map((video, index) => {
              const isActive = activeIndex === index;
              return (
                <SwiperSlide
                  key={video.id}
                  className={cn(
                    " !p-0 !h-[430px] flex justify-center items-center",
                    isActive ? "z-40 !w-80" : "!w-72"
                  )}
                >
                  <div className="relative w-full h-full flex justify-center items-center">
                    {/* Card container with consistent size */}
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.2 : 0.85,
                        y: isActive ? 0 : 10,
                        rotateY: isActive ? 0 : 5,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className={cn(
                        "relative w-full h-[430px] transform-gpu",
                        isActive && "mx-8"
                      )}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Active slide border effect */}
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scale: isActive ? 1 : 0.9,
                        }}
                        className={cn(
                          "absolute-center bg-primary/40 w-[110%] h-[85%] group-hover:size-[90%] rounded-xl group-hover:rounded-3xl duration-300"
                        )}
                      />

                      <ReelCard
                        reel={video}
                        className={cn(
                          "w-full h-full hover:scale-100 rounded-3xl bg-primary/50 shadow-xl transition-all duration-600 ease-out transform-gpu",
                          isActive
                            ? "shadow-2xl shadow-primary/25"
                            : "shadow-lg opacity-70"
                        )}
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 lg:gap-20 text-background">
          {/* Engagement Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative text-center"
          >
            <Image
              src="/svgs/engagement.svg"
              alt="engagement"
              width={40}
              height={40}
              className="absolute -bottom-2 -right-4 md:-bottom-4 md:-right-6"
            />
            <div className="text-4xl md:text-5xl font-clash-display font-bold mb-2">
              +230%
            </div>
            <p className="text-base md:text-lg font-light opacity-90">
              Engagement lift
            </p>
          </motion.div>

          {/* Views Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative text-center"
          >
            <Image
              src="/svgs/views.svg"
              alt="views"
              width={40}
              height={40}
              className="absolute -top-1 right-2 md:-top-2 md:right-0"
            />
            <div className="text-4xl md:text-5xl font-clash-display font-bold mb-2">
              7.2M
            </div>
            <p className="text-base md:text-lg font-light opacity-90">
              Total Views Generated
            </p>
          </motion.div>

          {/* Brands Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative text-center"
          >
            <Image
              src="/svgs/curved-path.svg"
              alt="brands served"
              width={40}
              height={40}
              className="absolute bottom-2 left-16 md:bottom-4 md:left-20 lg:left-36"
            />
            <div className="text-4xl md:text-5xl font-clash-display font-bold mb-2">
              60+
            </div>
            <p className="text-base md:text-lg font-light opacity-90">
              Brands & Creators Served
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Stats;
