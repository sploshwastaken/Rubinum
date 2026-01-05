'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Zap, BarChart3, Users, Layers } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function About({ lang, dict }: { lang: string, dict: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { label: dict.home.about.stats.projects, value: "124+", icon: Layers, color: "text-blue-400" },
    { label: dict.home.about.stats.team, value: "45+", icon: Users, color: "text-purple-400" },
    { label: dict.home.about.stats.satisfaction, value: "99%", icon: BarChart3, color: "text-emerald-400" }
  ];

  const features = [
    { 
      title: dict.home.about.features.vision.title, 
      desc: dict.home.about.features.vision.desc,
      icon: Globe,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    { 
      title: dict.home.about.features.excellence.title, 
      desc: dict.home.about.features.excellence.desc,
      icon: Code2,
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    { 
      title: dict.home.about.features.design.title, 
      desc: dict.home.about.features.design.desc,
      icon: Cpu,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];
  
  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="h-px w-8 md:w-12 bg-blue-500"></span>
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-blue-400 uppercase">
                  {dict.home.about.label}
                </h2>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                {dict.home.about.title_prefix} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                  {dict.home.about.title_suffix}
                </span>
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed">
                {dict.home.about.description}
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                {features.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className={cn("mt-1 p-1.5 md:p-2 rounded-lg border transition-colors shrink-0", item.color)}>
                      <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">{item.title}</h4>
                      <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link href={lang === 'en' ? '/about' : `/${lang}/about`} className="block w-full sm:w-auto">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm md:text-base">
                  <span>{dict.home.about.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              style={{ y }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={cn(
                    "p-6 md:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 hover:bg-zinc-900/80 transition-colors",
                    index === 0 ? "sm:col-span-2" : ""
                  )}
                >
                  <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4", stat.color)}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
