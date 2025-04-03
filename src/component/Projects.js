import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from './Modal';

const Projects = ({ projects }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (event, project) => {
    console.log('Project clicked:', project);
    event.preventDefault();
    event.stopPropagation();
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Browse through my portfolio to get a glimpse of my capabilities and see the impact
            I&apos;ve made on my client&apos;s businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 flex flex-col"
            >
              {/* Project Image Carousel */}
              <div className="h-48 overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    stopOnHover={true}
                    className="h-full"
                  >
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="h-48">
                        <img
                          src={process.env.PUBLIC_URL + image}
                          alt={`${project.name} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{project.name}</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span className="text-sm text-gray-400">{project.period}</span>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3">{project.description}</p>

                {/* Tech Stack - Updated to be similar to Skills component */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-indigo-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.stack &&
                      project.stack.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="group"
                          style={{
                            transition: 'all 0.3s ease',
                            animation: `float ${
                              2 + Math.random() * 2
                            }s ease-in-out infinite alternate`,
                          }}
                        >
                          {project.stackImages && project.stackImages[tech] ? (
                            <img
                              src={project.stackImages[tech]}
                              alt={tech}
                              title={tech}
                              className="h-8 w-auto object-contain transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                            />
                          ) : (
                            <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:shadow-lg group-hover:shadow-indigo-500/20">
                              {tech}
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={e => handleProjectClick(e, project)}
                  className="relative z-20 w-full py-2 mt-auto rounded-lg bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  type="button"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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
                </button>
              </div>

              {/* Hover Overlay - Modified to not capture clicks */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal - Always render the Modal but control visibility with the status prop */}
      <Modal
        status={openModal}
        setStatus={handleCloseModal}
        article={selectedProject ? selectedProject.article : null}
      />

      {/* Add keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
