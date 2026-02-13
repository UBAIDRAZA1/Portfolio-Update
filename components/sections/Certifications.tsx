'use client';

import { motion } from 'framer-motion';
import { BadgeDollarSign, GraduationCap, Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Certified AI, Metaverse & Web 3.0 Developer",
      issuer: "Governor House Karachi",
      date: "Quarter 4 in progress",
      description: "Comprehensive program covering artificial intelligence, metaverse technologies, and Web 3.0 development.",
      icon: <BadgeDollarSign className="text-neon-cyan" />
    },
    {
      id: 2,
      title: "CIT Web Development",
      issuer: "IOBM, NAVTTC",
      date: "2024 (3 months)",
      description: "Course covering HTML, CSS, JavaScript, MySQL, and Bootstrap for web development.",
      icon: <GraduationCap className="text-electric-blue" />
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-blue to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="neon-text">CERTIFICATIONS</span> & COURSES
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-gray-900 p-8 rounded-xl glass-effect border border-gray-800 hover:border-neon-cyan transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-neon-cyan font-medium">{cert.issuer}</span>
                    <span className="text-sm text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl glass-effect border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Award className="text-5xl text-neon-magenta" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-300 mb-4">
                I am constantly expanding my knowledge and skills in emerging technologies. Currently pursuing advanced studies in AI, Web 3.0, and blockchain technologies to stay at the forefront of innovation.
              </p>
              <p className="text-electric-blue">
                "Learning never exhausts the mind - Leonardo da Vinci"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;