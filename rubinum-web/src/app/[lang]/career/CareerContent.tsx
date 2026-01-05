'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Briefcase, 
  Code2, 
  Terminal, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Upload,
  User,
  Mail,
  Linkedin,
  Github
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

function JobCard({ position, onClick, applyText }: { position: any, onClick: () => void, applyText: string }) {
  const Icon = position.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-zinc-900/80 cursor-pointer",
        position.border
      )}
      onClick={onClick}
    >
      {/* Hover Gradient */}
      <div className={cn(
        "absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl",
        position.gradient
      )} />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className={cn(
            "w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500",
            position.color
          )}>
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-400 border border-white/10 backdrop-blur-sm">
            {position.type}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
          {position.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {position.description}
        </p>

        <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
          {applyText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function CareerContent({ lang, dict }: { lang: string, dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  const positions = [
    {
      title: dict.career.positions.p1_title,
      type: "Remote",
      department: "Engineering",
      icon: Code2,
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "group-hover:border-blue-500/50",
      description: dict.career.positions.p1_desc
    },
    {
      title: dict.career.positions.p2_title,
      type: "Hybrid",
      department: "R&D",
      icon: Sparkles,
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "group-hover:border-purple-500/50",
      description: dict.career.positions.p2_desc
    },
    {
      title: dict.career.positions.p3_title,
      type: "Remote",
      department: "Infrastructure",
      icon: Terminal,
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "group-hover:border-emerald-500/50",
      description: dict.career.positions.p3_desc
    },
    {
      title: dict.career.positions.p4_title,
      type: "On-site",
      department: "Design",
      icon: Cpu,
      color: "text-orange-400",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "group-hover:border-orange-500/50",
      description: dict.career.positions.p4_desc
    }
  ];

  const scrollToForm = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-hidden" ref={containerRef}>
      
      {/* --- Hero Section --- */}
      <section className="relative z-10 pt-24 pb-20 px-4 md:px-6 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden">
        {/* --- Background System --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="absolute top-[-10%] left-[-10%] w-200 h-200 bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute top-[40%] left-[30%] w-125 h-125 bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">{dict.career.badge}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8">
              {dict.career.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-orange-500">
                {dict.career.title_suffix}
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              {dict.career.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Positions Grid --- */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <JobCard 
                key={index} 
                position={position} 
                onClick={() => scrollToForm(position.title)}
                applyText={dict.career.apply}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Application Form Section --- */}
      <section ref={formRef} className="relative z-10 py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{dict.career.form.title}</h2>
                <p className="text-gray-400">
                  {dict.career.form.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{dict.career.form.remote_title}</h4>
                    <p className="text-sm text-gray-500">{dict.career.form.remote_desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{dict.career.form.tech_title}</h4>
                    <p className="text-sm text-gray-500">{dict.career.form.tech_desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl p-6 md:p-10 overflow-hidden">
                {/* Form Glow Effect */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-100 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{dict.career.form.success_title}</h3>
                    <p className="text-gray-400 max-w-xs">{dict.career.form.success_desc}</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {dict.career.form.submit_another}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.full_name}</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            required
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300" 
                            placeholder="John Doe" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.email}</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            required
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300" 
                            placeholder="john@example.com" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.position}</label>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <select 
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 appearance-none"
                          value={selectedPosition}
                          onChange={(e) => setSelectedPosition(e.target.value)}
                        >
                          <option className="bg-zinc-900" value="">{dict.career.form.select_position}</option>
                          {positions.map((p, i) => (
                            <option key={i} className="bg-zinc-900" value={p.title}>{p.title}</option>
                          ))}
                          <option className="bg-zinc-900" value="General Application">{dict.career.form.general_application}</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.linkedin}</label>
                        <div className="relative">
                          <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            type="url" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300" 
                            placeholder="linkedin.com/in/..." 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.github}</label>
                        <div className="relative">
                          <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            type="url" 
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300" 
                            placeholder="github.com/..." 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">{dict.career.form.cover_letter}</label>
                      <textarea 
                        required
                        rows={4} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300 resize-none" 
                        placeholder={dict.career.form.cover_letter_placeholder}
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-600 via-purple-600 to-orange-600 p-px transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
                    >
                      <div className="relative h-full w-full bg-black/50 backdrop-blur-sm rounded-xl px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                        <div className="flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                          {formState === 'submitting' ? (
                            <span className="animate-pulse">{dict.career.form.submitting}</span>
                          ) : (
                            <>
                              {dict.career.form.submit_btn} <Upload className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
