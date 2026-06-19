import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { profile } from "@/content/site";

export function Profile() {
  return (
    <section id="profile" className="py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            number="05"
            kicker="profile"
            title="Beyond the code"
            intro="The person behind the commits: how I work, what fills the rest of the week, and a few things I rate."
          />

          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
            How I work
          </h3>
          <ul className="stagger mt-5 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {profile.traits.map((trait) => (
              <li key={trait.name} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-muted">
                  <span className="font-medium text-ink">{trait.name}</span>
                  {": "}
                  {trait.note}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            What fills the week
          </h3>
          <div className="stagger mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profile.hobbies.map((hobby) => (
              <div key={hobby.name} className="rounded-lg border border-line bg-surface p-5">
                <p className="text-sm font-medium">{hobby.name}</p>
                <p className="mt-1 text-sm text-muted">{hobby.note}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-mono text-xs uppercase tracking-[0.18em] text-faint">
            Things I rate and use
          </h3>
          <div className="stagger mt-5 grid gap-4 md:grid-cols-3">
            {profile.shelf.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-line bg-surface p-5"
              >
                <p className="text-sm font-medium text-accent-strong">{group.category}</p>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
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
