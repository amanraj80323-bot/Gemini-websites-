import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AiCoach } from './components/AiCoach';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Button } from './components/Button';
import { RevealOnScroll } from './components/RevealOnScroll';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Premium About Section */}
        <section id="about" className="py-32 bg-slate-950 relative overflow-hidden">
          {/* Slanted decoration */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-slate-900 -skew-y-6 transform origin-top-left -translate-y-20 z-0"></div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
             <RevealOnScroll className="order-2 md:order-1 relative group">
               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
               <div className="relative rounded-2xl overflow-hidden border border-slate-700">
                 <img 
                   src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
                   alt="Amann Training Client" 
                   className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                 />
                 {/* Overlay Text */}
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent p-8">
                   <p className="text-white font-display font-bold text-xl">DEDICATION. DISCIPLINE. DOMINANCE.</p>
                 </div>
               </div>
             </RevealOnScroll>
             
             <RevealOnScroll className="order-1 md:order-2">
               <h2 className="text-5xl font-display font-black text-white mb-8 leading-tight">
                 NOT JUST A TRAINER.<br/>
                 <span className="text-cyan-400">A PERFORMANCE ARCHITECT.</span>
               </h2>
               <div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
                 <p>
                   Based in <strong>Gurugram & Delhi</strong>, Amann brings an intensity to training that guarantees results. We don't just count reps; we reconstruct your lifestyle.
                 </p>
                 <p>
                   Whether you're a CEO needing to maximize efficiency or preparing for a wedding, the <strong className="text-white">6-Month Protocol</strong> is engineered to produce the best version of you.
                 </p>
               </div>
               
               <div className="pt-8 flex gap-6">
                  <div className="border-l-2 border-cyan-500 pl-4">
                    <p className="text-2xl font-display font-bold text-white">Delhi</p>
                    <p className="text-sm text-slate-500 uppercase">In-Person</p>
                  </div>
                  <div className="border-l-2 border-lime-500 pl-4">
                    <p className="text-2xl font-display font-bold text-white">Global</p>
                    <p className="text-sm text-slate-500 uppercase">Online Coaching</p>
                  </div>
               </div>

               <div className="pt-8">
                 <Button isWhatsApp variant="outline">Schedule Consultation</Button>
               </div>
             </RevealOnScroll>
          </div>
        </section>

        <Features />
        
        <AiCoach />

        {/* High Voltage Footer CTA */}
        <section className="py-32 relative overflow-hidden text-center bg-slate-950 border-t border-slate-900">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <RevealOnScroll>
              <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">DOMINATE?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                Your future self is begging you to start today. Slots for this month are extremely limited.
              </p>
              <Button isWhatsApp className="mx-auto text-lg px-16 py-6 shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] scale-110">
                INITIATE TRANSFORMATION
              </Button>
            </RevealOnScroll>
          </div>
        </section>
      </main>

      <footer className="py-10 bg-slate-950 border-t border-slate-900 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-2xl font-display font-black tracking-widest text-white">AMANN</span>
        </div>
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} Amann Fitness Elite. Delhi & Gurugram.</p>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;