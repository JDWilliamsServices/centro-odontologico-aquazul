import { doctors } from "@/lib/site";
import { Instagram } from "lucide-react";

export function DoctorCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {doctors.map((doctor) => (
        <article
          key={doctor.name}
          className="overflow-hidden rounded-3xl border border-aqua-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,#cffafe,#ffffff_55%,#0e7490)]">
            <img
              src={doctor.image}
              alt={`${doctor.name} en Centro Odontologico AquaZul`}
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-5 left-5 grid h-16 w-16 place-items-center rounded-full bg-white/95 text-xl font-semibold text-aqua-800 shadow-soft">
              {doctor.initials}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-ink">{doctor.name}</h3>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-aqua-700">
              {doctor.role}
            </p>
            <p className="mt-4 leading-7 text-slate-600">{doctor.bio}</p>
            <a
              href={doctor.socialUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-aqua-100 px-4 py-2 text-sm font-semibold text-aqua-800 transition hover:border-aqua-300 hover:bg-aqua-50"
            >
              <Instagram className="h-4 w-4" />
              {doctor.socialLabel}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
