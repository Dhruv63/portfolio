import React from 'react';
import AtmosphereCanvas from './components/AtmosphereCanvas.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Ventures from './components/Ventures.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './utils/useReveal.js';

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-[100dvh] flex flex-col bg-obsidian-dark text-[#EDEDF0] selection:bg-inferno/30 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Atmosphere Canvas */}
      <AtmosphereCanvas />

      {/* 35mm Film Grain Noise Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 noise-overlay opacity-15" 
        aria-hidden="true"
      />

      {/* Top Header */}
      <Navbar />

      {/* Five Acts Experience */}
      <main className="relative z-20 flex-grow">
        <Hero />
        <Ventures />
        <Projects />
        <TechStack />
        <Footer />
      </main>

    </div>
  );
}
