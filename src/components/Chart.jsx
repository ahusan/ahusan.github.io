import { memo } from 'react';

// A stylised nautical chart of the central Maldives. Atoll positions are real
// (lat/lon); their reef outlines are generated, seeded so they never change.
// 1 viewBox unit = 0.01°. West edge 72.4°E, north edge 5.4°N. The visible window
// (VY..VY+VH, matching the 6:5 frame) is centred a little north of Malé.
const W = 160;
const H = 280;
const LON0 = 72.4;
const LAT0 = 5.4;
const x = lon => (lon - LON0) * 100;
const y = lat => (LAT0 - lat) * 100;
const VY = y(4.95);
const VH = (W * 5) / 6;

export const MALE = { lat: 4.175, lon: 73.509 };

// viewBox units -> degrees, for the cursor readout.
export const toLatLon = (vx, vy) => ({ lat: LAT0 - vy / 100, lon: LON0 + vx / 100 });

// 4.175 -> "4°10.50′N"
export const fmt = (deg, pos, neg) => {
  const a = Math.abs(deg);
  const d = Math.floor(a);
  return `${d}°${((a - d) * 60).toFixed(2).padStart(5, '0')}′${deg >= 0 ? pos : neg}`;
};

// Bearing (°) and range (nautical miles) from a position to Malé. Flat-earth
// approximation; at this scale it's off by well under 1%.
export function bearingRange({ lat, lon }) {
  const dy = (MALE.lat - lat) * 60;
  const dx = (MALE.lon - lon) * 60 * Math.cos((lat * Math.PI) / 180);
  const brg = ((Math.atan2(dx, dy) * 180) / Math.PI + 360) % 360;
  return { brg: Math.round(brg), rng: Math.hypot(dx, dy) };
}

// Traceroute path: from the visitor (off the north-west corner) across the atolls to Malé.
// One hop per role, oldest first; the last hop is Malé.
const ROUTE = [
  [4.97, 72.38],
  [4.83, 72.98],
  [4.31, 73.03],
  [4.06, 73.24],
  [4.45, 73.36],
  [MALE.lat, MALE.lon],
];
export const HOP_MS = 700;

// [name, lat, lon, rx°, ry°, rotation°]
const ATOLLS = [
  ['Maalhosmadulu', 5.6, 72.95, 0.2, 0.35, 10],
  ['Faadhippolhu', 5.38, 73.5, 0.14, 0.16, -10],
  ['Baa', 5.1, 73.0, 0.17, 0.22, 5],
  ['Goidhoo', 4.88, 72.95, 0.07, 0.08, 0],
  ['Kaashidhoo', 4.95, 73.46, 0.025, 0.03, 0],
  ['North Malé', 4.43, 73.5, 0.16, 0.25, 8],
  ['Rasdhoo', 4.27, 72.99, 0.045, 0.05, 0],
  ['Ari', 3.85, 72.85, 0.19, 0.44, 18],
  ['South Malé', 3.9, 73.42, 0.09, 0.17, -5],
  ['Felidhoo', 3.5, 73.6, 0.15, 0.2, 30],
  ['North Nilandhe', 3.2, 72.92, 0.12, 0.15, 0],
  ['Mulaku', 2.95, 73.55, 0.11, 0.24, 10],
  ['South Nilandhe', 2.8, 72.92, 0.12, 0.14, 0],
];

function rng(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A wobbly closed ring: radius varies with a few low-frequency sine terms.
function ring(cx, cy, rx, ry, rot, scale, waves) {
  const pts = [];
  const steps = 72;
  const r = (rot * Math.PI) / 180;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const k = waves.reduce((s, [amp, freq, phase]) => s + amp * Math.sin(freq * t + phase), 1);
    const px = Math.cos(t) * rx * scale * k;
    const py = Math.sin(t) * ry * scale * k;
    pts.push([cx + px * Math.cos(r) - py * Math.sin(r), cy + px * Math.sin(r) + py * Math.cos(r)]);
  }
  return `M${pts.map(p => p.map(n => n.toFixed(2)).join(' ')).join('L')}Z`;
}

const rand = rng(20160201);

