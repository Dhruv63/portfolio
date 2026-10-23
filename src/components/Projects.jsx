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
      metric: "Ambiguity Resolution",
      autotriage: "Cosine Similarity Fallback",
      traditional: "Ad-hoc manual re-routing",
      advantage: "Automated Dispatch",
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
      name: "Deterministic Guardrails",
      desc: "Rule-based filters verifying authentication, database starvation, and compliance SLA thresholds before final automated dispatch.",
    },
  ];

  return (
    <section id="research" className="relative py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-obsidian-dark border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Architectural Masthead — Left-Anchored, Full-Span */}
        <div data-reveal className="border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-champagne">
              <span>ACT III</span>
              <span className="text-white/20">—</span>
              <span>RESEARCH &amp; COMPUTATIONAL SYSTEMS</span>
            </div>
            <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase leading-[0.88]">
              AUTONOMOUS TRIAGE.
            </h2>
          </div>
          <div className="space-y-1 md:text-right">
            <span className="font-mono text-xs text-inferno uppercase tracking-widest block font-medium">
              GOVERNMENT OF INDIA COPYRIGHT ROC SW-2026023768
            </span>
            <p className="font-serif italic text-lg sm:text-2xl text-mineral max-w-lg leading-snug">
              Peer-reviewed computer science research &amp; algorithmic routing.
            </p>
          </div>
        </div>

        {/* Primary Research Plate — Two-Column Architectural Broadsheet (Zero Outer Box) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start pb-16 border-b border-white/[0.08]">

          {/* Left Column: Academic Provenance & Abstract (Cols 1–7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted block">
                PEER-REVIEWED SYSTEM SPECIFICATION &amp; ALGORITHMIC PROVENANCE
              </span>
              <h3 className="font-monumental text-3xl sm:text-5xl text-white font-normal tracking-tight">
                AutoTriage AI Engine
              </h3>
            </div>

            <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
              Published research investigating hybrid retrieval-augmented generation (RAG-lite) vector similarity combined with deterministic intent heuristics to eliminate manual triage latency in high-volume enterprise systems. Formally registered under the Government of India Copyright Office (ROC <strong className="text-white">SW-2026023768</strong>, Diary <strong className="text-white">SW-6982/2026-CO</strong>) and presented at the National Conference on Recent Trends in Engineering &amp; Non-Conventional Energy (NCRENB-2026).
            </p>

            {/* Academic Colophon Ledger (High Contrast Structured Lines) */}
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.12] text-xs sm:text-sm font-sans">
              <div className="grid grid-cols-12 py-3.5 gap-2">
                <span className="col-span-4 font-mono text-xs text-[#B8BDCC] uppercase tracking-wider font-medium">AUTHORS</span>
                <span className="col-span-8 font-medium text-white">D. Solanki, P. Ubale, S. Mudras</span>
              </div>
              <div className="grid grid-cols-12 py-3.5 gap-2">
                <span className="col-span-4 font-mono text-xs text-[#B8BDCC] uppercase tracking-wider font-medium">AFFILIATION</span>
                <span className="col-span-8 font-medium text-white">University of Mumbai</span>
              </div>
              <div className="grid grid-cols-12 py-3.5 gap-2">
                <span className="col-span-4 font-mono text-xs text-[#B8BDCC] uppercase tracking-wider font-medium">REGISTRATION</span>
                <span className="col-span-8 font-medium text-inferno font-mono">ROC SW-2026023768 · Diary SW-6982/2026-CO</span>
              </div>
              <div className="grid grid-cols-12 py-3.5 gap-2">
                <span className="col-span-4 font-mono text-xs text-[#B8BDCC] uppercase tracking-wider font-medium">VENUE</span>
                <span className="col-span-8 font-medium text-white/90">National Conference on Recent Trends in Engineering (NCRENB-2026)</span>
              </div>
              <div className="grid grid-cols-12 py-3.5 gap-2">
                <span className="col-span-4 font-mono text-xs text-[#B8BDCC] uppercase tracking-wider font-medium">STATUS</span>
                <span className="col-span-8 font-medium text-emerald-400 font-sans">✓ Verified Statutory Copyright Entry</span>
              </div>
            </div>
          </div>

          {/* Right Column: Archival Metropolitan Aperture (Cols 8–12) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden h-72 sm:h-96 w-full border border-white/[0.12]">
              <img
                src="/assets/victoria-terminus-building-mumbai.jpg"
                alt="Archival photograph of Victoria Terminus in Mumbai from the 1870s, Metropolitan Museum of Art collection"
                width="2833"
                height="2206"
                className="w-full h-full object-cover filter contrast-[1.08] brightness-100 motion-drift"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#07090D]/90 backdrop-blur-sm flex items-center justify-between p-6 border-t border-white/[0.12]">
                <p className="text-xs sm:text-sm text-white font-sans max-w-sm font-medium">
                  Algorithmic foundations and academic computer science research authored and filed in Mumbai, India.
                </p>
                <ShieldCheck className="w-6 h-6 text-champagne shrink-0 ml-4" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono text-mineral-light tracking-widest uppercase">
              <span className="text-white/80">THE METROPOLITAN MUSEUM OF ART COLLECTION</span>
              <span className="text-champagne">1870s VICTORIAN ARCHITECTURE</span>
            </div>
          </div>

        </div>

        {/* Architectural Methodology Colonnade (3-Column Structural Bays, Zero Cards) */}
        <div data-reveal className="space-y-6 pb-16 border-b border-white/[0.08]">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mineral-muted block">
            RESEARCH ARCHITECTURE &amp; PIPELINE SPECIFICATION
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08]">
            {methodologySteps.map((step) => (
              <div
                key={step.num}
                className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-inferno font-medium uppercase tracking-widest">
                    PHASE {step.num}
                  </span>
                  <span className="text-white/20 select-none">—</span>
                </div>
                <h4 className="font-monumental text-xl sm:text-2xl text-white font-normal tracking-tight">
                  {step.name}
                </h4>
                <p className="text-xs sm:text-sm text-mineral-light font-sans leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Span Peer-Reviewed Benchmark Verification Table (Wall-to-Wall Precision) */}
        <div data-reveal className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-mineral-muted">
              EMPIRICAL BENCHMARKS // NCRENB-2026 PUBLICATION DATA
            </span>
            <div className="flex items-center gap-3">
              <span className="sm:hidden font-mono text-[11px] text-champagne/80 tracking-wider uppercase">
                Scroll horizontally →
              </span>
              <span className="hidden sm:inline font-mono text-xs text-mineral-muted">
                VERIFIED TESTBED CONSTRAINTS
              </span>
            </div>
          </div>

          <div className="overflow-x-auto border-y border-white/[0.08] -mx-6 sm:mx-0 px-6 sm:px-0">
            <table className="w-full min-w-[620px] text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-mineral font-mono text-xs uppercase">
                  <th className="py-4 px-4 sm:px-6 font-normal">Metric Parameter</th>
                  <th className="py-4 px-4 sm:px-6 font-normal text-white">AutoTriage AI (Hybrid)</th>
                  <th className="py-4 px-4 sm:px-6 font-normal">Traditional Triage</th>
                  <th className="py-4 px-4 sm:px-6 font-normal text-right">Empirical Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {benchmarks.map((row) => (
                  <tr key={row.metric} className="hover:bg-white/[0.015] transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-medium text-white">{row.metric}</td>
                    <td className="py-4 px-4 sm:px-6 font-mono text-inferno font-semibold">{row.autotriage}</td>
                    <td className="py-4 px-4 sm:px-6 text-mineral">{row.traditional}</td>
                    <td className="py-4 px-4 sm:px-6 text-right font-medium text-emerald-400 font-mono text-xs">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
