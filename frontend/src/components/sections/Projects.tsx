import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tag } from "@/components/ui/Tag";
import { projects, type Project } from "@/content/site";

const linkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-line bg-paper p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-faint hover:shadow-[0_14px_34px_-16px_rgba(26,26,24,0.22)] md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <span className="mt-1 flex shrink-0 gap-3 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
          {project.featured ? <span className="text-accent">featured</span> : null}
          <span className="text-faint">{project.kind}</span>
        </span>
      </div>
      {project.wip ? (
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-accent-strong">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
          Work in progress
        </span>
      ) : null}
      {project.maintenance ? (
        <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-faint/50 bg-surface-2 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-faint" aria-hidden />
          Currently in maintenance
        </span>
      ) : null}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {project.liveUrl || project.repoUrl ? (
        <div className="mt-5 flex gap-5 border-t border-line pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <GitHubIcon className="h-4 w-4" aria-hidden />
              Code
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-surface py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            number="02"
            kicker="projects"
            title="Things I've built"
            intro="Real systems, not tutorials. Full-stack apps with proper architecture, from database to deploy."
          />
          <div className="stagger grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
