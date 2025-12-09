"use server";

import { Resend } from "resend";
import { z } from "zod";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(5000, {
      message: "Message must not exceed 5000 characters.",
    }),
});

export const sendEmail = async (formData: FormData) => {
  // Extract values from FormData
  const email = formData.get("email");
  const message = formData.get("message");

  // Validate with Zod
  const validatedFields = emailSchema.safeParse({
    email,
    message,
  });

  if (!validatedFields.success) {
    return {
      error: "Invalid fields. Please check your input.",
    };
  }

  const { email: validatedEmail, message: validatedMessage } =
    validatedFields.data;

  try {
    const data = await resend.emails.send({
      from: "Mike's Portfolio Contact Form <onboarding@resend.dev>",
      to: "montolalumichael@gmail.com",
      subject: "New Message from portfolio contact form",
      // reply_to: validatedEmail,
      react: EmailTemplate({
        senderEmail: validatedEmail,
        message: validatedMessage,
      }),
    });

    return {
      success: true,
      data,
    };
  } catch (error: unknown) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to send email. Please try again.",
    };
  }
};
