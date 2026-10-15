import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { experience, personal, projects, shortPeriod, skills } from '../data/portfolioData';
import { setTheme, useTheme } from '../theme';
import { HOP_MS, MALE, fmt } from './Chart';

// A small shell that drives the page. The story stage also calls run() as you scroll,
// the way animejs.com swaps its code card per section.

const host = url => new URL(url).hostname.replace(/^www\./, '');

const COMMANDS = {
  help: 'list commands',
  whoami: 'who is this',
  ls: 'list projects',
  cat: 'show a project, e.g. cat farudhun',
  open: 'open a project page',
  experience: 'where I have worked',
  stack: 'tools I use',
  traceroute: 'trace my career to Malé',
  ping: 'check if I am around',
  theme: 'switch day or night',
  resume: 'download my résumé',
  contact: 'get in touch',
  clear: 'clear the console',
};

const CHIPS = ['help', 'ls', 'traceroute ahusan', 'theme'];

// Stable keys so the log doesn't re-announce old lines once it starts trimming.
let lineId = 0;
const WELCOME = [{ id: 0, kind: 'out', text: 'Type help, or scroll and watch.' }];

function findProject(query) {
  const q = query.toLowerCase();
  return projects.find(p => p.id === q) || projects.find(p => p.id.includes(q) || p.name.toLowerCase().includes(q));
}

const Console = forwardRef(function Console({ onTrace, readout }, ref) {
  const navigate = useNavigate();
  const theme = useTheme();
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  // Lines printed by scrolling stay quiet for screen readers until someone uses the console.
  const [used, setUsed] = useState(false);
  const history = useRef({ list: [], at: 0 });
  const timers = useRef([]);
  const logRef = useRef(null);
  const inputRef = useRef(null);

  const print = (...out) => setLines(prev => [...prev, ...out.map(l => ({ ...l, id: ++lineId }))].slice(-80));
  const out = text => ({ kind: 'out', text });

  useEffect(() => {
    logRef.current?.scrollTo(0, logRef.current.scrollHeight);
  }, [lines]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // "/" focuses the console from anywhere on the page.
  useEffect(() => {
    const onKey = e => {
      if (e.key !== '/' || e.target.closest('input, textarea, [contenteditable]')) return;
      if (!inputRef.current?.offsetParent) return; // hidden on small screens
      e.preventDefault();
      inputRef.current.focus({ preventScroll: true });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function traceroute() {
    timers.current.forEach(clearTimeout);
    const hops = [...experience].reverse();
    print(out(`traceroute to ahusan, ${hops.length} hops max`));
    onTrace?.();
    timers.current = hops.map((role, i) =>
      setTimeout(() => {
        const label = `${String(i + 1).padStart(2)}  ${host(role.website).padEnd(23)}${shortPeriod(role.period)}`;
        print(out(i === hops.length - 1 ? `${label}  ← here` : label));
      }, (i + 1) * HOP_MS)
    );
  }

  function run(raw) {
    // A new command interrupts a traceroute that's still printing.
    timers.current.forEach(clearTimeout);
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
      case 'cat':
      case 'open':
      case 'cd': {
        if (!arg) return print({ kind: 'err', text: `usage: ${cmd} <project>. Try ls first.` });
        const project = findProject(arg);
        if (!project) return print({ kind: 'err', text: `no project matching "${arg}". Try ls.` });
        if (cmd === 'cat') {
          return print(
            out(`name     ${project.name}`),
            out(`when     ${shortPeriod(project.period)}`),
            out(`role     ${project.role}`),
            out(`stack    ${project.technologies.slice(0, 4).join(', ')}`),
            ...project.caseStudy.metrics.map(m => out(`metric   ${m.value} ${m.label}`)),
            out(`result   ${project.caseStudy.outcome}`)
          );
        }
        print(out(`opening ${project.name}…`));
        return navigate(`/project/${project.id}`);
      }
      case 'experience':
        return print(...experience.map(r => out(`${shortPeriod(r.period).padEnd(11)}${r.position}, ${r.company}`)));
      case 'stack':
        return print(...skills.map(s => out(`${s.name.padEnd(26)}${s.items.length}`)));
      case 'traceroute':
      case 'tracert':
        return traceroute();
      case 'ping':
        return print(
          out(`PING ahusan (${fmt(MALE.lat, 'N', 'S')} ${fmt(MALE.lon, 'E', 'W')})`),
          out(`reply from ${personal.email}: time<1 day`),
          out('1 packet sent, 1 reply expected. Type contact.')
        );
      case 'theme': {
        const next = ['day', 'night'].includes(arg) ? arg : theme === 'day' ? 'night' : 'day';
        setTheme(next);
        return print(out(`${next} display`));
      }
      case 'resume': {
        print(out('downloading résumé.pdf'));
        const a = Object.assign(document.createElement('a'), { href: personal.resume, download: '' });
        return a.click();
      }
      case 'contact':
      case 'email':
        print(out(`${personal.email}, opening your mail app`));
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

  useImperativeHandle(ref, () => ({ run }));

  function userRun(cmd) {
    setUsed(true);
    run(cmd);
  }

  function onKeyDown(e) {
    const h = history.current;
    if (e.key === 'Escape') return e.currentTarget.blur();
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      h.at = Math.max(0, Math.min(h.list.length, h.at + (e.key === 'ArrowUp' ? -1 : 1)));
      setInput(h.list[h.at] || '');
    } else if (e.key === 'Tab' && !e.shiftKey && input) {
      const [cmd, rest] = input.split(/\s+(.*)/);
      const pool =
        rest !== undefined && ['open', 'cd', 'cat'].includes(cmd) ? projects.map(p => `${cmd} ${p.id}`) : Object.keys(COMMANDS);
      const match = pool.find(c => c.startsWith(input));
      // Only swallow Tab when it completes something; otherwise it moves focus as usual.
      if (match && match !== input) {
        e.preventDefault();
        setInput(match);
      }
    }
  }

  return (
    <section
      className="console"
      aria-label="Console"
      onClick={e => e.target.closest('button') || inputRef.current?.focus()}
    >
      <div className="console-head" aria-hidden="true">
        {readout}
      </div>
      <div className="console-log" ref={logRef} role="log" aria-live={used ? 'polite' : 'off'}>
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
          userRun(input);
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
          <button key={c} type="button" onClick={() => userRun(c)}>
            {c}
          </button>
        ))}
      </div>
    </section>
  );
});

export default Console;
