"use client";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ReelCard from "@/components/shared/ReelCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IGoogleDriveVideo } from "@/types/google-drive";

function ReelsGrid({ reels }: { reels: IGoogleDriveVideo[] }) {
  const [activeTab, setActiveTab] = useState<any>();

  return (
    <div className="container space-y-14 pt-20 pb-40">
      <CategoryTabs onChange={setActiveTab} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reels.map((reel, ix) => (
          <motion.div
            key={ix}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ReelCard speaker={1} reel={reel} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ReelsGrid;
