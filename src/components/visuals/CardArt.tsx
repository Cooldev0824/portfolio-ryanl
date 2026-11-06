import type { ReactNode } from "react";
import type { CardArt as CardArtKind } from "@/content/projects";

/** Illustrative card artwork (drawn, not photographed). Viewbox 480x210. */
export function CardArt({ art }: { art: CardArtKind }) {
  switch (art) {
    case "document":
      return <DocumentArt />;
  }
}

function Frame({ children, id }: { children: ReactNode; id: string }) {
  return (
    <svg viewBox="0 0 480 210" preserveAspectRatio="xMidYMid slice" className="block h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.45" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {children}
      <rect width="480" height="210" fill={`url(#${id}-shade)`} />
    </svg>
  );
}

/** Scanned page with AI extraction boxes awaiting review. */
function DocumentArt() {
  return (
    <Frame id="doc">
      <defs>
        <linearGradient id="doc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#13284d" />
          <stop offset="1" stopColor="#0a1328" />
        </linearGradient>
      </defs>
      <rect width="480" height="210" fill="url(#doc-bg)" />
      <g transform="rotate(-6 240 110)">
        <rect x="150" y="20" width="180" height="230" rx="4" fill="#f4f2ed" />
        {Array.from({ length: 12 }, (_, i) => 44 + i * 14).map((ly, i) => (
          <rect key={ly} x="168" y={ly} width={i % 4 === 3 ? 90 : 144} height="5" rx="2" fill="#c9ccd6" />
        ))}
        <rect x="164" y="38" width="100" height="18" rx="2" fill="none" stroke="#5ccfe6" strokeWidth="2" />
        <rect x="164" y="94" width="152" height="32" rx="2" fill="#f2bd5c" fillOpacity="0.18" stroke="#e3a43a" strokeWidth="2" />
        <rect x="164" y="150" width="70" height="18" rx="2" fill="none" stroke="#5ccfe6" strokeWidth="2" />
      </g>
      <g fontFamily="var(--font-sans)" fontSize="10">
        <rect x="340" y="40" width="110" height="26" rx="6" fill="#0e182c" stroke="#2a3a57" />
        <circle cx="354" cy="53" r="4" fill="#5ccfe6" />
        <text x="364" y="57" fill="#c8cedb">Party extracted</text>
        <rect x="340" y="76" width="110" height="26" rx="6" fill="#0e182c" stroke="#e3a43a" />
        <circle cx="354" cy="89" r="4" fill="#f2bd5c" />
        <text x="364" y="93" fill="#f4f2ed">Needs review</text>
      </g>
    </Frame>
  );
}
