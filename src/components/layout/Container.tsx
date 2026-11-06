import type { ReactNode } from "react";

/** Page column: 1264px of content at 1440px wide, as in the design. `wide` is the header's slightly wider column. */
export function Container({ children, className = "", wide = false }: { children: ReactNode; className?: string; wide?: boolean }) {
  return <div className={`mx-auto w-full px-5 sm:px-8 ${wide ? "max-w-[1376px] xl:pr-[18px] xl:pl-[47px]" : "max-w-[1440px] xl:pr-[79px] xl:pl-[96px]"} ${className}`}>{children}</div>;
}
