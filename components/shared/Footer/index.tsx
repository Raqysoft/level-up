"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReelsFootage from "./reels-footage";

function Footer() {
  return (
    <footer className="py-16 flex flex-col items-center relative overflow-hidden">
      <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 h-[30vh] w-[120%] bg-background blur-3xl"></div>
      <div className="w-[1800px] relative -bottom-48 -mt-[470px]">
        <ReelsFootage />
      </div>
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-8"
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <p className="text-sm uppercase tracking-wider mb-4">
                // OUR WORK
              </p>
              <h2 className="text-4xl md:text-5xl max-w-md font-clash-display font-medium mb-2 flex-center flex-wrap gap-2">
                <span className="text-white">Work</span>
                <span className="opacity-45">That</span>
                <br />
                <span className="text-white">Speaks</span>
                <span className="text-white">for</span>
                <span className="opacity-45">Itself</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              We've helped brands and creators hit millions of views, grow
              engaged audiences, and sell more — all through Reels that actually
              perform.
            </p>
            <Button className="" size="lg">
              Book Your Free Call
            </Button>
          </motion.div>
        </div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 mb-12 border-t border-zinc-800 pt-12"
        >
          <div>
            <Image
              src={"/images/full-logo.png"}
              alt="level up"
              width={150}
              height={150}
            />
          </div>
          {/* Solutions Column */}
          {/* <div>
            <h3 className="font-medium mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Editing & Effects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Performance Tracking{" "}
                  <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Company Column */}
          {/* <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Resources Column */}
          <div className="col-span-3">
            <h3 className="font-medium mb-4">Important links</h3>
            <ul className="flex items-center gap-4 md:gap-8 flex-wrap">
              {[
                { label: "Home", href: "/" },
                { label: "Service", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }, ix) => (
                <li key={ix}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 pt-8"
        >
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg">Move faster with Level up</h4>
            <h5 className="font-inter opacity-50 font-light max-w-md text-sm">
              Save countless hours of design and ship great looking designs
              faster.
            </h5>
          </div>
          <div className="opacity-50 font-light text-sm">
            © 2025 Level up. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
