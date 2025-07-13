import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function ServiceCard({
  ix,
  title,
  description,
  svg,
}: {
  ix: number;
  title: string;
  description: string;
  svg: string;
}) {
  return (
    <div className="group relative overflow-hidden bg-zinc-900 rounded-3xl h-[450px] duration-500 hover:mt-4">
      <div
        className="
      bg-secondary absolute duration-500
      size-[400px] group-hover:size-full
      blur-3xl group-hover:scale-150
      -translate-[90%] group-hover:translate-0
      "
      />
      <div className="relative h-full flex flex-col justify-center duration-500 gap-8 group-hover:gap-12 p-8">
        <Image
          src={`/images/services/${svg}.svg`}
          alt="film-reels"
          width={220}
          height={220}
          className={cn(
            "mx-auto duration-500 origin-top-right group-hover:-translate-y-4 group-hover:translate-x-6 group-hover:scale-125",
            ix ? "group-hover:invert" : "invert group-hover:invert-0"
          )}
        />
        <hgroup className="space-y-2">
          <h3 className="text-3xl origin-bottom-left group-hover:scale-125 group-hover:text-background duration-500">
            {title}
          </h3>
          <p className="group-hover:text-background duration-500 opacity-80 font-light">
            {description}
          </p>
        </hgroup>
      </div>
    </div>
  );
}

export default ServiceCard;
