import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";
import { gallery } from "@/content/site";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionHead
            number="07"
            kicker="gallery"
            title="Life, lately"
            intro="A few frames from the court, the desk, and everywhere in between."
          />
          <GalleryGrid items={gallery} />
        </Reveal>
      </Container>
    </section>
  );
}
