import type { Metadata } from "next";
import { Appointment } from "@/components/Appointment";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";

export const metadata: Metadata = {
  title: "Servicios dentales",
  description:
    "Servicios odontologicos de Centro Odontologico AquaZul: estetica dental, implantes, ortodoncia, prevencion, endodoncia, blanqueamiento y emergencias.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section
        eyebrow="Servicios"
        title="Odontologia integral con estandares modernos."
        description="Integramos diagnostico, estetica y funcion para disenar tratamientos que se sientan naturales y duren en el tiempo."
        className="aqua-grid"
      >
        <ServiceGrid />
      </Section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            ["01", "Evaluacion", "Escuchamos tu objetivo y hacemos una revision completa."],
            ["02", "Plan", "Presentamos opciones, tiempos, costos estimados y cuidados."],
            ["03", "Seguimiento", "Acompanamos la recuperacion y el mantenimiento."],
          ].map(([number, title, text]) => (
            <article key={number} className="rounded-3xl border border-aqua-100 bg-pearl p-6">
              <p className="text-sm font-semibold text-aqua-700">{number}</p>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Appointment />
    </main>
  );
}
