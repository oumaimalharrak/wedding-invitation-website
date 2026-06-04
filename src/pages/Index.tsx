import { useState } from "react";
import { useNavigate } from "react-router-dom";
import waxSeal from "@/assets/invitation-cover-bg.png";
import introVideo from "@/assets/wedding-intro.mp4";

type Stage = "idle" | "playing_video" | "transition_to_blue" | "leaving";

const Index = () => {
  const navigate = useNavigate();
  const [stage, setStage] = useState<Stage>("idle");

  const handleOpen = () => {
    if (stage !== "idle") return;
    setStage("playing_video");
  };

  const handleVideoComplete = () => {
    setStage("transition_to_blue");

    // Navigate only after the blue overlay has fully faded in (match duration-1000 = 1000ms)
    // Add a small buffer so the overlay is truly opaque before route change
    setTimeout(() => {
      setStage("leaving");
      navigate("/boda");
    }, 1100);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black">

      {/* 1. Base Layer: Main Cover Image */}
      <div
        onClick={handleOpen}
        className={`absolute inset-0 cursor-pointer transition-opacity duration-1000 ${
          stage === "idle" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <img
          src={waxSeal}
          alt="Wax seal invitation cover"
          className="h-full w-full object-cover"
        />
        <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.3em] uppercase text-sky-900 font-bold animate-pulse">
          Tap to open
        </p>
      </div>

      {/* 2. Video Layer — stays visible during transition_to_blue so the overlay fades over it */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-[1500ms] ${
          stage === "playing_video" || stage === "transition_to_blue"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {stage !== "idle" && stage !== "leaving" && (
          <video
            src={introVideo}
            autoPlay
            playsInline
            onEnded={handleVideoComplete}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 3. Blue Envelope Fade Overlay — fades IN over the video, then we navigate */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 z-50 pointer-events-none ${
          stage === "transition_to_blue" || stage === "leaving" ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "#9bc3d3" }}
      />

    </main>
  );
};

export default Index;