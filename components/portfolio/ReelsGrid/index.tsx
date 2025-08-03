"use client";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ReelCard from "@/components/shared/ReelCard";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { REELS } from "@/constants/reels";

function ReelsGrid() {
  const [activeTab, setActiveTab] = useState<any>();

  return (
    <div className="container space-y-14 pt-20 pb-40">
      <CategoryTabs onChange={setActiveTab} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {REELS.map((reel, ix) => (
          <motion.div
            key={ix}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            // transition={{ delay: 0.2 * ix }}
          >
            <ReelCard speaker={Math.ceil(Math.random() * 8)} reel={reel} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ReelsGrid;
