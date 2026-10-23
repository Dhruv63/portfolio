import React from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Hero() {
  const [activeVideo, setActiveVideo] = React.useState(0);
  const videoRef0 = React.useRef(null);
  const videoRef1 = React.useRef(null);
  const isTransitioningRef = React.useRef(false);

  // Seamless Dual-Video Crossfade Loop (Eliminates video restart jump-cut)
  React.useEffect(() => {
    const v0 = videoRef0.current;
    const v1 = videoRef1.current;
    if (!v0 || !v1) return;

    v0.play().catch(() => { });

    const crossfadeThreshold = 1.3; // Seconds before video ends to initiate dissolve

    const handleTimeUpdate0 = () => {
      if (v0.duration && v0.currentTime >= v0.duration - crossfadeThreshold) {
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          v1.currentTime = 0;
          v1.play().then(() => {
            setActiveVideo(1);
          }).catch(() => { });
        }
      }
    };

    const handleTimeUpdate1 = () => {
      if (v1.duration && v1.currentTime >= v1.duration - crossfadeThreshold) {
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          v0.currentTime = 0;
          v0.play().then(() => {
            setActiveVideo(0);
          }).catch(() => { });
        }
      }
    };

    const handleEnded0 = () => {
      v0.pause();
      v0.currentTime = 0;
      isTransitioningRef.current = false;
    };

    const handleEnded1 = () => {
      v1.pause();
      v1.currentTime = 0;
      isTransitioningRef.current = false;
    };

    v0.addEventListener('timeupdate', handleTimeUpdate0);
    v1.addEventListener('timeupdate', handleTimeUpdate1);
    v0.addEventListener('ended', handleEnded0);
    v1.addEventListener('ended', handleEnded1);

    return () => {
      v0.removeEventListener('timeupdate', handleTimeUpdate0);
      v1.removeEventListener('timeupdate', handleTimeUpdate1);
      v0.removeEventListener('ended', handleEnded0);
      v1.removeEventListener('ended', handleEnded1);
    };
  }, []);

  const scrollTo = (id) => {
    soundEngine.playClick(600);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="prologue" className="relative min-h-[96svh] flex flex-col justify-between overflow-hidden bg-[#040507]">

      {/* =========================================================================
          AUTHENTIC DARK DECO NOIR FOOTAGE / SEAMLESS DUAL CROSSFADE LOOP
          Dual-player dissolve eliminates the abrupt end-of-loop jump cut.
          Watermark completely occluded via slight scale and bottom gradient.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Player 0 */}
        <video
          ref={videoRef0}
          muted
          playsInline
          preload="auto"
          poster="/assets/dark-deco-metropolis.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.15] saturate-[0.95] transform scale-[1.06] origin-top transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeVideo === 0 ? 1 : 0 }}
        >
          <source src="/assets/dark-deco-metropolis.mp4" type="video/mp4" />
        </video>

        {/* Player 1 */}
        <video
          ref={videoRef1}
          muted
          playsInline
          preload="auto"
          poster="/assets/dark-deco-metropolis.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.15] saturate-[0.95] transform scale-[1.06] origin-top transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeVideo === 1 ? 1 : 0 }}
        >
          <source src="/assets/dark-deco-metropolis.mp4" type="video/mp4" />
        </video>

        {/* Top Fade for seamless Navbar merge */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040507] via-[#040507]/60 to-transparent" />

        {/* Bottom Fade: Gradual, cinematic darkening at base where typography & telemetry anchor */}
        <div className="absolute inset-x-0 bottom-0 h-96 sm:h-[32rem] bg-gradient-to-t from-[#040507] via-[#040507]/90 to-transparent" />

        {/* Right-flank architectural wash for maximum telemetry ledger contrast */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-gradient-to-l from-[#040507]/75 via-[#040507]/35 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          THE 1440PX ARCHITECTURAL BROAD SHEET STAGE (OPTION 1)
          Upper field is completely un-occluded to showcase the gothic towers & searchlights.
          Lower-third anchors the monumental plinth and unboxed telemetry ledger.
          ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-end pt-28 pb-8">

        {/* Lower-Third 12-Column Asymmetric Stage */}
        <div className="pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">

            {/* Left Bay (Cols 1 to 7): Monumental Headline, Subtitle, Direct Action */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <h1 className="font-monumental text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.75rem] font-normal text-white tracking-tight uppercase leading-[0.88]">
                  Dhruv<br />Solanki
                </h1>
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#EAE6DF] font-light max-w-xl leading-snug">
                  Software architect &amp; founder operating from first principles.
                </p>
              </div>

              {/* Direct Architectural Action & Coordinates */}
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-7">
                <button
                  onClick={() => scrollTo('work')}
                  className="px-8 py-3.5 bg-[#EAE6DF] text-black font-sans text-xs uppercase tracking-[0.25em] font-semibold border border-white/30 hover:bg-white hover:text-black transition-all active:scale-[0.99] cursor-pointer"
                >
                  Explore Ventures
                </button>

                <div className="flex items-center gap-5 text-xs text-[#DCDFE8] font-sans tracking-widest uppercase">
                  <a
                    href="https://github.com/Dhruv63"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick(480)}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8BDCC]" />
                  </a>
                  <span className="text-white/20 select-none">/</span>
                  <a
                    href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick(480)}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8BDCC]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Bay (Cols 8 to 12): Unboxed Architectural Telemetry Ledger */}
            <div className="lg:col-span-5 flex flex-col justify-end space-y-4 border-t lg:border-t-0 lg:border-l border-white/15 lg:pl-10 pt-6 lg:pt-0 text-left">
              <div className="text-[10px] font-mono tracking-[0.3em] text-[#C5A880] uppercase pb-2 border-b border-white/10 flex items-center justify-between">
                <span>Systems &amp; Deployments</span>
                <span className="text-[#DCDFE8]/60">3 NODES</span>
              </div>

              {/* Node 1: ESG Tech Sol */}
              <div className="border-b border-white/10 pb-3">
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    href="https://www.esgxpert.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base font-semibold text-white hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>ESG Tech Sol</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DCDFE8] group-hover:text-[#C5A880] transition-colors" />
                  </a>
                  <span className="text-[11px] font-mono text-[#C5A880] tracking-wider uppercase">Founder</span>
                </div>
                <p className="text-xs text-[#DCDFE8] mt-1.5 leading-relaxed">
                  Automated greenhouse gas accounting and SEBI BRSR reporting software for enterprise compliance.
                </p>
              </div>

              {/* Node 2: VAPOURBIT */}
              <div className="border-b border-white/10 pb-3">
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    href="https://vapourbit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm sm:text-base font-semibold text-white hover:text-[#C5A880] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>VAPOURBIT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#DCDFE8] group-hover:text-[#C5A880] transition-colors" />
                  </a>
                  <span className="text-[11px] font-mono text-[#C5A880] tracking-wider uppercase">Co-Founder</span>
                </div>
                <p className="text-xs text-[#DCDFE8] mt-1.5 leading-relaxed">
                  Cloud infrastructure and backend systems practice delivering containerized microservices and API gateways.
                </p>
              </div>

              {/* Node 3: AutoTriage AI */}
              <div className="pb-1">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-sans text-sm sm:text-base font-semibold text-white">
                    AutoTriage AI
                  </span>
                  <span className="text-[11px] font-mono text-[#C5A880] tracking-wider uppercase">Co-Author</span>
                </div>
                <p className="text-xs text-[#DCDFE8] mt-1.5 leading-relaxed">
                  Automated incident triage research combining lightweight vector search with deterministic heuristic routing (Govt. of India Copyright ROC SW-2026023768).
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Edge-to-Edge Baseline Hairline Datum & Descent Trigger */}
        <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-[#B8BDCC]/70 tracking-[0.25em] uppercase">
          <div className="flex items-center gap-2">
            <span className="text-white">ACT I</span>
            <span className="text-white/20">/</span>
            <span>PROLOGUE</span>
          </div>

          <button
            onClick={() => scrollTo('work')}
            className="group inline-flex items-center gap-2 text-[#DCDFE8] hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-mineral-muted group-hover:text-[#C5A880] transition-colors">
              SCROLL TO VENTURES
            </span>
            <span className="text-white/40 group-hover:text-white transition-transform group-hover:translate-y-0.5">↓</span>
          </button>

          <div className="hidden sm:block text-right text-[#B8BDCC]/50">
            MUMBAI, INDIA
          </div>
        </div>

      </div>

    </section>
  );
}
