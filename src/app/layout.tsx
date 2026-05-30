import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Clinica dental en La Romana`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "dentista La Romana",
    "clinica dental Republica Dominicana",
    "Centro Odontologico AquaZul",
    "implantes dentales",
    "diseno de sonrisa",
    "ortodoncia",
  ],
  openGraph: {
    title: `${site.name} | Clinica dental en La Romana`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_DO",
    type: "website",
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
