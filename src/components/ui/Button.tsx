import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { LineIcon, type LineIconName } from "./Icons";

type Variant = "gold" | "outline" | "gold-outline";
type Size = "md" | "sm";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ease-out-soft";

const sizes: Record<Size, string> = {
  md: "h-[2.625rem] px-8 text-[0.95rem] font-semibold",
  sm: "h-9 px-5 text-[0.9375rem]",
};

const variants: Record<Variant, string> = {
  gold: "btn-gold",
  outline: "border border-text/40 text-text hover:border-text hover:bg-text/5",
  "gold-outline": "border border-human/70 text-text hover:border-human hover:bg-human-soft",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  icon?: LineIconName;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({ variant = "gold", size = "md", icon, arrow, children, className = "", ...props }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {icon && <LineIcon name={icon} className="size-[1.3em] shrink-0" strokeWidth={1.8} />}
      {children}
      {arrow && (
        <LineIcon
          name="arrowRight"
          strokeWidth={1.8}
          className="size-[1.25em] shrink-0 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
