import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Ventures() {
  const productions = [
    {
      id: "esgxpert",
      index: "01",
      category: "ENTERPRISE CLIMATE SAAS",
      title: "ESGXpert Platform",
      tagline: "Automated Greenhouse Gas (GHG) Accounting & SEBI BRSR Core Regulatory Engine.",
      desc: "Enterprise compliance platform engineered for Indian corporations reporting under SEBI BRSR Core guidelines. Ingests utility consumption, stationary fuel logs, and supply chain telemetry to calculate Scope 1, 2, and 3 emissions against CEA and GHG Protocol baselines, generating auditor-ready compliance reports.",
      url: "https://www.esgxpert.com",
      urlDisplay: "esgxpert.com",
      specs: [
        { label: "REGULATORY STANDARD", value: "SEBI BRSR Core & ISO 14001" },
        { label: "FACTOR BASELINES", value: "CEA v19 & GHG Protocol Corporate Standard" },
        { label: "REPORT GENERATION", value: "< 45ms automated report compilation" },
        { label: "CORE ARCHITECTURE", value: "Next.js, TypeScript, PostgreSQL, Docker, Node.js" },
        { label: "DEPLOYMENT LIFECYCLE", value: "Active Enterprise Production (2024—Present)" },
      ],
      metrics: [
        { label: "Emissions Math", val: "Automated", sub: "Scope 1, 2 & 3" },
        { label: "Audit Readiness", val: "100%", sub: "Verifiable reports" },
        { label: "Regulatory Focus", val: "SEBI Core", sub: "Indian mandates" },
      ],
    },
    {
      id: "vapourbit",
      index: "02",
      category: "DISTRIBUTED SYSTEMS PRACTICE",
      title: "VAPOURBIT Systems",
      tagline: "Cloud Infrastructure, Distributed Microservices & High-Throughput APIs.",
      desc: "Cloud architecture and backend systems practice delivering high-throughput containerized microservices, asynchronous worker queues, and resilient API architectures. Designed to maintain sub-20ms latency bounds with multi-AZ failover and automated deployment pipelines.",
      url: "https://vapourbit.com",
      urlDisplay: "vapourbit.com",
      specs: [
        { label: "ORCHESTRATION", value: "Docker Containers on AWS EC2 & S3" },
        { label: "COMMUNICATION PROTOCOL", value: "gRPC & High-Throughput RESTful Gateways" },
        { label: "LATENCY TARGET", value: "< 18ms p99 SLA across distributed nodes" },
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
      category: "FRONTEND COMPUTING UTILITY",
      title: "Hyuzz Color Engine",
      tagline: "Client-Side Canvas Color Extraction & Harmonization Utility.",
      desc: "Zero-dependency browser tool for designers and developers. Reads canvas pixel buffers directly for instant color sampling, palette extraction, and color harmony calculations with a sub-12kb bundle size.",
      url: "https://hyuzz.vercel.app/app",
      urlDisplay: "hyuzz.vercel.app",
      specs: [
        { label: "CORE RUNTIME", value: "HTML5 Canvas API, React 18, Vite" },
        { label: "COLOR MODEL", value: "Direct Canvas 2D ImageData & HSL/RGB conversion" },
        { label: "SAMPLING LATENCY", value: "< 1ms direct pixel buffer read" },
        { label: "BUNDLE OVERHEAD", value: "Zero external dependencies (<12kb gzipped)" },
        { label: "RELEASE CYCLE", value: "Production Public Utility (2025)" },
      ],
      metrics: [
        { label: "Buffer Sampling", val: "< 1ms", sub: "Direct canvas memory" },
        { label: "Bundle Overhead", val: "< 12kb", sub: "Zero dependencies" },
        { label: "Color Models", val: "HSL & RGB", sub: "Palette harmony" },
      ],
    },
  ];

  return (
    <section id="work" className="relative py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-obsidian-dark border-t border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto space-y-16">

        {/* Architectural Masthead — Left-Anchored, Full-Span */}
        <div data-reveal className="border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-champagne">
              <span>ACT II</span>
              <span className="text-white/20">—</span>
              <span>VENTURES &amp; SYSTEMS</span>
            </div>
            <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-normal text-white tracking-tight uppercase leading-[0.88]">
              THE VENTURES.
            </h2>
          </div>
          <p className="font-serif italic text-lg sm:text-2xl text-mineral max-w-lg leading-snug md:text-right">
            Compliance platforms, cloud backends, and creative utilities.
          </p>
        </div>

        {/* Productions Broadsheet (Zero Cards, Edge-to-Edge Architectural Bays) */}
        <div className="space-y-0">
          {productions.map((item, idx) => (
            <React.Fragment key={item.id}>
              <article
                data-reveal
                className="py-16 border-b border-white/[0.08] transition-colors group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">

                  {/* Left Structural Colonnade (Cols 1–4) */}
                  <div className="lg:col-span-4 space-y-8 lg:pr-6 lg:border-r lg:border-white/[0.06]">

                    {/* Index & Category Stamp */}
                    {/* Index & Category Stamp */}
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="font-monumental text-6xl sm:text-7xl font-normal text-white group-hover:text-champagne transition-colors leading-none">
                          {item.index}
                        </span>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundEngine.playClick(620)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-champagne transition-colors"
                        >
                          <span className="underline underline-offset-4 decoration-white/40 hover:decoration-champagne">
                            {item.urlDisplay}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                      <span className="font-mono text-xs tracking-widest text-inferno font-semibold uppercase block">
                        {item.category}
                      </span>
                    </div>

                    {/* Unboxed Vertical Metric Ledger */}
                    <div className="pt-6 border-t border-white/[0.12] space-y-4">
                      <span className="font-mono text-[11px] tracking-widest text-champagne uppercase block font-medium">
                        // CORE GUARANTEES
                      </span>
                      <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                        {item.metrics.map((m) => (
                          <div key={m.label} className="space-y-0.5">
                            <span className="font-mono text-[11px] text-[#A6ACBE] uppercase tracking-wider block">
                              {m.label}
                            </span>
                            <span className="font-monumental text-2xl text-white font-normal block tracking-tight">
                              {m.val}
                            </span>
                            <span className="text-xs text-mineral-light font-sans block">
                              {m.sub}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right System Bay (Cols 5–12) */}
                  <div className="lg:col-span-8 space-y-8">

                    {/* Title & Tagline */}
                    <div className="space-y-3">
                      <h3 className="font-monumental text-3xl sm:text-5xl text-white font-normal tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xl sm:text-2xl text-white/90 font-serif italic leading-relaxed">
                        "{item.tagline}"
                      </p>
                    </div>

                    {/* Deep Engineering Narrative */}
                    <p className="text-base sm:text-lg text-[#DCDFE8] font-sans leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>

                    {/* Full-Width Engineering Specification Ledger (High Contrast Tabular Architecture) */}
                    <div className="pt-6 border-t border-white/[0.12] space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono tracking-widest text-mineral-light uppercase">
                        <span className="text-white font-medium">SYSTEM SPECIFICATIONS &amp; STATUTORY LEDGER</span>
                        <span className="text-white/30 select-none">•</span>
                        <span className="text-champagne">DETERMINISTIC COMPILATION</span>
                      </div>

                      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                        {item.specs.map((spec) => (
                          <div
                            key={spec.label}
                            className="grid grid-cols-1 sm:grid-cols-12 py-3.5 gap-2 text-xs sm:text-sm font-sans items-baseline hover:bg-white/[0.03] transition-colors"
                          >
                            <span className="sm:col-span-5 font-mono text-xs text-[#B8BDCC] shrink-0 uppercase tracking-wider font-medium">
                              {spec.label}
                            </span>
                            <span className="sm:col-span-7 font-medium text-white text-left sm:text-right font-sans">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </article>

              {/* Interleaved Archival Aperture at Act Midpoint */}
              {idx === 0 && (
                <div data-reveal className="py-12 border-b border-white/[0.08]">
                  <div className="relative overflow-hidden h-72 sm:h-96 w-full border border-white/[0.12]">
                    <img
                      src="/assets/mumbai-india-mumbai-bombay-skyline-with-high.jpg"
                      alt="Mumbai commercial financial center and technology corridor"
                      width="1920"
                      height="1280"
                      className="w-full h-full object-cover filter contrast-[1.05] brightness-100 motion-drift"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[#07090D]/90 backdrop-blur-sm flex items-center justify-between p-6 sm:p-8 border-t border-white/[0.12]">
                      <p className="text-xs sm:text-sm text-white font-sans max-w-2xl font-medium">
                        Operating from Mumbai, India — architecting statutory systems and cloud infrastructures for enterprise regulatory compliance.
                      </p>
                      <span className="hidden sm:block font-mono text-xs text-champagne tracking-widest uppercase">
                        COORDINATES: 18.9220° N, 72.8347° E
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
