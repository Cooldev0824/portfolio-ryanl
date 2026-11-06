/** Illustrative: faceted search over federal contracting data with ML category tags. */
export function ProcurementVisual() {
  const results = [
    { tag: "IT SERVICES", w: 190, tw: 62 },
    { tag: "ENGINEERING", w: 160, tw: 62 },
    { tag: "CONSULTING", w: 204, tw: 58 },
    { tag: "IT SERVICES", w: 150, tw: 62 },
  ];

  return (
    <svg viewBox="0 0 480 300" className="viz block h-auto w-full" fill="none" aria-hidden>
      {/* Search bar */}
      <rect x="24.5" y="24.5" width="432" height="30" rx="15" className="panel" />
      <circle cx="44" cy="39.5" r="5" className="ink" strokeWidth="1.3" />
      <path d="M47.6 43 l3.4 3.4" className="ink" strokeWidth="1.3" strokeLinecap="round" />
      <text x="60" y="42.5" fontSize="9" className="t-strong">opportunities · awards · vendors</text>
      <rect x="390" y="31" width="58" height="17" rx="8.5" className="m-fill" />
      <text x="419" y="42.5" fontSize="8" textAnchor="middle" className="t-on">Search</text>

      {/* Facets */}
      <rect x="24.5" y="66.5" width="116" height="210" rx="6" className="panel" />
      {[
        { title: "SOURCE", rows: ["FPDS-NG", "USAspending", "FedBizOpps"], checked: [true, true, false] },
        { title: "CATEGORY", rows: ["IT services", "Engineering", "Consulting"], checked: [true, false, true] },
      ].map((group, g) => (
        <g key={group.title}>
          <text x="36" y={88 + g * 96} fontSize="7.5" letterSpacing="0.5" className="t">{group.title}</text>
          {group.rows.map((row, i) => {
            const yy = 100 + g * 96 + i * 20;
            return (
              <g key={row}>
                <rect x="36.5" y={yy + 0.5} width="9" height="9" rx="2" className={group.checked[i] ? "m-fill" : "panel-2"} />
                {group.checked[i] && <path d={`M38.6 ${yy + 5.2} l1.8 1.8 l3.4 -3.6`} className="bg-stroke" strokeWidth="1.2" strokeLinecap="round" />}
                <text x="52" y={yy + 8.5} fontSize="8" className="t-strong">{row}</text>
              </g>
            );
          })}
        </g>
      ))}

      {/* Results */}
      {results.map((res, i) => {
        const yy = 66 + i * 54;
        return (
          <g key={i}>
            <rect x="152.5" y={yy + 0.5} width="304" height="46" rx="6" className="panel" />
            <rect x="166" y={yy + 13} width={res.w} height="7" rx="3.5" className="ln2" />
            <rect x="166" y={yy + 28} width="56" height="5" rx="2.5" className="ln" />
            <rect x="230" y={yy + 28} width="40" height="5" rx="2.5" className="ln" />
            <rect x={444 - res.tw} y={yy + 10} width={res.tw} height="13" rx="3" className="m-soft" />
            <text x={444 - res.tw / 2} y={yy + 19.2} fontSize="6.8" letterSpacing="0.3" textAnchor="middle" className="t">
              {res.tag}
            </text>
            {/* Mini award trend */}
            <path
              d={`M${384} ${yy + 36} l10 ${-3 - i} l10 ${2} l10 ${-5 + i} l10 ${-2} l10 ${-3}`}
              className="m-stroke"
              strokeWidth="1.1"
              strokeLinejoin="round"
              opacity="0.8"
            />
          </g>
        );
      })}
    </svg>
  );
}
