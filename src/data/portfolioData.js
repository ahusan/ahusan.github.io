import portfolioData from './portfolio-data.json';

const SKILL_CATEGORY_LABELS = {
  programmingLanguages: 'Languages',
  frameworksAndRuntime: 'Frameworks',
  frontendTechnologies: 'Frontend',
  databasesAndData: 'Data',
  devopsAndCloud: 'Infrastructure and cloud',
  developmentTools: 'Tooling',
  operatingSystems: 'Operating systems',
  technicalSkills: 'Operations',
};

export const personal = portfolioData.personal;

export const projects = portfolioData.projects;

export const featuredProjects = projects
  .filter(p => p.featured)
  .sort((a, b) => a.featured - b.featured);

export const otherProjects = projects.filter(p => !p.featured);

export const experience = portfolioData.experience;

export const education = portfolioData.education;

export const skills = Object.entries(portfolioData.skills).map(([key, entries]) => ({
  name: SKILL_CATEGORY_LABELS[key] || key,
  items: (entries || []).map(skill => skill.name),
}));

export const certificates = portfolioData.certifications.certificates || [];

// "July 2021 to Dec 2021" -> "2021", "2024 to Present" -> "2024–now"
export function shortPeriod(period = '') {
  const years = period.match(/\d{4}/g) || [];
  const ongoing = /present/i.test(period);
  const [start, end] = [years[0], years[years.length - 1]];
  if (!start) return period;
  if (ongoing) return `${start}–now`;
  return start === end ? start : `${start}–${end}`;
}
