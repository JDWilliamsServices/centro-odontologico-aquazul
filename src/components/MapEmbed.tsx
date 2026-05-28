import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-aqua-100 bg-white shadow-soft">
      <div className="flex items-center gap-3 border-b border-aqua-100 px-5 py-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-aqua-50 text-aqua-800">
          <MapPin size={20} aria-hidden />
        </span>
        <div>
          <h2 className="font-semibold text-ink">Visitanos en La Romana</h2>
          <p className="text-sm text-slate-500">{site.address}</p>
        </div>
      </div>
      <iframe
        title="Mapa Centro Odontologico AquaZul"
        src={site.mapsEmbedUrl}
        className="h-[360px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
