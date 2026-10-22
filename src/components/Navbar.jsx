import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('prologue');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Reading progress and scroll spy
  useEffect(() => {
    const sectionIds = ['prologue', 'work', 'research', 'stack', 'contact'];

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }

      const scrollPosition = window.scrollY + 200; // offset for sticky header
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Global Keyboard Shortcuts (M: Mute/Sound, 1-5: Acts, T: Top)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setSoundEnabled((prev) => {
          const next = soundEngine.toggle();
          return next;
        });
      } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        const map = {
          '1': 'prologue',
          '2': 'work',
          '3': 'research',
          '4': 'stack',
          '5': 'contact',
        };
        const targetId = map[e.key];
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          soundEngine.playClick(600);
        }
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        soundEngine.playClick(700);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSoundToggle = () => {
    const enabled = soundEngine.toggle();
    setSoundEnabled(enabled);
  };

  const navLinks = [
    { id: 'prologue', href: '#prologue', label: 'I. Prologue' },
    { id: 'work', href: '#work', label: 'II. Ventures' },
    { id: 'research', href: '#research', label: 'III. Research' },
    { id: 'stack', href: '#stack', label: 'IV. Arsenal' },
    { id: 'contact', href: '#contact', label: 'V. Transmit' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-obsidian-dark/95 backdrop-blur-md border-none">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left: Brand Monogram */}
        <a 
          href="#prologue"
          onClick={() => soundEngine.playClick(600)}
          className="group flex items-center gap-3"
        >
          <span className="font-monumental text-lg sm:text-xl font-bold text-white group-hover:text-champagne transition-colors">
            DHRUV SOLANKI
          </span>
          <span className="hidden xl:inline-block text-xs text-mineral-muted px-2.5 py-0.5 bg-white/[0.04] rounded tracking-wide">
            Software Architect
          </span>
        </a>

        {/* Center: Chapter Navigation Links with Scroll-Spy & Active States */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => soundEngine.playClick(540)}
                className={`relative flex items-center gap-1.5 py-1 transition-all ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-mineral hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" aria-hidden="true" />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Sound Toggle, Keyboard Hints & Live Telemetry */}
        <div className="flex items-center gap-3 text-sm font-sans text-mineral">
          
          <button
            onClick={handleSoundToggle}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              soundEnabled
                ? 'bg-inferno text-white'
                : 'bg-white/[0.04] text-mineral hover:text-white'
            }`}
            title="Toggle procedural ambient sound (Hotkey: M)"
            aria-pressed={soundEnabled}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-white" />
                {/* 3-Bar Equalizer Wave Micro-animation */}
                <div className="flex items-end gap-[2px] h-3 px-0.5" aria-hidden="true">
                  <span className="w-[2px] bg-white rounded-full animate-eq-1 inline-block" />
                  <span className="w-[2px] bg-white rounded-full animate-eq-2 inline-block" />
                  <span className="w-[2px] bg-white rounded-full animate-eq-3 inline-block" />
                </div>
                <span className="hidden sm:inline">Sound on</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-mineral" />
                <span className="hidden sm:inline">Sound</span>
              </>
            )}
            <kbd className="hidden lg:inline-flex text-[9px] font-mono px-1 rounded bg-black/30 text-white/70 border border-white/10 ml-0.5">
              M
            </kbd>
          </button>

          <div className="flex items-center gap-2 bg-obsidian-surface px-3 py-1.5 rounded-full border border-white/[0.04]">
            <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500 animate-pulse" />
            <span className="text-xs text-mineral-light tracking-tight">
              Mumbai {time || '16:00:00'} IST
            </span>
          </div>

        </div>

      </div>

      {/* Chapter Reading Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-white/[0.04] w-full overflow-hidden" aria-hidden="true">
        <div 
          className="h-full bg-gradient-to-r from-inferno via-champagne to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
