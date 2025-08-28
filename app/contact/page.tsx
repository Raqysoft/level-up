import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import { fetchAllVideos } from "@/lib/fetch-drive-videos";
import { REELS } from "@/constants/reels";

async function Contact() {
  // const videos = await fetchAllVideos();
  return (
    <div className="overflow-x-hidden">
      <Hero videos={REELS} />
      <ContactForm videos={REELS} />
    </div>
  );
}

export default Contact;
