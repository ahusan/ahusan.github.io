import React, { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import Header from './Header';

const Layout = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-0 pt-32">
        {children}
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-12 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Ahusan Mohamed. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ahusan"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahusan/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="mailto:email@ahusan.dev"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
