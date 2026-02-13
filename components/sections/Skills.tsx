'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiPython, SiMysql, SiGit, SiFigma, SiVercel, SiOpenai,
  SiPostgresql, SiDocker, SiPytorch, SiGnubash,
  SiNodedotjs, SiExpress, SiFastapi,
  SiZod, SiReacthookform, SiWeb3Dotjs, SiRadixui,
  SiIpfs, SiGraphql
} from 'react-icons/si';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, 
  FaAws, FaDocker, FaFigma 
} from 'react-icons/fa';
import { DiJavascript, DiMongodb } from 'react-icons/di';
import { TbBrandThreejs, TbBrandNextjs, TbBrandReact, TbBrandTypescript } from 'react-icons/tb';
import { MdOutlineApi, MdCloudQueue } from 'react-icons/md';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ============ FRONTEND MASTERY ============
  const frontendSkills = [
    { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-[#E34F26] text-2xl" />, description: 'Semantic, Accessibility' },
    { name: 'CSS3', level: 95, icon: <FaCss3Alt className="text-[#1572B6] text-2xl" />, description: 'Flexbox, Grid, Animations' },
    { name: 'JavaScript (ES6+)', level: 92, icon: <DiJavascript className="text-[#F7DF1E] text-2xl" />, description: 'Closures, Promises, Async/Await' },
    { name: 'TypeScript', level: 88, icon: <SiTypescript className="text-[#3178C6] text-2xl" />, description: 'Types, Interfaces, Generics' },
    { name: 'React.js', level: 90, icon: <FaReact className="text-[#61DAFB] text-2xl" />, description: 'Hooks, Context, Performance' },
    { name: 'Next.js 14', level: 89, icon: <SiNextdotjs className="text-white text-2xl" />, description: 'App Router, SSR, ISR, Server Actions' },
    { name: 'Tailwind CSS', level: 94, icon: <SiTailwindcss className="text-[#06B6D4] text-2xl" />, description: 'Responsive, Custom Config' },
    { name: 'Framer Motion', level: 85, icon: <SiFramer className="text-[#0055FF] text-2xl" />, description: 'Gestures, Layout Animations' },
    { name: 'React Query', level: 83, icon: <SiReacthookform className="text-[#FF4154] text-2xl" />, description: 'Server State, Caching' },
    { name: 'Zod', level: 85, icon: <SiZod className="text-[#3E67B1] text-2xl" />, description: 'Schema Validation' },
    { name: 'Shadcn/ui', level: 87, icon: <SiRadixui className="text-white text-2xl" />, description: 'Component Library' },
  ];

  // ============ BACKEND & DATABASE ============
  const backendSkills = [
    { name: 'Node.js', level: 82, icon: <FaNodeJs className="text-[#339933] text-2xl" />, description: 'Express, REST APIs' },
    { name: 'Python', level: 80, icon: <SiPython className="text-[#3776AB] text-2xl" />, description: 'FastAPI, Django Basics' },
    { name: 'MySQL', level: 85, icon: <SiMysql className="text-[#4479A1] text-2xl" />, description: 'Queries, Joins, Indexing' },
    { name: 'PostgreSQL', level: 78, icon: <SiPostgresql className="text-[#4169E1] text-2xl" />, description: 'Advanced SQL' },
    { name: 'MongoDB', level: 75, icon: <DiMongodb className="text-[#47A248] text-2xl" />, description: 'NoSQL, Aggregation' },
    { name: 'GraphQL', level: 72, icon: <SiGraphql className="text-[#E10098] text-2xl" />, description: 'Apollo, Yoga' },
    { name: 'RESTful APIs', level: 88, icon: <MdOutlineApi className="text-[#FF6C37] text-2xl" />, description: 'Integration, Design' },
  ];

  // ============ AI, WEB3 & CLOUD ============
  const aiWeb3CloudSkills = [
    { name: 'Generative AI', level: 82, icon: <SiOpenai className="text-[#412991] text-2xl" />, description: 'GPT-4, Prompt Engineering' },
    { name: 'Vercel AI SDK', level: 85, icon: <SiVercel className="text-white text-2xl" />, description: 'Streaming, Tool Calls' },
    { name: 'Web3.js', level: 72, icon: <SiWeb3Dotjs className="text-[#F16822] text-2xl" />, description: 'Blockchain Interaction' },
    { name: 'IPFS', level: 65, icon: <SiIpfs className="text-[#65C2CB] text-2xl" />, description: 'Decentralized Storage' },
    { name: 'Docker', level: 68, icon: <SiDocker className="text-[#2496ED] text-2xl" />, description: 'Containerization' },
    { name: 'Vercel/Netlify', level: 92, icon: <SiVercel className="text-white text-2xl" />, description: 'Deployment, CI/CD' },
  ];

  // ============ TOOLS & WORKFLOW ============
  const toolsWorkflow = [
    { name: 'Git/GitHub', level: 90, icon: <FaGithub className="text-white text-2xl" />, description: 'Version Control, Collaboration' },
    { name: 'VS Code', level: 95, icon: <SiNodedotjs className="text-[#007ACC] text-2xl" />, description: 'Extensions, Debugging' },
    { name: 'Figma', level: 82, icon: <FaFigma className="text-[#F24E1E] text-2xl" />, description: 'UI/UX Design, Prototyping' },
    { name: 'Postman', level: 88, icon: <MdOutlineApi className="text-[#FF6C37] text-2xl" />, description: 'API Testing' },
    { name: 'Bash/Zsh', level: 78, icon: <SiGnubash className="text-[#4EAA25] text-2xl" />, description: 'Command Line' },
    { name: 'npm/yarn/pnpm', level: 92, icon: <FaNodeJs className="text-[#CB3837] text-2xl" />, description: 'Package Management' },
  ];

  // ============ SOFT SKILLS ============
  const softSkills = [
    { name: 'Problem Solving', level: 94, icon: '🧠', description: 'Analytical Thinking' },
    { name: 'Team Collaboration', level: 92, icon: '🤝', description: 'Cross-functional Teams' },
    { name: 'Communication', level: 90, icon: '💬', description: 'Technical Writing, Presentation' },
    { name: 'Time Management', level: 88, icon: '⏰', description: 'Deadline Driven' },
    { name: 'Quick Learner', level: 96, icon: '⚡', description: 'Adapt to New Tech' },
    { name: 'Leadership', level: 82, icon: '👑', description: 'Mentoring, Initiative' },
  ];

  // ============ LANGUAGES ============
  const languages = [
    { name: 'Urdu', level: 100, icon: '🇵🇰', description: 'Native' },
    { name: 'English', level: 85, icon: '🇬🇧', description: 'Professional Working' },
    { name: 'Arabic', level: 70, icon: '🇸🇦', description: 'Quranic, Basic Conversation' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sectionRef.current) return;

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
  }, []);

  const SkillCard = ({ 
    title, 
    skills, 
    gradientFrom, 
    gradientTo, 
    icon,
    delay = 0 
  }: { 
    title: string; 
    skills: any[]; 
    gradientFrom: string; 
    gradientTo: string; 
    icon: JSX.Element;
    delay?: number;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (typeof window === 'undefined') return;
      if (!cardRef.current) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: "play none none reverse"
          },
        }
      );
    }, [delay]);

    return (
      <motion.div
        ref={cardRef}
        className="bg-gradient-to-br from-[#0a0f1e]/90 to-[#0a0f1e] backdrop-blur-lg p-6 rounded-2xl border border-[#00ffff]/20 shadow-xl hover:border-[#00ffff]/60 transition-all duration-300"
        whileHover={{ y: -5, scale: 1.01 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} bg-opacity-20`}>
            {icon}
          </div>
          <h3 className={`text-2xl font-bold font-orbitron bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
            {title}
          </h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-xs text-gray-400 ml-2 hidden group-hover:inline">
                    {skill.description}
                  </span>
                </div>
                <span className={`text-sm font-mono bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] to-black z-0"></div>

      {/* Rotating constellation-like particles background */}
      <div className="absolute inset-0 opacity-30 z-0">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 6 + 4;
          const delay = Math.random() * 3;
          const leftPos = Math.random() * 100;
          const topPos = Math.random() * 100;
          const radius = Math.random() * 50 + 20;
          const angle = Math.random() * Math.PI * 2;

          return (
            <motion.div
              key={`constellation-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: i % 3 === 0 ? 'radial-gradient(circle, #00ffff, #008888)' :
                           i % 3 === 1 ? 'radial-gradient(circle, #ff44aa, #cc0066)' :
                                         'radial-gradient(circle, #4169e1, #0000cc)',
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
              animate={{
                x: [0, Math.cos(angle) * radius, Math.cos(angle + Math.PI) * radius, 0],
                y: [0, Math.sin(angle) * radius, Math.sin(angle + Math.PI) * radius, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.2, 0.5],
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

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with enhanced animations */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 font-orbitron relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#4169e1] to-[#ff44aa]">TECHNICAL</span>{" "}
            <span className="text-white">PROWESS</span>
            <motion.div
              className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.h2>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#00ffff] via-[#ff44aa] to-[#00ffff] mx-auto rounded-full relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>

          <motion.p
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Hafiz, Alim, and Full-Stack Developer with expertise in modern AI, Web3, and Cloud technologies
          </motion.p>
        </motion.div>

        {/* Skills Grid with enhanced animations */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 relative">
          <SkillCard
            title="FRONTEND MASTERY"
            skills={frontendSkills}
            gradientFrom="from-[#00ffff]"
            gradientTo="to-[#4169e1]"
            icon={<FaReact className="text-3xl text-[#61DAFB]" />}
            delay={0}
          />

          <SkillCard
            title="BACKEND & DATABASE"
            skills={backendSkills}
            gradientFrom="from-[#44ff88]"
            gradientTo="to-[#00cc99]"
            icon={<FaNodeJs className="text-3xl text-[#339933]" />}
            delay={1}
          />

          <SkillCard
            title="AI, WEB3 & CLOUD"
            skills={aiWeb3CloudSkills}
            gradientFrom="from-[#ff44aa]"
            gradientTo="to-[#ff0080]"
            icon={<SiOpenai className="text-3xl text-[#412991]" />}
            delay={2}
          />

          <SkillCard
            title="TOOLS & WORKFLOW"
            skills={toolsWorkflow}
            gradientFrom="from-[#ffaa44]"
            gradientTo="to-[#ff7700]"
            icon={<FaGithub className="text-3xl text-white" />}
            delay={3}
          />

          <SkillCard
            title="SOFT SKILLS"
            skills={softSkills}
            gradientFrom="from-[#aa44ff]"
            gradientTo="to-[#7700ff]"
            icon={<span className="text-3xl">🧠</span>}
            delay={4}
          />

          <SkillCard
            title="LANGUAGES"
            skills={languages}
            gradientFrom="from-[#44aaff]"
            gradientTo="to-[#0066cc]"
            icon={<span className="text-3xl">🗣️</span>}
            delay={5}
          />
        </div>

        {/* Enhanced Skill Summary Badge */}
        <motion.div
          className="mt-16 p-6 bg-gradient-to-r from-[#00ffff]/10 via-transparent to-[#ff44aa]/10 rounded-full border border-[#00ffff]/30 backdrop-blur-sm text-center mx-auto max-w-3xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ffff]/5 to-[#ff44aa]/5"></div>
          <motion.p
            className="text-gray-300 text-lg relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <motion.span
              className="text-[#00ffff] font-bold inline-block"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px #00ffff" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              50+ Technologies
            </motion.span> mastered •
            <motion.span
              className="text-[#ff44aa] font-bold mx-2 inline-block"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px #ff44aa" }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              6+ Production Projects
            </motion.span> •
            <motion.span
              className="text-[#44ff88] font-bold inline-block"
              whileHover={{ scale: 1.1, textShadow: "0 0 10px #44ff88" }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              Continuous Learner
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;