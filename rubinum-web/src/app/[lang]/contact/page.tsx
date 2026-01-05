import { Metadata } from "next";
import ContactContent from "./ContactContent";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Contact Us | Rubinum",
  description: "Get in touch with Rubinum. Let's discuss how we can build the future of your digital infrastructure together.",
  alternates: {
    canonical: "https://rubinum.com/contact",
  },
  openGraph: {
    title: "Contact Rubinum | Start the Conversation",
    description: "Ready to innovate? Reach out to our team of experts and let's build something extraordinary.",
    url: "https://rubinum.com/contact",
  },
};

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <ContactContent lang={lang} dict={dict} />;
}
