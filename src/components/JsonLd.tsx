import { site, services } from "@/lib/site";

export function JsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Romana",
      addressCountry: "DO",
    },
    areaServed: "La Romana, Republica Dominicana",
    medicalSpecialty: services.map((service) => service.title),
    url: site.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
