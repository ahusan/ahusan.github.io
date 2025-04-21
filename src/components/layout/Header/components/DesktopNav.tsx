import React from 'react';
import NavLink from './NavLink';
import { Section } from '../../../../hooks/useActiveSection';

interface DesktopNavProps {
  activeSection: Section;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ activeSection }) => {
  return (
    <nav className="hidden md:flex space-x-8">
      <NavLink to="/#about" section="about" activeSection={activeSection} />
      <NavLink to="/#skills" section="skills" activeSection={activeSection} />
      <NavLink to="/#experience" section="experience" activeSection={activeSection} />
      <NavLink to="/#education" section="education" activeSection={activeSection} />
      <NavLink to="/#certifications" section="certifications" activeSection={activeSection} />
      <NavLink to="/projects" section="projects" activeSection={activeSection} />
      <NavLink to="/blog" section="blog" activeSection={activeSection}>
        Blog
      </NavLink>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
      >
        Resume
      </a>
    </nav>
  );
};

export default DesktopNav;
