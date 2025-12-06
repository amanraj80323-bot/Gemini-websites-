import React from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  isWhatsApp?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  isWhatsApp = false
}) => {
  const baseStyles = "relative group overflow-hidden px-8 py-4 rounded-lg font-display font-bold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-white text-slate-950 hover:text-white border border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    secondary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-cyan-400",
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400"
  };

  const handlePress = () => {
    if (isWhatsApp) {
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
      window.open(url, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handlePress}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Hover Effect Background */}
      <span className={`absolute inset-0 w-full h-full bg-slate-950/90 transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0 ${variant === 'primary' ? 'block' : 'hidden'}`}></span>
      
      <span className="relative flex items-center gap-2 z-10">
        {children}
        {variant !== 'outline' && <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
      </span>
    </button>
  );
};