import { cn } from "@/lib/utils";

type Props = {
  number: string;
  kicker: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
};

export function SectionHead({ number, kicker, title, intro, tone = "light" }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {number} · {kicker}
      </p>
      <h2
        className={cn(
          "mt-3 text-2xl font-semibold tracking-tight md:text-[2rem]",
          tone === "dark" ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed",
            tone === "dark" ? "text-paper/70" : "text-muted"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
