import React from 'react';
import NavLink from './NavLink';
import { Section } from '../../../../hooks/useActiveSection';

interface MobileNavProps {
  activeSection: Section;
  isOpen: boolean;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeSection, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-800 shadow-xl">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLink to="/#about" section="about" activeSection={activeSection} isMobile />
        <NavLink to="/#skills" section="skills" activeSection={activeSection} isMobile />
        <NavLink to="/projects" section="projects" activeSection={activeSection} isMobile />
        <NavLink to="/#experience" section="experience" activeSection={activeSection} isMobile />
        <NavLink to="/#education" section="education" activeSection={activeSection} isMobile />
        <NavLink
          to="/#certifications"
          section="certifications"
          activeSection={activeSection}
          isMobile
        />
        <NavLink to="/blog" section="blog" activeSection={activeSection} isMobile>
          Blog
        </NavLink>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-left px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300 cursor-pointer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
