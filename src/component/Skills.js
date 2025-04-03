import React, { useState } from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Extract all skills from all categories with the new data structure
  const allSkills = skills.flatMap(category =>
    category.subskills.map(skill => {
      // Extract skill name from shield.io URL
      const nameMatch = skill.url.match(/badge\/-?([^-]+)-/);
      const name = nameMatch ? nameMatch[1].replace(/%20/g, ' ') : 'Skill';

      return {
        ...skill,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        category: category.name,
      };
    })
  );

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter(skill => skill.category === activeCategory);

  // Handle skill hover
  const handleSkillHover = skill => {
    setHoveredSkill(skill);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section id="skills" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive collection of technologies and tools I&apos;ve mastered throughout my
            professional journey.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
              }`}
          >
            All Skills
          </button>

          {skills.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.name
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Proficiency Legend - Moved outside the skills display */}
        <div className="flex justify-end mb-4">
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <CommandLineIcon className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-medium text-gray-300">Proficiency Level</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { level: 5, label: 'Master' },
                { level: 4, label: 'Expert' },
                { level: 3, label: 'Advanced' },
                { level: 2, label: 'Intermediate' },
                { level: 1, label: 'Beginner' },
              ].map(({ level, label }) => (
                <div key={level} className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full mr-0.5 ${
                          i < level ? 'bg-indigo-500' : 'bg-gray-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Display */}
        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 overflow-hidden">
          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-6 gap-y-8 mt-2">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center"
                onMouseEnter={() => handleSkillHover(skill)}
                onMouseLeave={handleSkillLeave}
              >
                {/* Skill Icon Background - static, no animation */}
                <div
                  className="absolute rounded-lg bg-indigo-500/5"
                  style={{
                    width: `${skill.proficiency * 7 + 38}px`,
                    height: `${skill.proficiency * 7 + 38}px`,
                    boxShadow: `0 0 ${skill.proficiency * 2}px rgba(99, 102, 241, 0.${
                      skill.proficiency
                    })`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    // Only transform on hover
                    transform: hoveredSkill === skill ? 'scale(1.15)' : 'scale(1)',
                  }}
                ></div>

                {/* Skill Icon */}
                <div
                  className="relative z-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-1.5 border border-gray-700/50 transition-all duration-300"
                  style={{
                    transform: hoveredSkill === skill ? 'scale(1.12)' : 'scale(1)',
                    boxShadow: hoveredSkill === skill ? '0 0 12px rgba(99, 102, 241, 0.3)' : 'none',
                    borderColor:
                      hoveredSkill === skill ? 'rgba(99, 102, 241, 0.5)' : 'rgba(55, 65, 81, 0.5)',
                  }}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    title={skill.name}
                    className="h-6 w-auto object-contain"
                  />
                </div>

                {/* Proficiency Indicator - dots above */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        i < skill.proficiency
                          ? hoveredSkill === skill
                            ? 'bg-indigo-400 scale-125'
                            : 'bg-indigo-500'
                          : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Name Tooltip */}
        {hoveredSkill && (
          <div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-lg rounded-xl p-4 border border-indigo-500/20 shadow-xl z-50"
            style={{
              animation: 'fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards',
            }}
          >
            <h3 className="text-lg font-bold text-white mb-1">{hoveredSkill.name}</h3>
            <p className="text-sm text-gray-300">{hoveredSkill.category}</p>
            <div className="mt-2 flex items-center">
              <div className="text-xs text-gray-400 mr-2">Proficiency:</div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i < hoveredSkill.proficiency ? 'bg-indigo-500 scale-110' : 'bg-gray-600'
                    }`}
                  ></div>
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-400">
                {hoveredSkill.proficiency === 1
                  ? 'Beginner'
                  : hoveredSkill.proficiency === 2
                  ? 'Intermediate'
                  : hoveredSkill.proficiency === 3
                  ? 'Advanced'
                  : hoveredSkill.proficiency === 4
                  ? 'Expert'
                  : 'Master'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
