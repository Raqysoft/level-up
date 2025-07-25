import StickyTextReveal from "@/components/shared/StickyTextReveal";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen bg-zinc-900"></div>
      <div className="h-screen bg-zinc-800"></div>
      <div className="h-screen bg-zinc-700"></div>

      {/* Sticky text reveal section */}
      <StickyTextReveal
        title="Reels Production"
        text="Your brand deserves content that's fast, bold, and made to perform"
        subtitle="Keep scrolling to reveal"
      />

      <div className="h-screen bg-zinc-700"></div>
      <div className="h-screen bg-zinc-800"></div>
      <div className="h-screen bg-zinc-900"></div>
    </main>
  );
}
