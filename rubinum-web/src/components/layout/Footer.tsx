'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer 
      className="bg-zinc-950 text-white fixed bottom-0 left-0 w-full -z-10 h-[500px] flex flex-col justify-between"
      style={{ height: '500px' }}
    >
      <div className="container mx-auto px-6 h-full flex flex-col">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white block">
              RUBINUM
            </Link>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Architecting the digital future with precision, intelligence, and seamless integration. Join us on the journey to the next frontier.
            </p>
            
            <div className="pt-4">
              <h5 className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Data Analytics</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Edge Computing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Press</Link></li>
              <li><Link href="/#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
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
        <div className="mt-auto border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rubinum Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
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
