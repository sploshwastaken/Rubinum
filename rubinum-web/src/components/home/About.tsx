'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Globe, Zap, BarChart3, Users, Layers } from 'lucide-react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const stats = [
  { label: "Active Projects", value: "124+", icon: Layers, color: "text-blue-400" },
  { label: "Team Members", value: "45+", icon: Users, color: "text-purple-400" },
  { label: "Client Satisfaction", value: "99%", icon: BarChart3, color: "text-emerald-400" }
];

const features = [
  { 
    title: "Strategic Vision", 
    desc: "We don't just build; we plan for the decade ahead.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  { 
    title: "Engineering Excellence", 
    desc: "Code that is as beautiful as it is functional.",
    icon: Code2,
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  { 
    title: "Human-Centric Design", 
    desc: "Technology that feels natural and empowering.",
    icon: Cpu,
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section id="about" ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="h-[1px] w-12 bg-blue-500"></span>
                <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase">
                  Who We Are
                </h2>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Architects of the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Digital Renaissance
                </span>
              </h3>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Rubinum isn't just a software company. We are a collective of visionaries, engineers, and artists. We believe that true innovation happens at the intersection of rigorous engineering and boundless creativity.
              </p>
              
              <div className="space-y-4 mb-12">
                {features.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <div className={cn("mt-1 p-2 rounded-lg border transition-colors", item.color)}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="group flex items-center gap-2 text-white px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                <span>Read our Manifesto</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="lg:w-1/2 relative perspective-1000">
            <motion.div style={{ y, rotateY: -10, rotateX: 5 }} className="relative z-10">
              {/* Main Glass Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
                {/* Header Bar */}
                <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 text-xs text-gray-500 font-mono">rubinum_core_system.tsx</div>
                </div>

                {/* Content Area */}
                <div className="p-8 relative">
                  {/* Code/Grid Background Effect */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Abstract Visualization */}
                    <div className="flex justify-between items-end">
                      <div className="space-y-2">
                        <div className="text-xs text-blue-400 font-mono mb-2">SYSTEM STATUS</div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-emerald-500 font-mono text-sm">OPERATIONAL</span>
                        </div>
                      </div>
                      <Zap className="w-12 h-12 text-white/10" />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, i) => (
                        <div key={i} className={cn("p-4 rounded-xl bg-black/20 border border-white/5", i === 2 ? "col-span-2" : "")}>
                          <div className="flex items-center justify-between mb-2">
                            <stat.icon className={cn("w-5 h-5", stat.color)} />
                            <span className="text-xs text-gray-500 font-mono">0{i+1}</span>
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Code Snippet */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-gray-400 overflow-hidden">
                      <div className="flex gap-2">
                        <span className="text-blue-400">const</span>
                        <span className="text-yellow-400">future</span>
                        <span className="text-white">=</span>
                        <span className="text-purple-400">await</span>
                        <span className="text-blue-400">build</span>
                        <span className="text-white">({' {'}</span>
                      </div>
                      <div className="pl-4 text-gray-500">
                        vision: <span className="text-green-400">true</span>,
                      </div>
                      <div className="pl-4 text-gray-500">
                        limits: <span className="text-red-400">null</span>
                      </div>
                      <div className="text-white">{'}'});</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements behind */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
