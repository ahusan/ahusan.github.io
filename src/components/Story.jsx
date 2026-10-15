import { animate, scrambleText, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { experience, featuredProjects, personal, shortPeriod, skills } from '../data/portfolioData';
import { MALE, bearingRange, fmt } from './Chart';
import Console from './Console';
import Radar from './Radar';

// The home page as a scroll story, after animejs.com: chapters scroll on the left while
// a pinned radar and console on the right follow along. Each chapter has a colour (its
// segment on the radar ring), a display kind, and a console command run on arrival.

const PROJECT_COLORS = ['#ff5a5a', '#ff9f43', '#ffd84d', '#6fe08c'];

const CHAPTERS = [
  { id: 'top', color: '#ff4fae', kind: 'chart', cmd: 'whoami' },
  ...featuredProjects.map((p, i) => ({
    id: i === 0 ? 'work' : p.id,
    color: PROJECT_COLORS[i % PROJECT_COLORS.length],
    kind: 'project',
    image: p.images[0],
    cmd: `cat ${p.id}`,
    project: p,
  })),
  { id: 'experience', color: '#3ad4e6', kind: 'route', cmd: 'traceroute ahusan' },
  { id: 'stack', color: '#5b8cff', kind: 'grid', cmd: 'stack' },
  { id: 'contact', color: '#b07cff', kind: 'ping', cmd: 'ping ahusan' },
];

const SCRAMBLE = '01<>/{}#$%&*+=?';
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const host = url => new URL(url).hostname.replace(/^www\./, '');

const clock = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Indian/Maldives',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

function useMaleTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return clock.format(now);
}

function Intro() {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <h1>Ahusan Mohamed</h1>
      <p className="chapter-lede">
        Senior developer at Allied Insurance in Malé. Over ten years I’ve gone from fixing networks and servers to
        building the software that runs on them: banking systems, a national news site, resort reservations and
        workflow platforms.
      </p>
      <div className="hero-actions">
        <button
          type="button"
          className="copy-chip"
          onClick={() =>
            navigator.clipboard?.writeText(personal.email).then(
              () => setCopied(true),
              () => (window.location.href = personal.socialLinks.email)
            )
          }
        >
          <span>{personal.email}</span>
          <span className="copy-chip-state">{copied ? 'Copied' : 'Copy'}</span>
        </button>
        <a className="button" href={personal.resume} download>
          Download résumé
        </a>
      </div>
      <p className="chapter-hint">
        Scroll to explore. The radar and console follow along; press <kbd>/</kbd> to type your own commands.
      </p>
    </>
  );
}

function ProjectChapter({ project }) {
  return (
    <>
      <h2 className="chapter-title">{project.name}</h2>
      <p className="chapter-lede">{project.summary}</p>
      <hr />
      <ul className="chapter-points">
        {(project.features || [project.description]).slice(0, 3).map(f => (
          <li key={f}>{f.replace(/\s*\(.*?\)/g, '')}</li>
        ))}
      </ul>
      <p className="meta">{[project.role, shortPeriod(project.period)].filter(Boolean).join(', ')}</p>
      <p className="stack-line">{project.technologies.slice(0, 6).join(', ')}</p>
      <div className="chapter-links">
        <Link to={`/project/${project.id}`}>Read the case study</Link>
        {project.links?.live && (
          <a href={project.links.live} target="_blank" rel="noreferrer">
            {host(project.links.live)}
          </a>
        )}
      </div>
    </>
  );
}

