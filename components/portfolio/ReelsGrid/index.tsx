"use client";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ReelCard from "@/components/shared/ReelCard";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  IGoogleDriveVideo,
  IGoogleDriveCategorizedVideos,
  IGoogleDriveCategory,
} from "@/types/google-drive";

function ReelsGrid({ reels }: { reels: IGoogleDriveCategorizedVideos }) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories: IGoogleDriveCategory[] = [
    { id: "all", name: "All Videos" },
    ...Object.entries(reels).map(([key, value]) => ({
      id: key,
      name: value.folderName,
    })),
  ];

  const filteredReels = useMemo(() => {
    if (activeTab === "all") {
      return Object.values(reels).flatMap((category) => category.videos);
    }
    return reels[activeTab]?.videos || [];
  }, [reels, activeTab]);

  return (
    <div className="container space-y-14 pt-20 pb-40">
      <CategoryTabs
        categories={categories}
        activeCategory={activeTab}
        onChange={setActiveTab}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredReels.map((reel, ix) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ReelCard reel={reel} speaker={ix + 1} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ReelsGrid;
