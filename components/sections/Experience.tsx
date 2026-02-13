'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Web Developer Intern",
      company: "Arch Technology",
      period: "2 months",
      location: "Karachi, Pakistan",
      description: "Gained hands-on experience in web development technologies, worked on client projects, and collaborated with senior developers to deliver quality solutions.",
      icon: <Briefcase className="text-neon-cyan" />
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Governor House Karachi",
      period: "Current",
      location: "Karachi, Pakistan",
      description: "Currently contributing to innovative projects focused on AI, Metaverse, and Web 3.0 technologies as part of the certified developer program.",
      icon: <Building className="text-electric-blue" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-midnight-blue">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            MY <span className="neon-text">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan to-electric-blue hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gray-900 p-6 rounded-xl glass-effect border border-gray-800 hover:border-neon-cyan transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-neon-cyan">{exp.icon}</span>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <p className="text-lg text-electric-blue mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center gap-1 text-sm text-gray-400">
                        <Calendar size={16} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-400">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-midnight-blue border-4 border-neon-cyan flex items-center justify-center z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-cyan to-electric-blue"></div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl glass-effect border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">My Professional Journey</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              From my early days as an intern at Arch Technology to my current role contributing to innovative projects at Governor House Karachi, I've been consistently growing my expertise in web development, AI, and emerging technologies. My journey reflects a commitment to continuous learning and excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;