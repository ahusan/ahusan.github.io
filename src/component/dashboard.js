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
import Header from './Header';
import Hero from './Hero';
import Layout from './Layout';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

const supportLinks = [
  {
    name: 'FSM Website',
    period: 'July 2021 to Dec 2021',
    article: 1,
    images: ['/fsm-front.png', '/fsm-cms.png'],
    description:
      'As a developer, I was instrumental in driving the transformation of the FSM website during a recent company rebrand.',
    icon: GlobeAltIcon,
    stack: [
      'Figma',
      'React',
      'ASP .NET Framework',
      'Tailwind CSS',
      'MySQL',
      'Docker',
      'Portainer',
      'Azure',
      'Github',
      'Nginx',
      'Docker Compose',
      'Portainer',
    ],
  },
  {
    name: 'Travgo Maldives Platform',
    period: 'Oct 2020 to Feb 2021',
    article: 2,
    images: ['/travgo-front.png', '/travgo-pms.png'],
    description:
      'I was responsible for developing a custom online platform specifically tailored to meet the needs of Travgo Maldives, with the objective of boosting their online presence and showcasing the various styles of vacations available in the Maldives.',
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Firebase', 'Tailwind CSS', 'Github'],
  },
  {
    name: 'Ecommerce Platform',
    period: 'July 2021 to Jan 2022',
    article: 3,
    images: ['/ecom-front.png', '/ecom-cms.png', '/ecom-cms2.png'],
    description:
      'The use of an ecommerce delivery platform is to provide an online platform for businesses to sell their products and manage their deliveries efficiently. This platform can be used by customers to browse products, place orders, make payments, and track their deliveries.',
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Fast API', 'Tailwind CSS', 'Postgres', 'JWT', 'Python', 'Github'],
  },
  {
    name: 'Matcon Website',
    period: 'Mar 2023 to Oct 2023',
    article: 4,
    images: ['/matcon-front.png', '/matcon-front2.png'],
    description:
      "The website was developed using a specific technology stack tailored to the client's requirements and included modern web technologies such as React JS, Node.js, and Firebase.",
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Github'],
  },
  {
    name: 'Bespoke Maldives Website',
    period: 'July 2023 to Nov 2023',
    article: 7,
    images: ['/bespoke-1.png', '/bespoke-2.png', '/bespoke-3.png'],
    description:
      "The website was developed using a specific technology stack tailored to the client's requirements and included modern web technologies such as React JS, Node.js, Vercel and Firebase.",
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Vercel', 'Github'],
  },
  {
    name: 'Matcon Mail Migration',
    period: 'Oct 2023 to Oct 2023',
    article: 5,
    images: ['/matcon-home.webp'],
    description:
      "The mail migration was done using a specific technology stack tailored to the client's requirements and including Google Workspace, Google Mail, and Google Drive.",
    icon: CalendarIcon,
    stack: ['Google Workspace', 'Google Mail', 'Google Drive', 'Server Management'],
  },
  {
    name: 'Maldives Consulting Group Networking',
    period: 'Aug 2023 to Sep 2023',
    article: 6,
    images: ['/mcg-1.jpg'],
    description:
      'The project included of setting up and improving their current technologies and network infrastructure.',
    icon: CalendarIcon,
    stack: [
      'Ubiquity',
      'UniFi',
      'Core Network',
      'Full Office Wifi',
      'WAN Setup',
      'Network Attached Stoprage (NAS)',
      'Server Management',
      'Technical Support',
      'Network Management',
      'Network Security',
      'Network Monitoring',
    ],
  },
];

