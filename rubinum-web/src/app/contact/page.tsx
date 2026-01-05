import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Rubinum",
  description: "Ready to build the impossible? Contact Rubinum to discuss your project or join our network.",
  alternates: {
    canonical: "https://rubinum.com/contact",
  },
  openGraph: {
    title: "Initialize Handshake | Contact Rubinum",
    description: "Start a project or join the team. We are ready to receive your transmission.",
    url: "https://rubinum.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
