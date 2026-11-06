import type { CSSProperties } from "react";
import Image from "next/image";
import { profile } from "@/content/profile";
import { resumeHref } from "@/lib/resume";
import { designPhoto } from "@/lib/photo";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LineIcon, type LineIconName } from "@/components/ui/Icons";
import { CountUp } from "@/components/ui/CountUp";
import { LightStreak, Swoosh } from "@/components/brand/Swoosh";
import { HaloRing } from "@/components/brand/HaloRing";

const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

/*
 * Desktop (xl) positions are measured from the approved design at 1440px wide and
 * expressed relative to the page centre, so the composition holds on wider screens.
 */
export function Hero() {
  const resume = resumeHref();
  const photo = designPhoto();

  return (
    <section id="home" data-motion data-inview aria-labelledby="hero-title" className="relative overflow-hidden xl:h-[574px]">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[760px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(52_80_140/0.32),transparent)] xl:left-[calc(50%+165px)]"
      />
      <Swoosh className="hero-flow absolute bottom-0 left-0 hidden h-[260px] w-full opacity-35 lg:block" flip />
      <LightStreak className="streak-in absolute bottom-0 left-0 h-[130px] w-[420px] max-w-full" />
      <LightStreak className="streak-in absolute right-0 bottom-8 hidden h-[160px] w-[380px] -scale-x-100 lg:block" />

      {/* Portrait: in normal flow on small screens, absolutely placed on desktop. */}
      <div className="photo-in relative mx-auto mt-24 aspect-square w-[min(92vw,460px)] sm:mt-28 xl:hidden">
        <Portrait photo={photo} sizes="460px" uid="hero-m" />
      </div>
      <div className="photo-in absolute top-[40px] left-[calc(50%-123px)] hidden aspect-square w-[576px] xl:block">
        <Portrait photo={photo} sizes="576px" priority uid="hero-d" />
      </div>

      <Container className="relative pt-8 xl:h-full xl:pt-[110px]">
        <div className="relative z-10 xl:max-w-[600px]">
          <p className="rise-in flex flex-wrap items-center gap-x-3 text-[0.875rem] leading-5 font-semibold tracking-[0.2em] text-human uppercase" style={delay(0.1)}>
            {profile.eyebrow.map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-human/80">•</span>}
                {w}
              </span>
            ))}
          </p>

          <h1 id="hero-title" className="mt-3 font-serif text-[2.4rem] leading-[0.95] text-text sm:text-[3rem] xl:text-[3.5rem]">
            <span className="sr-only">{profile.name}, {profile.role}. </span>
            <span aria-hidden className="block">
              {profile.headline.lines.map((line, i) => (
                <span key={line} className="line-in sm:block" style={delay(0.2 + i * 0.12)}>
                  {line}{" "}
                </span>
              ))}
              <em className="line-in text-human sm:block" style={delay(0.44)}>
                <span className="shimmer-text">{profile.headline.emphasis}</span>
              </em>
            </span>
            <span className="sr-only">
              {profile.headline.lead} {profile.headline.emphasis}
            </span>
          </h1>

          <p className="rise-in mt-6 max-w-[580px] text-[1.09rem] leading-[1.38] text-[#e6e9f0]" style={delay(0.6)}>
            {profile.intro}
          </p>

          <div className="rise-in mt-[18px] flex flex-wrap items-center gap-8" style={delay(0.72)}>
            <ButtonLink href="/#work" arrow className="h-[49px] w-[228px] text-[1.09rem]">
              View My Work
            </ButtonLink>
            {resume && (
              <ButtonLink href={resume} variant="outline" icon="download" prefetch={false} download className="h-[49px] w-[243px] px-6 text-[1.09rem]">
                Download Resume
              </ButtonLink>
            )}
          </div>
        </div>

        <CurrentlyBuilding
          className="card-in relative z-10 mt-8 max-w-[420px] xl:absolute xl:top-[152px] xl:left-[calc(50%+375px)] xl:mt-0 xl:w-[298px] xl:max-w-none"
          style={delay(0.55)}
        />

        <ul
          aria-label="At a glance"
          className="rise-in relative z-10 mt-10 grid grid-cols-2 gap-y-8 pb-10 lg:mt-7 lg:grid-cols-4 lg:pb-0 xl:ml-[95px] xl:grid-cols-[247px_360px_258px_1fr]"
          style={delay(0.85)}
        >
          {profile.stats.map((s, i) => (
            <li
              key={s.label}
              className={`flex h-[50px] items-center gap-[22px] ${i === 0 || i === 2 ? "lg:border-r lg:border-white/35" : ""} ${i === 1 ? "xl:pl-[53px]" : ""} ${i === 3 ? "xl:pl-[49px]" : ""} ${i > 0 ? "lg:max-xl:pl-6" : ""}`}
            >
              <LineIcon name={s.icon as LineIconName} className="-mx-[7px] -my-[10px] size-[58px] shrink-0 text-human" strokeWidth={1.1} />
              <p className="flex flex-col">
                <CountUp value={s.value} className="font-serif text-[2.2rem] leading-[0.85] text-text" />
                <span className="mt-1.5 text-[0.88rem] leading-tight text-[#e6e9f0]">{s.label}</span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Portrait({ photo, sizes, priority, uid }: { photo: string | null; sizes: string; priority?: boolean; uid: string }) {
  if (photo) {
    // The designed portrait already has its own backdrop and gold ring; fade its edges into the page.
    return (
      <Image
        src={photo}
        alt={profile.photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,#000_80%,transparent),radial-gradient(closest-side,#000_78%,transparent)]"
      />
    );
  }
  return (
    <>
      <div aria-hidden className="glow-breathe absolute inset-0 bg-[radial-gradient(circle_at_50%_56%,rgb(242_189_92/0.2),transparent_52%)]" />
      <HaloRing uid={uid} className="absolute inset-0 h-full w-full" />
      <Image
        src={profile.photo.src}
        alt={profile.photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_82%,transparent_100%)]"
      />
    </>
  );
}

function CurrentlyBuilding({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div className={`glass float-y rounded-xl px-[27px] pt-[22px] pb-6 ${className}`} style={style}>
      <p className="flex items-center gap-[18px] text-[1.21rem] font-semibold text-text">
        <LineIcon name="code" className="-mx-[6px] -my-[13px] size-[52px] text-[#f6c453]" strokeWidth={1.5} />
        Currently Building
      </p>
      <ul className="mt-[18px] space-y-[11px]">
        {profile.currentlyBuilding.map((item, i) => (
          <li key={item} className="check-in flex items-center gap-[18px] text-[1rem] leading-[25px] text-[#eef0f4]" style={delay(0.9 + i * 0.12)}>
            <LineIcon name="check" className="-m-[7px] size-[38px] shrink-0 text-[#f6c453]" strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
