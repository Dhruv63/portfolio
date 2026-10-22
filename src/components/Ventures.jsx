import React, { useState } from 'react';
import { ArrowUpRight, Activity, Palette } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Ventures() {
  // ESG Calculator State (Interactive feature 1)
  const [electricityMwh, setElectricityMwh] = useState(450);
  const [fuelLiters, setFuelLiters] = useState(12000);
  // Emission factors: CEA factor ~0.71 tCO2/MWh, Diesel ~0.00268 tCO2/L
  const scope1 = ((fuelLiters * 0.00268)).toFixed(1);
  const scope2 = ((electricityMwh * 0.71)).toFixed(1);
  const totalEmissions = (parseFloat(scope1) + parseFloat(scope2)).toFixed(1);

  // Hyuzz Color Engine State (Interactive feature 2)
  const [selectedHue, setSelectedHue] = useState(38);
  const activeColor = `hsl(${selectedHue}, 85%, 55%)`;
  const accentColor = `hsl(${(selectedHue + 180) % 360}, 80%, 60%)`;

  return (
    <section id="work" className="relative py-16 sm:py-20 px-6 bg-[#0B0D12]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Act II Title Block (No eyebrow above heading) */}
        <div data-reveal className="text-center space-y-4">
          <h2 className="font-monumental text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight uppercase">
            THE PRODUCTIONS.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-mineral max-w-2xl mx-auto">
            Architected enterprise compliance engines, cloud systems, and creative tooling.
          </p>
        </div>

        {/* Ventures List */}
        <div className="space-y-16">
          
          {/* Venture 1: ESGXpert */}
          <div className="w-full">
            <article data-reveal className="p-8 sm:p-12 rounded-2xl bg-obsidian-elevated space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="space-y-4 max-w-2xl">
                  <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
                    ESGXpert Platform
                  </h3>
                
                <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
                  Automated greenhouse gas (GHG) accounting and statutory compliance SaaS for Indian enterprises. Ingests raw utility and industrial telemetry, computes Scope 1, 2, and 3 emissions according to CEA and GHG Protocol baselines, and generates audit-ready filings aligned with statutory <strong>SEBI BRSR Core</strong> requirements and ISO 14001 certification. Active from 2024 to present.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "TypeScript", "PostgreSQL", "Docker", "Node.js", "SEBI BRSR Core"].map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 rounded-full bg-obsidian-surface text-mineral-light text-sm font-sans font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://www.esgxpert.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(620)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-sans text-sm font-bold hover:bg-champagne transition-colors self-start shadow-none"
              >
                <span>Visit ESGXpert</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Interactive Live Thing: BRSR Carbon Ledger Simulator (data-ui) */}
            <div data-ui="carbon-calc" className="p-6 sm:p-8 rounded-xl bg-obsidian-surface space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-sans font-semibold text-white">
                    SEBI BRSR Core carbon estimation model
                  </span>
                </div>
                <span className="text-sm font-sans text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Active regulatory standard
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-mineral mb-1 font-sans">
                      <span>Purchased grid electricity (Scope 2)</span>
                      <span className="text-white font-medium">{electricityMwh} MWh</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      step="50"
                      value={electricityMwh}
                      onChange={(e) => {
                        setElectricityMwh(Number(e.target.value));
                        soundEngine.playClick(350);
                      }}
                      className="w-full accent-inferno bg-obsidian-dark h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-mineral mb-1 font-sans">
                      <span>Stationary fuel consumption (Scope 1)</span>
                      <span className="text-white font-medium">{fuelLiters.toLocaleString()} Liters</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="1000"
                      value={fuelLiters}
                      onChange={(e) => {
                        setFuelLiters(Number(e.target.value));
                        soundEngine.playClick(350);
                      }}
                      className="w-full accent-inferno bg-obsidian-dark h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-obsidian-dark text-center items-center">
                  <div className="space-y-1">
                    <span className="text-sm text-mineral font-sans">Scope 1</span>
                    <p className="font-monumental text-2xl text-white font-bold">{scope1} <span className="text-sm text-mineral font-normal">tCO2e</span></p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-sm text-mineral font-sans">Scope 2</span>
                    <p className="font-monumental text-2xl text-white font-bold">{scope2} <span className="text-sm text-mineral font-normal">tCO2e</span></p>
                  </div>
                  <div className="space-y-1 bg-obsidian-surface py-2 rounded">
                    <span className="text-sm text-inferno font-sans font-semibold">Total</span>
                    <p className="font-monumental text-2xl text-champagne font-bold">{totalEmissions} <span className="text-sm text-mineral font-normal">tCO2e</span></p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Real Subject World Picture: Mumbai High Rises & Systems */}
        <div className="w-full">
          <div data-reveal className="relative rounded-2xl overflow-hidden h-72 sm:h-96 w-full">
            <img
              src="/assets/mumbai-india-mumbai-bombay-skyline-with-high.jpg"
              alt="Mumbai commercial skyline and enterprise data hub"
              width="1920"
              height="1280"
              className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 motion-drift"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 bg-obsidian-dark/90 flex items-end p-8">
              <p className="text-sm sm:text-base text-mineral-light font-sans max-w-xl">
                Operating from Mumbai, architecting statutory systems across industrial and financial sectors in India.
              </p>
            </div>
          </div>
        </div>

        {/* Venture 2: VAPOURBIT Systems */}
        <div className="w-full">
          <article data-reveal className="p-8 sm:p-12 rounded-2xl bg-obsidian-card space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
                  VAPOURBIT Systems
                </h3>
                
                <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
                  Cloud infrastructure and backend engineering studio delivering high-throughput distributed microservices, low-latency API architectures, and enterprise AI workflow automation. Co-founded in 2024 to engineer resilient systems capable of handling high concurrency with verifiable latency bounds.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["Node.js", "AWS EC2/S3", "Docker", "Python", "Redis", "PostgreSQL", "FastAPI"].map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 rounded-full bg-obsidian-surface text-mineral-light text-sm font-sans font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://vapourbit.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(620)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-sans text-sm font-bold hover:bg-champagne transition-colors self-start shadow-none"
              >
                <span>Visit VAPOURBIT</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Microservice Architecture Metrics */}
            <div data-ui="metrics-panel" className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-obsidian-surface">
              <div className="space-y-1">
                <span className="text-sm text-mineral font-sans">Latency SLA</span>
                <p className="font-monumental text-2xl text-white font-bold">&lt; 18ms</p>
                <span className="text-sm text-emerald-400 font-sans">p99 Target</span>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-mineral font-sans">Architecture</span>
                <p className="font-monumental text-2xl text-white font-bold">Distributed</p>
                <span className="text-sm text-mineral-light font-sans">Docker Containers</span>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-mineral font-sans">Availability</span>
                <p className="font-monumental text-2xl text-white font-bold">99.98%</p>
                <span className="text-sm text-emerald-400 font-sans">Active Multi-AZ</span>
              </div>
              <div className="space-y-1">
                <span className="text-sm text-mineral font-sans">Protocol</span>
                <p className="font-monumental text-2xl text-white font-bold">gRPC / REST</p>
                <span className="text-sm text-mineral-light font-sans">Zero Overhead</span>
              </div>
            </div>
          </article>
        </div>

        {/* Venture 3: Hyuzz Color Engine */}
        <div className="w-full">
          <article data-reveal className="p-8 sm:p-12 rounded-2xl bg-obsidian-surface space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <h3 className="font-monumental text-3xl sm:text-4xl text-white font-bold tracking-tight">
                  Hyuzz Color Engine
                </h3>
                
                <p className="text-mineral-light leading-relaxed font-sans text-base sm:text-lg">
                  Browser utility for digital artists and UI engineers featuring canvas sub-pixel color sampling, real-time hexadecimal search algorithms, and chromatic harmony calculation without heavy library dependencies. Released in 2025.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {["React", "HTML5 Canvas", "Tailwind CSS", "Vite", "Color Science"].map((tech) => (
                    <span key={tech} className="px-3.5 py-1.5 rounded-full bg-obsidian-dark text-mineral-light text-sm font-sans font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="https://hyuzz.vercel.app/app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick(620)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-black font-sans text-sm font-bold hover:bg-champagne transition-colors self-start shadow-none"
              >
                <span>Launch Hyuzz</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* Interactive Color Harmonic Sandbox */}
            <div data-ui="chroma-sandbox" className="p-6 sm:p-8 rounded-xl bg-obsidian-dark space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-champagne" />
                  <span className="text-sm font-sans font-semibold text-white">
                    Interactive chromatic sampler
                  </span>
                </div>
                <span className="text-sm font-sans text-mineral">
                  Adjust slider to generate harmonic pairs
                </span>
              </div>

              <div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={selectedHue}
                  onChange={(e) => {
                    setSelectedHue(Number(e.target.value));
                    soundEngine.playClick(400);
                  }}
                  className="w-full h-3 rounded-lg cursor-pointer bg-obsidian-elevated"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 rounded-lg flex flex-col justify-between h-24 text-black font-sans transition-colors font-medium"
                  style={{ backgroundColor: activeColor }}
                >
                  <span className="text-sm font-bold">Dominant Color</span>
                  <span className="font-monumental text-xl font-bold">{activeColor}</span>
                </div>
                <div
                  className="p-4 rounded-lg flex flex-col justify-between h-24 text-black font-sans transition-colors font-medium"
                  style={{ backgroundColor: accentColor }}
                >
                  <span className="text-sm font-bold">Harmonic Complement</span>
                  <span className="font-monumental text-xl font-bold">{accentColor}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        </div>

        {/* Chapter 2 Center Numeral */}
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
