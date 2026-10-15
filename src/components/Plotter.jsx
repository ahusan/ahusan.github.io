import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { experience, personal, projects, shortPeriod, skills } from '../data/portfolioData';
import { setTheme, useTheme } from '../theme';
import Chart, { HOP_MS, MALE, toLatLon } from './Chart';

// The hero chart as a chart plotter: live cursor position, bearing and range to Malé,
// and a small console that drives the page.

const fmt = (deg, pos, neg) => {
  const a = Math.abs(deg);
  const d = Math.floor(a);
  return `${d}°${((a - d) * 60).toFixed(2).padStart(5, '0')}′${deg >= 0 ? pos : neg}`;
};

// Flat-earth approximation; at this scale it's off by well under 1%.
function bearingRange({ lat, lon }) {
  const dy = (MALE.lat - lat) * 60;
  const dx = (MALE.lon - lon) * 60 * Math.cos((lat * Math.PI) / 180);
  const brg = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
  return { brg: Math.round(brg), rng: Math.hypot(dx, dy) };
}

const host = url => new URL(url).hostname.replace(/^www\./, '');

const COMMANDS = {
  help: 'list commands',
  whoami: 'who is this',
  ls: 'list projects',
  open: 'open a project, e.g. open farudhun',
  experience: 'where I have worked',
  stack: 'tools I use',
  traceroute: 'trace my career to Malé',
  theme: 'switch day or night chart',
  resume: 'download my résumé',
  contact: 'get in touch',
  clear: 'clear the console',
};

const CHIPS = ['help', 'traceroute ahusan', 'ls', 'whoami', 'theme'];

const WELCOME = [{ kind: 'out', text: 'Plotter ready. Type help, or pick a command below.' }];

function findProject(query) {
  const q = query.toLowerCase();
  return projects.find(p => p.id === q) || projects.find(p => p.id.includes(q) || p.name.toLowerCase().includes(q));
}

