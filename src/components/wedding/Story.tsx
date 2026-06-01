import storyImg from "@/assets/story-hands.jpeg";
import { SectionTitle } from "./SectionTitle";

export const Story = () => (
  <section id="story" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="Our Day" title="A Special Day to Share" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="overflow-hidden rounded-sm">
          <img
            src={storyImg}
            alt="Couple's hands with a gold ring on cream linen"
            className="w-full h-[480px] object-cover"
            loading="lazy"
            width={1280}
            height={1280}
          />
        </div>

        <div className="space-y-6 font-serif-display text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
           A wedding is more than a ceremony—it's a celebration of love, family, friendship, and new beginnings. We are excited to gather with the people who mean the most to us and create memories that will last a lifetime. Your presence will make our special day even more meaningful, and we can't wait to celebrate together.

          </p>
         
          <p className="italic text-primary">
            A day of love, joy, and new beginnings .
          </p>
        </div>
      </div>
    </div>
  </section>
);
