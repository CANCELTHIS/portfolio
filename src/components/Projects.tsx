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
  id: 2,
  title: 'Besocial',
  description: 'I built a full-stack social media app using Next.js for the frontend, Prisma with PostgreSQL for the backend, and Clerk for authentication. The app includes features like user profiles, follow/unfollow functionality, post creation with file uploads, and real-time updates. It is styled with Tailwind CSS and Shadcn UI to ensure a clean, responsive design. 🚀💬',
  image: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww',
  tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Clerk'],
  github: 'https://github.com/CANCELTHIS/besocial',
  demo: 'https://besocial-gray.vercel.app/',
  category: 'fullstack'
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
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
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
                    ? 'bg-blue-600 text-white'
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
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300"
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
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
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
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-700 text-blue-400"
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