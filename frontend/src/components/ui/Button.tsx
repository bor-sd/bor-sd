import { cn } from "@/lib/utils";

type Props = {
  href: string;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "solid", external, className, children }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "solid"
          ? "bg-accent-strong text-white hover:bg-accent"
          : "border border-ink text-ink hover:bg-ink hover:text-paper",
        className
      )}
    >
      {children}
    </a>
  );
}
