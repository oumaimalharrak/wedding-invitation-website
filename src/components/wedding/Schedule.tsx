import { SectionTitle } from "./SectionTitle";
import { Church, Wine, UtensilsCrossed, Music, Sparkles } from "lucide-react";

const events = [
  { time: "17:00", title: "Ceremonia", desc: "Jardín principal", Icon: Church },
  { time: "18:00", title: "Cóctel de bienvenida", desc: "Terraza de los olivos", Icon: Wine },
  { time: "20:30", title: "Banquete", desc: "Salón La Hacienda", Icon: UtensilsCrossed },
  { time: "23:00", title: "Baile y barra libre", desc: "Patio iluminado", Icon: Music },
  { time: "02:00", title: "Recena & sorpresa", desc: "Hasta que el cuerpo aguante", Icon: Sparkles },
];

export const Schedule = () => (
  <section id="agenda" className="py-24 md:py-32 px-6 bg-secondary/40">
    <div className="max-w-3xl mx-auto">
      <SectionTitle eyebrow="El Día" title="Programa" />

      <ol className="relative border-l border-primary/30 ml-6 md:ml-12 space-y-12">
        {events.map(({ time, title, desc, Icon }) => (
          <li key={time} className="pl-8 md:pl-12 relative">
            <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border border-primary/40">
              <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
            </span>
            <div className="font-serif-display italic text-primary text-lg">{time}</div>
            <h3 className="font-serif-display text-2xl md:text-3xl text-foreground mt-1">{title}</h3>
            <p className="text-muted-foreground mt-1">{desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
