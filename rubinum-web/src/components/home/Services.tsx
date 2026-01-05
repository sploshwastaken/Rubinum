'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { Code2, Globe, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function ServiceCard({ service, index, lang }: { service: any, index: number, lang: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "group relative p-6 md:p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-75",
        service.className,
        service.borderHover,
        // Mobile override: always col-span-1 on small screens
        "col-span-1"
      )}
    >
      {/* Hover Gradient Background - Stronger & Colorful */}
      <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />
      
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
          {service.tags.map((tag: string, i: number) => (
            <span key={i} className={cn(
              "px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium rounded-full border border-white/5 bg-white/5 text-gray-400 transition-colors duration-300",
              "group-hover:border-white/10 group-hover:text-white group-hover:bg-white/10"
            )}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="relative z-10 mt-8 inline-block">
        <div className={cn("flex items-center text-sm font-medium opacity-50 group-hover:opacity-100 transition-all duration-300", service.iconColor)}>
          <span className="mr-2">{service.exploreText}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

export function Services({ lang, dict }: { lang: string, dict: any }) {
  const services = [
    {
      title: dict.home.services.custom.title,
      description: dict.home.services.custom.desc,
      icon: Code2,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-blue-600/20 via-purple-600/20 to-blue-600/10",
      borderHover: "group-hover:border-blue-500/50",
      iconColor: "text-blue-400",
      tags: ["Python", "Java", "Go", "Microservices", "API Design"],
      exploreText: dict.home.services.explore
    },
    {
      title: dict.home.services.web.title,
      description: dict.home.services.web.desc,
      icon: Globe,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-emerald-600/20 via-teal-600/20 to-emerald-600/10",
      borderHover: "group-hover:border-emerald-500/50",
      iconColor: "text-emerald-400",
      tags: ["Next.js", "React", "TypeScript", "Tailwind"],
      exploreText: dict.home.services.explore
    },
    {
      title: dict.home.services.mobile.title,
      description: dict.home.services.mobile.desc,
      icon: Smartphone,
      className: "md:col-span-1 md:row-span-1",
      gradient: "from-orange-600/20 via-red-600/20 to-orange-600/10",
      borderHover: "group-hover:border-orange-500/50",
      iconColor: "text-orange-400",
      tags: ["React Native", "Flutter", "Swift", "Kotlin"],
      exploreText: dict.home.services.explore
    },
    {
      title: dict.home.services.cloud.title,
      description: dict.home.services.cloud.desc,
      icon: Cloud,
      className: "md:col-span-2 md:row-span-1",
      gradient: "from-cyan-600/20 via-blue-600/20 to-cyan-600/10",
      borderHover: "group-hover:border-cyan-500/50",
      iconColor: "text-cyan-400",
      tags: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      exploreText: dict.home.services.explore
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative z-10">
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
              {dict.home.services.label}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tight">
              {dict.home.services.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                {dict.home.services.title_suffix}
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
            {dict.home.services.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
