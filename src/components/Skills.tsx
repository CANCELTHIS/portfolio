import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'React.js', percentage: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 90, color: 'bg-yellow-500' },
    { name: 'TypeScript', percentage: 85, color: 'bg-blue-600' },
    { name: 'HTML/CSS', percentage: 90, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', percentage: 85, color: 'bg-teal-500' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', percentage: 90, color: 'bg-green-500' },
    { name: 'Express.js', percentage: 85, color: 'bg-gray-500' },
    { name: 'MongoDB', percentage: 90, color: 'bg-green-600' },
    { name: 'RESTful APIs', percentage: 85, color: 'bg-purple-500' },
    
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
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
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
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;