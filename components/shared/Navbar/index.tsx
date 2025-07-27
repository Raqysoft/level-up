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

            {/* Desktop nav links */}
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

          {/* Desktop buttons */}
          <div className="hidden md:flex flex-center gap-2">
            <Link href={"/portfolio"}>
              <Button variant={"outline"} icon={<ArrowRight />} dir="rtl">
                See Our Work
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button>Let's Talk</Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="mt-2">
              <Menu />
            </button>
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
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[95%] max-w-2xl bg-background/50 backdrop-blur-2xl z-50 p-6 shadow-lg flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileOpen(false)}>
                <X />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }, ix) => (
                <Link
                  key={ix}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-lg",
                    isActive(href) ? "font-semibold text-primary" : ""
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-2 mt-auto">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
