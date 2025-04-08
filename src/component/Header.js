import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll to change header appearance and track active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine which section is currently in view
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications'];

      // Find the section that is currently most visible in the viewport
      let currentSection = '';
      let maxVisibility = 0;

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight > 0 ? visibleHeight / element.offsetHeight : 0;

          if (visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add debugging for click events
  useEffect(() => {
    const handleDocumentClick = e => {
      console.log('Click detected on:', e.target);
      console.log('Target classList:', e.target.classList);
      console.log('Target parent:', e.target.parentElement);
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = id => {
    console.log(`Attempting to scroll to section: ${id}`);
    const element = document.getElementById(id);
    console.log(`Element found:`, element);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      console.error(`Element with id "${id}" not found`);
    }
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
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Ahusan.dev
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'skills', 'projects', 'experience', 'education', 'certifications'].map(
              item => (
                <button
                  key={item}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Button clicked for section: ${item}`);
                    scrollToSection(item);
                  }}
                  className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
                    activeSection === item ? 'text-white font-medium' : ''
                  }`}
                >
                  {item}
                  {activeSection === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
                  )}
                </button>
              )
            )}
            <a
              href="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer relative"
            >
              Blog
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
              onClick={e => console.log('Resume link clicked')}
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
            {['about', 'skills', 'projects', 'experience', 'education', 'certifications'].map(
              item => (
                <button
                  key={item}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log(`Mobile button clicked for section: ${item}`);
                    scrollToSection(item);
                  }}
                  className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
                    activeSection === item
                      ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
                      : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              )
            )}
            <a
              href="/blog"
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              Blog
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300 cursor-pointer"
              onClick={e => console.log('Mobile resume link clicked')}
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
