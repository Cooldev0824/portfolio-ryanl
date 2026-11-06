/**
 * Glowing gold ring drawn behind the portrait. Coordinates are relative to the
 * square photo (0-100), centred on the face as in the design; the photo covers the lower arc.
 * A short bright arc orbits the ring (`ring-spin`), and the ring draws itself in on load.
 */
export function HaloRing({ className = "", uid }: { className?: string; uid: string }) {
  // Each instance needs its own ids: a gradient defined inside a display:none copy does not render.
  const id = (name: string) => `${uid}-${name}`;
  return (
    <svg aria-hidden viewBox="0 0 100 100" overflow="visible" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id={id("halo-stroke")} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#fff1c9" />
          <stop offset="0.3" stopColor="#f2bd5c" stopOpacity="0.95" />
          <stop offset="0.55" stopColor="#f2bd5c" stopOpacity="0.25" />
          <stop offset="0.8" stopColor="#f2bd5c" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={id("halo-flare")}>
          <stop offset="0" stopColor="#fff6dc" />
          <stop offset="0.35" stopColor="#ffd27a" stopOpacity="0.7" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0" />
        </radialGradient>
        <filter id={id("halo-blur")} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.3" />
        </filter>
      </defs>
      <g className="ring-draw" fill="none" stroke={`url(#${id("halo-stroke")})`}>
        <circle cx="50" cy="57" r="34.5" strokeWidth="2.8" filter={`url(#${id("halo-blur")})`} opacity="0.75" pathLength={1} />
        <circle cx="50" cy="57" r="34.5" strokeWidth="0.45" pathLength={1} />
      </g>
      {/* orbiting highlight */}
      <g className="ring-spin" style={{ transformOrigin: "50px 57px" }}>
        <circle cx="50" cy="57" r="34.5" fill="none" stroke="#fff4d6" strokeWidth="0.9" strokeLinecap="round" pathLength={100} strokeDasharray="7 93" />
      </g>
      <ellipse className="flare" cx="19" cy="69" rx="2" ry="7" fill={`url(#${id("halo-flare")})`} transform="rotate(-20 19 69)" />
      <ellipse className="flare flare-2" cx="74" cy="34" rx="1.4" ry="5" fill={`url(#${id("halo-flare")})`} opacity="0.7" transform="rotate(-40 74 34)" />
    </svg>
  );
}
