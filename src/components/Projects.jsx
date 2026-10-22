import React from 'react';
import { ShieldCheck, BookOpen, Cpu, Award } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Projects() {
  const benchmarks = [
    {
      metric: "Median Inference Latency",
      autotriage: "< 14.8 ms",
      traditional: "15 — 45 minutes",
      advantage: "99.9% Latency Reduction",
    },
    {
      metric: "Priority Classification Match",
      autotriage: "98.4% Precision",
      traditional: "71.2% (Manual triage)",
      advantage: "+27.2% Precision Gain",
    },
    {
      metric: "Operational Throughput",
      autotriage: "10,000+ req / min",
      traditional: "~120 tickets / day / agent",
      advantage: "Continuous Deterministic Scale",
    },
    {
      metric: "Routing Ambiguity Resolution",
      autotriage: "Deterministic Cosine Fallback",
      traditional: "Ad-hoc human re-routing",
      advantage: "Zero-hop Direct Dispatch",
    },
  ];

  const methodologySteps = [
    {
      num: "01",
      name: "Semantic Embedding Ingestion",
      desc: "Normalized payload tokenization using lightweight embedding representations to strip network noise while retaining core error signatures.",
    },
    {
      num: "02",
      name: "Vector Cosine Retrieval",
      desc: "High-density vector comparison against historical incident clusters to establish probabilistic cluster proximity in sub-8ms.",
    },
    {
      num: "03",
      name: "Deterministic Heuristic Guardrails",
      desc: "Statutory rule filters verifying authentication, database starvation, and compliance SLA thresholds before final automated dispatch.",
    },
  ];

  return (
    <section id="research" className="relative py-20 px-6 bg-obsidian-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Act III Title Block */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase">
            AUTONOMOUS TRIAGE.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto leading-relaxed">
            Government of India Registered Computer Science Copyright &amp; Peer-Reviewed Research.
          </p>
        </div>

        {/* Paper Citation Card & Statutory Provenance */}
        <div data-reveal className="p-8 sm:p-12 rounded-2xl bg-obsidian-surface border border-white/[0.06] space-y-10">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-white/[0.06] pb-8">
            <div className="space-y-4 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-widest text-inferno font-medium">
                [ACT III] · PEER-REVIEWED RESEARCH &amp; STATUTORY INTELLECTUAL PROPERTY
              </span>

              <h3 className="font-monumental text-3xl sm:text-5xl text-white font-bold tracking-tight">
                AutoTriage AI Engine
              </h3>

              <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
                Published research investigating hybrid retrieval-augmented generation (RAG-lite) vector similarity combined with deterministic intent heuristics to eliminate manual triage latency in high-volume enterprise systems. Formally registered under the Government of India Copyright Office (ROC <strong className="text-white">SW-2026023768</strong>, Diary <strong className="text-white">SW-6982/2026-CO</strong>) and presented at the National Conference on Recent Trends in Engineering &amp; Non-Conventional Energy (NCRENB-2026).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs sm:text-sm font-sans border-t border-white/[0.04]">
                <div>
                  <span className="font-mono text-xs text-mineral block">AUTHORS</span>
                  <span className="font-medium text-white">D. Solanki, P. Ubale, S. Mudras</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-mineral block">AFFILIATION</span>
                  <span className="font-medium text-white">University of Mumbai</span>
                </div>
                <div>
                  <span className="font-mono text-xs text-mineral block">STATUTORY ROC</span>
                  <span className="font-medium text-inferno font-mono">SW-2026023768</span>
                </div>
              </div>
            </div>

            {/* Statutory Seal Box */}
            <div className="p-6 rounded-xl bg-obsidian-dark border border-white/[0.06] text-center space-y-3 self-start lg:min-w-[240px]">
              <ShieldCheck className="w-8 h-8 text-champagne mx-auto" />
              <div className="font-monumental text-lg text-white font-bold">
                Government of India
              </div>
              <p className="text-xs text-mineral font-mono">
                Copyright ROC SW-2026023768
              </p>
              <div className="pt-2 border-t border-white/[0.04] text-[11px] text-emerald-400 font-sans font-medium">
                ✓ Verified Statutory Filing
              </div>
            </div>
          </div>

          {/* Real Archival Image from The Met (1870s Victorian Architecture in Mumbai) */}
          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 w-full border border-white/[0.04]">
            <img
              src="/assets/victoria-terminus-building-mumbai.jpg"
              alt="Archival photograph of Victoria Terminus in Mumbai from the 1870s, Metropolitan Museum of Art collection"
              width="2833"
              height="2206"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 motion-drift"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-obsidian-dark/90 flex items-end p-6 border-t border-white/[0.04]">
              <p className="text-xs sm:text-sm text-mineral-light font-sans">
                Algorithmic foundations and academic computer science research authored and filed in Mumbai, India.
              </p>
            </div>
          </div>

          {/* Architectural Methodology Blueprint */}
          <div className="space-y-4 pt-2">
            <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted block">
              RESEARCH ARCHITECTURE &amp; PIPELINE SPECIFICATION
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methodologySteps.map((step) => (
                <div 
                  key={step.num}
                  className="p-6 rounded-xl bg-obsidian-dark border border-white/[0.04] space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-inferno font-medium">
                      PHASE {step.num}
                    </span>
                    <h4 className="font-sans font-semibold text-white text-base">
                      {step.name}
                    </h4>
                    <p className="text-xs text-mineral-light font-sans leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Benchmark Verification Table */}
          <div className="space-y-4 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted">
                EMPIRICAL BENCHMARKS // NCRENB-2026 PUBLICATION DATA
              </span>
              <span className="font-mono text-xs text-mineral-muted hidden sm:inline">
                VERIFIED TESTBED
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] text-mineral font-mono text-xs uppercase">
                    <th className="py-3 px-4 font-normal">Metric Parameter</th>
                    <th className="py-3 px-4 font-normal text-white">AutoTriage AI (Hybrid)</th>
                    <th className="py-3 px-4 font-normal">Traditional Triage</th>
                    <th className="py-3 px-4 font-normal text-right">Empirical Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.02]">
                  {benchmarks.map((row) => (
                    <tr key={row.metric} className="hover:bg-white/[0.01] transition-colors">
                      <td className="py-3.5 px-4 font-medium text-white">{row.metric}</td>
                      <td className="py-3.5 px-4 font-mono text-inferno font-semibold">{row.autotriage}</td>
                      <td className="py-3.5 px-4 text-mineral">{row.traditional}</td>
                      <td className="py-3.5 px-4 text-right font-medium text-emerald-400 font-mono text-xs">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Chapter 3 Center Numeral */}
        <div data-reveal className="text-center pt-8">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="font-monumental text-2xl font-bold text-white">
              3
            </span>
            <div className="w-[1px] h-8 bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