const workexperience = [
  {
    name: 'Software Developer',
    period: 'July 2023 to Now',
    href: 'https://sdfc.mv/',
    image: '/SDFC_Logo_B.png',
    description:
      'As a current employee of SME Finance Development Corporation, I am committed to staying up-to-date with the latest tools and technologies that can help optimize business operations and drive growth. ',
    icon: WalletIcon,
    stack: [
      'Remix JS',
      'React JS',
      'Vercel',
      'Tailwind CSS',
      'Mantine UI',
      'REST API',
      'Github',
      'Prisma ORM',
      'Amazon OCR',
      'Docker',
      'Postgres SQL',
    ],
  },
  {
    name: 'Information Systems Engineer',
    period: 'June 2020 to July 2023',
    href: 'https://bankofmaldives.com.mv/',
    image: '/bml-logo.jpg',
    description:
      "Bank of Maldives employee dedicated to leveraging technology for business growth. Post-employment, I'll pursue certifications and explore entrepreneurial opportunities for continued growth.",
    icon: WalletIcon,
    stack: [
      'DevOps',
      'Laravel',
      'Vue JS',
      'PHP',
      'Javascript',
      'Bit Bucket',
      'Digital Ocean',
      'Azure',
      'Docker',
      'Portainer',
      'Technical Support',
      'Server Management',
      'Bug Fixing',
      'MS SQL Server',
    ],
  },
  {
    name: 'Information Technology Technician',
    period: 'Aug 2017 to June 2020',
    href: 'https://wamco.com.mv/',
    image: '/wamco-logo.png',
    description:
      'In my previous role, I served as a technical engineer providing critical support to the Information Technology (IT) team at Waste Management Corporation (WAMCO).',
    icon: ComputerDesktopIcon,
    stack: [
      'Networking',
      'DB Admin',
      'Google Cloud',
      'PHP',
      'Javascript',
      'Github Pages',
      'Digital Ocean',
      'AWS',
      'Technical Support',
      'Server Management',
    ],
  },
  {
    name: 'Information Technology Support',
    period: 'Feb 2016 to Aug 2017',
    href: 'https://villacollege.edu.mv/',
    image: '/villa-logo.jpg',
    description:
      "During my tenure at Villa College, I provided comprehensive IT services to both staff and clients, leveraging my technical expertise and communication skills to ensure that all users were able to effectively utilize the college's IT systems.",
    icon: ComputerDesktopIcon,
    stack: ['Networking', 'DB Admin', 'Technical Support', 'Server Management'],
  },
];

const features = [
  {
    name: 'Degree in Computer Science',
    period: '2017 to 2020',
    description:
      'Graduated from Maldives National University with a Bachelors Degree in Computer Science. ',
    clientUrl: 'https://mnu.edu.mv/',
  },
  {
    name: 'Diploma in Information Technology',
    period: '2013 to 2015',
    description:
      'Graduated from Maldives National University with a Diploma in Information Technology. ',
    clientUrl: 'https://mnu.edu.mv/',
  },
];

