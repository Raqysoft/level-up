"use client";

import type React from "react";

import { Swiper } from "swiper/react";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface CarsSliderProps {
  renderSlides: () => React.JSX.Element[];
  className?: string;
  sliderClassName?: string;
  buttonsClassName?: string;
  slidesCount?: number;
}

export default function ReusableSlider({
  renderSlides,
  className,
  sliderClassName,
  buttonsClassName,
}: CarsSliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperConfig = {
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    },
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
    },
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={cn("relative space-y-4", className)}>
      {/* Sliders */}
      <div className={cn("relative", sliderClassName)}>
        <Swiper
          {...swiperConfig}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();

            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.realIndex);
          }}
          onSlideChange={handleSlideChange}
        >
          {renderSlides()}
        </Swiper>
      </div>
      <div className="flex-center gap-8">
        <div className={cn("flex-center gap-2", buttonsClassName)}>
          <SliderNavButton
            ref={prevRef}
            areaLabel="Previous slide"
            icon={<ArrowLeft size={18} />}
            disabled={isBeginning}
          />
          <SliderNavButton
            ref={nextRef}
            areaLabel="Next slide"
            icon={<ArrowRight size={18} />}
            disabled={isEnd}
          />
        </div>
        <div className="w-full hidden lg:flex items-center justify-center gap-2">
          {Array(Math.max(1, Math.ceil(renderSlides().length - 3))) // -3 because at largest breakpoint we show 4 slides
            .fill("")
            .map((_, ix) => (
              <div
                key={ix}
                className={cn(
                  "w-full h-1.5 mt-1 rounded-lg transition-colors duration-300",
                  activeIndex === ix ? "bg-secondary" : "bg-zinc-600"
                )}
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
}

interface SliderNavButtonProps {
  ref: React.RefObject<HTMLButtonElement | null>;
  icon: React.ReactNode;
  areaLabel: string;
  disabled?: boolean;
}

const SliderNavButton = ({
  ref,
  areaLabel,
  icon,
  disabled = false,
}: SliderNavButtonProps) => (
  <button
    className={cn(
      "size-10 bg-secondary text-background flex-center rounded-full shadow-md transition-all duration-300 cursor-pointer",
      disabled && "bg-transparent text-foreground/80 cursor-not-allowed"
    )}
    aria-label={areaLabel}
    ref={ref}
    disabled={disabled}
  >
    {icon}
  </button>
);
