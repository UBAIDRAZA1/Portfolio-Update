'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  // Fix: HTMLSectionElement nahi, HTMLElement use karo
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const objectiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Agar refs null hain toh return karo
    if (!sectionRef.current || !headingRef.current || !avatarRef.current || !contentRef.current || !objectiveRef.current) return;

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

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );

    // Animate avatar
    gsap.fromTo(
      avatarRef.current,
      { opacity: 0, x: -50, rotationY: -90 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: avatarRef.current,
          start: 'top 85%',
        },
      }
    );

    // Animate content
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
      }
    );

    // Animate objective section
    gsap.fromTo(
      objectiveRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: objectiveRef.current,
          start: 'top 85%',
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0f1e] to-black relative overflow-hidden">
      {/* Flowing wave-like particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const duration = Math.random() * 4 + 4;
          const delay = Math.random() * 3;
          const leftPos = Math.random() * 100;
          const topPos = Math.random() * 100;
          const waveAmplitude = Math.random() * 30 + 10;
          const waveFrequency = Math.random() * 0.02 + 0.01;

          return (
            <motion.div
              key={`wave-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, #008888)' : 'radial-gradient(circle, #4169e1, #0000cc)',
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, waveAmplitude, -waveAmplitude, 0],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={headingRef}
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#4169e1]">ABOUT</span>{" "}
            <span className="text-white">ME</span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"></span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#00ffff] to-[#ff44aa] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
          <motion.div
            ref={avatarRef}
            className="flex justify-center relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Glowing background elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#00ffff] opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-[#ff44aa] opacity-10 blur-2xl"></div>

            <motion.div
              className="relative w-64 h-64 rounded-full overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 68, 170, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00ffff] to-[#ff44aa] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              <img
                src="/images/profile.png"
                alt="Muhammad Ubaid Raza"
                className="w-full h-full object-cover relative z-10"
              />

              {/* Interactive floating elements around profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-[#00ffff] shadow-[0_0_10px_#00ffff]"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-[#ff44aa] shadow-[0_0_10px_#ff44aa]"
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -10, 0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glowing accent elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-[#4169e1] opacity-10 blur-xl"></div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff44aa] font-orbitron relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Agentic AI & Web 3.0 Developer
              <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-[#00ffff] to-transparent"></span>
            </motion.h3>

            <div className="space-y-4 text-gray-300 relative">
              <motion.p
                className="leading-relaxed relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-[#ff44aa] font-semibold">Assalamu Alaikum!</span> I am Muhammad Ubaid Raza, a passionate software engineering student with a unique blend of religious and technical knowledge. As a <span className="text-[#00ffff]">Hafiz of the Holy Quran</span> and a student of the <span className="text-[#00ffff]">Last year of Darse Nizami</span>, I bring a distinctive perspective to technology.
              </motion.p>

              <motion.p
                className="leading-relaxed relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                My journey combines deep spiritual learning with cutting-edge technology. I specialize in modern web development including <span className="text-[#ff44aa]">Next.js, TypeScript, Three.js, and AI integration</span>. My mission is to bridge traditional wisdom with innovative solutions.
              </motion.p>

              <motion.div
                className="mt-6 p-6 bg-gradient-to-br from-[#111c28] to-[#0a0f1e] rounded-xl border border-[#00ffff]/30 backdrop-blur-sm relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/5 to-[#ff44aa]/5"></div>
                <p className="text-[#4169e1] italic text-lg relative z-10">
                  "Built with code, powered by faith."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={objectiveRef}
          className="mt-20 p-8 bg-gradient-to-br from-[#0a0f1e]/80 to-[#111c28]/80 rounded-2xl border border-[#00ffff]/30 backdrop-blur-md relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/5 to-[#ff44aa]/5"></div>

          <motion.h3
            className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff44aa] to-[#00ffff] font-orbitron flex items-center gap-3 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <motion.span
              className="w-3 h-3 bg-gradient-to-r from-[#ff44aa] to-[#00ffff] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ["0 0 5px #ff44aa", "0 0 15px #ff44aa", "0 0 5px #ff44aa"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.span>
            OBJECTIVE
          </motion.h3>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            Motivated Software Engineering undergraduate with strong skills in web development and modern technologies including Agentic AI, Web 3.0, and cloud-based applications. Passionate about building efficient, user-friendly solutions and eager to contribute to a professional team while continuously learning and growing.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;