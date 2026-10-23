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

    v0.play().catch(() => {});

    const crossfadeThreshold = 1.3; // Seconds before video ends to initiate dissolve

    const handleTimeUpdate0 = () => {
      if (v0.duration && v0.currentTime >= v0.duration - crossfadeThreshold) {
        if (!isTransitioningRef.current) {
          isTransitioningRef.current = true;
          v1.currentTime = 0;
          v1.play().then(() => {
            setActiveVideo(1);
          }).catch(() => {});
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
          }).catch(() => {});
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
    <section id="prologue" className="relative min-h-[96svh] flex flex-col justify-between pt-16 pb-14 px-6 overflow-hidden bg-[#040507]">

      {/* =========================================================================
          AUTHENTIC DARK DECO NOIR FOOTAGE / SEAMLESS DUAL CROSSFADE LOOP
          Dual-player dissolve eliminates the abrupt end-of-loop jump cut.
          Watermark completely occluded via slight scale and bottom gradient scrim.
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Player 0 */}
        <video
          ref={videoRef0}
          muted
          playsInline
          preload="auto"
          poster="/assets/dark-deco-metropolis.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.18] saturate-[0.95] transform scale-[1.06] origin-top transition-opacity duration-1000 ease-in-out"
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
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.18] saturate-[0.95] transform scale-[1.06] origin-top transition-opacity duration-1000 ease-in-out"
          style={{ opacity: activeVideo === 1 ? 1 : 0 }}
        >
          <source src="/assets/dark-deco-metropolis.mp4" type="video/mp4" />
        </video>

        {/* Top Fade for seamless Navbar merge */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040507] via-[#040507]/60 to-transparent" />

        {/* Bottom Fade for seamless section transition & complete watermark occlusion */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040507] via-[#040507]/85 to-transparent" />

        {/* Subtle Reading Scrim - Only dims the center text zone, lets towers and searchlights shine on flanks */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,5,7,0.55)_0%,rgba(4,5,7,0.18)_55%,rgba(4,5,7,0.75)_100%)]" />
      </div>

      {/* =========================================================================
          MAIN MONUMENTAL STAGE
          No eyebrows. No tiny icons or lines above the name. 
          The name itself is the monument.
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto text-center space-y-7 py-6">

        {/* Monumental Headline */}
        <div className="space-y-4">
          <h1 className="font-monumental text-6xl sm:text-8xl md:text-9xl font-normal text-white tracking-tight uppercase leading-[0.9]">
            DHRUV SOLANKI
          </h1>
          <p className="font-serif italic text-xl sm:text-3xl md:text-4xl text-mineral-light font-light max-w-3xl mx-auto leading-tight">
            Software architect &amp; founder operating from first principles.
          </p>
        </div>

        {/* Focused Narrative Statement */}
        <p className="text-base sm:text-lg text-mineral-light max-w-2xl mx-auto leading-relaxed font-sans">
          Founder of{' '}
          <a
            href="https://www.esgxpert.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-champagne font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors"
          >
            ESG Tech Sol
          </a>
          , automating statutory SEBI BRSR environmental compliance. Co-founder of{' '}
          <a
            href="https://vapourbit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-champagne font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-colors"
          >
            VAPOURBIT
          </a>
          , architecting high-throughput cloud infrastructure, and co-author of autonomous AI triage research registered with the Government of India.
        </p>

        {/* Restrained Architectural Action & Coordinates */}
        <div className="pt-2 flex flex-col items-center gap-4">
          {/* Single, Restrained Monolithic Action Button */}
          <button
            onClick={() => scrollTo('work')}
            className="px-8 py-3.5 bg-white text-black font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4AF37] hover:text-black transition-colors active:scale-[0.98] cursor-pointer"
            style={{
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)'
            }}
          >
            Explore Productions
          </button>

          {/* Quiet Architectural Coordinates (No Floating Pill Boxes) */}
          <div className="flex items-center gap-6 text-xs text-mineral-light/80 font-sans tracking-widest uppercase">
            <a
              href="https://github.com/Dhruv63"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick(480)}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mineral-light/60 hover:text-white" />
            </a>
            <span className="text-white/20 select-none">•</span>
            <a
              href="https://www.linkedin.com/in/dhruv-solanki-4301a2327"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick(480)}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-mineral-light/60 hover:text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* =========================================================================
          CHAPTER DESCENT MARKER
          Restrained, clean, and architectural.
          ========================================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center">
        <button
          onClick={() => scrollTo('work')}
          className="group flex flex-col items-center gap-2 text-mineral-light/70 hover:text-white transition-colors cursor-pointer"
        >
          <span className="font-monumental text-xl text-white group-hover:text-champagne transition-colors">
            I
          </span>
          <div className="w-[1px] h-6 bg-white/30 group-hover:bg-champagne transition-colors" />
          <span className="text-xs uppercase tracking-[0.24em] font-sans">
            Descent into the works
          </span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-mineral-light/60 group-hover:text-champagne" />
        </button>
      </div>

    </section>
  );
}
