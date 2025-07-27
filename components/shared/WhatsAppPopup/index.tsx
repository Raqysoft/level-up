"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function WhatsAppPopup() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed flex-center z-50 bottom-6 right-6 size-24 rounded-full transition-all duration-300
        ${
          show
            ? "opacity-100 scale-100"
            : "!opacity-40 scale-90 hover:!opacity-100 hover:scale-100"
        }
        bg-green-400/10`}
    >
      <Link
        href="https://wa.me/+201018192961?text=Let's make something great together"
        target="_blank"
      >
        <div className="size-20 bg-green-400/10 flex-center rounded-full">
          <div className="size-14 bg-green-400 rounded-full flex-center">
            <Image
              src={"/svgs/whatsapp.svg"}
              alt="level-up whatsapp"
              width={30}
              height={30}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default WhatsAppPopup;
