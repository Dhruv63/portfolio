import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/audio';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);

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

  const handleSoundToggle = () => {
    const enabled = soundEngine.toggle();
    setSoundEnabled(enabled);
  };

  const navLinks = [
    { href: '#prologue', label: 'I. Prologue' },
    { href: '#work', label: 'II. Ventures' },
    { href: '#research', label: 'III. Research' },
    { href: '#stack', label: 'IV. Arsenal' },
    { href: '#contact', label: 'V. Transmit' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-obsidian-dark/95 border-none">
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
          <span className="hidden xl:inline-block text-sm text-mineral-muted px-2.5 py-0.5 bg-white/[0.04] rounded">
            Software Architect
          </span>
        </a>

        {/* Center: Chapter Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-sans" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => soundEngine.playClick(540)}
              className="text-mineral hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Sound Toggle & Live Telemetry */}
        <div className="flex items-center gap-3 text-sm font-sans text-mineral">
          
          <button
            onClick={handleSoundToggle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-colors ${
              soundEnabled
                ? 'bg-inferno text-white'
                : 'bg-white/[0.04] text-mineral hover:text-white'
            }`}
            title="Toggle procedural ambient sound"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Sound on</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-mineral" />
                <span className="hidden sm:inline">Sound</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 bg-obsidian-surface px-3 py-1.5 rounded-full">
            <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            <span className="text-sm text-mineral-light">
              Mumbai {time || '16:00:00'} IST
            </span>
          </div>

        </div>

      </div>
    </header>
  );
}
