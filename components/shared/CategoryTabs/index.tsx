"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IGoogleDriveCategory } from "@/types/google-drive";
import { cn } from "@/lib/utils";

function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: {
  categories: IGoogleDriveCategory[];
  activeCategory?: string;
  onChange?: (value: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<string>(
    activeCategory || categories[0]?.id || ""
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="w-[80%] max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-12"
    >
      {categories.map((tab, ix) => (
        <div
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            onChange?.(tab.id);
          }}
          className={cn(
            "flex flex-col items-center text-center cursor-pointer"
          )}
        >
          <span
            className={`text- font-medium transition-colors ${
              activeTab === tab.id ? "text-[#D4FF00]" : "text-gray-400"
            }`}
          >
            {tab.name}
          </span>
          <div
            className={`mt-2 w-[115%] transition-colors duration-300 ${
              activeTab === tab.id ? "h-1 bg-[#D4FF00]" : "h-0.5 bg-gray-800"
            }`}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default CategoryTabs;
