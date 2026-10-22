import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "dhruvdineshr@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="about" className="py-16 sm:py-24 border-t border-white/[0.06] text-xs">
      <div className="max-w-3xl mx-auto px-6 space-y-16">
        
        {/* About Block */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            About &amp; Background
          </h2>
          <div className="text-sm text-mineral leading-relaxed space-y-3">
            <p>
              I am a software architect and founder with a focus on enterprise SaaS, statutory regulatory systems, and applied AI. Currently in the final year of my Bachelor of Engineering (B.E.) in Artificial Intelligence &amp; Machine Learning (Class of 2026) at VIVA Institute of Technology, University of Mumbai.
            </p>
            <p>
              My work centers on turning ambiguous, heavily regulated workflows — such as environmental compliance and carbon accounting — into auditable, deterministic software products that enterprise teams can trust.
            </p>
          </div>
        </div>

        {/* Contact Block */}
        <div id="contact" className="space-y-6 pt-4">
          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            Connect
          </h2>
          
          <p className="text-sm text-mineral">
            I am always open to discussing new engineering challenges, venture initiatives, and technical architecture.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white hover:border-champagne/40 hover:text-champagne transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-mineral" />}
              <span>{copied ? "Copied to clipboard" : email}</span>
            </button>

            <a
              href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white hover:border-champagne/40 hover:text-champagne transition-all"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
            </a>

            <a
              href="https://github.com/Dhruv63"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white hover:border-champagne/40 hover:text-champagne transition-all"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted" />
            </a>
          </div>
        </div>

        {/* Colophon */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-baseline justify-between gap-2 text-mineral-muted">
          <span>© {new Date().getFullYear()} Dhruv Dinesh Solanki</span>
          <span>Mumbai, India</span>
        </div>

      </div>
    </footer>
  );
}
