'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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

  // Generate random stars for the background
  const [stars, setStars] = useState<Array<{id: number, top: string, left: string, size: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    setStars(Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    })));
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none bg-[#020202]">
        
        {/* Starfield Effect */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient Blobs - Restored for theme consistency */}
        <motion.div 
          style={{ backgroundColor: blob1Color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2], // Slightly reduced opacity for better text contrast
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-200 h-200 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          style={{ backgroundColor: blob2Color }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2], // Slightly reduced opacity
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] left-[-10%] w-200 h-200 rounded-full blur-[120px] mix-blend-screen" 
        />

        {/* Moving Grid Background - Enhanced */}
        <motion.div 
          className="absolute -inset-full"
          style={{ 
            backgroundPosition: "center",
            backgroundSize: "60px 60px", // Smaller grid cells
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            y: gridY,
            rotateX: "20deg", // Slight 3D perspective
            scale: 1.5,
          }} 
        />
        
        {/* Radial Mask for depth - Adjusted to show more grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)]" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

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
        <motion.div style={{ y: y3, opacity: 0.08 }} className="absolute top-[15%] left-[60%] text-2xl font-mono text-white/20 font-bold select-none">::</motion.div>
        <motion.div style={{ y: y3, opacity: 0.08 }} className="absolute bottom-[40%] left-[10%] text-3xl font-mono text-white/20 font-bold select-none">()</motion.div>
        <motion.div style={{ y: y3, opacity: 0.08 }} className="absolute top-[5%] right-[30%] text-2xl font-mono text-white/20 font-bold select-none">#</motion.div>
        <motion.div style={{ y: y3, opacity: 0.08 }} className="absolute bottom-[20%] right-[20%] text-3xl font-mono text-white/20 font-bold select-none">?</motion.div>
        <motion.div style={{ y: y3, opacity: 0.08 }} className="absolute top-[80%] left-[50%] text-2xl font-mono text-white/20 font-bold select-none">0x</motion.div>

        {/* Layer 2: Midground Symbols (Medium, Normal Speed) */}
        <motion.div style={{ y: y2, rotate: rotate3, opacity: 0.15 }} className="absolute top-[40%] left-[5%] text-6xl font-mono text-cyan-500/30 font-bold select-none">{`//`}</motion.div>
        <motion.div style={{ y: y2, rotate: -15, opacity: 0.15 }} className="absolute top-[15%] right-[25%] text-6xl font-mono text-indigo-500/30 font-bold select-none">{`[]`}</motion.div>
        <motion.div style={{ y: y2, opacity: 0.15 }} className="absolute bottom-[30%] right-[5%] text-6xl font-mono text-emerald-500/30 font-bold select-none">{`!=`}</motion.div>
        <motion.div style={{ y: y2, rotate: 10, opacity: 0.12 }} className="absolute top-[60%] left-[15%] text-5xl font-mono text-purple-500/30 font-bold select-none">await</motion.div>
        <motion.div style={{ y: y2, rotate: -5, opacity: 0.12 }} className="absolute bottom-[10%] right-[40%] text-5xl font-mono text-pink-500/30 font-bold select-none">npm</motion.div>
        <motion.div style={{ y: y2, rotate: 20, opacity: 0.12 }} className="absolute top-[25%] left-[40%] text-5xl font-mono text-blue-500/30 font-bold select-none">git</motion.div>
        <motion.div style={{ y: y2, rotate: -10, opacity: 0.12 }} className="absolute top-[70%] right-[30%] text-5xl font-mono text-orange-500/30 font-bold select-none">sudo</motion.div>
        <motion.div style={{ y: y2, rotate: 5, opacity: 0.12 }} className="absolute bottom-[50%] left-[80%] text-5xl font-mono text-green-500/30 font-bold select-none">fn</motion.div>

        {/* Layer 1: Foreground Symbols (Large, Fast, Blurry) */}
        <motion.div style={{ y: y1, rotate: rotate1, x: 50, opacity: 0.2, filter: 'blur(2px)' }} className="absolute top-[20%] left-[10%] text-8xl font-mono text-blue-500/40 font-bold select-none">{`{ }`}</motion.div>
        <motion.div style={{ y: y1, rotate: rotate2, x: -50, opacity: 0.15, filter: 'blur(3px)' }} className="absolute top-[60%] right-[15%] text-9xl font-mono text-purple-500/40 font-bold select-none">{`</>`}</motion.div>
        <motion.div style={{ y: y1, rotate: rotate1, opacity: 0.15, filter: 'blur(1px)' }} className="absolute bottom-[10%] left-[20%] text-7xl font-mono text-blue-400/40 font-bold select-none">{`=>`}</motion.div>
        <motion.div style={{ y: y1, rotate: rotate2, x: 20, opacity: 0.1, filter: 'blur(2px)' }} className="absolute top-[35%] right-[5%] text-8xl font-mono text-red-500/40 font-bold select-none">404</motion.div>
        <motion.div style={{ y: y1, rotate: -rotate1, x: -20, opacity: 0.1, filter: 'blur(2px)' }} className="absolute bottom-[40%] left-[5%] text-8xl font-mono text-yellow-500/40 font-bold select-none">NaN</motion.div>
        <motion.div style={{ y: y1, rotate: rotate3, opacity: 0.1, filter: 'blur(1px)' }} className="absolute top-[5%] left-[40%] text-7xl font-mono text-cyan-500/40 font-bold select-none">null</motion.div>

        {/* Digital Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}
