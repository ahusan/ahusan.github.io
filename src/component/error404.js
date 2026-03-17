import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

function Error404() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadAnimation = async () => {
      try {
        // Using a "searching/not found" animation - robot looking for page
        const response = await fetch(
          'https://assets3.lottiefiles.com/packages/lf20_kcsr6fcp.json',
          { signal: controller.signal }
        );
        if (response.ok) {
          const data = await response.json();
          setAnimationData(data);
        }
      } catch (error) {
        // Graceful fallback
      }
    };

    loadAnimation();
    return () => controller.abort();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Lottie Animation Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Lottie Animation or Fallback */}
              <div className="relative flex items-center justify-center" style={{ minHeight: '400px' }}>
                {animationData ? (
                  <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
                  />
                ) : (
                  // Elegant CSS fallback with floating 404
                  <div className="relative">
                    <div className="text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-float select-none">
                      404
                    </div>
                    {/* Floating particles */}
                    <div className="absolute top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full animate-float-particle-1"></div>
                    <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-500 rounded-full animate-float-particle-2"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-pink-500 rounded-full animate-float-particle-3"></div>
                    <div className="absolute bottom-0 right-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-float-particle-4"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-gray-300">
                Looks like you&apos;ve ventured into uncharted territory
              </p>
              <p className="text-gray-400">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
                Let&apos;s get you back on track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/"
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 inline-flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Back to Home
              </Link>

              <Link
                to="/projects"
                className="px-8 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-300 shadow-lg border border-gray-700 inline-flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                View Projects
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400 mb-3">Quick Links:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/#about"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  About
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  to="/#skills"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Skills
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  to="/#experience"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Experience
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  to="/blog"
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fallback CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-particle-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(-20px, -30px);
            opacity: 1;
          }
        }

        @keyframes float-particle-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: translate(15px, -25px);
            opacity: 1;
          }
        }

        @keyframes float-particle-3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(-15px, 20px);
            opacity: 1;
          }
        }

        @keyframes float-particle-4 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, 15px);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particle-1 {
          animation: float-particle-1 4s ease-in-out infinite;
        }

        .animate-float-particle-2 {
          animation: float-particle-2 3.5s ease-in-out infinite;
        }

        .animate-float-particle-3 {
          animation: float-particle-3 5s ease-in-out infinite;
        }

        .animate-float-particle-4 {
          animation: float-particle-4 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Error404;