const skills = [
  {
    name: 'Programming Languages',
    subskills: [
      'https://shields.io/badge/-javascript-111827?style=for-the-badge&logo=javascript',
      'https://img.shields.io/badge/python-111827?style=for-the-badge&logo=python&logoColor=ffdd54',
      'https://shields.io/badge/-typescript-111827?style=for-the-badge&logo=typescript',
      'https://shields.io/badge/-php-111827?style=for-the-badge&logo=php',
      'https://shields.io/badge/-Csharp-111827?style=for-the-badge&logo=c',
    ],
  },
  {
    name: 'Frameworks & Runtime',
    subskills: [
      'https://shields.io/badge/-express.js-111827?style=for-the-badge&logo=express',
      'https://shields.io/badge/-laravel-111827?style=for-the-badge&logo=laravel',
      'https://shields.io/badge/-Next-111827?style=for-the-badge&logo=next.js',
      'https://img.shields.io/badge/node.js-111827?style=for-the-badge&logo=node.js&logoColor=white',
      'https://shields.io/badge/-npm-111827?style=for-the-badge&logo=npm',
      'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'https://shields.io/badge/-react%20native-111827?style=for-the-badge&logo=react',
      'https://shields.io/badge/-vue-111827?style=for-the-badge&logo=vue.js',
      'https://shields.io/badge/-remix-111827?style=for-the-badge&logo=remix',
      'https://shields.io/badge/-fastapi-111827?style=for-the-badge&logo=fastapi',
    ],
  },
  {
    name: 'Frontend Technologies',
    subskills: [
      'https://shields.io/badge/-html-111827?style=for-the-badge&logo=html5',
      'https://shields.io/badge/-css-111827?style=for-the-badge&logo=css3',
      'https://shields.io/badge/-sass-111827?style=for-the-badge&logo=sass',
      'https://shields.io/badge/-bootstrap-111827?style=for-the-badge&logo=bootstrap',
      'https://shields.io/badge/-tailwind css-111827?style=for-the-badge&logo=tailwind-css',
      'https://shields.io/badge/-mantine ui-111827?style=for-the-badge&logo=mantine',
      'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      'https://shields.io/badge/-wordpress-111827?style=for-the-badge&logo=wordpress',
    ],
  },
  {
    name: 'Databases & Data',
    subskills: [
      'https://shields.io/badge/-mysql-111827?style=for-the-badge&logo=mysql',
      'https://shields.io/badge/-postgres-111827?style=for-the-badge&logo=postgresql',
      'https://shields.io/badge/-sqlite-111827?style=for-the-badge&logo=sqlite',
      'https://shields.io/badge/-Microsoft%20SQL%20Sever-111827?style=for-the-badge&logo=microsoft%20sql%20server',
      'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
      'https://shields.io/badge/-prisma-111827?style=for-the-badge&logo=prisma',
    ],
  },
  {
    name: 'DevOps & Cloud',
    subskills: [
      'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      'https://shields.io/badge/-Azure-111827?style=for-the-badge&logo=microsoftazure',
      'https://shields.io/badge/-AWS-111827?style=for-the-badge&logo=amazon',
      'https://shields.io/badge/-Google%20Cloud-111827?style=for-the-badge&logo=google-cloud',
      'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
      'https://shields.io/badge/-nginx-111827?style=for-the-badge&logo=nginx',
      'https://shields.io/badge/-portainer-111827?style=for-the-badge&logo=portainer',
    ],
  },
  {
    name: 'Development Tools',
    subskills: [
      'https://shields.io/badge/-git-111827?style=for-the-badge&logo=git',
      'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
      'https://shields.io/badge/-github%20pages-111827?style=for-the-badge&logo=github',
      'https://shields.io/badge/-bitbucket-111827?style=for-the-badge&logo=bitbucket',
      'https://shields.io/badge/-postman-111827?style=for-the-badge&logo=postman',
      'https://shields.io/badge/-jwt-111827?style=for-the-badge&logo=json-web-tokens',
    ],
  },
  {
    name: 'Operating Systems',
    subskills: [
      'https://shields.io/badge/-ubuntu-111827?style=for-the-badge&logo=ubuntu',
      'https://shields.io/badge/-debian-111827?style=for-the-badge&logo=debian',
      'https://shields.io/badge/-manjaro-111827?style=for-the-badge&logo=manjaro',
      'https://shields.io/badge/-fedora-111827?style=for-the-badge&logo=fedora',
      'https://shields.io/badge/-windows-111827?style=for-the-badge&logo=windows',
      'https://shields.io/badge/-linux-111827?style=for-the-badge&logo=linux',
      'https://shields.io/badge/-macos-111827?style=for-the-badge&logo=macos',
    ],
  },
  {
    name: 'Technical Skills',
    subskills: [
      'https://shields.io/badge/-Team%20Management-111827?style=for-the-badge',
      'https://shields.io/badge/-Networking-111827?style=for-the-badge',
      'https://shields.io/badge/-Active%20Directory%20Management-111827?style=for-the-badge&logo=microsoft',
      'https://shields.io/badge/-DB%20administration-111827?style=for-the-badge&logo=mysql&logoColor=white',
      'https://shields.io/badge/-devops-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Troubleshooting-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Technical%20Support-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Server%20Management-111827?style=for-the-badge&logo=linux',
    ],
  },
];

const people = [
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

function Dashboard() {
  return (
    <Layout>
      <Header />
      <Hero person={people[0]} />
      <Skills skills={skills} />
      <Projects projects={supportLinks} />
      <Experience workExperience={workexperience} />
      <Education education={features} />
      <Certifications />
    </Layout>
  );
}

export default Dashboard;
