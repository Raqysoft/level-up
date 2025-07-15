import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

function ReelCard({
  speaker,
  className,
}: {
  speaker: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-center w-full h-[450px] relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50 duration-300 hover:scale-105",
        className
      )}
    >
      <Image
        src={`/images/speakers/speaker-${speaker}.png`}
        alt={`speaker-${speaker}`}
        className="object-cover"
        fill
        priority
      />
      <div className="flex-center rounded-full size-20 bg-white/10 backdrop-blur-md border border-white/30">
        <Play />
      </div>
    </div>
  );
}

export default ReelCard;
