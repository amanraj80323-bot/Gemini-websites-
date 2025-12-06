import React from 'react';
import { Zap, PlayCircle, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { AMANN_IMAGE_URL } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-950">
      
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-[100px]"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-display font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Accepting New Clients
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-4 font-display">
              SCULPT.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500">SHRED.</span><br />
              <span className="text-gradient drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">EVOLVE.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              This isn't just training. It's a <strong className="text-white">scientific reconstruction</strong> of your physique. 
              Train with <strong className="text-cyan-400">Amann</strong> in Delhi & Gurugram.
              <br/>
              <span className="text-sm uppercase tracking-widest text-lime-400 mt-2 block font-display font-bold">Visible Abs in 6 Months. Guaranteed.</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button isWhatsApp variant="secondary">
                Start Transformation
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('program')?.scrollIntoView({behavior: 'smooth'})}>
                View Protocol
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-10 border-t border-white/5 mt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-cyan-400">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-display font-bold text-white leading-none">600+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Elite Clients</p>
                </div>
              </div>
              <div className="h-10 w-px bg-slate-800"></div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-lime-400">
                  <Zap size={24} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-display font-bold text-white leading-none">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Results</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-5 relative flex justify-center perspective-1000">
          <RevealOnScroll delay={300} className="relative w-full max-w-[450px]">
             {/* Decorative Elements around image */}
             <div className="absolute top-10 -right-10 w-24 h-24 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-3xl"></div>
             <div className="absolute bottom-10 -left-10 w-24 h-24 border-b-2 border-l-2 border-lime-500/30 rounded-bl-3xl"></div>
             
             <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700 to-slate-900 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-lime-500/20 blur-xl opacity-50"></div>
               
               <img 
                 src={AMANN_IMAGE_URL} 
                 alt="Amann Personal Trainer" 
                 className="relative w-full h-auto object-cover rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out z-10"
                 style={{ maxHeight: '600px' }}
               />

                {/* Floating "Live" Badge */}
               <div className="absolute -bottom-6 right-6 z-20 glass-panel p-4 rounded-xl flex items-center gap-4 animate-bounce-slow border-l-4 border-cyan-500">
                 <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
                    <PlayCircle className="relative text-white fill-red-500" size={32} />
                 </div>
                 <div>
                   <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Status</p>
                   <p className="text-white font-display font-bold text-lg">Online</p>
                 </div>
               </div>
             </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};