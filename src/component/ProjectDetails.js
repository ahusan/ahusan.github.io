import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from './Layout';
import Header from './Header';
import ArticleComponent from './article';

const ProjectDetails = ({ projects }) => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project with matching name (converted to URL-friendly format)
    if (projects) {
      const foundProject = projects.find(
        p => p.name.toLowerCase().replace(/\s+/g, '-') === projectId
      );
      setProject(foundProject);
      setLoading(false);
    }
  }, [projectId, projects]);

  // These are the exact same articles from article.js
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

  useEffect(() => {
    if (project && project.article) {
      const foundArticle = articles.find(article => article.id === project.article);
      if (foundArticle) {
        setArticleData(foundArticle);
      }
    }
  }, [project]);

  if (loading) {
    return (
      <Layout>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-12 bg-indigo-500 rounded-full"></div>
            <div className="space-y-4">
              <div className="h-4 bg-indigo-500 rounded w-36"></div>
              <div className="h-4 bg-indigo-400 rounded w-80"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
            <p className="text-gray-400 mb-8">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              to="/"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center mb-8 text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{project.name}</h1>
            <p className="text-lg text-gray-400">{project.period}</p>
          </div>
          <div className="mt-4 md:mt-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mr-4"
              >
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={false}
              className="project-carousel"
            >
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} className="h-[400px] md:h-[600px]">
                  <img
                    src={process.env.PUBLIC_URL + image}
                    alt={`${project.name} screenshot ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Description Section */}
            <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                {/* Render article content when available */}
                {articleData && articleData.para && articleData.para.length > 0 && (
                  <div className="text-gray-300 leading-relaxed mt-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Detailed Description</h3>
                    <div className="space-y-4">
                      {articleData.para.map((paragraph, index) => (
                        <p key={index} className="text-gray-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features Section */}
            {project.features && (
              <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index} className="pl-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Services Section from Article */}
            {articleData && articleData.services && articleData.services.length > 0 && (
              <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Services</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-300">
                  {articleData.services.map((service, index) => (
                    <li key={index} className="pl-2">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && (
              <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-indigo-400 mb-3">
                        {item.challenge}
                      </h3>
                      <p className="text-gray-300">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes Section */}
            {project.outcomes && (
              <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Outcomes & Impact</h2>
                <div className="prose prose-invert max-w-none text-gray-300">
                  <p>{project.outcomes}</p>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            {/* Tech Stack - Removed sticky positioning */}
            <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
              <div className="space-y-4">
                {project.stack &&
                  project.stack.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-3">
                      {project.stackImages && project.stackImages[tech] ? (
                        <img
                          src={project.stackImages[tech]}
                          alt={tech}
                          className="h-8 w-auto object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400">
                          <span>{tech.charAt(0)}</span>
                        </div>
                      )}
                      <span className="text-gray-300">{tech}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Live Website Link */}
            {articleData && articleData.link && articleData.link !== '#' && (
              <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Visit Website</h2>
                <a
                  href={articleData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Visit Live Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}

            {/* Project Details */}
            <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Type</span>
                  <span className="text-gray-300">{project.type || 'Website Development'}</span>
                </div>
                <div className="border-t border-gray-700"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-gray-300">{project.period}</span>
                </div>
                <div className="border-t border-gray-700"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Role</span>
                  <span className="text-gray-300">{project.role || 'Developer'}</span>
                </div>
                <div className="border-t border-gray-700"></div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Client</span>
                  <span className="text-gray-300">{project.client || project.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
