import type { Metadata } from "next";
import { Appointment } from "@/components/Appointment";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { contactHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y citas",
  description:
    "Contacta a Centro Odontologico AquaZul en La Romana, agenda por Calendly o envia una solicitud de cita.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="aqua-grid px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-700">
            Contacto
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Coordina tu visita a AquaZul.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Envia tu solicitud, reserva en linea o ubicanos en La Romana. Responderemos con
            disponibilidad y detalles para tu consulta.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-3xl border border-aqua-100 bg-white p-5">
                  <Icon className="h-6 w-6 text-aqua-700" aria-hidden />
                  <h2 className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-aqua-800">
                    {item.label}
                  </h2>
                  <p className="mt-2 text-slate-700">{item.value}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <MapEmbed />
        </div>
      </section>

      <Appointment />
    </main>
  );
}
