import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';
  const isBlogPage = location.pathname === '/blog';

  // Handle scroll to change header appearance
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

  // Set active section based on current page
  useEffect(() => {
    if (isProjectsPage) {
      setActiveSection('projects');
    } else if (isBlogPage) {
      setActiveSection('blog');
    } else if (isHomePage) {
      setActiveSection('about'); // Default to about when first loading homepage
    } else {
      setActiveSection('');
    }
  }, [isProjectsPage, isBlogPage, isHomePage]);

  // Handle scroll detection for sections on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleSectionScroll = () => {
      const sections = ['about', 'skills', 'experience', 'education', 'certifications'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= 150 && rect.bottom >= 150;

        if (isInView) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll);
    // Run once initially to set the correct active section
    handleSectionScroll();

    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Ahusan.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/#about"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'about' ? 'text-white font-medium' : ''
              }`}
            >
              about
              {activeSection === 'about' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/#skills"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'skills' ? 'text-white font-medium' : ''
              }`}
            >
              skills
              {activeSection === 'skills' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/#experience"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'experience' ? 'text-white font-medium' : ''
              }`}
            >
              experience
              {activeSection === 'experience' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/#education"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'education' ? 'text-white font-medium' : ''
              }`}
            >
              education
              {activeSection === 'education' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/#certifications"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'certifications' ? 'text-white font-medium' : ''
              }`}
            >
              certifications
              {activeSection === 'certifications' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            {/* Projects Link */}
            <Link
              to="/projects"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'projects' ? 'text-white font-medium' : ''
              }`}
            >
              projects
              {activeSection === 'projects' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <Link
              to="/blog"
              className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                activeSection === 'blog' ? 'text-white font-medium' : ''
              }`}
            >
              Blog
              {activeSection === 'blog' && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
              )}
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/#about"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'about'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              about
            </Link>

            <Link
              to="/#skills"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'skills'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              skills
            </Link>

            <Link
              to="/projects"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'projects'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              projects
            </Link>

            <Link
              to="/#experience"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'experience'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              experience
            </Link>

            <Link
              to="/#education"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'education'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              education
            </Link>

            <Link
              to="/#certifications"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'certifications'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              certifications
            </Link>

            <Link
              to="/blog"
              className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                activeSection === 'blog'
                  ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                  : 'text-gray-300'
              }`}
            >
              Blog
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
