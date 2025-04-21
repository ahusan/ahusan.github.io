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
        'For the Fuel Supply Maldives website, I decided to use React and .NET Framework as the core technologies. I chose React for its performance and scalability on the frontend, while .NET Framework provided the robust backend infrastructure the project needed.',
        'To ensure seamless deployment and management, I implemented Azure Cloud Services, which gave us reliable and secure cloud hosting with automatic scaling and load balancing capabilities.',
        'I set up Git for version control, which was essential for tracking changes and collaborating with the client. This ensured we were always working with the most current version of the website throughout development.',
        "Throughout the project, I kept Fuel Supply Maldives' core values at the forefront - quality, safety, and environmental responsibility. I optimized the site for speed and performance while maintaining high standards of security and reliability.",
        "Building the Fuel Supply Maldives website was an exciting challenge that required careful planning, development, and testing. I'm proud of the result - a powerful digital platform that helps the company better connect with their customers and showcase their services effectively.",
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
        'When approaching the TravGo Maldives project, I began with thorough user research to understand their target audience. Based on my findings, I designed a user-friendly interface that makes navigation intuitive and provides visitors with clear information about travel packages and booking options.',
        'One of my key contributions was developing a custom booking system using Firebase Functions. I automated their previously manual process, making it efficient and error-free so customers can book travel packages without the frustrations they previously experienced.',
        "I carefully crafted the website design to align with TravGo Maldives' brand image, incorporating their brand colors, logo, and fonts. I aimed for a visual style that feels professional, modern, and visually appealing to enhance their credibility in the market.",
        'To improve their online visibility, I implemented SEO best practices throughout the site. This optimization has significantly improved their search engine rankings and attracted more organic traffic to their business.',
        "By addressing these key areas, I delivered a website that truly meets TravGo Maldives' business needs. The site is user-friendly, efficient, visually appealing, and optimized for search engines - all contributing to their goals of reaching more customers and strengthening their brand image.",
        'Working on this project was particularly rewarding as I saw how the technical solutions I implemented directly translated to business improvements. The streamlined booking process alone saved their team countless hours and improved customer satisfaction significantly.',
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
        'My first step in creating this ecommerce delivery platform was thorough planning. I mapped out all the essential features including user authentication, product catalog, shopping cart functionality, payment gateway integration, order management, and delivery tracking. This planning phase was crucial to establish clear requirements and timelines.',
        'I set up a development environment with Node.js, React JS, FastAPI, PostgreSQL, and Git. I created a project structure that would support the complex interactions needed between frontend and backend systems.',
        'For the user interface design, I used Figma to create detailed mockups. I focused on creating an intuitive layout with thoughtful color schemes, typography, and navigation patterns before converting these designs into React components.',
        'I built the backend using FastAPI, a Python-based web framework that I selected for its performance and ease of creating RESTful APIs. I defined endpoints for all the core functionalities and integrated PostgreSQL as the database to ensure data persistence and reliability.',
        'Connecting the frontend and backend was a critical phase where I used Axios to handle HTTP requests between the React components and FastAPI endpoints. I implemented comprehensive error handling and data validation to ensure robust communication between the two systems.',
        'Testing was a priority throughout development. I wrote unit tests for React components using Jest and tested the backend with Pytest. This rigorous testing approach helped me identify and resolve issues early in the development cycle.',
        "For deployment, I chose Digital Ocean's cloud platform for its reliability and scalability. I set up continuous integration and deployment pipelines to streamline updates and ensure the platform would remain stable even with heavy traffic.",
        'Building this ecommerce platform was one of my most comprehensive projects, requiring expertise across the full stack. The result was a robust, scalable solution that effectively meets both business operational needs and customer expectations for a smooth shopping experience.',
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
        'I began the Matcon project by having in-depth discussions with the client to fully understand their requirements and goals. This initial discovery phase was essential for me to understand not just what they wanted, but why they wanted it and how it would serve their business objectives.',
        "With a clear understanding of their needs, I designed the website's user interface and created interactive prototypes. I shared these with the client early in the process, which allowed me to gather feedback and make adjustments before moving into development.",
        'For the development phase, I chose React JS as the primary technology. I built the site with features including content management, responsive design, and performance optimization to ensure a great user experience on all devices.',
        'I conducted thorough testing across multiple browsers and devices to ensure the website functioned flawlessly. This attention to detail caught several edge cases that might have affected certain users.',
        'When it came time for deployment, I set up the website on Google Cloud Platform and configured all necessary settings including proper domain mapping and SSL certificates for security.',
        "After launch, I provided ongoing maintenance and support, ensuring the website remained secure and up-to-date. I also trained the client's team on how to manage content on the site.",
        'Throughout the project, I maintained open communication with the client, with regular check-ins and progress updates. This collaborative approach ensured the final website met all their requirements and exceeded their expectations.',
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
        'I started the Matcon mail migration project by sitting down with key stakeholders to fully understand their requirements and pain points with their existing email system. This helped me identify their specific needs for security, storage, and collaboration features.',
        'Based on these discussions, I developed a comprehensive migration plan that minimized disruption to their daily operations. I carefully selected Google Workspace as the optimal solution for their engineering consultancy needs.',
        'Before making any changes, I created complete backups of all existing mail data, ensuring we had a safety net in case of any unexpected issues during migration.',
        'I executed the migration to Google Workspace in phases, starting with a small test group to identify and resolve any potential issues before rolling out to the entire organization.',
        'After completing the technical migration, I conducted thorough testing of all email functions, calendar sharing, and document collaboration features to ensure everything worked as expected across different devices and platforms.',
        "I provided hands-on training for the Matcon team, showing them how to take advantage of Google Workspace's powerful features to improve their workflow and collaboration processes.",
        'Throughout the entire project, I maintained constant communication with the client, providing progress updates and quickly addressing any concerns that arose. This approach resulted in a smooth transition with minimal disruption to their business.',
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
        'After MCG Consultancy confirmed the networking project, I immediately arranged meetings with their leadership team to understand their specific networking needs, security requirements, and growth projections.',
        'I created a detailed network design that addressed their current pain points while building in scalability for future expansion. My plan included specific hardware recommendations and a phased implementation approach to minimize business disruption.',
        'Before implementing any changes, I documented their existing network thoroughly and created a backup strategy to ensure we could quickly restore operations if unexpected issues arose.',
        'I implemented the new network infrastructure methodically, starting with core components and gradually expanding to user-facing elements. I paid special attention to security configurations and performance optimization.',
        'Throughout the implementation, I conducted continuous testing to verify that each component was functioning correctly before proceeding to the next phase. This approach caught several potential issues early when they were easy to resolve.',
        'Once the new network was fully operational, I provided comprehensive documentation and conducted training sessions for the IT staff who would be managing the system day-to-day.',
        'I continued to provide support after the project completion, being available to quickly address any questions or concerns that arose as the team adjusted to their new networking environment.',
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
        'When Bespoke Maldives approached me about their website project, I began by conducting in-depth discovery sessions to understand their unique position in the luxury travel market and their specific goals for the website.',
        'I created detailed wireframes and design mockups in Figma, focusing on capturing the exclusive feel of their brand while ensuring the user experience would be intuitive and engaging for their high-end clientele.',
        'For development, I chose Next.js with React to deliver optimal performance and SEO benefits. I implemented Tailwind CSS for styling, which allowed me to create a consistent and responsive design system that looks stunning on all devices.',
        'I built custom components for their property showcases, incorporating subtle animations and high-resolution imagery to create an immersive experience that highlights the luxury aspects of their offerings.',
        'I integrated Firebase for authentication and data management, creating a secure and scalable backend that could handle their content needs while providing excellent performance for users around the world.',
        'Throughout development, I maintained a close feedback loop with the client, sharing progress regularly and incorporating their input to ensure the final product perfectly aligned with their vision.',
        'After launching the site, I provided detailed analytics setup and training for their team so they could track performance and make data-driven decisions about future website enhancements.',
      ],
      stack: ['Figma', 'React', 'Next JS', 'Tailwind CSS', 'Firebase', 'Vercel', 'Github'],
    },
    {
      id: 8,
      images: ['/maldives1.png', '/maldives2.png', '/maldives3.png'],
      heading: 'Maldives.com Website Enhancement',
      details:
        'Maldives.com is a premier travel and tourism platform showcasing the beautiful island nation of Maldives to travelers worldwide. The website serves as a comprehensive resource for visitors, offering information about resorts, activities, travel guides, and booking options.',
      services: [
        'Performance optimization: Identified and resolved bottlenecks, improving page load speeds by 40%',
        'Modern stack implementation: Migrated from legacy technologies to a modern Next.js, Strapi, and GraphQL stack',
        'Responsive design enhancements: Ensured seamless experience across all devices with Tailwind CSS',
        'Content management improvements: Implemented a more intuitive and flexible CMS with Strapi',
        'SEO optimization: Implemented best practices to improve organic traffic and search rankings',
        'API integration: Connected with various booking engines and travel platforms via GraphQL',
      ],
      link: 'https://maldives.com',
      para: [
        'Taking on the Maldives.com website enhancement project was an exciting challenge that pushed my technical skills to new heights. As the lead developer, I was tasked with transforming an established tourism platform into a modern, high-performance digital experience while preserving its strong brand identity.',
        'One of my biggest challenges was carefully migrating from the legacy codebase to a modern stack without any service disruptions. I implemented Next.js for the frontend to boost performance and SEO, while selecting Strapi as the headless CMS to give content editors more flexibility and control.',
        "I chose GraphQL as the data layer to optimize API requests, which significantly reduced unnecessary data transfer and improved page load times. This was especially important for users in regions with slower internet connections who make up a substantial portion of the site's audience.",
        "I leveraged Tailwind CSS for the UI development, which enabled me to iterate quickly while maintaining consistent styling. The utility-first approach proved invaluable for improving the mobile experience, which accounts for over 60% of the site's traffic.",
        'Performance optimization was my primary focus throughout the project - I implemented code splitting, lazy loading, and image optimization techniques that collectively reduced the initial load time by 40%. I strategically used Next.js features like server-side rendering for critical pages to boost both user experience and SEO performance.',
        "I completely revamped the content management system using Strapi, creating custom content types and components specifically tailored to the marketing team's workflows. This reduced their content update time significantly and gave them much more creative freedom.",
        'Throughout development, I maintained robust CI/CD pipelines using GitHub Actions and Docker containers to ensure smooth deployments and consistent environments across development and production.',
        'I am particularly proud that my work resulted in a 35% increase in conversion rates, a 40% reduction in bounce rate, and significantly improved search engine rankings for key tourism-related keywords.',
      ],
      stack: ['Next.js', 'Strapi', 'Tailwind CSS', 'GraphQL', 'Docker', 'CI/CD', 'AWS', 'Git'],
    },
    {
      id: 9,
      images: ['/compass-1.png', '/compass-2.png'],
      heading: 'SSR Reservation System',
      details:
        'A comprehensive reservation system developed for Sun Siyam Resorts to allow staff and resellers to manage bookings, check availability, and update pricing across their resort properties. The system provides a centralized platform for streamlining resort operations and sales.',
      services: [
        'Booking management: Automated system for checking room availability and processing bookings across multiple resort properties',
        'Opera PMS integration: Seamless connection with the Opera Property Management System for real-time data synchronization',
        'Price management: Flexible tools for setting and updating room rates and special offers',
        'User access control: Role-based permissions for resort staff and external sales partners',
        'Search optimization: Integration with Meili search for fast and accurate results when finding available rooms',
        'Reporting dashboard: Comprehensive analytics and reporting features for management decision-making',
        'Responsive design: Fully optimized experience across desktop and mobile devices',
      ],
      link: '#',
      para: [
        'The SSR Reservation System project began with extensive research into the specific operational challenges faced by Sun Siyam Resorts. I collaborated closely with their management team to understand the complexities of their multi-property business model and identify key pain points in their existing booking processes.',
        'I designed a modern, intuitive interface using Mantine UI components that simplified complex booking workflows while ensuring the system remained powerful enough for professional users. The design process included multiple feedback sessions with actual end-users to refine the experience.',
        'One of the most challenging aspects was developing a robust integration with the Opera Property Management System. I created a reliable synchronization mechanism that maintains data consistency between systems while handling edge cases gracefully.',
        'I implemented Next.js for the frontend, taking advantage of its server-side rendering capabilities to optimize performance for users with varying internet speeds. This approach also enhanced SEO for public-facing components of the system.',
        'For the database layer, I utilized Prisma ORM to establish a clean, type-safe data access layer that simplified complex queries while maintaining excellent performance. This choice significantly accelerated development and reduced potential bugs.',
        'I incorporated Meili Search to power the availability search functionality, which allows users to quickly find suitable rooms across multiple properties based on complex criteria like date ranges, room types, and pricing parameters.',
        'The deployment architecture leveraged Docker containers on Digital Ocean, creating a scalable and maintainable infrastructure that can handle peak booking periods without performance degradation.',
        'Post-launch, I provided comprehensive training sessions for resort staff and implemented a phased rollout strategy that allowed for real-world testing and refinement before full deployment across all properties and sales channels.',
      ],
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
    },
  ];

  const article = articles.filter(item => item.id === id);

  if (article.length < 1) {
    return <Error404 />;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
      <main className="relative isolate">
        {/* Background gradient */}
        <div
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-1108/632 w-[69.25rem] flex-none bg-linear-to-r from-indigo-500 to-purple-600 opacity-20"
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
              <h2 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600 sm:text-6xl group-hover:opacity-80 transition-opacity duration-300">
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
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600 sm:text-4xl">
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
