'use client';

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Lightbulb, Globe, Code2, Cpu, Zap, Award, Layers, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
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

const stats = [
  { label: "Years of Innovation", value: "05+", icon: Award, color: "text-orange-400" },
  { label: "Global Projects", value: "120+", icon: Globe, color: "text-blue-400" },
  { label: "Team Members", value: "45+", icon: Users, color: "text-purple-400" },
  { label: "Lines of Code", value: "2M+", icon: Code2, color: "text-emerald-400" }
];

const values = [
  {
    title: "Visionary Thinking",
    desc: "We don't just solve problems; we anticipate the future needs of the digital ecosystem.",
    icon: Lightbulb,
    color: "orange" as const
  },
  {
    title: "Precision Engineering",
    desc: "Every line of code is crafted with the accuracy of a Swiss watch and the power of a jet engine.",
    icon: Cpu,
    color: "blue" as const
  },
  {
    title: "Unbreakable Security",
    desc: "We build fortresses, not just applications. Security is woven into our DNA.",
    icon: ShieldCheck,
    color: "purple" as const
  }
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  return (
    <div className="bg-[#030303] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-hidden" ref={containerRef}>
      
      {/* --- Hero Section --- */}
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
              <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">System Identity</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8">
              We Are The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                Neural Network
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Rubinum is a collective of engineers, designers, and strategists building the digital infrastructure of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="relative z-10 py-12 md:py-20 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={cn("w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-xl bg-white/5 flex items-center justify-center", stat.color.replace('text-', 'bg-').replace('400', '500/10'))}>
                  <stat.icon className={cn("w-5 h-5 md:w-6 md:h-6", stat.color)} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</h3>
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Manifesto Section --- */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-4 md:mb-6">
                Our Manifesto
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                We believe in code that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  breathes and evolves.
                </span>
              </h3>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-400 leading-relaxed">
                <p>
                  In a world saturated with static software, we build living systems. We believe that technology should not just be a tool, but an extension of human capability.
                </p>
                <p>
                  Our approach is rooted in "Neural Infrastructure" — a design philosophy that treats every application as a connected node in a larger intelligence network. We don't just write code; we architect ecosystems.
                </p>
                <p>
                  From the smallest micro-interaction to the most complex cloud architecture, every detail is meticulously crafted to ensure performance, scalability, and beauty.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <div className="relative rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-6 md:p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500" />
                <div className="font-mono text-xs md:text-sm text-gray-400 space-y-2 overflow-x-auto">
                  <div className="flex gap-2">
                    <span className="text-purple-400">class</span>
                    <span className="text-yellow-200">Rubinum</span>
                    <span className="text-white">{`{`}</span>
                  </div>
                  <div className="pl-4 flex gap-2">
                    <span className="text-blue-400">constructor</span>
                    <span className="text-white">() {`{`}</span>
                  </div>
                  <div className="pl-8 whitespace-nowrap">
                    <span className="text-blue-300">this</span>.<span className="text-white">mission</span> = <span className="text-green-400">"Redefine Digital"</span>;
                  </div>
                  <div className="pl-8 whitespace-nowrap">
                    <span className="text-blue-300">this</span>.<span className="text-white">passion</span> = <span className="text-green-400">"Limitless"</span>;
                  </div>
                  <div className="pl-8 whitespace-nowrap">
                    <span className="text-blue-300">this</span>.<span className="text-white">stack</span> = [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Rust"</span>, <span className="text-green-400">"AI"</span>];
                  </div>
                  <div className="pl-4 text-white">{`}`}</div>
                  <div className="pl-4 flex gap-2">
                    <span className="text-blue-400">deploy</span>
                    <span className="text-white">() {`{`}</span>
                  </div>
                  <div className="pl-8 whitespace-nowrap">
                    <span className="text-purple-400">return</span> <span className="text-blue-300">new</span> <span className="text-yellow-200">Future</span>();
                  </div>
                  <div className="pl-4 text-white">{`}`}</div>
                  <div className="text-white">{`}`}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="relative z-10 py-20 md:py-24 px-4 md:px-6 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Core DNA</h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              The fundamental principles that guide every decision, every line of code, and every pixel we craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <GlowingCard key={index} color={value.color} className="p-6 md:p-8 h-full">
                <div className={cn("w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 bg-white/5 border border-white/10")}>
                  <value.icon className={cn("w-6 h-6 md:w-7 md:h-7", 
                    value.color === 'blue' ? 'text-blue-400' : 
                    value.color === 'purple' ? 'text-purple-400' : 'text-orange-400'
                  )} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="relative z-10 py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Ready to build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Impossible?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
            Join us on our journey to architect the future. Whether you are a client or a creator, there is a place for you in the network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/career" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center">
              Join the Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
