import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { journey, resumeUrl } from "@/content/site";

export function Journey() {
  return (
    <section id="journey" className="border-y border-line bg-surface py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            number="02"
            kicker="journey"
            title="How I got here"
            intro="School, work and sport in one timeline — from a primary-school gym to production AI systems."
          />
          <ol className="stagger relative space-y-10 border-l border-line pl-8">
            {journey.map((item) => (
              <li key={item.title} className="relative">
                <span
                  className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden
                />
                <p className="font-mono text-xs text-faint">{item.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 max-w-xl leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
          {resumeUrl ? (
            <Button href={resumeUrl} external variant="outline" className="mt-12">
              <Download className="h-4 w-4" aria-hidden />
              Download CV
            </Button>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
