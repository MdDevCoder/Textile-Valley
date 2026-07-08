"use server";

import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().optional(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;

export type ActionState = {
  message?: string;
  error?: string;
  success?: boolean;
  errors?: Record<string, string[]>;
};

export async function submitInquiry(prevState: any, formData: FormData): Promise<ActionState> {
  const data = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    interest: formData.get("interest") as string || "General",
    message: formData.get("message") as string,
  };

  // Validate the data
  const validatedFields = inquirySchema.safeParse(data);

  if (!validatedFields.success) {
    return { 
      message: "Invalid form data. Please check your inputs.",
      error: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, email, interest, message } = validatedFields.data;

  // CRM Abstraction Layer
  // In the future, this is where we would connect to Zoho, HubSpot, or Salesforce APIs.
  
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // MVP: In a real app, send an email here using Resend or SendGrid
    console.log("New Inquiry Received:", { name, phone, email, interest, message });

    // Also trigger admin notification or format WhatsApp link
    return { message: "Thank you for your inquiry. Our investment team will contact you shortly.", success: true };
  } catch (error) {
    console.error("Failed to submit inquiry:", error);
    return { message: "Failed to submit inquiry. Please try again later.", error: "Server error" };
  }
}
