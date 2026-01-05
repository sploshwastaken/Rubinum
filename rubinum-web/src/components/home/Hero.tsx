'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typewriter Effect State
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["Evolution Partner", "Cloud Architect", "AI Innovator", "Growth Engine"];

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const type = () => {
      setText(prev => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    };

    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex(prev => prev + 1);
      timer = setTimeout(type, 200);
    } else {
      // Typing or deleting
      timer = setTimeout(type, isDeleting ? 50 : 150);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Stars / Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        {/* Zeabur-like Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Star Field Effect (CSS based simple stars) */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }} />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="container relative z-10 px-6 text-center"
      >
        {/* Badge */}
        <Link href="/technology">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-gray-300">Introducing Rubinum AI 2.0</span>
            <ArrowRight className="w-3 h-3 text-gray-400" />
          </motion.div>
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-tight"
        >
          Your Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
            {text}
            <span className="inline-block w-[3px] h-[0.8em] bg-white ml-2 animate-cursor-blink align-bottom mb-1"></span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Rubinum handles your entire digital infrastructure. From cloud architecture to AI-driven development, we are the engine behind your growth.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            <button className="relative px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-gray-100 transition-all">
              Start Building <Sparkles className="w-4 h-4" />
            </button>
          </div>
          <button className="px-8 py-4 text-white border border-white/10 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
            View Documentation
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
