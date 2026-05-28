import { CalendarClock, CalendarDays, Instagram, Mail, ShieldCheck } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { site } from "@/lib/site";

export function BookingSection() {
  return (
    <section className="aqua-grid px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-700">
            Citas dentales
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Solicite su cita en Centro Odontologico AquaZul
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Complete el formulario y el equipo de {site.manager} le contactara
            para confirmar disponibilidad, servicio y hora final de atencion.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoTile icon={CalendarClock} title="Respuesta" text="Confirmacion por WhatsApp o correo." />
            <InfoTile icon={ShieldCheck} title="Datos seguros" text="Sin claves privadas en el navegador." />
            <InfoTile icon={Mail} title="Recepcion" text={site.email} />
          </div>

          <div className="mt-8 rounded-lg border border-aqua-100 bg-white/80 p-5 shadow-soft backdrop-blur">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-aqua-700" aria-hidden />
              <div>
                <h2 className="text-lg font-semibold text-ink">Reserva directa proximamente</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Aqui se puede insertar Calendly cuando la clinica active su
                  agenda publica. Por ahora, el formulario envia solicitudes
                  para confirmacion manual.
                </p>
                <div className="mt-4 min-h-40 rounded-lg border border-dashed border-aqua-300 bg-aqua-50/70 p-4 text-sm text-aqua-900">
                  Placeholder Calendly: <span className="font-semibold">{site.calendlyUrl}</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href={`https://instagram.com/${site.instagram.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aqua-800 hover:text-aqua-950"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {site.instagram}
          </a>
        </div>

        <AppointmentForm />
      </div>
    </section>
  );
}

function InfoTile({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg border border-aqua-100 bg-white/85 p-4 shadow-sm backdrop-blur">
      <Icon className="h-5 w-5 text-aqua-700" aria-hidden />
      <h2 className="mt-3 text-sm font-semibold text-ink">{title}</h2>
      <p className="mt-1 text-sm leading-5 text-slate-600">{text}</p>
    </div>
  );
}
