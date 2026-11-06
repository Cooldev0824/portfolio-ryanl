/** Decorative gold light trails used behind the hero and the closing call to action. */
export function Swoosh({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      fill="none"
      className={`pointer-events-none ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <defs>
        <linearGradient id="swoosh-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f2bd5c" stopOpacity="0" />
          <stop offset="0.35" stopColor="#f2bd5c" stopOpacity="0.9" />
          <stop offset="0.7" stopColor="#ffd98a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0" />
        </linearGradient>
        <filter id="swoosh-glow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g stroke="url(#swoosh-a)" strokeLinecap="round">
        <path d="M-40 360C300 250 620 330 900 250S1300 90 1480 120" strokeWidth="6" filter="url(#swoosh-glow)" opacity="0.5" />
        <path d="M-40 360C300 250 620 330 900 250S1300 90 1480 120" strokeWidth="1.6" />
        <path d="M-40 390C320 300 640 360 940 290S1320 160 1480 175" strokeWidth="1" opacity="0.55" />
        <path d="M-40 330C260 220 560 300 860 225S1260 60 1480 70" strokeWidth="0.8" opacity="0.35" />
      </g>
    </svg>
  );
}

/** Bright glowing light streak sweeping in from the left edge of the hero. */
export function LightStreak({ className = "" }: { className?: string }) {
  const d = "M-20 18C40 96 150 150 560 192";
  return (
    <svg aria-hidden viewBox="0 0 560 220" preserveAspectRatio="xMinYMax meet" fill="none" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="streak-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffe7b0" stopOpacity="0.4" />
          <stop offset="0.1" stopColor="#fff4d6" />
          <stop offset="0.35" stopColor="#f2bd5c" stopOpacity="0.75" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0" />
        </linearGradient>
        <filter id="streak-haze" x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="streak-glow" x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <g stroke="url(#streak-g)" strokeLinecap="round">
        <path d={d} strokeWidth="18" filter="url(#streak-haze)" opacity="0.45" />
        <path d={d} strokeWidth="5" filter="url(#streak-glow)" opacity="0.9" />
        <path d={d} strokeWidth="1.6" />
      </g>
      {/* travelling pulse of light along the streak */}
      <path className="light-pulse" d={d} stroke="#fff8e6" strokeWidth="2.4" strokeLinecap="round" pathLength={100} strokeDasharray="10 90" />
      <path d="M-20 34C50 108 170 160 560 205" stroke="url(#streak-g)" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

/**
 * Golden silk waves around the closing call to action: ribbons rising in from
 * both edges behind the education row, and a bundle of fine lines flowing below.
 */
export function CtaWaves({ className = "" }: { className?: string }) {
  const silk = Array.from({ length: 14 }, (_, i) => {
    const o = i * 5;
    return `M-40 ${352 + o}C300 ${300 + o} 560 ${372 + o * 0.6} 860 ${350 + o * 0.8}S1280 ${268 + o} 1480 ${246 + o}`;
  });
  return (
    <svg aria-hidden viewBox="0 0 1440 386" preserveAspectRatio="none" fill="none" className={`pointer-events-none ${className}`}>
      <defs>
        <linearGradient id="cta-side-l" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff0c8" />
          <stop offset="0.45" stopColor="#f2bd5c" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cta-side-r" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#fff0c8" />
          <stop offset="0.45" stopColor="#f2bd5c" stopOpacity="0.85" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="cta-silk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f2bd5c" stopOpacity="0.15" />
          <stop offset="0.35" stopColor="#f6c86a" stopOpacity="0.8" />
          <stop offset="0.6" stopColor="#ffe3a6" />
          <stop offset="1" stopColor="#f2bd5c" stopOpacity="0.55" />
        </linearGradient>
        <filter id="cta-haze" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="cta-glow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>

      {/* side ribbons */}
      {[
        { d: "M-30 96C70 116 140 150 240 205", g: "url(#cta-side-l)" },
        { d: "M1470 92C1370 112 1300 146 1200 200", g: "url(#cta-side-r)" },
      ].map(({ d, g }) => (
        <g key={d} stroke={g} strokeLinecap="round">
          <path d={d} strokeWidth="26" filter="url(#cta-haze)" opacity="0.35" />
          <path d={d} strokeWidth="6" filter="url(#cta-glow)" opacity="0.85" />
          <path d={d} strokeWidth="1.6" />
          <path className="light-pulse" d={d} stroke="#fff8e6" strokeWidth="2.4" pathLength={100} strokeDasharray="14 86" />
        </g>
      ))}

      {/* silk below the box */}
      <path d={silk[0]} stroke="url(#cta-silk)" strokeWidth="40" filter="url(#cta-haze)" opacity="0.35" />
      <path d={silk[0]} stroke="url(#cta-silk)" strokeWidth="6" filter="url(#cta-glow)" opacity="0.9" />
      <g className="silk-sway">
        {silk.map((d, i) => (
          <path key={d} d={d} stroke="url(#cta-silk)" strokeWidth={i === 0 ? 1.8 : 0.8} opacity={1 - i * 0.06} />
        ))}
      </g>
      <path className="light-pulse light-pulse-slow" d={silk[0]} stroke="#fff8e6" strokeWidth="2.6" strokeLinecap="round" pathLength={100} strokeDasharray="8 92" />
    </svg>
  );
}
