import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { LineIcon } from "./Icons";

/** Quiet "View all →" style link used beside section headings. */
export function TextLink({ children, className = "", ...props }: ComponentProps<typeof Link> & { children: ReactNode }) {
  return (
    <Link className={`group inline-flex items-center gap-[22px] text-[1.08rem] font-medium text-text transition-colors hover:text-human ${className}`} {...props}>
      {children}
      <LineIcon name="arrowRight" className="size-[26px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.8} />
    </Link>
  );
}
