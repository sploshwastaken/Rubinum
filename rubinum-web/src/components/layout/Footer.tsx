'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

export function Footer({ lang, dict }: { lang: string, dict: any }) {
  return (
    <footer 
      className="bg-zinc-950 text-white relative md:fixed bottom-0 left-0 w-full z-0 md:-z-10 h-auto md:h-125 flex flex-col justify-between"
    >
      <div className="container mx-auto px-6 h-full flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-12 md:pt-16 pb-8 md:pb-0">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <Link href={lang === 'en' ? '/' : `/${lang}`} className="group relative flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl">
                <span className="scale-x-[-1]">R</span>
              </div>
              <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-gray-200 transition-colors">
                <span className="inline-block scale-x-[-1]">R</span>UBINUM
              </span>
            </Link>
            <p className="text-sm md:text-base text-gray-400 max-w-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
            
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-3">{dict.footer.subscribe_title}</h5>
              <div className="flex gap-2 flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder={dict.footer.subscribe_placeholder}
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white font-semibold mb-4 md:mb-6">{dict.footer.solutions}</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Edge Computing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 md:mb-6">{dict.footer.company}</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-gray-400">
              <li><Link href={lang === 'en' ? '/about' : `/${lang}/about`} className="hover:text-blue-400 transition-colors">{dict.nav.about}</Link></li>
              <li><Link href={lang === 'en' ? '/career' : `/${lang}/career`} className="hover:text-blue-400 transition-colors">{dict.nav.career}</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Press</Link></li>
              <li><Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="hover:text-blue-400 transition-colors">{dict.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-4 md:mb-6">{dict.footer.contact}</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>123 Innovation Dr,<br />Tech Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>hello@rubinum.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto border-t border-white/10 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} {dict.footer.rights}</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#" className="hover:text-white transition-colors">{dict.footer.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict.footer.terms}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict.footer.cookie}</Link>
          </div>
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
