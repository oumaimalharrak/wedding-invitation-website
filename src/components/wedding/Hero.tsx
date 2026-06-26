import heroArch from "@/assets/arch.jpg";
import topImage from "@/assets/1.png";
import { Countdown } from "./Countdown";

const WEDDING_DATE = new Date("2026-07-31T17:00:00");

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <img
      src={heroArch}
      alt="Arche florale de mariage avec des roses blush et blanches au coucher du soleil"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1280}
    />
    <div className="absolute inset-0 bg-accent-foreground/40" />

    <div className="relative z-10 text-center px-6">
      <img src={topImage} alt="Décoration" className="mx-auto mb-4 w-40 md:w-56" />
      <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-6" style={{ color: "#ffffff" }}>
        Nous Nous Marions
      </p>
      <h1 className="font-serif-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none" style={{ color: "#ffffff" }}>
        Oumaima <span className="italic text-foregrounde"><br />&<br /></span> Soufian
      </h1>
      <p className="mt-6 font-serif-display italic text-xl md:text-2xl text-muted-foreground" style={{ color: "#ffffff" }}>
        31 · Juillet · 2026  ·  Maison Islane, Tanger
      </p>

      <div className="">
        <Countdown target={WEDDING_DATE} />
      </div>
    </div>
  </section>
);
