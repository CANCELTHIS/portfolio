import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { DiSass, DiGit } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiExpress, SiMongodb } from 'react-icons/si';

interface Skill {
  name: string;
  category: string; // Either "Frontend" or "Backend"
  icon: JSX.Element;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', category: 'Frontend', icon: <FaHtml5 className='text-blue-600'/> },
    { name: 'JavaScript', category: 'Frontend', icon: <FaJs className='text-blue-600'/> },
    { name: 'React.js', category: 'Frontend', icon: <FaReact className='text-blue-600'/> }, 
    { name: 'TypeScript', category: 'Frontend', icon: <SiTypescript className='text-blue-600'/> },
    { name: 'Tailwind CSS', category: 'Frontend', icon: <DiSass className='text-blue-600'/> },
    { name: 'Next.js', category: 'Backend', icon: <SiNextdotjs className='text-blue-600'/> },
  ];

  const backendSkills: Skill[] = [
    { name: 'Next.js', category: 'Backend', icon: <SiNextdotjs className='text-blue-600'/> },
    { name: 'Express.js', category: 'Backend', icon: <SiExpress className='text-blue-600'/> },
    { name: 'RESTful APIs', category: 'Backend', icon: <FaDatabase className='text-blue-600'/> },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I've developed a diverse set of skills throughout my career. Here's a comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Frontend Development</h3>
            <ul className="space-y-4 text-gray-300">
              {frontendSkills.map((skill, index) => (
                <motion.li key={index} variants={item} className="text-lg flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Backend Development</h3>
            <ul className="space-y-4 text-gray-300">
              {backendSkills.map((skill, index) => (
                <motion.li key={index} variants={item} className="text-lg flex items-center space-x-3">
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
        >
          {/* Add GitHub, Logs, or other additional information here */}
          <a href="https://github.com/CANCELTHIS/" className="text-blue-500 hover:underline">
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
