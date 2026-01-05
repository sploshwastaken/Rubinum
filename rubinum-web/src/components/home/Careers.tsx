'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Careers({ lang, dict }: { lang: string, dict: any }) {
  const positions = [
    {
      title: dict.home.careers.positions.fullstack.title,
      type: "Remote",
      department: dict.home.careers.positions.fullstack.dept,
      icon: Code2,
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50"
    },
    {
      title: dict.home.careers.positions.ai.title,
      type: "Hybrid",
      department: dict.home.careers.positions.ai.dept,
      icon: Sparkles,
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50"
    },
    {
      title: dict.home.careers.positions.devops.title,
      type: "Remote",
      department: dict.home.careers.positions.devops.dept,
      icon: Terminal,
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "group-hover:border-emerald-500/50"
    },
    {
      title: dict.home.careers.positions.design.title,
      type: "On-site",
      department: dict.home.careers.positions.design.dept,
      icon: Cpu, // Using Cpu as a placeholder abstract icon
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50"
    }
  ];

  return (
    <section id="careers" className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto"
          >
            <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-4 md:mb-6">
              {dict.home.careers.label}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              {dict.home.careers.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                {dict.home.careers.title_suffix}
              </span>
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-md mt-6 md:mt-0 text-base md:text-lg"
          >
            {dict.home.careers.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {positions.map((position, index) => (
            <Link href={lang === 'en' ? '/career' : `/${lang}/career`} key={index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-zinc-900/80",
                  position.border
                )}
              >
                {/* Hover Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  position.gradient
                )} />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn("p-3 rounded-xl bg-white/5 border border-white/10", position.color)}>
                      <position.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{position.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>{position.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-600" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-full border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
