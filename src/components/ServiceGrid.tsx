import { services } from "@/lib/site";

export function ServiceGrid({ featured = false }: { featured?: boolean }) {
  const items = featured ? services.slice(0, 6) : services;

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => {
        const Icon = service.icon;
        return (
          <article
            key={service.title}
            className="group rounded-3xl border border-aqua-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-50 text-aqua-800 transition group-hover:bg-aqua-700 group-hover:text-white">
              <Icon size={24} aria-hidden />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-ink">{service.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
          </article>
        );
      })}
    </div>
  );
}
