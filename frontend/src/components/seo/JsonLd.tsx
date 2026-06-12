import { site, socials } from "@/content/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Neoproject d.o.o.",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Gimnazija Šentvid",
    },
    knowsAbout: [
      "Full-stack development",
      "Agentic AI development",
      "Python",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ljubljana",
      addressCountry: "SI",
    },
    sameAs: socials.map((s) => s.href).filter((href) => href.startsWith("http")),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
