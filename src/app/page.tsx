import Link from "next/link";
import { ArrowRight, Clock, Gem, HeartHandshake } from "lucide-react";
import { Appointment } from "@/components/Appointment";
import { DoctorCards } from "@/components/DoctorCards";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Hero />

      <Section
        eyebrow="Experiencia clinica"
        title="Una visita dental mas clara, calmada y precisa."
        description="Cada detalle del recorrido esta pensado para reducir friccion: diagnostico visual, explicaciones sencillas, agenda organizada y un equipo que acompana cada decision."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Diagnostico completo",
              text: "Evaluamos estetica, funcion y salud bucal antes de recomendar cualquier tratamiento.",
              icon: Gem,
            },
            {
              title: "Cuidado humano",
              text: "Comunicacion clara, manejo del confort y seguimiento posterior a cada visita.",
              icon: HeartHandshake,
            },
            {
              title: "Agenda flexible",
              text: "Reservas en linea, soporte por WhatsApp y recordatorios para que no pierdas tu cita.",
              icon: Clock,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-50 text-aqua-800">
                    <Icon size={24} aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Servicios"
        title="Tratamientos para cuidar, restaurar y elevar tu sonrisa."
        description="Desde prevencion familiar hasta estetica avanzada, construimos planes clinicos personalizados."
        className="bg-white"
      >
        <ServiceGrid featured />
        <Link
          href="/servicios"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-aqua-200 px-6 py-3 text-sm font-semibold text-aqua-900 transition hover:bg-aqua-50"
        >
          Explorar todos los servicios
          <ArrowRight size={17} aria-hidden />
        </Link>
      </Section>

      <Appointment />

      <Section
        eyebrow="Equipo"
        title="Especialistas con criterio estetico y enfoque preventivo."
        description="Un equipo multidisciplinario para acompanarte desde la evaluacion hasta el mantenimiento de resultados."
      >
        <DoctorCards />
      </Section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-700">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Cuentanos que necesitas y coordinamos tu visita.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nuestro equipo revisara tu solicitud y te respondera con disponibilidad,
              recomendaciones iniciales y proximos pasos.
            </p>
            <div className="mt-8">
              <MapEmbed />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
