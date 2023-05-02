
import { AcademicCapIcon, LifebuoyIcon, CalendarIcon, GlobeAltIcon, ComputerDesktopIcon, WalletIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import Person from './person';
import Modal from './modal';
import { useState } from 'react';

const supportLinks = [
  {
    name: 'FSM Website',
    period: 'July 2021 to Dec 2021',
    article: 1,
    image: '/fsm-front.png',
    description:
      "As a developer, I was instrumental in driving the transformation of the FSM website during a recent company rebrand.",
    icon: GlobeAltIcon,
    stack: ['Figma', 'React', 'ASP .NET Framework', 'Tailwind CSS', 'MySQL', 'Docker', 'Portainer', 'Azure', 'Github', 'Nginx', 'Docker Compose', 'Portainer']
  },
  {
    name: 'Travgo Maldives Platform',
    period: 'Oct 2020 to Feb 2021',
    article: 2,
    image: '/travgo-front.png',
    description:
      "I was responsible for developing a custom online platform specifically tailored to meet the needs of Travgo Maldives, with the objective of boosting their online presence and showcasing the various styles of vacations available in the Maldives.",
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Firebase', 'Tailwind CSS','Github']
  },
  {
    name: 'Ecommerce Platform',
    period: 'July 2021 to Jan 2022',
    article: 3,
    image: '/ecom-front.png',
    description:
      "The use of an ecommerce delivery platform is to provide an online platform for businesses to sell their products and manage their deliveries efficiently. This platform can be used by customers to browse products, place orders, make payments, and track their deliveries.",
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Fast API', 'Tailwind CSS', 'Postgres', 'JWT', 'Python','Github']
  },
  {
    name: 'Matcon Website',
    period: 'Mar 2023 to Ongoing',
    article: 4,
    image: '/matcon-front.png',
    description:
      "The website was developed using a specific technology stack tailored to the client's requirements and included modern web technologies such as React JS, Node.js, and Firebase.",
    icon: CalendarIcon,
    stack: ['Figma', 'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Github']
  },
]

const workexperience = [
  {
    name: 'Information Systems Engineer',
    period: 'June 2020 to Now',
    href: 'https://bankofmaldives.com.mv/',
    image: '/bml-logo.jpg',
    description: 'As a current employee of Bank of Maldives, I am committed to staying up-to-date with the latest tools and technologies that can help optimize business operations and drive growth. ',
    icon: WalletIcon,
    stack: 
    [
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
      'MS SQL Server'
    ]
  },
  {
    name: 'Information Technology Technician',
    period: 'Aug 2017 to June 2020',
    href: 'https://wamco.com.mv/',
    image: '/wamco-logo.png',
    description:
      "In my previous role, I served as a technical engineer providing critical support to the Information Technology (IT) team at Waste Management Corporation (WAMCO).",
    icon: ComputerDesktopIcon,
    stack: 
    [
      'Networking', 
      'DB Admin', 
      'Google Cloud', 
      'PHP', 
      'Javascript',
      'Github Pages',
      'Digital Ocean',
      'AWS',
      'Technical Support',
      'Server Management'
    ]
  },
  {
    name: 'Information Technology Support',
    period: 'Feb 2016 to Aug 2017',
    href: 'https://villacollege.edu.mv/',
    image: '/villa-logo.jpg',
    description:
      "During my tenure at Villa College, I provided comprehensive IT services to both staff and clients, leveraging my technical expertise and communication skills to ensure that all users were able to effectively utilize the college's IT systems.",
    icon: ComputerDesktopIcon,
    stack: 
    [
      'Networking', 
      'DB Admin', 
      'Technical Support',
      'Server Management'
    ]
  },
]


const features = [
  {
    name: 'Degree in Computer Science',
    period: '2017 to 2020',
    description: 'Graduated from Maldives National University with a Bachelors Degree in Computer Science. ',
    clientUrl: 'https://mnu.edu.mv/',
  },
  {
    name: 'Diploma in Information Technology',
    period: '2013 to 2015',
    description: 'Graduated from Maldives National University with a Diploma in Information Technology. ',
    clientUrl: 'https://mnu.edu.mv/',
  }
]

const skills = [
  {
    name: 'Programming Languages',
    subskills: [
      'https://shields.io/badge/-javascript-111827?style=for-the-badge&logo=javascript',
      'https://img.shields.io/badge/python-111827?style=for-the-badge&logo=python&logoColor=ffdd54',
      'https://shields.io/badge/-php-111827?style=for-the-badge&logo=php',
      'https://shields.io/badge/-Csharp-111827?style=for-the-badge&logo=c',
    ],
  },
  {
    name: 'Frameworks',
    subskills: [
      'https://shields.io/badge/-express.js-111827?style=for-the-badge&logo=express',
      'https://shields.io/badge/-laravel-111827?style=for-the-badge&logo=laravel',
      'https://shields.io/badge/-Next-111827?style=for-the-badge&logo=next.js',
      'https://img.shields.io/badge/node.js-111827?style=for-the-badge&logo=node.js&logoColor=white',
      'https://shields.io/badge/-npm-111827?style=for-the-badge&logo=npm',
      'https://shields.io/badge/-react-111827?style=for-the-badge&logo=react',
      'https://shields.io/badge/-vue-111827?style=for-the-badge&logo=vue.js',
    ],
  },
  {
    name: 'Others',
    subskills: [
      'https://shields.io/badge/-docker-111827?style=for-the-badge&logo=docker',
      'https://shields.io/badge/-firebase-111827?style=for-the-badge&logo=firebase',
      'https://shields.io/badge/-github-111827?style=for-the-badge&logo=github',
      'https://shields.io/badge/-git-111827?style=for-the-badge&logo=git',
      'https://shields.io/badge/-bitbucket-111827?style=for-the-badge&logo=bitbucket',
      'https://shields.io/badge/-github%20pages-111827?style=for-the-badge&logo=github',
      'https://shields.io/badge/-Google%20Cloud-111827?style=for-the-badge&logo=google-cloud',
      'https://shields.io/badge/-figma-111827?style=for-the-badge&logo=figma',
      'https://shields.io/badge/-portainer-111827?style=for-the-badge&logo=portainer',
      'https://shields.io/badge/-Microsoft%20SQL%20Sever-111827?style=for-the-badge&logo=microsoft%20sql%20server',
      'https://shields.io/badge/-tailwind css-111827?style=for-the-badge&logo=tailwind-css',
      'https://shields.io/badge/-Azure-111827?style=for-the-badge&logo=microsoftazure',
      'https://shields.io/badge/-AWS-111827?style=for-the-badge&logo=amazon',
      'https://shields.io/badge/-digital%20ocean-111827?style=for-the-badge&logo=digitalocean',
    ]
  },
  {
    name: 'Technical',
    subskills: [
      'https://shields.io/badge/-Team%20Management-111827?style=for-the-badge',
      'https://shields.io/badge/-Networking-111827?style=for-the-badge',
      'https://shields.io/badge/-Active%20Directory%20Management-111827?style=for-the-badge&logo=microsoft',
      'https://shields.io/badge/-DB%20administration-111827?style=for-the-badge&logo=mysql&logoColor=white',
      'https://shields.io/badge/-devops-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Troubleshooting-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Technical%20Support-111827?style=for-the-badge&logo=devops',
      'https://shields.io/badge/-Server%20Management-111827?style=for-the-badge&logo=linux'
    ],
  }
]


const people = [
  {
    name: 'Ahusan Mohamed',
    work: '+9609855168',
    personal: '+9607955168',
    email: 'email@ahusan.dev',
    company: 'Bank of Maldives',
    role: 'Information Systems Engineer',
    imageUrl: '/MyPortrait.png',
    githubUrl: 'https://github.com/ahusan',
    linkedinUrl: 'https://www.linkedin.com/in/ahusan/',
  }
]




function Dashboard() {
  const [openModal, setOpenModal] = useState(false)
  const [article, setArticle] = useState(1)

  function handleClick(x) {
    setOpenModal(true);
    setArticle(x);
  }

  return (
    <>
      <div className='w-screen text-center bg-gray-900 py-10 pt-14 sm:pt-10 text-white'>
        <h1 className='text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl'>My Portfolio</h1>
      </div>
      <div className='flex flex-row items-center justify-center w-screen'>
        <div className="w-full bg-gray-900">
          <div className="mx-auto sm:max-w-screen-2xl max-w-2xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-12 lg:px-8">
            <div className='backdrop-brightness-125 drop-shadow-lg rounded-lg'>
              <Person people={people} />
            </div>
            <div className="mt-12 w-full lg:col-span-2 lg:mt-0  backdrop-brightness-125 drop-shadow-lg rounded-lg p-4 px-6">
              <div className='w-full'>
                <h2 className='my-4 text-white text-2xl'>Educational Qualifications</h2>
                <dl className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <a href={feature.clientUrl} className="text-gray-400 hover:text-gray-500">
                          <AcademicCapIcon className="absolute h-6 w-6 text-blue-800" aria-hidden="true" />
                        </a>
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-300">{feature.name}</p>
                        <p className='ml-9 text-md font-light leading-6 text-gray-500'>( {feature.period} )</p>
                      </dt>
                      <dd className="ml-9 text-base text-gray-400">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className='w-full lg:mt-0 py-4 pt-4'>
                <h2 className='my-4 text-white text-2xl'>Skills</h2>
                <div className="w-full">

                  {skills.map((skills) => (
                    <div key={skills.name} className='my-4'>
                      <div className='my-2'>
                        <CommandLineIcon className="absolute h-6 w-6 text-blue-500" aria-hidden="true" />
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-200">{skills.name}</p>
                      </div>
                      <div className='flex flex-row flex-wrap'>
                        {skills.subskills.map((element, index) => (
                          <div className='mt-1 ml-2 text-base text-gray-500' key={index}>
                            <img src={element} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className='my-4 text-white text-2xl'>Github Stats</h2>
                <div className='w-full flex flex-col sm:flex-row justify-center items-center my-6 space-y-4 sm:space-y-0 sm:space-x-4'>
                  <img src="https://readme.ahusan.dev/api?username=ahusan&amp;show_icons=true&theme=aura&include_all_commits=true&count_private=true" alt="GitHub Stats" height="200" width="450" />
                  <img src="https://readme.ahusan.dev/api/top-langs/?username=ahusan&layout=compact&theme=aura&langs_count=10" alt="GitHub Top Languages" height="250" width="345" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        {/* Header */}
        <div className=" pb-20">
          <div className="mx-auto max-w-2xl sm:max-w-screen-2xl px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Projects</h1>
            <p className="mt-6 max-w-full text-xl text-gray-300">
              Browse through my portfolio to get a glimpse of my capabilities and see the impact I've made on my client's businesses.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="z-10 mx-auto max-w-2xl sm:max-w-screen-2xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-800 drop-shadow-xl backdrop-brightness-125">
                <div className="flex-1 px-6 pt-16 pb-2 sm:pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-200">{link.name}</h3>
                  <p className='text-lg font-medium text-gray-500'>( {link.period} )</p>
                  {
                    link.image ?
                      <div className=" sm:mb-10 sm:mt-10 border-8 rounded-xl shadow-md border-indigo-900 overflow-hidden bg-indigo-900">
                        <img className="w-[400px] h-[250px] object-cover object-center rounded-lg" src={process.env.PUBLIC_URL + link.image} alt="" />
                      </div>
                      :
                      ''

                  }
                  <p className="mt-4 text-base text-gray-300">{link.description}</p>
                  <div className='w-full flex flex-row flex-wrap justify-start mt-3'>
                    {link.stack ?
                      link.stack.map((item, index) => (
                        <span key={index} className="inline-flex mt-1 ml-1 items-center rounded-md bg-fuchsia-500/10 px-2 py-1 text-xs font-medium text-fuchsia-400 ring-1 ring-inset ring-fuchsia-500/20">
                          {item}
                        </span>
                      ))
                      :
                      ''
                    }
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-bl-2xl rounded-br-2xl text-left p-6 md:px-8 text-indigo-500 hover:text-indigo-300"
                  onClick={() => handleClick(link.article)}
                >
                  Read More<span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-gray-900">
        {/* Header */}
        <div className="pb-10">
          <div className="mx-auto max-w-2xl sm:max-w-screen-2xl py-10 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Work Experience</h1>
            <p className="mt-6 max-w-full text-xl text-gray-300">
              Throughout my career, I have had the opportunity to work with several major corporations in the country, each providing unique challenges and opportunities for professional growth. These experiences have allowed me to hone the skills and expertise necessary to excel in my chosen field, as well as to develop a deep understanding of the industry landscape and its evolving trends.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="z-10 mx-auto max-w-2xl sm:max-w-screen-2xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
            {workexperience.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-800 drop-shadow-xl backdrop-brightness-125">
                <div className="flex-1 px-6 pt-16 pb-4 sm:pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-200">{link.name}</h3>
                  <p className='text-lg font-medium text-gray-500'>( {link.period} )</p>
                  {
                    link.image ?
                      <div className=" sm:mb-10 sm:mt-10 border-8 rounded-xl shadow-md border-indigo-900 overflow-hidden bg-indigo-900">
                        <img className="w-[400px] h-[250px] object-cover object-center rounded-lg" src={process.env.PUBLIC_URL + link.image} alt="" />
                      </div>
                      :
                      ''

                  }
                  <p className="mt-4 text-base text-gray-300">{link.description}</p>
                  <div className='w-full flex flex-row flex-wrap justify-start mt-3'>
                    {link.stack ?
                      link.stack.map((item, index) => (
                        <span key={index} className="inline-flex mt-1 ml-1 items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-400 ring-1 ring-inset ring-purple-500/20">
                          {item}
                        </span>
                      ))
                      :
                      ''
                    }
                  </div>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                  <a href={link.href} className="text-base font-medium text-indigo-500 hover:text-indigo-300">
                    Visit company website<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Modal status={openModal} setStatus={setOpenModal} article={article} />
    </>
  );
}

export default Dashboard;
