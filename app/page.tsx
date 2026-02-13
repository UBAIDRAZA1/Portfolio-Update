'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Achievements from '@/components/sections/Achievements';
import AdvancedFeatures from '@/components/sections/AdvancedFeatures';
import CustomCursor from '@/components/ui/CustomCursor';
import ChatBot from '@/components/chatbot/ChatBot';

export default function Home() {
  useEffect(() => {
    // Initialize custom cursor
    const cursorDot = document.getElementById('cursor-dot');
    const cursorOutline = document.getElementById('cursor-outline');

    const moveCursor = (e: MouseEvent) => {
      if (cursorDot && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <main className="min-h-screen bg-midnight-blue text-white">
      <CustomCursor />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Achievements />
      <AdvancedFeatures />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
}