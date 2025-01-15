"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function submitForm(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { error: "Invalid form data" };
  }

  try {
    const response = await fetch(
      `${process.env.UNSEND_BASE_URL}/api/v1/emails`,
      {
        method: "POST",
        body: JSON.stringify({
          to: process.env.CONTACT_EMAIL,
          from: `${data.name} - contact form <${process.env.UNSEND_FROM_EMAIL}>`,
          replyTo: data.email,
          text: data.message,
          subject: data.subject,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.UNSEND_API_KEY}`,
        },
      }
    );
    if (!response.ok) {
      return { error: "Failed to send message" };
    }
    return { success: true };
  } catch (error) {
    return { error: "Failed to send message" };
  }
}
