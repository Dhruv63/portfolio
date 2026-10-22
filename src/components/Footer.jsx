import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "dhruvsolanki1105@gmail.com";

  const handleCopy = () => {
    soundEngine.playClick(720);
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="relative pt-20 pb-48 px-6 bg-obsidian-dark">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Act V Title Block (No eyebrow above heading) */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight uppercase">
            TRANSMISSION.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto">
            Open for technical architecture advisory, enterprise SaaS challenges, and venture engineering.
          </p>
        </div>

        {/* Narrative & Transmission Split */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12 rounded-2xl bg-obsidian-surface">
          
          {/* Biography & Principles */}
          <div className="space-y-6">
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Dhruv Dinesh Solanki
            </h3>
            
            <div className="space-y-4 text-mineral-light text-base leading-relaxed font-sans">
              <p>
                Software architect and founder based in Mumbai, India. Currently completing my final year of Bachelor of Engineering (B.E.) in Artificial Intelligence &amp; Machine Learning (Class of 2026) at VIVA Institute of Technology, University of Mumbai.
              </p>
              <p>
                My engineering philosophy centers on turning complex statutory mandates, like corporate sustainability and carbon reporting, into deterministic, audit-proof production software that enterprise legal and executive teams can rely on without reservation.
              </p>
            </div>

            <div className="pt-2 text-sm font-sans text-mineral flex flex-wrap items-center gap-4">
              <span>Mumbai, India</span>
              <span>•</span>
              <span>19.0760° N, 72.8777° E</span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">Available for high-impact collaborations</span>
            </div>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="font-monumental text-xl text-white font-bold">
                Direct Channels
              </h4>
              <p className="text-mineral text-base font-sans leading-relaxed">
                Connect directly for co-founding discussions, software architecture, or venture engineering inquiries.
              </p>

              {/* Direct Copy Email Button (Safe edge padding on mobile) */}
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-between gap-4 px-5 py-3.5 rounded-xl bg-obsidian-elevated hover:bg-obsidian-hover text-white font-sans text-sm sm:text-base transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-champagne" />
                    <span className="font-medium text-sm sm:text-base">{email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-mineral group-hover:text-white pl-2">
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Verified External Nodes */}
            <div className="grid grid-cols-2 gap-3 pt-6">
              <a
                href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(500)}
                className="p-4 rounded-xl bg-obsidian-dark hover:bg-obsidian-elevated text-mineral-light hover:text-white font-sans text-sm font-medium flex items-center justify-between transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-mineral" />
              </a>

              <a
                href="https://github.com/Dhruv63"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(500)}
                className="p-4 rounded-xl bg-obsidian-dark hover:bg-obsidian-elevated text-mineral-light hover:text-white font-sans text-sm font-medium flex items-center justify-between transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-mineral" />
              </a>

              <a
                href="https://www.esgxpert.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(500)}
                className="p-4 rounded-xl bg-obsidian-dark hover:bg-obsidian-elevated text-mineral-light hover:text-white font-sans text-sm font-medium flex items-center justify-between transition-colors"
              >
                <span>ESGXpert Platform</span>
                <ArrowUpRight className="w-4 h-4 text-mineral" />
              </a>

              <a
                href="https://vapourbit.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(500)}
                className="p-4 rounded-xl bg-obsidian-dark hover:bg-obsidian-elevated text-mineral-light hover:text-white font-sans text-sm font-medium flex items-center justify-between transition-colors"
              >
                <span>VAPOURBIT Studio</span>
                <ArrowUpRight className="w-4 h-4 text-mineral" />
              </a>
            </div>

          </div>

        </div>

        {/* Archival Photography & Footage Credits */}
        <div data-reveal className="p-6 rounded-xl bg-obsidian-surface/40 text-sm text-mineral font-sans leading-relaxed space-y-2">
          <p className="font-semibold text-mineral-light">Visual Archive &amp; Footage Attributions:</p>
          <p>
            • “Mumbai skyline at night” &amp; “Mumbai skyline with high-rises” by Vyacheslav Argenberg (CC BY 4.0 via Wikimedia Commons)<br />
            • “[Victoria Terminus Building, Mumbai]”, 1860s–70s, Albumen silver print, public domain (CC0 via The Metropolitan Museum of Art)<br />
            • “August Full Moon Rises Over City” by Michael Democker, public domain (NASA Image and Video Library)
          </p>
        </div>

        {/* Monumental Designed Close (Falter Inferno Brand Return) */}
        <div data-reveal className="pt-8 text-center space-y-6">
          <div className="font-monumental text-4xl sm:text-7xl md:text-8xl font-black text-white/10 hover:text-white/20 transition-colors tracking-tight select-none uppercase">
            DHRUV SOLANKI
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-mineral font-sans gap-2 max-w-4xl mx-auto pb-8">
            <span>© {new Date().getFullYear()} Dhruv Dinesh Solanki</span>
            <span>Mumbai, Maharashtra, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
