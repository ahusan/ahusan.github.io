import React from 'react';

const Experience = ({ workExperience }) => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Throughout my career, I have had the opportunity to work with several major
            corporations, each providing unique challenges and opportunities for professional
            growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-600/30 rounded-full"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div
                key={job.name}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:pr-12 md:text-right space-y-4">
                  <div
                    className={`${
                      index % 2 === 0 ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white">{job.name}</h3>
                    <p className="text-indigo-400">{job.period}</p>

                    <div className="mt-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-indigo-500/10">
                      {/* Company logo */}
                      <div className="flex justify-center mb-4">
                        <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                          <img
                            src={process.env.PUBLIC_URL + job.image}
                            alt={job.name}
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                      </div>

                      <p className="text-gray-300">{job.description}</p>

                      {/* Tech stack */}
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.stack &&
                            job.stack.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>

                      {/* Company website link */}
                      <div className="mt-6">
                        <a
                          href={job.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                        >
                          Visit company website
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
