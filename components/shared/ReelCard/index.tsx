"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Real reels with external video + avatar
const reels = [
  {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Fast-paced edits crafted for TikTok & Instagram Reels.",
    name: "Elena Gomez",
    role: "Social Video Strategist",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "We align every reel with your brand’s mission.",
    name: "Jake Allen",
    role: "Creative Director",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Batch filming. Clean delivery. Consistent results.",
    name: "Rina Patel",
    role: "Content Producer",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

function ReelCard({
  speaker,
  className,
}: {
  speaker: number;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedReel, setSelectedReel] = useState(reels[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOpen = () => {
    const random = reels[Math.floor(Math.random() * reels.length)];
    setSelectedReel(random);
    setTimeout(() => {
      videoRef.current?.play();
      videoRef.current!.muted = false;
      setIsMuted(false);
      setIsPlaying(true);
    }, 100);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percent);
  };

  return (
    <Dialog onOpenChange={(open) => open && handleOpen()}>
      <DialogTrigger asChild>
        <div
          className={cn(
            "flex-center w-full h-[450px] relative overflow-hidden rounded-xl shadow-lg bg-zinc-900 border border-primary/50 duration-300 hover:scale-105 cursor-pointer",
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
      </DialogTrigger>

      <DialogContent className="h-[90%] sm:h-auto sm:w-[90%] max-w-[350px] aspect-[9/16] !rounded-3xl ring border-white/30 bg-black p-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg shadow-black/40"
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={selectedReel.video}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 from-10% to-transparent z-10" />

          {/* Publisher Info & Caption */}
          <div className="absolute bottom-4 left-4 z-20 text-white flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="relative bg-zinc-800 rounded-full w-10 h-10">
                <Image
                  src={selectedReel.avatar}
                  alt="avatar"
                  fill
                  className="h-full w-full rounded-full object-cover border border-white/20"
                />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {selectedReel.name}
                </p>
                <p className="text-xs text-white/70">{selectedReel.role}</p>
              </div>
            </div>
            <p className="text-sm text-white/90">{selectedReel.caption}</p>
          </div>

          {/* Controls */}
          <div className="absolute top-4 right-4 z-30 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              {isPlaying ? (
                <Pause className="text-white size-5" />
              ) : (
                <Play className="text-white size-5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/50 rounded-full p-2 hover:bg-black/70"
            >
              {isMuted ? (
                <VolumeX className="text-white size-5" />
              ) : (
                <Volume2 className="text-white size-5" />
              )}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-1 left-0 w-full h-1 z-40 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default ReelCard;
