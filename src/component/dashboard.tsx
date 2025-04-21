import {
  CalendarIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Education from './Education';
import Experience from './Experience';
import Header from '../components/layout/Header';
import Hero from './Hero';
import Layout from '../components/layout/Layout';
import Skills from './Skills';
import Certifications from './Certifications';
import { Link } from 'react-router-dom';

interface StackImage {
  [key: string]: string;
}

interface ProjectLink {
  name: string;
  period: string;
  article: number;
  images: string[];
  description: string;
  icon: React.ElementType;
  stack: string[];
  stackImages: StackImage;
}

interface WorkExperience {
  name: string;
  period: string;
  href: string;
  image: string;
  description: string;
  icon: React.ElementType;
  stack: string[];
  stackImages: StackImage;
}

interface Education {
  name: string;
  period: string;
  description: string;
  clientUrl: string;
}

interface Subskill {
  url: string;
  proficiency: number;
}

interface Skill {
  name: string;
  subskills: Subskill[];
}

interface Person {
  name: string;
  personal: string;
  email: string;
  company: string;
  role: string;
  imageUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const supportLinks: ProjectLink[] = [
  {
    name: 'SSR Reservation System',
    period: 'September 2024 to March 2025',
    article: 9,
    images: ['/compass-1.png', '/compass-2.png'],
    description:
      'Developed a reservation system for Sun Siyam Resorts to enable staff and resellers to automatically check availability, manage bookings, and update pricing across their resort properties. Integrated with Opera PMS and Meili search for seamless operations.',
    icon: GlobeAltIcon,
    stack: [
      'Next.js',
      'Prisma',
      'Mantine UI',
      'Opera PMS',
      'Meili Search',
      'Digital Ocean',
      'Docker',
      'CI/CD',
    ],
    stackImages: {
      'Next.js': 'https://shields.io/badge/-next.js-111827?style=for-the-badge&logo=next.js',
      Prisma: 'https://shields.io/badge/-prisma-111827?style=for-the-badge&logo=prisma',
      'Mantine UI':
        'https://shields.io/badge/-mantine%20ui-111827?style=for-the-badge&logo=mantine',
      'Opera PMS': 'https://shields.io/badge/-opera%20pms-111827?style=for-the-badge&logo=oracle',
      'Meili Search':
        'https://shields.io/badge/-meili%20search-111827?style=for-the-badge&logo=algolia',
      'Digital Ocean':
        'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
      Docker: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      'CI/CD': 'https://shields.io/badge/-ci/cd-111827?style=for-the-badge&logo=github-actions',
    },
  },
  // ... existing code ...
];

const workexperience: WorkExperience[] = [
  // ... existing code ...
];

const features: Education[] = [
  // ... existing code ...
];

const skills: Skill[] = [
  // ... existing code ...
];

const people: Person[] = [
  {
    name: 'Ahusan Mohamed',
    personal: '+9609855168',
    email: 'email@ahusan.dev',
    company: 'Bank of Maldives',
    role: 'Information Systems Engineer',
    imageUrl: '/MyPortrait.png',
    githubUrl: 'https://github.com/ahusan',
    linkedinUrl: 'https://www.linkedin.com/in/ahusan/',
  },
];

function Dashboard(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <Hero person={people[0]} />
      <Skills skills={skills} />
      <Experience workExperience={workexperience} />
      <Education education={features} />
      <Certifications />
    </Layout>
  );
}

export default Dashboard;
