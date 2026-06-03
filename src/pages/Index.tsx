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
    // 1. First trigger the fade to light blue
    setStage("transition_to_blue");
    
    // 2. Allow time for the light blue transition to completely cover the screen smoothly
    setTimeout(() => {
      setStage("leaving");
      navigate("/boda");
    }, 1200); // 1.2 seconds of smooth blue screen display
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

      {/* 2. Immersive Video Layer: Displays slowly (1500ms transition) */}
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-[1500ms] ${
          stage === "playing_video" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {stage !== "idle" && stage !== "transition_to_blue" && stage !== "leaving" && (
          <video
            src={introVideo}
            autoPlay
            playsInline
            onEnded={handleVideoComplete}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* 3. Smooth Light Blue Transition Layer (#9bc3d3) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 z-50 pointer-events-none ${
          stage === "transition_to_blue" || stage === "leaving" ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "#9bc3d3" }} // Using your new soft ice blue color palette value
      />

    </main>
  );
};

export default Index;