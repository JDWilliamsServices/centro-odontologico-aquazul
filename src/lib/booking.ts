export const APPOINTMENT_FORM_NAME = "citas-aquazul";

export const appointmentServices = [
  "General Consultation",
  "Dental Cleaning",
  "Whitening",
  "Orthodontics",
  "Dental Implants",
  "Emergency Dental Visit",
  "Other",
] as const;

export const appointmentServiceLabels: Record<(typeof appointmentServices)[number], string> = {
  "General Consultation": "Consulta general",
  "Dental Cleaning": "Limpieza dental",
  Whitening: "Blanqueamiento",
  Orthodontics: "Ortodoncia",
  "Dental Implants": "Implantes dentales",
  "Emergency Dental Visit": "Emergencia dental",
  Other: "Otro",
};

// Future Google Calendar integration:
// Add a server-only Netlify Function or Next Route Handler that reads private
// GOOGLE_CALENDAR_* environment variables, creates tentative events after staff
// review, and never exposes API keys or service-account secrets in client code.
