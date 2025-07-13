"use client";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import ServiceCard from "./service-card";
import { SERVICES } from "@/constants/services";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Services() {
  return (
    <div className="py-20">
      <div className="container space-y-12 md:space-y-20">
        <SectionHeader h2="our services" p="what we do" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-12">
          {SERVICES.map((service, ix) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-300px" }}
              transition={{ delay: ix * 0.2 }}
              key={ix}
              className={cn(ix === 2 && "md:col-span-2 lg:col-span-1")}
            >
              <ServiceCard {...service} ix={ix} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
