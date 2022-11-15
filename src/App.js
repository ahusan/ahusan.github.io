import './App.css';
import { AcademicCapIcon, LifebuoyIcon, CalendarIcon, GlobeAltIcon, ComputerDesktopIcon, WalletIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const supportLinks = [
  {
    name: 'FSM Website',
    period: 'July 2021 to Dec 2021',
    href: 'https://fsm.mv/',
    description:
      'I have worked on to bring a huge change to the fsm website as a developer to bring their vision in a new rebrand of the company.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Travgo Maldives Platform',
    period: 'Oct 2020 to Feb 2021',
    href: 'https://travgomaldives.com/',
    description:
      'Development of their online platform custom catered to Travgo Maldives. To increase their presence online and to showcase different styles of vacation availabe in the maldives.',
    icon: CalendarIcon,
  },
  {
    name: 'Information Systems Engineer',
    period: 'June 2020 to Now',
    href: 'https://bankofmaldives.com.mv/',
    description:
      'Currently working in Bank of maldives. Learning the best tools to utilize in this business.',
    icon: WalletIcon,
  },
  {
    name: 'Information Technology Technician',
    period: 'Aug 2017 to June 2020',
    href: 'https://wamco.com.mv/',
    description:
      'Worked as a technical engineer to support to Information Technology Team at Waste Management Corporation (WAMCO). ',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Information Technology Support',
    period: 'Feb 2016 to Aug 2017',
    href: 'https://villacollege.edu.mv/',
    description:
      'Provided services to our company staff and clients regarding Information Technology uses and implementing policies for IT systems. At Villa College',
    icon: ComputerDesktopIcon,
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
    subskills: ['Python', 'GO', 'Java', 'Javascript', 'PHP', 'HTML', 'CSS', 'SQL', 'C++'],
    description: 'Programming languages that i am proficient in.',
    clientUrl: 'https://mnu.edu.mv/',
  },
  {
    name: 'Frameworks',
    subskills: ['React JS', 'Vue JS', 'Express JS', 'Laravel', 'Tailwind CSS', 'ASP .NET', 'Fast API'],
    description: 'Development frameworks that i have worked with on different projects. ',
    clientUrl: 'https://mnu.edu.mv/',
  },
  {
    name: 'Technical',
    subskills: ['Team Management', 'Networking', 'Active Directory Management', 'Database Administration', 'DevOps', 'Development', 'Troubleshooting', 'Technical Support', 'Server Management'],
    description: 'Different experiences and technical skills i have acquired. ',
    clientUrl: 'https://mnu.edu.mv/',
  }
]


const people = [


  {
    name: 'Ahusan Mohamed',
    role: 'Information Systems Engineer',
    imageUrl: '/MyPortrait.png',
    githubUrl: 'https://github.com/ahusan',
    linkedinUrl: 'https://www.linkedin.com/in/ahusan/',
  }
]


function App() {

  return (
    <>

      <div className='flex flex-row items-center justify-center w-screen'>
        <div className="bg-white">
          <div className="mx-auto lg:max-w-screen-2xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
            <div>
              <ul>
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2 sm:mb-10 sm:mt-10">
                        <img className="rounded-lg shadow-md" src={process.env.PUBLIC_URL + person.imageUrl} alt="" />
                      </div>

                      <div className="space-y-2  shadow-md rounded-md p-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <h5 className='text-gray-600'>+960 9855168</h5>
                          <h5 className='text-gray-600'>ahusan5657@gmail.com</h5>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <ul className="flex space-x-5">
                          <li>
                            <a href={person.githubUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">GitHub</span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 w-full lg:col-span-2 lg:mt-0  shadow-md rounded-md p-2">
              <h1 className='text-3xl my-4 mx-auto'>My Portfolio</h1>
              <div className='w-full'>
                <h2 className='my-4 text-black text-2xl'>About me..</h2>
                <p className="text-gray-500">I have been working in technology industry since 2015. My key feature is adaptability in this ever changing industry. I have aquired different experiences. Met different people working in this country. Explored the tech culture in Maldives. </p>
              </div>
              <div className='w-full mt-10'>
                <h2 className='my-4 text-black text-2xl'>Educational Qualifications</h2>
                <dl className="space-y-10 sm:grid sm:grid-flow-row  sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <a href={feature.clientUrl} className="text-gray-400 hover:text-gray-500">
                          <AcademicCapIcon className="absolute h-6 w-6 text-blue-800" aria-hidden="true" />
                        </a>
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                        <p className='ml-9 text-md font-light leading-6'>( {feature.period} )</p>
                      </dt>
                      <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className='w-full lg:col-span-2 lg:mt-0'>
                <h2 className='my-4 text-black text-2xl'>Skills</h2>
                <dl className="space-y-10 sm:grid sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">

                  {skills.map((skills) => (
                    <div key={skills.name} className="relative">
                      <dt>
                        <a href={skills.clientUrl} className="text-gray-400 hover:text-gray-500">
                          <CommandLineIcon className="absolute h-6 w-6 text-blue-800" aria-hidden="true" />
                        </a>
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{skills.name}</p>
                      </dt>
                      <dd className="mt-2 ml-9 text-base text-gray-500">{skills.description}</dd>

                      {skills.subskills.map(element => (
                        <dd className='mt-2 ml-9 text-base text-gray-500'>
                          <li>
                            {element}
                          </li>
                        </dd>
                      ))}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Header */}
        <div className="relative bg-gray-800 pb-96">
          <div className="absolute inset-0">
            <img
              className="h-max w-full object-cover"
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Work Experience</h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              I have worked with multiple big corporations in the country to aquire the skills required to perform in my chosen field. I am mentioning my most recent experiences below.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-96 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                  <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                  <p className='text-lg font-medium text-gray-600'>( {link.period} )</p>
                  <p className="mt-4 text-base text-gray-500">{link.description}</p>
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                  {link.href === '' ?
                    ''
                    :
                    <a href={link.href} className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                      Link here<span aria-hidden="true"> &rarr;</span>
                    </a>
                  }

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
