'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { GraduationCap, BookOpen } from 'lucide-react';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EducationItemProps {
  edu: {
    degree: string;
    institution: string;
    period: string;
    grade: string;
    icon: JSX.Element;
  };
  index: number;
  hoverBorderColor: string;
  institutionColor: string;
}

const EducationCard = ({ edu, index, hoverBorderColor, institutionColor }: EducationItemProps) => {
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && eduRef.current) {
      gsap.fromTo(
        eduRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: eduRef.current,
            start: 'top 90%',
            toggleActions: "play none none reverse"
          },
        }
      );
    }
  }, [index]);

  return (
    <motion.div
      ref={eduRef}
      className={`bg-gray-900 p-6 rounded-xl glass-effect border border-gray-800 ${
        hoverBorderColor.includes('neon-cyan') ? 'hover:border-neon-cyan' :
        hoverBorderColor.includes('electric-blue') ? 'hover:border-electric-blue' :
        'hover:border-neon-magenta'
      } transition-all duration-300`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gray-800 rounded-lg">
          {edu.icon}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
          <p className={institutionColor}>{edu.institution}</p>
          <div className="mt-2 flex justify-between">
            <span className="text-gray-400">{edu.period}</span>
            <span className="text-neon-magenta font-medium">{edu.grade}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formalEduContainerRef = useRef<HTMLDivElement>(null);
  const religiousEduContainerRef = useRef<HTMLDivElement>(null);

  const formalEducation = [
    {
      degree: "BS Software Engineering",
      institution: "Ilma University, Karachi",
      period: "In Progress",
      grade: "CGPA 3.4",
      icon: <GraduationCap className="text-neon-cyan" />
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "BIEK, Karachi",
      period: "Completed",
      grade: "B Grade",
      icon: <GraduationCap className="text-electric-blue" />
    },
    {
      degree: "Matriculation (Computer Science)",
      institution: "BSEK, Karachi",
      period: "Completed",
      grade: "A Grade",
      icon: <GraduationCap className="text-neon-magenta" />
    }
  ];

  const religiousEducation = [
    {
      degree: "Darse Nizami (Alim Course)",
      institution: "Board of Kanzul Madaris",
      period: "Last Year in Progress",
      grade: "8 years program",
      icon: <BookOpen className="text-neon-cyan" />
    },
    {
      degree: "Hifzul Quran ul Karim",
      institution: "Madarsa tul Madina",
      period: "Completed",
      grade: "Hafiz",
      icon: <BookOpen className="text-electric-blue" />
    }
  ];

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
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
            toggleActions: "play none none reverse"
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
            toggleActions: "play none none reverse"
          },
        }
      );

      // Animate formal education container
      gsap.fromTo(
        formalEduContainerRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formalEduContainerRef.current,
            start: 'top 85%',
            toggleActions: "play none none reverse"
          },
        }
      );

      // Animate religious education container
      gsap.fromTo(
        religiousEduContainerRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: religiousEduContainerRef.current,
            start: 'top 85%',
            toggleActions: "play none none reverse"
          },
        }
      );
    }
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-midnight-blue">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="neon-text">EDUCATION</span> & RELIGIOUS QUALIFICATION
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formal Education */}
          <motion.div
            ref={formalEduContainerRef}
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-neon-cyan flex items-center justify-center gap-2">
              <GraduationCap className="mr-2" /> FORMAL EDUCATION
            </h3>
            <div className="space-y-6">
              {formalEducation.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  edu={edu} 
                  index={index} 
                  hoverBorderColor="border-neon-cyan" 
                  institutionColor="text-electric-blue" 
                />
              ))}
            </div>
          </motion.div>

          {/* Religious Education */}
          <motion.div
            ref={religiousEduContainerRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-electric-blue flex items-center justify-center gap-2">
              <BookOpen className="mr-2" /> RELIGIOUS QUALIFICATION
            </h3>
            <div className="space-y-6">
              {religiousEducation.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  edu={edu} 
                  index={index} 
                  hoverBorderColor="border-electric-blue" 
                  institutionColor="text-neon-cyan" 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;