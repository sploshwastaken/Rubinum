import { Metadata } from "next";
import CareerContent from "./CareerContent";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Careers | Rubinum",
  description: "Join the Rubinum collective. We are looking for engineers, designers, and visionaries to build the future of digital infrastructure.",
  alternates: {
    canonical: "https://rubinum.com/career",
  },
  openGraph: {
    title: "Join Rubinum | Build the Future",
    description: "Work on the bleeding edge of technology. Remote-first, AI-driven, and limitless potential.",
    url: "https://rubinum.com/career",
  },
};

export default async function CareerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <CareerContent lang={lang} dict={dict} />;
}
