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
    name: 'Maldives.com Website',
    period: 'March 2023 to Present',
    article: 8,
    images: ['/maldives1.png', '/maldives2.png', '/maldives3.png'],
    description:
      'Led development efforts to enhance and optimize the Maldives.com tourism platform, implementing modern web technologies to improve performance, user experience, and content management capabilities.',
    icon: GlobeAltIcon,
    stack: ['Next.js', 'Strapi', 'Tailwind CSS', 'GraphQL', 'Docker', 'CI/CD', 'AWS', 'Git'],
    stackImages: {
      'Next.js': 'https://shields.io/badge/-next.js-111827?style=for-the-badge&logo=next.js',
      Strapi: 'https://shields.io/badge/-strapi-111827?style=for-the-badge&logo=strapi',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind-111827?style=for-the-badge&logo=tailwindcss',
      GraphQL:
        'https://shields.io/badge/-graphql-111827?style=for-the-badge&logo=graphql&logoColor=E10098',
      Docker: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      'CI/CD': 'https://shields.io/badge/-ci/cd-111827?style=for-the-badge&logo=github-actions',
      AWS: 'https://shields.io/badge/-aws-111827?style=for-the-badge&logo=amazonaws',
      Git: 'https://shields.io/badge/-git-111827?style=for-the-badge&logo=git',
    },
  },
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
    ],
    stackImages: {
      Figma: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      React: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'ASP .NET Framework':
        'https://shields.io/badge/-asp.net-111827?style=for-the-badge&logo=dotnet',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      MySQL: 'https://shields.io/badge/-mysql-111827?style=for-the-badge&logo=mysql',
      Docker: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      Portainer: 'https://shields.io/badge/-portainer-111827?style=for-the-badge&logo=portainer',
      Azure: 'https://shields.io/badge/-azure-111827?style=for-the-badge&logo=microsoftazure',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
      Nginx: 'https://shields.io/badge/-nginx-111827?style=for-the-badge&logo=nginx',
      'Docker Compose':
        'https://shields.io/badge/-docker%20compose-111827?style=for-the-badge&logo=docker',
    },
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
    stackImages: {
      Figma: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      React: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      Firebase: 'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
    },
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
    stackImages: {
      Figma: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      React: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'Fast API': 'https://shields.io/badge/-fastapi-111827?style=for-the-badge&logo=fastapi',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      Postgres: 'https://shields.io/badge/-postgres-111827?style=for-the-badge&logo=postgresql',
      JWT: 'https://shields.io/badge/-jwt-111827?style=for-the-badge&logo=jsonwebtokens',
      Python:
        'https://img.shields.io/badge/python-111827?style=for-the-badge&logo=python&logoColor=ffdd54',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
    },
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
    stackImages: {
      Figma: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      React: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'Next JS': 'https://shields.io/badge/-Next-111827?style=for-the-badge&logo=next.js',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      Firebase: 'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
    },
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
    stackImages: {
      Figma: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      React: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'Next JS': 'https://shields.io/badge/-Next-111827?style=for-the-badge&logo=next.js',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      Firebase: 'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
      Vercel: 'https://shields.io/badge/-vercel-111827?style=for-the-badge&logo=vercel',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
    },
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
    stackImages: {
      'Google Workspace':
        'https://shields.io/badge/-google%20workspace-111827?style=for-the-badge&logo=google',
      'Google Mail': 'https://shields.io/badge/-gmail-111827?style=for-the-badge&logo=gmail',
      'Google Drive':
        'https://shields.io/badge/-google%20drive-111827?style=for-the-badge&logo=googledrive',
      'Server Management':
        'https://shields.io/badge/-server-111827?style=for-the-badge&logo=server',
    },
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
      'Network Security',
      'Network Monitoring',
    ],
    stackImages: {
      Ubiquity: 'https://shields.io/badge/-ubiquiti-111827?style=for-the-badge&logo=ubiquiti',
      UniFi: 'https://shields.io/badge/-unifi-111827?style=for-the-badge&logo=ubiquiti',
      'Core Network': 'https://shields.io/badge/-network-111827?style=for-the-badge&logo=cisco',
      'Full Office Wifi': 'https://shields.io/badge/-wifi-111827?style=for-the-badge&logo=wifi',
      'WAN Setup': 'https://shields.io/badge/-wan-111827?style=for-the-badge&logo=network',
      'Network Attached Stoprage (NAS)':
        'https://shields.io/badge/-nas-111827?style=for-the-badge&logo=synology',
      'Server Management':
        'https://shields.io/badge/-server-111827?style=for-the-badge&logo=server',
      'Technical Support':
        'https://shields.io/badge/-support-111827?style=for-the-badge&logo=livechat',
      'Network Security':
        'https://shields.io/badge/-security-111827?style=for-the-badge&logo=security',
      'Network Monitoring':
        'https://shields.io/badge/-monitoring-111827?style=for-the-badge&logo=grafana',
    },
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
      'Next JS',
      'Azure',
    ],
    stackImages: {
      'Remix JS': 'https://shields.io/badge/-remix-111827?style=for-the-badge&logo=remix',
      'React JS': 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      Vercel: 'https://shields.io/badge/-vercel-111827?style=for-the-badge&logo=vercel',
      'Tailwind CSS':
        'https://shields.io/badge/-tailwind%20css-111827?style=for-the-badge&logo=tailwind-css',
      'Mantine UI':
        'https://shields.io/badge/-mantine%20ui-111827?style=for-the-badge&logo=mantine',
      'REST API': 'https://shields.io/badge/-rest%20api-111827?style=for-the-badge&logo=api',
      Github: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
      'Prisma ORM': 'https://shields.io/badge/-prisma-111827?style=for-the-badge&logo=prisma',
      'Amazon OCR': 'https://shields.io/badge/-amazon%20ocr-111827?style=for-the-badge&logo=amazon',
      Docker: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      'Postgres SQL':
        'https://shields.io/badge/-postgres-111827?style=for-the-badge&logo=postgresql',
      'Next JS': 'https://shields.io/badge/-next%20js-111827?style=for-the-badge&logo=next.js',
      Azure: 'https://shields.io/badge/-azure-111827?style=for-the-badge&logo=azure',
    },
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
    stackImages: {
      DevOps: 'https://shields.io/badge/-devops-111827?style=for-the-badge&logo=devops',
      Laravel: 'https://shields.io/badge/-laravel-111827?style=for-the-badge&logo=laravel',
      'Vue JS': 'https://shields.io/badge/-vue-111827?style=for-the-badge&logo=vue.js',
      PHP: 'https://shields.io/badge/-php-111827?style=for-the-badge&logo=php',
      Javascript: 'https://shields.io/badge/-javascript-111827?style=for-the-badge&logo=javascript',
      'Bit Bucket': 'https://shields.io/badge/-bitbucket-111827?style=for-the-badge&logo=bitbucket',
      'Digital Ocean':
        'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
      Azure: 'https://shields.io/badge/-azure-111827?style=for-the-badge&logo=microsoftazure',
      Docker: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      Portainer: 'https://shields.io/badge/-portainer-111827?style=for-the-badge&logo=portainer',
      'Technical Support':
        'https://shields.io/badge/-support-111827?style=for-the-badge&logo=livechat',
      'Server Management':
        'https://shields.io/badge/-server-111827?style=for-the-badge&logo=server',
      'Bug Fixing':
        'https://shields.io/badge/-bug%20fixing-111827?style=for-the-badge&logo=bugsnag',
      'MS SQL Server':
        'https://shields.io/badge/-sql%20server-111827?style=for-the-badge&logo=microsoftsqlserver',
    },
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
    stackImages: {
      Networking: 'https://shields.io/badge/-networking-111827?style=for-the-badge&logo=cisco',
      'DB Admin': 'https://shields.io/badge/-database-111827?style=for-the-badge&logo=database',
      'Google Cloud':
        'https://shields.io/badge/-google%20cloud-111827?style=for-the-badge&logo=googlecloud',
      PHP: 'https://shields.io/badge/-php-111827?style=for-the-badge&logo=php',
      Javascript: 'https://shields.io/badge/-javascript-111827?style=for-the-badge&logo=javascript',
      'Github Pages':
        'https://shields.io/badge/-github%20pages-111827?style=for-the-badge&logo=github',
      'Digital Ocean':
        'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
      AWS: 'https://shields.io/badge/-aws-111827?style=for-the-badge&logo=amazonaws',
      'Technical Support':
        'https://shields.io/badge/-support-111827?style=for-the-badge&logo=livechat',
      'Server Management':
        'https://shields.io/badge/-server-111827?style=for-the-badge&logo=server',
    },
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
    stackImages: {
      Networking: 'https://shields.io/badge/-networking-111827?style=for-the-badge&logo=cisco',
      'DB Admin': 'https://shields.io/badge/-database-111827?style=for-the-badge&logo=database',
      'Technical Support':
        'https://shields.io/badge/-support-111827?style=for-the-badge&logo=livechat',
      'Server Management':
        'https://shields.io/badge/-server-111827?style=for-the-badge&logo=server',
    },
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
      {
        url: 'https://shields.io/badge/-javascript-111827?style=for-the-badge&logo=javascript',
        proficiency: 5,
      },
      {
        url: 'https://img.shields.io/badge/python-111827?style=for-the-badge&logo=python&logoColor=ffdd54',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-typescript-111827?style=for-the-badge&logo=typescript',
        proficiency: 4,
      },
      { url: 'https://shields.io/badge/-php-111827?style=for-the-badge&logo=php', proficiency: 3 },
      { url: 'https://shields.io/badge/-Csharp-111827?style=for-the-badge&logo=c', proficiency: 2 },
    ],
  },
  {
    name: 'Frameworks & Runtime',
    subskills: [
      {
        url: 'https://shields.io/badge/-express.js-111827?style=for-the-badge&logo=express',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-laravel-111827?style=for-the-badge&logo=laravel',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-Next-111827?style=for-the-badge&logo=next.js',
        proficiency: 5,
      },
      {
        url: 'https://img.shields.io/badge/node.js-111827?style=for-the-badge&logo=node.js&logoColor=white',
        proficiency: 4,
      },
      { url: 'https://shields.io/badge/-npm-111827?style=for-the-badge&logo=npm', proficiency: 5 },
      {
        url: 'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-react%20native-111827?style=for-the-badge&logo=react',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-vue-111827?style=for-the-badge&logo=vue.js',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-remix-111827?style=for-the-badge&logo=remix',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-fastapi-111827?style=for-the-badge&logo=fastapi',
        proficiency: 3,
      },
    ],
  },
  {
    name: 'Frontend Technologies',
    subskills: [
      {
        url: 'https://shields.io/badge/-html-111827?style=for-the-badge&logo=html5',
        proficiency: 5,
      },
      { url: 'https://shields.io/badge/-css-111827?style=for-the-badge&logo=css3', proficiency: 5 },
      {
        url: 'https://shields.io/badge/-sass-111827?style=for-the-badge&logo=sass',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-bootstrap-111827?style=for-the-badge&logo=bootstrap',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-tailwind css-111827?style=for-the-badge&logo=tailwind-css',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-mantine ui-111827?style=for-the-badge&logo=mantine',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-wordpress-111827?style=for-the-badge&logo=wordpress',
        proficiency: 3,
      },
    ],
  },
  {
    name: 'Databases & Data',
    subskills: [
      {
        url: 'https://shields.io/badge/-mysql-111827?style=for-the-badge&logo=mysql',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-postgres-111827?style=for-the-badge&logo=postgresql',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-sqlite-111827?style=for-the-badge&logo=sqlite',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-Microsoft%20SQL%20Sever-111827?style=for-the-badge&logo=microsoft%20sql%20server',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-prisma-111827?style=for-the-badge&logo=prisma',
        proficiency: 4,
      },
    ],
  },
  {
    name: 'DevOps & Cloud',
    subskills: [
      {
        url: 'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-Azure-111827?style=for-the-badge&logo=microsoftazure',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-AWS-111827?style=for-the-badge&logo=amazon',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-Google%20Cloud-111827?style=for-the-badge&logo=google-cloud',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-nginx-111827?style=for-the-badge&logo=nginx',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-portainer-111827?style=for-the-badge&logo=portainer',
        proficiency: 3,
      },
    ],
  },
  {
    name: 'Development Tools',
    subskills: [
      { url: 'https://shields.io/badge/-git-111827?style=for-the-badge&logo=git', proficiency: 5 },
      {
        url: 'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-github%20pages-111827?style=for-the-badge&logo=github',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-bitbucket-111827?style=for-the-badge&logo=bitbucket',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-postman-111827?style=for-the-badge&logo=postman',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-jwt-111827?style=for-the-badge&logo=json-web-tokens',
        proficiency: 3,
      },
    ],
  },
  {
    name: 'Operating Systems',
    subskills: [
      {
        url: 'https://shields.io/badge/-ubuntu-111827?style=for-the-badge&logo=ubuntu',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-debian-111827?style=for-the-badge&logo=debian',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-manjaro-111827?style=for-the-badge&logo=manjaro',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-fedora-111827?style=for-the-badge&logo=fedora',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-windows-111827?style=for-the-badge&logo=windows',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-linux-111827?style=for-the-badge&logo=linux',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-macos-111827?style=for-the-badge&logo=macos',
        proficiency: 3,
      },
    ],
  },
  {
    name: 'Technical Skills',
    subskills: [
      {
        url: 'https://shields.io/badge/-Team%20Management-111827?style=for-the-badge',
        proficiency: 4,
      },
      { url: 'https://shields.io/badge/-Networking-111827?style=for-the-badge', proficiency: 4 },
      {
        url: 'https://shields.io/badge/-Active%20Directory%20Management-111827?style=for-the-badge&logo=microsoft',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-DB%20administration-111827?style=for-the-badge&logo=mysql&logoColor=white',
        proficiency: 4,
      },
      {
        url: 'https://shields.io/badge/-devops-111827?style=for-the-badge&logo=devops',
        proficiency: 3,
      },
      {
        url: 'https://shields.io/badge/-Troubleshooting-111827?style=for-the-badge&logo=devops',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-Technical%20Support-111827?style=for-the-badge&logo=devops',
        proficiency: 5,
      },
      {
        url: 'https://shields.io/badge/-Server%20Management-111827?style=for-the-badge&logo=linux',
        proficiency: 4,
      },
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
