import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            My academic journey that has equipped me with the knowledge and skills for my
            professional career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.name}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-indigo-600/20 mr-4">
                  <AcademicCapIcon className="h-8 w-8 text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.name}</h3>
                  <p className="text-indigo-400">{edu.period}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6">{edu.description}</p>

              {/* Institution link */}
              <a
                href={edu.clientUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 group-hover:underline"
              >
                Visit institution website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="h-24 w-24 text-indigo-500/10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">GitHub Stats</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-indigo-500/20">
              <img
                src="https://readme.ahusan.dev/api?username=ahusan&amp;show_icons=true&theme=aura&include_all_commits=true&count_private=true"
                alt="GitHub Stats"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-indigo-500/20">
              <img
                src="https://readme.ahusan.dev/api/top-langs/?username=ahusan&layout=compact&theme=aura&langs_count=10"
                alt="GitHub Top Languages"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
