"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  const isActive = (href: string) =>
    href === pathname || (pathname.startsWith(href) && href !== "/");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 100);

      if (currentY > lastScrollY) {
        setScrollDir("down");
      } else if (currentY < lastScrollY) {
        setScrollDir("up");
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed z-50 px-4 py-2 rounded-full left-1/2 -translate-x-1/2 duration-300",
        isScrolled
          ? "top-4 border bg-black/10 border-white/20 backdrop-blur-md"
          : "top-2"
      )}
    >
      <motion.div
        className={cn(
          "flex-between duration-700",
          scrollDir === "up" ? "gap-4 md:gap-6 lg:gap-40" : "gap-4 md:gap-6"
        )}
      >
        <div className="flex-center gap-4">
          <div className="relative h-8 w-[120px]">
            <Image src="/images/full-logo.png" alt="level-up" fill />
          </div>

          <div className="h-6 w-[1px] bg-primary/50 mr-1"></div>

          {/* Animate nav links based on scroll direction */}
          <AnimatePresence>
            {scrollDir === "up" && (
              <motion.nav
                className="hidden md:flex flex-center gap-4"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {NAV_LINKS.map(({ label, href }, ix) => (
                  <Link
                    key={ix}
                    href={href}
                    className={cn(
                      "opacity-70",
                      isActive(href) && "opacity-100"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden md:flex flex-center gap-2">
          <Button variant={"outline"} icon={<ArrowRight />} dir="rtl">
            See Our Work
          </Button>
          <Button>Let's Talk</Button>
        </div>

        <div className="md:hidden">
          <Menu />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
