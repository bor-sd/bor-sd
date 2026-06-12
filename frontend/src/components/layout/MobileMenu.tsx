"use client";

import { X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileMenu({
  active,
  onClose,
}: {
  active: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="-mr-2 rounded p-2 text-ink transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center px-6" aria-label="Mobile">
        <ul className="space-y-2">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-baseline gap-4 py-2 text-3xl font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  active === link.href
                    ? "text-accent-strong"
                    : "text-ink hover:text-accent-strong"
                )}
              >
                <span className="font-mono text-xs text-faint">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="px-6 pb-8 font-mono text-xs text-faint">{site.location}</p>
    </div>
  );
}
