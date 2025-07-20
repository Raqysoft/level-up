"use client";

import InfiniteScrollGallery from "@/components/shared/InfiniteScrollGallery";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TextFormEle from "@/components/ui/form/text-form-element";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

function ContactForm() {
  const form = useForm();

  return (
    <section className="bg-foreground py-20">
      <div className="container grid md:grid-cols-2 gap-8 xl:gap-16 h-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="order-2 md:order-1 flex-center gap-4 h-[840px] bg-gradient-to-b from-violet-700 from-5% to-violet-950 overflow-hidden rounded-2xl p-6"
        >
          <div className="min-w-[450px]">
            <InfiniteScrollGallery />
          </div>
          <div className="min-w-[450px]">
            <InfiniteScrollGallery />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="order-1 md:order-2"
        >
          <Form {...form}>
            <form action="" className="space-y-4">
              <div className="text-center mb-8">
                <hgroup className="flex flex-col items-center justify-center mb-6 text-background">
                  <h2 className="capitalize text-2xl font-clash-display font-light flex-center tracking-wider mb-4">
                    // Contact Us
                  </h2>
                  <p className="text-4xl md:text-6xl max-w-xl font-clash-display font-medium mb-2 flex-center flex-wrap gap-x-4">
                    <span>Let’s</span> <span>level</span> <span>up</span>
                    <span className="opacity-40">your</span>
                    <span className="opacity-40">brand,</span>
                    <span>together</span>
                  </p>
                </hgroup>
              </div>
              <div className="grid md:grid-cols-2 gap-4 xl:gap-8">
                <TextFormEle
                  form={form}
                  name="firstName"
                  placeholder="First name"
                  label="First name*"
                />
                <TextFormEle
                  form={form}
                  name="lastName"
                  placeholder="Last name"
                  label="Last name*"
                />
              </div>
              <TextFormEle
                form={form}
                name="email"
                label="Email*"
                placeholder="you@company.com"
              />
              <TextFormEle
                form={form}
                name="phoneNumber"
                label="Phone number"
                placeholder="+1 (555) 000-0000"
              />
              <TextFormEle
                form={form}
                type="textarea"
                name="message"
                label="Message"
                placeholder="Write your message"
              />

              <div>
                <div className="font-clash-display font-medium text-background/70 mb-2">
                  Services*
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="branding"
                      {...form.register("services.branding")}
                    />
                    <Label
                      htmlFor="branding"
                      className="text-base text-background"
                    >
                      Branding
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="development"
                      {...form.register("services.development")}
                    />
                    <Label
                      htmlFor="development"
                      className="text-base text-background"
                    >
                      Development
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      {...form.register("services.marketing")}
                    />
                    <Label
                      htmlFor="marketing"
                      className="text-base text-background"
                    >
                      Marketing
                    </Label>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Button size="lg" className="w-full h-12 text-md">
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;
