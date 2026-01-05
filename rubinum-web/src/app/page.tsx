import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { Careers } from "@/components/home/Careers";
import { CinematicBackground } from "@/components/home/CinematicBackground";
import { UnifiedSections } from "@/components/home/UnifiedSections";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 relative selection:bg-blue-500/30">
      <CinematicBackground />
      
      {/* Global Cinematic Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-repeat w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <Hero />
      <UnifiedSections>
        <About />
        <Products />
        <Services />
        <Careers />
      </UnifiedSections>
    </div>
  );
}
