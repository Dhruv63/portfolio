import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Ventures() {
  const productions = [
    {
      id: "esgxpert",
      index: "01",
      category: "STATUTORY COMPLIANCE SAAS",
      title: "ESGXpert Platform",
      tagline: "Automated Greenhouse Gas (GHG) Accounting & SEBI BRSR Core Regulatory Engine.",
      desc: "Enterprise compliance SaaS engineered for Indian corporations facing statutory SEBI BRSR mandates. Ingests raw utility, industrial telemetry, and stationary fuel logs; deterministically calculates Scope 1, 2, and 3 emissions against CEA and GHG Protocol emission factor baselines; and generates legally verifiable, audit-proof filings ready for statutory auditor sign-off.",
      url: "https://www.esgxpert.com",
      urlDisplay: "esgxpert.com",
      specs: [
        { label: "REGULATORY STANDARD", value: "SEBI BRSR Core & ISO 14001" },
        { label: "FACTOR BASELINES", value: "CEA v19 & GHG Protocol Corporate Standard" },
        { label: "AUDIT LATENCY", value: "< 45ms deterministic report compilation" },
        { label: "CORE ARCHITECTURE", value: "Next.js, TypeScript, PostgreSQL, Docker, Node.js" },
        { label: "DEPLOYMENT LIFECYCLE", value: "Active Enterprise Production (2024—Present)" },
      ],
      metrics: [
        { label: "Scope 1 & 2 Math", val: "Deterministic", sub: "Zero-drift algorithm" },
        { label: "Audit Readiness", val: "100%", sub: "Verifiable ledger" },
        { label: "Compliance Focus", val: "SEBI Core", sub: "Statutory India" },
      ],
    },
    {
      id: "vapourbit",
      index: "02",
      category: "DISTRIBUTED SYSTEMS STUDIO",
      title: "VAPOURBIT Systems",
      tagline: "Cloud Infrastructure, Distributed Microservices & High-Throughput APIs.",
      desc: "Cloud architecture and backend systems studio delivering high-throughput containerized microservices, asynchronous worker queues, and enterprise AI workflow integrations. Architected to maintain strict sub-20ms latency bounds under high concurrency with multi-AZ failover and immutable configuration pipelines.",
      url: "https://vapourbit.com",
      urlDisplay: "vapourbit.com",
      specs: [
        { label: "ORCHESTRATION", value: "Docker Containers on AWS EC2 & S3" },
        { label: "COMMUNICATION PROTOCOL", value: "gRPC & High-Throughput RESTful Gateways" },
        { label: "LATENCY GUARANTEE", value: "< 18ms p99 SLA across distributed nodes" },
        { label: "CACHE & QUEUE LAYER", value: "Redis In-Memory Engine & BullMQ async workers" },
        { label: "AVAILABILITY TARGET", value: "99.98% uptime SLA in multi-AZ VPC" },
      ],
      metrics: [
        { label: "p99 Latency SLA", val: "< 18ms", sub: "Bounded response" },
        { label: "Infrastructure", val: "Distributed", sub: "Containerized AWS" },
        { label: "API SLA", val: "99.98%", sub: "High-throughput" },
      ],
    },
    {
      id: "hyuzz",
      index: "03",
      category: "CREATIVE COMPUTING ENGINE",
      title: "Hyuzz Color Engine",
      tagline: "Canvas Sub-Pixel Color Sampling & Deterministic Chromatic Algorithms.",
      desc: "Lightweight browser utility for digital artists and design systems engineers. Utilizes raw HTML5 Canvas memory buffers for sub-pixel chromatic sampling, real-time hexadecimal color search, and algorithmic color-harmony calculations with zero external client-side runtime dependencies.",
      url: "https://hyuzz.vercel.app/app",
      urlDisplay: "hyuzz.vercel.app",
      specs: [
        { label: "CORE RUNTIME", value: "HTML5 Canvas API, React 18, Vite" },
        { label: "COMPUTATIONAL MODEL", value: "Algorithmic HSL/RGB conversion matrix" },
        { label: "SAMPLING LATENCY", value: "Sub-millisecond memory buffer read" },
        { label: "BUNDLE OVERHEAD", value: "Zero external dependencies (<12kb gzipped)" },
        { label: "RELEASE CYCLE", value: "Production Public Utility (2025)" },
      ],
      metrics: [
        { label: "Buffer Sampling", val: "< 1ms", sub: "Direct canvas memory" },
        { label: "Bundle Overhead", val: "< 12kb", sub: "Zero dependencies" },
        { label: "Color Space", val: "HSL / RGB", sub: "Harmonic calculus" },
      ],
    },
  ];

  return (
    <section id="work" className="relative py-20 px-6 bg-obsidian-dark border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Act II Title Block */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase">
            THE PRODUCTIONS.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto leading-relaxed">
            Architected enterprise compliance engines, cloud systems, and creative tooling.
          </p>
        </div>

        {/* Productions Spread */}
        <div className="space-y-16">
          {productions.map((item, idx) => (
            <React.Fragment key={item.id}>
              <article
                data-reveal
                className="p-8 sm:p-12 rounded-2xl bg-obsidian-surface border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-8"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1.5">
                    <span className="font-mono text-xs tracking-widest text-inferno font-medium uppercase">
                      [{item.index}] {item.category}
                    </span>
                    <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick(620)}
                    className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-mineral-light hover:text-white transition-colors"
                  >
                    <span className="font-mono text-xs text-mineral group-hover:text-champagne transition-colors">
                      {item.urlDisplay}
                    </span>
                    <span className="border-b border-white/20 group-hover:border-white transition-colors">
                      Explore Production
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-mineral group-hover:text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Narrative Description & High-Level Statement */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-base sm:text-lg text-white font-serif italic leading-relaxed">
                      "{item.tagline}"
                    </p>
                    <p className="text-base text-mineral-light font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* High-Level Architectural Guarantees */}
                  <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                    {item.metrics.map((m) => (
                      <div key={m.label} className="p-4 rounded-xl bg-obsidian-dark border border-white/[0.03] space-y-1">
                        <span className="font-mono text-[10px] text-mineral uppercase block truncate">
                          {m.label}
                        </span>
                        <span className="font-monumental text-xl sm:text-2xl text-white font-bold block">
                          {m.val}
                        </span>
                        <span className="text-[11px] text-mineral-muted font-sans block truncate">
                          {m.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Systems Specification Ledger (Zero Toy Sliders — Pure Architectural Precision) */}
                <div className="pt-4 border-t border-white/[0.04] space-y-3">
                  <span className="font-mono text-[11px] tracking-wider text-mineral-muted uppercase block">
                    ENGINEERING &amp; STATUTORY SPECIFICATIONS
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {item.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-baseline justify-between gap-4 py-1.5 border-b border-white/[0.02] text-xs sm:text-sm font-sans"
                      >
                        <span className="font-mono text-xs text-mineral shrink-0">
                          {spec.label}:
                        </span>
                        <span className="font-medium text-white text-right truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Interleaved Archival Skyline at Act Midpoint */}
              {idx === 0 && (
                <div data-reveal className="relative rounded-2xl overflow-hidden h-72 sm:h-96 w-full border border-white/[0.04]">
                  <img
                    src="/assets/mumbai-india-mumbai-bombay-skyline-with-high.jpg"
                    alt="Mumbai commercial financial center and technology corridor"
                    width="1920"
                    height="1280"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 motion-drift"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-obsidian-dark/90 flex items-end p-8 border-t border-white/[0.04]">
                    <p className="text-sm sm:text-base text-mineral-light font-sans max-w-xl">
                      Operating from Mumbai, India — architecting statutory systems and cloud infrastructures for enterprise regulatory compliance.
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Chapter 2 Numeral */}
        <div data-reveal className="text-center pt-8">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="font-monumental text-2xl font-bold text-white">
              2
            </span>
            <div className="w-[1px] h-8 bg-white/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
