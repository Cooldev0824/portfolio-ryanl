import { profile } from "@/content/profile";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LineIcon, type LineIconName } from "@/components/ui/Icons";

export function Education() {
  const { degree, school, year } = profile.education;

  return (
    <section aria-label="Education and interests" className="relative">
      <Container>
        <div aria-hidden className="fade-rule" />
        <div className="grid gap-10 pt-[18px] pb-6 md:grid-cols-[minmax(0,433px)_1px_minmax(0,1fr)] md:gap-0 xl:grid-cols-[480px_1px_minmax(0,1fr)]">
          <Reveal className="grid grid-cols-[56px_1fr] items-start">
            <LineIcon name="cap" className="-mt-[10px] size-[40px] text-human" strokeWidth={1.4} />
            <div>
              <h2 className="text-[0.9rem] leading-5 font-semibold tracking-[0.2em] text-human uppercase">Education</h2>
              <p className="mt-[10px] text-[1.3rem] leading-tight font-semibold text-text">{degree}</p>
              <p className="mt-[3px] text-[1.15rem] leading-tight text-[#e6e9f0]">{school}</p>
              <p className="mt-[3px] text-[1.15rem] leading-tight text-[#e6e9f0]">{year}</p>
            </div>
          </Reveal>

          <span aria-hidden className="hidden w-px self-stretch bg-white/30 md:my-[10px] md:block" />

          <Reveal delay={100} className="md:pl-[78px] xl:pl-[31px]">
            <h2 className="flex items-center gap-[17px] text-[0.9rem] leading-5 font-semibold tracking-[0.2em] text-human uppercase">
              <LineIcon name="target" className="-my-2 size-[34px]" strokeWidth={1.4} />
              Interests
            </h2>
            <ul className="mt-[10px] grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-0">
              {profile.interests.map((it, i) => (
                <li key={it.label} className="group flex flex-col items-center gap-[10px] text-center text-[1.02rem] text-[#e6e9f0]">
                  <LineIcon
                    name={it.icon as LineIconName}
                    className="interest-bob size-[46px] text-text transition-colors duration-300 group-hover:text-human"
                    strokeWidth={1.3}
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  {it.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
