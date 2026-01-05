'use client';

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Shield, Zap, Activity, Server, Lock, Terminal, Code2, Globe, Database, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

function GlowingCard({ children, className, color = "blue" }: { children: React.ReactNode, className?: string, color?: "blue" | "purple" | "orange" | "emerald" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const colors = {
    blue: "from-blue-500/20 to-cyan-500/20",
    purple: "from-purple-500/20 to-pink-500/20",
    orange: "from-orange-500/20 to-red-500/20",
    emerald: "from-emerald-500/20 to-teal-500/20"
  };

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.15)",
    purple: "rgba(168, 85, 247, 0.15)",
    orange: "rgba(249, 115, 22, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)"
  };

  return (
    <div 
      className={cn(
        "relative group rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${glowColors[color]},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full z-10">
        {children}
      </div>
    </div>
  );
}

function TechBadge({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 hover:bg-white/10 hover:text-white transition-colors cursor-default">
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </div>
  );
}

// --- Main Page Component ---

export default function TechnologyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-4 md:px-6 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* --- Background System --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }} />
        </div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">Our Tech Stack</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8">
              Powered By <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                Intelligence
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              We leverage the most advanced technologies to build scalable, secure, and high-performance digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Core (Blue) */}
      <section className="min-h-screen flex items-center relative py-20 md:py-24 z-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <GlowingCard color="blue" className="aspect-square max-w-xl mx-auto p-8 md:p-12 flex items-center justify-center bg-black/40">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Chip */}
                <div className="relative z-20 w-32 h-32 md:w-40 md:h-40 bg-black border border-blue-500/30 rounded-3xl flex items-center justify-center shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)]">
                  <Cpu className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />
                  <div className="absolute inset-0 border border-blue-400/20 rounded-3xl animate-pulse" />
                  
                  {/* Corner Accents */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-blue-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-blue-500" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-blue-500" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-blue-500" />
                </div>
                
                {/* Orbiting Data Rings */}
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="absolute border border-blue-500/10 rounded-full"
                    style={{ 
                      width: `${140 + i * 50}px`, 
                      height: `${140 + i * 50}px`,
                      animation: `spin ${10 + i * 5}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                  </div>
                ))}
              </div>
            </GlowingCard>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-blue-400 uppercase">
                  The Core
                </h2>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Quantum<br/>Processing Unit
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Our proprietary core architecture handles millions of operations per second with near-zero latency. It's not just fast; it's predictive, adapting to load before it happens.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">0.01<span className="text-base md:text-lg text-gray-500 font-normal">ms</span></div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Latency</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.99<span className="text-base md:text-lg text-gray-500 font-normal">%</span></div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <TechBadge icon={Code2} label="Rust Core" />
                <TechBadge icon={Activity} label="Real-time" />
                <TechBadge icon={Database} label="Distributed" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Security (Purple) */}
      <section className="min-h-screen flex items-center relative py-20 md:py-24 z-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-purple-400 uppercase">
                  Security Layer
                </h2>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Hermetic<br/>Encryption
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Your data is encapsulated in a cryptographic vault. We employ military-grade encryption standards that evolve in real-time to counter emerging threats.
              </p>
              
              <div className="space-y-4 mb-8">
                {['End-to-End Encryption', 'Biometric Authentication', 'Zero-Knowledge Proofs'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,1)]" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="order-2">
            <GlowingCard color="purple" className="aspect-video max-w-xl mx-auto p-8 flex items-center justify-center overflow-hidden bg-black/40">
               <div className="relative z-10">
                 <Shield className="w-32 h-32 md:w-48 md:h-48 text-purple-500/10" />
                 <Lock className="w-12 h-12 md:w-16 md:h-16 text-purple-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               </div>
               
               {/* Scanning Effect */}
               <motion.div 
                 className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/20 to-transparent h-[20%]"
                 animate={{ top: ['-20%', '120%'] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               
               {/* Hex Grid Pattern */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
               <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_at_center,black,transparent)]" />
            </GlowingCard>
          </div>
        </div>
      </section>

      {/* Section 3: The Engine (Orange) */}
      <section className="min-h-screen flex items-center relative py-20 md:py-24 z-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <GlowingCard color="orange" className="aspect-4/5 max-w-md mx-auto p-8 flex items-center justify-center bg-black/40">
               <div className="relative w-full h-full flex items-center justify-center">
                  {/* Rotating Rings */}
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      className="absolute rounded-full border border-orange-500/20 border-dashed"
                      style={{ 
                        width: `${80 + i * 60}px`, 
                        height: `${80 + i * 60}px`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20 - i * 5, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  
                  <div className="relative z-10 bg-linear-to-br from-orange-500 to-red-600 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(239,68,68,0.4)] animate-pulse">
                    <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
               </div>
            </GlowingCard>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Activity className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-orange-400 uppercase">
                  The Engine
                </h2>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Hyper<br/>Automation
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                The engine that never sleeps. Our autonomous systems monitor, optimize, and execute complex workflows with surgical precision, freeing your team to focus on innovation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Self-Optimizing
                </div>
                <div className="px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Auto-Scaling
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Interface (Emerald) */}
      <section className="min-h-screen flex items-center relative py-20 md:py-24 z-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <Layers className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-emerald-400 uppercase">
                  Interface
                </h2>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Total<br/>Control
              </h3>
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
                Power is nothing without control. Our glass-morphic interface provides a unified view of your entire digital ecosystem, accessible from anywhere in the world.
              </p>
              
              <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Initialize Demo</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
          </div>

          <div className="order-2">
            <div className="relative h-96 md:h-125 w-full perspective-1000">
               {/* Floating Interface Cards */}
               <motion.div 
                 className="absolute top-10 right-4 md:right-10 w-64 md:w-72 bg-zinc-900/90 border border-emerald-500/30 rounded-2xl backdrop-blur-xl p-6 shadow-2xl z-20"
                 animate={{ y: [0, -15, 0], rotateY: -10 }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               >
                 <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
                   <div className="w-3 h-3 rounded-full bg-green-500" />
                   <span className="ml-auto text-xs font-mono text-emerald-500">LIVE</span>
                 </div>
                 <div className="space-y-3 font-mono text-xs text-emerald-400/80">
                   <div>{`> System.init()`}</div>
                   <div>{`> Loading modules...`}</div>
                   <div className="text-white">{`> Core: ONLINE`}</div>
                   <div className="text-white">{`> Security: ACTIVE`}</div>
                 </div>
               </motion.div>

               <motion.div 
                 className="absolute bottom-20 left-4 md:left-10 w-72 md:w-80 bg-zinc-900/90 border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-2xl z-10"
                 animate={{ y: [0, 15, 0], rotateY: 10 }}
                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               >
                 <div className="flex justify-between items-center mb-6">
                   <span className="text-xs text-gray-500 uppercase font-bold">Resource Usage</span>
                   <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Optimal</span>
                 </div>
                 <div className="flex items-end gap-2 h-32">
                   {[40, 70, 50, 90, 60, 80, 45, 75].map((h, i) => (
                     <div key={i} className="flex-1 bg-emerald-500/20 rounded-t relative group overflow-hidden">
                        <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute bottom-0 left-0 right-0 bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"
                        />
                     </div>
                   ))}
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
