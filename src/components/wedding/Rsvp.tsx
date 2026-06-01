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
      toast.success("Thanks for confirming! See you July 31.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="confirm" className="py-24 md:py-32 px-6 bg-secondary/40">
      <div className="max-w-2xl mx-auto">
        <SectionTitle eyebrow="RSVP" title="Will you celebrate with us?" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Full Name</Label>
            <Input id="name" name="name" required className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</Label>
            <Input id="email" name="email" type="email" required className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-3">
            <Label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Will you attend?</Label>
            <RadioGroup defaultValue="yes" name="attend" className="flex gap-8">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="font-serif-display text-lg">Yes, I’ll be there</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="font-serif-display text-lg">I can’t make it</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Guests</Label>
            <Input id="guests" name="guests" type="number" min={0} max={5} defaultValue={0} className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Allergies or message</Label>
            <Textarea id="notes" name="notes" rows={3} className="rounded-none border-0 border-b border-border bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0 resize-none" />
          </div>

          <div className="pt-4">
            <Button type="submit" disabled={submitting} className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground tracking-[0.25em] text-xs px-10 py-6">
              {submitting ? "SENDING..." : "RSVP"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
