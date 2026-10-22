import React from 'react';
import { soundEngine } from '../utils/audio';

export default function TechStack() {
  const pillars = [
    {
      index: "01",
      category: "CORE RUNTIMES",
      title: "Systems & Languages",
      desc: "Typed, deterministic enterprise execution environments and systems programming.",
      technologies: [
        { name: "TypeScript 5.x", role: "Strictly typed enterprise contracts" },
        { name: "JavaScript (ESNext)", role: "Modern async event-loop runtime" },
        { name: "Python 3.11+", role: "High-performance scientific & AI backends" },
        { name: "SQL & PostgreSQL Dialect", role: "Deterministic relational queries" },
        { name: "HTML5 Canvas API", role: "Low-overhead visual & physics rendering" },
      ],
    },
    {
      index: "02",
      category: "DISTRIBUTED CLOUD",
      title: "Cloud Infrastructure",
      desc: "Low-latency microservices, async worker queues, and containerized deployments.",
      technologies: [
        { name: "Node.js (LTS)", role: "Event-driven asynchronous I/O" },
        { name: "FastAPI & Express", role: "High-throughput RESTful gateways" },
        { name: "Docker Containers", role: "Immutable production environments" },
        { name: "AWS Cloud Infrastructure", role: "EC2 compute, S3 assets, IAM policies" },
        { name: "Linux / Ubuntu Server", role: "Hardened kernel configuration & tuning" },
      ],
    },
    {
      index: "03",
      category: "STORAGE ARCHITECTURE",
      title: "Data Storage & Caching",
      desc: "Relational statutory ledgers and distributed in-memory cache architectures.",
      technologies: [
        { name: "PostgreSQL (ACID)", role: "Statutory compliance ledgers & schemas" },
        { name: "Supabase Architecture", role: "Real-time subscriptions & row-level security" },
        { name: "Redis In-Memory Engine", role: "Sub-millisecond caching & Pub/Sub" },
        { name: "MongoDB Cluster", role: "Unstructured document storage" },
        { name: "OpenSearch Indexing", role: "Distributed full-text retrieval" },
      ],
    },
    {
      index: "04",
      category: "APPLIED INTELLIGENCE",
      title: "Applied AI & Interfaces",
      desc: "Semantic vector retrieval, intent classification engines, and reactive web UI.",
      technologies: [
        { name: "React 18 & Next.js", role: "Predictable, componentized reactive interfaces" },
        { name: "RAG-lite Embeddings", role: "Lightweight semantic retrieval pipelines" },
        { name: "Vector Cosine Similarity", role: "Deterministic incident classification" },
        { name: "Tailwind CSS Engine", role: "Restrained, tokenized visual hierarchy" },
        { name: "Web Audio Synthesizer", role: "Procedural soundscape generation" },
      ],
    },
  ];

  const systems = [
    {
      code: "SEBI-BRSR-01",
      name: "Statutory Compliance Engine",
      purpose: "SEBI BRSR Core corporate carbon calculation ledger with automated factor estimation.",
      latency: "< 45ms",
      latencyLabel: "p95 export",
      spec: "Deterministic mathematical model strictly calibrated against CEA emission factors.",
    },
    {
      code: "GATEWAY-02",
      name: "Cloud Microservice Architecture",
      purpose: "High-throughput asynchronous API gateway and distributed worker queue pool.",
      latency: "< 18ms",
      latencyLabel: "p99 SLA",
      spec: "Containerized, auto-scaling AWS infrastructure with Redis distributed caching.",
    },
    {
      code: "ROC-SW-03",
      name: "Autonomous Triage Core",
      purpose: "Government of India registered triage engine combining RAG-lite vector similarity with heuristics.",
      latency: "< 12ms",
      latencyLabel: "inference",
      spec: "Statutory computer science copyright registration ROC SW-2026023768.",
    },
  ];

  return (
    <section id="stack" className="relative py-20 px-6 bg-obsidian-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Act IV Header */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase">
            THE ARSENAL.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto leading-relaxed">
            Production-proven technologies, cloud infrastructure, and computational engines.
          </p>
        </div>

        {/* Narrative Intro & Principles */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne">
              // ARCHITECTURAL PHILOSOPHY
            </span>
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Deterministic Foundations
            </h3>
            <p className="text-base text-mineral-light font-sans leading-relaxed">
              Every layer from statutory SEBI BRSR compliance to distributed microservice endpoints is engineered with immutable schema contracts, end-to-end type safety, and zero-compromise audit trails.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-obsidian-surface border border-white/[0.04] space-y-2">
              <span className="font-mono text-xs text-champagne block">01 / IMMUTABILITY</span>
              <h4 className="font-sans font-semibold text-white text-sm">Strict Schemas</h4>
              <p className="text-xs text-mineral font-sans leading-relaxed">
                Guaranteed schema validation on all inputs and API payloads.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-obsidian-surface border border-white/[0.04] space-y-2">
              <span className="font-mono text-xs text-champagne block">02 / LATENCY</span>
              <h4 className="font-sans font-semibold text-white text-sm">Bounded SLAs</h4>
              <p className="text-xs text-mineral font-sans leading-relaxed">
                Sub-20ms median latency bounds across cloud network calls.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-obsidian-surface border border-white/[0.04] space-y-2">
              <span className="font-mono text-xs text-champagne block">03 / AUDITABILITY</span>
              <h4 className="font-sans font-semibold text-white text-sm">Regulatory Proof</h4>
              <p className="text-xs text-mineral font-sans leading-relaxed">
                100% reproducible audit trails for compliance authorities.
              </p>
            </div>
          </div>
        </div>

        {/* Systems Capability Matrix (Zero Pill Tags — Clean Typographic Ledger) */}
        <div data-reveal className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted">
              SYSTEMS CAPABILITY MATRIX // 04 PILLARS
            </span>
            <span className="font-mono text-xs text-mineral-muted hidden sm:inline">
              STANDARDS: PRODUCTION DEPLOYED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.category}
                onMouseEnter={() => soundEngine.playClick(320)}
                className="p-8 rounded-2xl bg-obsidian-surface border border-white/[0.04] hover:border-white/[0.12] transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-inferno font-medium">
                      [{pillar.index}] {pillar.category}
                    </span>
                  </div>

                  <h4 className="font-monumental text-2xl text-white font-bold tracking-tight">
                    {pillar.title}
                  </h4>

                  <p className="text-sm text-mineral font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Clean Editorial Typographic Rows */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  {pillar.technologies.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="flex items-center justify-between text-xs sm:text-sm font-sans gap-4 py-1 border-b border-white/[0.02] last:border-none"
                    >
                      <span className="font-medium text-white tracking-wide">
                        {tech.name}
                      </span>
                      <span className="text-mineral-muted text-right font-mono text-xs truncate max-w-[220px]">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Systems Production Ledger */}
        <div data-reveal className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-mineral-muted">
              VERIFIED ARCHITECTURAL BENCHMARKS
            </span>
            <span className="font-mono text-xs text-mineral-muted hidden sm:inline">
              AUDITED TELEMETRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {systems.map((sys) => (
              <div 
                key={sys.name} 
                className="p-6 rounded-2xl bg-obsidian-surface border border-white/[0.04] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-champagne tracking-wider uppercase">
                      {sys.code}
                    </span>
                    <span className="font-mono text-[10px] text-mineral-muted uppercase">
                      {sys.latencyLabel}
                    </span>
                  </div>

                  <h5 className="font-monumental text-xl font-bold text-white tracking-tight">
                    {sys.name}
                  </h5>

                  <p className="text-xs text-mineral-light font-sans leading-relaxed">
                    {sys.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.04] flex items-baseline justify-between">
                  <span className="font-monumental text-2xl font-bold text-inferno">
                    {sys.latency}
                  </span>
                  <span className="text-[11px] text-mineral font-mono">
                    Deterministic SLA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter 4 Numeral */}
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
