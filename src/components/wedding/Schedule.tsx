import { SectionTitle } from "./SectionTitle";
import { Newspaper, Coffee, Flag, UtensilsCrossed, Music, Sparkles, Gift } from "lucide-react";

const events = [
  {
    time: "",
    title: "Arrivée des invités",
    desc: "Nous accueillons chaleureusement notre famille et nos amis pour cette célébration spéciale.",
    Icon: Flag,
  },
  {
    time: "",
    title: "Cérémonie de mariage traditionnelle",
    desc: "Un moment magnifique où nous commençons notre vie à deux, entourés de nos proches.",
    Icon: Newspaper,
  },
  {
    time: "",
    title: "Thé Marocain et Douceurs",
    desc: "Savourez un thé marocain traditionnel, des douceurs et de délicieuses friandises.",
    Icon: Coffee,
  },
  {
    time: "",
    title: "Entrée de l'Amariya",
    desc: "Rejoignez-nous pour l'un des moments les plus précieux de la soirée, alors que la célébration continue.",
    Icon: Sparkles,
  },
  {
    time: "",
    title: "Dîner",
    desc: "Un dîner festif partagé avec la famille et les amis.",
    Icon: UtensilsCrossed,
  },
  {
    time: "",
    title: "Musique et Danse",
    desc: "Une soirée remplie de joie, de musique et de festivités.",
    Icon: Music,
  },
  {
    time: "",
    title: "Robe Blanche",
    desc: "Un moment spécial pour marquer le début de notre nouveau chapitre ensemble.",
    Icon: Gift,
  },
];

export const Schedule = () => {
  const uniqueEvents = events.filter(
    (event, index, self) => self.findIndex((e) => e.title === event.title) === index
  );

  return (
    <section id="schedule" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="Le Jour" title="Programme" />

        <ol className="relative border-l border-primary/30 ml-6 md:ml-12 space-y-12">
          {uniqueEvents.map(({ time, title, desc, Icon }) => (
            <li key={title} className="pl-8 md:pl-12 relative">
              <span className="absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border border-primary/40">
                <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
              </span>
              {time && (
                <div className="font-serif-display italic text-primary text-lg">{time}</div>
              )}
              <h3 className="font-serif-display text-2xl md:text-3xl text-foreground mt-1">{title}</h3>
              <p className="text-muted-foreground mt-1">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
