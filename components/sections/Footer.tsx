'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-midnight-blue to-black border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-neon-cyan">MUHAMMAD UBAID RAZA</h3>
            <p className="text-gray-400 text-sm mt-1">AGENTIC AI & WEB 3.0 DEVELOPER</p>
          </motion.div>

          <motion.div
            className="text-center md:text-right mt-2 md:mt-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base text-electric-blue italic">"Built with code, powered by faith."</p>
            <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>

        <motion.div
          className="mt-6 pt-4 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-500 text-xs">
            Designed and developed with ❤️ by Muhammad Ubaid Raza
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;