const atolls = ATOLLS.map(([name, lat, lon, rxd, ryd, rot]) => {
  const cx = x(lon);
  const cy = y(lat);
  const rx = rxd * 100;
  const ry = ryd * 100;
  const waves = [1, 2, 3].map(() => [0.04 + rand() * 0.06, 2 + Math.floor(rand() * 5), rand() * 6]);
  const islands = Array.from({ length: Math.round(4 + rx / 3) }, () => {
    const t = rand() * Math.PI * 2;
    return { t, size: 0.5 + rand() * 1.1 };
  });
  const d = Math.hypot(lon - MALE.lon, lat - MALE.lat);
  return {
    name,
    delay: d * 0.9,
    reef: ring(cx, cy, rx, ry, rot, 1, waves),
    lagoon: ring(cx, cy, rx, ry, rot, 0.86, waves),
    contours: [1.18, 1.42, 1.75].map(s => ring(cx, cy, rx, ry, rot, s, waves)),
    islands: islands.map(({ t, size }) => {
      const r = (rot * Math.PI) / 180;
      const px = Math.cos(t) * rx * 0.94;
      const py = Math.sin(t) * ry * 0.94;
      return {
        cx: cx + px * Math.cos(r) - py * Math.sin(r),
        cy: cy + px * Math.sin(r) + py * Math.cos(r),
        size,
      };
    }),
  };
});

// Open-water depth soundings, kept clear of the atolls.
const soundings = [];
while (soundings.length < 22) {
  const sx = 4 + rand() * (W - 8);
  const sy = VY + 6 + rand() * (VH - 12);
  const clear = ATOLLS.every(
    ([, lat, lon, rxd, ryd]) => Math.hypot((sx - x(lon)) / (rxd * 190), (sy - y(lat)) / (ryd * 190)) > 1
  );
  const spaced = soundings.every(o => Math.hypot(o.sx - sx, o.sy - sy) > 14);
  if (clear && spaced) soundings.push({ sx, sy, depth: Math.round(300 + rand() * 2400) });
}

const LAT_TICKS = [4.5, 4];
const LON_TICKS = [72.5, 73, 73.5];
const dms = v => `${Math.floor(v)}°${String(Math.round((v % 1) * 60)).padStart(2, '0')}′`;

function Route() {
  return (
    <g className="chart-route">
      {ROUTE.slice(1).map(([lat, lon], i) => {
        const [plat, plon] = ROUTE[i];
        const delay = { '--i': i };
        return (
          <g key={i}>
            <path
              className="chart-route-leg"
              d={`M${x(plon)} ${y(plat)}L${x(lon)} ${y(lat)}`}
              pathLength="1"
              style={delay}
            />
            <circle className="chart-route-hop" cx={x(lon)} cy={y(lat)} r="1.4" style={delay} />
          </g>
        );
      })}
    </g>
  );
}

function Chart({ trace = 0, ...svgProps }) {
  return (
    <svg
      {...svgProps}
      className="chart"
      viewBox={`0 ${VY} ${W} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Chart of the central Maldives atolls with Malé marked"
    >
      <g className="chart-sea">
        {LAT_TICKS.map(lat => (
          <line key={lat} className="chart-grid" x1="0" x2={W} y1={y(lat)} y2={y(lat)} />
        ))}
        {LON_TICKS.map(lon => (
          <line key={lon} className="chart-grid" y1="0" y2={H} x1={x(lon)} x2={x(lon)} />
        ))}
        {soundings.map(({ sx, sy, depth }, i) => (
          <text key={i} className="chart-sounding" x={sx} y={sy}>
            {depth}
          </text>
        ))}
      </g>

      {atolls.map(a => (
        <g key={a.name} className="chart-atoll" style={{ '--delay': `${a.delay}s` }}>
          {a.contours.map((d, i) => (
            <path key={i} className={`chart-contour chart-contour-${i}`} d={d} pathLength="1" />
          ))}
          <path className="chart-reef" d={`${a.reef}${a.lagoon}`} fillRule="evenodd" />
          <path className="chart-reef-edge" d={a.reef} pathLength="1" />
          {a.islands.map((s, i) => (
            <ellipse key={i} className="chart-island" cx={s.cx} cy={s.cy} rx={s.size} ry={s.size * 0.6} />
          ))}
        </g>
      ))}

      {trace > 0 && <Route key={trace} />}

      <g className="chart-marker" transform={`translate(${x(MALE.lon)} ${y(MALE.lat)})`}>
        <circle className="chart-marker-ring" r="3.2" />
        <circle className="chart-marker-dot" r="0.9" />
        <text className="chart-label" x="5" y="1.2">
          Malé
        </text>
        <text className="chart-sublabel" x="5" y="5">
          4°10′ N 73°30′ E
        </text>
      </g>

      <g className="chart-graticule">
        {LAT_TICKS.map(lat => (
          <text key={lat} x="2" y={y(lat) - 1}>
            {dms(lat)} N
          </text>
        ))}
        {LON_TICKS.map(lon => (
          <text key={lon} x={x(lon) + 1} y={VY + VH - 2}>
            {dms(lon)} E
          </text>
        ))}
      </g>
    </svg>
  );
}

export default memo(Chart);
