import waxSeal from "@/assets/wax-seal.jpg";

const Index = () => {
  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    // Intro skip — placeholder for future main site route
    console.log("Skip intro");
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Hero background image */}
      <img
        src={waxSeal}
        alt="Wax seal with E & D monogram on cream envelope"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Centered branding overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-serif-display italic text-primary text-lg md:text-xl tracking-wide translate-y-16 md:translate-y-24">
          The Digital Yes
        </p>
      </div>

      {/* Skip link */}
      <a
        href="#main"
        onClick={handleSkip}
        className="absolute bottom-6 right-6 md:bottom-8 md:right-10 text-[10px] md:text-xs tracking-[0.3em] text-foreground/70 hover:text-foreground transition-colors"
      >
        SALTAR
      </a>
    </main>
  );
};

export default Index;
