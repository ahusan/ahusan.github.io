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

const DEMO = 'traceroute ahusan';
const finePointer = () => window.matchMedia('(pointer: fine)').matches;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

// Stable keys so the live log doesn't re-announce old lines once it starts trimming.
let lineId = 0;
const WELCOME = [{ id: 0, kind: 'out', text: 'Plotter ready. Type help, or pick a command below.' }];

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
  const touched = useRef(false);
  const time = useMaleTime();

  const print = (...out) => setLines(prev => [...prev, ...out.map(l => ({ ...l, id: ++lineId }))].slice(-80));
  const out = text => ({ kind: 'out', text });

  useEffect(() => {
    logRef.current?.scrollTo(0, logRef.current.scrollHeight);
  }, [lines]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // First visit per session: once the reefs have drawn, type and run the traceroute.
  // Any key, click, scroll or wheel anywhere cancels it. Focus only moves to the prompt
  // if nothing else has focus and the panel is fully on screen.
  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem('plotter-demo') === '1';
    } catch {
      // No storage: skip the demo rather than replay it on every visit.
    }
    if (seen || reducedMotion()) return;
    const cancel = () => (touched.current = true);
    const events = ['keydown', 'pointerdown', 'wheel', 'scroll', 'touchstart'];
    events.forEach(ev => window.addEventListener(ev, cancel, { passive: true }));
    const ids = [];
    const later = (fn, ms) => ids.push(setTimeout(() => touched.current || fn(), ms));
    const start = 2200;
    for (let i = 1; i <= DEMO.length; i++) later(() => setInput(DEMO.slice(0, i)), start + i * 55);
    later(() => {
      try {
        sessionStorage.setItem('plotter-demo', '1');
      } catch {
        // Ignore: see above.
      }
      setInput('');
      runRef.current(DEMO);
      const box = inputRef.current?.closest('.plotter')?.getBoundingClientRect();
      const onScreen = box && box.top >= 0 && box.bottom <= window.innerHeight;
      if (finePointer() && onScreen && document.activeElement === document.body) {
        inputRef.current.focus({ preventScroll: true });
      }
    }, start + DEMO.length * 55 + 350);
    return () => {
      ids.forEach(clearTimeout);
      events.forEach(ev => window.removeEventListener(ev, cancel));
    };
  }, []);

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
    print(out(`traceroute to ahusan, ${hops.length} hops max`));
    setTrace(t => t + 1);
    timers.current = hops.map((role, i) =>
      setTimeout(() => {
        const label = `${String(i + 1).padStart(2)}  ${host(role.website).padEnd(23)}${shortPeriod(role.period)}`;
        print(out(i === hops.length - 1 ? `${label}  ← here` : label));
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

  const runRef = useRef(run);
  runRef.current = run;

  function onKeyDown(e) {
    const h = history.current;
    if (e.key === 'Escape') return e.currentTarget.blur();
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      h.at = Math.max(0, Math.min(h.list.length, h.at + (e.key === 'ArrowUp' ? -1 : 1)));
      setInput(h.list[h.at] || '');
    } else if (e.key === 'Tab' && !e.shiftKey && input) {
      const [cmd, rest] = input.split(/\s+(.*)/);
      const pool = rest !== undefined && ['open', 'cd'].includes(cmd) ? projects.map(p => `${cmd} ${p.id}`) : Object.keys(COMMANDS);
      const match = pool.find(c => c.startsWith(input));
      // Only swallow Tab when it completes something; otherwise it moves focus as usual.
      if (match && match !== input) {
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
      <div className="plotter-bar">
        <span>Central Maldives, soundings in metres</span>
        <span>
          Malé <span className="plotter-clock">{time}</span> UTC+5
        </span>
      </div>
      <div className="plotter-body">
        <div className="plotter-chart">
          <figure className="hero-chart" onPointerMove={onPointerMove} onPointerLeave={() => setPos(MALE)}>
            <Chart trace={trace} />
          </figure>
          <div className="readout" aria-hidden="true">
            <span>
              {fmt(pos.lat, 'N', 'S')} {fmt(pos.lon, 'E', 'W')}
            </span>
            <span>
              {rng < 0.5 ? 'At Malé' : `BRG ${String(brg).padStart(3, '0')}° RNG ${rng.toFixed(1)} nm to Malé`}
            </span>
          </div>
        </div>
        <section
          className="console"
          aria-label="Console"
          onClick={e => e.target.closest('button') || inputRef.current?.focus()}
        >
          <div className="console-log" ref={logRef} role="log">
            {lines.map(l => (
              <p key={l.id} className={`console-${l.kind}`}>
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
    </div>
  );
}
