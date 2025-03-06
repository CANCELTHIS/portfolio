import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather App',
      description: 'I built a simple and responsive weather app using React. It fetches real-time weather data using Axios and displays it in a clean UI with the help of React Icons. The app allows users to search for any city and view key weather details like temperature, humidity, and conditions. 🚀🌦️',
      image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['React'],
      github: 'https://github.com/CANCELTHIS/weather-App',
      demo: 'https://weather-app-sable-seven-43.vercel.app/',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'E-store',
      description: 'I built a full-stack E-Store application using React for the frontend and Node.js with Express for the backend. The app includes complete CRUD functionality, allowing users to browse, add, update, and delete products seamlessly. It features secure authentication, a dynamic shopping cart, and a smooth user experience. The backend is powered by Express.js, handling API requests efficiently. 🚀🛒',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['React', 'Node.js', 'MongoDB',"Express"],
      github: 'https://github.com/CANCELTHIS/E-store',
      demo: 'https://e-store-reia.onrender.com/',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Expense Tracker',
      description: 'I built an Expense Tracker application using React to help users manage their finances efficiently. The app allows users to add, edit, and delete expenses, categorize transactions, and track their spending over time. It features a clean and interactive UI, making budgeting simple and intuitive. 🚀💰',
      image: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhwZW5zZSUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
      tags: ['React'],
      github: 'https://github.com/BirukNigusie/expense-tracker-app',
      demo: 'https://main--cosmic-biscuit-44e2d0.netlify.app/',
      category: 'frontend'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Here are some of my recent projects. Each project reflects my skills and expertise in different areas of web development.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'frontend',  'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-700 text-emerald-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/CANCELTHIS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-colors duration-300"
          >
            <Code size={18} className="mr-2" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;