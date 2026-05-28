"use client";

import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import {
  APPOINTMENT_FORM_NAME,
  appointmentServiceLabels,
  appointmentServices,
} from "@/lib/booking";

const initialForm = {
  nombre: "",
  telefono: "",
  email: "",
  fecha_preferida: "",
  hora_preferida: "",
  servicio: "",
  paciente_nuevo: "",
  mensaje: "",
  "bot-field": "",
};

function sanitizeInput(value) {
  return value.replace(/[<>{}[\]\\]/g, "").replace(/\s+/g, " ").trim();
}

function sanitizeMessage(value) {
  return value.replace(/[<>{}[\]\\]/g, "").trim().slice(0, 1200);
}

function encodeForm(data) {
  return new URLSearchParams(data).toString();
}

export function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function getSanitizedForm() {
    return {
      "form-name": APPOINTMENT_FORM_NAME,
      nombre: sanitizeInput(form.nombre),
      telefono: sanitizeInput(form.telefono),
      email: sanitizeInput(form.email).toLowerCase(),
      fecha_preferida: sanitizeInput(form.fecha_preferida),
      hora_preferida: sanitizeInput(form.hora_preferida),
      servicio: sanitizeInput(form.servicio),
      paciente_nuevo: sanitizeInput(form.paciente_nuevo),
      mensaje: sanitizeMessage(form.mensaje),
      "bot-field": sanitizeInput(form["bot-field"]),
    };
  }

  function validate(data) {
    if (data["bot-field"]) return "No se pudo procesar la solicitud.";

    const required = [
      data.nombre,
      data.telefono,
      data.email,
      data.fecha_preferida,
      data.hora_preferida,
      data.servicio,
      data.paciente_nuevo,
    ];

    if (required.some((value) => !value)) {
      return "Complete los campos requeridos para solicitar su cita.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return "Ingrese un correo electronico valido.";
    }

    if (data.fecha_preferida < minDate) {
      return "Seleccione una fecha futura o la fecha de hoy.";
    }

    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const sanitized = getSanitizedForm();
    const validationError = validate(sanitized);

    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(sanitized),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("Hubo un problema enviando la solicitud. Intente nuevamente.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-aqua-200 bg-aqua-50 p-6 text-aqua-950 shadow-soft">
        <CheckCircle2 className="h-9 w-9 text-aqua-700" aria-hidden />
        <h2 className="mt-4 text-2xl font-semibold">Solicitud recibida</h2>
        <p className="mt-3 leading-7">
          Gracias. Su solicitud de cita ha sido recibida. Nuestro equipo le
          contactara pronto para confirmar su cita.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-full border border-aqua-300 px-5 py-2.5 text-sm font-semibold text-aqua-900 transition hover:bg-white"
        >
          Solicitar otra cita
        </button>
      </div>
    );
  }

  return (
    <form
      name={APPOINTMENT_FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="rounded-lg border border-aqua-100 bg-white p-5 shadow-soft sm:p-7"
    >
      <input type="hidden" name="form-name" value={APPOINTMENT_FORM_NAME} />
      <p className="hidden">
        <label>
          No completar:{" "}
          <input name="bot-field" value={form["bot-field"]} onChange={updateField} />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre completo" name="nombre" value={form.nombre} onChange={updateField} required />
        <Field
          label="Telefono / WhatsApp"
          name="telefono"
          type="tel"
          value={form.telefono}
          onChange={updateField}
          required
        />
        <Field label="Correo electronico" name="email" type="email" value={form.email} onChange={updateField} required />
        <Field
          label="Fecha preferida"
          name="fecha_preferida"
          type="date"
          min={minDate}
          value={form.fecha_preferida}
          onChange={updateField}
          required
        />
        <Field
          label="Hora preferida"
          name="hora_preferida"
          type="time"
          value={form.hora_preferida}
          onChange={updateField}
          required
        />
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Servicio requerido
          <select
            name="servicio"
            value={form.servicio}
            onChange={updateField}
            required
            className="h-12 rounded-lg border border-aqua-100 bg-white px-3 text-sm font-normal text-ink outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
          >
            <option value="">Seleccione un servicio</option>
            {appointmentServices.map((service) => (
              <option key={service} value={service}>
                {appointmentServiceLabels[service]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-5 rounded-lg border border-aqua-100 p-4">
        <legend className="px-2 text-sm font-semibold text-ink">Paciente nuevo?</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {["Si", "No"].map((option) => (
            <label key={option} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
              <input
                type="radio"
                name="paciente_nuevo"
                value={option}
                checked={form.paciente_nuevo === option}
                onChange={updateField}
                required
                className="h-4 w-4 accent-aqua-700"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-ink">
        Mensaje
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={updateField}
          rows={5}
          placeholder="Cuente brevemente el motivo de su visita o cualquier detalle importante."
          className="resize-y rounded-lg border border-aqua-100 bg-white px-3 py-3 text-sm font-normal text-ink outline-none transition placeholder:text-slate-400 focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
        />
      </label>

      {error ? (
        <div className="mt-5 flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-aqua-800 disabled:cursor-not-allowed disabled:bg-aqua-400 sm:w-auto"
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
        Enviar solicitud
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, required = false, min }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className="h-12 rounded-lg border border-aqua-100 bg-white px-3 text-sm font-normal text-ink outline-none transition placeholder:text-slate-400 focus:border-aqua-500 focus:ring-4 focus:ring-aqua-100"
      />
    </label>
  );
}
