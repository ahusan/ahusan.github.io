import { CommandLineIcon } from '@heroicons/react/24/outline';
import Lottie from 'lottie-react';
import React, { useEffect, useMemo, useState } from 'react';

const CATEGORY_ANIMATIONS = {
  'Programming Languages': 'https://assets2.lottiefiles.com/packages/lf20_2LdLki.json',
  'Frameworks & Runtime': 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json',
  'Frontend Technologies': 'https://assets2.lottiefiles.com/packages/lf20_zrqthn6o.json',
  'Databases & Data': 'https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json',
  'DevOps & Cloud': 'https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json',
  'Development Tools': 'https://assets2.lottiefiles.com/packages/lf20_obhph3sh.json',
  'Operating Systems': 'https://assets2.lottiefiles.com/packages/lf20_HpFqiS.json',
  'Technical Skills': 'https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json',
  default: 'https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json',
};

const getProficiencyLabel = proficiency => {
  if (proficiency === 1) return 'Beginner';
  if (proficiency === 2) return 'Intermediate';
  if (proficiency === 3) return 'Advanced';
  if (proficiency === 4) return 'Expert';
  return 'Master';
};

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState(() => skills[0]?.name || 'all');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [previewAnimationData, setPreviewAnimationData] = useState(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = event => setPrefersReducedMotion(event.matches);
    setPrefersReducedMotion(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updatePreference);
      return () => mediaQuery.removeEventListener('change', updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  // Extract all skills from all categories with the new data structure
  const allSkills = useMemo(
    () =>
      skills.flatMap(category =>
        category.subskills.map(skill => {
          const nameMatch = skill.url.match(/badge\/-?([^-]+)-/);
          const name = nameMatch ? nameMatch[1].replace(/%20/g, ' ') : 'Skill';

          return {
            ...skill,
            name: name.charAt(0).toUpperCase() + name.slice(1),
            category: category.name,
          };
        })
      ),
    [skills]
  );

  // Filter skills based on current mode
  const filteredSkills = showAllSkills
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  const previewCategory = showAllSkills
    ? hoveredSkill?.category || activeCategory || skills[0]?.name || 'all'
    : activeCategory;

  useEffect(() => {
    if (prefersReducedMotion) {
      setPreviewAnimationData(null);
      return;
    }

    const controller = new AbortController();
    const animationUrl = CATEGORY_ANIMATIONS[previewCategory] || CATEGORY_ANIMATIONS.default;

    const loadPreviewAnimation = async () => {
      try {
        setIsPreviewLoading(true);
        const response = await fetch(animationUrl, { signal: controller.signal });
        if (!response.ok) {
          setIsPreviewLoading(false);
          return;
        }
        const data = await response.json();
        setPreviewAnimationData(data);
      } catch (error) {
        // Keep preview panel functional without animation.
      } finally {
        setIsPreviewLoading(false);
      }
    };

    loadPreviewAnimation();
    return () => controller.abort();
  }, [prefersReducedMotion, previewCategory]);

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
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            A comprehensive collection of technologies and tools I&apos;ve mastered throughout my
            professional journey.
          </p>
        </div>

        {/* Category-first navigation with optional all-skills mode */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setShowAllSkills(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                !showAllSkills
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
              }`}
            >
              Category View
            </button>
            <button
              onClick={() => setShowAllSkills(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                showAllSkills
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
              }`}
            >
              All Skills
            </button>
          </div>
          <div className="overflow-x-auto pb-1 no-scrollbar">
            <div className="flex w-max min-w-full justify-start md:justify-center gap-3 px-1">
              {skills.map(category => (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setShowAllSkills(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    activeCategory === category.name && !showAllSkills
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-gray-300">
            {showAllSkills
              ? `All Skills · ${allSkills.length}`
              : `${activeCategory} · ${
                  allSkills.filter(skill => skill.category === activeCategory).length
                } skills`}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2 bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-lg bg-gray-900/70 border border-gray-700 flex items-center justify-center">
                {prefersReducedMotion ? (
                  <CommandLineIcon className="h-8 w-8 text-indigo-400" />
                ) : previewAnimationData ? (
                  <Lottie
                    animationData={previewAnimationData}
                    loop={Boolean(hoveredSkill)}
                    autoplay
                    className="h-16 w-16"
                  />
                ) : (
                  <div
                    className={`h-10 w-10 rounded-full ${
                      isPreviewLoading ? 'animate-pulse bg-indigo-500/20' : 'bg-indigo-500/10'
                    }`}
                  />
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {showAllSkills ? `All Skills • ${previewCategory}` : previewCategory}
                </h3>
                <p className="text-sm text-gray-400">
                  {hoveredSkill
                    ? `${hoveredSkill.name} • ${getProficiencyLabel(hoveredSkill.proficiency)}`
                    : 'Hover a skill to preview contextual animation.'}
                </p>
              </div>
            </div>
          </div>
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
                  <span className="text-xs text-gray-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Display */}
        <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-6 gap-y-8 mt-2">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center"
                onMouseEnter={() => handleSkillHover(skill)}
                onMouseLeave={handleSkillLeave}
                onFocus={() => handleSkillHover(skill)}
                onBlur={handleSkillLeave}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleSkillHover(skill);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`${skill.name} in ${skill.category}`}
              >
                {/* Skill Icon Background - static, no animation */}
                <div
                  className="absolute rounded-lg bg-indigo-500/5"
                  style={{
                    width: `${skill.proficiency * 7 + 38}px`,
                    height: `${skill.proficiency * 7 + 38}px`,
                    boxShadow: `0 0 ${skill.proficiency * 1.5}px rgba(99, 102, 241, 0.${
                      skill.proficiency
                    })`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredSkill?.url === skill.url ? 'scale(1.15)' : 'scale(1)',
                  }}
                ></div>

                {/* Skill Icon */}
                <div
                  className="relative z-10 bg-gray-800/80 backdrop-blur-sm rounded-lg p-1.5 border border-gray-700/50 transition-all duration-300"
                  style={{
                    transform: hoveredSkill?.url === skill.url ? 'scale(1.12)' : 'scale(1)',
                    boxShadow:
                      hoveredSkill?.url === skill.url ? '0 0 10px rgba(99, 102, 241, 0.24)' : 'none',
                    borderColor:
                      hoveredSkill?.url === skill.url
                        ? 'rgba(99, 102, 241, 0.5)'
                        : 'rgba(55, 65, 81, 0.5)',
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
                          ? hoveredSkill?.url === skill.url
                            ? 'bg-indigo-400 scale-125'
                            : 'bg-indigo-500'
                          : 'bg-gray-700'
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Skill Name Tooltip - positioned above this specific skill */}
                {hoveredSkill?.url === skill.url && (
                  <div
                    className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 bg-gray-800/95 backdrop-blur-lg rounded-xl p-4 border border-indigo-500/20 shadow-xl z-50 pointer-events-none whitespace-nowrap"
                    style={{
                      animation: 'fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-300">{skill.category}</p>
                    <div className="mt-2 flex items-center">
                      <div className="text-xs text-gray-400 mr-2">Proficiency:</div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              i < skill.proficiency ? 'bg-indigo-500 scale-110' : 'bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-400">
                        {getProficiencyLabel(skill.proficiency)}
                      </span>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800/95"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
