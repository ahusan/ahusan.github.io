import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon, BriefcaseIcon, BuildingLibraryIcon, ChevronDoubleRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const timeline = [
    {
        id: 1,
        content: 'Developmetn of Website for ',
        target: 'Matcon Pvt Ltd',
        href: '#',
        date: 'Jan 2022',
        datetime: '2022-01-01',
        icon: CodeBracketIcon,
        iconBackground: 'bg-amber-500',
    },
    {
        id: 2,
        content: 'Currently Working as an Information Systems Engineer at ',
        target: 'Bank of Maldives',
        href: '#',
        date: 'Since June 2020',
        datetime: '2020-06-07',
        icon: BriefcaseIcon,
        iconBackground: 'bg-lime-500',
    },
    {
        id: 3,
        content: 'Graduated with a Degree in Computer Science from ',
        target: 'Maldives National University',
        href: '#',
        date: 'June 2021',
        datetime: '2021-06-15',
        icon: AcademicCapIcon,
        iconBackground: 'bg-cyan-500',
    },
    {
        id: 4,
        content: 'Development of Delivery Platform for ',
        target: 'Lubaba Maldives',
        href: '#',
        date: 'Nov 2021',
        datetime: '2021-11-01',
        icon: CodeBracketIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 5,
        content: 'Development of Smart Farming for ',
        target: 'Degree Project',
        href: '#',
        date: 'May 2021',
        datetime: '2021-03-21',
        icon: CodeBracketIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 6,
        content: 'Development of Website for ',
        target: 'Fuel Supply Maldives',
        href: '#',
        date: 'May 2021',
        datetime: '2021-05-01',
        icon: CodeBracketIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 7,
        content: 'Development of Website for ',
        target: 'Travgo Maldives Pvt Ltd',
        href: '#',
        date: 'Sep 2020',
        datetime: '2020-09-25',
        icon: CodeBracketIcon,
        iconBackground: 'bg-yellow-500',
    },
    {
        id: 8,
        content: 'Started my own company as ',
        target: 'Aveon Consulting Pvt Ltd',
        href: '#',
        date: 'Sep 2020',
        datetime: '2020-09-25',
        icon: BuildingLibraryIcon,
        iconBackground: 'bg-lime-500',
    },
    {
        id: 9,
        content: 'Joined as an IT Technician at ',
        target: 'Waste Management Corporation',
        href: '#',
        date: 'Aug 2017',
        datetime: '2017-08-14',
        icon: BriefcaseIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 10,
        content: 'Networking Projects for ',
        target: 'Freelance',
        href: '#',
        date: 'Jan 2017',
        datetime: '2017-01-01',
        icon: ChevronDoubleRightIcon,
        iconBackground: 'bg-amber-600',
    },
    {
        id: 11,
        content: 'Joined as an IT Technician at ',
        target: 'Villa College',
        href: '#',
        date: 'Feb 2016',
        datetime: '2016-02-14',
        icon: BriefcaseIcon,
        iconBackground: 'bg-lime-700',
    },
    {
        id: 12,
        content: 'Graduated with a Diploma in IT from',
        target: 'Maldives National University',
        href: '#',
        date: 'Dec 2015',
        datetime: '2015-12-01',
        icon: AcademicCapIcon,
        iconBackground: 'bg-cyan-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Aboutme() {
    return (
        <div className="flow-root sm:max-h-[450px] w-full overflow-auto">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-700" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                    <span
                                        className={classNames(
                                            event.iconBackground,
                                            'h-8 w-8 rounded-full flex items-center justify-center'
                                        )}
                                    >
                                        <event.icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-200">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-400">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
