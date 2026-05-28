import type { Metadata } from "next";
import { BookingSection } from "@/components/BookingSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar cita",
  description: `Solicite una cita dental en ${site.name}, La Romana, Republica Dominicana.`,
};

export default function AppointmentPage() {
  return (
    <main>
      <BookingSection />
    </main>
  );
}
