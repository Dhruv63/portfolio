import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Ventures() {
  const works = [
    {
      title: "ESGXpert",
      url: "https://www.esgxpert.com",
      displayUrl: "esgxpert.com",
      role: "Founder & Architect",
      period: "2024 — Present",
      description: "Automated carbon accounting & statutory corporate governance platform for Indian enterprises. Calculates Scope 1, 2, and 3 GHG emissions according to CEA and GHG Protocol guidelines, producing audit-ready SEBI BRSR Core filings and ISO 14001 readiness.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Docker"]
    },
    {
      title: "VAPOURBIT Systems",
      url: "https://vapourbit.com",
      displayUrl: "vapourbit.com",
      role: "Co-Founder",
      period: "2024 — Present",
      description: "Cloud-native infrastructure and backend engineering studio. Delivers high-throughput distributed microservices, low-latency APIs, and enterprise AI workflow integrations for commercial clients.",
      stack: ["Node.js", "AWS", "Docker", "Python", "Redis", "PostgreSQL"]
    },
    {
      title: "AutoTriage AI",
      url: "#research",
      displayUrl: "Research & Patent",
      role: "Lead Author",
      period: "2026",
      description: "Autonomous customer support triage engine combining RAG-lite vector similarity with dynamic intent classification to eliminate escalation latency. Government of India Registered Copyright (ROC SW-2026023768), published at NCRENB-2026.",
      stack: ["Python", "NLP Intent Classification", "Vector Search", "FastAPI"]
    },
    {
      title: "Hyuzz Color Engine",
      url: "https://hyuzz.vercel.app/app",
      displayUrl: "hyuzz.vercel.app",
      role: "Creator",
      period: "2025",
      description: "Lightweight browser utility for digital artists and UI engineers featuring canvas sub-pixel color sampling, real-time hexadecimal search algorithms, and palette harmony generation.",
      stack: ["React", "HTML5 Canvas", "Tailwind CSS", "Vite"]
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-xs text-mineral mt-1">
            Commercial ventures, production systems, and tools.
          </p>
        </div>

        <div className="divide-y divide-white/[0.06]">
          {works.map((item, idx) => (
            <article key={idx} className="py-8 group">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <a
                  href={item.url}
                  target={item.url.startsWith('http') ? '_blank' : '_self'}
                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-base sm:text-lg font-medium text-white group-hover:text-champagne transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mineral-muted group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
                
                <div className="text-xs text-mineral-muted font-normal">
                  <span>{item.role}</span>
                  <span className="mx-2">•</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-mineral leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mineral-muted">
                {item.stack.map((tech, tIdx) => (
                  <span key={tech} className="inline-flex items-center">
                    <span className="text-mineral-light/80">{tech}</span>
                    {tIdx < item.stack.length - 1 && (
                      <span className="text-white/10 ml-3">/</span>
                    )}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
