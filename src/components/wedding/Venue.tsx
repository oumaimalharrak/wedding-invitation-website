import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const Venue = () => (
  <section id="lugar" className="py-24 md:py-32 px-6 bg-background">
    <div className="max-w-6xl mx-auto">
      <SectionTitle eyebrow="El Lugar" title="Finca El Romeral" />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="overflow-hidden rounded-sm border border-border">
          <iframe
            title="Ubicación Finca El Romeral"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-4.05%2C39.85%2C-3.95%2C39.92&layer=mapnik&marker=39.886%2C-4.0"
            className="w-full h-[420px]"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          <p className="font-serif-display text-2xl md:text-3xl text-foreground leading-snug">
            Una finca de piedra rodeada de olivos centenarios y campos de
            lavanda, a 45 minutos de Madrid.
          </p>
          <div className="flex items-start gap-3 text-muted-foreground">
            <MapPin className="h-5 w-5 mt-1 text-primary shrink-0" strokeWidth={1.5} />
            <div>
              <p>Carretera de Toledo, km 32</p>
              <p>45500 Torrijos, Toledo</p>
            </div>
          </div>
          <Button asChild variant="outline" className="rounded-none border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground tracking-[0.2em] text-xs">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Finca+El+Romeral+Toledo"
              target="_blank"
              rel="noreferrer"
            >
              CÓMO LLEGAR
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
