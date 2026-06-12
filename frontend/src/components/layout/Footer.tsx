import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-sm text-faint">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
