import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

async function Contact() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <ContactForm />
    </div>
  );
}

export default Contact;
