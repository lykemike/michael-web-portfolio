"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { sendEmail } from "@/actions/actions"; // Import your server action
import { Check, Copy, Loader2, Send } from "lucide-react";
import { motion } from "motion/react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("message", data.message);

    const result = await sendEmail(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Email sent successfully!");
      form.reset();
    }

    setIsSubmitting(false);
  };

  const [copied, setCopied] = useState(false);
  const email = "montolalumichael@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[100px_100px]" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 mt-10">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/purr/kite-purr.png"
                alt="Hero"
                className="w-32 h-32 md:w-50 md:h-50 object-cover hidden md:block"
              />
              <div className="flex flex-col text-center sm:text-left">
                <div className="flex flex-col gap-2 p-2 sm:p-4">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    Drop a Message
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Feel free to reach me at{" "}
                    <span className="inline-flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1 rounded-lg border border-gray-200 text-xs sm:text-sm break-all">
                      {email}
                      <button
                        onClick={handleCopy}
                        className="cursor-pointer p-1 hover:bg-gray-200 transition-colors rounded flex items-center justify-center flex-shrink-0"
                        aria-label={copied ? "Copied!" : "Copy email"}
                      >
                        {copied ? (
                          <Check className="w-3 h-3 text-green-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-600" />
                        )}
                      </button>
                    </span>{" "}
                    or by filling out this form.
                  </p>
                </div>
              </div>
            </div>
            <Card className="px-8 py-8 shadow-lg">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input
                            className="placeholder:text-sm"
                            placeholder="you@example.com"
                            type="email"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            className="min-h-[100px] placeholder:text-sm"
                            disabled={isSubmitting}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button
                      className="rounded-sm cursor-pointer"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
