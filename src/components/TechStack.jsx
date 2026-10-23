import React from 'react';
import { soundEngine } from '../utils/audio';

export default function TechStack() {
  const pillars = [
    {
      index: "01",
      category: "LANGUAGES & RUNTIMES",
      title: "Systems & Languages",
      desc: "Typed execution environments and modern systems languages.",
      technologies: [
        { name: "TypeScript 5.x", role: "Strict types across contracts and schemas" },
        { name: "JavaScript (ESNext)", role: "Event loop and async concurrency" },
        { name: "Python 3.11+", role: "Data pipelines and machine learning" },
        { name: "SQL (PostgreSQL)", role: "Relational schema design and indexing" },
        { name: "HTML5 Canvas API", role: "2D graphics and pixel buffer manipulation" },
      ],
    },
    {
      index: "02",
      category: "BACKEND & CLOUD",
      title: "Cloud Infrastructure",
      desc: "Containerized microservices, background queues, and cloud deployments.",
      technologies: [
        { name: "Node.js (LTS)", role: "Asynchronous microservice backends" },
        { name: "FastAPI & Express", role: "Typed REST APIs and service routing" },
        { name: "Docker", role: "Immutable containerized images" },
        { name: "AWS Infrastructure", role: "EC2 compute, S3 storage, IAM security" },
        { name: "Linux (Ubuntu)", role: "Server configuration and process management" },
      ],
    },
    {
      index: "03",
      category: "DATA ARCHITECTURE",
      title: "Databases & Storage",
      desc: "Relational ledgers, in-memory caching, and document storage.",
      technologies: [
        { name: "PostgreSQL", role: "Transactional records with schema constraints" },
        { name: "Redis", role: "Low-latency caching and queue broker" },
        { name: "Supabase", role: "Row-level security and real-time triggers" },
        { name: "MongoDB", role: "Flexible JSON document stores" },
        { name: "OpenSearch", role: "Full-text indexing and log analysis" },
      ],
    },
    {
      index: "04",
      category: "FRONTEND & AI",
      title: "Applied AI & Web UI",
      desc: "Semantic vector search, local heuristics, and component architectures.",
      technologies: [
        { name: "React 18 & Next.js", role: "Componentized reactive user interfaces" },
        { name: "Vector Embeddings", role: "Cosine similarity calculation and search" },
        { name: "Tailwind CSS", role: "Tokenized design system implementation" },
        { name: "Web Audio API", role: "Procedural sound generation and UI feedback" },
        { name: "Vite", role: "Fast ES module build and bundling pipeline" },
      ],
    },
  ];

  const systems = [
    {
      code: "SEBI-BRSR-01",
      name: "Carbon Accounting Engine",
      purpose: "Calculates Scope 1, 2, and 3 emissions against CEA factors and generates SEBI compliance reports.",
      latency: "< 45ms",
      latencyLabel: "export latency",
      spec: "Mathematical model verified against CEA CO2 database.",
    },
    {
      code: "GATEWAY-02",
      name: "Microservice API Gateway",
      purpose: "Asynchronous HTTP/gRPC routing layer with BullMQ background worker pools.",
      latency: "< 18ms",
      latencyLabel: "p95 SLA",
      spec: "Containerized Docker services on AWS with Redis caching.",
    },
    {
      code: "ROC-SW-03",
      name: "AutoTriage AI Engine",
      purpose: "Hybrid ticket classification combining local vector similarity with rule-based routing.",
      latency: "< 12ms",
      latencyLabel: "inference",
      spec: "Registered research paper and software entry (ROC SW-2026023768).",
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
              <span>ARCHITECTURE &amp; RUNTIMES</span>
            </div>
            <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight uppercase leading-[0.92]">
              THE ARSENAL.
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-2xl text-mineral max-w-lg leading-snug md:text-right">
            Production technologies, infrastructure components, and engineering practices.
          </p>
        </div>

        {/* Narrative Intro & Principles Colonnade (3-Column Structural Bays, Zero Boxes) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start pb-16 border-b border-white/[0.08]">
          <div className="lg:col-span-5 space-y-4 lg:pr-6 lg:border-r lg:border-white/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne block font-medium">
              // CORE PRACTICES
            </span>
            <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
              Engineering Principles
            </h3>
            <p className="text-base text-[#DCDFE8] font-sans leading-relaxed">
              Systems engineered around strict schema validation, end-to-end type safety, and verifiable audit trails. Whether building regulatory carbon accounting platforms or microservice API backends, every layer prioritizes clarity, data integrity, and reproducible behavior.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            <div className="py-4 sm:py-0 sm:px-6 first:sm:pl-0 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">01 / DATA INTEGRITY</span>
              <h4 className="font-sans font-semibold text-white text-base">Schema Contracts</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                Zod, TypeScript, and database constraints enforce valid data across API boundaries and storage.
              </p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">02 / RELIABILITY</span>
              <h4 className="font-sans font-semibold text-white text-base">Fault Isolation</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                Isolated worker queues, health checks, and connection pooling prevent cascading service failures.
              </p>
            </div>
            <div className="py-4 sm:py-0 sm:px-6 last:sm:pr-0 space-y-2">
              <span className="font-mono text-xs text-champagne block uppercase tracking-wider font-medium">03 / AUDITABILITY</span>
              <h4 className="font-sans font-semibold text-white text-base">Verifiable Trails</h4>
              <p className="text-xs text-[#CBD0DF] font-sans leading-relaxed">
                Append-only ledgers and structured logging ensure computations can be inspected and reproduced.
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

                  <h4 className="font-monumental text-2xl text-white font-bold tracking-tight group-hover:text-champagne transition-colors">
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

                  <h5 className="font-monumental text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {sys.name}
                  </h5>

                  <p className="text-xs sm:text-sm text-[#DCDFE8] font-sans leading-relaxed">
                    {sys.purpose}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-baseline justify-between">
                  <span className="font-monumental text-3xl font-bold text-inferno">
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
