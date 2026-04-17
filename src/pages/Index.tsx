import { useState } from "react";
import { useNavigate } from "react-router-dom";
import waxSeal from "@/assets/wax-seal.jpg";

type Stage = "idle" | "opening" | "leaving";

const Index = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>("idle");

  const handleOpen = () => {
    if (stage !== "idle") return;
    setStage("opening");
    // Schedule the next stages directly so re-renders don't cancel them.
    window.setTimeout(() => setStage("leaving"), 2200);
    window.setTimeout(() => navigate("/boda"), 3000);
  };

  return (
    <main
      className={`relative h-screen w-screen overflow-hidden bg-background ${
        stage === "leaving" ? "animate-fade-out" : ""
      }`}
    >
      {/* Envelope back (paper) — base layer */}
      <img
        src={waxSeal}
        alt="Sello de cera con monograma E & D sobre sobre crema"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Wax seal overlay — clickable, pops off on open */}
      <button
        type="button"
        aria-label="Abrir invitación"
        onClick={handleOpen}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
      >
        <span
          className={`block h-44 w-44 md:h-56 md:w-56 rounded-full bg-primary/0 transition-transform duration-300 ${
            stage === "idle" ? "group-hover:scale-105" : "animate-seal-crack"
          }`}
          style={{
            // Invisible hit-area aligned to the seal in the photo
            transformOrigin: "center",
          }}
        />
      </button>

      {/* Top envelope flap — folds open after seal cracks */}
      {stage !== "idle" && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 origin-top animate-flap-open"
          style={{
            background: "hsl(var(--background))",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            boxShadow: "0 8px 24px -8px hsl(var(--foreground) / 0.15)",
            animationDelay: "0.6s",
          }}
        />
      )}

      {/* Zoom-in vignette as we fly into the envelope */}
      {stage === "leaving" && (
        <div className="pointer-events-none absolute inset-0 bg-background animate-envelope-zoom origin-center" />
      )}

      {/* Centered branding overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p
          className={`font-serif-display italic text-primary text-lg md:text-xl tracking-wide translate-y-16 md:translate-y-24 transition-opacity duration-500 ${
            stage === "idle" ? "opacity-100" : "opacity-0"
          }`}
        >
          The Digital Yes
        </p>
      </div>

      {/* Skip link */}
      <button
        type="button"
        onClick={handleOpen}
        disabled={stage !== "idle"}
        className={`absolute bottom-6 right-6 md:bottom-8 md:right-10 text-[10px] md:text-xs tracking-[0.3em] text-foreground/70 hover:text-foreground transition-opacity duration-500 ${
          stage === "idle" ? "opacity-100" : "opacity-0"
        }`}
      >
        SALTAR
      </button>

      {/* Hint */}
      <p
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground/50 transition-opacity duration-500 ${
          stage === "idle" ? "opacity-100" : "opacity-0"
        }`}
      >
        Toca el sello para abrir
      </p>
    </main>
  );
};

export default Index;
