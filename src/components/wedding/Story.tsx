import storyImg from "@/assets/story-hands.jpg";
import { SectionTitle } from "./SectionTitle";

export const Story = () => (
  <section id="historia" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="Nuestra Historia" title="Cómo empezó todo" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="overflow-hidden rounded-sm">
          <img
            src={storyImg}
            alt="Manos de la pareja con anillo dorado sobre lino crema"
            className="w-full h-[480px] object-cover"
            loading="lazy"
            width={1280}
            height={1280}
          />
        </div>

        <div className="space-y-6 font-serif-display text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
            Nos conocimos un verano cualquiera en Madrid, en la terraza de un
            café que ya no existe. Diego pidió un café solo, Elena un té con
            menta, y la conversación duró hasta el cierre.
          </p>
          <p>
            Siete años, tres mudanzas y un perro llamado <em>Olivo</em> después,
            decidimos que era hora de celebrarlo con la gente que más queremos.
          </p>
          <p className="italic text-primary">
            Y ese día, por fin, nos diremos sí.
          </p>
        </div>
      </div>
    </div>
  </section>
);
