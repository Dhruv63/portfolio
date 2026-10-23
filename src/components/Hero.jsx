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
    <section id="prologue" className="relative min-h-[96svh] flex flex-col justify-between overflow-hidden bg-[#040507] px-6 sm:px-10 lg:px-16 xl:px-20">

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
      </div>

      {/* =========================================================================
          THE ARCHITECTURAL BROAD SHEET STAGE (DISTILLED)
          Upper field and right flank are un-occluded to showcase the gothic towers & searchlights.
          Lower-third anchors the monumental plinth and direct navigation.
          ========================================================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex-1 flex flex-col justify-end pt-28 pb-12 sm:pb-16">

        {/* Lower-Third Architectural Masthead */}
        <div>
          <div className="w-full space-y-7 text-left">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.28em] text-champagne">
                Software Architect &amp; Founder
              </div>
              <h1 className="font-monumental text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.75rem] font-bold text-white tracking-tight uppercase leading-[0.92]">
                Dhruv Solanki
              </h1>
            </div>

            {/* Direct Architectural Action & Coordinates */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8">
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
        </div>

      </div>

    </section>
  );
}
