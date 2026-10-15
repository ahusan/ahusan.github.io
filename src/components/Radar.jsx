import { animate, createTimeline, stagger, utils } from 'animejs';
import { useEffect, useRef } from 'react';
import Chart, { toLatLon } from './Chart';

// A radar scope in the spirit of the animejs.com dial: a ring segment per chapter,
// bearing ticks, and a display that morphs to the active chapter.
// Chapter kinds: chart (sweep over the atolls), project (screenshot revealed through
// a staggered dot grid), route (traceroute over the chart), grid (pulsing dots), ping.

const C = 250;
const DISPLAY = 186;
const N = 15; // dot grid is N x N
const GAP = 24;

const polar = (r, deg) => {
  const t = (deg * Math.PI) / 180;
  return [C + r * Math.sin(t), C - r * Math.cos(t)];
};

const arc = (r, a0, a1) => {
  const [x0, y0] = polar(r, a0);
  const [x1, y1] = polar(r, a1);
  return `M${x0.toFixed(2)} ${y0.toFixed(2)}A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
};

const TICKS = Array.from({ length: 180 }, (_, i) => {
  const deg = i * 2;
  const [x0, y0] = polar(214, deg);
  const [x1, y1] = polar(i % 5 ? 207 : 199, deg);
  return `M${x0.toFixed(1)} ${y0.toFixed(1)}L${x1.toFixed(1)} ${y1.toFixed(1)}`;
}).join('');

const DOTS = Array.from({ length: N * N }, (_, i) => ({
  cx: C + ((i % N) - (N - 1) / 2) * GAP,
  cy: C + (Math.floor(i / N) - (N - 1) / 2) * GAP,
}));

// The sweep: a bright leading edge with a fading wake behind it.
const WAKE = Array.from({ length: 14 }, (_, i) => ({
  d: `M${C} ${C}L${polar(DISPLAY, -i * 3).join(' ')}A${DISPLAY} ${DISPLAY} 0 0 0 ${polar(DISPLAY, -(i + 1) * 3).join(' ')}Z`,
  opacity: 0.22 * (1 - i / 14),
}));

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Radar({ chapters, active, trace, onPosition }) {
  const rootRef = useRef(null);
  const segRefs = useRef([]);
  const chartRef = useRef(null);
  const imageRef = useRef(null);
  const dotsRef = useRef(null);
  const pingsRef = useRef(null);
  const running = useRef([]);

  useEffect(() => {
    const chapter = chapters[active];
    const root = rootRef.current;
    const dots = dotsRef.current.children;
    const pings = pingsRef.current.children;
    const image = imageRef.current;
    const chartG = chartRef.current;
    const grid = { grid: [N, N], from: 'center' };
    const calm = reducedMotion();

    running.current.forEach(a => a.pause());
    running.current = [];
    root.style.setProperty('--chapter', chapter.color);
    root.dataset.kind = chapter.kind;

    const keep = a => running.current.push(a);
    const segments = segRefs.current;
    if (calm) utils.set(segments, { opacity: (_, i) => (i === active ? 1 : 0.2) });
    else keep(animate(segments, { opacity: (_, i) => (i === active ? 1 : 0.2), duration: 500, ease: 'outQuad' }));

    if (chapter.kind === 'project') {
      const swap = () => {
        image.setAttribute('href', chapter.image);
        utils.set(image, { opacity: 1 });
        utils.set(chartG, { opacity: 0 });
      };
      utils.set(pings, { r: 0, opacity: 0 });
      if (calm) return swap();
      // Cover the display with dots from the centre out, swap the picture, then uncover.
      keep(
        createTimeline({ defaults: { ease: 'outQuad', duration: 240 } })
          .add(dots, { r: [0, 17], opacity: [0, 1], delay: stagger(12, grid) })
          .call(swap)
          .add(dots, { r: 0, opacity: 0, delay: stagger(12, grid) }, '+=60')
      );
      return;
    }

    const chartOpacity = chapter.kind === 'grid' ? 0.2 : 1;
    if (calm) {
      utils.set(image, { opacity: 0 });
      utils.set(chartG, { opacity: chartOpacity });
      utils.set(dots, { r: chapter.kind === 'grid' ? 3.2 : 0, opacity: chapter.kind === 'grid' ? 0.7 : 0 });
      utils.set(pings, { r: (_, i) => (chapter.kind === 'ping' ? 62 * (i + 1) : 0), opacity: chapter.kind === 'ping' ? 0.5 : 0 });
      return;
    }

    keep(animate(image, { opacity: 0, duration: 400 }));
    keep(animate(chartG, { opacity: chartOpacity, duration: 600 }));

    if (chapter.kind === 'grid') {
      keep(
        animate(dots, {
          r: [{ from: 0.8, to: 4.6 }, { to: 0.8 }],
          opacity: [{ from: 0.25, to: 1 }, { to: 0.25 }],
          duration: 1400,
          delay: stagger(70, grid),
          ease: 'inOutSine',
          loop: true,
        })
      );
    } else {
      keep(animate(dots, { r: 0, opacity: 0, duration: 200 }));
    }

    if (chapter.kind === 'ping') {
      keep(animate(pings, { r: [0, DISPLAY], opacity: [0.9, 0], duration: 2400, delay: stagger(800), ease: 'outCubic', loop: true }));
    } else {
      utils.set(pings, { r: 0, opacity: 0 });
    }
  }, [active, chapters]);

  useEffect(() => () => running.current.forEach(a => a.pause()), []);

  function onPointerMove(e) {
    const svg = e.currentTarget.querySelector('.chart');
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    onPosition?.(toLatLon(p.x, p.y));
  }

  const span = 360 / chapters.length;

  return (
    <svg
      ref={rootRef}
      className="radar"
      viewBox="0 0 500 500"
      onPointerMove={onPointerMove}
      onPointerLeave={() => onPosition?.(null)}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="radar-display">
          <circle cx={C} cy={C} r={DISPLAY} />
        </clipPath>
        <filter id="radar-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle className="radar-track" cx={C} cy={C} r="238" />
      {chapters.map((ch, i) => (
        <path
          key={ch.id}
          ref={el => (segRefs.current[i] = el)}
          className="radar-segment"
          d={arc(238, i * span + 1.5, (i + 1) * span - 1.5)}
          stroke={ch.color}
          filter={i === active ? 'url(#radar-glow)' : undefined}
        />
      ))}
      <path className="radar-bezel" d={arc(226, 200, 290)} />
      <path className="radar-ticks" d={TICKS} />
      <circle className="radar-display" cx={C} cy={C} r={DISPLAY} />
      <g clipPath="url(#radar-display)">
        <g ref={chartRef}>
          <Chart trace={trace} x={C - 200} y={C - 200} width="400" height="400" />
        </g>
        <image ref={imageRef} x={C - DISPLAY} y={C - DISPLAY} width={DISPLAY * 2} height={DISPLAY * 2} preserveAspectRatio="xMidYMin slice" opacity="0" />
        <g className="radar-rings">
          <circle cx={C} cy={C} r={DISPLAY / 3} />
          <circle cx={C} cy={C} r={(DISPLAY * 2) / 3} />
          <path d={`M${C} ${C - DISPLAY}V${C + DISPLAY}M${C - DISPLAY} ${C}H${C + DISPLAY}`} />
        </g>
        <g className="radar-sweep">
          {WAKE.map((w, i) => (
            <path key={i} d={w.d} opacity={w.opacity} />
          ))}
          <path className="radar-sweep-edge" d={`M${C} ${C}L${C} ${C - DISPLAY}`} />
        </g>
        <g ref={dotsRef} className="radar-dots">
          {DOTS.map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy} r="0" />
          ))}
        </g>
        <g ref={pingsRef} className="radar-pings">
          {[0, 1, 2].map(i => (
            <circle key={i} cx={C} cy={C} r="0" />
          ))}
        </g>
      </g>
      <circle className="radar-rim" cx={C} cy={C} r={DISPLAY} />
      {[0, 90, 180, 270].map(deg => {
        const [x, y] = polar(DISPLAY - 14, deg);
        return (
          <text key={deg} className="radar-bearing" x={x} y={y}>
            {String(deg).padStart(3, '0')}
          </text>
        );
      })}
    </svg>
  );
}
