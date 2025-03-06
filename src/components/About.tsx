import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Briefcase } from 'lucide-react';
import image from './img.jpg';
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I'm a passionate Full Stack Developer with expertise in modern web technologies.
            I specialize in building robust and scalable applications using React, Node.js, Express, and MongoDB.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={image}
                alt="Biruk Nigusie"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Who am I?</h3>
            <p className="text-gray-300 mb-6">
              I'm Biruk Nigusie, a dedicated full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="text-gray-300 mb-8">
              My journey in web development has equipped me with the skills to tackle complex problems and deliver high-quality solutions. I'm constantly learning and adapting to new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Code size={20} className="text-emerald-500" />
                <span className="text-gray-300">React.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <Server size={20} className="text-emerald-500" />
                <span className="text-gray-300">Node.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <Server size={20} className="text-emerald-500" />
                <span className="text-gray-300">Express.js</span>
              </div>
              <div className="flex items-center space-x-3">
                <Database size={20} className="text-emerald-500" />
                <span className="text-gray-300">MongoDB</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase size={20} className="text-emerald-500" />
                <span className="text-gray-300">3+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;