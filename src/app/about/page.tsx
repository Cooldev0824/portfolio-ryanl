import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/content/profile";
import { approachSteps, skillGroups } from "@/content/expertise";
import { emailHref } from "@/lib/links";
import { resumeHref } from "@/lib/resume";
import { aboutPhoto } from "@/lib/photo";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: profile.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const resume = resumeHref();
  const photo = aboutPhoto();

  return (
    <>
      <>
        <header>
          <Container className="grid items-center gap-12 pt-32 pb-16 sm:pt-40 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="rise-in eyebrow">About me</p>
              <h1 className="rise-in mt-4 font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.06] text-text">
                {profile.about.title}
              </h1>
              <div className="rise-in mt-8 max-w-[40rem] space-y-5 text-[1.0625rem] leading-relaxed text-text-soft">
                {profile.about.long.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="rise-in mt-10 flex flex-wrap gap-4">
                <ButtonLink href={emailHref} icon="mail">
                  Get in Touch
                </ButtonLink>
                {resume && (
                  <ButtonLink href={resume} variant="outline" icon="download" prefetch={false} download>
                    Download Resume
                  </ButtonLink>
                )}
              </div>
            </div>
            <div className="rise-in mx-auto w-full max-w-[380px] lg:col-span-5 lg:mr-0">
              {photo ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-strong">
                  <Image src={photo} alt={profile.photo.alt} fill priority sizes="380px" className="object-cover object-top" />
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-border-strong bg-[radial-gradient(circle_at_50%_80%,rgb(242_189_92/0.18),transparent_70%),var(--surface)]">
                  <Image src={profile.photo.src} alt={profile.photo.alt} width={760} height={760} sizes="380px" className="h-auto w-full" />
                </div>
              )}
            </div>
          </Container>
        </header>

        <section aria-labelledby="skills-title" className="border-t border-border">
          <Container className="py-20">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-title" className="mt-3 font-serif text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-text">
              The full toolkit.
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g, i) => (
                <Reveal key={g.title} delay={(i % 3) * 70} className="h-full bg-bg p-7">
                  <h3 className="text-sm font-semibold tracking-[0.14em] text-human uppercase">{g.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-md border border-border-strong px-2.5 py-1 text-sm text-text-soft">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="approach-title" className="border-t border-border">
          <Container className="py-20">
            <p className="eyebrow">How I work</p>
            <h2 id="approach-title" className="mt-3 font-serif text-[clamp(2rem,4vw,2.75rem)] leading-[1.1] text-text">
              From problem to production.
            </h2>
            <ol className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {approachSteps.map((s, i) => (
                <li key={s.title}>
                  <Reveal delay={(i % 3) * 70}>
                    <p aria-hidden className="font-serif text-3xl text-human">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-lg font-medium text-text">{s.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-soft">{s.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      </>
      <Footer />
    </>
  );
}
