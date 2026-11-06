import { experience, type Role } from "@/content/experience";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CompanyMark } from "@/components/brand/CompanyMark";

const nameStyle = {
  jaburg: "text-[1.4rem] tracking-[0.06em] uppercase",
  rturner: "text-[1.55rem] tracking-[-0.01em]",
  liber: "text-[1.55rem] tracking-[-0.01em]",
} as const;

export function Companies() {
  return (
    <section aria-label="Previous employers">
      <Container>
        <div aria-hidden className="fade-rule" />
        <div className="flex flex-col items-center gap-6 py-6 lg:grid lg:grid-cols-[150px_1fr_1fr_1fr] lg:gap-0 lg:py-[15px] xl:grid-cols-[177px_360px_332px_1fr]">
          <p className="text-[1.05rem] text-text lg:text-center">Previously at</p>
          {experience.map((r, i) => (
            <Reveal key={r.company} delay={i * 120} className="flex h-[45px] justify-center lg:border-l lg:border-white/35">
              <Employer role={r} />
            </Reveal>
          ))}
        </div>
        <div aria-hidden className="fade-rule" />
      </Container>
    </section>
  );
}

/** Links to the company site when one is known; otherwise plain text. */
function Employer({ role: r }: { role: Role }) {
  const className = "group flex items-center gap-[19px] rounded-md text-text transition-colors hover:text-human";
  const body = (
    <>
      <CompanyMark
        mark={r.mark}
        className={`shrink-0 transition-transform duration-500 ease-out-soft group-hover:scale-110 group-hover:rotate-[-6deg] ${r.mark === "jaburg" ? "size-[44px]" : "-m-[3px] size-[50px]"}`}
      />
      <span className={`font-semibold whitespace-nowrap ${nameStyle[r.mark]}`}>{r.company}</span>
    </>
  );

  return r.url ? (
    <a href={r.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <span className={className}>{body}</span>
  );
}