export default function Plotter() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [pos, setPos] = useState(MALE);
  const [trace, setTrace] = useState(0);
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const history = useRef({ list: [], at: 0 });
  const timers = useRef([]);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  const print = (...out) => setLines(prev => [...prev, ...out].slice(-80));
  const out = text => ({ kind: 'out', text });

  useEffect(() => {
    logRef.current?.scrollTo(0, logRef.current.scrollHeight);
  }, [lines]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // "/" focuses the console from anywhere on the page.
  useEffect(() => {
    const onKey = e => {
      if (e.key !== '/' || e.target.closest('input, textarea, [contenteditable]')) return;
      e.preventDefault();
      inputRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function traceroute() {
    timers.current.forEach(clearTimeout);
    const hops = [...experience].reverse();
    print(out(`traceroute to ahusan (${fmt(MALE.lat, 'N', 'S')} ${fmt(MALE.lon, 'E', 'W')}), ${hops.length} hops max`));
    setTrace(t => t + 1);
    timers.current = hops.map((role, i) =>
      setTimeout(() => {
        const label = `${String(i + 1).padStart(2)}  ${host(role.website).padEnd(23)}${shortPeriod(role.period).padEnd(10)}`;
        print(out(i === hops.length - 1 ? `${label}  ← you are here` : label));
      }, (i + 1) * HOP_MS)
    );
  }

  function run(raw) {
    const line = raw.trim();
    print({ kind: 'cmd', text: line });
    if (!line) return;
    history.current = { list: [...history.current.list, line], at: history.current.list.length + 1 };
    const [cmd, ...args] = line.split(/\s+/);
    const arg = args.join(' ');

    switch (cmd.toLowerCase()) {
      case 'help':
        return print(...Object.entries(COMMANDS).map(([c, d]) => out(`${c.padEnd(12)}${d}`)));
      case 'whoami':
        return print(out(`${personal.name}, ${personal.title.toLowerCase()} in ${personal.location}.`), out(personal.bio));
      case 'ls':
        return print(...projects.map(p => out(`${p.id.padEnd(32)}${shortPeriod(p.period)}`)));
      case 'open':
      case 'cd': {
        if (!arg) return print({ kind: 'err', text: 'usage: open <project>. Try ls first.' });
        const project = findProject(arg);
        if (!project) return print({ kind: 'err', text: `no project matching "${arg}". Try ls.` });
        print(out(`opening ${project.name}…`));
        return navigate(`/project/${project.id}`);
      }
      case 'experience':
        return print(...experience.map(r => out(`${shortPeriod(r.period).padEnd(11)}${r.position}, ${r.company}`)));
      case 'stack':
        return print(...skills.map(s => out(`${s.name}: ${s.items.join(', ')}`)));
      case 'traceroute':
      case 'tracert':
        return traceroute();
      case 'ping':
        return print(out(`64 bytes from ahusan: icmp_seq=1 ttl=64 time=<1 day. Reply by email: ${personal.email}`));
      case 'theme': {
        const next = ['day', 'night'].includes(arg) ? arg : theme === 'day' ? 'night' : 'day';
        setTheme(next);
        return print(out(`${next} chart`));
      }
      case 'resume': {
        print(out('downloading résumé.pdf'));
        const a = Object.assign(document.createElement('a'), { href: personal.resume, download: '' });
        return a.click();
      }
      case 'contact':
      case 'email':
        print(out(`${personal.email}  ·  opening your mail app`));
        window.location.href = personal.socialLinks.email;
        return;
      case 'clear':
        timers.current.forEach(clearTimeout);
        return setLines([]);
      case 'sudo':
        return print({ kind: 'err', text: 'ahusan is not in the sudoers file. This incident will be reported.' });
      case 'exit':
        return print(out('There is no exit. There is only contact.'));
      default:
        return print({ kind: 'err', text: `command not found: ${cmd}. Type help.` });
    }
  }

  function onKeyDown(e) {
    const h = history.current;
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      h.at = Math.max(0, Math.min(h.list.length, h.at + (e.key === 'ArrowUp' ? -1 : 1)));
      setInput(h.list[h.at] || '');
    } else if (e.key === 'Tab' && input) {
      const [cmd, rest] = input.split(/\s+(.*)/);
      const pool = rest !== undefined && ['open', 'cd'].includes(cmd) ? projects.map(p => `${cmd} ${p.id}`) : Object.keys(COMMANDS);
      const match = pool.find(c => c.startsWith(input));
      if (match) {
        e.preventDefault();
        setInput(match);
      }
    }
  }

  function onPointerMove(e) {
    const svg = e.currentTarget.querySelector('svg');
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    setPos(toLatLon(p.x, p.y));
  }

  const { brg, rng } = bearingRange(pos);

  return (
    <div className="plotter">
      <figure className="hero-chart" onPointerMove={onPointerMove} onPointerLeave={() => setPos(MALE)}>
        <Chart trace={trace} />
        <figcaption>
          <span>Central Maldives</span>
          <span>Soundings in metres</span>
        </figcaption>
      </figure>
      <div className="readout" aria-hidden="true">
        <span>
          {fmt(pos.lat, 'N', 'S')} {fmt(pos.lon, 'E', 'W')}
        </span>
        <span>{rng < 0.5 ? 'At Malé' : `BRG ${String(brg).padStart(3, '0')}° RNG ${rng.toFixed(1)} nm to Malé`}</span>
      </div>
      <section className="console" aria-label="Console" onClick={e => e.target.closest('button') || inputRef.current?.focus()}>
        <div className="console-log" ref={logRef} aria-live="polite">
          {lines.map((l, i) => (
            <p key={i} className={`console-${l.kind}`}>
              {l.text}
            </p>
          ))}
        </div>
        <form
          className="console-input"
          onSubmit={e => {
            e.preventDefault();
            run(input);
            setInput('');
          }}
        >
          <label htmlFor="console-cmd">ahusan@male:~$</label>
          <input
            id="console-cmd"
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="press / to type"
          />
        </form>
        <div className="console-chips">
          {CHIPS.map(c => (
            <button key={c} type="button" onClick={() => run(c)}>
              {c}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
