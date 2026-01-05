'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  const [stars1, setStars1] = useState<Array<{ top: string; left: string; size: string }>>([]);
  const [stars2, setStars2] = useState<Array<{ top: string; left: string; size: string }>>([]);
  const [beams, setBeams] = useState<Array<{ duration: number; delay: number }>>([]);

  useEffect(() => {
    setIsMounted(true);
    setStars1(Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 120 - 10}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2}px`
    })));
    setStars2(Array.from({ length: 20 }).map(() => ({
      top: `${Math.random() * 120 - 10}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`
    })));
    setBeams(Array.from({ length: 4 }).map((_, i) => ({
      duration: Math.random() * 5 + 5,
      delay: i * 2
    })));
  }, []);

  // Parallax layers
  const yStars1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yStars2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Fade in/out logic - Adjusted to be visible earlier and stay visible
  const opacity = useTransform(scrollYProgress, [0, 0.01, 0.99, 1], [1, 1, 1, 1]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 z-[-1] bg-[#030303] overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0"
        >
        {/* 1. Deep Atmospheric Glows (Nebula) */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen"
        />

        {/* 2. The Grid (Perspective Floor) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />

        {/* 3. Starfield Layers */}
        <motion.div style={{ y: yStars1 }} className="absolute inset-0">
          {stars1.map((star, i) => (
            <div
              key={`s1-${i}`}
              className="absolute bg-white/20 rounded-full"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </motion.div>

        <motion.div style={{ y: yStars2 }} className="absolute inset-0">
          {stars2.map((star, i) => (
            <div
              key={`s2-${i}`}
              className="absolute bg-blue-400/30 rounded-full blur-[1px]"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </motion.div>

        {/* 4. Vertical Data Beams */}
        <div className="absolute inset-0 flex justify-between px-20 opacity-10">
          {beams.map((beam, i) => (
            <motion.div
              key={`beam-${i}`}
              className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
              animate={{ opacity: [0.2, 0.5, 0.2], height: ['100%', '120%', '100%'] }}
              transition={{ duration: beam.duration, repeat: Infinity, delay: beam.delay }}
            />
          ))}
        </div>

        {/* 5. Digital Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
        </motion.div>
      </div>
    </div>
  );
}
