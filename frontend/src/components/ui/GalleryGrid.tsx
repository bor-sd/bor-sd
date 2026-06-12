"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import type { GalleryItem } from "@/content/site";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const photos = items.filter((i): i is GalleryItem & { src: string } => Boolean(i.src));
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft")
        setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length]);

  return (
    <>
      <div className="stagger grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {items.map((item, i) =>
          item.src ? (
            <button
              key={item.src}
              type="button"
              onClick={() => setIndex(photos.findIndex((p) => p.src === item.src))}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ) : (
            <div
              key={`placeholder-${i}`}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-surface-2 p-4 text-center"
            >
              <ImageIcon className="h-5 w-5 text-faint" aria-hidden />
              <span className="text-xs leading-snug text-faint">{item.caption}</span>
            </div>
          )
        )}
      </div>

      {index !== null && photos[index] ? (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 rounded p-2 text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-accent"
          >
            <X className="h-6 w-6" />
          </button>
          {photos.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => setIndex((index - 1 + photos.length) % photos.length)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded p-2 text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-accent md:left-6"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((index + 1) % photos.length)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-2 text-paper/80 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-accent md:right-6"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          ) : null}
          <div className="relative h-[75dvh] w-full max-w-4xl">
            <Image
              src={photos[index].src}
              alt={photos[index].caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-paper/80">{photos[index].caption}</p>
        </div>
      ) : null}
    </>
  );
}
