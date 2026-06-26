import storyImg from "@/assets/story-hands.jpeg";
import { SectionTitle } from "./SectionTitle";

export const Story = () => (
  <section id="story" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="Notre Journée" title="Un Jour Spécial à Partager" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="overflow-hidden rounded-sm">
          <img
            src={storyImg}
            alt="Les mains du couple avec une bague en or sur du lin crème"
            className="w-full h-[460px] object-cover"
            loading="lazy"
            width={1280}
            height={1280}
          />
        </div>

        <div className="space-y-6 font-serif-display text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
Un mariage est bien plus qu'une simple cérémonie: c'est une célébration de l'amour, de la famille, de l'amitié et d'un nouveau départ. Nous sommes impatients de nous réunir avec les personnes qui comptent le plus pour nous et de créer des souvenirs inoubliables. Votre présence rendra cette journée encore plus spéciale, et nous avons hâte de la célébrer ensemble.
          </p>
         
          <p className="italic text-primary">
Une journée d'amour, de joie et de nouveaux départs.          </p>
        </div>
      </div>
    </div>
  </section>
);
