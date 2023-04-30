import Aboutme from "./aboutme";

function Person(props) {
    const people = props.people;

    return (
        <ul>
            {people.map((person, index) => (
                <li key={index}>
                    <div className="space-y-4 p-4">
                        {/* <div className="aspect-w-3 aspect-h-2 sm:mb-10 sm:mt-10">
                        <img className="rounded-lg shadow-md" src={process.env.PUBLIC_URL + person.imageUrl} alt="" />
                      </div> */}

                        <div className="space-y-2 rounded-md p-2 px-4">
                            <div className="space-y-2 text-lg font-medium leading-8">
                                <h3 className="text-2xl font-semibold font-mono text-white">{person.name}</h3>
                                <a href={`tel:${person.work}`}><h5 className='text-gray-400 hover:text-indigo-500'>{person.work}</h5></a>
                                <a href={`tel:${person.personal}`}><h5 className='text-gray-400 hover:text-indigo-500'>{person.personal}</h5></a>
                                <a href={`mailto:${person.email}`}><h5 className='text-gray-400 hover:text-indigo-500'>{person.email}</h5></a>
                                <ul className="flex space-x-5">
                                <li>
                                    <a href={person.githubUrl} className="text-gray-400 hover:text-indigo-500">
                                        <span className="sr-only">GitHub</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-indigo-500">
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
                            <div className='w-full my-4'>
                                <h2 className='my-4 text-white text-2xl'>Timeline</h2>
                                <Aboutme />
                                <br></br>
                            </div>
                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}export default Person;