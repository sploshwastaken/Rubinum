'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { i18n } from '@/i18n-config';

export function LanguageSwitcher({ currentLang, isMobile = false }: { currentLang: string, isMobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    
    const segments = pathname.split("/");
    const isCurrentPathLocale = i18n.locales.includes(segments[1] as any);
    
    // If we are switching to English (default language)
    if (locale === 'en') {
      if (isCurrentPathLocale) {
        // Remove locale segment: /tr/about -> /about
        segments.splice(1, 1);
        const newPath = segments.join("/");
        return newPath === "" ? "/" : newPath;
      } else {
        // Already on English path: /about -> /about
        return pathname;
      }
    }
    
    // If we are switching to non-default language
    if (isCurrentPathLocale) {
      // Replace existing locale: /de/about -> /tr/about
      segments[1] = locale;
      return segments.join("/");
    } else {
      // Add locale to path: /about -> /tr/about
      segments.splice(1, 0, locale);
      return segments.join("/");
    }
  };

  const languages = {
    en: "English",
    tr: "Türkçe",
    de: "Deutsch",
    ru: "Русский"
  };

  if (isMobile) {
    return (
      <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-white/10">
        {i18n.locales.map((locale) => (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border",
              currentLang === locale
                ? "bg-blue-500/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
            )}
          >
            {languages[locale]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      >
        <Globe className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
        <span className="text-xs font-bold tracking-wider uppercase text-gray-300 group-hover:text-white">
          {currentLang}
        </span>
        <ChevronDown className={cn(
          "w-3 h-3 text-gray-500 transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
          >
            <div className="p-1">
              {i18n.locales.map((locale) => (
                <Link
                  key={locale}
                  href={redirectedPathName(locale)}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors",
                    currentLang === locale
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="uppercase w-6">{locale}</span>
                  <span className="opacity-50">|</span>
                  <span>{languages[locale]}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
