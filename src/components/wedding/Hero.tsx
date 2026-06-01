import heroArch from "@/assets/hero-arch.jpg";
import { Countdown } from "./Countdown";

const WEDDING_DATE = new Date("2026-07-31T17:00:00");

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <img
      src={heroArch}
      alt="Floral wedding arch with blush and white roses at sunset"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1280}
    />
    <div className="absolute inset-0 bg-background/60" />

    <div className="relative z-10 text-center px-6">
      <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-6">
        We're Getting Married
      </p>
      <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none">
        Oumaima <span className="italic text-primary">&</span> Soufian
      </h1>
      <p className="mt-6 font-serif-display italic text-xl md:text-2xl text-muted-foreground">
        31 · July · 2026  ·  Maison Islane, Tangier
      </p>

      <div className="mt-12">
        <Countdown target={WEDDING_DATE} />
      </div>
    </div>
  </section>
);
