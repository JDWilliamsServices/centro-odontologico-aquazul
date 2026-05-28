"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const services = [
  "Evaluacion inicial",
  "Diseno de sonrisa",
  "Ortodoncia",
  "Implantes dentales",
  "Limpieza dental",
  "Emergencia dental",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="contacto-aquazul"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-[2rem] border border-aqua-100 bg-white p-6 shadow-soft"
    >
      <input type="hidden" name="form-name" value="contacto-aquazul" />
      <p className="hidden">
        <label>
          No completar: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Nombre completo
          <input
            required
            name="nombre"
            type="text"
            autoComplete="name"
            className="rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Correo electronico
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Telefono
          <input
            required
            name="telefono"
            type="tel"
            autoComplete="tel"
            className="rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Servicio
          <select
            required
            name="servicio"
            className="rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona una opcion
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Preferencia de horario
        <select
          name="preferencia"
          className="rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          defaultValue="Manana"
        >
          <option>Manana</option>
          <option>Tarde</option>
          <option>Horario flexible</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Mensaje
        <textarea
          required
          name="mensaje"
          rows={5}
          className="resize-none rounded-2xl border border-aqua-100 bg-pearl px-4 py-3 font-normal outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          placeholder="Cuentanos brevemente que necesitas."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua-700 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-aqua-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send size={17} aria-hidden />
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {status === "sent" ? (
        <p className="rounded-2xl bg-aqua-50 px-4 py-3 text-sm font-medium text-aqua-900">
          Solicitud enviada. Nuestro equipo te contactara pronto.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          No pudimos enviar el formulario. Intentalo de nuevo o escribe por WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
