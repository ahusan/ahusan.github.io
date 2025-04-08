import React, { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero = ({ person }) => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    'Software Developer',
    'Frontend Engineer',
    'Backend Developer',
    'DevOps Enthusiast',
    'Programmer',
    'Web Developer',
    'Full Stack Developer',
    'Software Engineer',
    'Cloud Engineer',
    'CISCO certified Network Engineer',
  ];

  useEffect(() => {
    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;

      // Set typing speed based on action
      if (shouldDelete) {
        setTypingSpeed(50); // Faster when deleting
      } else {
        setTypingSpeed(150); // Normal speed when typing
      }

      // Handle typing and deleting
      if (!shouldDelete && typedText === currentPhrase) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      } else if (shouldDelete && typedText === '') {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }

      // Update typed text
      const newText = shouldDelete
        ? currentPhrase.substring(0, typedText.length - 1)
        : currentPhrase.substring(0, typedText.length + 1);

      setTypedText(newText);
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Hi, I&apos;m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Ahusan Mohamed
            </span>
          </h1>

          <div className="h-8 md:h-10">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
              <span className="inline-block">{typedText}</span>
              <span className="inline-block w-1 h-6 md:h-8 bg-indigo-500 ml-1 animate-blink"></span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl">
            A passionate developer with expertise in building modern web applications, focusing on
            creating exceptional user experiences with clean, efficient code.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="mailto:email@ahusan.dev"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
            >
              Contact Me
            </a>
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              View Projects
              <ArrowDownIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Profile image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-lg opacity-30 animate-pulse"></div>
            <img
              src={process.env.PUBLIC_URL + '/15189738.jpg'}
              alt="Ahusan Mohamed"
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-gray-800"
            />
            <div className="absolute -bottom-2 -right-2 bg-gray-900 rounded-full p-3 border-2 border-indigo-500">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="mt-12 flex justify-center md:justify-start space-x-6">
        <a
          href="https://github.com/ahusan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="GitHub"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/ahusan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="mailto:email@ahusan.dev"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Email"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
        <a
          href="https://blog.ahusan.dev"
          className="text-gray-400 hover:text-white transition-colors duration-300"
          aria-label="Blog"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 20H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM5 5v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="relative md:bottom-8 bottom-0 mt-10 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <ArrowDownIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default Hero;
