import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { trustMarkers } from "@/lib/site";

export function Hero() {
  return (
    <section className="aqua-grid overflow-hidden px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-aqua-200 bg-white/80 px-4 py-2 text-sm font-semibold text-aqua-800">
              <Sparkles size={16} aria-hidden />
              Clinica dental premium en La Romana
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-ink md:text-7xl">
              Centro Odontologico AquaZul
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Odontologia moderna, estetica y preventiva con trato cercano,
              tecnologia precisa y una experiencia disenada para que sonrias con confianza.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/citas"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-aqua-800"
              >
                <CalendarDays size={18} aria-hidden />
                Agendar evaluacion
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-aqua-200 bg-white px-6 py-3.5 text-sm font-semibold text-aqua-900 transition hover:border-aqua-300 hover:bg-aqua-50"
              >
                Ver servicios
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustMarkers.map((marker) => (
                <div key={marker} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-aqua-700" aria-hidden />
                  {marker}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="absolute inset-4 rounded-[2rem] bg-aqua-200/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
              <div className="aspect-[4/3] bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_42%,#a5f3fc_100%)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-aqua-100 bg-white/72 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-aqua-700 px-4 py-2 text-sm font-semibold text-white">
                      AquaZul Care
                    </span>
                    <span className="text-sm font-semibold text-aqua-800">La Romana</span>
                  </div>
                  <div>
                    <div className="grid grid-cols-3 gap-3">
                      {["Estetica", "Implantes", "Ortodoncia"].map((item) => (
                        <div key={item} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-aqua-100" />
                          <p className="text-xs font-semibold text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 rounded-3xl bg-ink p-5 text-white">
                      <p className="text-sm text-aqua-100">Consulta inicial</p>
                      <p className="mt-2 text-2xl font-semibold">Plan claro en una visita</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
