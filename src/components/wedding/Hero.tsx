import heroArch from "@/assets/arch.jpg";
import topImage from "@/assets/1.png";
import { Countdown } from "./Countdown";
import { ChevronDown } from "lucide-react";

const scrollToNext = () => {
  document.getElementById("story")?.scrollIntoView({
    behavior: "smooth",
  });
};

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
      <p className="mt-6 font-serif-display italic text-xl md:text-4xl text-muted-foreground" style={{ color: "#ffffff" }}>Accueil des invités dès 19h</p>
      <div className="">
        <Countdown target={WEDDING_DATE} />
      </div>
    </div>
   <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
  <button
    onClick={scrollToNext}
    aria-label="Découvrir la suite"
    className="flex flex-col items-center gap-2 text-white animate-bounce [animation-duration:2.5s]"
  >
    <span className="text-xs uppercase tracking-[0.3em]">
      Découvrir
    </span>

    <div className="rounded-full border border-white/40 bg-white/10 p-3 backdrop-blur-md">
      <ChevronDown className="h-6 w-6" />
    </div>
  </button>
</div>
  </section>
);
