import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contact, site, socials } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface py-28 md:py-36">
      <Container className="flex flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            08 · say hi
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted">{contact.text}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-9 text-xl font-medium tracking-tight underline-offset-8 transition-colors hover:text-accent-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-3xl"
          >
            {site.email}
          </a>
          <div className="mt-10 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={social.label}
                className="rounded-full border border-line bg-paper p-3 text-muted transition-colors hover:border-faint hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <social.icon className="h-5 w-5" aria-hidden />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
