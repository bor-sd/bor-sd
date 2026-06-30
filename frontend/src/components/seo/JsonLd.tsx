import { site, socials } from "@/content/site";

/*
  Structured data as a linked @graph — the pattern Google recommends for a
  personal profile page: a ProfilePage whose mainEntity is the Person, tied to
  a WebSite node. Helps name searches, knowledge-panel eligibility, and AI
  answer engines understand who this is.
*/
export function JsonLd() {
  const personId = `${site.url}/#person`;
  const websiteId = `${site.url}/#website`;
  const sameAs = socials
    .map((s) => s.href)
    .filter((href) => href.startsWith("http"));

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        name: `${site.name} - ${site.role}`,
        isPartOf: { "@id": websiteId },
        inLanguage: "en",
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: site.url,
        email: `mailto:${site.email}`,
        jobTitle: "Software Engineer",
        description: site.description,
        worksFor: { "@type": "Organization", name: "Neoproject d.o.o." },
        alumniOf: [
          { "@type": "EducationalOrganization", name: "Gimnazija Šentvid" },
          { "@type": "EducationalOrganization", name: "Osnovna šola Medvode" },
        ],
        nationality: { "@type": "Country", name: "Slovenia" },
        homeLocation: { "@type": "Place", name: "Ljubljana, Slovenia" },
        knowsLanguage: ["sl", "en", "de", "hr"],
        award:
          "3rd place, Slovenian national primary-school programming competition (8th grade)",
        knowsAbout: [
          "Full-stack development",
          "Agentic AI development",
          "Python",
          "TypeScript",
          "Next.js",
          "FastAPI",
          "PostgreSQL",
          "Odoo",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ljubljana",
          addressCountry: "SI",
        },
        sameAs,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
