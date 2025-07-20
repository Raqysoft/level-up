"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/constants/categories";

export type CategoryType = (typeof CATEGORIES)[0];
function CategoryTabs({
  onChange,
}: {
  onChange?: (cat: CategoryType) => void;
}) {
  const [activeTab, setActiveTab] = useState<CategoryType>(CATEGORIES[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="w-[80%] max-w-4xl mx-auto grid md:grid-cols-3 gap-4 md:gap-12"
    >
      {CATEGORIES.map((tab, index) => (
        <div
          key={index}
          onClick={() => {
            setActiveTab(tab);
            onChange?.(tab);
          }}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <span
            className={`text- font-medium transition-colors ${
              activeTab.value === tab.value ? "text-[#D4FF00]" : "text-gray-400"
            }`}
          >
            {tab.label}
          </span>
          <div
            className={`mt-2 w-[115%] transition-colors duration-300 ${
              activeTab.value === tab.value
                ? "h-1 bg-[#D4FF00]"
                : "h-0.5 bg-gray-800"
            }`}
          />
        </div>
      ))}
    </motion.div>
  );
}

export default CategoryTabs;
