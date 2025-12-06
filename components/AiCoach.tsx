import React, { useState } from 'react';
import { Sparkles, Send, Cpu, Terminal } from 'lucide-react';
import { Button } from './Button';
import { getFitnessTip } from '../services/geminiService';
import { RevealOnScroll } from './RevealOnScroll';

export const AiCoach: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [tip, setTip] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setTip('');
    const result = await getFitnessTip(topic);
    setTip(result);
    setLoading(false);
  };

  return (
    <section id="ai-coach" className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <RevealOnScroll>
          <div className="relative glass-panel rounded-3xl overflow-hidden border border-cyan-500/30">
            {/* Header Bar */}
            <div className="bg-slate-950/80 p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-slate-500 ml-4">AMANN_AI_SYSTEM_V2.0</span>
              </div>
              <Cpu className="text-cyan-500 w-5 h-5 animate-pulse" />
            </div>

            <div className="p-8 md:p-16 text-center">
              <div className="inline-flex items-center gap-2 text-cyan-400 mb-6">
                <Sparkles size={20} />
                <span className="font-display font-bold tracking-widest uppercase">AI Powered Analysis</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
                ASK THE <span className="text-gradient">DIGITAL COACH</span>
              </h2>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto font-light">
                Leveraging the mindset of Amann. Ask about nutrition, form, recovery, or motivation.
              </p>

              <form onSubmit={handleAsk} className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto mb-10 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-lime-500 to-cyan-500 rounded-xl opacity-20 group-hover:opacity-50 blur transition-opacity duration-500"></div>
                <div className="relative flex-1 flex bg-slate-900 rounded-xl overflow-hidden border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                  <div className="pl-4 flex items-center justify-center text-slate-500">
                    <Terminal size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter command... (e.g. 'How to get 6 pack abs')"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-5 text-white focus:outline-none placeholder-slate-600 font-mono text-sm"
                  />
                  <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 transition-colors font-display font-bold tracking-wider">
                    {loading ? 'PROCESSING...' : 'EXECUTE'}
                  </button>
                </div>
              </form>

              {tip && (
                <div className="bg-slate-950/80 rounded-xl p-8 border border-lime-500/30 text-left animate-fade-in relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-lime-500"></div>
                  <div className="flex items-start gap-4">
                     <div className="bg-lime-500/20 p-2 rounded-lg text-lime-400">
                       <Terminal size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-mono text-lime-500 mb-2">>>> INCOMING TRANSMISSION</p>
                        <p className="text-white text-lg md:text-xl font-medium leading-relaxed font-display">{tip}</p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};