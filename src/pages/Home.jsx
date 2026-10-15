import { Link } from 'react-router-dom';
import Story from '../components/Story';
import { certificates, education, otherProjects, shortPeriod } from '../data/portfolioData';

function MoreProjects() {
  return (
    <section className="section">
      <header className="section-head">
        <h2>More projects</h2>
        <p>Client sites, infrastructure jobs and tools, newest first.</p>
      </header>
      <ul className="project-list">
        {otherProjects.map(p => (
          <li key={p.id}>
            <Link to={`/project/${p.id}`}>
              <span className="project-list-name">{p.name}</span>
              <span className="project-list-summary">{p.summary}</span>
              <span className="project-list-year">{shortPeriod(p.period)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Credentials() {
  return (
    <section className="section credentials">
      <div>
        <h2>Education</h2>
        <ul className="plain-list">
          {education.map(e => (
            <li key={e.degree}>
              <strong>{e.degree}</strong>
              <span>
                {e.institution}, {shortPeriod(e.period)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Certificates</h2>
        <ul className="plain-list">
          {certificates.map(c => (
            <li key={c.name}>
              <a href={encodeURI(c.file)} target="_blank" rel="noreferrer">
                {c.name.replace(/^(CISCO|AWS) - /, '')}
              </a>
              <span>{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Story />
      <MoreProjects />
      <Credentials />
    </>
  );
}
