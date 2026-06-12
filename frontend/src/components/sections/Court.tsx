import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { basketball } from "@/content/site";
import { cn } from "@/lib/utils";

export function Court() {
  return (
    <section id="court" className="bg-ink py-24 text-paper md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            number="06"
            kicker="on the court"
            title="The other half of my week"
          />
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5 text-base leading-relaxed text-paper/75 md:text-lg">
              {basketball.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="h-fit rounded-lg border border-paper/15 p-6">
              <dl>
                {basketball.facts.map((fact, i) => (
                  <div
                    key={fact.label}
                    className={cn(
                      "flex justify-between gap-4 py-3",
                      i > 0 && "border-t border-paper/15"
                    )}
                  >
                    <dt className="text-sm text-paper/50">{fact.label}</dt>
                    <dd className="text-right text-sm font-medium text-paper">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-paper/50">
                Highlights
              </p>
              <ul className="mt-3 space-y-2.5">
                {basketball.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-paper/80">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
