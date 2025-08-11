"use client";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import ReelCard from "@/components/shared/ReelCard";
import { IGoogleDriveVideo } from "@/types/google-drive";

function ReelComparision({
  selectedReel,
}: {
  selectedReel: IGoogleDriveVideo;
}) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="pt-12 aspect-[9/14] max-w-[400px] mx-auto">
      <div
        className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
        onMouseMove={onMouseMove}
        onMouseUp={() => setOnMouseDown(false)}
        onTouchMove={onMouseMove}
        onTouchEnd={() => setOnMouseDown(false)}
      >
        <div
          className="bg-lime-300 h-full w-0.5 absolute z-20 top-0 -ml-1 select-none"
          style={{
            left: inset + "%",
          }}
        >
          <button
            className="rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center bg-lime-300 text-black"
            onTouchStart={(e) => {
              setOnMouseDown(true);
              onMouseMove(e);
            }}
            onMouseDown={(e) => {
              setOnMouseDown(true);
              onMouseMove(e);
            }}
            onTouchEnd={() => setOnMouseDown(false)}
            onMouseUp={() => setOnMouseDown(false)}
          >
            <GripVertical className="h-4 w-4 select-none" />
          </button>
        </div>
        <div
          className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border"
          style={{
            clipPath: "inset(0 0 0 " + inset + "%)",
          }}
        >
          <div className="absolute inset-0 size-full bg-zinc-800 w-full h-full"></div>
          <ReelCard
            reel={selectedReel}
            className="w-full h-full hover:scale-100"
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border">
          <div className="absolute inset-0 size-full bg-zinc-700 w-full h-full"></div>
          <ReelCard
            reel={selectedReel}
            className="w-full h-full hover:scale-100 grayscale-100"
          />
        </div>
      </div>
    </div>
  );
}

export { ReelComparision };
