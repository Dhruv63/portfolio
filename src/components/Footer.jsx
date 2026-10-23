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
    <footer id="contact" className="relative pt-24 pb-48 px-6 sm:px-10 lg:px-16 xl:px-20 bg-obsidian-dark border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Architectural Masthead — Left-Anchored, Full-Span */}
        <div data-reveal className="border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-champagne">
              <span>ACT V</span>
              <span className="text-white/20">—</span>
              <span>DIRECT TRANSMISSION</span>
            </div>
            <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase leading-[0.88]">
              TRANSMISSION.
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-2xl text-mineral max-w-lg leading-snug md:text-right">
            Open for technical architecture advisory, enterprise SaaS challenges, and venture engineering.
          </p>
        </div>

        {/* Narrative & Transmission Split — Edge-to-Edge Broadsheet (Zero Outer Box) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start pb-16 border-b border-white/[0.08]">

          {/* Biography & Principles (Cols 1–7) */}
          <div className="lg:col-span-7 space-y-6 lg:pr-8 lg:border-r lg:border-white/[0.06]">
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Dhruv Dinesh Solanki
            </h3>

            <div className="space-y-4 text-mineral-light text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
              <p>
                Software architect and founder based in Mumbai, India. Currently completing my final year of Bachelor of Engineering (B.E.) in Artificial Intelligence &amp; Machine Learning (Class of 2026) at VIVA Institute of Technology, University of Mumbai.
              </p>
              <p>
                My engineering focus is on turning rigorous compliance mandates, such as enterprise sustainability and corporate carbon reporting, into reliable, production-grade software that legal and executive teams can verify with confidence.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs sm:text-sm font-sans text-mineral flex flex-wrap items-center gap-4">
              <span className="font-mono text-white">MUMBAI, INDIA</span>
              <span className="text-white/20">•</span>
              <span className="font-mono">19.0760° N, 72.8777° E</span>
              <span className="text-white/20">•</span>
              <span className="text-emerald-400 font-medium">Available for high-impact collaborations</span>
            </div>
          </div>

          {/* Direct Communication Channels (Cols 8–12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted block">
                DIRECT INBOX ACCESS
              </span>
              <p className="text-mineral-light text-sm sm:text-base font-sans leading-relaxed">
                Connect directly for co-founding discussions, software architecture, or venture engineering inquiries.
              </p>

              {/* Direct Copy Email Button */}
              <div className="pt-2">
                <button
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-between gap-4 px-6 py-4 border border-white/20 hover:border-white bg-[#0A0C10] hover:bg-white/[0.04] text-white font-sans text-sm sm:text-base transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-champagne shrink-0" />
                    <span className="font-mono text-xs sm:text-sm truncate">{email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-mineral-light group-hover:text-white shrink-0">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold uppercase">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="uppercase tracking-wider">Copy</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Verified External Nodes (Sharp hairline grid, zero rounded boxes) */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne block font-medium">
                VERIFIED NETWORK NODES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.12] border border-white/[0.12]">
                <a
                  href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick(500)}
                  className="p-4 bg-obsidian-dark hover:bg-white/[0.05] text-white hover:text-champagne font-sans text-sm font-medium flex items-center justify-between transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </a>

                <a
                  href="https://github.com/Dhruv63"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick(500)}
                  className="p-4 bg-obsidian-dark hover:bg-white/[0.05] text-white hover:text-champagne font-sans text-sm font-medium flex items-center justify-between transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </a>

                <a
                  href="https://www.esgxpert.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick(500)}
                  className="p-4 bg-obsidian-dark hover:bg-white/[0.05] text-white hover:text-champagne font-sans text-sm font-medium flex items-center justify-between transition-colors"
                >
                  <span>ESGXpert Platform</span>
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </a>

                <a
                  href="https://vapourbit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick(500)}
                  className="p-4 bg-obsidian-dark hover:bg-white/[0.05] text-white hover:text-champagne font-sans text-sm font-medium flex items-center justify-between transition-colors"
                >
                  <span>VAPOURBIT Studio</span>
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Archival Photography & Footage Credits */}
        <div data-reveal className="py-6 border-b border-white/[0.08] text-xs font-mono text-[#A0A5B5] leading-relaxed space-y-2">
          <p className="font-semibold text-white uppercase tracking-wider">VISUAL ARCHIVE &amp; FOOTAGE ATTRIBUTIONS:</p>
          <p>
            • “Mumbai skyline at night” &amp; “Mumbai skyline with high-rises” by Vyacheslav Argenberg (CC BY 4.0 via Wikimedia Commons)<br />
            • “[Victoria Terminus Building, Mumbai]”, 1860s–70s, Albumen silver print, public domain (CC0 via The Metropolitan Museum of Art)<br />
            • “August Full Moon Rises Over City” by Michael Democker, public domain (NASA Image and Video Library)
          </p>
        </div>

        {/* Monumental Designed Close */}
        <div data-reveal className="pt-6 space-y-8">
          <div className="font-monumental text-6xl sm:text-8xl md:text-9xl font-normal text-white/[0.08] hover:text-white/[0.15] transition-colors tracking-tight select-none uppercase text-center leading-none">
            DHRUV SOLANKI
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-mineral uppercase tracking-widest gap-2">
            <span>© {new Date().getFullYear()} DHRUV DINESH SOLANKI</span>
            <span>MUMBAI, MAHARASHTRA, INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
