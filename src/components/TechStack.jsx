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
    <section id="stack" className="relative py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-obsidian-dark border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Architectural Masthead — Left-Anchored, Full-Span */}
        <div data-reveal className="border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-champagne">
              <span>ACT IV</span>
              <span className="text-white/20">—</span>
              <span>SYSTEMS ARSENAL &amp; RUNTIMES</span>
            </div>
            <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase leading-[0.88]">
              THE ARSENAL.
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-2xl text-mineral max-w-lg leading-snug md:text-right">
            Production-proven technologies, cloud infrastructure, and computational engines.
          </p>
        </div>

        {/* Narrative Intro & Principles Colonnade (3-Column Structural Bays, Zero Boxes) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-5 space-y-4 lg:pr-6 lg:border-r lg:border-white/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne block font-medium">
              // ARCHITECTURAL PHILOSOPHY
            </span>
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-normal tracking-tight">
              Deterministic Foundations
            </h3>
            <p className="text-base text-[#DCDFE8] font-sans leading-relaxed">
              Every layer from statutory SEBI BRSR compliance to distributed microservice endpoints is engineered with immutable schema contracts, end-to-end type safety, and zero-compromise audit trails.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            <div className="py-4 sm:py-0 sm:px-6 first:sm:pl-0 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">01 / IMMUTABILITY</span>
              <h4 className="font-sans font-semibold text-white text-base">Strict Schemas</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                Guaranteed schema validation on all inputs, database states, and API payloads.
              </p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">02 / LATENCY</span>
              <h4 className="font-sans font-semibold text-white text-base">Bounded SLAs</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                Sub-20ms median latency bounds across cloud network calls and async workers.
              </p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 last:sm:pr-0 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">03 / AUDITABILITY</span>
              <h4 className="font-sans font-semibold text-white text-base">Regulatory Proof</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                100% reproducible audit trails engineered for statutory compliance authorities.
              </p>
            </div>
          </div>
        </div>

        {/* Systems Capability Matrix — 4-Column Colonnade (Zero Cards) */}
        <div data-reveal className="space-y-6 pb-16 border-b border-white/[0.08]">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-medium">
              SYSTEMS CAPABILITY MATRIX // 04 ARCHITECTURAL PILLARS
            </span>
            <span className="font-mono text-xs text-champagne hidden sm:inline">
              STANDARDS: PRODUCTION DEPLOYED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-b border-white/[0.08]">
            {pillars.map((pillar) => (
              <div
                key={pillar.category}
                onMouseEnter={() => soundEngine.playClick(320)}
                className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-inferno font-semibold uppercase">
                      [{pillar.index}] {pillar.category}
                    </span>
                  </div>

                  <h4 className="font-monumental text-2xl text-white font-normal tracking-tight group-hover:text-champagne transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-[#C6CAD6] font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Clean Tabular Rows (No Pills, Pure Editorial Alignment) */}
                <div className="border-t border-white/[0.08] pt-4 space-y-2">
                  {pillar.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between text-xs font-sans gap-2 py-1.5 border-b border-white/[0.04] last:border-none hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="font-medium text-white tracking-wide truncate">
                        {tech.name}
                      </span>
                      <span className="text-[#A2A7B8] text-right font-mono text-[11px] truncate shrink-0 max-w-[150px]">
                        {tech.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audited Architectural Telemetry Ledger (Full-Span Table, Zero Cards) */}
        <div data-reveal className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/80 font-medium">
              VERIFIED ARCHITECTURAL BENCHMARKS // AUDITED TELEMETRY
            </span>
            <span className="font-mono text-xs text-champagne hidden sm:inline">
              REAL-TIME PRODUCTION LIMITS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08]">
            {systems.map((sys) => (
              <div
                key={sys.name}
                className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-champagne tracking-wider uppercase font-medium">
                      {sys.code}
                    </span>
                    <span className="font-mono text-xs text-[#A2A7B8] uppercase">
                      {sys.latencyLabel}
                    </span>
                  </div>

                  <h5 className="font-monumental text-xl sm:text-2xl font-normal text-white tracking-tight">
                    {sys.name}
                  </h5>

                  <p className="text-xs sm:text-sm text-[#DCDFE8] font-sans leading-relaxed">
                    {sys.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-baseline justify-between">
                  <span className="font-monumental text-3xl font-normal text-inferno">
                    {sys.latency}
                  </span>
                  <span className="text-xs text-mineral-light font-mono">
                    Deterministic SLA
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
