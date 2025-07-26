"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    value: "item-1",
    question: "What's the difference between the Free and Pro plans?",
    answer:
      "Free Plan gives you access to public events, service provider discounts, and ecosystem updates. Pro Plan unlocks capital raise listings, Smart Swipe™, private messaging, community access, and advanced analytics.",
  },
  {
    value: "item-2",
    question: "How does Smart Swipe™ work?",
    answer:
      "Smart Swipe™ allows you to quickly connect with relevant opportunities and individuals based on your preferences. Swipe right to express interest, and left to pass.",
  },
  {
    value: "item-3",
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can easily upgrade or downgrade your plan directly from your account settings. Changes will take effect at the start of your next billing cycle.",
  },
  {
    value: "item-4",
    question: "What kind of support is available?",
    answer:
      "We offer email support for all users. Pro Plan members receive priority support and access to dedicated account managers.",
  },
  {
    value: "item-5",
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize the security of your data. We use industry-standard encryption and security protocols to protect your information.",
  },
];

export default function FaqAccordion() {
  return (
    <div className="container space-y-4 md:space-y-12 py-20">
      <SectionHeader p="FAQs" h2="Frequently asked questions" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-4xl mx-auto rounded-lg bg-zinc-900 p-4 text-white shadow-lg"
      >
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          <AnimatePresence>
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <AccordionTrigger className="flex items-center justify-between py-4 text-xl font-medium hover:no-underline [&[data-state=open]>div>svg.plus-icon]:hidden [&[data-state=closed]>div>svg.minus-icon]:hidden cursor-pointer">
                  {item.question}
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-400 text-zinc-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Plus className="h-5 w-5 plus-icon" />
                    <Minus className="h-5 w-5 minus-icon" />
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-zinc-400">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </AnimatePresence>
        </Accordion>
      </motion.div>
    </div>
  );
}
