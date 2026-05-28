import { doctors } from "@/lib/site";

export function DoctorCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {doctors.map((doctor) => (
        <article key={doctor.name} className="rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm">
          <div className="flex aspect-[4/3] items-end rounded-3xl bg-[linear-gradient(135deg,#cffafe,#ffffff_55%,#0e7490)] p-5">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-white text-2xl font-semibold text-aqua-800 shadow-soft">
              {doctor.initials}
            </span>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-ink">{doctor.name}</h3>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-aqua-700">
            {doctor.role}
          </p>
          <p className="mt-4 leading-7 text-slate-600">{doctor.bio}</p>
        </article>
      ))}
    </div>
  );
}
