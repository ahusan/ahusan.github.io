import Error404 from './error404';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function Article(props) {
  const navigate = useNavigate();

  // Handle null or undefined article prop
  if (props.article === null || props.article === undefined) {
    return <Error404 />;
  }

  // Convert string ID to number if it's a string
  const id = typeof props.article === 'string' ? parseInt(props.article, 10) : props.article;

  const articles = [
    {
      id: 1,
      images: ['/fsm-front.png', '/fsm-cms.png'],
      heading: 'Fuel Supply Maldives Website',
      details:
        'Fuel Supply Maldives (FSM) is a company that specializes in the supply and distribution of petroleum products in the Maldives. The company offers a range of services, including:',
      services: [
        'Supply of petroleum products, including gasoline, diesel, and aviation fuel.',
        'Fuel storage and handling services',
        'Bunkering services for marine vessels',
        'Transportation and logistics services for petroleum products',
        'Technical support and consultation services',
      ],
      link: 'https://fuel.mv/',
      para: [
        'To create a website for Fuel Supply Maldives, our team decided to use React and .NET Framework. React is a popular front-end framework known for its performance and scalability, while .NET Framework provides a robust back-end infrastructure for web applications.',
        'To ensure seamless deployment and management of the website, we chose to use Azure Cloud Services, which provides reliable and secure cloud hosting with automatic scaling and load balancing.',
        'In order to streamline collaboration and version control, we implemented Git as our version control system. This allowed us to easily track changes and collaborate with other team members, ensuring that everyone was working on the most up-to-date version of the website.',
        'Throughout the development process, we remained focused on the core values of Fuel Supply Maldives - quality, safety, and environmental responsibility. We ensured that the website was optimized for speed and performance, while adhering to the highest standards of security and reliability.',
        'Overall, the process of creating a website for Fuel Supply Maldives was a collaborative effort that involved careful planning, development, and testing. We are confident that the resulting website will be a valuable asset for the company, helping them to reach and engage with their customers in a more effective way.',
      ],
      stack: [
        'React',
        'Javascript',
        '.Net Framework',
        'CSharp',
        'SQL',
        'Git',
        'Docker',
        'Portainer',
        'Nginx',
        'Azure Cloud Platform',
      ],
    },
    {
      id: 2,
      images: ['/travgo-front.png', '/travgo-pms.png'],
      heading: 'Travgo Maldives Platform',
      details:
        'TravGo Maldives is registered and licensed travel agency by the Ministry of Economic Development and Tourism Ministry of the Maldives located in Male&apos;. TravGo is established to help all the people around the world to visit and explorer the beauty of Maldives and make their dreams come true with convenience and affordability. Based on our research, we have identified that TravGo Maldives needs help with the following:',
      services: [
        'Increasing their online visibility: TravGo Maldives wants to reach more customers and increase their online visibility. They recognize that having a professional website is crucial to achieving this goal.',
        'Streamlining their booking process: TravGo Maldives&apos; booking process is currently manual and time-consuming, leading to delays and errors. They need a more efficient system to streamline their booking process and provide customers with a better experience.',
        'Enhancing their brand image: TravGo Maldives wants to enhance their brand image and establish themselves as a reputable and reliable travel agency. They recognize that a well-designed website can help them achieve this goal.',
      ],
      link: 'https://travgomaldives.com/',
      para: [
        'User Experience (UX) Design: We conducted user research to understand TravGo Maldives&apos; target audience and their needs. Based on our findings, we developed a user-friendly interface that is easy to navigate and provides users with the necessary information about travel packages and booking options.',
        'Custom Booking System: We developed a custom booking system using Firebase Functions to streamline TravGo Maldives&apos; booking process. The system is automated, efficient, and error-free, ensuring that customers can book their travel packages seamlessly.',
        'Branding: We developed a website design that aligns with TravGo Maldives&apos; brand image, using the agency&apos;s brand colors, logo, and fonts. The website&apos;s design is visually appealing, professional, and modern, enhancing TravGo Maldives&apos; brand image and credibility.',
        'Search Engine Optimization (SEO): We implemented SEO best practices to improve TravGo Maldives&apos; online visibility and search engine rankings. The website is optimized for search engines, ensuring that it ranks higher in search results and attracts more organic traffic.',
        'By addressing these key areas, we were able to develop a website that meets TravGo Maldives&apos; needs and helps the agency achieve its business objectives. The website is user-friendly, efficient, visually appealing, and optimized for search engines, ensuring that TravGo Maldives can reach more customers and enhance its brand image.',
        'In conclusion, the website development process for TravGo Maldives involved addressing the challenges the agency faced, such as increasing their online visibility, streamlining their booking process, and enhancing their brand image. We achieved these objectives by focusing on UX design, custom booking system development, branding, and SEO implementation. The result is a professional and efficient website that helps TravGo Maldives achieve its business goals.',
      ],
      stack: [
        'React',
        'Javascript',
        'Firebase Functions',
        'Firebase Hosting',
        'Firebase Authentication',
        'Git',
        'Nginx',
        'Blue Host',
      ],
    },
    {
      id: 3,
      images: ['/ecom-front.png', '/ecom-cms.png', '/ecom-cms2.png'],
      heading: 'Ecommerce Delivery Platform',
      details:
        'The use of an ecommerce delivery platform is to provide an online platform for businesses to sell their products and manage their deliveries efficiently. This platform can be used by customers to browse products, place orders, make payments, and track their deliveries. The use of React JS for the frontend, FastAPI for the backend, PostgreSQL for the database, and Git for version control provides a scalable and robust solution for businesses to manage their ecommerce operations.',
      services: [],
      link: '#',
      para: [
        'The first step in creating an ecommerce delivery platform is to plan the project. Determine the features and functionalities that the platform will have, such as user authentication, product catalog, shopping cart, payment gateway, order management, and delivery tracking. Create a project plan that outlines the requirements, timelines, and resources needed for each stage of development.',
        'After planning the project, set up the development environment. Install Node.js, React JS, FastAPI, PostgreSQL, and Git on your system. Create a new project folder and initialize it with Git. Then, create a new React JS project using the Create React App command.',
        'The next step is to design the user interface of the ecommerce delivery platform. Use a wireframe tool like Figma or Sketch to create a mockup of the platform&apos;s user interface. Design the layout, color scheme, typography, and navigation of the platform. Once the design is complete, convert it into a React JS component hierarchy.',
        'The backend of the ecommerce delivery platform will be created using FastAPI, a Python-based web framework. Create a new FastAPI project and define the endpoints for user authentication, product catalog, shopping cart, payment gateway, order management, and delivery tracking. Use PostgreSQL as the database for the backend.',
        'After creating the frontend and backend, connect them using API endpoints. Use Axios, a JavaScript library, to make HTTP requests from the React JS components to the FastAPI endpoints. Implement error handling and data validation to ensure that the frontend and backend communicate effectively.',
        'Once the frontend and backend are connected, test the platform to ensure that it works as expected. Use Jest, a JavaScript testing framework, to write unit tests for the React JS components. Test the backend using Pytest, a Python testing framework. Debug any errors or issues that arise during testing.',
        'Finally, deploy the ecommerce delivery platform to a production server. Use a cloud platform like AWS or Azure to host the platform. Set up continuous integration and continuous deployment (CI/CD) pipelines to automatically deploy updates to the platform. Ensure that the platform is secure, scalable, and performs well under heavy traffic.',
        'Creating an ecommerce delivery platform requires careful planning, design, and implementation. By using React JS for the frontend, FastAPI for the backend, PostgreSQL for the database, and Git for version control, you can create a robust and scalable platform that meets the needs of your customers. Follow the steps outlined in this document to create your own ecommerce delivery platform.',
      ],
      stack: [
        'React',
        'Javascript',
        'FastAPI',
        'Python',
        'PostgresSQL',
        'Digital Oceans Cloud Platform',
      ],
    },
    {
      id: 4,
      images: ['/matcon-front.png', '/matcon-front2.png'],
      heading: 'Matcon Website',
      details:
        'MATCON provides project management and engineering design consultancy services for civil, structural, transport, and coastal engineering projects.',
      services: [
        'Requirements gathering: Gather the client&apos;s requirements and goals for the website, including design, functionality, and features.',
        'Planning and architecture: Create a plan for the website&apos;s architecture, including the user interface, data models, and technology stack.',
        'Design and prototyping: Design the website&apos;s user interface, create wireframes, and develop interactive prototypes.',
        'Development: Develop the website using React JS, implementing features such as user authentication, database integration, and real-time updates.',
        'Testing: Test the website thoroughly to ensure functionality, compatibility, and usability across devices and browsers.',
        'Deployment: Deploy the website to Firebase hosting and configure any necessary settings, such as domain mapping and SSL certificates.',
        'Maintenance and support: Provide ongoing maintenance and support for the website, ensuring that it remains up-to-date and secure.',
      ],
      link: 'https://matcon.mv/',
      para: [
        'Firstly, start by gathering the client&apos;s requirements and goals for the website. It&apos;s important to understand what they want to achieve, and what features and functionality they require. This will help you to create a plan for the website&apos;s architecture, including the user interface, data models, and technology stack.',
        'Next, design the website&apos;s user interface, create wireframes, and develop interactive prototypes. This will allow you to visualize the website&apos;s layout and functionality, and make any necessary changes before development begins.',
        'Once the design is finalized, start developing the website using React JS. Implement features such as user authentication, database integration, and real-time updates, to create a responsive and functional website.',
        'Test the website thoroughly to ensure that it functions as expected, and is compatible with different devices and browsers. This step is crucial to ensure that the website meets the client&apos;s requirements and provides a positive user experience.',
        'After testing, deploy the website to Firebase hosting, and configure any necessary settings, such as domain mapping and SSL certificates. Firebase provides a scalable and reliable platform for hosting web applications, and is easy to set up and manage.',
        'Finally, once the website is deployed, provide ongoing maintenance and support. This will ensure that the website remains secure, up-to-date, and continues to meet the client&apos;s requirements.',
        'Throughout the process, make sure to communicate with the client regularly, to ensure that their requirements are being met, and that the website is meeting their expectations. This will help to ensure a successful outcome, and a website that meets the client&apos;s goals and objectives.',
      ],
      stack: ['React', 'Javascript', 'Git', 'Nginx', 'Google Cloud Platform', 'Vercel'],
    },
    {
      id: 5,
      images: ['/matcon-front.png', '/matcon-front2.png'],
      heading: 'Matcon Mail Migration',
      details:
        'MATCON provides project management and engineering design consultancy services for civil, structural, transport, and coastal engineering projects.',
      services: [
        'Requirements gathering: Gather the client&apos;s requirements and goals for the project. ',
        'Planning: Create a plan for the project&apos;s technology stack.',
        'Backup: Take a full working back up of the exiuisting mail server.',
        'Migrating: Migrate the mail server to Google Workspace.',
      ],
      link: 'https://matcon.mv/',
      para: [
        'Firstly, start by gathering the client&apos;s requirements and goals for the project. It&apos;s important to understand what they want to achieve, and what features and functionality they require. This will help you to create a plan for the project&apos;s technology stack.',
        'Next, create a plan for the project&apos;s technology stack. This will allow you to visualize the project&apos;s architecture, and make any necessary changes before it begins.',
        'Once the plan is finalized, start migrating the mail server to Google Workspace.',
        'Test the mail server thoroughly to ensure that it functions as expected, and is compatible with different devices and browsers. This step is crucial to ensure that the mail server meets the client&apos;s requirements and provides a positive user experience.',
        'After testing, deploy the mail server to Google Workspace, and configure any necessary settings, such as domain mapping and SSL certificates. Google Workspace provides a scalable and reliable platform for hosting mail servers, and is easy to set up and manage.',
        'Finally, once the mail server is deployed, provide ongoing maintenance and support. This will ensure that the mail server remains secure, up-to-date, and continues to meet the client&apos;s requirements.',
        'Throughout the process, make sure to communicate with the client regularly, to ensure that their requirements are being met, and that the mail server is meeting their expectations. This will help to ensure a successful outcome, and a mail server that meets the client&apos;s goals and objectives.',
      ],
      stack: ['Google Mail', 'Google Workspace', 'Google Backup and Sync'],
    },
    {
      id: 6,
      images: ['/matcon-front.png', '/matcon-front2.png'],
      heading: 'MCG Networking',
      details:
        'Strategy-led communications and creative consultancy harnessing data and patterns of behaviour in people and organisations.',
      services: [
        'Requirements gathering: Gather the client&apos;s requirements and goals for the project, including design.',
        'Planning: Create a plan for the project&apos;s on how to carry it out.',
        'Design: Design the network and come up with a plan on how to implement it.',
        'Implementation: Implement the network as per the design.',
      ],
      link: 'https://matcon.mv/',
      para: [
        'After the client has confirmed the project, start by gathering the client&apos;s requirements and goals for the project. It&apos;s important to understand what they want to achieve, and what features and functionality they require. This will help you to create a plan for the project&apos;s on how to carry it out.',
        'Next, create a plan for the project&apos;s on how to carry it out. This will allow you to visualize the project&apos;s architecture, and make any necessary changes before it begins.',
        'Once the plan is finalized, start designing the network and come up with a plan on how to implement it.',
        'Implement the network as per the design.',
        'Test the network thoroughly to ensure that it functions as expected, and is compatible with different devices and browsers. This step is crucial to ensure that the network meets the client&apos;s requirements and provides a positive user experience.',
        'After testing, deploy the network to the client, and configure any necessary settings, such as domain mapping and SSL certificates. This provides a scalable and reliable platform for hosting networks, and is easy to set up and manage.',
        'Finally, once the network is deployed, provide ongoing maintenance and support. This will ensure that the network remains secure, up-to-date, and continues to meet the client&apos;s requirements.',
        'Throughout the process, make sure to communicate with the client regularly, to ensure that their requirements are being met, and that the network is meeting their expectations. This will help to ensure a successful outcome, and a network that meets the client&apos;s goals and objectives.',
      ],
      stack: ['Google Mail', 'Google Workspace', 'Google Backup and Sync'],
    },
    {
      id: 7,
      images: ['/bespoke-1.png', '/bespoke-2.png', '/bespoke-3.png'],
      heading: 'Bespoke Maldives Website',
      details:
        'Strategy-led communications and creative consultancy harnessing data and patterns of behaviour in people and organisations.',
      services: [
        'Requirements gathering: Gather the client&apos;s requirements and goals for the project, including design.',
        'Planning: Create a plan for the project&apos;s architecture, including the user interface, data models, and technology stack.',
        'Backup: Design the website&apos;s user interface, create wireframes, and develop interactive prototypes.',
        'Migrating: Develop the website using React JS, implementing features such as user authentication, database integration, and real-time updates.',
      ],
      link: 'https://bespoke-main.web.app/',
      para: [
        'Firstly, start by gathering the client&apos;s requirements and goals for the website. It&apos;s important to understand what they want to achieve, and what features and functionality they require. This will help you to create a plan for the website&apos;s architecture, including the user interface, data models, and technology stack.',
        'Next, design the website&apos;s user interface, create wireframes, and develop interactive prototypes. This will allow you to visualize the website&apos;s layout and functionality, and make any necessary changes before development begins.',
        'Once the design is finalized, start developing the website using React JS. Implement features such as user authentication, database integration, and real-time updates, to create a responsive and functional website.',
        'Test the website thoroughly to ensure that it functions as expected, and is compatible with different devices and browsers. This step is crucial to ensure that the website meets the client&apos;s requirements and provides a positive user experience.',
        'After testing, deploy the website to Firebase hosting, and configure any necessary settings, such as domain mapping and SSL certificates. Firebase provides a scalable and reliable platform for hosting web applications, and is easy to set up and manage.',
        'Finally, once the website is deployed, provide ongoing maintenance and support. This will ensure that the website remains secure, up-to-date, and continues to meet the client&apos;s requirements.',
        'Throughout the process, make sure to communicate with the client regularly, to ensure that their requirements are being met, and that the website is meeting their expectations. This will help to ensure a successful outcome, and a website that meets the client&apos;s goals and objectives.',
      ],
      stack: ['Figma', 'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Vercel', 'Github'],
    },
  ];

  const article = articles.filter(item => item.id === id);

  if (article.length < 1) {
    return <Error404 />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <main className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-6xl pt-24 text-center sm:pt-40">
            <a
              href={article[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block"
            >
              <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 sm:text-6xl group-hover:opacity-80 transition-opacity duration-300">
                {article[0].heading}
              </h2>
            </a>
            <p className="mt-10 text-lg leading-8 text-gray-300">{article[0].details}</p>
            {article[0].services.length > 0 && (
              <div className="mt-8 glass rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
                <ol className="text-gray-300 list-decimal text-left leading-8 list-inside">
                  {article[0].services.map((item, index) => (
                    <li key={index} className="ml-4 mb-2">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Tech stack section */}
        <div className="mx-auto my-16 max-w-7xl px-6 sm:my-20 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 sm:text-4xl">
              Tech Stack
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Technologies used in this project.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-8">
            {article[0].stack.map((value, index) => (
              <div
                key={index}
                className="glass rounded-lg p-4 hover:bg-gray-800 transition-all duration-300 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            <img
              src={process.env.PUBLIC_URL + article[0].images[0]}
              alt={article[0].heading}
              className="w-full object-cover border-4 border-indigo-900/50"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none">
              {article[0].para.map((item, index) => (
                <p
                  key={index}
                  className="w-full glass p-6 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Additional images section */}
        <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8 mb-20">
          <div className="grid grid-cols-1 gap-8">
            {article[0].images.slice(1).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]"
              >
                <img
                  src={process.env.PUBLIC_URL + item}
                  alt={`${article[0].heading} ${index + 2}`}
                  className="w-full object-cover border-4 border-indigo-900/50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Visit website button */}
        {article[0].link && article[0].link !== '#' && (
          <div className="text-center mb-20">
            <a
              href={article[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 shadow-lg text-lg font-medium"
            >
              Visit Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
