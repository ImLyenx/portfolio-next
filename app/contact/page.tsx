// page de contact avec formulaire
import ContactForm from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Lyenx",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <>
      <div className="mb-8 pt-8">
        <h1 className="text-4xl font-extrabold">Contact me</h1>
      </div>
      <ContactForm />
    </>
  );
}
