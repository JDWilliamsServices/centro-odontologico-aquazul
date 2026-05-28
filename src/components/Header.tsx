"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aqua-100/80 bg-pearl/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="AquaZul inicio">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-aqua-700 text-lg font-bold text-white shadow-soft">
            AZ
          </span>
          <span>
            <span className="block text-base font-semibold leading-tight text-ink">
              AquaZul
            </span>
            <span className="block text-xs font-medium uppercase tracking-[0.18em] text-aqua-700">
              Centro Odontologico
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-aqua-50 hover:text-aqua-800",
                pathname === item.href && "bg-aqua-100 text-aqua-900",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/citas"
            className="inline-flex items-center gap-2 rounded-full bg-aqua-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-aqua-800"
          >
            <CalendarDays size={17} aria-hidden />
            Agendar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-aqua-100 text-aqua-900 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-aqua-100 bg-pearl px-5 py-4 md:hidden">
          <nav className="grid gap-2" aria-label="Navegacion movil">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700",
                  pathname === item.href && "bg-aqua-100 text-aqua-900",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/citas"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-aqua-700 px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarDays size={17} aria-hidden />
              Agendar cita
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
