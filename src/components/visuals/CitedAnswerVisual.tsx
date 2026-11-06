/** Illustrative: an answer whose citations link back to highlighted source passages. */
export function CitedAnswerVisual() {
  const pageLines = (x: number, y: number, widths: number[]) =>
    widths.map((w, i) => <rect key={i} x={x} y={y + i * 11} width={w} height="5" rx="2.5" className="ln" />);

  return (
    <svg viewBox="0 0 480 300" className="viz block h-auto w-full" fill="none" aria-hidden>
      {/* Source page A */}
      <rect x="24.5" y="24.5" width="134" height="122" rx="6" className="panel" />
      <text x="146" y="40" textAnchor="end" fontSize="8" className="t">p. 4</text>
      {pageLines(36, 48, [96, 104, 80])}
      <rect x="31" y="80" width="121" height="28" rx="4" className="m-soft" />
      <rect x="31.5" y="80.5" width="120" height="27" rx="4" className="m-stroke" strokeWidth="1" />
      {pageLines(38, 87, [100, 76])}
      {pageLines(36, 118, [104, 88])}

      {/* Source page B */}
      <rect x="24.5" y="156.5" width="134" height="120" rx="6" className="panel" />
      <text x="146" y="172" textAnchor="end" fontSize="8" className="t">p. 11</text>
      {pageLines(36, 180, [98, 106])}
      <rect x="31" y="202" width="121" height="18" rx="4" className="m-soft" />
      <rect x="31.5" y="202.5" width="120" height="17" rx="4" className="m-stroke" strokeWidth="1" />
      {pageLines(38, 208, [92])}
      {pageLines(36, 230, [104, 90, 60])}

      {/* Answer panel */}
      <rect x="186.5" y="24.5" width="270" height="252" rx="8" className="panel" />
      <text x="204" y="50" fontSize="8" letterSpacing="0.6" className="t">QUESTION</text>
      <rect x="204" y="60" width="196" height="7" rx="3.5" className="ln2" />
      <line x1="187" y1="86.5" x2="456" y2="86.5" className="grid-ln" />
      <text x="204" y="108" fontSize="8" letterSpacing="0.6" className="t">ANSWER</text>
      <rect x="204" y="118" width="206" height="6" rx="3" className="ln2" />
      <rect x="416" y="115" width="22" height="12" rx="3" className="m-fill" />
      <text x="427" y="124" fontSize="8" textAnchor="middle" className="t-on">p.4</text>
      <rect x="204" y="133" width="226" height="6" rx="3" className="ln2" />
      <rect x="204" y="148" width="150" height="6" rx="3" className="ln2" />
      <rect x="360" y="145" width="26" height="12" rx="3" className="m-fill" />
      <text x="373" y="154" fontSize="8" textAnchor="middle" className="t-on">p.11</text>

      <line x1="187" y1="176.5" x2="456" y2="176.5" className="grid-ln" />
      <text x="204" y="198" fontSize="8" letterSpacing="0.6" className="t">SOURCES</text>
      {[
        { y: 210, label: "p. 4", w: 150 },
        { y: 236, label: "p. 11", w: 120 },
      ].map((s) => (
        <g key={s.label}>
          <rect x="204.5" y={s.y + 0.5} width="236" height="20" rx="4" className="panel-2" />
          <text x="214" y={s.y + 13.5} fontSize="8" className="t-strong">{s.label}</text>
          <rect x="246" y={s.y + 8} width={s.w} height="5" rx="2.5" className="ln" />
        </g>
      ))}

      {/* Citation links */}
      <path d="M416 121 C 330 121, 260 94, 152 94" className="m-stroke" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <path d="M360 151 C 300 151, 240 211, 152 211" className="m-stroke" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
      <circle cx="152" cy="94" r="2.5" className="m-fill" />
      <circle cx="152" cy="211" r="2.5" className="m-fill" />
    </svg>
  );
}
