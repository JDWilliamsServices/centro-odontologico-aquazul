import {
  BadgePlus,
  CalendarDays,
  HeartPulse,
  MapPin,
  ShieldCheck,
  SmilePlus,
  Sparkles,
  Star,
  Syringe,
} from "lucide-react";

export const site = {
  name: "Centro Odontologico AquaZul",
  shortName: "AquaZul",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aquazul.jdintellicore.com",
  description:
    "Clinica dental moderna en La Romana, Republica Dominicana, especializada en odontologia estetica, preventiva, restauradora e implantologia.",
  location: "La Romana, Republica Dominicana",
  phone: "+1 (809) 555-0100",
  email: "aquazulcod@gmail.com",
  instagram: "@aquazulcod",
  manager: "Dr. Victor Lappost",
  address: "La Romana, Republica Dominicana",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/aquazul/consulta",
  googleCalendarUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ||
    "https://calendar.google.com/calendar/u/0/r/eventedit",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/18095550100",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=La%20Romana%2C%20Dominican%20Republic&output=embed",
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/doctores", label: "Doctores" },
  { href: "/citas", label: "Citas" },
  { href: "/contacto", label: "Contacto" },
];

export const services = [
  {
    title: "Diseno de Sonrisa",
    description:
      "Plan estetico personalizado con analisis facial, armonia dental y resultados naturales.",
    icon: Sparkles,
  },
  {
    title: "Ortodoncia",
    description:
      "Alineacion dental con opciones modernas para adolescentes y adultos.",
    icon: SmilePlus,
  },
  {
    title: "Implantes Dentales",
    description:
      "Reposicion de piezas con planificacion precisa, restauracion funcional y seguimiento clinico.",
    icon: BadgePlus,
  },
  {
    title: "Odontologia Preventiva",
    description:
      "Limpiezas, diagnostico temprano, sellantes y planes de cuidado familiar.",
    icon: ShieldCheck,
  },
  {
    title: "Endodoncia",
    description:
      "Tratamiento de conductos con enfoque conservador para aliviar dolor y preservar dientes.",
    icon: HeartPulse,
  },
  {
    title: "Blanqueamiento",
    description:
      "Protocolos seguros para aclarar la sonrisa manteniendo el brillo y la salud del esmalte.",
    icon: Star,
  },
  {
    title: "Cirugia Oral",
    description:
      "Extracciones y procedimientos ambulatorios con control, confort y recuperacion guiada.",
    icon: Syringe,
  },
  {
    title: "Emergencias Dentales",
    description:
      "Atencion prioritaria para dolor, fracturas, inflamacion o molestias inesperadas.",
    icon: CalendarDays,
  },
];

export const doctors = [
  {
    name: "Dra. Camila Rivera",
    role: "Odontologia estetica y rehabilitacion oral",
    bio: "Enfoque en sonrisas naturales, planificacion digital y restauraciones de alta precision.",
    initials: "CR",
  },
  {
    name: "Dr. Adrian Mendez",
    role: "Implantologia y cirugia oral",
    bio: "Tratamientos quirurgicos conservadores con protocolos de recuperacion clara y segura.",
    initials: "AM",
  },
  {
    name: "Dra. Valentina Reyes",
    role: "Ortodoncia y odontologia preventiva",
    bio: "Cuidado familiar, alineadores y planes preventivos pensados para cada etapa.",
    initials: "VR",
  },
];

export const trustMarkers = [
  "Tecnologia diagnostica moderna",
  "Atencion bilingue disponible",
  "Protocolos estrictos de bioseguridad",
  "Plan de tratamiento claro antes de iniciar",
];

export const contactHighlights = [
  { label: "Ubicacion", value: site.location, icon: MapPin },
  { label: "Citas", value: site.phone, icon: CalendarDays },
  { label: "Respuesta", value: "24 horas laborables", icon: HeartPulse },
];
