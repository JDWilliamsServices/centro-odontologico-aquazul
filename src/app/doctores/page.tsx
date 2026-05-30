import type { Metadata } from "next";
import { DoctorCards } from "@/components/DoctorCards";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Doctores",
  description:
    "Conoce el equipo de Centro Odontologico AquaZul en La Romana, Republica Dominicana.",
};

export default function DoctorsPage() {
  return (
    <main>
      <Section
        eyebrow="Doctores"
        title="Un equipo enfocado en confianza clinica y resultados naturales."
        description="Nuestros doctores combinan criterio estetico, precision tecnica y comunicacion clara para que cada paciente entienda su tratamiento."
        className="aqua-grid"
      >
        <div className="space-y-8">
          <div className="overflow-hidden rounded-3xl border border-aqua-100 bg-aqua-950 shadow-soft">
            <img
              src="/images/aquazul-team-banner.png"
              alt="Equipo clinico de Centro Odontologico AquaZul"
              className="h-full w-full object-cover"
            />
          </div>
          <DoctorCards />
        </div>
      </Section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-ink p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-200">
            Filosofia AquaZul
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">
            Primero entendemos tu salud, luego disenamos el resultado.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Cada plan considera funcion, estetica, mantenimiento, presupuesto y ritmo de vida.
            La odontologia premium se siente mejor cuando es transparente.
          </p>
        </div>
      </section>
    </main>
  );
}