function ExperienceChapter() {
  return (
    <>
      <h2 className="chapter-title">Where I’ve worked</h2>
      <p className="chapter-lede">Every role in the Maldives, each one closer to the code.</p>
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
            <p className="waypoint-note">{(role.achievements || role.responsibilities)[0]}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

function StackChapter() {
  return (
    <>
      <h2 className="chapter-title">Stack</h2>
      <p className="chapter-lede">What I reach for, from the database to the network cable.</p>
      <dl className="stack-grid">
        {skills.map(group => (
          <div key={group.name}>
            <dt>{group.name}</dt>
            <dd>{group.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}

function ContactChapter() {
  const { socialLinks, email } = personal;
  return (
    <>
      <h2 className="chapter-title">Have a system that needs building, or rescuing?</h2>
      <p className="chapter-lede">I’m happy to talk about roles, contracts and hard problems.</p>
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
    </>
  );
}

function ChapterBody({ chapter }) {
  if (chapter.kind === 'project') return <ProjectChapter project={chapter.project} />;
  if (chapter.id === 'experience') return <ExperienceChapter />;
  if (chapter.id === 'stack') return <StackChapter />;
  if (chapter.id === 'contact') return <ContactChapter />;
  return <Intro />;
}

const TICK_COUNT = 64;

export default function Story() {
  const [active, setActive] = useState(0);
  const [trace, setTrace] = useState(0);
  const [pos, setPos] = useState(null);
  const [progress, setProgress] = useState(0);
  const storyRef = useRef(null);
  const chapterRefs = useRef([]);
  const consoleRef = useRef(null);
  const time = useMaleTime();

  // The chapter crossing the middle of the viewport is the active one.
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(Number(e.target.dataset.index))),
      { rootMargin: '-50% 0px -50% 0px' }
    );
    chapterRefs.current.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll progress through the story, for the scrubber.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = storyRef.current;
      const total = el.offsetHeight - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -el.getBoundingClientRect().top / total)));
    };
    const onScroll = () => frame || (frame = requestAnimationFrame(update));
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Warm the cache so project screenshots are ready when the radar swaps to them.
  useEffect(() => {
    CHAPTERS.forEach(ch => ch.image && (new Image().src = ch.image));
  }, []);

  // On arrival: run the chapter's command (unless someone is typing) and scramble its title in.
  useEffect(() => {
    const chapter = CHAPTERS[active];
    if (document.activeElement?.id !== 'console-cmd') consoleRef.current?.run(chapter.cmd);
    if (reducedMotion()) return;
    const el = chapterRefs.current[active];
    const anims = [];
    const title = el.querySelector('.chapter-title');
    if (title) anims.push(animate(title, { innerHTML: scrambleText({ chars: SCRAMBLE }), duration: 700 }));
    const points = el.querySelectorAll('.chapter-points li, .waypoint, .stack-grid > div');
    if (points.length) anims.push(animate(points, { opacity: [0, 1], x: [-14, 0], delay: stagger(60), duration: 500, ease: 'outQuad' }));
    // Revert, not pause: a half-finished entrance must not leave text scrambled or faded.
    return () => anims.forEach(a => a.revert());
  }, [active]);

  function jump(e) {
    const box = e.currentTarget.getBoundingClientRect();
    const el = storyRef.current;
    const total = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((e.clientX - box.left) / box.width) * total });
  }

  const shown = pos || MALE;
  const { brg, rng } = bearingRange(shown);
  const readout = (
    <>
      <span>
        {fmt(shown.lat, 'N', 'S')} {fmt(shown.lon, 'E', 'W')}
      </span>
      <span>{rng < 0.5 ? 'Malé' : `BRG ${String(brg).padStart(3, '0')}° RNG ${rng.toFixed(1)} nm`}</span>
    </>
  );

  return (
    <section className="story" ref={storyRef} style={{ '--chapter': CHAPTERS[active].color }}>
      <div className="story-stage">
        <p className="stage-channel" aria-hidden="true">
          {String(active + 1).padStart(2, '0')} / {String(CHAPTERS.length).padStart(2, '0')}
        </p>
        <p className="stage-clock">
          Malé <span>{time}</span> UTC+5
        </p>
        <Radar chapters={CHAPTERS} active={active} trace={trace} onPosition={setPos} />
        <div className="stage-dock">
          <Console ref={consoleRef} onTrace={() => setTrace(t => t + 1)} readout={readout} />
          <div className="scrubber" onClick={jump} role="presentation">
            {Array.from({ length: TICK_COUNT }, (_, i) => (
              <span key={i} className={i % 8 ? '' : 'scrubber-major'} />
            ))}
            <span className="scrubber-head" style={{ '--p': progress }} />
          </div>
        </div>
      </div>
      <div className="story-chapters">
        {CHAPTERS.map((chapter, i) => (
          <article
            key={chapter.id}
            id={chapter.id}
            ref={el => (chapterRefs.current[i] = el)}
            data-index={i}
            className={`chapter${i === active ? ' is-active' : ''}`}
            style={{ '--chapter': chapter.color }}
          >
            <ChapterBody chapter={chapter} />
          </article>
        ))}
      </div>
    </section>
  );
}
