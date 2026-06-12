import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { about, now } from "@/content/site";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead number="01" kicker="about" title="A bit about me" />
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <dl className="h-fit rounded-lg border border-line bg-surface p-6">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={cn(
                    "flex justify-between gap-4 py-3",
                    i > 0 && "border-t border-line"
                  )}
                >
                  <dt className="text-sm text-faint">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 rounded-lg border border-line bg-surface p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
              Now <span className="text-accent">·</span> updated {now.updatedAt}
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {now.items.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium text-accent-strong">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
