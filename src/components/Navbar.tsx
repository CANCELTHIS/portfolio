import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-emerald-500">B</span>iruk<span className="text-emerald-500">N</span>igusie
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/CANCELTHIS" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/biruk-nigusie-6a9859320/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-emerald-500 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-800 rounded-lg shadow-xl p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-300 hover:text-emerald-500 transition-colors duration-300 cursor-pointer font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-2 border-t border-gray-700">
                <a href="https://github.com/biruk-nigusie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition-colors duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/biruk-nigusie" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-emerald-500 transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@biruknigusie.com" className="text-gray-300 hover:text-emerald-500 transition-colors duration-300">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;