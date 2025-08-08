"use client";

import InfiniteScrollGallery from "@/components/shared/InfiniteScrollGallery";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import TextFormEle from "@/components/ui/form/text-form-element";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Zod validation schema
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z.email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-$$$$]/g, "")),
      {
        message: "Please enter a valid phone number",
      }
    ),
  message: z
    .string()
    .optional()
    .refine((val) => !val || val.length <= 1000, {
      message: "Message must be less than 1000 characters",
    }),
  services: z
    .object({
      branding: z.boolean().optional(),
      development: z.boolean().optional(),
      marketing: z.boolean().optional(),
    })
    .refine(
      (services) => {
        return services.branding || services.development || services.marketing;
      },
      {
        message: "Please select at least one service",
        path: ["services"],
      }
    ),
});

type FormValues = z.infer<typeof contactFormSchema>;

function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      services: {
        branding: false,
        development: false,
        marketing: false,
      },
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully! 🎉", {
          description:
            "Your message has been sent successfully. We'll get back to you soon!",
        });
        form.reset();
      } else {
        toast("Something went wrong!! 🤔", {
          description:
            result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      toast("Something went wrong!! 🤔", {
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-foreground py-20">
      <div className="container grid md:grid-cols-2 gap-8 xl:gap-16 h-full">
        {/* Gallery Section */}
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

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="order-1 md:order-2"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="text-center mb-8">
                <hgroup className="flex flex-col items-center justify-center mb-6 text-background">
                  <h2 className="capitalize text-2xl font-medium tracking-wider mb-4">
                    // Contact Us
                  </h2>
                  <p className="text-4xl md:text-6xl max-w-xl font-medium mb-2 flex items-center justify-center flex-wrap gap-x-4">
                    <span>{"Let's"}</span> <span>level</span> <span>up</span>
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

              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-background/70 mb-2">
                      Services*
                    </FormLabel>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="services.branding"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-base text-background">
                              Branding
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="services.development"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-base text-background">
                              Development
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="services.marketing"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="text-base text-background">
                              Marketing
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <div className="pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-md"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
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
