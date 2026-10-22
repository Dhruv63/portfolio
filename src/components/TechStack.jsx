import React from 'react';
import { soundEngine } from '../utils/audio';

export default function TechStack() {
  const pillars = [
    {
      title: "Core Languages",
      desc: "Typed, deterministic enterprise runtimes and systems programming.",
      skills: ["TypeScript", "JavaScript (ESNext)", "Python 3.11+", "SQL & PostgreSQL Dialect", "HTML5 Canvas"],
    },
    {
      title: "Cloud Infrastructure",
      desc: "Low-latency microservices, async worker queues, and containerized deployments.",
      skills: ["Node.js (LTS)", "FastAPI", "Express", "Docker Containers", "AWS (EC2, S3, IAM)", "Linux / Ubuntu"],
    },
    {
      title: "Data Storage & Caching",
      desc: "Relational statutory ledgers and distributed in-memory cache architectures.",
      skills: ["PostgreSQL (ACID Compliant)", "Supabase", "Redis (Cache & PubSub)", "MongoDB", "OpenSearch"],
    },
    {
      title: "Applied AI & Interfaces",
      desc: "Semantic vector retrieval, intent classification engines, and reactive web UI.",
      skills: ["React 18+", "Next.js (App Router)", "RAG-lite Embeddings", "Vector Similarity (Cosine)", "Tailwind CSS"],
    },
  ];

  const systems = [
    {
      name: "Statutory Data Engine",
      purpose: "SEBI BRSR Core compliance ledger with automated carbon factor calculation.",
      latency: "< 45ms audit export",
      spec: "100% deterministic mathematical model verified against CEA standards.",
    },
    {
      name: "Microservice Cloud Studio",
      purpose: "High-throughput asynchronous API gateway and distributed worker pool.",
      latency: "< 18ms p99 SLA",
      spec: "Docker containerized, auto-scaling AWS infrastructure with Redis cache.",
    },
    {
      name: "Autonomous Triage Core",
      purpose: "Govt. registered incident triage engine combining RAG-lite vector search and heuristics.",
      latency: "< 12ms inference",
      spec: "Statutory computer science copyright ROC SW-2026023768.",
    },
  ];

  return (
    <section id="stack" className="relative py-16 sm:py-20 px-6 bg-[#0D1017]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Act IV Title Block (No eyebrow above heading) */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase">
            THE ARSENAL.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto">
            Production-proven technologies, cloud infrastructure, and computational engines.
          </p>
        </div>

        {/* Narrative Split: Architectural Manifesto + Pillars */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 rounded-2xl bg-obsidian-elevated">
          
          {/* Left Column: Architectural Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Deterministic Foundations
            </h3>
            
            <p className="text-base sm:text-lg text-mineral-light font-sans leading-relaxed">
              Every layer from statutory SEBI BRSR calculations to microservice gRPC endpoints is built with immutable schema contracts, end-to-end type safety, and zero-compromise audit trails.
            </p>

            <div className="p-6 rounded-xl bg-obsidian-surface space-y-3">
              <span className="font-monumental text-xl font-bold text-champagne block">
                Engineering Guarantees
              </span>
              <ul className="space-y-2 text-sm sm:text-base text-mineral-light font-sans">
                <li>• Strict schema validation on all inputs</li>
                <li>• Sub-20ms median latency bounds across cloud APIs</li>
                <li>• 100% audit-proof regulatory reproducibility</li>
                <li>• Zero-dependency resilient algorithms for critical paths</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Large Typographic Editorial List */}
          <div className="lg:col-span-7 space-y-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title} 
                onMouseEnter={() => soundEngine.playClick(320)}
                className="space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-monumental text-2xl text-white font-bold tracking-tight">
                    {pillar.title}
                  </h4>
                  <span className="text-sm text-mineral font-sans">{pillar.desc}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {pillar.skills.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-lg bg-obsidian-surface text-mineral-light text-sm font-sans font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Live System Architecture Benchmark Ledger (Tone and space separation) */}
        <div data-reveal className="bg-obsidian-elevated rounded-2xl p-6 sm:p-10 space-y-6">
          {systems.map((sys) => (
            <div key={sys.name} className="p-6 sm:p-8 rounded-xl bg-obsidian-surface/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <h4 className="font-monumental text-2xl font-bold text-white tracking-tight">
                  {sys.name}
                </h4>
                <p className="text-base text-mineral-light font-sans leading-relaxed">
                  {sys.purpose}
                </p>
                <div className="text-sm text-mineral-light font-sans">
                  {sys.spec}
                </div>
              </div>
              <div className="text-left md:text-right shrink-0">
                <span className="font-monumental text-3xl text-emerald-400 font-bold block">
                  {sys.latency}
                </span>
                <span className="text-sm text-mineral font-sans">
                  Verified In Production
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Chapter 4 Center Numeral */}
        <div data-reveal className="text-center pt-8">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="font-monumental text-2xl font-bold text-white">
              4
            </span>
            <div className="w-[1px] h-8 bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
