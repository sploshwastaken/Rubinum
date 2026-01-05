'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { Code2, Globe, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
  {
    title: "Custom Software Development",
    description: "Tailor-made solutions designed to fit your unique business processes. We build robust, scalable architectures from scratch.",
    icon: Code2,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-blue-600/20 via-purple-600/20 to-blue-600/10",
    borderHover: "group-hover:border-blue-500/50",
    iconColor: "text-blue-400",
    tags: ["Python", "Java", "Go", "Microservices", "API Design"]
  },
  {
    title: "Web Applications",
    description: "Scalable, high-performance web apps built with modern frameworks.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-emerald-600/20 via-teal-600/20 to-emerald-600/10",
    borderHover: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"]
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-orange-600/20 via-red-600/20 to-orange-600/10",
    borderHover: "group-hover:border-orange-500/50",
    iconColor: "text-orange-400",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    title: "Cloud Infrastructure",
    description: "Secure and scalable cloud architecture design, DevOps and management.",
    icon: Cloud,
    className: "md:col-span-2 md:row-span-1",
    gradient: "from-cyan-600/20 via-blue-600/20 to-cyan-600/10",
    borderHover: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "group relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[300px]",
        service.className,
        service.borderHover,
        // Mobile override: always col-span-1 on small screens
        "col-span-1"
      )}
    >
      {/* Hover Gradient Background - Stronger & Colorful */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />
      
      <div className="relative z-10">
        {/* Icon Box */}
        <div className={cn("w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 md:mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-black/20", service.iconColor)}>
          <service.icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-6 md:mb-8 max-w-md">
          {service.description}
        </p>

        {/* Tech Tags - Colored on Hover */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
          {service.tags.map((tag, i) => (
            <span key={i} className={cn(
              "px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium rounded-full border border-white/5 bg-white/5 text-gray-400 transition-colors duration-300",
              "group-hover:border-white/10 group-hover:text-white group-hover:bg-white/10"
            )}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link href="/contact" className="relative z-10 mt-8 inline-block">
        <div className={cn("flex items-center text-sm font-medium opacity-50 group-hover:opacity-100 transition-all duration-300", service.iconColor)}>
          <span className="mr-2">Explore</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  const containerRef = useRef(null);

  return (
    <section id="services" ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-400"
          >
            Our Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Excellence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We combine cutting-edge technology with strategic thinking to deliver exceptional results across every digital touchpoint.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
