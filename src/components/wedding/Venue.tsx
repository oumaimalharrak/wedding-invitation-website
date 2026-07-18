import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const Venue = () => (
  <section id="venue" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="Le Lieu" title="Maison Islane" />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="overflow-hidden rounded-sm border border-border">
          <iframe
            title="Localisation de Maison Islane"
            src="https://www.google.com/maps?q=35.755153,-5.7997546&hl=en&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          <p className="font-serif-display text-2xl md:text-3xl text-foreground leading-snug">
            Une villa privée à Tanger, Maroc, à l'emplacement exact partagé dans votre lien de carte.
          </p>
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p>Maison Islane</p>
              <p>Tanger, Maroc</p>
              <p>35.755153, -5.7997546</p>
            </div>
          </div>
          <Button asChild variant="outline" className="rounded-none border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.2em] text-xs">
            <a
              href="https://maps.app.goo.gl/cBys7RXaJUcJatRV9"
              target="_blank"
              rel="noreferrer"
            >
              VOIR L'ITINÉRAIRE
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
