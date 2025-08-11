import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import { fetchAllVideos } from "@/lib/fetch-drive-videos";

async function Contact() {
  const videos = await fetchAllVideos();
  return (
    <div className="overflow-x-hidden">
      <Hero videos={videos} />
      <ContactForm videos={videos} />
    </div>
  );
}

export default Contact;
