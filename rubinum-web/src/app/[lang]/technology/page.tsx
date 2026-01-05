import { Metadata } from "next";
// Import the client component
import TechnologyContent from "./TechnologyContent";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Technology | Rubinum",
  description: "Explore the neural infrastructure behind Rubinum. Quantum processing, hermetic security, and hyper-automation.",
  alternates: {
    canonical: "https://rubinum.com/technology",
  },
  openGraph: {
    title: "Rubinum Technology | The Core",
    description: "Deep dive into our tech stack. Rust, AI, and distributed systems engineered for perfection.",
    url: "https://rubinum.com/technology",
  },
};

export default async function TechnologyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  return <TechnologyContent lang={lang} dict={dict} />;
}
