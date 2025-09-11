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
import { ChevronLeft, ChevronRight } from "lucide-react";

function Stats({ videos = [] }: { videos?: ICloudinaryVid[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isPrev = activeIndex > 0;
  const isNext = activeIndex < videos.length - 1;
  const swiperRef = useRef<any>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container relative z-10 py-28"
    >
      <motion.div className="rounded-3xl bg-foreground w-full flex flex-col justify-center gap-16 overflow-hidden py-12 px-4 md:px-8">
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
              1024: { spaceBetween: 10 },
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setActiveIndex(swiper.realIndex);
              swiperRef.current = swiper;
            }}
            className="!overflow-visible !py-12"
          >
            {videos.map((video, index) => {
              const isActive = activeIndex === index;
              return (
                <SwiperSlide
                  key={index}
                  className={cn(
                    "!p-0 !w-80 !h-[430px] flex justify-center items-center",
                    // isActive ? "z-40 !w-80" : "!w-72"
                    isActive && "!px-6 md:!px-8 lg:!px-12"
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
                      className={cn("relative w-full h-[430px] transform-gpu")}
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

          {/* Mobile Control Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6 md:hidden">
            <button
              onClick={handlePrevSlide}
              className={cn(
                "size-12 bg-secondary border border-black/20 text-background flex-center rounded-full shadow-md transition-all duration-300 cursor-pointer",
                !isPrev && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={handleNextSlide}
              className={cn(
                "size-12 bg-secondary border border-black/20 text-background flex-center rounded-full shadow-md transition-all duration-300 cursor-pointer",
                !isNext && "opacity-50 cursor-not-allowed"
              )}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
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
            <div className="text-4xl relative z-10 md:text-5xl font-clash-display font-bold mb-2">
              +230%
            </div>
            <p className="text-base md:text-lg font-light opacity-90">
              Engagement lift
            </p>
            <Image
              src="/svgs/engagement.svg"
              alt="engagement"
              width={40}
              height={40}
              className="absolute bottom-4 -right-8 sm:-bottom-2 sm:-right-4 md:-bottom-4 md:-right-6 z-0"
            />
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
            <div className="text-4xl md:text-5xl font-clash-display font-bold mb-2">
              60+
            </div>
            <p className="text-base md:text-lg font-light opacity-90">
              Brands & Creators Served
            </p>
            <Image
              src="/svgs/curved-path.svg"
              alt="brands served"
              width={40}
              height={40}
              className="absolute left-4 bottom-6 sm:bottom-2 sm:left-16 md:bottom-4 md:left-20 lg:left-36"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Stats;
