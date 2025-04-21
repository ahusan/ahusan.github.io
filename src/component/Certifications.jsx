import React, { useState, useEffect, useRef } from 'react';
// We'll use an iframe approach for PDF rendering
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Certificate data
const certificates = [
  {
    name: 'CISCO - CCNA R&S - Scaling Network',
    file: '/certificates/CISCO - CCNA R&S - Scaling Network.pdf',
    type: 'pdf',
  },
  {
    name: 'CISCO - Introduction to Cyber Security',
    file: '/certificates/CISCO - Introduction to Cyber Security.pdf',
    type: 'pdf',
  },
  {
    name: 'CISCO - Python Essentials 1',
    file: '/certificates/CISCO - Python Essentials 1.pdf',
    type: 'pdf',
  },
  {
    name: 'CISCO - Python Essentials 2',
    file: '/certificates/CISCO - Python Essentials 2.pdf',
    type: 'pdf',
  },
  {
    name: 'IBM Data Science Methodology',
    file: '/certificates/IBM DS0103EN Certificate _ Data Science Methodologies.pdf',
    type: 'pdf',
  },
  {
    name: 'IBM Data Science 101',
    file: '/certificates/IBM DS0101EN Certificate _ Data Science 101.pdf',
    type: 'pdf',
  },
  {
    name: 'IBM Docker Essentials',
    file: '/certificates/IBM CO0101EN Certificate _ Docker Essentials.pdf',
    type: 'pdf',
  },
  {
    name: 'AWS - Intro to Containers',
    file: '/certificates/AWS - Intro to containers cert.pdf',
    type: 'pdf',
  },
];

// Individual Credly badges
const credlyBadges = [
  {
    id: 'ebd9a819-d9d2-4e4c-b701-5a8b8788eb81',
    name: 'Introduction to Cyber Security',
    issuer: 'Cisco',
  },
  {
    id: '6950660b-13cb-4a6a-83b8-9aa54f185b44',
    name: 'Data Science Methodologies',
    issuer: 'IBM',
  },
  {
    id: 'ebf7afa1-ac12-4d85-b3f3-16d791c8d421',
    name: 'Docker Essentials',
    issuer: 'IBM',
  },
  {
    id: '9c9959a5-c61d-4630-8a35-437cb940c315',
    name: 'Data Science 101',
    issuer: 'IBM',
  },
  {
    id: 'd9c7a312-5ae3-476b-86ee-0efd900cba5b',
    name: 'Python Essentials 1',
    issuer: 'Cisco',
  },
  {
    id: '3bd675e6-6a74-4334-a1c8-cd68e30dc713',
    name: 'Python Essentials 2',
    issuer: 'Cisco',
  },
];

// Custom Badge component
const CredlyBadge = ({ badgeId, width = '100%', height = '270' }) => {
  const badgeRef = useRef(null);

  useEffect(() => {
    // Only run this if we have a badge ID and the ref is attached
    if (badgeId && badgeRef.current) {
      // Clear any existing content
      badgeRef.current.innerHTML = '';

      // Create the badge element
      const badgeDiv = document.createElement('div');
      badgeDiv.setAttribute('data-iframe-width', width);
      badgeDiv.setAttribute('data-iframe-height', height);
      badgeDiv.setAttribute('data-share-badge-id', badgeId);
      badgeDiv.setAttribute('data-share-badge-host', 'https://www.credly.com');

      // Append it to our ref
      badgeRef.current.appendChild(badgeDiv);

      // Load the Credly script
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        badgeRef.current.appendChild(script);
      }
    }
  }, [badgeId, width, height]);

  return (
    <div
      ref={badgeRef}
      className="credly-badge-container w-full flex justify-center text-center text-white border-none"
    ></div>
  );
};

