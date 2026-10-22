import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="max-w-3xl mx-auto px-6 space-y-6">
        
        <h1 className="text-3xl sm:text-4xl font-normal text-white tracking-tight leading-tight">
          Dhruv Solanki
        </h1>

        <p className="text-lg sm:text-xl text-champagne-light font-light leading-relaxed">
          Software architect &amp; founder based in Mumbai, building enterprise compliance SaaS, cloud systems, and applied AI.
        </p>

        <div className="text-sm sm:text-base text-mineral leading-relaxed space-y-4 pt-2">
          <p>
            I architect and operate production platforms from first principles. I am the founder of <a href="https://www.esgxpert.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne underline underline-offset-4 decoration-white/20 hover:decoration-champagne transition-colors">ESG Tech Sol</a> (ESGXpert), automating statutory environmental compliance (SEBI BRSR Core) and greenhouse gas accounting for Indian enterprises.
          </p>
          <p>
            I also co-founded <a href="https://vapourbit.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-champagne underline underline-offset-4 decoration-white/20 hover:decoration-champagne transition-colors">VAPOURBIT</a>, a cloud infrastructure studio delivering high-throughput microservices, and co-authored government-registered research in autonomous AI support routing (<span className="text-white/80 font-mono text-xs">ROC SW-2026023768</span>).
          </p>
        </div>

        {/* Quick Links */}
        <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-mineral">
          <a
            href="https://www.esgxpert.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-champagne transition-colors"
          >
            <span>ESGXpert Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
          </a>

          <a
            href="https://vapourbit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-champagne transition-colors"
          >
            <span>VAPOURBIT Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
          </a>

          <a
            href="https://github.com/Dhruv63"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-champagne transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white hover:text-champagne transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
          </a>
        </div>

      </div>
    </section>
  );
}
