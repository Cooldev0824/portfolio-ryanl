import { experience } from "@/content/experience";
import { resumeHref } from "@/lib/resume";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { CompanyMark } from "@/components/brand/CompanyMark";

export function Experience() {
  const resume = resumeHref();

  return (
    <section id="experience" aria-labelledby="experience-title">
      <Container>
        <div aria-hidden className="fade-rule" />
        <div className="pt-[15px] pb-[16px]">
          <SectionHeader
            id="experience"
            eyebrow="Work experience"
            title="My professional journey."
            titleClassName="text-[clamp(2rem,4vw,2.45rem)] xl:pl-0"
            action={
              resume && (
                <TextLink href={resume} prefetch={false} target="_blank" rel="noopener">
                  View Full Experience
                </TextLink>
              )
            }
          />

          <div className="relative">
            {/* timeline rail between the first and last nodes (outside the list so the list holds only items) */}
            <Reveal className="pointer-events-none absolute inset-0">
              <span
                aria-hidden
                className="timeline-rail absolute top-[34px] bottom-[42px] left-[10px] w-[2px] bg-white/85 shadow-[0_0_6px_rgb(255_255_255/0.35)] xl:left-[59px]"
              />
            </Reveal>
            <ol className="relative">
              {experience.map((r, i) => (
                <li
                  key={r.company}
                  className="relative grid gap-4 py-[6px] pl-10 after:absolute after:right-0 after:bottom-0 after:left-10 after:h-px after:bg-white/15 last:after:hidden md:grid-cols-[minmax(0,7fr)_minmax(0,9fr)] md:gap-0 xl:grid-cols-[80px_319px_1fr] xl:pl-[133px] xl:after:left-[59px]"
                >
                  <span
                    aria-hidden
                    className={`absolute top-[26px] left-[11px] -translate-x-1/2 rounded-full xl:left-[60px] ${
                      i === 0 ? "node-pulse size-[15px] bg-human" : "size-[15px] border-2 border-white bg-bg"
                    }`}
                  />
                  <Reveal className="flex items-start gap-4 xl:contents">
                    <CompanyMark
                      mark={r.mark}
                      className={`mt-[6px] shrink-0 ${r.mark === "jaburg" ? "size-[42px] text-text" : "-mt-px size-[48px]"}`}
                    />
                    <div className="md:border-r md:border-white/30 md:pr-8 xl:pr-0">
                      <h3 className="text-[1.22rem] leading-[1.15] font-semibold text-text">
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:text-human">
                            {r.company}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          r.company
                        )}
                      </h3>
                      <p className="mt-[3px] text-[0.94rem] leading-[1.45] text-[#e6e9f0]">{r.title}</p>
                      <p className="text-[0.94rem] leading-[1.45] text-[#e6e9f0]">{r.period}</p>
                    </div>
                  </Reveal>
                  <Reveal delay={120} className="md:pl-10 xl:pl-[51px]">
                    <ul className="text-[0.92rem] leading-[22.5px] text-[#e6e9f0]">
                      {r.brief.map((b) => (
                        <li key={b} className="flex gap-[11px]">
                          <span aria-hidden className="mt-[9px] size-[6px] shrink-0 rounded-full bg-[#e6e9f0]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
