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
    question: "How much does it cost?",
    answer:
      "Let's start with a friendly 30-minute call to see if we're a great match for each other! Once we've connected, we'd be excited to walk you through the investment details and how everything comes together.",
  },
  {
    value: "item-2",
    question: "Is it really 2 hours per month?",
    answer:
      "Absolutely. We've implemented this system successfully with many clients. While the first month may take an extra 1-2 hours depending on onboarding needs, the process quickly becomes streamlined. Occasionally, practice sessions might run longer at first, but as you continue creating with us, we see a significant drop in the time required. For the majority of our clients, 2 hours a month—1 hour for practice and 1 hour for recording is not just normal, it's proven and repeatable.",
  },
  {
    value: "item-3",
    question: "What if I need additional sessions?",
    answer:
      "Our system is designed to efficiently accommodate your needs within the allocated time. With one hour in the studio, we can typically complete 15 videos. However, if you find the need for extra sessions, we can easily arrange that as well. Your satisfaction is our priority.",
  },
  {
    value: "item-4",
    question: "How will you handle the posting of my videos?",
    answer:
      "You have the option to provide us access to your social media accounts, and we'll take care of scheduling and posting your videos across all platforms. Alternatively, if you prefer, we can send you the videos and you can post them yourself. Your convenience is our focus.",
  },
  {
    value: "item-5",
    question: "How do I communicate feedback?",
    answer:
      "You'll chat directly with your dedicated project manager on slack and use frame.io to drop reviews on the video",
  },
  {
    value: "item-6",
    question: "Can I cancel if I don't like it?",
    answer:
      "Cancellation requests can be processed only at the end of your 3-month billing cycle.",
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
                    className="flex min-h-10 min-w-10 items-center justify-center rounded-2xl bg-lime-400 text-zinc-900"
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
