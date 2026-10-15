import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, shortPeriod } from '../data/portfolioData';
import NotFound from './NotFound';

const LINK_LABELS = {
  live: 'Visit site',
  github: 'Source on GitHub',
  npm: 'Package on npm',
  documentation: 'Documentation',
};

export default function Project() {
  const { projectId } = useParams();
  const index = projects.findIndex(p => p.id === projectId);
  const project = projects[index];

  useEffect(() => {
    if (project) document.title = `${project.name}, Ahusan Mohamed`;
    return () => {
      document.title = 'Ahusan Mohamed, senior developer in Malé';
    };
  }, [project]);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];
  const links = Object.entries(project.links || {});
  const [hero, ...gallery] = project.images || [];
  const facts = [
    ['Role', project.role],
    ['Client', project.client],
    ['When', project.period],
    ['Type', project.category],
  ].filter(([, v]) => v);

  return (
    <article className="project">
      <Link to="/#work" className="back">
        All work
      </Link>
      <header className="project-head">
        <h1>{project.name}</h1>
        <p className="project-summary">{project.summary}</p>
        <dl className="facts">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        {links.length > 0 && (
          <div className="hero-actions">
            {links.map(([kind, href], i) => (
              <a
                key={kind}
                className={i === 0 ? 'button button-primary' : 'button'}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {LINK_LABELS[kind] || kind}
              </a>
            ))}
          </div>
        )}
      </header>

      {hero && (
        <figure className="project-hero">
          <img src={hero} alt={`${project.name}, main screen`} decoding="async" />
        </figure>
      )}

      <div className="project-body">
        <div className="prose">
          {project.context && <p className="prose-lead">{project.context}</p>}
          <p>{project.description}</p>
          {(project.story || []).map(para => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          {project.outcomes && (
            <>
              <h2>Outcome</h2>
              <p>{project.outcomes}</p>
            </>
          )}
          {project.features && (
            <>
              <h2>What it does</h2>
              <ul>
                {project.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <aside className="project-aside">
          <h2>Built with</h2>
          <ul className="plain-list">
            {project.technologies.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>
      </div>

      {gallery.length > 0 && (
        <div className="gallery">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.name}, screen ${i + 2}`}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}

      <nav className="next-project" aria-label="Next project">
        <span>Next project</span>
        <Link to={`/project/${next.id}`}>
          {next.name} <small>{shortPeriod(next.period)}</small>
        </Link>
      </nav>
    </article>
  );
}
