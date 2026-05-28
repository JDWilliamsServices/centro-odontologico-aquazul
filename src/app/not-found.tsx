import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-aqua-700">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">Pagina no encontrada</h1>
        <p className="mt-4 text-lg text-slate-600">
          La ruta solicitada no esta disponible. Puedes volver al inicio para continuar.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-aqua-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-aqua-800"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
