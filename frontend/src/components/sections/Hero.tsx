import Image from "next/image";
import { LogoMark } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { hero, site } from "@/content/site";

export function Hero() {
  return (
    <section className="flex min-h-dvh items-center pt-16">
      <Container className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="stagger">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
              {site.location}
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {hero.greeting}
              <span className="mt-2 block text-muted">{hero.headline}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {hero.subhead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.href}
                  href={cta.href}
                  variant={cta.primary ? "solid" : "outline"}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          {hero.photo ? (
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line">
              <Image
                src={hero.photo}
                alt={site.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-line bg-surface-2">
              <div
                aria-hidden
                className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_30%_22%,var(--color-surface),transparent_62%)]"
              />
              <LogoMark className="relative h-20 w-20" />
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
