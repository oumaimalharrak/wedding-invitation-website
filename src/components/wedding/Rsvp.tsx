import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Rsvp = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder — wire to backend later
    setTimeout(() => {
      setSubmitting(false);
      toast.success("¡Gracias por confirmar! Nos vemos el 13 de junio.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="confirmar" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-2xl mx-auto">
        <SectionTitle eyebrow="Confirma tu Asistencia" title="¿Vienes a celebrarlo?" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Nombre completo</Label>
            <Input id="name" name="name" required className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</Label>
            <Input id="email" name="email" type="email" required className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-3">
            <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">¿Asistirás?</Label>
            <RadioGroup defaultValue="si" name="attend" className="flex gap-8">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="si" id="si" />
                <Label htmlFor="si" className="font-serif-display text-lg">Sí, allí estaré</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="font-serif-display text-lg">No podré ir</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Acompañantes</Label>
            <Input id="guests" name="guests" type="number" min={0} max={5} defaultValue={0} className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Alergias o mensaje</Label>
            <Textarea id="notes" name="notes" rows={3} className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0 resize-none" />
          </div>

          <div className="pt-4">
            <Button type="submit" disabled={submitting} className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-[0.25em] text-xs px-10 py-6">
              {submitting ? "ENVIANDO..." : "CONFIRMAR ASISTENCIA"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
