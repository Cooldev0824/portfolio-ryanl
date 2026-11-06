import { profile } from "@/content/profile";
import { emailHref } from "@/lib/links";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative pt-[17px] pb-[83px]">
      <Container className="relative">
        <Reveal className="xl:-mr-[27px] xl:-ml-[21px]">
          <div className="cta-box relative grid items-center gap-7 rounded-[18px] border border-human/55 bg-[linear-gradient(100deg,rgb(132_100_52/0.6),rgb(40_42_56/0.78)_38%,rgb(20_28_46/0.72))] px-8 py-7 shadow-[0_0_60px_-16px_rgb(242_189_92/0.55),inset_0_1px_0_rgb(255_255_255/0.1)] backdrop-blur-sm xl:min-h-[128px] xl:grid-cols-[441px_1px_540px_1px_1fr] xl:gap-0 xl:py-0 xl:pl-[56px]">
            {/* glowing highlight along the top edge, with a light running across it */}
            <span aria-hidden className="absolute inset-x-8 -top-px h-px bg-[linear-gradient(90deg,transparent,rgb(242_189_92/0.6)_25%,#fff1cc_80%,transparent)]" />
            <span aria-hidden className="absolute inset-x-24 -top-1 h-2 bg-[linear-gradient(90deg,transparent,rgb(242_189_92/0.5)_40%,rgb(255_226_160/0.9)_80%,transparent)] blur-[5px]" />
            <span aria-hidden className="edge-run absolute inset-x-6 -top-[2px] h-[3px] bg-[linear-gradient(90deg,transparent,#fff6dc,transparent)] blur-[1px]" />

            <h2 id="contact-title" className="font-serif text-[clamp(1.8rem,3vw,2.33rem)] leading-[1.02] text-text">
              {profile.cta.title.split(" something ").map((part, i) => (
                <span key={part} className="block">
                  {i === 0 ? `${part} something` : part}
                </span>
              ))}
            </h2>
            <span aria-hidden className="hidden h-[65px] bg-white/35 xl:block" />
            <p className="text-[0.98rem] leading-[28px] text-[#e6e9f0] xl:max-w-[540px] xl:pr-[60px] xl:pl-[56px]">{profile.cta.body}</p>
            <span aria-hidden className="hidden h-[65px] bg-white/35 xl:block" />
            <div className="xl:pl-[30px]">
              <ButtonLink href={emailHref} icon="mail" className="h-[58px] w-[204px] rounded-[10px] text-[1.09rem]">
                Get in Touch
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