function Certifications() {
  const [activeCert, setActiveCert] = useState(0);
  const [showBadges, setShowBadges] = useState(false);
  const [activeIssuer, setActiveIssuer] = useState('All');

  const handleCertificateClick = index => {
    setActiveCert(index);
    setShowBadges(false);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveCert(index);
      setShowBadges(false);
    }
  };

  // Get unique issuers for filtering
  const issuers = ['All', ...new Set(credlyBadges.map(badge => badge.issuer))];

  // Filter badges by issuer
  const filteredBadges =
    activeIssuer === 'All'
      ? credlyBadges
      : credlyBadges.filter(badge => badge.issuer === activeIssuer);

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certifications & Badges
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Professional certifications and achievements that validate my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 bg-gray-900 p-6 rounded-lg">
            {/* Toggle between Certificates and Badges */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowBadges(false)}
                className={`px-4 py-2 mr-2 rounded ${
                  !showBadges ? 'bg-indigo-600' : 'bg-gray-800'
                }`}
              >
                <span className="text-sm text-white">Certificates</span>
              </button>
              <button
                onClick={() => setShowBadges(true)}
                className={`px-4 py-2 rounded-sm ${showBadges ? 'bg-indigo-600' : 'bg-gray-800'}`}
              >
                <span className="text-sm text-white">Badges</span>
              </button>
            </div>

            {!showBadges ? (
              // Certificates List
              <>
                <h3 className="text-xl font-semibold mb-4 text-white">My Certificates</h3>
                <ul className="space-y-2">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded cursor-pointer transition-all ${
                        activeCert === index && !showBadges
                          ? 'bg-indigo-900 border-l-4 border-indigo-500'
                          : 'hover:bg-gray-800'
                      }`}
                      onClick={() => handleCertificateClick(index)}
                      onKeyDown={e => handleKeyDown(e, index)}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="text-gray-200">{cert.name}</span>
                    </div>
                  ))}
                </ul>
              </>
            ) : (
              // Badges List
              <>
                <h3 className="text-xl font-semibold mb-4 text-white">My Credly Badges</h3>

                {/* Issuer Filter */}
                <div className="mb-6">
                  <p className="text-gray-400 mb-2 text-sm">Filter by issuer:</p>
                  <div className="flex flex-wrap gap-2">
                    {issuers.map(issuer => (
                      <button
                        key={issuer}
                        onClick={() => setActiveIssuer(issuer)}
                        className={`px-3 py-1 text-xs rounded ${
                          activeIssuer === issuer ? 'bg-indigo-600' : 'bg-gray-800'
                        }`}
                      >
                        {issuer}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 overflow-y-auto max-h-max pr-2">
                  {filteredBadges.map((badge, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg">
                      <CredlyBadge badgeId={badge.id} width="150" height="150" />
                      <div className="mt-2 text-center">
                        <p className="text-sm text-white font-medium">{badge.name}</p>
                        <p className="text-xs text-indigo-400">Issuer: {badge.issuer}</p>
                      </div>
                    </div>
                  ))}
                  {filteredBadges.length === 0 && (
                    <p className="text-sm text-gray-400 text-center">
                      No badges found for the selected filter.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 bg-gray-900 p-4 rounded-lg">
            {!showBadges ? (
              // PDF Viewer
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {certificates[activeCert].name}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setActiveCert(prev => (prev > 0 ? prev - 1 : certificates.length - 1))
                      }
                      className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-gray-400"
                    >
                      <ArrowLeftIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveCert(prev => (prev < certificates.length - 1 ? prev + 1 : 0))
                      }
                      className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full text-gray-400"
                    >
                      <ArrowRightIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <iframe
                  src={certificates[activeCert].file}
                  title={certificates[activeCert].name}
                  className="w-full h-[calc(100vh-200px)] border-none rounded"
                  style={{ minHeight: '500px' }}
                ></iframe>
              </>
            ) : (
              // Badges Display Grid
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-6 text-white text-center">My Badges</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredBadges.map(badge => (
                    <div key={badge.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                      <CredlyBadge badgeId={badge.id} width="100%" height="200" />
                      <div className="mt-3 text-center">
                        <p className="text-md text-white font-medium">{badge.name}</p>
                        <p className="text-sm text-indigo-400">Issuer: {badge.issuer}</p>
                      </div>
                    </div>
                  ))}
                  {filteredBadges.length === 0 && (
                    <p className="text-sm text-gray-400 text-center col-span-full">
                      No badges match the selected issuer.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
