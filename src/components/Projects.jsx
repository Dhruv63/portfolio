import React from 'react';

export default function Projects() {
  return (
    <section id="research" className="py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
            Research &amp; Intellectual Property
          </h2>
          <p className="text-xs text-mineral mt-1">
            Peer-reviewed algorithmic research and registered computer science copyright.
          </p>
        </div>

        <article className="py-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
            <h3 className="text-base sm:text-lg font-medium text-white">
              AutoTriage AI: Intelligent Customer Support Triage System
            </h3>
            <span className="text-xs text-champagne font-mono">
              ROC SW-2026023768
            </span>
          </div>

          <p className="text-xs text-mineral-muted font-normal mb-3">
            Government of India Copyright Office (Diary: SW-6982/2026-CO) • Presented &amp; Published at NCRENB-2026
          </p>

          <p className="text-sm text-mineral leading-relaxed mb-4">
            Investigates the optimization of tier-1 support triage using hybrid RAG-lite vector similarity united with deterministic intent heuristics. Evaluates incoming customer telemetry, scores operational incident urgency (P1 to P3), and executes sub-15ms automated escalation and knowledge dispatch.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-mineral-muted">
            <span>Co-Authors: <strong className="text-mineral-light font-normal">D. Solanki, P. Ubale, S. Mudras</strong></span>
            <span className="text-white/10">•</span>
            <span>Domain: <strong className="text-mineral-light font-normal">Autonomous Agent Triage &amp; NLP</strong></span>
          </div>
        </article>

      </div>
    </section>
  );
}
