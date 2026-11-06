import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/visuals/ProjectVisual";
import { emailHref } from "@/lib/links";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function CaseStudy({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <article>
        <header className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 h-[560px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(56_89_160/0.25),transparent)]"
          />
          <Container className="relative pt-32 pb-14 sm:pt-40">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              All projects
            </Link>
            <p className="rise-in label mt-10">
              <span className="text-human">Case study</span>
              <span aria-hidden className="mx-2 text-muted">
                /
              </span>
              {project.company} · {project.period}
            </p>
            <h1 className="rise-in mt-5 max-w-[20ch] font-serif text-[clamp(2.6rem,6.5vw,5rem)] leading-[1] tracking-[-0.02em] text-text">
              {project.title}
            </h1>
            <p className="rise-in mt-6 max-w-[42rem] text-lg leading-relaxed text-text-soft sm:text-xl">{project.summary}</p>
          </Container>
        </header>

        <Container>
          <figure className="rise-in overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <div className="mx-auto max-w-4xl p-5 sm:p-10">
              <ProjectVisual visual={project.visual} />
            </div>
            <figcaption className="border-t border-border px-5 py-3 font-mono text-[11px] text-muted sm:px-8">
              Illustrative diagram, not a screenshot of the production system.
            </figcaption>
          </figure>
        </Container>

        <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-4">
            <dl className="space-y-7 lg:sticky lg:top-24">
              <div className="border-t border-border pt-3">
                <dt className="label">Company</dt>
                <dd className="mt-1.5 text-text">{project.company}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label">Role</dt>
                <dd className="mt-1.5 text-text">{project.role}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label">Period</dt>
                <dd className="mt-1.5 text-text">{project.period}</dd>
              </div>
              <div className="border-t border-border pt-3">
                <dt className="label">Stack</dt>
                <dd className="mt-3">
                  <TagList items={project.stack} label="Stack" />
                </dd>
              </div>
            </dl>
          </aside>

          <div className="space-y-16 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <CaseHeading>The problem</CaseHeading>
              <p className="text-lg leading-relaxed text-text-soft">{project.problem}</p>
            </Reveal>

            <Reveal>
              <CaseHeading>What I built</CaseHeading>
              <div className="space-y-5 text-lg leading-relaxed text-text-soft">
                {project.solution.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <CaseHeading>Key decisions</CaseHeading>
              <ul className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {project.decisions.map((d) => (
                  <li key={d.title} className="bg-bg p-6">
                    <h3 className="font-medium text-text">{d.title}</h3>
                    <p className="mt-2 leading-relaxed text-text-soft">{d.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <CaseHeading>My responsibilities</CaseHeading>
              <ul className="space-y-3">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed text-text-soft">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-human" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>

        <Container className="pb-24">
          <div className="grid gap-6 border-t border-border pt-12 md:grid-cols-2 md:items-end">
            <Link href={`/work/${next.slug}`} className="group block">
              <p className="label">Next case study</p>
              <p className="mt-3 font-serif text-3xl leading-tight text-text transition-colors group-hover:text-human sm:text-4xl">
                {next.title}
                <span aria-hidden className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Link>
            <div className="md:text-right">
              <ButtonLink href={emailHref} variant="gold-outline" icon="mail">
                Discuss a similar project
              </ButtonLink>
            </div>
          </div>
        </Container>
      </article>
      <Footer />
    </>
  );
}

function CaseHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="label mb-5 text-text-soft">{children}</h2>;
}
