import Link from "next/link";
import { CalendarDays, CheckCircle2, ExternalLink } from "lucide-react";

export function Appointment() {
  return (
    <section className="bg-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-200">
            Citas y agenda
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Reserva en linea y sincroniza tu visita.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Solicita tu cita por el formulario y confirma los detalles con nuestro equipo
            antes de tu visita.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-slate-200">
            {[
              "Indica el horario que mejor se ajuste a tu dia.",
              "Recibe confirmacion por WhatsApp o correo.",
              "Comparte sintomas o preferencias desde el formulario de citas.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-aqua-300" aria-hidden />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/citas"
              className="rounded-3xl bg-aqua-300 p-6 text-ink transition hover:bg-aqua-200"
            >
              <CalendarDays size={28} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold">Solicitar cita</h3>
              <p className="mt-3 text-sm leading-6 text-aqua-950">
                Envia tu solicitud para evaluacion, limpieza o consulta especializada.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Ir al formulario <ExternalLink size={16} aria-hidden />
              </span>
            </Link>
            <Link
              href="/citas"
              className="rounded-3xl border border-white/10 bg-white p-6 text-ink transition hover:bg-aqua-50"
            >
              <CalendarDays size={28} aria-hidden />
              <h3 className="mt-6 text-2xl font-semibold">Calendly pronto</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                La reserva directa se conectara cuando la clinica active su agenda publica.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-aqua-800">
                Ver placeholder <ExternalLink size={16} aria-hidden />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
