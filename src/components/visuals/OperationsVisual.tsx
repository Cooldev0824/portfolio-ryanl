/** Illustrative: a role-based operations dashboard with stock reconciliation and a change history. */
export function OperationsVisual() {
  const kpis = [
    { label: "IN STOCK", w: 40 },
    { label: "ON ORDER", w: 30 },
    { label: "SHIPPED", w: 36 },
  ];
  const rows = [
    { w: 92, state: "ok" },
    { w: 74, state: "ok" },
    { w: 104, state: "flag" },
    { w: 66, state: "ok" },
  ] as const;
  const history = ["qty 120 → 96", "status → shipped", "supplier PO added"];

  return (
    <svg viewBox="0 0 480 300" className="viz block h-auto w-full" fill="none" aria-hidden>
      {/* Header with role switch */}
      <rect x="24.5" y="24.5" width="432" height="26" rx="6" className="panel" />
      <rect x="36" y="34" width="84" height="7" rx="3.5" className="ln2" />
      {["Warehouse", "Finance", "QA"].map((role, i) => (
        <g key={role}>
          <rect x={300 + i * 52} y="31" width="46" height="13" rx="6.5" className={i === 0 ? "m-fill" : "panel-2"} />
          <text x={323 + i * 52} y="40.2" fontSize="6.8" textAnchor="middle" className={i === 0 ? "t-on" : "t"}>
            {role}
          </text>
        </g>
      ))}

      {/* KPI tiles */}
      {kpis.map((k, i) => (
        <g key={k.label}>
          <rect x={24.5 + i * 100} y="60.5" width="92" height="50" rx="6" className="panel" />
          <text x={36 + i * 100} y="76" fontSize="6.8" letterSpacing="0.4" className="t">{k.label}</text>
          <rect x={36 + i * 100} y="86" width={k.w} height="12" rx="3" className={i === 0 ? "m-soft" : "ln2"} />
        </g>
      ))}

      {/* Reconciliation table */}
      <rect x="24.5" y="120.5" width="292" height="156" rx="6" className="panel" />
      <text x="36" y="138" fontSize="7.5" letterSpacing="0.5" className="t">STOCK RECONCILIATION</text>
      {rows.map((r, i) => {
        const yy = 150 + i * 30;
        return (
          <g key={i}>
            <rect x="36.5" y={yy + 0.5} width="268" height="22" rx="4" className="panel-2" />
            <rect x="46" y={yy + 9} width={r.w} height="5" rx="2.5" className="ln" />
            <rect x="170" y={yy + 9} width="30" height="5" rx="2.5" className="ln" />
            <rect x="210" y={yy + 9} width="30" height="5" rx="2.5" className="ln" />
            {r.state === "ok" ? (
              <path d={`M276 ${yy + 11.5} l3 3 l6 -6.5`} className="m-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <g>
                <rect x="262" y={yy + 5} width="34" height="12" rx="3" className="h-soft h-stroke" strokeWidth="1" />
                <text x="279" y={yy + 13.6} fontSize="6.5" textAnchor="middle" className="t-strong">CHECK</text>
              </g>
            )}
          </g>
        );
      })}

      {/* Fulfillment trend */}
      <rect x="326.5" y="60.5" width="130" height="102" rx="6" className="panel" />
      <text x="338" y="76" fontSize="7.5" letterSpacing="0.5" className="t">FULFILLMENT</text>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const h = [26, 34, 30, 42, 38, 50, 56][i];
        return <rect key={i} x={340 + i * 16} y={150 - h} width="9" height={h} rx="2" className={i === 6 ? "m-fill" : "m-soft"} />;
      })}

      {/* Change history */}
      <rect x="326.5" y="172.5" width="130" height="104" rx="6" className="panel" />
      <text x="338" y="188" fontSize="7.5" letterSpacing="0.5" className="t">CHANGE HISTORY</text>
      <path d="M343 200 v62" className="mu" strokeWidth="1" />
      {history.map((h, i) => {
        const yy = 202 + i * 26;
        return (
          <g key={h}>
            <circle cx="343" cy={yy} r="3.2" className={i === 0 ? "h-fill" : "bg-fill mu"} strokeWidth="1" />
            <text x="352" y={yy + 2.6} fontSize="7" className="t-strong">{h}</text>
            <rect x="352" y={yy + 7} width="48" height="4" rx="2" className="ln" />
          </g>
        );
      })}
    </svg>
  );
}
