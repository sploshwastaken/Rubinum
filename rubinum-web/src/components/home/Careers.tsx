'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const positions = [
  {
    title: "Senior Full Stack Engineer",
    type: "Remote",
    department: "Engineering",
    icon: Code2,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "AI Research Scientist",
    type: "Hybrid",
    department: "R&D",
    icon: Sparkles,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "DevOps Architect",
    type: "Remote",
    department: "Infrastructure",
    icon: Terminal,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Product Designer",
    type: "On-site",
    department: "Design",
    icon: Cpu, // Using Cpu as a placeholder abstract icon
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export function Careers() {
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
              Careers
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              Join the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Collective
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
            We are looking for visionaries who want to shape the future of digital technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {positions.map((position, index) => (
            <Link href="/career" key={index} className="block">
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
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
                  position.gradient
                )} />

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={cn(
                    "w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-white/10",
                    position.color
                  )}>
                    <position.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                      {position.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{position.department}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-600" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-all group-hover:rotate-[-45deg]">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/career">
            <button className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
              View all open positions <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
