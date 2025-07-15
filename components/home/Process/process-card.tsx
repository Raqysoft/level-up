import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function ProcessCard({
  ix,
  title,
  description,
  img,
  className,
}: {
  ix: number;
  title: string;
  description: string;
  img: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-[105%] group bg-zinc-900 text-center flex-center flex-col gap-12 rounded-2xl h-[450px] shadow-2xl shadow-black duration-500",
        className
      )}
    >
      <div className="w-full flex items-end h-1/3">
        <div
          className={cn(
            "relative w-full h-32",
            ix === 0 && "h-44 -right-2",
            ix === 1 && "h-44"
          )}
        >
          <Image
            src={`/images/home/process/${img}.png`}
            alt={title}
            fill
            className="w-full object-contain"
          />
        </div>
      </div>
      <div>
        <h2 className="relative text-4xl w-fit mx-auto mb-2">
          <span>0{ix + 1}</span>
          <Image
            src={"/svgs/curved-path.svg"}
            alt={`process-${ix + 1}`}
            width={30}
            height={30}
            className="absolute left-full top-0"
            style={{
              filter: `hue-rotate(${50 * ix}deg) `,
            }}
          />
        </h2>
        <hgroup className="space-y-2">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="px-4 opacity-50 font-light">{description}</p>
        </hgroup>
      </div>
    </div>
  );
}

export default ProcessCard;
