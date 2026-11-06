import Image from "next/image";
import type { Project } from "@/content/projects";
import { experience } from "@/content/experience";
import { CompanyMark } from "@/components/brand/CompanyMark";
import { LineIcon } from "@/components/ui/Icons";
import { CardArt } from "@/components/visuals/CardArt";

export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const role = experience.find((r) => r.company === project.company);
  const Heading = `h${headingLevel}` as const;

  const className =
    "group flex h-full flex-col overflow-hidden rounded-[12px] border border-white/40 bg-[linear-gradient(180deg,#fafbfc,#e8eaee)] shadow-[0_0_24px_-6px_rgb(255_255_255/0.18),0_30px_60px_-30px_rgb(0_0_0/0.9)] transition-[transform,box-shadow] duration-500 ease-out-soft hover:-translate-y-2 hover:shadow-[0_0_36px_-4px_rgb(242_189_92/0.4),0_40px_70px_-30px_rgb(0_0_0/0.9)]";
  const body = (
    <>
      <div className="card-shine relative aspect-[2.55/1] overflow-hidden bg-surface">
        <div className="h-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.07]">
          {"image" in project.card ? (
            <Image
              src={project.card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <CardArt art={project.card.art} />
          )}
        </div>
        {/* Design images carry the company logo; drawn art gets a matching overlay. */}
        {"image" in project.card ? (
          <p className="sr-only">{project.company}</p>
        ) : (
          <p className="absolute bottom-3 left-4 flex items-center gap-2.5 text-white">
            {role && <CompanyMark mark={role.mark} className="size-6" />}
            <span
              className={
                role?.mark === "jaburg" ? "text-sm font-semibold tracking-[0.1em] uppercase" : "text-[0.95rem] font-semibold"
              }
            >
              {project.company}
            </span>
          </p>
        )}
      </div>
      <div className="flex flex-1 flex-col px-[26px] pt-[9px] pb-[12px]">
        <Heading className="text-[1.3rem] leading-tight font-bold tracking-[-0.025em] text-card-ink xl:whitespace-nowrap">
          {project.card.title}
        </Heading>
        <p className="mt-[6px] text-[0.95rem] leading-[21px] text-[#232b3a]">{project.card.summary}</p>
        <ul className="mt-[10px] flex flex-wrap gap-3" aria-label="Technologies">
          {project.card.tags.map((t) => (
            <li
              key={t}
              className="flex h-8 items-center rounded-full bg-[#e0e2e7] px-[14px] text-[0.95rem] font-medium text-[#141b2b] shadow-[inset_0_1px_0_rgb(255_255_255/0.7),0_1px_2px_rgb(0_0_0/0.08)]"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-[4px] text-[1.08rem] text-card-ink">
          <span>{project.period}</span>
          <LineIcon
            name="arrowUpRight"
            className="-m-1 size-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={2.2}
          />
        </div>
      </div>
    </>
  );

  // Opens the company's website in a new tab; without a known URL the card is not a link.
  return role?.url ? (
    <a href={role.url} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
      <span className="sr-only"> (opens {project.company} website in a new tab)</span>
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}
