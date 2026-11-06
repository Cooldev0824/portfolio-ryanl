/** Illustrative: a PDF page with editable extraction boxes and a field review panel. */
export function WorkbenchVisual() {
  const handles = (x: number, y: number, w: number, h: number) =>
    [
      [x, y],
      [x + w, y],
      [x, y + h],
      [x + w, y + h],
    ].map(([cx, cy], i) => <rect key={i} x={cx - 3} y={cy - 3} width="6" height="6" rx="1" className="bg-fill m-stroke" strokeWidth="1" />);

  const fields = [
    { label: "PARTIES", w: 72, state: "reviewed" },
    { label: "EFFECTIVE DATE", w: 48, state: "reviewed" },
    { label: "TERM", w: 60, state: "pending" },
    { label: "RENEWAL", w: 80, state: "pending" },
  ] as const;

  return (
    <svg viewBox="0 0 480 300" className="viz block h-auto w-full" fill="none" aria-hidden>
      {/* Toolbar */}
      <rect x="24.5" y="24.5" width="432" height="26" rx="6" className="panel" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={36 + i * 20} y="32" width="12" height="12" rx="3" className={i === 0 ? "m-soft m-stroke" : "ln"} strokeWidth="1" />
      ))}
      <path d="M112 38 h10 m-4 -4 l-4 4 l4 4" className="ink" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M140 38 h-10 m4 -4 l4 4 l-4 4" className="ink" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <text x="290" y="41" fontSize="8" textAnchor="end" className="t">125%</text>
      <text x="444" y="41" fontSize="8" textAnchor="end" className="t">p. 2 / 9</text>

      {/* Page */}
      <rect x="24.5" y="60.5" width="282" height="216" rx="6" className="panel" />
      <rect x="40" y="76" width="110" height="8" rx="3" className="ln2" />
      {[96, 107, 118].map((y, i) => (
        <rect key={y} x="40" y={y} width={[244, 230, 160][i]} height="5" rx="2.5" className="ln" />
      ))}
      {[144, 155].map((y, i) => (
        <rect key={y} x="40" y={y} width={[96, 120][i]} height="5" rx="2.5" className="ln" />
      ))}
      {[180, 191, 202, 213].map((y, i) => (
        <rect key={y} x="40" y={y} width={[248, 236, 244, 140][i]} height="5" rx="2.5" className="ln" />
      ))}
      {[238, 249, 260].map((y, i) => (
        <rect key={y} x="40" y={y} width={[230, 240, 120][i]} height="5" rx="2.5" className="ln" />
      ))}

      {/* Reviewed box */}
      <rect x="34.5" y="90.5" width="260" height="36" rx="3" className="h-soft h-stroke" strokeWidth="1" />
      {/* Selected box being edited, with resize handles */}
      <rect x="34.5" y="174.5" width="260" height="48" rx="3" className="m-soft m-stroke" strokeWidth="1.25" />
      {handles(34.5, 174.5, 260, 48)}
      {/* Snapping guide */}
      <line x1="34.5" y1="66" x2="34.5" y2="270" className="m-stroke" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
      {/* Cursor */}
      <path d="M296 224 l0 12 l3.2 -3 l2.4 5 l2 -1 l-2.4 -5 l4.4 0 z" className="bg-stroke" fill="var(--text)" strokeWidth="0.8" />

      {/* Fields panel */}
      <rect x="318.5" y="60.5" width="138" height="216" rx="6" className="panel" />
      <text x="332" y="80" fontSize="8" letterSpacing="0.6" className="t">FIELDS</text>
      <text x="444" y="80" fontSize="8" textAnchor="end" className="t">2 / 4</text>
      {fields.map((f, i) => {
        const y = 94 + i * 44;
        const reviewed = f.state === "reviewed";
        return (
          <g key={f.label}>
            <rect x="326.5" y={y + 0.5} width="122" height="36" rx="4" className="panel-2" />
            <text x="336" y={y + 14} fontSize="7" letterSpacing="0.4" className="t">{f.label}</text>
            <rect x="336" y={y + 21} width={f.w} height="6" rx="3" className="ln2" />
            {reviewed ? (
              <g>
                <circle cx="436" cy={y + 18.5} r="6" className="h-fill" />
                <path d={`M433.4 ${y + 18.6} l1.8 1.8 l3.4 -3.4`} className="bg-stroke" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : (
              <circle cx="436" cy={y + 18.5} r="5.5" className="m-stroke" strokeWidth="1" strokeDasharray="2 2" />
            )}
          </g>
        );
      })}
    </svg>
  );
}
