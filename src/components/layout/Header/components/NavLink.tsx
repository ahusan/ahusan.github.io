import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../../../hooks/useActiveSection';

interface NavLinkProps {
  to: string;
  section: Section;
  activeSection: Section;
  isMobile?: boolean;
  children?: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  section,
  activeSection,
  isMobile = false,
  children,
}) => {
  if (isMobile) {
    return (
      <Link
        to={to}
        className={`block w-full text-left px-3 py-2 hover:bg-gray-700 hover:text-white capitalize transition-colors duration-300 cursor-pointer ${
          activeSection === section
            ? 'bg-gray-700 text-white font-medium border-l-2 border-indigo-500'
            : 'text-gray-300'
        }`}
      >
        {children || section}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`text-gray-300 hover:text-white capitalize transition-colors duration-300 cursor-pointer relative ${
        activeSection === section ? 'text-white font-medium' : ''
      }`}
    >
      {children || section}
      {activeSection === section && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></span>
      )}
    </Link>
  );
};

export default NavLink;
