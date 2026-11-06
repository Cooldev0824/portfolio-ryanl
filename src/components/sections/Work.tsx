import { projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/TextLink";
import { ProjectCard } from "@/components/work/ProjectCard";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title">
      <Container className="pt-[25px] pb-[18px]">
        <SectionHeader
          id="work"
          eyebrow="Featured work"
          title="Selected projects & products."
          action={<TextLink href="/work">View All Projects</TextLink>}
        />
        <ul className="mt-[18px] grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((p) => p.featured)
            .map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={i * 140} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              </li>
            ))}
        </ul>
      </Container>
    </section>
  );
}
