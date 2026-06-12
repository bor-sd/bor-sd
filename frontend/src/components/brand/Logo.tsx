import { cn } from "@/lib/utils";

/*
  The mark: a line-drawn "B" with an accent point — reads as "B." (a statement,
  full stop). Same geometry is reused for the favicon (app/icon.tsx) and the
  OG image, so the brand stays consistent everywhere.
*/
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7", className)}
      aria-hidden
    >
      <rect width="36" height="36" rx="9" fill="var(--color-ink)" />
      <path
        d="M11 8 V28 M11 8 H16.5 A5 5 0 0 1 16.5 18 H11 M11 18 H18 A5 5 0 0 1 18 28 H11"
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="27.5" cy="25.5" r="2.75" fill="var(--color-accent)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-mono text-sm font-medium tracking-[0.18em] text-ink">
        BSD
      </span>
    </span>
  );
}
