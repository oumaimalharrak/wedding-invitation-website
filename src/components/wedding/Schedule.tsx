import { SectionTitle } from "./SectionTitle";
import { Church, Coffee, Flag, UtensilsCrossed, Music, Sparkles, Gift } from "lucide-react";

const events = [
  {
    time: "",
    title: "Guest Arrival",
    desc: "We warmly welcome our family and friends to join us for this special celebration.",
    Icon: Flag,
  },
  {
    time: "",
    title: "Traditional Wedding Ceremony",
    desc: "A beautiful moment as we begin our journey together surrounded by our loved ones.",
    Icon: Church,
  },
  {
    time: "",
    title: "Moroccan Tea & Sweets",
    desc: "Enjoy traditional Moroccan tea, sweets, and delightful treats.",
    Icon: Coffee,
  },
  {
    time: "",
    title: "Amariya Entrance",
    desc: "Join us for one of the most cherished moments of the evening as the celebration continues.",
    Icon: Sparkles,
  },
  {
    time: "",
    title: "Dinner Service",
    desc: "A festive dinner shared with family and friends.",
    Icon: UtensilsCrossed,
  },
  {
    time: "",
    title: "Music & Dancing",
    desc: "An evening filled with joy, music, and celebration.",
    Icon: Music,
  },
  {
    time: "",
    title: "White Dress & Cake Cutting",
    desc: "A special moment to mark the beginning of our new chapter together.",
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
        <SectionTitle eyebrow="The Day" title="Schedule" />

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
