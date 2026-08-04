import { RequestHandler } from "express";
import { Resend } from "resend";
import { z } from "zod";
import { ContactResponse } from "@shared/api";

// ── Validation schema ─────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .regex(/^[\d+\-\s]{10,15}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// ── Handler ───────────────────────────────────────────────────────────────────

export const handleContact: RequestHandler = async (req, res) => {
  // 1. Validate
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Invalid input";
    const response: ContactResponse = { success: false, message: firstError };
    res.status(400).json(response);
    return;
  }

  const { name, phone, email, subject, message } = parsed.data;

  // 2. Guard: require env vars at runtime
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_DESTINATION_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_DESTINATION_EMAIL env vars"
    );
    const response: ContactResponse = {
      success: false,
      message: "Server configuration error. Please try again later.",
    };
    res.status(500).json(response);
    return;
  }

  // 3. Send via Resend
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `[Toursurv Contact] ${subject}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1C1C1C;">New Contact Form Submission</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #1C1C1C;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 8px 0; color: #1C1C1C;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 8px 0; color: #1C1C1C;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject</td>
            <td style="padding: 8px 0; color: #1C1C1C;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 16px;">
          <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
          <p style="color: #1C1C1C; white-space: pre-wrap; background: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    const response: ContactResponse = {
      success: false,
      message: "Failed to send your message. Please try again.",
    };
    res.status(500).json(response);
    return;
  }

  const response: ContactResponse = {
    success: true,
    message: "Your message has been sent! We'll be in touch soon.",
  };
  res.status(200).json(response);
};
