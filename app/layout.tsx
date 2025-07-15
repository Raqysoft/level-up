import type { Metadata } from "next";
import "./globals.css";
import BodyLines from "@/components/shared/BodyLines";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplay-Variable.woff2",
      weight: "100 700",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Variable.woff",
      weight: "100 700",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Variable.ttf",
      weight: "100 700",
      style: "normal",
    },
  ],
  variable: "--font-clash-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Level up",
  description: "Your Brand Deserves Reels That Win",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${inter.variable} antialiased relative overflow-x-hidden dark`}
      >
        <Suspense fallback={<Loading />}>
          <Navbar />
          <BodyLines cols={4} />
          <main className="relative">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
