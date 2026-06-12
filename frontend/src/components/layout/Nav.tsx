"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-paper/90 backdrop-blur-sm transition-colors",
          scrolled ? "border-line" : "border-transparent"
        )}
      >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-[1100px] items-center justify-between px-6 md:px-8"
      >
        <a
          href="#top"
          aria-label={`${site.name} — home`}
          className="transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <Logo />
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "nav-link text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                  active === link.href
                    ? "is-active font-medium text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="-mr-2 rounded p-2 text-ink transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-accent md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        </nav>
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-[2px] bg-accent"
          style={{ width: `${progress}%` }}
        />
      </header>
      {open ? <MobileMenu active={active} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
