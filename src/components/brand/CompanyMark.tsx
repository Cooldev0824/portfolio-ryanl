import type { Role } from "@/content/experience";

/** Neutral monograms for each employer (not the companies' official logos). */
export function CompanyMark({ mark, className = "size-8" }: { mark: Role["mark"]; className?: string }) {
  if (mark === "jaburg") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <text x="16" y="21.6" textAnchor="middle" fontSize="16" fontWeight="500" fontFamily="var(--font-sans)" fill="currentColor">
          J
        </text>
      </svg>
    );
  }
  if (mark === "liber") {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden>
        <defs>
          <linearGradient id="liber-g" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#a6f06a" />
            <stop offset="1" stopColor="#3fae2a" />
          </linearGradient>
        </defs>
        {/* leaf rising to the upper right, with a curved midrib */}
        <path d="M29 3C17 3 6 8 4.5 20.5c-.3 2.6 0 5.2.8 7.5C8 26 10.5 24 13 21.5 9.8 26.2 6.8 28.6 6 29c9.5 1.2 19-4.4 21.8-14.5C28.8 10.8 29.2 6.9 29 3Z" fill="url(#liber-g)" />
        <path d="M24.5 7.5C17 13 11 20 6 29" stroke="#0b1424" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.45" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect x="2" y="2" width="28" height="28" rx="3" fill="#1f7ff0" />
      <path d="M11 24V12.5m0 3.5c1.2-2.6 3.6-4 7-3.6V17" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
