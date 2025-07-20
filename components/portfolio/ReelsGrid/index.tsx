"use client";
import CategoryTabs from "@/components/shared/CategoryTabs";
import ReelCard from "@/components/shared/ReelCard";
import React, { useState } from "react";
import { motion } from "framer-motion";

function ReelsGrid() {
  const [activeTab, setActiveTab] = useState<any>();

  return (
    <div className="container space-y-14 pt-20 pb-40">
      <CategoryTabs onChange={setActiveTab} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Array(28)
          .fill(0)
          .map((_, ix) => (
            <motion.div
              key={ix}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.2 * ix }}
            >
              <ReelCard speaker={Math.ceil(Math.random() * 8)} />
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export default ReelsGrid;
