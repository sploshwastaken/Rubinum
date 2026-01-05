'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cloud, Zap, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const products = [
  {
    id: '01',
    name: 'Rubinum Cloud',
    description: 'Next-generation cloud infrastructure management with AI-driven optimization.',
    tags: ['Infrastructure', 'AI', 'Scale'],
    color: 'from-blue-500 to-cyan-500',
    icon: Cloud
  },
  {
    id: '02',
    name: 'Nexus API',
    description: 'Unified API gateway for seamless integration of disparate systems and data sources.',
    tags: ['Integration', 'API', 'Gateway'],
    color: 'from-purple-500 to-pink-500',
    icon: Zap
  },
  {
    id: '03',
    name: 'Shield',
    description: 'Enterprise-grade cybersecurity suite protecting your digital assets in real-time.',
    tags: ['Security', 'Cyber', 'Protection'],
    color: 'from-orange-500 to-red-500',
    icon: ShieldCheck
  }
];

export function Products() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="products" ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium tracking-[0.3em] text-blue-400 uppercase mb-6">
              Our Products
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Innovations for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Tomorrow</span>
            </h3>
          </motion.div>
          <Link href="/technology">
            <motion.button 
              whileHover={{ x: 5 }}
              className="hidden md:flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors mt-8 md:mt-0"
            >
              View All Products <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link href="/technology" key={product.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] bg-zinc-900/50 rounded-3xl border border-white/5 p-8 flex flex-col justify-between overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Top Section */}
              <div className="relative z-10 flex justify-between items-start">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${product.color} bg-opacity-10`}>
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
                    <span key={tag} className="text-xs font-medium text-white/70 bg-white/5 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {product.name}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {product.description}
                </p>
              </div>
              
              {/* Decorative Glow */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
            </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 md:hidden">
          <button className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
            View All Products <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
