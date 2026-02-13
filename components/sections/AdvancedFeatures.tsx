'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import InteractiveResume from '@/components/3d/InteractiveResume';
import Crescent3D from '@/components/3d/Crescent3D';
import FloatingElements3D from '@/components/3d/FloatingElements3D';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AdvancedFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate section entrance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="advanced-features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-blue to-black relative overflow-hidden"
    >
      {/* Floating 3D Elements Background */}
      <FloatingElements3D />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            ADVANCED <span className="neon-text">FEATURES</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="mb-20">
          <InteractiveResume />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 rounded-full bg-gray-900 glass-effect border border-gray-700">
              <Crescent3D />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-electric-blue">Islamic Tech Fusion</h3>
            <p className="text-gray-300 mt-2">
              Bridging traditional Islamic knowledge with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-8 rounded-2xl glass-effect border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Interactive Experience</h3>
            <p className="text-gray-300 mb-4">
              This portfolio features cutting-edge interactive elements including 3D visualizations, 
              animated interfaces, and an AI-powered chatbot that responds in Roman Urdu and Hinglish.
            </p>
            <p className="text-gray-300">
              Every element is designed to showcase the fusion of traditional values with modern technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;