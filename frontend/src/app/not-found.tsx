import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        This page took a shot and missed.
      </h1>
      <Button href="/">Back home</Button>
    </main>
  );
}
