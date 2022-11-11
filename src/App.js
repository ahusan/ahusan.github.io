import logo from './logo.svg';
import './App.css';
import { FolderIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

const people = [


  {
    name: 'Ahusan Mohamed',
    role: 'Information Systems Engineer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    githubUrl: 'https://ahusan.github.io/',
    linkedinUrl: 'https://www.linkedin.com/in/ahusan/',
  }
]


function App() {

  return (
    <>
      <div className='flex flex-row items-center justify-center h-screen w-screen'>
        <div className="bg-white">
          <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
            <div>
              <ul
                role="list"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="rounded-lg object-cover shadow-lg" src={person.imageUrl} alt="" />
                      </div>

                      <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                        <ul role="list" className="flex space-x-5">
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
            <div className="mt-12 lg:col-span-2 lg:mt-0">
              <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <FolderIcon className="absolute h-6 w-6 text-blue-800" aria-hidden="true" />
                      <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
