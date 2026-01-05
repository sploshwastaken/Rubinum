import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { Careers } from "@/components/home/Careers";
import { CinematicBackground } from "@/components/home/CinematicBackground";
import { UnifiedSections } from "@/components/home/UnifiedSections";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Rubinum | Home",
  description: "Welcome to Rubinum. We build living systems and neural infrastructure for the digital age.",
  alternates: {
    canonical: "https://rubinum.com",
  },
};

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col gap-0 relative selection:bg-blue-500/30">
      <CinematicBackground />
      
      {/* Global Cinematic Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-repeat w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <Hero lang={lang} dict={dict} />
      <UnifiedSections>
        <About lang={lang} dict={dict} />
        <Services lang={lang} dict={dict} />
        <Products lang={lang} dict={dict} />
        <Careers lang={lang} dict={dict} />
      </UnifiedSections>
    </div>
  );
}
