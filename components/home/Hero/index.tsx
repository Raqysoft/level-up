import InfiniteScrollGallery from "@/components/shared/InfiniteScrollGallery";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function HomeHero() {
  return (
    <div className="container relative min-h-screen flex items-center">
      <div className="w-1/2 space-y-8">
        <hgroup className="space-y-2">
          <h1 className="text-64 leading-20 font-medium tracking-wide">
            Your Brand Deserves Reels That Win
          </h1>
          <p className="text-lg font-clash-display font-light">
            We create high-converting, scroll-stopping Reels that get your brand
            seen, shared, and remembered.
          </p>
        </hgroup>
        <Button dir="rtl" size={"xl"} icon={<ArrowRight className="size-6" />}>
          Let's talk
        </Button>
        <div>
          <p>Trusted by brands like</p>
          <div className="flex items-center gap-4">
            {[].map(({ src, alt }, i) => (
              <Image src={src} alt={alt} width={50} height={50} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute w-1/2 h-[150%] -rotate-[20deg] -right-40 -top-40">
        <InfiniteScrollGallery />
      </div>
    </div>
  );
}

export default HomeHero;
