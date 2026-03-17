import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import Hero from './Hero';
import Layout from './Layout';
import Skills from './Skills';
import {
  certificates,
  digitalBadges,
  education,
  githubStats,
  skills,
  workExperience,
} from '../data/portfolioData';

function Dashboard() {
  return (
    <Layout>
      <Hero />
      <Skills skills={skills} />
      <Experience workExperience={workExperience} />
      <Education education={education} githubStats={githubStats} />
      <Certifications certificates={certificates} digitalBadges={digitalBadges} />
    </Layout>
  );
}

export default Dashboard;
