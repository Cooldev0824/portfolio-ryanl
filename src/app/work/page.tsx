import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects across legal AI, federal procurement data and pharmaceutical operations.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <>
      <Container className="pt-32 pb-24 sm:pt-40">
        <p className="rise-in eyebrow">All projects</p>
        <h1 className="rise-in mt-4 font-serif text-[clamp(2.4rem,5vw,3.75rem)] leading-[1.06] text-text">
          Projects &amp; products.
        </h1>
        <p className="rise-in mt-5 max-w-[40rem] text-lg leading-relaxed text-text-soft">
          Production systems across legal AI, cloud infrastructure and federal contracting. These were internal or client-facing
          products, so the artwork is illustrative rather than screenshots.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <ProjectCard project={p} headingLevel={2} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
      <Footer />
    </>
  );
}
