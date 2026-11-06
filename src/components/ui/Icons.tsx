import type { CSSProperties } from "react";

type IconProps = { className?: string };

export function MailIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.46h-4v-4.84c0-1.15-.02-2.64-1.6-2.64-1.62 0-1.86 1.26-1.86 2.56v4.92h-3.94v-11Z" />
    </svg>
  );
}

export function GitHubIcon({ className = "size-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

const linePaths = {
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12.5 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  box: (
    <>
      <path d="m12 2.5 8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5Z" />
      <path d="M3.5 7.25 12 12l8.5-4.75M12 12v9.5" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-5.6-1.5A3 3 0 0 0 3.6 8a3.5 3.5 0 0 0 .4 6 3.5 3.5 0 0 0 4 5.4A3 3 0 0 0 12 19V5Z" />
      <path d="M12 5a3 3 0 0 1 5.6-1.5A3 3 0 0 1 20.4 8a3.5 3.5 0 0 1-.4 6 3.5 3.5 0 0 1-4 5.4A3 3 0 0 1 12 19" />
      <path d="M8 9.5c1 0 2 .6 2 2M16 9.5c-1 0-2 .6-2 2M7.5 15c.8-.5 1.7-.6 2.5-.2M16.5 15c-.8-.5-1.7-.6-2.5-.2" />
    </>
  ),
  cloud: <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.5 9.6 4.5 4.5 0 0 0 7 18.5Z" />,
  chart: <path d="M4 20h16M7 16v-4M11 16V9M15 16v-6M19 16V5M5 11l4-4 4 3 6-6" />,
  cap: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c0 1.4 2.5 2.75 5.5 2.75s5.5-1.35 5.5-2.75V11M21.5 9v5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  check: <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />,
  download: <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M4.5 19.5h15" />,
  arrowRight: <path d="M4.5 12h15m0 0-5.5-5.5m5.5 5.5-5.5 5.5" />,
  arrowUpRight: <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />,
} as const;

export type LineIconName = keyof typeof linePaths;

/** Stroke icons drawn on a 24x24 grid; they inherit the current text colour. */
export function LineIcon({
  name,
  className = "size-5",
  strokeWidth = 1.6,
  style,
}: IconProps & { name: LineIconName; strokeWidth?: number; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden
    >
      {linePaths[name]}
    </svg>
  );
}
