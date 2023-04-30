
import { AcademicCapIcon, LifebuoyIcon, CalendarIcon, GlobeAltIcon, ComputerDesktopIcon, WalletIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import Person from './person';

const supportLinks = [
  {
    name: 'FSM Website',
    period: 'July 2021 to Dec 2021',
    href: '/article/1',
    image: '/fsm-front.png',
    description:
      "As a developer, I was instrumental in driving the transformation of the FSM website during a recent company rebrand.",
    icon: GlobeAltIcon,
  },
  {
    name: 'Travgo Maldives Platform',
    period: 'Oct 2020 to Feb 2021',
    href: '/article/2',
    image: '/travgo-front.png',
    description:
      "I was responsible for developing a custom online platform specifically tailored to meet the needs of Travgo Maldives, with the objective of boosting their online presence and showcasing the various styles of vacations available in the Maldives.",
    icon: CalendarIcon,
  },
  {
    name: 'Ecommerce Platform',
    period: 'July 2021 to Jan 2022',
    href: '/article/3',
    image: '/ecom-front.png',
    description:
      "The use of an ecommerce delivery platform is to provide an online platform for businesses to sell their products and manage their deliveries efficiently. This platform can be used by customers to browse products, place orders, make payments, and track their deliveries.",
    icon: CalendarIcon,
  },
  {
    name: 'Matcon Website',
    period: 'Mar 2023 to Ongoing',
    href: '/article/4',
    image: '/matcon-front.png',
    description:
      "The website was developed using a specific technology stack tailored to the client's requirements and included modern web technologies such as React JS, Node.js, and Firebase.",
    icon: CalendarIcon,
  },
  {
    name: 'Information Systems Engineer',
    period: 'June 2020 to Now',
    href: 'https://bankofmaldives.com.mv/',
    image: '/bml-logo.jpg',
    description: 'As a current employee of Bank of Maldives, I am committed to staying up-to-date with the latest tools and technologies that can help optimize business operations and drive growth. ',
    icon: WalletIcon,
  },
  {
    name: 'Information Technology Technician',
    period: 'Aug 2017 to June 2020',
    href: 'https://wamco.com.mv/',
    image: '/wamco-logo.png',
    description:
      "In my previous role, I served as a technical engineer providing critical support to the Information Technology (IT) team at Waste Management Corporation (WAMCO).",
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Information Technology Support',
    period: 'Feb 2016 to Aug 2017',
    href: 'https://villacollege.edu.mv/',
    image: '/villa-logo.jpg',
    description:
      "During my tenure at Villa College, I provided comprehensive IT services to both staff and clients, leveraging my technical expertise and communication skills to ensure that all users were able to effectively utilize the college's IT systems.",
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
  },
  {
    name: 'Frameworks',
    subskills: ['React JS', 'Vue JS', 'Express JS', 'Laravel', 'Tailwind CSS', 'ASP .NET', 'Fast API'],
    description: 'Development frameworks that i have worked with on different projects. ',
  },
  {
    name: 'Technical',
    subskills: ['Team Management', 'Networking', 'Active Directory Management', 'Database Administration', 'DevOps', 'Development', 'Troubleshooting', 'Technical Support', 'Server Management'],
    description: 'Different experiences and technical skills i have acquired. ',
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

const aboutme = [
  {
    name: "Profession",
    text: "Highly adaptable developer with 6 years of experience in the technology industry"
  },
  {
    name: "Location",
    text: "Based in the Maldives"
  },
  {
    name: "Passion",
    text: "Driven by a passion for innovation and the ever-changing technology industry"
  },
  {
    name: "Skills",
    text: "Strong problem-solving skills, attention to detail, and adaptability; possesses strong interpersonal skills and understands the importance of effective communication; approaches each challenge with a creative mindset; willing to learn new technologies and programming languages"
  },
  {
    name: "Work Ethic",
    text: "Takes pride in a strong work ethic and is committed to delivering high-quality results on time, every time"
  },
  {
    name: "Industry",
    text: "Committed to staying ahead of the curve in the rapidly evolving technology industry"
  },
  {
    name: "Networking",
    text: "Connected with a wide range of professionals in the industry"
  },
]




function Dashboard() {

  return (
    <>
      <div className='w-screen text-center bg-gray-900 py-10 text-white'>
        <h1 className='text-5xl my-4 text-gray-100 font-medium'>My Portfolio</h1>
      </div>
      <div className='flex flex-row items-center justify-center w-screen'>
        <div className="w-full bg-gray-900">
          <div className="mx-auto sm:max-w-screen-2xl max-w-2xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-12 lg:px-8">
            <div className='backdrop-brightness-125 drop-shadow-lg rounded-lg'>
              <Person people={people} aboutme={aboutme} />
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
              <div className='w-full lg:col-span-2 lg:mt-0 py-4 pt-8'>
                <h2 className='my-4 text-white text-2xl'>Skills</h2>
                <dl className="space-y-10 sm:grid sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">

                  {skills.map((skills) => (
                    <div key={skills.name} className="relative">
                      <dt>
                        <CommandLineIcon className="absolute h-6 w-6 text-blue-500" aria-hidden="true" />
                        <p className="ml-9 text-lg font-medium leading-6 text-gray-200">{skills.name}</p>
                      </dt>
                      <dd className="mt-2 ml-9 text-base text-gray-500">{skills.description}</dd>

                      {skills.subskills.map((element, index) => (
                        <dd className='mt-0 ml-16 text-base text-gray-500' key={index}>
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
      <div className="bg-gray-900">
        {/* Header */}
        <div className="relative pb-96">
          <div className="relative mx-auto max-w-2xl sm:max-w-screen-2xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Work Experience</h1>
            <p className="mt-6 max-w-full text-xl text-gray-300">
              Throughout my career, I have had the opportunity to work with several major corporations in the country, each providing unique challenges and opportunities for professional growth. These experiences have allowed me to hone the skills and expertise necessary to excel in my chosen field, as well as to develop a deep understanding of the industry landscape and its evolving trends.
              <br></br><br></br>
              Most recently, I have been fortunate to work with a number of highly respected organizations, including Bank of Maldives, Waste Management Corporation, and Villa College. Through these engagements, I have had the opportunity to work alongside top talent in the field, gaining valuable insights into their strategies and approaches, and applying these lessons to my own work. Additionally, I have been able to leverage these experiences to develop and refine my skills in areas such as technical engineering, IT policy development, and IT support services, enabling me to take on increasingly complex and demanding projects.
              <br></br><br></br>
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
              <div key={link.name} className="flex flex-col rounded-2xl bg-gray-800 drop-shadow-xl backdrop-brightness-125">
                <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
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
                </div>
                <div className="rounded-bl-2xl rounded-br-2xl p-6 md:px-8">
                  <a href={process.env.PUBLIC_URL + link.href} className="text-base font-medium text-indigo-500 hover:text-indigo-300">
                    Read More<span aria-hidden="true"> &rarr;</span>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Dashboard;
