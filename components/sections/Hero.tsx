'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Avatar3D from '../3d/Avatar3D';
import ParticleField from '../3d/ParticleField';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "MUHAMMAD UBAID RAZA";

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Toggle cursor visibility after typing is complete
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, fullName]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Original floating particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-cyan opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1 className="text-sm uppercase tracking-[10px] text-neon-cyan mb-4">
              HELLO, I AM
            </motion.h1>

            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="neon-text">{displayText}</span>
              <span className={`inline-block w-1 h-12 bg-neon-cyan ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
            </div>

            <motion.h2
              className="text-xl md:text-2xl mb-8 text-electric-blue"
              variants={itemVariants}
            >
              AGENTIC AI & WEB 3.0 DEVELOPER
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Motivated Software Engineering undergraduate with strong skills in web development and modern technologies including Agentic AI, Web 3.0, and cloud-based applications. Passionate about building efficient, user-friendly solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link href="#projects">
                <motion.button
                  className="px-8 py-3 bg-transparent border-2 border-neon-cyan text-neon-cyan rounded-full hover:bg-neon-cyan hover:text-midnight-blue transition-all duration-300 glow-border"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>

              <Link href="#chatbot">
                <motion.button
                  className="px-8 py-3 bg-neon-magenta text-midnight-blue rounded-full hover:bg-transparent hover:border-neon-magenta border border-neon-magenta transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat with AI
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6 mt-10"
              variants={itemVariants}
            >
              <Link href="https://github.com/UBAIDRAZA1" target="_blank" rel="noopener noreferrer">
                <Github className="text-2xl text-white hover:text-neon-cyan transition-colors" />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-ubaid-raza-21b850300" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-2xl text-white hover:text-neon-cyan transition-colors" />
              </Link>
              <Link href="mailto:ubaidraza3657767@gmail.com">
                <Mail className="text-2xl text-white hover:text-neon-cyan transition-colors" />
              </Link>
              <Link href="tel:+923163657767">
                <Phone className="text-2xl text-white hover:text-neon-cyan transition-colors" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/images/profile1.png"
                alt="Muhammad Ubaid Raza"
                className="w-full h-full object-cover rounded-full border-4 border-neon-cyan shadow-[0_0_20px_#00ffff]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Link href="#about">
          <ChevronDown className="text-3xl text-neon-cyan animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;