import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Airball.</h1>
      <p className="max-w-sm text-muted">
        That page doesn&apos;t exist, but the rest of the site is wide open under
        the basket.
      </p>
      <Button href="/">Back home</Button>
    </main>
  );
}
