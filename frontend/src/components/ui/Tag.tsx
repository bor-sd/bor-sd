export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-line bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
