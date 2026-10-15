import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import {
  certificates,
  education,
  experience,
  featuredProjects,
  otherProjects,
  personal,
  shortPeriod,
  skills,
} from '../data/portfolioData';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Ahusan Mohamed</h1>
        <p className="hero-lede">
          Senior developer at Allied Insurance in Malé. Over ten years I’ve gone from fixing
          networks and servers to building the software that runs on them: banking systems, a
          national news site, resort reservations and workflow platforms.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href={personal.socialLinks.email}>
            Email me
          </a>
          <a className="button" href={personal.resume} download>
            Download résumé
          </a>
        </div>
      </div>
      <figure className="hero-chart">
        <Chart />
        <figcaption>
          <span>Central Maldives</span>
          <span>Soundings in metres</span>
        </figcaption>
      </figure>
    </section>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="feature">
      <Link to={`/project/${project.id}`} className="feature-image" tabIndex={-1} aria-hidden="true">
        <img src={project.images[0]} alt="" loading="lazy" decoding="async" />
      </Link>
      <div className="feature-body">
        <h3>
          <Link to={`/project/${project.id}`}>{project.name}</Link>
        </h3>
        <p className="feature-summary">{project.summary}</p>
        <p className="meta">
          {[project.role, shortPeriod(project.period)].filter(Boolean).join(', ')}
        </p>
        <p className="stack-line">{project.technologies.slice(0, 6).join(', ')}</p>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <header className="section-head">
        <h2>Selected work</h2>
        <p>Production systems people rely on every day, and what changed once they shipped.</p>
      </header>
      <div className="features">
        {featuredProjects.map(p => (
          <FeaturedProject key={p.id} project={p} />
        ))}
      </div>
      <h3 className="subhead">More projects</h3>
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

function Experience() {
  return (
    <section id="experience" className="section">
      <header className="section-head">
        <h2>Where I’ve worked</h2>
        <p>Every role has been in the Maldives, and each one moved closer to the code.</p>
      </header>
      <ol className="course">
        {experience.map(role => (
          <li key={role.company} className="waypoint">
            <p className="waypoint-period">{role.period}</p>
            <h3>
              {role.position},{' '}
              <a href={role.website} target="_blank" rel="noreferrer">
                {role.company}
              </a>
            </h3>
            <ul className="waypoint-notes">
              {(role.achievements || role.responsibilities.slice(0, 2)).map(note => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <p className="stack-line">{role.technologies.join(', ')}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section section-shoal">
      <header className="section-head">
        <h2>Stack</h2>
        <p>What I reach for, from the database to the network cable.</p>
      </header>
      <dl className="stack-grid">
        {skills.map(group => (
          <div key={group.name}>
            <dt>{group.name}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
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

function Contact() {
  const { socialLinks, email } = personal;
  return (
    <section id="contact" className="section contact">
      <h2>Have a system that needs building, or rescuing?</h2>
      <p>I’m happy to talk about roles, contracts and hard problems.</p>
      <a className="contact-email" href={socialLinks.email}>
        {email}
      </a>
      <ul className="contact-links">
        <li>
          <a href={socialLinks.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={socialLinks.github}>GitHub</a>
        </li>
        <li>
          <a href={socialLinks.blog}>Blog</a>
        </li>
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Stack />
      <Credentials />
      <Contact />
    </>
  );
}
