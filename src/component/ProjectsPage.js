import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
// Icons are not used in this component as project icons are commented out

const ProjectCardImage = ({ imageSrc, projectName }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!imageSrc || hasError) {
    return (
      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
        <span className="text-white text-xl font-bold text-center px-4">{projectName}</span>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
      )}
      <img
        src={imageSrc}
        alt={`${projectName} thumbnail`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <div className="pt-16 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects Portfolio</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Production systems I&apos;ve architected and delivered—from reservation platforms
            handling thousands of daily bookings to enterprise workflow automation. Each project
            demonstrates technical depth, architectural decisions, and measurable business impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Link
              key={project.id || project.name}
              to={`/project/${project.id || project.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <ProjectCardImage
                  imageSrc={
                    project.images && project.images.length > 0
                      ? process.env.PUBLIC_URL + project.images[0]
                      : null
                  }
                  projectName={project.name}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {/* Project Icon */}
                    {/* {project.icon && (
                      <project.icon className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                    )} */}
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

                {/* Tech Stack with Images */}
                <div className="mt-auto">
                  <h4 className="text-xs font-medium text-indigo-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {(project.stack || project.technologies) &&
                      (project.stack || project.technologies).slice(0, 4).map((tech, index) => (
                        <div key={index} className="group">
                          {project.stackImages && project.stackImages[tech] ? (
                            <img
                              src={project.stackImages[tech]}
                              alt={tech}
                              title={tech}
                              className="h-7 w-auto object-contain transform transition-all duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <span className="px-2 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              {tech}
                            </span>
                          )}
                        </div>
                      ))}
                    {(project.stack || project.technologies) &&
                      (project.stack || project.technologies).length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-700/50 text-gray-400">
                        +{(project.stack || project.technologies).length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Details Indicator */}
              <div className="bg-gray-700/30 px-6 py-3 flex justify-between items-center">
                <span className="text-indigo-400 text-sm font-medium">View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400 transform transition-transform duration-300 group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
