import portfolioData from './portfolio-data.json';

const SKILL_CATEGORY_LABELS = {
  programmingLanguages: 'Programming Languages',
  frameworksAndRuntime: 'Frameworks & Runtime',
  frontendTechnologies: 'Frontend Technologies',
  databasesAndData: 'Databases & Data',
  devopsAndCloud: 'DevOps & Cloud',
  developmentTools: 'Development Tools',
  operatingSystems: 'Operating Systems',
  technicalSkills: 'Technical Skills',
};

const PROJECT_ARTICLE_IDS = {
  'fsm-website': 1,
  'travgo-maldives-platform': 2,
  'ecommerce-platform': 3,
  'matcon-website': 4,
  'matcon-mail-migration': 5,
  'mcg-networking': 6,
  'bespoke-maldives-website': 7,
  'maldives-com-website': 8,
  'ssr-reservation-system': 9,
};

export const personal = portfolioData.personal;

export const projects = portfolioData.projects.map(project => ({
  ...project,
  article: PROJECT_ARTICLE_IDS[project.id] || null,
  stack: project.technologies || [],
}));

export const workExperience = portfolioData.experience.map(role => ({
  name: role.position,
  company: role.company,
  period: role.period,
  href: role.website,
  image: role.logo,
  description: role.description,
  stack: role.technologies || [],
}));

export const education = portfolioData.education.map(item => ({
  name: item.degree,
  period: item.period,
  description: item.description,
  clientUrl: item.website,
}));

export const skills = Object.entries(portfolioData.skills).map(([key, entries]) => ({
  name: SKILL_CATEGORY_LABELS[key] || key,
  subskills: (entries || []).map(skill => ({
    url: skill.icon,
    proficiency: skill.proficiency,
  })),
}));

export const certificates = portfolioData.certifications.certificates || [];
export const digitalBadges = portfolioData.certifications.digitalBadges || [];
export const githubStats = portfolioData.statistics.github || {};
