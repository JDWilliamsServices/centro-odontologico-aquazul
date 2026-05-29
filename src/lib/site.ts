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
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://aquazul.jdintellicore.com",
  description:
    "Clinica dental moderna en La Romana, Republica Dominicana, especializada en odontologia estetica, preventiva, restauradora e implantologia.",
  location: "Calle Dr. Gonzalvo, Downtown Plaza, Suite 103, La Romana, RD",
  phone: "+1 (809) 770-7289",
  email: "aquazulcod@gmail.com",
  instagram: "@aquazulcod",
  manager: "Dr. Victor Lappost",
  address:
    "Calle Dr. Gonzalvo, Downtown Plaza, Suite 103, La Romana, Republica Dominicana",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/aquazul/consulta",
  googleCalendarUrl:
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL ||
    "https://calendar.google.com/calendar/u/0/r/eventedit",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/18097707289",
  mapsEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps?q=Calle%20Dr.%20Gonzalvo%2C%20Downtown%20Plaza%2C%20Suite%20103%2C%20La%20Romana%2C%20Dominican%20Republic&output=embed",
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
    name: "Dra. Juliana Rodriguez",
    role: "Ortodoncia y ortopedia maxilar",
    bio: "Formada en UNIBE, acompana a pacientes de La Romana con planes de alineacion, salud funcional y estetica dental.",
    initials: "JR",
    image: "/images/dr-juliana-rodriguez.png",
    socialLabel: "@julianarodz",
    socialUrl: "https://www.instagram.com/julianarodz",
  },
  {
    name: "Dr. Victor Lappost",
    role: "Rehabilitacion bucal, implantes y gestion clinica",
    bio: "Odontologo graduado con el mayor indice de UNIBE. Cuenta con doble maestria en Rehabilitacion Bucal e Implantes Dentales y en Administracion de Clinicas Dentales, con formacion en Mexico y Chicago.",
    initials: "VL",
    image: "/images/dr-victor-lappost.png",
    socialLabel: "@dr.victorlappost",
    socialUrl: "https://www.instagram.com/dr.victorlappost",
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
