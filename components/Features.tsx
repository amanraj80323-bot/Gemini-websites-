import React from 'react';
import { Target, Timer, Zap, Trophy, TrendingUp, Skull } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const features = [
  {
    icon: <Timer size={28} className="text-white" />,
    color: "bg-cyan-500",
    title: "6 Month Protocol",
    desc: "A rigid, scientifically backed timeline. We don't guess. We execute. Visible changes in physique within weeks."
  },
  {
    icon: <Skull size={28} className="text-white" />,
    color: "bg-rose-500",
    title: "Fat Loss & Shred",
    desc: "Targeted metabolic conditioning combined with hypertrophy training to melt fat while carving granite muscle."
  },
  {
    icon: <TrendingUp size={28} className="text-white" />,
    color: "bg-lime-500",
    title: "Hypertrophy",
    desc: "Progressive overload techniques designed to maximize muscle fiber recruitment. Get big, stay lean."
  },
  {
    icon: <Trophy size={28} className="text-white" />,
    color: "bg-violet-500",
    title: "Elite Community",
    desc: "Join a network of high-performers in Gurugram & Delhi. We train hard, we succeed together."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="program" className="py-32 bg-slate-950 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-cyan-400 font-display font-bold tracking-widest uppercase text-sm mb-2 block">The Blueprint</span>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-none">
                Elite Training<br/><span className="text-slate-700">Standards</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-right md:text-left font-light border-l border-slate-800 pl-6">
              No shortcuts. No magic pills. Just ruthless consistency and a plan that actually works.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
              <div className="group h-full p-8 rounded-2xl glass-panel glass-card-hover relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 ${feature.color} opacity-10 rounded-bl-full transition-all group-hover:scale-150 duration-500`}></div>
                
                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-8 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">{feature.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};