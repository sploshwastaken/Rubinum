'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      // Only show on homepage (e.g. /, /en, /tr, /de, /ru)
      const isHomePage = pathname === '/' || /^\/[a-z]{2}$/.test(pathname);
      
      if (!isHomePage) {
        setIsVisible(false);
        return;
      }

      // Show button only when approaching the footer (last 1200px of the page)
      const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      
      if (distanceToBottom < 1200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Check initially
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-500/20 hover:bg-blue-600/30 hover:border-blue-500/50 hover:text-white transition-colors group"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          
          {/* Ripple/Pulse Effect */}
          <span className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping opacity-20"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
