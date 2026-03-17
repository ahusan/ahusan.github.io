import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { personal } from '../data/portfolioData';

const phrases = [
  'Full Stack Engineer',
  'Software Developer',
  'Next.js & Remix Specialist',
  'Node.js + FastAPI Builder',
  'Cloud Infrastructure Engineer',
];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [heroAnimationData, setHeroAnimationData] = useState(null);
  const [aboutAnimationData, setAboutAnimationData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const controller = new AbortController();

    const loadAnimation = async (url, setData) => {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        // Keep graceful fallback if CDN is unavailable.
      }
    };

    loadAnimation(
      'https://assets2.lottiefiles.com/packages/lf20_cg5txc.json',
      setHeroAnimationData
    );
    loadAnimation(
      'https://lottie.host/?file=3216f451-384a-4b43-bff5-a9dfc0777bea/BSKddAIRIa.json',
      setAboutAnimationData
    );

    return () => controller.abort();
  }, []);

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
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed]);

  const scrollToProjects = () => {
    navigate('/projects');
  };

  return (
    <div id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          {/* Animated greeting */}
          <div className="inline-block animate-fade-in-up">
            <span className="text-indigo-400 text-sm font-semibold tracking-wide uppercase">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I&apos;m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
              {personal.name}
            </span>
          </h1>

          <div className="min-h-[2.5rem] md:min-h-[3rem] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 whitespace-nowrap">
              <span className="inline-block">{typedText}</span>
              <span className="inline-block w-1 h-6 md:h-8 bg-indigo-500 ml-1 animate-blink"></span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Senior full-stack engineer with 6+ years delivering production systems at scale. I architect
            and build end-to-end solutions—from resilient backend APIs (Node.js, FastAPI) to
            high-performance frontends (Next.js, React, Remix)—backed by cloud infrastructure, CI/CD
            pipelines, and engineering best practices. I drive measurable outcomes: faster delivery,
            lower costs, improved reliability, and systems that empower teams to ship confidently.
          </p>

          {/* Enhanced status badge */}
          <div className="inline-flex items-center gap-3 rounded-xl ring-1 ring-indigo-500/20 bg-gray-900/50 backdrop-blur-md px-4 py-3 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 relative">
              {heroAnimationData ? (
                <Lottie animationData={heroAnimationData} loop autoplay />
              ) : (
                <div className="h-12 w-12 animate-pulse rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-50" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-white">Currently Building</p>
              <p className="text-xs text-gray-400">
                Resilient, production-grade platforms
              </p>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href={personal.socialLinks.email}
              className="group px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
            <button
              onClick={scrollToProjects}
              className="group px-8 py-3 rounded-xl bg-gray-800/80 backdrop-blur-sm text-white font-medium hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 shadow-lg ring-1 ring-gray-700/50 hover:ring-indigo-500/50 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDownIcon className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Enhanced Profile image section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Rotating ring - more subtle */}
            <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-spin-slow"></div>
            
            {/* Profile image - no hard border */}
            <img
              src={process.env.PUBLIC_URL + personal.profileImage}
              alt={personal.name}
              className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full ring-1 ring-indigo-500/10 group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Status indicator with pulse - softer border */}
            <div className="absolute -bottom-2 -right-2 bg-gray-900/90 backdrop-blur-sm rounded-full p-3 ring-1 ring-indigo-500/30 shadow-lg shadow-indigo-500/20">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping"></div>
              </div>
            </div>
            
            {/* Floating badge with Lottie - softer border */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl ring-1 ring-indigo-500/20 bg-gray-900/70 backdrop-blur-md p-3 shadow-2xl shadow-indigo-500/10 hover:scale-110 transition-transform duration-300 animate-float">
              {aboutAnimationData ? (
                <Lottie animationData={aboutAnimationData} loop autoplay />
              ) : (
                <div className="h-full w-full animate-pulse rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 opacity-50" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Social links */}
      <div className="mt-16 flex justify-center md:justify-start space-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a
          href={personal.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="GitHub"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <svg className="h-7 w-7 relative" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </a>
        <a
          href={personal.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="LinkedIn"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <svg className="h-7 w-7 relative" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </div>
        </a>
        <a
          href={personal.socialLinks.email}
          className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Email"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <svg className="h-7 w-7 relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </a>
        <a
          href={personal.socialLinks.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          aria-label="Blog"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <svg className="h-7 w-7 relative" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 20H5a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM5 5v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="relative md:bottom-8 bottom-0 mt-16 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2 font-medium">Explore More</span>
        <ArrowDownIcon className="h-6 w-6 text-indigo-400" />
      </div>

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
