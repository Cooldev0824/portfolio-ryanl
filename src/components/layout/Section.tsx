import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/** Gold eyebrow, serif heading and an optional link aligned to the right (sizes measured from the design). */
export function SectionHeader({
  id,
  eyebrow,
  title,
  action,
  className = "",
  titleClassName = "text-[clamp(2rem,4vw,2.64rem)]",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <Reveal className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-3 ${className}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className={`mt-1 font-serif leading-[1.12] text-text xl:pl-[9px] ${titleClassName}`}>
          {title}
        </h2>
      </div>
      {action && <div className="pb-2">{action}</div>}
    </Reveal>
  );
}
