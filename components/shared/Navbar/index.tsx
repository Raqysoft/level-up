"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <>
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.6
        }}
        layout
        layoutRoot
        className={cn(
          "fixed z-50 px-4 py-2 rounded-full left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300",
          isScrolled
            ? "top-4 border bg-black/10 border-white/20 backdrop-blur-md duration-500"
            : "top-2 "
        )}
      >
        <motion.div
          animate={{
            gap: scrollDir === "up" ? "2.5rem" : "1rem"
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 40,
            duration: 0.8
          }}
          className="flex-between"
          layout
        >
          <div className="flex-center gap-4">
            <motion.div 
              className="relative h-10 w-[120px]"
              animate={{
                scale: isScrolled ? 0.9 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <Image
                src="/images/levelup-1.png"
                alt="level-up"
                className="object-cover"
                fill
              />
            </motion.div>

            <motion.div 
              className="h-6 w-[1px] bg-primary/50 mr-1"
              animate={{
                opacity: scrollDir === "up" ? 1 : 0.5,
                scaleY: scrollDir === "up" ? 1 : 0.7
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
            ></motion.div>

            {/* Desktop nav links with smooth width transitions */}
            <AnimatePresence>
              {scrollDir === "up" && (
                <motion.div
                  layoutId="navbar-links"
                  className="overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{
                    width: { 
                      duration: 0.5, 
                      ease: "easeInOut",
                      type: "tween"
                    },
                    opacity: { 
                      duration: 0.3, 
                      ease: "easeInOut"
                    },
                    layout: {
                      duration: 0.5,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <motion.nav
                    className="hidden md:flex flex-center gap-4 whitespace-nowrap px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: 0.2,
                      staggerChildren: 0.05
                    }}
                  >
                    {NAV_LINKS.map(({ label, href }, ix) => (
                      <motion.div
                        key={ix}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: 0.1 + ix * 0.05,
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        <Link
                          href={href}
                          className={cn(
                            "opacity-70 transition-all duration-300 hover:opacity-100",
                            isActive(href) && "opacity-100"
                          )}
                        >
                          {label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop buttons */}
          <motion.div
            className="hidden md:flex flex-center gap-2"
            animate={{
              scale: scrollDir === "up" ? 1 : 0.95,
              opacity: scrollDir === "up" ? 1 : 0.8
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            <Link href={"/portfolio"}>
              <Button variant={"outline"} icon={<ArrowRight />} dir="rtl">
                See Our Work
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button>Let's Talk</Button>
            </Link>
          </motion.div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mt-2"
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Menu />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4
            }}
            className="fixed top-0 right-0 h-full w-[95%] max-w-2xl bg-background/50 backdrop-blur-2xl z-50 p-6 shadow-lg flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <motion.button
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <X />
              </motion.button>
            </div>

            <motion.nav
              className="flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {NAV_LINKS.map(({ label, href }, ix) => (
                <motion.div
                  key={ix}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + ix * 0.05,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-lg transition-colors duration-200",
                      isActive(href) ? "font-semibold text-primary" : ""
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="flex flex-col gap-2 mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link href={"/portfolio"}>
                <Button
                  variant={"outline"}
                  className="w-full"
                  icon={<ArrowRight />}
                  dir="rtl"
                  onClick={() => setMobileOpen(false)}
                >
                  See Our Work
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button className="w-full" onClick={() => setMobileOpen(false)}>
                  Let's Talk
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
