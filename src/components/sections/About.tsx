import { profile } from "@/content/profile";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";

/** Wide wordmarks get a wider box, as in the design. */
const iconSize: Partial<Record<string, string>> = {
  go: "h-[20px] w-[50px] sm:h-[24px] sm:w-[60px]",
  aws: "h-[26px] w-[42px] sm:h-[32px] sm:w-[50px]",
  typescript: "size-[26px] sm:size-[32px]",
  django: "size-[26px] sm:size-[32px]",
};

export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <Container>
        <div aria-hidden className="fade-rule" />
        <div className="grid gap-12 pt-[17px] pb-[4px] xl:grid-cols-[minmax(0,535px)_1px_minmax(0,1fr)] xl:gap-0">
          <Reveal className="xl:pl-[14px]">
            <p className="eyebrow">About me</p>
            <h2 id="about-title" className="mt-[10px] max-w-[470px] font-serif text-[clamp(1.9rem,3.4vw,2.38rem)] leading-[0.98] text-text">
              {profile.about.title}
            </h2>
            <p className="mt-[12px] text-[0.96rem] leading-[20.3px] text-[#e6e9f0] xl:whitespace-nowrap">
              {profile.about.body.map((sentence) => (
                <span key={sentence} className="xl:block">
                  {sentence}{" "}
                </span>
              ))}
            </p>
            <ButtonLink href="/about" variant="gold-outline" size="sm" arrow className="mt-[11px] h-9 w-[246px] text-[1rem]">
              Learn More About Me
            </ButtonLink>
          </Reveal>

          <span aria-hidden className="hidden w-px self-stretch bg-white/30 xl:my-[14px] xl:block" />

          <div className="xl:pl-[55px]">
            <Reveal>
              <h3 className="eyebrow">Core skills</h3>
            </Reveal>
            <ul className="mt-[10px] grid grid-cols-2 gap-x-4 gap-y-[9px] sm:grid-cols-3 xl:grid-cols-[225px_201px_196px] xl:gap-x-[19px]">
              {profile.coreSkills.map((s, i) => (
                <li key={s.label}>
                  <Reveal delay={i * 60}>
                    <div className="glass group flex h-[50px] min-w-0 items-center gap-3 rounded-[10px] px-3 text-[0.85rem] text-text transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-human/60 hover:shadow-[0_0_24px_-6px_rgb(242_189_92/0.5)] sm:gap-[12px] sm:px-[16px] sm:text-[0.84rem] sm:tracking-[-0.015em] sm:whitespace-nowrap">
                      <BrandIcon
                        name={s.icon as BrandIconName}
                        className={`shrink-0 transition-transform duration-500 ease-out-soft group-hover:scale-110 group-hover:rotate-[8deg] ${iconSize[s.icon] ?? "size-[28px] sm:size-[36px]"}`}
                      />
                      {s.label}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
