'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    // Default to 'en' if not found or if root
    let lang = 'en';
    if (segments.length > 0 && ['en', 'tr', 'de', 'ru'].includes(segments[0])) {
      lang = segments[0];
    }

    const translations: Record<string, any> = {
      en: {
        initializing: "INITIALIZING",
        main: "MAIN SYSTEM",
        about: "ABOUT MODULE",
        technology: "TECHNOLOGY CORE",
        career: "CAREER PROTOCOLS",
        contact: "COMMUNICATION UPLINK"
      },
      tr: {
        initializing: "BAŞLATILIYOR",
        main: "ANA SİSTEM",
        about: "HAKKIMIZDA MODÜLÜ",
        technology: "TEKNOLOJİ ÇEKİRDEĞİ",
        career: "KARİYER PROTOKOLLERİ",
        contact: "İLETİŞİM BAĞLANTISI"
      },
      de: {
        initializing: "INITIALISIERUNG",
        main: "HAUPTSYSTEM",
        about: "ÜBER UNS MODUL",
        technology: "TECHNOLOGIE KERN",
        career: "KARRIERE PROTOKOLLE",
        contact: "KOMMUNIKATION"
      },
      ru: {
        initializing: "ИНИЦИАЛИЗАЦИЯ",
        main: "ГЛАВНАЯ СИСТЕМА",
        about: "МОДУЛЬ О НАС",
        technology: "ТЕХНОЛОГИЧЕСКОЕ ЯДРО",
        career: "КАРЬЕРНЫЕ ПРОТОКОЛЫ",
        contact: "КАНАЛ СВЯЗИ"
      }
    };

    const t = translations[lang] || translations.en;
    
    let pageKey = 'main';
    
    // Check if the first segment is a locale
    const isFirstSegmentLocale = segments.length > 0 && ['en', 'tr', 'de', 'ru'].includes(segments[0]);

    if (isFirstSegmentLocale) {
      // Case: /tr/about -> segments: ['tr', 'about']
      if (segments.length > 1) {
        pageKey = segments[1];
      }
    } else {
      // Case: /about -> segments: ['about'] (English default)
      if (segments.length > 0) {
        pageKey = segments[0];
      }
    }

    // Validate pageKey against known keys, fallback to main if unknown
    if (!['about', 'technology', 'career', 'contact'].includes(pageKey)) {
      pageKey = 'main';
    }

    const pageName = t[pageKey] || t.main;
    setDisplayText(`> ${t.initializing} ${pageName}...`);
  }, [pathname]);

  return (
    <>
      {/* The actual page content */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>

      {/* The Transition Overlay */}
      <motion.div
        className="fixed inset-0 z-9999 bg-background flex items-center justify-center pointer-events-none"
        initial={{ clipPath: "inset(0 0 0 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Grid Background in Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="relative z-10 flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="font-mono text-blue-400 text-sm md:text-base tracking-[0.2em] font-bold uppercase">
              {displayText}
            </span>
          </div>
          
          {/* Loading Bar */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
            <motion.div 
              className="h-full bg-linear-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.0, ease: "easeInOut" }}
            />
          </div>
          
          <div className="font-mono text-[10px] text-gray-600 mt-1">
            EST. LATENCY: 12ms
          </div>
        </motion.div>

        {/* Decorative Corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl" />
      </motion.div>
    </>
  );
}
