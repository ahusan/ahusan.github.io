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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-indigo-400 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float-particle-1"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-float-particle-2"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-float-particle-3"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-indigo-300 rounded-full animate-float-particle-4"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float-particle-5"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-pink-300 rounded-full animate-float-particle-6"></div>
        <div className="absolute bottom-1/2 right-1/6 w-3 h-3 bg-indigo-400 rounded-full animate-float-particle-1"></div>
      </div>

      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      
      <Header />
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 pt-32">
        {children}
      </main>

      {/* Scroll to top button - enhanced */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 z-50 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
      )}

      {/* Footer - enhanced */}
      <footer className="relative bg-gray-900/50 backdrop-blur-sm py-12 mt-20 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Ahusan Mohamed. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/ahusan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahusan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="mailto:email@ahusan.dev"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-particle-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(-30px, -40px);
            opacity: 0.8;
          }
        }

        @keyframes float-particle-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: translate(25px, -35px);
            opacity: 0.9;
          }
        }

        @keyframes float-particle-3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(-20px, 30px);
            opacity: 0.7;
          }
        }

        @keyframes float-particle-4 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(30px, 25px);
            opacity: 1;
          }
        }

        @keyframes float-particle-5 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: translate(-35px, -30px);
            opacity: 0.8;
          }
        }

        @keyframes float-particle-6 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, -40px);
            opacity: 0.7;
          }
        }

        .animate-float-particle-1 {
          animation: float-particle-1 6s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 5s ease-in-out infinite;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 7s ease-in-out infinite;
        }

        .animate-float-particle-4 {
          animation: float-particle-4 6.5s ease-in-out infinite;
        }

        .animate-float-particle-5 {
          animation: float-particle-5 5.5s ease-in-out infinite;
        }

        .animate-float-particle-6 {
          animation: float-particle-6 6.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Layout;
