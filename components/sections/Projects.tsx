'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import useTiltEffect from '@/hooks/useTiltEffect';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { elementRef, rotation, glowPosition, isHovering } = useTiltEffect();

  return (
    <motion.div
      ref={elementRef}
      className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/50 glass-effect border backdrop-blur-sm ${
        isHovering ? 'border-neon-cyan scale-105 z-10' : 'border-gray-800'
      } transition-all duration-500 shadow-xl`}
      style={{
        transform: isHovering ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'none',
        transition: 'transform 0.1s ease'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-30"></div>
      </div>

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <motion.h3
            className="text-xl font-bold text-white"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {project.title}
          </motion.h3>
          <div className="flex gap-2">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-neon-cyan hover:text-midnight-blue transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#00ffff",
                color: "#0a0e17",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">
                <Github size={18} />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-electric-blue hover:text-midnight-blue transition-all duration-300 relative overflow-hidden group"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#4169e1",
                color: "#0a0e17",
                boxShadow: "0 0 15px rgba(65, 105, 225, 0.7)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="relative z-10">
                <ExternalLink size={18} />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.a>
          </div>
        </div>

        <motion.p
          className="text-gray-300 mb-6 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-gray-800 to-gray-700 text-neon-cyan border border-neon-cyan/30"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + techIndex * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center rounded-lg bg-gradient-to-r from-neon-cyan to-electric-blue text-midnight-blue font-medium relative overflow-hidden group"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="relative z-10">View Project</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.a>
      </div>

      {/* 3D Tilt Effect */}
      <div
        className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
        style={{
          background: `conic-gradient(from calc(${glowPosition.x}deg) at ${glowPosition.x}% ${glowPosition.y}%, transparent 0%, #00ffff 30%, #ff44aa 60%, #4169e1 100%)`,
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      ></div>
    </motion.div>
  );
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce (Chairy)",
      description: "Furniture e-commerce platform featuring library stool chairs, recliners, and modern UI design.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      liveUrl: "https://e-commerce-ur.netlify.app/components/project01",
      githubUrl: "https://github.com/UBAIDRAZA1/e-commerce",
      image: "/placeholder-project1.jpg"
    },
    {
      id: 2,
      title: "Nutri Track AI",
      description: "AI-powered nutrition tracker with smart dietary recommendations and health insights.",
      techStack: ["Next.js", "Vercel AI SDK", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://nutri-tracks-ai.netlify.app",
      githubUrl: "https://github.com/UBAIDRAZA1/NutriTrack_AI_Health",
      image: "/placeholder-project2.jpg"
    },
    {
      id: 3,
      title: "Task Master (Todo + Chatbot)",
      description: "Advanced todo app with integrated AI chatbot assistant for productivity enhancement.",
      techStack: ["React", "Vercel AI SDK", "TypeScript", "Firebase"],
      liveUrl: "https://todo-app-chatboot.vercel.app",
      githubUrl: "https://github.com/UBAIDRAZA1/todo-app-chatboot",
      image: "/placeholder-project3.jpg"
    },
    {
      id: 4,
      title: "Physical AI & Humanoid Robotics",
      description: "3D robotics simulation with humanoid control interface using advanced physics.",
      techStack: ["Three.js", "React Three Fiber", "TypeScript", "Cannon.js"],
      liveUrl: "https://physical-ai-humanoid-robotics-ubaid.vercel.app",
      githubUrl: "https://github.com/UBAIDRAZA1/Physical-AI-Humanoid-Robotics",
      image: "/placeholder-project4.jpg"
    },
    {
      id: 5,
      title: "Perfume & Watch Collection",
      description: "Luxury products e-commerce featuring chain/leather strap watches, perfumes, and earbuds.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Commerce.js"],
      liveUrl: "https://next-js-website-ubaid.netlify.app/components/project08",
      githubUrl: "https://github.com/UBAIDRAZA1",
      image: "/placeholder-project5.jpg"
    },
    {
      id: 6,
      title: "Resume Builder - Milestone 05",
      description: "Interactive resume builder with dynamic form sections, real-time preview, and PDF export functionality. Users can create professional resumes with personal info, education, experience, and skills.",
      techStack: ["HTML5", "CSS3", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://resumer-builder.netlify.app/milestone05",
      githubUrl: "https://github.com/UBAIDRAZA1/Resume-builder/tree/main/Milestone05",
      image: "/projects/resume-builder.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-midnight-blue relative overflow-hidden">
      {/* Expanding ripple-like particles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const duration = Math.random() * 5 + 5;
          const delay = Math.random() * 3;
          const leftPos = Math.random() * 100;
          const topPos = Math.random() * 100;

          return (
            <motion.div
              key={`ripple-${i}`}
              className="absolute rounded-full border"
              style={{
                width: '0px',
                height: '0px',
                left: `${leftPos}%`,
                top: `${topPos}%`,
                borderColor: i % 2 === 0 ? '#00ffff' : '#ff44aa',
                borderWidth: '1px',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                width: [0, 100, 0],
                height: [0, 100, 0],
                opacity: [0.5, 0, 0.5],
                scale: [0, 1, 0],
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

        {/* Floating bubbles */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 5 + 2;
          const duration = Math.random() * 6 + 6;
          const delay = Math.random() * 3;
          const leftPos = Math.random() * 100;

          return (
            <motion.div
              key={`bubble-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: i % 2 === 0 ? 'radial-gradient(circle, #00ffff, transparent)' :
                                             'radial-gradient(circle, #ff44aa, transparent)',
                left: `${leftPos}%`,
                bottom: '0%',
              }}
              animate={{
                y: [0, -150, 0],
                opacity: [0, 0.7, 0],
                x: [0, Math.random() * 20 - 10, 0],
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
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            MY <span className="neon-text text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">PROJECTS</span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;