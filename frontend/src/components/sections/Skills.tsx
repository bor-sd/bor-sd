import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/content/site";

export function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            number="04"
            kicker="skills"
            title="What I work with"
            intro="The day-to-day toolkit: Python and TypeScript first, the rest as the job demands."
          />
          <div className="stagger grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-line bg-paper p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
