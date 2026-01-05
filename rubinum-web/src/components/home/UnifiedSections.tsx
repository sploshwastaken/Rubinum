'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function UnifiedSections({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Dynamic Gradient Colors - Bringing back the theme colors
  const blob1Color = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [
      "rgba(59, 130, 246, 0.15)", // Blue
      "rgba(147, 51, 234, 0.15)", // Purple
      "rgba(236, 72, 153, 0.15)", // Pink
      "rgba(249, 115, 22, 0.15)", // Orange
      "rgba(59, 130, 246, 0.15)"  // Blue
    ]
  );
  
  const blob2Color = useTransform(scrollYProgress, 
    [0, 0.25, 0.5, 0.75, 1], 
    [
      "rgba(147, 51, 234, 0.15)", // Purple
      "rgba(236, 72, 153, 0.15)", // Pink
      "rgba(59, 130, 246, 0.15)", // Blue
      "rgba(16, 185, 129, 0.15)", // Emerald
      "rgba(147, 51, 234, 0.15)"  // Purple
    ]
  );

  // Parallax effects for floating symbols
  // Layer 1 (Fastest, Front)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  
  // Layer 2 (Medium)
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  
  // Layer 3 (Slowest, Back)
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Scroll-driven grid movement
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none bg-[#020202]">
        
        {/* Gradient Blobs - Restored for theme consistency */}
        <motion.div 
          style={{ backgroundColor: blob1Color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          style={{ backgroundColor: blob2Color }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen" 
        />

        {/* Moving Grid Background - Increased Opacity */}
        <motion.div 
          className="absolute -inset-[100%]"
          style={{ 
            backgroundPosition: "center",
            backgroundSize: "100px 100px",
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            y: gridY,
            rotateX: "20deg", // Slight 3D perspective
            scale: 1.5,
          }} 
        />
        
        {/* Radial Mask for depth - Adjusted to show more grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)]" />

        {/* Scroll-Driven Data Lines (Horizontal) */}
        <motion.div 
          style={{ 
            left: 0, 
            right: 0, 
            top: "25%", 
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)",
            scaleX: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.5, 0]),
            opacity: 0.4
          }} 
          className="absolute"
        />
         <motion.div 
          style={{ 
            left: 0, 
            right: 0, 
            top: "75%", 
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
            scaleX: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.5]),
            opacity: 0.3
          }} 
          className="absolute"
        />

        {/* Layer 3: Background Symbols (Small, Slow, Many) */}
        <motion.div style={{ y: y3, opacity: 0.1 }} className="absolute top-[10%] left-[20%] text-4xl font-mono text-white/20 font-bold select-none">;</motion.div>
        <motion.div style={{ y: y3, opacity: 0.1 }} className="absolute top-[30%] right-[10%] text-4xl font-mono text-white/20 font-bold select-none">*</motion.div>
        <motion.div style={{ y: y3, opacity: 0.1 }} className="absolute bottom-[15%] left-[30%] text-4xl font-mono text-white/20 font-bold select-none">_</motion.div>
        <motion.div style={{ y: y3, opacity: 0.1 }} className="absolute top-[50%] right-[40%] text-3xl font-mono text-white/20 font-bold select-none">&&</motion.div>

        {/* Layer 2: Midground Symbols (Medium, Normal Speed) */}
        <motion.div style={{ y: y2, rotate: rotate3, opacity: 0.15 }} className="absolute top-[40%] left-[5%] text-6xl font-mono text-cyan-500/30 font-bold select-none">{`//`}</motion.div>
        <motion.div style={{ y: y2, rotate: -15, opacity: 0.15 }} className="absolute top-[15%] right-[25%] text-6xl font-mono text-indigo-500/30 font-bold select-none">{`[]`}</motion.div>
        <motion.div style={{ y: y2, opacity: 0.15 }} className="absolute bottom-[30%] right-[5%] text-6xl font-mono text-emerald-500/30 font-bold select-none">{`!=`}</motion.div>

        {/* Layer 1: Foreground Symbols (Large, Fast, Blurry) */}
        <motion.div style={{ y: y1, rotate: rotate1, x: 50, opacity: 0.2, filter: 'blur(2px)' }} className="absolute top-[20%] left-[10%] text-8xl font-mono text-blue-500/40 font-bold select-none">{`{ }`}</motion.div>
        <motion.div style={{ y: y1, rotate: rotate2, x: -50, opacity: 0.15, filter: 'blur(3px)' }} className="absolute top-[60%] right-[15%] text-9xl font-mono text-purple-500/40 font-bold select-none">{`</>`}</motion.div>
        <motion.div style={{ y: y1, rotate: rotate1, opacity: 0.15, filter: 'blur(1px)' }} className="absolute bottom-[10%] left-[20%] text-7xl font-mono text-blue-400/40 font-bold select-none">{`=>`}</motion.div>

        {/* Digital Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}
