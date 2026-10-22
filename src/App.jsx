import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Ventures from './components/Ventures.jsx';
import Projects from './components/Projects.jsx';
import TechStack from './components/TechStack.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0E] text-[#EDEDF0] selection:bg-[#C5A880]/25 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Ventures />
        <Projects />
        <TechStack />
      </main>

      <Footer />
    </div>
  );
}
