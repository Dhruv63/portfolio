import React, { useState } from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Projects() {
  const sampleIncidents = [
    {
      text: "High connection pool starvation on Postgres replica during BRSR fiscal filing batch",
      urgency: "P1 Critical",
      latency: "11.8ms",
      confidence: "98.4%",
      assignedRoute: "Database Reliability Group",
    },
    {
      text: "OAuth2 refresh token cycle returning 401 on enterprise tenant API gateway",
      urgency: "P2 High",
      latency: "14.2ms",
      confidence: "95.1%",
      assignedRoute: "Security Core Architecture",
    },
    {
      text: "Scope 3 supplier emissions questionnaire PDF export layout overflow on mobile",
      urgency: "P3 Normal",
      latency: "9.6ms",
      confidence: "99.2%",
      assignedRoute: "Product Experience Team",
    },
  ];

  const [selectedIncident, setSelectedIncident] = useState(0);
  const [isClassifying, setIsClassifying] = useState(false);

  const active = sampleIncidents[selectedIncident];

  const handleSelect = (idx) => {
    soundEngine.playClick(640);
    setIsClassifying(true);
    setSelectedIncident(idx);
    setTimeout(() => {
      setIsClassifying(false);
      soundEngine.playClick(880);
    }, 280);
  };

  return (
    <section id="research" className="relative py-16 sm:py-20 px-6 bg-[#08090E]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Act III Title Block (No eyebrow above heading) */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight uppercase">
            AUTONOMOUS TRIAGE.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto">
            Government of India Registered Computer Science Copyright &amp; Peer-Reviewed Research.
          </p>
        </div>

        {/* Paper Citation Card */}
        <div data-reveal className="p-8 sm:p-12 rounded-2xl bg-obsidian-elevated space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
                AutoTriage AI Engine
              </h3>

              <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
                Published research investigating hybrid retrieval-augmented generation (RAG-lite) vector similarity combined with deterministic intent heuristics to eliminate manual triage latency in high-volume enterprise software. Registered under Government of India Copyright ROC SW-2026023768 (Diary SW-6982/2026-CO) and presented at NCRENB-2026.
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-sans text-mineral-light pt-2">
                <div>
                  <span className="text-mineral-light text-sm block font-medium">Co-Authors</span>
                  <span className="text-white">D. Solanki, P. Ubale, S. Mudras</span>
                </div>
                <div>
                  <span className="text-mineral-light text-sm block font-medium">Affiliation</span>
                  <span className="text-white">University of Mumbai</span>
                </div>
                <div>
                  <span className="text-mineral-light text-sm block font-medium">Copyright Registration</span>
                  <span className="text-white">ROC SW-2026023768</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-obsidian-surface text-center space-y-2 self-start min-w-[200px]">
              <ShieldCheck className="w-8 h-8 text-champagne mx-auto" />
              <div className="font-monumental text-base text-white font-bold">Registered Copyright</div>
              <p className="text-sm text-mineral-light font-sans">Statutory Software IP</p>
            </div>
          </div>

          {/* Real Archival Image from The Met (Mumbai Architecture / Provenance) */}
          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 w-full">
            <img
              src="/assets/victoria-terminus-building-mumbai.jpg"
              alt="Archival photograph of Victoria Terminus in Mumbai from the 1870s"
              width="2833"
              height="2206"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 motion-drift"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-obsidian-dark/90 flex items-end p-6">
              <p className="text-sm text-mineral-light font-sans">
                Algorithmic foundations and academic computer science research authored in Mumbai, India.
              </p>
            </div>
          </div>

          {/* Interactive Live Triage Simulator (data-ui) */}
          <div data-ui="triage-terminal" className="p-6 sm:p-8 rounded-xl bg-obsidian-surface space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-inferno" />
                <span className="text-sm font-sans font-semibold text-white">
                  Live research engine simulator
                </span>
              </div>
              <span className="text-sm font-sans text-mineral">
                Select an incident payload below
              </span>
            </div>

            {/* Incident Selector Buttons (No small icons on top, pure editorial choice buttons) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {sampleIncidents.map((inc, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`p-4 rounded-lg text-left text-sm font-sans transition-colors ${
                    selectedIncident === idx
                      ? 'bg-white text-black font-bold'
                      : 'bg-obsidian-dark hover:bg-obsidian-elevated text-mineral-light'
                  }`}
                >
                  <div className="text-sm opacity-75 mb-1 font-semibold">{inc.urgency}</div>
                  <div className="line-clamp-2 leading-snug">{inc.text}</div>
                </button>
              ))}
            </div>

            {/* Telemetry Output Display */}
            <div className="p-6 rounded-lg bg-obsidian-dark space-y-4">
              <div className="flex items-center justify-between text-sm font-sans text-mineral-light pb-2 bg-obsidian-elevated/40 p-3 rounded">
                <span>Evaluation Telemetry</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>Sub-15ms Guarantee</span>
                </span>
              </div>

              {isClassifying ? (
                <div className="py-6 text-center text-sm font-sans text-champagne">
                  Vectorizing semantic embedding and calculating cosine similarity...
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                  <div>
                    <span className="text-sm text-mineral font-sans">Priority Tier</span>
                    <p className="font-monumental text-2xl text-inferno font-bold">{active.urgency}</p>
                  </div>
                  <div>
                    <span className="text-sm text-mineral font-sans">Inference Latency</span>
                    <p className="font-monumental text-2xl text-emerald-400 font-bold">{active.latency}</p>
                  </div>
                  <div>
                    <span className="text-sm text-mineral font-sans">Vector Match</span>
                    <p className="font-monumental text-2xl text-white font-bold">{active.confidence}</p>
                  </div>
                  <div>
                    <span className="text-sm text-mineral font-sans">Automated Routing</span>
                    <p className="font-sans text-sm text-white font-semibold mt-1 truncate">{active.assignedRoute}</p>
                  </div>
                </div>
              )}
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
