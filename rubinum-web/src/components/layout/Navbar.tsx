'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className="relative group px-1 py-1"
    >
      <span className={cn(
        "relative z-10 text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300",
        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
      )}>
        {children}
      </span>
      
      {/* Active/Hover Indicator */}
      <span className={cn(
        "absolute -bottom-1 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500 to-transparent transition-all duration-300 ease-out",
        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
      )} />
      
      {/* Subtle Glow for Active State */}
      {isActive && (
        <span className="absolute inset-0 bg-blue-500/10 blur-lg rounded-full -z-10" />
      )}
    </Link>
  );
}

export function Navbar({ lang, dict }: { lang: string, dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: dict.nav.about, href: lang === 'en' ? '/about' : `/${lang}/about` },
    { name: dict.nav.technology, href: lang === 'en' ? '/technology' : `/${lang}/technology` },
    { name: dict.nav.career, href: lang === 'en' ? '/career' : `/${lang}/career` },
    { name: dict.nav.contact, href: lang === 'en' ? '/contact' : `/${lang}/contact` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href={lang === 'en' ? '/' : `/${lang}`} className="group relative flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            <span className="scale-x-[-1]">R</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white group-hover:text-gray-200 transition-colors">
            <span className="inline-block scale-x-[-1]">R</span>UBINUM
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
          <div className="pl-4 border-l border-white/10">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium tracking-widest uppercase py-2 px-4 rounded-lg transition-all",
                      isActive 
                        ? "bg-white/10 text-white border border-white/10" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <LanguageSwitcher currentLang={lang} isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
