import React from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of technologies and tools I&apos;ve mastered throughout my
            professional journey.
          </p>
        </div>

        <div className="space-y-16">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <CommandLineIcon className="h-8 w-8 text-indigo-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">{skillCategory.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skillCategory.subskills.map((skillUrl, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                    style={{
                      transition: 'all 0.3s ease',
                      transform: `translateY(${Math.random() * 10}px)`,
                      animation: `float ${2 + Math.random() * 2}s ease-in-out infinite alternate`,
                    }}
                  >
                    <img
                      src={skillUrl}
                      alt={`Skill ${skillIndex}`}
                      className="transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
