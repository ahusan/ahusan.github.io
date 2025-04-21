import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type Section =
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'certifications'
  | 'projects'
  | 'blog'
  | '';

export const useActiveSection = (): Section => {
  const [activeSection, setActiveSection] = useState<Section>('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';
  const isBlogPage = location.pathname === '/blog';

  // Set active section based on current page
  useEffect(() => {
    if (isProjectsPage) {
      setActiveSection('projects');
    } else if (isBlogPage) {
      setActiveSection('blog');
    } else if (isHomePage) {
      setActiveSection('about'); // Default to about when first loading homepage
    } else {
      setActiveSection('');
    }
  }, [isProjectsPage, isBlogPage, isHomePage]);

  // Handle scroll detection for sections on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleSectionScroll = () => {
      const sections: Section[] = ['about', 'skills', 'experience', 'education', 'certifications'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const isInView = rect.top <= 150 && rect.bottom >= 150;

        if (isInView) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll);
    // Run once initially to set the correct active section
    handleSectionScroll();

    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, [isHomePage]);

  return activeSection;
};
