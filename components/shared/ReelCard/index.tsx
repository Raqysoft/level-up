"use client";

import React, { useRef, useState, useCallback, useEffect, memo } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IReal } from "@/constants/reels";

function ReelCard({
  speaker,
  className,
  reel,
}: {
  speaker: number;
  className?: string;
  reel?: IReal;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "flex-center w-full h-[450px] relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50 duration-300 hover:scale-105 cursor-pointer",
            className
          )}
        >
          {false ? (
            <iframe
              src={`https://drive.google.com/file/d/${reel?.videoId}/preview`}
              className="absolute bottom left-1/2 -translate-x-1/2 w-[315%] h-full object-cover pointer-events-none"
            />
          ) : (
            <>
              <Image
                src={
                  reel ? reel.cover : `/images/speakers/speaker-${speaker}.png`
                }
                alt={`speaker-${speaker}`}
                className="object-cover"
                fill
                priority
              />
              <div className="flex-center rounded-full size-20 bg-white/10 backdrop-blur-md border border-white/30">
                <Play />
              </div>
            </>
          )}
        </div>
      </DialogTrigger>

      <DialogContent className="h-[90%] sm:h-auto sm:w-[90%] max-w-[350px] aspect-[9/16] !rounded-3xl ring border-white/30 bg-black p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg shadow-black/40"
        >
          <iframe
            src={`https://drive.google.com/file/d/${reel?.videoId}/preview`}
            allow="autoplay"
            className="absolute inset-0 w-full h-full rounded-3xl"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default memo(ReelCard);
