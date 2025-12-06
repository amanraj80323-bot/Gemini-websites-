import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'glass-panel border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Premium Logo */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Activity className="relative text-white w-8 h-8 rotate-[-10deg]" strokeWidth={3} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-display font-black tracking-widest text-white group-hover:text-cyan-400 transition-colors">
              AMANN
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-500 uppercase">
              Fitness Elite
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative text-sm font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest font-display group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button isWhatsApp variant="primary" className="!px-6 !py-2 !text-sm !h-10">
            Apply Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 flex flex-col gap-6 items-center">
           {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button isWhatsApp variant="primary" className="w-full mt-4">Start Training</Button>
        </div>
      </div>
    </nav>
  );
};