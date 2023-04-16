import './App.css';
import { AcademicCapIcon, LifebuoyIcon, CalendarIcon, GlobeAltIcon, ComputerDesktopIcon, WalletIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import Person from './component/person';

const supportLinks = [
  {
    name: 'FSM Website',
    period: 'July 2021 to Dec 2021',
    href: 'https://fsm.mv/',
    description:
      "As a developer, I was instrumental in driving the transformation of the FSM website during a recent company rebrand. Working closely with the FSM team, I leveraged my technical expertise and creative problem-solving skills to bring their vision to life, resulting in a complete overhaul of the company's online presence. Through careful planning and meticulous attention to detail, I was able to deliver a modern, user-friendly website that accurately represented the company's new brand identity. My contributions to this project were essential in helping FSM achieve its business objectives and establish a strong online presence in its industry.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Travgo Maldives Platform',
    period: 'Oct 2020 to Feb 2021',
    href: 'https://travgomaldives.com/',
    description:
      "I was responsible for developing a custom online platform specifically tailored to meet the needs of Travgo Maldives, with the objective of boosting their online presence and showcasing the various styles of vacations available in the Maldives. Leveraging my technical expertise and in-depth knowledge of web development best practices, I worked closely with the Travgo Maldives team to understand their requirements and deliver a high-quality, user-friendly online platform that effectively highlighted their offerings. This project required extensive collaboration, attention to detail, and a strong commitment to meeting deadlines and exceeding expectations. The resulting platform was an essential component of Travgo Maldives' online marketing strategy, contributing significantly to their success in the highly competitive travel industry.",
    icon: CalendarIcon,
  },
  {
    name: 'Information Systems Engineer',
    period: 'June 2020 to Now',
    href: 'https://bankofmaldives.com.mv/',
    description: (
      <p>
        As a current employee of Bank of Maldives, I am committed to staying up-to-date with the latest tools and technologies that can help optimize business operations and drive growth. This involves a deep understanding of the banking industry and its unique requirements, as well as ongoing research and analysis of emerging trends and best practices.
        <br /><br />
        In my role, I have taken a proactive approach to learning and experimenting with various tools and software applications, always seeking out the most effective solutions to improve the bank's operations. I collaborate closely with colleagues across different departments and business functions to understand their needs and identify areas where technology can be leveraged to increase efficiency and productivity.
        <br /><br />
        Some of the tools that I have been exploring and utilizing in my work at Bank of Maldives include data analytics and visualization software, cloud-based infrastructure and services, cybersecurity solutions, and automation tools for streamlining repetitive processes. Through ongoing learning and experimentation, I am able to apply these tools in new and innovative ways to help drive the bank's continued success in an increasingly digital business landscape.
      </p>
    ),
    icon: WalletIcon,
  },
  {
    name: 'Information Technology Technician',
    period: 'Aug 2017 to June 2020',
    href: 'https://wamco.com.mv/',
    description:
      "In my previous role, I served as a technical engineer providing critical support to the Information Technology (IT) team at Waste Management Corporation (WAMCO). Drawing on my extensive technical knowledge and troubleshooting expertise, I worked collaboratively with the IT team to resolve complex issues related to hardware, software, and network infrastructure. Additionally, I played a key role in the development and implementation of new IT systems and processes, working closely with colleagues to identify opportunities for optimization and improvement. Through my efforts, I helped ensure that WAMCO's IT systems were fully operational and aligned with the company's overall business objectives, contributing to increased efficiency, productivity, and customer satisfaction.",
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Information Technology Support',
    period: 'Feb 2016 to Aug 2017',
    href: 'https://villacollege.edu.mv/',
    description:
      "During my tenure at Villa College, I provided comprehensive IT services to both staff and clients, leveraging my technical expertise and communication skills to ensure that all users were able to effectively utilize the college's IT systems. I also played a key role in developing and implementing IT policies and procedures, working closely with stakeholders across the organization to identify areas for improvement and ensure that best practices were followed. Through my efforts, I was able to help create a more streamlined and efficient IT infrastructure that supported the needs of both internal and external stakeholders, contributing to the overall success of the organization.",
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
    work: '+9609855168',
    personal: '+9607955168',
    email: 'ahusan5657@gmail.com',
    company: 'Bank of Maldives',
    role: 'Information Systems Engineer',
    imageUrl: '/MyPortrait.png',
    githubUrl: 'https://github.com/ahusan',
    linkedinUrl: 'https://www.linkedin.com/in/ahusan/',
  }
]

const aboutme = 'As a highly adaptable professional with a passion for the ever-changing technology industry, I have spent the last 6 years building a diverse skill set through various experiences and encounters with industry leaders. Through my work, I have had the opportunity to immerse myself in the unique tech culture of Maldives and connect with a wide range of individuals who share my passion for innovation. With each new challenge, I have been able to leverage my adaptability to quickly pivot and find effective solutions, all while staying ahead of the curve in this rapidly evolving industry.'
const qualities = 'As a developer, my best desirable qualities include my strong problem-solving skills, attention to detail, and adaptability. I understand the importance of effective communication and have developed strong interpersonal skills, allowing me to work effectively with team members, stakeholders, and clients. I approach each challenge with a creative mindset and am always willing to learn new technologies and programming languages. Most importantly, I take pride in my strong work ethic and am committed to delivering high-quality results on time, every time.'



function App() {

  return (
    <>
      <div className='w-screen text-center bg-white my-10'>
        <h1 className='text-4xl my-4'>My Portfolio</h1>
      </div>
      <div className='flex flex-row items-center justify-center w-screen'>
        <div className="w-full bg-white">
          <div className="mx-auto sm:max-w-screen-2xl max-w-2xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-12 lg:px-8">
            <div>
              <Person people={people} aboutme={aboutme} qualities={qualities} />
            </div>
            <div className="mt-12 w-full lg:col-span-2 lg:mt-0  shadow-md rounded-md p-4 px-6">
              <div className='w-full'>
                <h2 className='my-4 text-black text-2xl'>Educational Qualifications</h2>
                <dl className="space-y-4">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <a href={feature.clientUrl} className="text-gray-400 hover:text-gray-500">
                          <AcademicCapIcon className="absolute h-6 w-6 text-blue-800" aria-hidden="true" />
                        </a>
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                        <p className='ml-9 text-md font-light leading-6'>( {feature.period} )</p>
                      </dt>
                      <dd className="ml-9 text-base text-gray-500">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className='w-full lg:col-span-2 lg:mt-0 py-4 pt-8'>
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
                        <dd className='mt-0 ml-16 text-base text-gray-500'>
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
          {/* <div className="absolute inset-0">
            <img
              className="h-max w-full object-cover"
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
          </div> */}
          <div className="relative mx-auto max-w-2xl sm:max-w-screen-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Work Experience</h1>
            <p className="mt-6 max-w-full text-xl text-gray-300">
              Throughout my career, I have had the opportunity to work with several major corporations in the country, each providing unique challenges and opportunities for professional growth. These experiences have allowed me to hone the skills and expertise necessary to excel in my chosen field, as well as to develop a deep understanding of the industry landscape and its evolving trends.

              Most recently, I have been fortunate to work with a number of highly respected organizations, including Bank of Maldives, Waste Management Corporation, and Villa College. Through these engagements, I have had the opportunity to work alongside top talent in the field, gaining valuable insights into their strategies and approaches, and applying these lessons to my own work. Additionally, I have been able to leverage these experiences to develop and refine my skills in areas such as technical engineering, IT policy development, and IT support services, enabling me to take on increasingly complex and demanding projects.

              As I continue to progress in my career, I am committed to building on these experiences and to pursuing new opportunities for growth and development, both within the organizations I work with and through ongoing learning and exploration.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="relative z-10 mx-auto -mt-96 max-w-2xl sm:max-w-screen-2xl px-4 pb-32 sm:px-6 lg:px-8"
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
