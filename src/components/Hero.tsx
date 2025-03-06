import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-800/90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-emerald-500 text-xl md:text-2xl font-medium mb-4">Hello, I'm</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Biruk Nigusie
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-3xl font-medium text-gray-300 mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'React Specialist',
                1000,
                'Node.js Developer',
                1000,
                'MongoDB Expert',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-100"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-emerald-500/20"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-full transition-colors duration-300"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <ChevronDown size={32} className="text-emerald-500" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;