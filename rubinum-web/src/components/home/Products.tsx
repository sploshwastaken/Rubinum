'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cloud, Zap, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

export function Products({ lang, dict }: { lang: string, dict: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const products = [
    {
      id: '01',
      name: dict.home.products.items.cloud.name,
      description: dict.home.products.items.cloud.desc,
      tags: ['Infrastructure', 'AI', 'Scale'],
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud
    },
    {
      id: '02',
      name: dict.home.products.items.nexus.name,
      description: dict.home.products.items.nexus.desc,
      tags: ['Integration', 'API', 'Gateway'],
      color: 'from-purple-500 to-pink-500',
      icon: Zap
    },
    {
      id: '03',
      name: dict.home.products.items.shield.name,
      description: dict.home.products.items.shield.desc,
      tags: ['Security', 'Cyber', 'Protection'],
      color: 'from-orange-500 to-red-500',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-32 relative z-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-auto"
          >
            <h2 className="text-xs md:text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-4 md:mb-6">
              {dict.home.products.label}
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {dict.home.products.title_prefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">{dict.home.products.title_suffix}</span>
            </h3>
          </motion.div>
          <Link href={lang === 'en' ? '/technology' : `/${lang}/technology`} className="w-full md:w-auto mt-6 md:mt-0">
            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm md:text-base"
            >
              {dict.home.products.view_all} <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <Link href={lang === 'en' ? '/technology' : `/${lang}/technology`} key={product.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative h-auto min-h-87.5 md:h-112.5 bg-zinc-900/50 rounded-3xl border border-white/5 p-6 md:p-8 flex flex-col justify-between overflow-hidden"
              >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Top Section */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`p-3 rounded-xl bg-linear-to-br ${product.color} bg-opacity-10`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {product.id}
                </span>
              </div>
              
              {/* Bottom Section */}
              <div className="relative z-10 mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2">{product.name}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {product.description}
                </p>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
