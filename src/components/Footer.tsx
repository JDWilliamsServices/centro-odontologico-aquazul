import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-aqua-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/images/aquazul-logo.png"
              alt="AquaZul Centro Odontologico"
              className="h-14 w-auto"
            />
            <div>
              <p className="text-sm text-slate-500">{site.location}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
            Odontologia estetica, preventiva y restauradora con una experiencia
            calmada, precisa y orientada al bienestar del paciente.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua-800">
            Navegacion
          </h2>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-aqua-800">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua-800">
            Contacto
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-aqua-800">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-aqua-800">
              {site.email}
            </a>
            <span>{site.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-aqua-100 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
