import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Hero() {
  const scrollTo = (id) => {
    soundEngine.playClick(600);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prologue" className="relative min-h-[95svh] flex flex-col justify-between pt-12 pb-24 px-6 overflow-hidden">
      
      {/* Moving Footage Video Layer (atmospheric backdrop per references/imagery.md) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/august-full-moon-rises-over-city-of-poster.jpg"
          className="w-full h-full object-cover filter grayscale contrast-125 brightness-75"
          aria-hidden="true"
        >
          <source src="/assets/august-full-moon-rises-over-city-of.mp4" type="video/mp4" />
        </video>
      </div>



      {/* Main Monumental Stage */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto text-center space-y-8 py-10">
        
        {/* Monumental Headline (No eyebrow above it) */}
        <div className="space-y-4">
          <h1 className="font-monumental text-5xl sm:text-8xl md:text-9xl font-normal text-white tracking-tight uppercase leading-[0.92]">
            DHRUV SOLANKI
          </h1>
          <p className="font-serif italic text-xl sm:text-3xl md:text-4xl text-mineral-light font-light max-w-3xl mx-auto leading-tight">
            Software architect &amp; founder operating from first principles.
          </p>
        </div>

        {/* Focused Narrative Statement (16px body) */}
        <p data-reveal className="text-base sm:text-lg text-mineral-light max-w-2xl mx-auto leading-relaxed font-sans">
          Founder of <a href="https://www.esgxpert.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors underline underline-offset-4 decoration-white/20">ESG Tech Sol</a>, automating statutory SEBI BRSR environmental compliance. Co-founder of <a href="https://vapourbit.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne transition-colors underline underline-offset-4 decoration-white/20">VAPOURBIT</a>, architecting high-throughput cloud infrastructure, and co-author of autonomous AI triage research registered with the Government of India.
        </p>

        {/* Primary Action & Channels */}
        <div data-reveal className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => scrollTo('work')}
            className="px-8 py-4 rounded-full bg-white text-black font-sans text-sm font-bold hover:bg-champagne transition-colors"
          >
            Explore productions
          </button>

          <a
            href="https://github.com/Dhruv63"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick(480)}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-obsidian-surface hover:bg-obsidian-elevated text-white font-sans text-sm font-medium transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-mineral" />
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick(480)}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-obsidian-surface hover:bg-obsidian-elevated text-white font-sans text-sm font-medium transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 text-mineral" />
          </a>
        </div>

      </div>

      {/* Chapter Marker at Viewport Bottom (Falter Inferno Style) */}
      <div data-reveal className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <button
          onClick={() => scrollTo('work')}
          className="group flex flex-col items-center gap-2 text-mineral hover:text-white transition-colors"
        >
          <span className="font-monumental text-xl text-white group-hover:text-champagne">
            1
          </span>
          <div className="w-[1px] h-6 bg-white/20 group-hover:bg-champagne transition-colors"></div>
          <span className="text-sm font-sans">
            Descent into the works
          </span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

    </section>
  );
}
