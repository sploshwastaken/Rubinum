'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare, Github, Twitter, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Components ---

function SocialButton({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a 
      href={href} 
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 group"
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}

function ContactInfoItem({ icon: Icon, title, value, subValue }: { icon: any, title: string, value: string, subValue: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-colors">
        <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className="text-gray-300 font-medium">{value}</p>
        <p className="text-gray-500 text-sm mt-1">{subValue}</p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => setFormState('success'), 1500);
  };
  
  return (
    <div className="relative bg-[#030303] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-hidden" ref={containerRef}>
      
      {/* --- Background System (Fixed for Continuity) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        {/* Zeabur-like Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Star Field */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.1 }} />
      </div>

      {/* --- Hero Section --- */}
      <section className="relative z-10 pt-24 pb-20 px-4 md:px-6 min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden">
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
              <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                The Future
              </span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to start your next project? We are here to help you turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <div className="relative z-10 container mx-auto px-6 pb-24">
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-8">
              <ContactInfoItem 
                icon={Mail} 
                title="Email Us" 
                value="hello@rubinum.com" 
                subValue="We reply within 24 hours" 
              />
              <ContactInfoItem 
                icon={MapPin} 
                title="Visit HQ" 
                value="Levent, Istanbul" 
                subValue="Turkey" 
              />
              <ContactInfoItem 
                icon={Phone} 
                title="Call Us" 
                value="+90 (212) 555 0123" 
                subValue="Mon-Fri, 9am - 6pm" 
              />
            </div>

            <div className="pt-12 border-t border-white/10">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Follow Our Journey</h4>
              <div className="flex gap-4">
                <SocialButton icon={Github} href="#" />
                <SocialButton icon={Twitter} href="#" />
                <SocialButton icon={Linkedin} href="#" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-[400px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-gray-400 max-w-xs">We have received your transmission. Our team will decode it and respond shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 appearance-none">
                      <option className="bg-zinc-900">General Inquiry</option>
                      <option className="bg-zinc-900">Project Proposal</option>
                      <option className="bg-zinc-900">Career Opportunity</option>
                      <option className="bg-zinc-900">Technical Support</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea 
                      required
                      rows={5} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 focus:ring-1 focus:ring-orange-500/50 transition-all duration-300 resize-none" 
                      placeholder="Tell us about your vision..." 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 p-[1px] transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
                  >
                    <div className="relative h-full w-full bg-black/50 backdrop-blur-sm rounded-xl px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                      <div className="flex items-center justify-center gap-2 text-white font-bold tracking-wide">
                        {formState === 'submitting' ? (
                          <span className="animate-pulse">Transmitting...</span>
                        ) : (
                          <>
                            Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
