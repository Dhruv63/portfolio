import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0B0E]/90 backdrop-blur-sm border-b border-white/[0.05]">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        
        <a 
          href="#" 
          className="text-sm font-medium text-white hover:text-champagne transition-colors"
        >
          Dhruv Solanki
        </a>

        <nav className="flex items-center gap-6 text-xs text-mineral" aria-label="Main Navigation">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#research" className="hover:text-white transition-colors">
            Research
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          {time && (
            <span className="hidden sm:inline text-mineral-muted pl-2 border-l border-white/[0.08]">
              Mumbai {time}
            </span>
          )}
        </nav>

      </div>
    </header>
  );
}
